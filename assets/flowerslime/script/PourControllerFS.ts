
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import PopupComponet from "./PopupComponetFS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperFS";
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
export default class PourController extends cc.Component {
    photoNode:cc.Node = null;
    filePath:string = null;
    onLoad() {
        this.node.getChildByName('snowflake').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('snowflake').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('tipMove').active = true;
        }.bind(this);
    }
    touchEnd() {
        this.node.getChildByName('tipMove').active = false;
        this.node.getChildByName('snowflake').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('snowflake').runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(-10,250)),
            cc.callFunc(function () {
                cc.find('Canvas/snowflake/snow').active = true;
                this.node.getChildByName('snowflake').getComponent(cc.AudioSource).play();
                cc.find('Canvas/snowflake/snowflake').runAction(cc.fadeTo(4, 0));
                cc.find('Canvas/slime/snow').runAction(cc.fadeTo(4, 255));
            }.bind(this)),
            cc.delayTime(4),
            cc.callFunc(function () {
                this.node.getChildByName('snowflake').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/snowflake/snow').active = false;
                cc.find('Canvas/slime').runAction(cc.spawn(cc.moveTo(1, cc.v2(0, 0)), cc.rotateTo(1, -45)));
            }.bind(this)),
            cc.moveBy(0.5, cc.v2(1000, 0)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('pullSlime1');
            }.bind(this))
        ))
    }
    touchBackBtn() {
        TransitionScene.changeScene('pullSlime0FS');
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
