
import PopupComponet from "./PopupComponetFS";
import { MyCocosHelper } from "./MyCocosHelperFS";


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

    
    private photoNode = null;
    private filePath = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    camera(event){
     
        cc.find('Canvas/button/photo').getComponent(cc.Button).interactable = false;
        MyCocosHelper.captureNodeSize(cc.Canvas.instance.node,cc.visibleRect.width,cc.visibleRect.height).then((texture:cc.RenderTexture)=>{
            if(texture != null){      
                let spriteFrame = new cc.SpriteFrame();
                spriteFrame.setTexture(texture);
                this.photoNode = new cc.Node();
                let sprite = this.photoNode.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                //sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                cc.find("Canvas/photo").active =true;
                var maskPhoto = cc.find("Canvas/photo/mask");
                let designSize = this.photoNode.getContentSize();
                let width = maskPhoto.width;
                let height = maskPhoto.height;
                if(height<designSize.height){
                    this.photoNode.setScale(height/designSize.height);
                }
                if(width<designSize.width) {
                    this.photoNode.setScale(width/designSize.width);
                }
                // if(width<designSize.width && height<designSize.height) {
                //     this.photoNode.setScale(width/designSize.width,height<designSize.height);
                // }
                this.photoNode.setPosition(cc.v2(0,0));
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
       
       event.target.getComponent(cc.AudioSource).play();
    }
    camera1(event){
        cc.find('Canvas/button/photo').getComponent(cc.Button).interactable = false;
        MyCocosHelper.captureNode(cc.Canvas.instance.node).then((texture:cc.RenderTexture)=>{
            if(texture != null){      
                let spriteFrame = new cc.SpriteFrame();
                spriteFrame.setTexture(texture);
                this.photoNode = new cc.Node();
                let sprite = this.photoNode.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                //sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                cc.find("Canvas/photo").active =true;
                var maskPhoto = cc.find("Canvas/photo/mask");
                let designSize = this.photoNode.getContentSize();
                let width = maskPhoto.width;
                let height = maskPhoto.height;
                if(height<designSize.height){
                    this.photoNode.setScale(height/designSize.height);
                }
                if(width<designSize.width) {
                    this.photoNode.setScale(width/designSize.width);
                }
                // if(width<designSize.width && height<designSize.height) {
                //     this.photoNode.setScale(width/designSize.width,height<designSize.height);
                // }
                this.photoNode.setPosition(cc.v2(0,0));
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
       event.target.getComponent(cc.AudioSource).play();
    }
    downloadImag(){
        this.photoNode.destroy();
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        cc.find('Canvas/photo').active = false;
        cc.find('Canvas/button/photo').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            console.log("CC_JSB")
            if (this.filePath != '') {
                console.log("filePath");
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
                    var popup = cc.find("Canvas/popup");
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
        //cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.photoNode.destroy();
        cc.find('Canvas/photo').active = false;
        cc.find('Canvas/button/photo').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            if (this.filePath != '') {
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
                    var popup = cc.find("Canvas/popup");
                    popup.active = true;
                    popup.getComponent(PopupComponet).showPopup();
                    popup.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(function(){
                        popup.getComponent(PopupComponet).hidePopup();
                    }.bind(this)))); 
                    if(!isSuccess){
                        popup.getComponent(PopupComponet).setTip('There is no email account!');
                    }
               });
            }
            else {
                console.log('download failed!')
            }
        }
    }  
    closePhoto(){
        this.photoNode.destroy();
        cc.find('Canvas/button/photo').getComponent(cc.Button).interactable = true;
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        cc.find("Canvas/photo").active = false;
    }
    // update (dt) {}
}
