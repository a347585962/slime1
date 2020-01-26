import HandMoveEvent from "./HandMoveEvent";
import HandTouchEvent from "./HandTouchEventRP";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRP";
import DragonCompoent from "./DragonCompoentRP";
import { dragonBoneScaleTo } from "./DragonBoneActionsRP";
import SlimeTouchEvent from "./SlimeTouchEvent";
import TransitionScene from "../common/Script/codebase/TransitionSceneRP";
import TipManager from "./TipManagerRP";
import MoveIn from "../common/Script/compoent/MoveInRP";
import showLaoding from "../common/Script/ads/showLaodingRP";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragRP";
import MyMoveIn from "./MyMoveInRP";

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
export default class FuseController extends cc.Component {
    actionNode: cc.Node = null;
    dradonNode: cc.Node = null;
    slimeNode: cc.Node = null;
    isPulling: boolean = true;
    color: string = null;
    mixCount: number = 0;
    @property({type:cc.AudioClip})
    lachang: cc.AudioClip;
    nameList: string[] = null;
    onLoad() {
        cc.find('Canvas/blue').getComponent(MyMoveIn).actionCallBack = function () {
            this.activateSpriteDrag();
            cc.find('Canvas/tipMove').active = true;
        }.bind(this);
        this.nameList = ['blue','pink','green','yellow']
    }
    slimeTouchStart(event) {
       
        let node = event.target;
        this.sleepSpriteDrag(node.name);
    }
    slimeTouchEnd(event) {
        cc.find('Canvas/tipMove').active = false;
        let node = event.target;
        node.setScale(1);
        this.sleepSpriteDrag();
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(0.5, cc.v2(0, -100)), cc.scaleTo(0.5, 1)),
            cc.callFunc(function () {
                cc.find(`Canvas/slime_${node.name}`).active = true;
                this.color = node.name;
                node.active = false;
                cc.find('Canvas/hand').active = true;
                cc.find('Canvas/hand').setPosition(cc.v2(0, -500));
                cc.find('Canvas/hand').runAction(cc.sequence(
                    cc.spawn(cc.moveTo(0.5, cc.v2(0, -300)),cc.scaleTo(0.5,0.8)),
                    cc.callFunc(function () {
                        cc.find('Canvas/hand').getComponent(HandTouchEvent).init(cc.find(`Canvas/slime_${node.name}`));
                        cc.find('Canvas/finger').active = true;
                    }.bind(this))
                ))
            }.bind(this))
        ))  
    }
    sleepSpriteDrag(name?:string) {
        this.nameList.forEach(a => {
            if (name) {
                if (a == name) {
                    cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = true;
                } else {
                    cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = false;
                }
            } else {
                cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = false;
            }
        })
    }
    activateSpriteDrag() {
        this.nameList.forEach(a => {
            cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = true;
        })
    }
    mixFinish(event) {
        TipManager.getInstance().jumpTips();
        let node = event.node;
        cc.find('Canvas/hand').getComponent(HandTouchEvent).destroyTouchEvent();
        cc.find('Canvas/hand').getComponent(cc.Animation).setCurrentTime(0);
        cc.find('Canvas/hand').getComponent(cc.Animation).stop();
       
        cc.find('Canvas/hand').active = false;
        let pos = node.parent.convertToNodeSpaceAR(cc.find(`Canvas/fuseSlime/${this.color}`).convertToWorldSpaceAR(cc.v2(0, 0)));
        node.runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, pos)),
            cc.callFunc(function () {
                cc.find(`Canvas/fuseSlime/${this.color}`).active = true;
                this.activateSpriteDrag();
                node.active = false;
                this.mixCount = this.mixCount + 1;
                if (this.mixCount == 4) {
                    cc.find('Canvas/fuseSlime').runAction(cc.sequence(
                        cc.spawn(cc.rotateTo(0.5, 90), cc.moveTo(0.5, cc.v2(0,0))),
                        cc.callFunc(function () {
                            cc.find('Canvas/dragon').active = true;
                            this.dradonNode = cc.find('Canvas/dragon');
                            cc.find('Canvas/left_hand0').active = true;
                            cc.find('Canvas/left_hand1').active = true;
                            cc.find('Canvas/right_hand0').active = true;
                            cc.find('Canvas/right_hand1').active = true;
                            this.node.getChildByName('arrow_left').active = true;
                            this.node.getChildByName('arrow_right').active = true;
                            this.addHandCm();
                            cc.find('Canvas/fuseSlime').active = false;
                        }.bind(this))
                    ))
                }
            }.bind(this))
        ))

        
        

    }
    addHandCm(){

        this.actionNode = new cc.Node();
        cc.Canvas.instance.node.addChild(this.actionNode);

        //设置左手 右手
        let array = ["left_hand0", "right_hand0"];

        let dragon = this.dradonNode;
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();;

        //设置手的逻辑
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let left_hand = CocosHelper.findNode(cc.Canvas.instance.node, element);
            let dragCm = left_hand.getComponent(DragonCompoent);
            let startL = left_hand.getPosition();//.add(element == "left_hand0" ? cc.v2(40,0) : cc.v2(-40,0));
            let endL = startL.add(cc.v2());
            
            endL.x = left_hand.getParent().convertToNodeSpaceAR(element == "left_hand0" ? cc.v2(0, 0) : cc.v2(cc.view.getVisibleSize().width, 0)).x;
            
            dragCm.setStartPos(startL);
            dragCm.setEndPos(endL);
            
            let slime =  element == "left_hand0" ? "slimel0" : "slimer0";
            let slimel0:dragonBones.Bone = _armature.getBone(slime);
            dragCm.setMoveBone(slimel0);
        }

        let motion_slime = _armature.getSlot("motion0_slime");
        motion_slime.displayIndex = 0;// = false;
        for (let i = 1; i <= 6; i++){
            console.log(i);
            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
        }
        let self = this;


        
        cc.find('Canvas').on('PullTouch', function (arg1, arg2, arg3) {
            this.node.getChildByName('arrow_left').active = false;
            this.node.getChildByName('arrow_right').active = false;
            // console.log('Pulling');
            console.log(self._loopSound);
            // cc.audioEngine.stopAllEffects();
            cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;

        }.bind(this));

        cc.find('Canvas').on('Pulling', function (arg1, arg2, arg3) {
            // console.log('Pulling');
            self.isPulling = true;
            cc.director.getActionManager().resumeTarget(self.actionNode);

            self.showParticle();
            if(self._loopSound == -1){

                self._loopSound = cc.audioEngine.playEffect(self.lachang, false);
                setTimeout(function () {
                    self._loopSound = -1;
                }, 1500);   
            }

        }.bind(this));
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            self.isPulling = false;
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
            console.log(self._loopSound);
            // cc.audioEngine.stopAllEffects();
            // cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;
            self.node.runAction(cc.sequence(
                cc.delayTime(2),
                cc.callFunc(function () {
                    cc.log(self.isPulling);
                    if (!self.isPulling) {
                        self.hideParticle();
                    }
                    
                })
            ))
        }.bind(this));
        
        this.startAction();

    }
    removeHandCm() {
        cc.find('Canvas').off('PullTouch');
        cc.find('Canvas').off('Pulling');
        cc.find('Canvas').off('PullEnd');
    }

    startAction(){
        let dragon = this.dradonNode;
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();;
        for(let i = 0; i < 7; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(3 * i), cc.callFunc(function () {
                TipManager.getInstance().jumpTips();
                let left_hand0 = cc.find('Canvas/left_hand0');
                let right_hand0 =cc.find('Canvas/right_hand0');
                let left_hand1 =cc.find('Canvas/left_hand1');
                let right_hand1 =cc.find('Canvas/right_hand1');

                if (i == 6) {
                    this.hideParticle();
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                     let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                     btn_next.active = true;
                     btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                     return;
                }
                

                let motion1_slime = _armature.getSlot("motion" + i + "_slime");
                let motion2_slime = _armature.getSlot("motion" + (i + 1) + "_slime");
                console.log("motion2_slime" +  (i + 1) );
                
                motion2_slime.displayIndex = 0;
                console.log("motion1_slime" + i);
                motion1_slime.displayIndex = -1;

            }.bind(this))));

        }
        cc.director.getActionManager().pauseTarget(this.actionNode);
        
    }
    private indexPNum = 0;
    _loopSound = -1;
    _showpartic = -1;
    showParticle() {
        
        this.indexPNum = this.indexPNum + 1;
        let heartFullColor = CocosHelper.findNode(cc.Canvas.instance.node, "heartFullColor");

        if(this._showpartic != -1)
            return;

        this._showpartic = 1;
        let p = heartFullColor.getComponent(cc.ParticleSystem);
        heartFullColor.active = true;
        p.resetSystem();
        
    }
    hideParticle(){
        this._showpartic = -1;
        let heartFullColor = CocosHelper.findNode(cc.Canvas.instance.node, "heartFullColor");
        // heartFullColor.active = false;

        let p = heartFullColor.getComponent(cc.ParticleSystem);
        p.stopSystem();
    }
    enterNextScence() {
        // showLaoding.getInstance().loadingDoneCallback = function () {
        //     showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('coilSlimeRP',7);
        // }.bind(this);
        // showLaoding.getInstance().showAds('prefab/loadingRP','prefab/loading1',false);
      
    }
}
