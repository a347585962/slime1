import HandMoveEvent from "./HandMoveEventGL";
import HandTouchEvent from "./HandTouchEventGL";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";
import DragonCompoent from "./DragonCompoentGL";
import { dragonBoneScaleTo } from "./DragonBoneActionsGL";
import SlimeTouchEvent from "./SlimeTouchEventGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import TipManager from "./TipManagerGL";
import MoveIn from "../common/Script/compoent/MoveInGL";
import showLaoding from "../common/Script/ads/showLaodingGL";

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
    @property({type:cc.AudioClip})
    lachang:cc.AudioClip;
    onLoad() {
        this.node.getChildByName('slime_blue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('handLeft').runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(-300, 0)),
                cc.callFunc(function () {
                    this.node.getChildByName('handLeft').getComponent(HandMoveEvent).init();
                    this.node.getChildByName('arrow_left').active = true;
                }.bind(this))
            ));
            this.node.getChildByName('handRight').runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(300, 0)),
                cc.callFunc(function () {
                    this.node.getChildByName('handRight').getComponent(HandMoveEvent).init();
                    this.node.getChildByName('arrow_right').active = true;
                }.bind(this))
            ));
            
        }.bind(this);
    }
    moveFinish(leftFinish: boolean, rightFinish: boolean) {
        if (leftFinish && rightFinish) {
            cc.find('Canvas/finger').active = true;
            cc.find('Canvas/slime_pink').active = false;
            cc.find('Canvas/slime_blue').active = false;
            cc.find('Canvas/slime_yellow').active = false;
            cc.find('Canvas/handLeft').active = false;
            cc.find('Canvas/handRight').active = false;
            cc.find('Canvas/slime').active = true;
            this.node.getChildByName('hand').active = true;
            this.node.getChildByName('hand').getComponent(HandTouchEvent).init(cc.find('Canvas/slime/slime0')); 
        }
        
    }
    mixFinish() {
        TipManager.getInstance().playAudioEffect();
        this.dradonNode = cc.find('Canvas/slime/dragon');
        this.slimeNode = cc.find('Canvas/slime/slime1');
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').active = false;
        cc.find('Canvas/slime/slime0').setScale(1);
        cc.find('Canvas/slime/slime0').active = false;
        cc.find('Canvas/slime/dragon').active = true;
        this.node.getChildByName('left_hand0').active = true;
        this.node.getChildByName('left_hand1').active = true;
        this.node.getChildByName('right_hand0').active = true;
        this.node.getChildByName('right_hand1').active = true;
        this.node.getChildByName('arrow_left1').active = true;
        this.node.getChildByName('arrow_right1').active = true;
        this.addHandCm();

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


        for (let i = 2; i <= 6; i++){
            console.log(i);
            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
        }
        let self = this;


        
        cc.find('Canvas').on('PullTouch', function (arg1, arg2, arg3) {
            this.node.getChildByName('arrow_left1').active = false;
            this.node.getChildByName('arrow_right1').active = false;
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
        for(let i = 1; i < 7; i++){

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
        showLaoding.getInstance().loadingDoneCallback = function () {
            showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('slapSlimeGL',12);
        }.bind(this);
        showLaoding.getInstance().showAds(false);
      
    }
}
