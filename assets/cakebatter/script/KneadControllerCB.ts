import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import TipManager from "./TipManagerCB";
import DragonCompoent from "./DragonCompoentCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import DataConfig from "./DataConfigCB";
import KneadHandTouch from "./KneadHandTouchCB";

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
export default class KneadController extends cc.Component {

    actionNode: cc.Node = null;
    color: string = null;
    index: string = null;
    foam: string = null;
    start () {
        let color = DataConfig.getInstance().getColors();
        let foam = DataConfig.getInstance().getFoam();
        let index = DataConfig.getInstance().getIndex();

        if (!color) {
            color = 'blue';
        }
        if (!foam) {
            foam = 'foam9';
        }
        if (!index) {
            index = '9';
        }
        this.color = color;
        this.foam = foam;
        this.index = index;
        this.dynamicCreate(color);
    }
    showSlime(color: string) {
        let soundPath = ["sound/fatanstic.mp3", "sound/Nice.mp3", "sound/great.mp3"];
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.delayTime(5),
            cc.callFunc(function () {
                let index = Math.floor(Math.random() * 3);
                console.log(index);
                cc.loader.loadRes(soundPath[index] + "", cc.AudioClip,function (err, audio) {
                    if(err)
                        return;
                    cc.audioEngine.playEffect(audio, false);
                    cc.loader.setAutoReleaseRecursively(audio, true);
                })
            }.bind(this))
        )));
        cc.director.getActionManager().pauseTarget(this.node);
        cc.loader.loadRes(`cakebatter/image/slime/slime0_${this.index}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/handLeft/slime/foam').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/handRight/slime/foam').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/slime/slime_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/handLeft/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/handRight/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/handLeft').active = true;
            cc.find('Canvas/handLeft').setPosition(cc.v2(-220, -40));
            cc.find('Canvas/handLeft').runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(-270, -40)),
                cc.callFunc(function () {
                    cc.find('Canvas/handLeft/finger').active = true;
                    cc.find('Canvas/handLeft').getComponent(KneadHandTouch).init();
                }.bind(this))
            ))
            cc.find('Canvas/handRight').active = true;
            cc.find('Canvas/handRight').setPosition(cc.v2(220, -40));
            cc.find('Canvas/handRight').runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(270, -40)),
                cc.callFunc(function () {
                    cc.find('Canvas/handRight/finger').active = true;
                    cc.find('Canvas/handRight').getComponent(KneadHandTouch).init();
                }.bind(this))
            ))
            cc.find('Canvas/dragon').active = false;
            cc.find('Canvas/left_hand0').active = false;
            cc.find('Canvas/left_hand1').active = false; 
            cc.find('Canvas/right_hand0').active = false;
            cc.find('Canvas/right_hand1').active = false;
            cc.find('Canvas/arrow_right').active = false;
            cc.find('Canvas/arrow_left').active = false;
        }.bind(this))
       
    }

    //更换龙骨文件
    dynamicCreate (colorName:string) {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let self = this;
        cc.loader.loadRes(`cakebatter/SlimePinch/${colorName}/unicornSlimeRoll_ske`, dragonBones.DragonBonesAsset, (err, res) => {
            if (err) cc.error(err);
            _armatureDisplay.dragonAsset = res;
            cc.loader.setAutoReleaseRecursively(res, true);
            cc.loader.loadRes(`cakebatter/SlimePinch/${colorName}/unicornSlimeRoll_tex`, dragonBones.DragonBonesAtlasAsset, (err, res) => {
                cc.loader.setAutoReleaseRecursively(res, true);
                if (err) cc.error(err);
                _armatureDisplay.dragonAtlasAsset = res;
                _armatureDisplay.armatureName = 'Armature';  
                self.addHandCm();

            });
        });
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
        let motion_slime = _armature.getSlot("motion1_slime");
        motion_slime.displayIndex = 0;// = false;
        let motion2_slime1 = _armature.getSlot("motion1_slime1");
        motion2_slime1.displayIndex = 0;
        let factory = dragonBones.CCFactory.getInstance(); 
        //显示具体的插槽
        factory.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion1_slime1", this.index, motion2_slime1);

        //添加颗粒
        for (let i = 2; i <= 3; i++){
            // console.log(i);
            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            let motion2_slime1 = _armature.getSlot("motion" + i + "_slime1");
            if(motion2_slime1)
                motion2_slime1.displayIndex = -1;

            let factory1 = dragonBones.CCFactory.getInstance(); 
            //显示具体的插槽
            factory1.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion" + i + "_slime1", this.index, motion2_slime1);
            
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
                    cc.loader.setAutoReleaseRecursively(audio, true);
                    
                    if(err){
                        console.log(err + "");
                        return;
                        
                    }
                    
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
        for(let i = 1; i < 4; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(0.3 * ( i + 1 )), cc.callFunc(function () {
               
                
                //TipManager.getInstance().jumpTips();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == 3) {
                    this.showSlime(this.color);
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
        TransitionScene.changeScene('pullSlimeCB');
    }
    touchBackBtn() {
        TransitionScene.changeScene('stickBeadCB');
    }

}
