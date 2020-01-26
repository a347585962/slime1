import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperFS";
import DragonCompoent from "./DragonCompoentFS";
import HandTouchEvent from "./HandTouchEventFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import TipManager from "./TipManagerFS";
import PopupComponet from "./PopupComponetFS";
import MoveIn from "../common/Script/compoent/MoveInFS";

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
export default class RubController extends cc.Component {
    count: number = 0;
    photoNode:cc.Node = null;
    filePath:string = null;
    onLoad() {
        cc.find('Canvas/hand_right/hand').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/hand_right/hand').getComponent(HandTouchEvent).init();
            cc.find('Canvas/hand_right/finger').active = true;
        }.bind(this);
        cc.find('Canvas/hand_left/hand').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/hand_left/hand').getComponent(HandTouchEvent).init();
            cc.find('Canvas/hand_left/finger').active = true;
        }.bind(this);
    }
    mixFinish(event) {
        TipManager.getInstance().jumpTips();
        let node = event.node;
        let parent = node.parent;
        parent.getChildByName('hand').getComponent(cc.Animation).stop();
        parent.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        node.stopAllActions();
        node.setScale(1);
        parent.getChildByName('hand').runAction(cc.moveBy(0.5, cc.v2(0, -1000)));
        this.count = this.count + 1;
        if (this.count == 2) {
            cc.find('Canvas/hand_right').runAction(cc.moveTo(1, cc.v2(0, 70)));
            cc.find('Canvas/hand_left').runAction(cc.sequence(
                cc.moveTo(1, cc.v2(0, 0)),
                cc.callFunc(function () {
                    cc.find('Canvas/hand_right').active = false;
                    cc.find('Canvas/hand_left').opacity = 0;
                    cc.find('Canvas/mix').active = true;
                    this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                    this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                }.bind(this)),
                cc.delayTime(0.5),
                cc.callFunc(function () {
                    TransitionScene.changeScene('pullSlime0FS');
                }.bind(this))

            ));
        }
    }
    touchBackBtn() {
        TransitionScene.changeScene('addMaterial');
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
