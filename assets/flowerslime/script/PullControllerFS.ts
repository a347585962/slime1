import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperFS";
import TipManager from "./TipManagerFS";
import DragonCompoent from "./DragonCompoentFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";

import PopupComponet from "./PopupComponetFS";
import showLaoding from "../common/Script/ads/showLaodingFS";

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
    photoNode:cc.Node = null;
    filePath:string = null;
    actionNode:cc.Node = null;
    @property({type:cc.AudioClip})
    lachang: cc.AudioClip;
    maxCount: number = null;
    time: number = null;
    isPulling: boolean = true;

    start () {
        console.log("!!@!@!@")
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // btn_home.zIndex = 100;
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // btn_back.zIndex = 100;
        // let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
        // btn_next.zIndex = 100;
       
        if (cc.director.getScene().name == 'pullSlime0FS') {
            this.maxCount = 6;
            this.time = 2;
        } else {
            this.maxCount = 2;
            this.time = 3
        }
        this.dynamicCreate();
       
        
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
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        _armature
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

        _armature.getSlot("motion0_slime").displayIndex = 0;
        for (let i = 1; i < this.maxCount; i++){
            console.log(i);
            
            let motion2_slime = _armature.getSlot("motion" + i + "_slime");
            motion2_slime.displayIndex = -1;// = false;
            
            // motion2_slime.getColorTransform().alphaMultiplier = 0
            motion2_slime._updateColor();
            
        }
        let self = this;


        
        cc.find('Canvas').on('PullTouch', function (arg1, arg2, arg3) {
            cc.find('Canvas/arrow_right').active = false;
            cc.find('Canvas/arrow_left').active = false;
            console.log('PullTouch');
            // cc.audioEngine.stopAllEffects();
            cc.audioEngine.stopEffect(self._loopSound);
            // self._loopSound = -1;
          

        });

        cc.find('Canvas').on('Pulling', function (arg1, arg2, arg3) {
            self.showParticle();
            // console.log('Pulling');
            self.isPulling = true;
            cc.director.getActionManager().resumeTarget(self.actionNode);

           
            if(self._loopSound == -1){

            self._loopSound = cc.audioEngine.playEffect(self.lachang, false);
            setTimeout(function () {
                self._loopSound = -1;
            }, 1500);   
        }
        });
        cc.find('Canvas').on('PullEnd', function (arg1, arg2, arg3) {
            self.isPulling = false;
            console.log('PullEnd');
            cc.director.getActionManager().pauseTarget(self.actionNode);
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
           
        });
        
        this.startAction();

    }

    startAction(){
        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        for(let i = 0; i <this.maxCount; i++){

            this.actionNode.runAction(cc.sequence(cc.delayTime(this.time * ( i + 1 )), cc.callFunc(function () {
            
                TipManager.getInstance().jumpTips();
                let left_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0");
                let right_hand0 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0");
                let left_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1");
                let right_hand1 = CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
                

                if (i == this.maxCount - 1) {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    let btn_next = cc.find("Canvas/button/next")
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

    touchNextBtn() {
       
        if (cc.director.getScene().name == 'pullSlime0') {
            TransitionScene.changeScene('pourSnow');
            // showLaoding.getInstance().loadingDoneCallback = function () { 
            //     showLaoding.getInstance().loadingDoneCallback = null;
               
                
            // }
            // showLaoding.getInstance().showAds(false);
           
        } else {
            TransitionScene.changeScene('coilSlime');
        }
       
       
    }
    touchBackBtn() {
        if (cc.director.getScene().name == 'pullSlime0') {
            TransitionScene.changeScene('rubSlime');
        } else {
            TransitionScene.changeScene('pourSnow');
        }
       
    }
    camera() {
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = false;
        CocosHelper.captureNode(cc.Canvas.instance.node).then((texture:cc.RenderTexture)=>{
            if(texture != null){      
                let spriteFrame = new cc.SpriteFrame();
                spriteFrame.setTexture(texture);
                this.photoNode = new cc.Node();
                let sprite = this.photoNode.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                //sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                cc.find('photo',this.node).active =true;
                var maskPhoto = cc.find('photo/mask',this.node);
                let designSize = this.photoNode.getContentSize();
                let width = maskPhoto.width;
                let height = maskPhoto.height;
                
                let scaleX = null;
                let scaleY = null;
                
                if (width < designSize.width) {
                    scaleX = width / designSize.width;
                    this.photoNode.setScale(scaleX);
                }
                if (height < designSize.height) {
                    scaleY = height / designSize.height;
                    this.photoNode.setScale(scaleY);
                   
                }
                if (scaleX && scaleY) {
                    if (scaleX > scaleY) {
                        this.photoNode.setScale(scaleX);
                    } else {
                        this.photoNode.setScale(scaleY);
                    } 
                }
                maskPhoto.addChild(this.photoNode);
                cc.log(this.photoNode);
                if (CC_JSB&& !CC_PREVIEW) {

                    let picData = texture.readPixels();
                    let width = texture.width;
                    let height = texture.height;
                    let timeName = Date.parse(new Date().toString());
                    this.filePath = jsb.fileUtils.getWritablePath() + timeName+'.png';
    
                    let success = jsb.saveImageData(picData, width, height, this.filePath)
                    if(!success){
                        this.filePath = "";
                    }
                }
            }  
       });
        this.node.getChildByName('btn_camera').getComponent(cc.AudioSource).play();
    }
    downloadImag(){
        this.photoNode.destroy();
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        cc.find('photo',this.node).active = false;
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            if (this.filePath != '') {
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
                    var popup = this.node.getChildByName('popup')
                    popup.active = true;
                    popup.getComponent(PopupComponet).showPopup();
                    popup.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(function(){
                        popup.getComponent(PopupComponet).hidePopup();
                    }.bind(this)))); 
                    if(isSuccess){
                        popup.getComponent(PopupComponet).setTip('Photo downloaded successfully, please check in the album!');
                    }else{
                        popup.getComponent(PopupComponet).setTip('Picture download failed. Please check whether access to the album is open or not!');
                    }      
               }.bind(this));
            }
            else {
                console.log('download failed!');
            }
        }
    }
    shareImage(){
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.photoNode.destroy();
        cc.find('photo',this.node).active = false;
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            if (this.filePath != '') {
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
               });
            }
            else {
                console.log('download failed!')
            }
        }
    }  
    closePhoto(){
        this.photoNode.destroy();
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.node.getChildByName('photo').active = false;
    }

}
