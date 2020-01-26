import MoveIn from "../common/Script/MoveInCB";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCB";
import HandTouchEvent from "./HandTouchEventCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import DragonCompoent from "./DragonCompoentCB";
import TipManager from "./TipManagerCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
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
export default class StickController extends cc.Component {
    actionNode: cc.Node = null;
    pullFinish: boolean = false;
    initLeftPos: cc.Vec2 = null;
    initRightPos: cc.Vec2 = null;
    color: string = null;
    foam: string = null;
    index: string = null;
    isFirst: boolean = null;
    
    onLoad() {
        this.node.getChildByName('dragon').position = cc.v2(10000, 10000);
        this.node.getChildByName('foam').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('foam').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
            this.node.getChildByName('btn_back').active = true;
        }.bind(this);
        cc.find('box/slime', this.node).getComponent(MoveIn).actionCallBack = function () {
            cc.find('box/slime', this.node).getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.dynamicLoadPicture();
        this.isFirst = true;
    }
    dynamicLoadPicture() {
        let color = DataConfig.getInstance().getColors();
        let foam = DataConfig.getInstance().getFoam();
        let index = DataConfig.getInstance().getIndex();

        if (!color) {
            color = 'blue';
        }
        if (!foam) {
            foam = 'foam3';
        }
        if (!index) {
            index = '3';
        }
        this.color = color;
        this.foam = foam;
        this.index = index;
        cc.loader.loadRes(`cakebatter/image/foam/box_${foam}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/box/box_foam').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/foam1/${foam}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('box/slime/foam1', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/foam0/${foam}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('box/slime/foam0', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        cc.loader.loadRes(`cakebatter/image/foam/${foam}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('foam/beadMask/foam_bead', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))
        if (foam != 'foam9') {
            cc.loader.loadRes(`cakebatter/image/foam/${foam}_fall`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.find('foam/fallBead', this.node).getComponent(cc.ParticleSystem).spriteFrame = spriteFrame;
                cc.find('box/monochromeBead0', this.node).getComponent(cc.ParticleSystem).spriteFrame = spriteFrame;
                cc.find('box/monochromeBead1', this.node).getComponent(cc.ParticleSystem).spriteFrame = spriteFrame;
            }.bind(this))
        }
        cc.loader.loadRes(`cakebatter/image/slime/${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/box/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this))
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        cc.loader.loadRes(`cakebatter/SlimeRoll/${color}/unicornSlimeRoll_ske`, dragonBones.DragonBonesAsset, (err, res) => {
            if(err){
                console.log(err + "");
                return;
                
            }
            cc.loader.setAutoReleaseRecursively(res, true);
         
            _armatureDisplay.dragonAsset = res;
            cc.loader.loadRes(`cakebatter/SlimeRoll/${color}/unicornSlimeRoll_tex`, dragonBones.DragonBonesAtlasAsset, (err, res) => {
                if(err){
                    console.log(err + "");
                    return;
                    
                }
                cc.loader.setAutoReleaseRecursively(res, true);
                _armatureDisplay.dragonAtlasAsset = res;
                _armatureDisplay.armatureName = 'Armature';  
            });
        });
       
    }
    foamTouchStart() {
        this.node.getChildByName('finger1').active = false;
    }
    foamTouchEnd() {
        this.node.getChildByName('foam').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('foam').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(-20, 200))),
            cc.callFunc(function () {
                cc.find('foam/foam0', this.node).active = false;
                cc.find('foam/foam1', this.node).active = false;
                cc.find('foam/foam_fall0', this.node).active = true;
                cc.find('foam/foam_fall1', this.node).active = true;
                if (this.foam == 'foam9') { 
                    cc.find('foam/fallColourBead', this.node).active = true;
                    cc.find('foam/fallColourBead', this.node).getComponent(cc.AudioSource).play();
                    cc.find('box/colourBead0', this.node).active = true;
                } else {
                    cc.find('foam/fallBead', this.node).active = true;
                    cc.find('foam/fallBead', this.node).getComponent(cc.AudioSource).play();
                    cc.find('box/monochromeBead0', this.node).active = true;
                }
               
                cc.find('box/box_foam', this.node).runAction(cc.fadeTo(4, 255));
               
                cc.find('foam/beadMask/foam_bead', this.node).runAction(cc.moveTo(5,cc.v2(-230,250)))
            }.bind(this)),
            cc.delayTime(5),
            cc.callFunc(function () {
                if (this.foam == 'foam9') { 
                    cc.find('foam/fallColourBead', this.node).getComponent(cc.AudioSource).play();
                    cc.find('foam/fallColourBead', this.node).active = false;
                    cc.find('box/colourBead0', this.node).active = false;
                } else {
                    cc.find('foam/fallBead', this.node).getComponent(cc.AudioSource).play();
                    cc.find('foam/fallBead', this.node).active = false;
                    cc.find('box/monochromeBead0', this.node).active = false;
                }
                cc.find('box/slime', this.node).getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(600, 0)))
            ))
    }
    slimeTouchEnd() {
        cc.find('box/slime', this.node).getComponent(SpriteDrag).enabled = false;
        cc.find('box/slime', this.node).runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(0, 0)),
            cc.callFunc(function () {
                cc.find('box/slime', this.node).getComponent(cc.AudioSource).play();
                if (this.foam == 'foam9') { 
                    cc.find('box/colourBead1', this.node).active = true;
                } else {
                    cc.find('box/monochromeBead1', this.node).active = true;
                }
            }.bind(this)),
            cc.scaleTo(0.2, 1.1),
            cc.scaleTo(0.2,1),
            cc.delayTime(1),
            cc.callFunc(function () {
                if (this.foam == 'foam9') { 
                    cc.find('box/colourBead1', this.node).active = false;
                } else {
                    cc.find('box/monochromeBead1', this.node).active = false;
                }
                this.node.getChildByName('box').runAction(cc.spawn(cc.moveTo(0.5, cc.v2(0, 0)),cc.scaleTo(0.5,1)));
                this.node.getChildByName('hand').runAction(cc.sequence(
                    cc.moveTo(0.5, cc.v2(0, -280)),
                    cc.callFunc(function () {
                        this.node.getChildByName('hand').getComponent(HandTouchEvent).init();
                        cc.log(cc.find('box/slime', this.node).scale);
                        this.node.getChildByName('finger').active = true;
                    }.bind(this))
                ));
            }.bind(this))
            ))
    }
    showDragon() {
        cc.find('Canvas/box/slime').active = false;
        cc.find('Canvas/hand').active = false;
        cc.find('Canvas/left_hand0').active = true;
        cc.find('Canvas/left_hand1').active = true; 
        cc.find('Canvas/right_hand0').active = true;
        cc.find('Canvas/right_hand1').active = true;
        cc.find('Canvas/arrow_right0').active = true;
        cc.find('Canvas/arrow_left0').active = true;
        cc.find('Canvas/arrow_right').active = false;
        cc.find('Canvas/arrow_left').active = false;
        if (this.isFirst) {
            this.dynamicCreate();
        } else {
            this.dragonReset();
        }
       
        
    }
    showSlime() {
        cc.find('Canvas/finger').active = true;
        cc.find('Canvas/box/slime').active = true;
        cc.find('Canvas/hand').active = true;
        cc.find('Canvas/hand').getComponent(HandTouchEvent).init();
        cc.find('Canvas/dragon').active = false;
        cc.find('Canvas/left_hand0').active = false;
        cc.find('Canvas/left_hand1').active = false; 
        cc.find('Canvas/right_hand0').active = false;
        cc.find('Canvas/right_hand1').active = false;
        cc.find('Canvas/arrow_right0').active = false;
        cc.find('Canvas/arrow_left0').active = false;
    }
    dragonReset() {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        dragon.active = true;
        this.node.getChildByName('dragon').position = cc.v2(0, 0);
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        let motion_slime = _armature.getSlot("motion1_slime");
        motion_slime.displayIndex = 0;// = false;
        let motion_slime1 = _armature.getSlot("motion1_slime2");
        let factory = dragonBones.CCFactory.getInstance(); 
        factory.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion1_slime2", this.index, motion_slime1);
        motion_slime1.displayIndex = 0;// = false;
        for (let i = 1; i <= 5; i++){
            let motion1_slime1 = _armature.getSlot("motion" + i + "_slime1");
            motion1_slime1.displayIndex = -1;  
        }
        for (let i = 2; i <= 5; i++){
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            let motion2_slime1 = _armature.getSlot("motion" + i + "_slime2");
            motion2_slime1.displayIndex = -1;

            let factory = dragonBones.CCFactory.getInstance(); 
            //显示具体的插槽
            factory.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion" + i + "_slime1", this.index, motion2_slime1);
            
        }
        this.startAction();
    }
    dynamicCreate() {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        dragon.active = true;
        this.node.getChildByName('dragon').position = cc.v2(0, 0);
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let self = this;
        self.addHandCm();
    }

    private showPartic = -1;
    addHandCm(){
        this.actionNode = new cc.Node();
        cc.Canvas.instance.node.addChild(this.actionNode);

        //设置左手 右手
        let array = ["left_hand0", "right_hand0"];

        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        
        this.initLeftPos = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0").getPosition();
        this.initRightPos = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0").getPosition();
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
        for (let i = 1; i <= 5; i++){
            let motion2_slime1 = _armature.getSlot("motion" + i + "_slime2");
            motion2_slime1.displayIndex = -1;  
        }
        let motion_slime = _armature.getSlot("motion1_slime");
        motion_slime.displayIndex = 0;// = false;
        let motion_slime1 = _armature.getSlot("motion1_slime1");
        let factory = dragonBones.CCFactory.getInstance(); 
        factory.replaceSlotDisplay(_armatureDisplay.getArmatureKey(), "Armature", "motion1_slime1", this.index, motion_slime1);
        motion_slime1.displayIndex = 0;// = false;

        for (let i = 2; i <= 5; i++){
            console.log(i);
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            let motion2_slime1 = _armature.getSlot("motion" + i + "_slime1");
            if(motion2_slime1)
                motion2_slime1.displayIndex = -1;

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
            // console.log('Pulling');
            console.log(self._loopSound);
            // cc.audioEngine.stopAllEffects();
            cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;

        });

        cc.find('Canvas').on('Pulling', function (arg1, arg2, arg3) {
            // console.log('Pulling');
            if (!this.pullFinish) {
                let leftPos = cc.find('Canvas/left_hand0').getPosition();
                let rightPos = cc.find('Canvas/right_hand0').getPosition();
                console.log(Math.abs(leftPos.x - this.initLeftPos.x));
                console.log(Math.abs(rightPos.x - this.initRightPos.x));
                let leftRestore = Math.abs(leftPos.x - this.initLeftPos.x)>10;
                let rightRestore = Math.abs(rightPos.x - this.initRightPos.x)>10;
                if (leftRestore) {
                    cc.find('Canvas/arrow_left0').active = false;
                }
                if (rightRestore) {
                    cc.find('Canvas/arrow_right0').active = false;
                }
            }
           
            
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

        }.bind(this));
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
            let leftPos = cc.find('Canvas/left_hand0').getPosition();
            let rightPos = cc.find('Canvas/right_hand0').getPosition();
            let leftRestore = Math.abs(leftPos.x - this.initLeftPos.x)<5;
            let rightRestore = Math.abs(rightPos.x - this.initRightPos.x) < 5;
            if (this.pullFinish) {
                if (leftRestore&&rightRestore) {
                    cc.find('Canvas/arrow_right').active = false;
                    cc.find('Canvas/arrow_left').active = false;
                    this.pullFinish = false;
                    this.showSlime();
                } else if (leftRestore && !rightRestore) {
                    cc.find('Canvas/arrow_right').active = true;
                    cc.find('Canvas/arrow_left').active = false;
                } else if (!leftRestore && rightRestore) {
                    cc.find('Canvas/arrow_left').active = true;
                    cc.find('Canvas/arrow_right').active = false;
                } else if (!leftRestore && !rightRestore) {
                    cc.find('Canvas/arrow_left').active = true;
                    cc.find('Canvas/arrow_right').active = true;
                } 
            }
            cc.find('Canvas/right_hand0').getComponent(DragonCompoent).getEndPos();
            // cc.audioEngine.stopAllEffects();
            // cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;
            self.hideParticle();
        }.bind(this));
        
        this.startAction();

    }
    startAction(){
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();;
        for(let i = 1; i < 6; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(1.5 * ( i + 1 )), cc.callFunc(function () {
               
                
                TipManager.getInstance().playAudioEffect();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == 5) {
                    cc.find('Canvas/arrow_right0').active = false;
                    cc.find('Canvas/arrow_left0').active = false;
                    if (this.isFirst) {
                        this.pullFinish = true;
                        this.isFirst = false;
                    } else {
                        this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                        this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                        let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                        btn_next.active = true;
                        btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                    }
                    return;
                }
                if (this.isFirst) {
                    console.log(this.isFirst);
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
                } else {
                    console.log(this.isFirst);
                    let motion1_slime = _armature.getSlot("motion" + i + "_slime");
                    let motion2_slime = _armature.getSlot("motion" + (i + 1) + "_slime");
                    if(motion1_slime)
                    motion1_slime.displayIndex = -1;

                    if(motion2_slime)
                        motion2_slime.displayIndex = 0;

                    let motion1_slime1 = _armature.getSlot("motion" + i + "_slime2");
                    let motion2_slime1 = _armature.getSlot("motion" + (i + 1)  + "_slime2");
                    
                    if(motion1_slime1)
                    motion1_slime1.displayIndex = -1;

                    if(motion2_slime1)
                        motion2_slime1.displayIndex = 0;
                }

            

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
        TransitionScene.changeScene('kneadSlimeCB');
    }
    touchBackBtn() {
        TransitionScene.changeScene('makeActivatorCB');
    }
}
