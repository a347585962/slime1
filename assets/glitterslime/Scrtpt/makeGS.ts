import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";
import DragonCompoent from "./DragonCompoentGS";

import MoveIn from "./MoveIn_oGS";
import TipManager from "./TipManagerGS";
import DataConfig from "../script/DataConfigGS";


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
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.AudioClip)
    lachang: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    actionNode:cc.Node = null;

    start () {

        this.dynamicCreate();
    }

    //更换龙骨文件
    dynamicCreate () {
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let self = this;
        
        let slimeNode = CocosHelper.findNode(cc.Canvas.instance.node, "slimeNode");

        //颜色名
        let colorName = DataConfig.getInstance().getBodyName();//   "green";

        cc.loader.loadRes('glitterslime/slime/node/' + colorName + "", cc.SpriteFrame, (err, res)=>{
            if (err) {
                console.log(err +"");
                
                return;
            }
            slimeNode.getComponent(cc.Sprite).spriteFrame = res;
            cc.loader.setAutoRelease(res,true);
        });

        
        cc.loader.loadRes('glitterslime/slime/' + colorName + "/" + colorName + "_ske", dragonBones.DragonBonesAsset, (err, res) => {
            if (err) {
                console.log(err +"");
                
                return;
            }
            _armatureDisplay.dragonAsset = res;
            cc.loader.setAutoRelease(res,true);
            cc.loader.loadRes('glitterslime/slime/' + colorName + "/" + colorName + "_tex", dragonBones.DragonBonesAtlasAsset, (err, res) => {
                if (err) {
                    console.log(err +"");
                    
                    return;
                }
                _armatureDisplay.dragonAtlasAsset = res;
                _armatureDisplay.armatureName = 'Armature';
                _armatureDisplay.playAnimation("newAnimation", 0);
                cc.loader.setAutoRelease(res,true);
                for(let i = 1;i <= 5; i++){
                    let motion2_slime = _armatureDisplay.armature().getSlot("motion" + i + "_slime");
                    motion2_slime.displayIndex = -1;// = false;
                    console.log(motion2_slime);
                    
                    motion2_slime._updateColor();
                    
                }
                slimeNode.active = true;
                let move = slimeNode.getComponent(MoveIn);
                move.enabled = true;
                move.actionCallBack = function(){
                    
                    
                    self.show();
                };

            });
        });
    }

    show(){
    
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let slimeNode = CocosHelper.findNode(cc.Canvas.instance.node, "slimeNode");
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = _armatureDisplay.armature();;
        
        let self = this;
        dragon.position = slimeNode.getPosition();
        slimeNode.active = false;

        //设置左手 右手
        let array = ["left_hand0","left_hand1","right_hand1", "right_hand0"];
        for (let index = 0; index < array.length; index++) {
            let element = array[index];
            let left_hand = CocosHelper.findNode(cc.Canvas.instance.node, element);
            left_hand.active = true;
            let move = left_hand.getComponent(MoveIn);
            move.enabled = true;
            move.actionCallBack = function(){

                if(element == "right_hand0")
                    self.addHandCm();

            };
        }

    }

    private showPartic = -1;
    addHandCm(){
        console.log("addHandCm");
        
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
                    btn_next.runAction(cc.fadeIn(0.5));
                    CocosHelper.showBackOut(btn_next, CocosHelper.ShowDirection.show_from_right);

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
    showParticle(){
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

    touchNextBtn(){


    }
    touchHomeBtn(){



    }

    // update (dt) {}
}
