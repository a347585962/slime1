
import MyMixComponent from "./MyMixComponentFS";

import { CocosHelper, MyCocosHelper } from "./MyCocosHelperFS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import DragEventListener, { DragEventType } from "../common/Script/codebase/SpriteDrag/DragEventListenerFS";
import EventListener from "../common/Script/codebase/EventListenerFS";



// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyBlenderMix extends cc.Component {

    @property({type:[cc.SpriteFrame]})
    mixBlenderAnimation:cc.SpriteFrame[] = [];

    @property({type:cc.Node})
    mixLayer:cc.Node = null;
    @property({type:MyMixComponent})
    mixCom:MyMixComponent = null;
    @property({type:cc.Node})
    bowlUp:cc.Node = null;
    @property(cc.Node)
    par:cc.Node = null;
    private _drag:SpriteDrag = null;
    private orignalFrame:cc.SpriteFrame = null;
    private _blendaction:cc.FiniteTimeAction = null;
    private _mixAction:cc.FiniteTimeAction = null;
    start () {
        if(this.mixLayer == null){
            this.mixLayer = MyCocosHelper.findNode(cc.Canvas.instance.node,"mixLayer");
        }
        if(this.mixLayer != null && this.mixCom == null){
            this.mixCom = this.mixLayer.getComponent(MyMixComponent);
        }
        if(this.bowlUp == null){
            this.bowlUp = MyCocosHelper.findNode(cc.Canvas.instance.node,"bowlUp");
        }

        if(this._drag == null){
            this._drag = this.getComponent(SpriteDrag);
        }
        if(this._drag != null){
            let funNames:string[] = ["moveBlender","touchUpBlender","touchUpBlender"];
            let eventType:DragEventType[] = [DragEventType.Draging,DragEventType.TouchCancle,DragEventType.TouchEnd];
            for(let i =0;i< funNames.length;i++){
                this._drag.eventTouchs.push(new DragEventListener(this,funNames[i],eventType[i]));
            }
        }

        if(this.mixCom != null){
            this.mixCom.mixLis.push(new EventListener(this,"mixEnd",MyMixComponent.MIXEND));
        }
        
    }

    
    private startBlendAction(){
        if(this._blendaction == null){
            let sp = this.getComponent(cc.Sprite);
        if(sp != null && this.mixBlenderAnimation.length != 0){
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

        if(this.mixLayer != null&& this._mixAction == null){
           let s1 = cc.scaleTo(0.7,1,0.95);
           let s2 = cc.scaleTo(0.7,0.95,1);
            //let s3 = cc.scaleTo(0.2,1.0,1.0);
           this._mixAction = cc.repeatForever(cc.sequence(s1,s2));
           this.mixLayer.runAction(this._mixAction);
        }
    }
    private stopBlendAction(){

        if(this._blendaction != null && this.mixBlenderAnimation.length != 0){
            this.node.stopAction(this._blendaction);
            this._blendaction = null;
            
            let sp = this.getComponent(cc.Sprite);
            if(sp&&this.orignalFrame){
                sp.spriteFrame = this.orignalFrame;
            }
        }
        if(this.mixLayer != null&& this._mixAction != null){
            this.mixLayer.stopAction(this._mixAction);
            this._mixAction = null;
        }

    }

    moveBlender(_event:cc.Event.EventTouch,_drag:SpriteDrag){
        if(_drag.getInTargetIndex() != -1){
            if(this.bowlUp != null){
                this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()-1);
            }
            if(this.mixCom != null){
                this.mixCom.startMix();
             
            }
            if(this.par!= null){
                this.par.active = true;
            }
           this.startBlendAction();
        }else {
            this.touchUpBlender();
            
        }
    }

    touchUpBlender(){
        if(this.bowlUp != null){
            this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()+1);
        }
        if(this.mixCom != null){
            this.mixCom.stopMix();
        }
        if(this.par!= null){
            this.par.active = false;
        }
        this.stopBlendAction();
    }

    mixEnd(){
        if(this._blendaction != null){
            this.node.stopAction(this._blendaction);
            let sp = this.getComponent(cc.Sprite);
            if(sp&&this.orignalFrame){
                sp.spriteFrame = this.orignalFrame;
            }
            this._blendaction = null;
        }
        if(this.par != null)
        {
            this.par.active = false;
        }
        if(this.mixLayer != null){
            if(this._mixAction != null){
                this.mixLayer.stopAction(this._mixAction);
            }
            this._mixAction = null;
            this.mixLayer.runAction(cc.scaleTo(0.2,1,1));
        }
        if(this.bowlUp != null){
            this.node.setSiblingIndex(this.bowlUp.getSiblingIndex()+1);
        }
         if(this._drag){
             this._drag.enabled = false;
         }
    }
}
