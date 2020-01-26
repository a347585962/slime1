import MoveIn from "../common/Script/MoveInSD";
import EventListener from "../common/Script/codebase/EventListenerSD";
import { DragUtil } from "../common/Script/codebase/SpriteDrag/DragUtilSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperSD";
import PopupComponet from "./PopupComponetSD";
import DataConfig from "./DataConfigSD";
import TipManager from "./TipManagerSD";

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
export default class ClickController extends cc.Component {
    photoNode:cc.Node = null;
    filePath:string = null;
    touchNum: number = 0;
    onLoad() {
        this.init()
    }
    init() {
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // CocosHelper.showBackOut(btn_back, CocosHelper.ShowDirection.show_from_left);
        let color = DataConfig.getInstance().getColor();
        cc.loader.loadRes(`slimedark/image/slime/${color}_`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/pull/pull').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.loader.loadRes(`slimedark/image/slime/${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/pull/hand_shadow').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.loader.loadRes(`slimedark/image/slime/${color}_0`, cc.SpriteFrame, function (err, spriteFrame) {
                    cc.loader.loadRes(`slimedark/image/slime/hand_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.find('Canvas/hand/hand_shadow').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                    }.bind(this))
                    cc.find('Canvas/pull/shadow').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    cc.loader.setAutoReleaseRecursively(spriteFrame, true);

                    this.node.getChildByName('pull').getComponent(MoveIn).actionCallBack = function () {
                        cc.find('Canvas/bgMask').runAction(cc.sequence(cc.fadeTo(2, 255),
                        cc.callFunc(function () {
                            this.registerTouchEvent();
                            this.node.getChildByName('tipClick').active = true;
                            
                        }.bind(this))
                        ));
                       
                    }.bind(this)

                }.bind(this))
            }.bind(this))
        }.bind(this));
        
      
    }
    onTouchStart(event) {
        if (this.touchNum == 5) {
            this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
            btn_next.active = true;
            btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
        }
        if (this.touchNum % 3 == 0) {
            TipManager.getInstance().jumpTips();
        }
       
        this.node.getChildByName('tipClick').active = false;
        let touches = event.getTouches();
        let handPosition = this.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        let position = this.node.getChildByName('pull').convertToNodeSpaceAR(touches[0].getStartLocation());

        let colider = this.node.getChildByName('pull').getComponent(cc.PolygonCollider);
        
        if (cc.Intersection.pointInPolygon(position,colider.points)) {
          
          
            this.touchNum = this.touchNum + 1;
            this.destroyTouchEvent();
            this.node.getChildByName('hand').runAction(cc.sequence(
                cc.moveTo(0.5, handPosition),
                cc.callFunc(function () {
                    this.node.getChildByName('pull').getComponent(cc.AudioSource).play();
                    let num = Math.random() * 3;
                    let node = cc.instantiate(cc.find('pull/hand_shadow', this.node));
                    node.active = true;
                    node.parent = this.node.getChildByName('pull');
                    node.setPosition(position);
                    cc.find('heartParticle', this.node).setPosition(handPosition);
                    cc.find('heartParticle', this.node).getComponent(cc.ParticleSystem).resetSystem();
                    if (num > 1) {
                        let node1 = cc.instantiate(node);
                        node1.parent = this.node.getChildByName('pull');
                        node1.setPosition(cc.v2(position.x - 50, position.y + 10));
                        let nodePos = new cc.Vec2();
                        nodePos = node1.getPosition();
                        if (cc.Intersection.pointInPolygon(nodePos,colider.points)) {
                            node1.active = true;
                        } else {
                            node1.active = false;
                        }
                        if (num > 2) {
                            let node2 = cc.instantiate(node);
                            node2.parent = this.node.getChildByName('pull')
                            node2.setPosition(cc.v2(position.x - 80, position.y + 30)); 
                            let nodePos = new cc.Vec2();
                            nodePos = node2.getPosition();
                            if (cc.Intersection.pointInPolygon(nodePos,colider.points)) {
                                node2.active = true;
                            } else {
                                node2.active = false;
                            }
                        }
                    }  
                }.bind(this)),
                cc.moveTo(0.5, cc.v2(-20, 200)),
                cc.callFunc(function () {
                    this.registerTouchEvent();
                }.bind(this))
            ));
        }
    }
    destroyTouchEvent() {
        this.node.getChildByName('pull').off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
    registerTouchEvent() {
        this.node.getChildByName('pull').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
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
                   console.log("保存相册回调 " + isSuccess);
                   if (!isSuccess) {
                       var popup = this.node.getChildByName('popup')
                       popup.active = true;
                       popup.getComponent(PopupComponet).showPopup();
                       popup.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                           popup.getComponent(PopupComponet).hidePopup();
                       }.bind(this))));
                       popup.getComponent(PopupComponet).setTip('There is no email account');
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
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.node.getChildByName('photo').active = false;
    }
    touchNextBtn() {
        let color = DataConfig.getInstance().getColor();
      
        if (color == 'rainbow') {
            DataConfig.getInstance().setCount(0);
            // if(CC_JSB){
            
            //     cc.INGAME =  (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + "SlimeMakeNew/dark_slime";
            //     console.log(cc.INGAME);
            //     window.require(cc.INGAME+"/src/dating.js");
               
            // }
            cc.sys.localStorage.setItem("fromHall", 10);
            cc.sys.garbageCollect();
            cc.game.restart();
        } else {
            DataConfig.getInstance().addCount();
            TransitionScene.changeScene('chooseColorSD');
        }
       
    }
    touchBackBtn() {
        TransitionScene.changeScene('kneadSlimeSD');
    }

}
