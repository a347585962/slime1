import MoveIn from "../common/Script/compoent/MoveInCE";
import DollTouchEvent from "./DollTouchEventCE";
import DataConfig from "./DataConfigCE";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCE";
import PopupComponet from "./PopupComponetCE";
import showLaoding from "../common/Script/ads/showLaodingCE";
import TransitionScene from "../common/Script/codebase/TransitionSceneCE";

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
export default class PlayController extends cc.Component {
    photoNode:cc.Node = null;
    filePath:string = null;
    onLoad() {

        cc.find('Canvas/btns/doll4').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/tip').getComponent(MoveIn).doShowAction();
        }.bind(this);
        cc.find('Canvas/tip').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/btns').children.forEach(child => {
                child.getComponent(cc.Button).interactable = true;
            });
        }.bind(this);
        let candys = DataConfig.getInstance().getCandys();
        if (!candys) {
            candys = ['star'];
        }
      
        candys.forEach(candy => {
            cc.find(`Canvas/slime/${candy}`).active = true;  
            for (let i = 1; i <= 6; i++){
                cc.find(`Canvas/doll${i}/slime0/${candy}`).active = true;
                cc.find(`Canvas/doll${i}/slime0/slime1/${candy}`).active = true;
            }
        })
        
        let color = DataConfig.getInstance().getColor();
        if (!color) {
            color = 'brown';
        }
        cc.loader.loadRes(`crazyemoji/image/color/slime13_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err);
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/slime').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        cc.loader.loadRes(`crazyemoji/image/color/snot_slime_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err);
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/doll1/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll1/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll3/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll3/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        cc.loader.loadRes(`crazyemoji/image/color/spit_slime_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err);
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/doll2/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll2/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll5/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll5/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        cc.loader.loadRes(`crazyemoji/image/color/poop_slime_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err);
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/doll4/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll4/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll6/slime0').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('Canvas/doll6/slime0/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
    }
    btnClick(event) {
        cc.find('Canvas/tip').active = false;
        let node = event.target;
        node.parent.getComponent(cc.AudioSource).play();
        node.parent.children.forEach(child => {
            child.getComponent(cc.Button).interactable = false;
            child.active = false;
        });
        node.active = true;
        let pos = node.parent.convertToNodeSpaceAR(cc.find(`Canvas/${node.name}`).convertToWorldSpaceAR(cc.v2(0, 0)));
        cc.find('Canvas/slime').active = true;
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(1, pos), cc.scaleTo(1, 1)),
            cc.callFunc(function () {
                cc.find(`Canvas/${node.name}`).active = true;
                cc.find(`Canvas/${node.name}`).getComponent(cc.Button).interactable = true;
                cc.find('Canvas/btnScrollView').active = true;
                let noFirst = DataConfig.getInstance().getNoFirst1();
                if (noFirst) {
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.zIndex = 100;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                } else {
                    cc.find('Canvas/bg').runAction(cc.sequence(
                        cc.delayTime(30),
                        cc.callFunc(function () {
                             let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                             btn_next.active = true;
                             btn_next.zIndex = 100;
                            btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                            DataConfig.getInstance().setNoFirst1();
                        }.bind(this))
                        
                     ))
                }
                cc.find('Canvas/finger').active = true;
                node.active = false;
            })
        ))
    }
    btnClick1(event) {
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).stopSystem();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).stop();
        cc.find('Canvas').getComponent(cc.AudioSource).stop();
        let node = event.target;
        node.parent.getComponent(cc.AudioSource).play();
        for (let i = 1; i <= 6; i++){
            cc.find(`Canvas/doll${i}`).active = false;
            
        }
        node.parent.children.forEach(child => {
            child.getComponent(cc.Button).interactable = false;
        });
        cc.find('Canvas/slime').stopAllActions();
        cc.find('Canvas/slime').active = true;
        cc.find('Canvas/slime').opacity = 255;
        cc.find('Canvas/slime').setScale(0.6);
        cc.find(`Canvas/${node.name}`).getComponent(DollTouchEvent).destroyTouchEvent();
        cc.find(`Canvas/${node.name}`).getComponent(cc.Button).interactable = false;
        cc.find(`Canvas/${node.name}`).active = true;
        cc.find(`Canvas/${node.name}`).opacity = 0;
        cc.find(`Canvas/${node.name}`).stopAllActions();
        cc.find(`Canvas/${node.name}`).setScale(0.8);
        cc.find(`Canvas/${node.name}`).getChildByName('down1').active = true;
        cc.find(`Canvas/${node.name}`).getChildByName('up1').active = true;
        cc.find(`Canvas/${node.name}`).getChildByName('down2').active = false;
        cc.find(`Canvas/${node.name}`).getChildByName('up2').active = false;
        cc.find(`Canvas/${node.name}`).getChildByName('slime0').active = false;
        cc.find(`Canvas/${node.name}`).getComponent(MoveIn).doShowAction();
        cc.find(`Canvas/${node.name}`).getComponent(MoveIn).actionCallBack = function () {
            cc.find(`Canvas/${node.name}`).getComponent(cc.Button).interactable = true;
            cc.find(`Canvas/${node.name}`).getComponent(DollTouchEvent).isXi = true;
            node.parent.children.forEach(child => {
                child.getComponent(cc.Button).interactable = true;
            });
        }.bind(this);
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
              
                this.photoNode.scale = this.photoNode.scale * 0.8;
                cc.find('photo/mask/bg', this.node).scaleY = this.photoNode.scaleY;
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
    backHome() {
        showLaoding.getInstance().loadingDoneCallback = function () {
            showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('dyeSlimeCE',12);
        };
        showLaoding.getInstance().showAds(false);
    }
}
