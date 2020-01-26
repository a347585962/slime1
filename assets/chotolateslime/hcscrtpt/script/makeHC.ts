import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";
import DragonCompoent from "./DragonCompoentHC";
import TipManager from "./TipManagerHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";

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
export default class make extends cc.Component {

    @property({type:cc.AudioClip})
    lachang:cc.AudioClip;
    actionNode:cc.Node = null;

    start () {

        this.dynamicCreate();
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // CocosHelper.showBackOut(btn_back, CocosHelper.ShowDirection.show_from_left);
    }

    //更换龙骨文件
    dynamicCreate () {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let self = this;
        self.addHandCm();
        // cc.loader.loadRes('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, (err, res) => {
        //     if (err) cc.error(err);
        //     _armatureDisplay.dragonAsset = res;
        //     cc.loader.loadRes('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, (err, res) => {
        //         if (err) cc.error(err);
        //         _armatureDisplay.dragonAtlasAsset = res;
        //         _armatureDisplay.armatureName = 'Armature';

                
        //     });
        // });
    }

    private showPartic = -1;
    addHandCm(){

        this.actionNode = new cc.Node();
        cc.Canvas.instance.node.addChild(this.actionNode);

        //设置左手 右手
        let array = ["left_hand0", "right_hand0"];

        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
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


        for(let i = 1;i <= 5; i++){
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
        }
        let self = this;


        
        cc.find('Canvas').on('PullTouch', function (arg1, arg2, arg3) {
            cc.find('Canvas/arrow_right').active = false;
            cc.find('Canvas/arrow_left').active = false;
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

    startAction(){
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();;
        for(let i = 0; i < 6; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(3 * ( i + 1 )), cc.callFunc(function () {
               
                
                TipManager.getInstance().jumpTips();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if(i == 5){
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1)));
                    return;
                }
                

                let motion1_slime = _armature.getSlot("motion" + i + "_slime");
                let motion2_slime = _armature.getSlot("motion" + (i + 1) + "_slime");
                motion2_slime.displayIndex = 0;
                motion1_slime.displayIndex = -1;

            })));

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

    touchNextBtn() {
        TransitionScene.changeScene('clickSlimeHC');
    }
    touchBackBtn() {
        TransitionScene.changeScene('makeSculpeyHC');
    }

    // update (dt) {}
}
