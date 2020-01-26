import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import TipManager from "./TipManagerCB";
import DragonCompoent from "./DragonCompoentCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";

import SlimeSprinkle from "./SlimeSprinkleCB";

import DataConfig from "./DataConfigCB";


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
export default class PullController extends cc.Component {

    actionNode:cc.Node = null;
    index: string = null;
    
    start () {
        let color = DataConfig.getInstance().getColors();
        let index = DataConfig.getInstance().getIndex();
        if (!color) {
            color = 'blue';
        }
        if (!index) {
            index = '7';
        }
        this.index = index;
        this.dynamicCreate(color);
        let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
         btn_home.zIndex = 100;
         let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
         btn_moregame.zIndex = 100;
         let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
         btn_back.zIndex = 100;
         let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
         btn_next.zIndex = 100;
    }
    _tempNodes:cc.Node[] = [];
    //更换龙骨文件
    _armatureDisplay:dragonBones.ArmatureDisplay = null;
    dynamicCreate (colorName:string) {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        this._armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let self = this;
        cc.loader.loadRes(`cakebatter/SlimePull/${colorName}/unicornSlimeRoll_ske`, dragonBones.DragonBonesAsset, (err, res) => {
           
            if (err) cc.error(err);
            cc.loader.setAutoReleaseRecursively(res, true);
            self._armatureDisplay.dragonAsset = res;
            cc.loader.loadRes(`cakebatter/SlimePull/${colorName}/unicornSlimeRoll_tex`, dragonBones.DragonBonesAtlasAsset, (err, res) => {
                
                if (err) {
                    console.log(err + "");
                    return;

                };
                cc.loader.setAutoReleaseRecursively(res, true);
                self._armatureDisplay.dragonAtlasAsset = res;
                self._armatureDisplay.armatureName = 'Armature';  
                self.addHandCm();

            });
        });
        // self.addHandCm();
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
        let slimel_0 =  _armature.getBone("slimel0");
        let slimer_0 =  _armature.getBone("slimer0");

        //添加颗粒
        for (let i = 0; i <= 5; i++){
            console.log(i);
            
            let motion2_slime= _armature.getSlot("motion" + i + "_slime");
          
            motion2_slime.displayIndex = -1;
            let motion2_slime1 = _armature.getSlot("motion" + i + "_slime1");
            if (motion2_slime1) {
                motion2_slime1.displayIndex = -1;
                console.log(motion2_slime1);
                
            }

            if(i == 0){
                motion2_slime.displayIndex = 0;
                motion2_slime1.displayIndex = 0;
            }

            let factory = dragonBones.CCFactory.getInstance(); 
            //显示具体的插槽
            factory.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion" + i + "_slime1", this.index, motion2_slime1);
            
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

                
                cc.loader.loadRes("sound/lachang", cc.AudioClip, function (err, audio) {
                    
                    if(err){
                        console.log(err + "");
                        return;
                        
                    }
                    cc.loader.setAutoReleaseRecursively(audio, true);
                    
                    self._loopSound = cc.audioEngine.playEffect(audio, false);

                    setTimeout(function () {
                        self._loopSound = -1;
                    }, 1000);

                    console.log('Pulling' + self._loopSound);
                });
                
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

            this.actionNode.runAction(cc.sequence(cc.delayTime(1.6 * ( i + 1 )), cc.callFunc(function () {
               
                
                TipManager.getInstance().jumpTips();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == 5) {
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                    return;
                }
                

                let motion1_slime = _armature.getSlot("motion" + i + "_slime");
                let motion2_slime = _armature.getSlot("motion" + (i + 1) + "_slime");
                if(motion1_slime)
                motion1_slime.displayIndex = -1;

                if(motion2_slime)
                    motion2_slime.displayIndex = 0;

                let motion1_slime1 = _armature.getSlot("motion" + i + "_slime1");
                let motion2_slime1 = _armature.getSlot("motion" + (i + 1)  + "_slime1");
                
                if(motion1_slime1)
                motion1_slime1.displayIndex = -1;

                if(motion2_slime1)
                    motion2_slime1.displayIndex = 0;

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

    touchNextBtn() {
        TransitionScene.changeScene('clickSlimeCB');
    }
    touchBackBtn() {
        TransitionScene.changeScene('kneadSlimeCB');
    }

}
