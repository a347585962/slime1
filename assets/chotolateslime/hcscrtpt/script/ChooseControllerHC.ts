import MoveIn from "../common/Script/MoveInHC";
import PopupComponet from "./PopupComponetHC";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";
import showLaoding from "../common/Script/showLaodingHC";

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
export default class ChooseController extends cc.Component {
    photoNode:cc.Node = null;
    filePath:string = null;
    onLoad() {
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_camera= CocosHelper.findNode(cc.Canvas.instance.node, "btn_camera");
        // CocosHelper.showBackOut(btn_camera, CocosHelper.ShowDirection.show_from_right);
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // CocosHelper.showBackOut(btn_back, CocosHelper.ShowDirection.show_from_left);
        
        this.showChoose();
        this.changPosition();
        let node = cc.instantiate(cc.find('cupCopy').children[0]);
        node.parent = cc.find('cupChoose/choose1', this.node);
        node.setPosition(cc.v2(0.0));
        // cc.game.removePersistRootNode(cc.find('cupCopy'));
        // cc.find('cupCopy').destroy();
        

        let a = Math.floor(Math.random() * 4)+1;
        cc.loader.loadRes(`chocolateslime/image/cup${a}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('cupChoose/choose2/cup', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        let b = Math.floor(Math.random() * 4)+1;
        cc.loader.loadRes(`chocolateslime/image/cup${b}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('slimeChoose/choose2/cup', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        let c = Math.floor(Math.random() * 4)+1;
        cc.loader.loadRes(`chocolateslime/image/cup${c}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('slimeChoose/choose1/cup', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        this.node.getChildByName('tipBg').getComponent(MoveIn).actionCallBack = function () {
            this.activateButtons();
            this.node.getChildByName('tipBg').runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.scaleTo(0.2, 0.9)));
        }.bind(this)
       
    }
    activateButtons() {
        cc.find('cupChoose/choose1/touch_ui', this.node).getComponent(cc.Button).interactable = true;
        cc.find('cupChoose/choose2/touch_ui', this.node).getComponent(cc.Button).interactable = true;
        cc.find('slimeChoose/choose1/touch_ui', this.node).getComponent(cc.Button).interactable = true;
        cc.find('slimeChoose/choose2/touch_ui', this.node).getComponent(cc.Button).interactable = true;
    }
    sleepButtons() {
        cc.find('cupChoose/choose1/touch_ui', this.node).getComponent(cc.Button).interactable = false;
        cc.find('cupChoose/choose2/touch_ui', this.node).getComponent(cc.Button).interactable = false;
        cc.find('slimeChoose/choose1/touch_ui', this.node).getComponent(cc.Button).interactable = false;
        cc.find('slimeChoose/choose2/touch_ui', this.node).getComponent(cc.Button).interactable = false;
    }
    showChoose() {
        this.node.getChildByName('tipBg').getComponent(MoveIn).doShowAction();
        let m = Math.random() > 0.5 ? 1 : 0;
        //let m = 1;
        if (m == 0) {
            this.node.getChildByName('cupChoose').active = true;
            this.node.getChildByName('slimeChoose').active = false;
            cc.find('tipBg/word1', this.node).active = false;
            cc.find('tipBg/word2', this.node).active = true;
        } else {
            this.node.getChildByName('cupChoose').active = false;
            this.node.getChildByName('slimeChoose').active = true;
            cc.find('tipBg/word1', this.node).active = true;
            cc.find('tipBg/word2', this.node).active = false;
        }
    }
    changPosition() {
        let n = Math.random()>0.5 ? 1:0;
        if (n ==0 ) {
            cc.find('cupChoose/choose1', this.node).setPosition(cc.v2(170.0));
            cc.find('cupChoose/choose2', this.node).setPosition(cc.v2(-170.0));
            cc.find('slimeChoose/choose1', this.node).setPosition(cc.v2(170.0));
            cc.find('slimeChoose/choose2', this.node).setPosition(cc.v2(-170.0));
        } else {
            cc.find('cupChoose/choose2', this.node).setPosition(cc.v2(170.0));
            cc.find('cupChoose/choose1', this.node).setPosition(cc.v2(-170.0));
            cc.find('slimeChoose/choose2', this.node).setPosition(cc.v2(170.0));
            cc.find('slimeChoose/choose1', this.node).setPosition(cc.v2(-170.0));
        }
    }
    cupChooseButton(event, customData) {
        this.hideTip();
        this.sleepButtons();
        if (customData == '1') {
            this.node.getComponent(cc.AudioSource).play();
            cc.find('cupChoose/choose1/touch_ui', this.node).active = false;
            cc.find('cupChoose/choose2', this.node).active = false;
            cc.find('cupChoose/choose1', this.node).runAction(cc.sequence(
                cc.spawn(cc.moveTo(0.5, cc.v2(0, -50)), cc.scaleTo(0.5, 0.7)),
                cc.callFunc(function () {
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1)));
                }.bind(this))
            ))
        } else {
            this.node.getChildByName('bg').getComponent(cc.AudioSource).play();
            cc.find('cupChoose/choose1/cup', this.node).runAction(cc.repeat(cc.sequence(cc.moveBy(0.2,cc.v2(0,10)),cc.moveBy(0.2,cc.v2(0,-10))),2));
            this.node.runAction(cc.sequence(cc.delayTime(0.5),
                cc.callFunc(function () {
                    this.node.getChildByName('curtain').getComponent(cc.Animation).play('closeCurtain');
                }.bind(this))
            ));
            
        } 
    }
    slimeChooseButton(event,customData) {
        this.hideTip();
        if (customData == '1') {
            this.node.getComponent(cc.AudioSource).play();
            cc.find('slimeChoose/choose1/touch_ui', this.node).active = false;
            cc.find('slimeChoose/choose2', this.node).active = false;
            cc.find('slimeChoose/choose1', this.node).runAction(cc.sequence(
                cc.spawn(cc.moveTo(0.5, cc.v2(0, -50)), cc.scaleTo(0.5, 0.7)),
                cc.callFunc(function () {
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1)));
                }.bind(this))
            ))
        } else {
            this.node.getChildByName('bg').getComponent(cc.AudioSource).play();
            cc.find('slimeChoose/choose1/cup', this.node).runAction(cc.repeat(cc.sequence(cc.moveBy(0.2,cc.v2(0,10)),cc.moveBy(0.2,cc.v2(0,-10))),2));
            this.node.runAction(cc.sequence(cc.delayTime(0.5),
                cc.callFunc(function () {
                    this.node.getChildByName('curtain').getComponent(cc.Animation).play('closeCurtain');
                }.bind(this))
            ))
            
        }
    }
    hideTip() {
        this.node.getChildByName('tipBg').stopAllActions();
        let position = this.node.getChildByName('tipBg').getPosition();
        this.node.getChildByName('tipBg').runAction(cc.sequence(cc.moveBy(0.5, cc.v2(600, 0)),
            cc.callFunc(function () {
                this.node.getChildByName('tipBg').setScale(0.9);
                this.node.getChildByName('tipBg').opacity = 0;
                this.node.getChildByName('tipBg').setPosition(position);
            }.bind(this))
        ));
    }
    camera(){
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
                
                if(width<designSize.width) {
                    this.photoNode.setScale(width/designSize.width);
                }
                if(height<designSize.height){
                    this.photoNode.setScale(height/designSize.height);
                }
                maskPhoto.addChild(this.photoNode);
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

    touchNextBtn() {
        showLaoding.getInstance().showAds(true);
        showLaoding.getInstance().loadingDoneCallback = function () {
            TransitionScene.changeScene('playSlimeHC');
        }
    }
    touchBackBtn() {
        TransitionScene.changeScene('decorateCupHC');
    }

}
