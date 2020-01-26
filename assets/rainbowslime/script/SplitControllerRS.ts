import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRS";
import DragonCompoent from "./DragonCompoentRS";
import MoveIn from "../common/Script/MoveInRS";
import HandTouchEvent from "./HandTouchEventRS";
import TransitionScene from "../common/Script/codebase/TransitionSceneRS";
import TipManager from "./TipManagerRS";

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
export default class SplitController extends cc.Component {
    actionNode: cc.Node = null;
    pullFinish: boolean = false;
    initLeftPos: cc.Vec2 = null;
    initRightPos: cc.Vec2 = null;
    isFirst: boolean = null;
    isFirstSplit: boolean = null;
    @property({type:cc.AudioClip})
    lachang:cc.AudioClip;
    onLoad() {
        this.isFirst = true;
        this.node.getChildByName('hand').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('hand').getComponent(HandTouchEvent).init(this.node.getChildByName('slime'));
            this.node.getChildByName('finger').active = true;
        }.bind(this);
        this.isFirstSplit = true;
    }
    mixFinish() {
        // TipManager.getInstance().playAudioEffect();
        TipManager.getInstance().jumpTips();
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.showDragon();
    }
    
    showDragon() {
        cc.find('Canvas/slime').active = false;
        cc.find('Canvas/slime1').active = false;
        cc.find('Canvas/hand').active = false;
        cc.find('Canvas/left_hand0').active = true;
        cc.find('Canvas/left_hand1').active = true; 
        cc.find('Canvas/right_hand0').active = true;
        cc.find('Canvas/right_hand1').active = true;
       
        cc.find('Canvas/arrow_right').active = false;
        cc.find('Canvas/arrow_left').active = false; 
        if (this.isFirst) {
            cc.find('Canvas/arrow_right0').active = true;
            cc.find('Canvas/arrow_left0').active = true;
        } else {
            cc.find('Canvas/arrow').active = true;
        }
        this.dynamicCreate();
    }
    showSlime() {
        cc.find('Canvas/finger').active = true;
        cc.find('Canvas/slime1').active = true;
        cc.find('Canvas/hand').active = true;
        cc.find('Canvas/hand').getComponent(HandTouchEvent).init(cc.find('Canvas/slime1'));
        cc.find('Canvas/dragon').active = false;
        cc.find('Canvas/left_hand0').active = false;
        cc.find('Canvas/left_hand1').active = false; 
        cc.find('Canvas/right_hand0').active = false;
        cc.find('Canvas/right_hand1').active = false;
        cc.find('Canvas/arrow_right0').active = false;
        cc.find('Canvas/arrow_left0').active = false;
    }
    dynamicCreate() {
        if (this.isFirst) {
            let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
            dragon.active = true;
            this.addHandCm();
            this.isFirst = false;
        } else {
            let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon1");
            dragon.active = true;
            this.addHandCm1();
        }
       
        // // cc.loader.loadRes(`SlimeRoll/${colorName}/unicornSlimeRoll`, dragonBones.DragonBonesAsset, (err, res) => {
        // //     if (err) cc.error(err);
        // //     _armatureDisplay.dragonAsset = res;
        // //     cc.loader.loadRes(`SlimeRoll/${colorName}/texture`, dragonBones.DragonBonesAtlasAsset, (err, res) => {
        // //         if (err) cc.error(err);
        // //         _armatureDisplay.dragonAtlasAsset = res;
        // //         _armatureDisplay.armatureName = 'Armature';  
        // //         self.addHandCm();

        // //     });
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


        for (let i = 2; i <= 2; i++){

            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
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

                self._loopSound = cc.audioEngine.playEffect(self.lachang, false);
                setTimeout(function () {
                    self._loopSound = -1;
                }, 1500);   
            }

        }.bind(this));
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
            let leftPos = cc.find('Canvas/left_hand0').getPosition();
            let rightPos = cc.find('Canvas/right_hand0').getPosition();
            let leftRestore = Math.abs(leftPos.x - this.initLeftPos.x)<2;
            let rightRestore = Math.abs(rightPos.x - this.initRightPos.x) < 2;
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
    addHandCm1(){
        //设置左手 右手
        let array = ["left_hand0", "right_hand0"];

        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon1");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        
        this.initLeftPos = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0").getPosition();
        CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0").active = false;
        CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1").active = false;
        this.node.getChildByName('handRight').active = true;
        //设置手的逻辑
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let left_hand = CocosHelper.findNode(cc.Canvas.instance.node, element);
            let dragCm = left_hand.getComponent(DragonCompoent);
            let startL = left_hand.getPosition();//.add(element == "left_hand0" ? cc.v2(40,0) : cc.v2(-40,0));
            let endL = startL.add(cc.v2());
            
            endL.x = element == "left_hand0" ?left_hand.getParent().convertToNodeSpaceAR( cc.v2(0, 0)).x:startL.x;
            
            dragCm.setStartPos(startL);
            dragCm.setEndPos(endL);
            
            let slime =  element == "left_hand0" ? "slimel0" : "slimer0";
            let slimel0:dragonBones.Bone = _armature.getBone(slime);
            dragCm.setMoveBone(slimel0);
        }
        if (this.isFirstSplit) { 
            let motion1_slime = _armature.getSlot("motion1_slime");
            motion1_slime.displayIndex = 0;// = false;
            let motion2_slime = _armature.getSlot("motion2_slime");
            motion2_slime.displayIndex = -1;// = false;
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
            let leftPos = cc.find('Canvas/left_hand0').getPosition();
            let leftRestore = Math.abs(leftPos.x - this.initLeftPos.x) > 100;
            console.log(Math.abs(leftPos.x - this.initLeftPos.x));
            if (leftRestore) {
                cc.find('Canvas').off('Pulling');
                cc.find('Canvas/arrow').active = false;
                self.hideParticle();
                if (this.isFirstSplit) {
                    let motion1_slime = _armature.getSlot("motion1_slime");
                    motion1_slime.displayIndex = -1;// = false;
                    let motion2_slime = _armature.getSlot("motion2_slime");
                    motion2_slime.displayIndex = 0;// = false;
                    CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0").active = false;
                    CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1").active = false;

                    this.node.getChildByName('handLeft').active = true;
                    this.node.getChildByName('slime2').active = true;
                    this.node.getChildByName('handLeft').setPosition(this.node.getChildByName('slime2').getPosition());
                    this.node.getChildByName('handLeft').runAction(cc.moveBy(0.5, cc.v2(-100, 0)));
                    this.node.getChildByName('slime2').runAction(cc.moveBy(0.5, cc.v2(-100, 0)));
                    this.node.getChildByName('handRight').runAction(cc.moveBy(0.5, cc.v2(250, 0)));
                    this.node.getChildByName('dragon1').runAction(cc.sequence(
                        cc.moveBy(0.5, cc.v2(250, 0)),
                        cc.callFunc(function () {
                            cc.find('Canvas/slime2/motion4_slime').active = true;
                            this.node.getChildByName('handLeft').active = false;
                            let leftNode =  CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0")
                            leftNode.active = true;
                            let x = leftNode.x + 450;
                            CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1").active = true;
                            leftNode.setPosition(cc.v2(x, leftNode.y));
                            CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1").setPosition(cc.v2(x, leftNode.y));
                            this.isFirstSplit = false;
                            this.addHandCm1();
                        }.bind(this))
                        
                    ));
                } else {
                    CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0").active = false;
                    CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1").active = false;
                    this.node.getChildByName('handLeft').active = true;
                    this.node.getChildByName('slime3').active = true;
                    this.node.getChildByName('handLeft').setPosition(this.node.getChildByName('slime3').getPosition());
                    this.node.getChildByName('slime4').active = true;
                    this.node.getChildByName('handRight').setPosition(this.node.getChildByName('slime4').getPosition());
                    this.node.getChildByName('slime3').runAction(cc.moveBy(0.5, cc.v2(-50, 0)));
                    this.node.getChildByName('handLeft').runAction(cc.sequence(
                        cc.moveBy(0.5, cc.v2(-50, 0)),
                        cc.callFunc(function () {
                            cc.find('Canvas/slime3/motion4_slime').active = true;
                            cc.find('Canvas/slime4/motion4_slime').active = true;
                        }.bind(this)),
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            this.node.getChildByName('handLeft').runAction(cc.moveBy(0.5,cc.v2(900,0)));
                            this.node.getChildByName('handRight').runAction(cc.moveBy(0.5, cc.v2(900, 0)));
                            this.node.getChildByName('slime3').runAction(cc.moveBy(0.5, cc.v2(900, 0)));
                            this.node.getChildByName('slime4').runAction(cc.moveBy(0.5, cc.v2(900, 0)));
                            this.node.getChildByName('slime2').runAction(cc.moveTo(0.5, cc.v2(0, 0)));
                        }.bind(this)),
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                            this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                        }.bind(this)),
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            TransitionScene.changeScene('dyeSlimeRS');
                        }.bind(this))
                    ));
                    this.node.getChildByName('dragon1').active = false;
                }
                
            }
            

            if(self._loopSound == -1){

                self._loopSound = cc.audioEngine.playEffect(self.lachang, false);
                setTimeout(function () {
                    self._loopSound = -1;
                }, 1500);   
            }

        }.bind(this));
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
            let leftPos = cc.find('Canvas/left_hand0').getPosition();
            let rightPos = cc.find('Canvas/right_hand0').getPosition();
            cc.find('Canvas/right_hand0').getComponent(DragonCompoent).getEndPos();
            // cc.audioEngine.stopAllEffects();
            // cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;
            self.hideParticle();
        }.bind(this));
    }


    startAction(){
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();;
        for(let i = 1; i < 3; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(3 * ( i + 1 )), cc.callFunc(function () {
               
                
                //TipManager.getInstance().jumpTips();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == 2) {
                    cc.find('Canvas/arrow_right0').active = false;
                    cc.find('Canvas/arrow_left0').active = false;
                    this.pullFinish = true; 
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
        TransitionScene.changeScene('addMaterialRS');
    }

}
