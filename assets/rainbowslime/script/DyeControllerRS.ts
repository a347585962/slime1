import IconItem from "../common/Script/IconItemRS";
import MoveIn from "../common/Script/MoveInRS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragRS";
import HandTouchEvent from "./HandTouchEventRS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRS";
import DragonCompoent from "./DragonCompoentRS";
import TipManager from "./TipManagerRS";
import { dragonBoneScaleTo } from "./DragonBoneActionsRS";
import TransitionScene from "../common/Script/codebase/TransitionSceneRS";

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
export default class DyeController extends cc.Component {
    actionNode: cc.Node = null;
    dradonNode: cc.Node = null;
    slimeNode: cc.Node = null;
    @property({type:cc.AudioClip})
    lachang:cc.AudioClip;
    onLoad() {
        this.init();
    }
    init() {
        this.node.getChildByName('colorBlue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('colorBlue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('colorYellow').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('colorYellow').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('colorPink').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('colorPink').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
       
    }
    colorTouchStart() {
        this.node.getChildByName('finger1').active = false;
    }
    colorTouchEnd(a,b,c,data) {
        this.node.getChildByName(`color${data}`).getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName(`color${data}`).runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(-15, 165))),
            cc.callFunc(function () {
                cc.find(`Canvas/color${data}/coloring`).active = false;
                cc.find(`Canvas/color${data}/coloring_fall`).active = true;
                cc.find(`Canvas/color${data}/fallColor`).active = true;
                cc.find(`Canvas/color${data}/fallColor`).getComponent(cc.AudioSource).play();
                cc.find(`Canvas/slime${data}/slime0/color`).runAction(cc.scaleTo(3,1))
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                cc.find(`Canvas/color${data}/fallColor`).getComponent(cc.AudioSource).stop();
                cc.find(`Canvas/color${data}/fallColor`).active = false;
                cc.find(`Canvas/slime${data}`).runAction(cc.moveTo(0.5, cc.v2(0, 0)));
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('hand').active = true;
                this.node.getChildByName('hand').opacity = 0;
                this.node.getChildByName('hand').getComponent(MoveIn).doShowAction();
                this.node.getChildByName('hand').getComponent(MoveIn).actionCallBack = function () {
                    this.node.getChildByName('hand').getComponent(HandTouchEvent).init(cc.find(`Canvas/slime${data}/slime0`));
                    this.node.getChildByName('finger').active = true;
                }.bind(this)
            }.bind(this))
            ))
    }
    mixFinish(a, b, data) {
        TipManager.getInstance().playAudioEffect();
        this.dradonNode = cc.find(`Canvas/slime${data}/dragon`);
        this.slimeNode = cc.find(`Canvas/slime${data}/slime1`);
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').active = false;
        cc.find(`Canvas/slime${data}/slime0`).setScale(1);
        cc.find(`Canvas/slime${data}/slime0`).active = false;
        cc.find(`Canvas/slime${data}/dragon`).active = true;
        this.node.getChildByName('left_hand0').active = true;
        this.node.getChildByName('left_hand0').getComponent(DragonCompoent).initListner();
        this.node.getChildByName('left_hand1').active = true;
        this.node.getChildByName('right_hand0').active = true;
        this.node.getChildByName('right_hand0').getComponent(DragonCompoent).initListner();
        this.node.getChildByName('right_hand1').active = true;
        this.addHandCm();

    }
    mixFinishBlue() {
        TipManager.getInstance().playAudioEffect();
        this.slimeNode.stopAllActions();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').active = false;
        cc.find('Canvas/slimeBlue/slime1').setScale(1);
        cc.find('Canvas/slimeBlue').runAction(cc.sequence(
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(1),
            cc.moveBy(0.5, cc.v2(1600, 0)),
            cc.callFunc(function () {
                this.node.getChildByName('slimeYellow').getComponent(MoveIn).doShowAction();
                this.node.getChildByName('colorYellow').getComponent(MoveIn).doShowAction();
            }.bind(this))

        ))
    }
    mixFinishYellow() {
        TipManager.getInstance().playAudioEffect();
        this.slimeNode.stopAllActions();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').active = false;
        cc.find('Canvas/slimeYellow/slime1').setScale(1);
        cc.find('Canvas/slimeYellow').runAction(cc.sequence(
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(1),
            cc.moveBy(0.5, cc.v2(1600, 0)),
            cc.callFunc(function () {
                this.node.getChildByName('slimePink').getComponent(MoveIn).doShowAction();
                this.node.getChildByName('colorPink').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    mixFinishPink() {
        TipManager.getInstance().playAudioEffect();
        this.slimeNode.stopAllActions();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').active = false;
        cc.find('Canvas/slimePink/slime1').setScale(1);
        cc.find('Canvas/slimePink').runAction(cc.sequence(
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('fuseSlimeRS');
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


        for (let i = 2; i <= 5; i++){
            console.log(i);
            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// 设置隐藏
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
        }
        let self = this;


        
        cc.find('Canvas').on('PullTouch', function (arg1, arg2, arg3) {
            // cc.find('Canvas/arrow_right').active = false;
            // cc.find('Canvas/arrow_left').active = false;
            // console.log('Pulling');
            console.log(self._loopSound);
            // cc.audioEngine.stopAllEffects();
            cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;

        });

        cc.find('Canvas').on('Pulling', function (arg1, arg2, arg3) {
            // console.log('Pulling');
            
            cc.director.getActionManager().resumeTarget(self.actionNode);

            self.showParticle();
            if(self._loopSound == -1){

                self._loopSound = cc.audioEngine.playEffect(self.lachang, false);
                setTimeout(function () {
                    self._loopSound = -1;
                }, 1500);   
            }

        });
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
            console.log(self._loopSound);
            // cc.audioEngine.stopAllEffects();
            // cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;
            self.hideParticle();
        });
        
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
        for(let i = 1; i < 6; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(2 * ( i + 1 )), cc.callFunc(function () {
               
                
                TipManager.getInstance().playAudioEffect();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == 5) {
                    this.hideParticle();
                    let slime0 = _armature.getBone('slimel0');
                    let slimeScale0 = dragonBoneScaleTo(0.5,0.4,1);
                    slimeScale0.setScaleBone(slime0);
                    this.node.runAction(slimeScale0);
                    let slime1 = _armature.getBone('slimer0');
                    let slimeScale1 = dragonBoneScaleTo(0.5,0.4,1);
                    slimeScale1.setScaleBone(slime1);
                    this.node.runAction(slimeScale1);
                    left_hand0.getComponent(DragonCompoent).destroyTouchEvent();
                    right_hand0.getComponent(DragonCompoent).destroyTouchEvent();
                    this.removeHandCm();
                    left_hand0.runAction(cc.moveTo(0.5, -150, -270));
                    left_hand1.runAction(cc.moveTo(0.5, -150, -270));
                    right_hand0.runAction(cc.moveTo(0.5, 150, -270));
                    right_hand1.runAction(cc.moveTo(0.5, 150, -270));
                    this.node.runAction(cc.sequence(
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            left_hand0.setPosition(cc.v2(-270, -270));
                            left_hand1.setPosition(cc.v2(-270, -270));
                            right_hand0.setPosition(cc.v2(270, -270));
                            right_hand1.setPosition(cc.v2(270, -270));
                            left_hand0.active = false;
                            left_hand1.active = false;
                            right_hand0.active = false;
                            right_hand1.active = false;
                            dragon.active = false;
                            this.slimeNode.active = true;
                            this.node.getChildByName('hand').active = true;
                            this.node.getChildByName('hand').getComponent(HandTouchEvent).init(this.slimeNode);
                            this.node.getChildByName('finger').active = true;
                        }.bind(this))
                    ))
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
    backLastScence() {
        TransitionScene.changeScene('splitSlimeRS');
    }

}
