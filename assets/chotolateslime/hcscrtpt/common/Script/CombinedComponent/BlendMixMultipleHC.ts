import MixComponent from "./MixComponentHC";
import { CocosHelper } from "../codebase/utils/CocosHelperHC";
import SpriteDrag from "../codebase/SpriteDrag/SpriteDragHC";
import DragEventListener, { DragEventType } from "../codebase/SpriteDrag/DragEventListenerHC";
import EventListener from "../codebase/EventListenerHC";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BlendMixMultiple extends cc.Component {

    @property({tooltip:"是否需要旋转"})
    isNeedRotate:boolean = false;

    @property({type:[cc.SpriteFrame]})
    mixBlenderAnimation:cc.SpriteFrame[] = [];

    @property({type:[MixComponent],visible:false})
    private _mixCom:MixComponent[] = [];

    @property({type:[MixComponent]})
    set mixCom(temp:MixComponent[]){
        this._mixCom = temp;
        this._mixActions = [];
        for(let m of this._mixCom){
            m.mixLis.push(new EventListener(this,"mixEnd",MixComponent.MIXEND));
            this._mixActions.push(null);
        }
    }

    get mixCom(){
        return this._mixCom;
    }

    @property({type:cc.Node})
    bowlUp:cc.Node = null;

    private _drag:SpriteDrag = null;
    private orignalFrame:cc.SpriteFrame = null;
    private _blendaction:cc.FiniteTimeAction = null;
    private _mixActions:cc.FiniteTimeAction[]=[];
    private mixAudio:cc.AudioSource = null;
    start () {
        if(this._mixActions.length != this.mixCom.length){
            this._mixActions = [];
        for(let m of this._mixCom){
            m.mixLis.push(new EventListener(this,"mixEnd",MixComponent.MIXEND));
            this._mixActions.push(null);
        }
        }
        if(this.mixAudio != null){
            this.mixAudio = this.getComponent(cc.AudioSource);
        }

        if(this._drag == null){
            this._drag = this.getComponent(SpriteDrag);
        }

        if(this._drag != null){
            let funNames:string[] = ["moveBlender","touchUpBlender","touchUpBlender"];
            let eventType:DragEventType[] = [DragEventType.Draging,DragEventType.TouchCancle,DragEventType.TouchEnd];
            for(let i =0;i< funNames.length;i++){
                this._drag .eventTouchs.push(new DragEventListener(this,funNames[i],eventType[i]));
            }
        }

        
    }

    
    private startBlendAction(index:number){
        if(this.mixAudio != null && !this.mixAudio.isPlaying)
            this.mixAudio.play();
        if(this._blendaction == null){
            let sp = this.getComponent(cc.Sprite);
        if(sp != null){
            this.orignalFrame = sp.spriteFrame;
           let blenderMix :cc. FiniteTimeAction[] = [];
           for(let s of this.mixBlenderAnimation){
               blenderMix.push(cc.callFunc(function(){
                   sp.spriteFrame = s;
               }));
               blenderMix.push(cc.delayTime(0.15));
           }
           this._blendaction = cc.repeatForever(cc.sequence(blenderMix));
           this.node.runAction(this._blendaction);
          }
        }
        let mixLayer = this.mixCom[index].node;
        let _mixAction = this._mixActions[index]

        if(mixLayer != null&& _mixAction == null){
            cc.log("run Action "+index);
           let s1 = cc.scaleTo(0.7,1,0.95);
           let s2 = cc.scaleTo(0.7,0.95,1.08);
           if(this.isNeedRotate){
                let se = cc.sequence(s1, s2);
                
                let sp = cc.spawn(se, cc.rotateBy(1.5, Math.random() * 100 + 80));
                _mixAction = cc.repeatForever(sp);
           }else{
                _mixAction = cc.repeatForever(cc.sequence(s1,s2));
           }
            

         //  let s3 = cc.scaleTo(0.2,1.0,1.0);
           //_mixAction = cc.repeatForever(cc.sequence(s1,s2));
           mixLayer.runAction(_mixAction);
           this._mixActions[index] = _mixAction;
        }
    }
    private stopBlendAction(index:number){
        if(this._blendaction != null){
            this.node.stopAction(this._blendaction);
            this._blendaction = null;

            let sp = this.getComponent(cc.Sprite);
            if(sp&&this.orignalFrame){
                sp.spriteFrame = this.orignalFrame;
            }
        }

        if(index == -1){
            for(let i=0;i<this.mixCom.length;i++){
               
                    let mixLayer = this.mixCom[i].node;
                    let _mixAction = this._mixActions[i]
                    if(mixLayer != null&& _mixAction != null){
                        mixLayer.stopAction(_mixAction);
                    }
                    this._mixActions[i] = null;
                    this.mixCom[i].stopMix();
            }
        }else {
            let mixLayer = this.mixCom[index].node;
            let _mixAction = this._mixActions[index]
            if(mixLayer != null&& _mixAction != null){
                mixLayer.stopAction(_mixAction);
            }
            this._mixActions[index] = null;
            this.mixCom[index].stopMix();
        }
       
        
    }

    moveBlender(_event:cc.Event.EventTouch,_drag:SpriteDrag){
        let index = _drag.getInTargetIndex();
        if(index != -1){
            for(let i=0;i<this.mixCom.length;i++){
                if(i != index){
                    this.moveOutLimit(i);
                }
            }
            if(this.bowlUp != null){
                this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()-1);
            }
            this.mixCom[index].startMix();
            this.startBlendAction(index);
        }else {
            this.moveOutLimit(-1);
        }
    }

    touchUpBlender(){
        if(this.mixAudio != null)
        this.mixAudio.stop();
        this.moveOutLimit(-1);
    }

     moveOutLimit(index:number){
        if(this.bowlUp != null){
            this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()+1);
        }
        if(index == -1){
            for(let i=0;i<this.mixCom.length;i++){
                this.mixCom[i].stopMix(); 
             }
        }else {
            this.mixCom[index].stopMix();
        }
       
        this.stopBlendAction(index);
     }

    mixEnd(mixCom:MixComponent){
        if(this.mixAudio != null)
            this.mixAudio.stop();
        if(this._blendaction != null){
            this.node.stopAction(this._blendaction);
            let sp = this.getComponent(cc.Sprite);
            if(sp&&this.orignalFrame){
                sp.spriteFrame = this.orignalFrame;
            }
            this._blendaction = null;
        }
        let mixLayer = mixCom.node;
        let _mixAction = null;
        let index = 0;
        for(;index<this.mixCom.length;index++){
            if(this.mixCom[index] == mixCom){
                _mixAction = this._mixActions[index];
                break;
            }
        }
        if(this._drag != null&& this._drag.targetCollider.length>index ){
            this._drag.targetCollider[index] = null;
        }
        if(mixLayer != null){
            if(_mixAction != null){
                mixLayer.stopAction(_mixAction);
            }
            this._mixActions[index] = null;
            mixLayer.runAction(cc.scaleTo(0.2,1,1));
        }
        if(this.bowlUp != null){
            this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()+1);
        }
       
    }
}
