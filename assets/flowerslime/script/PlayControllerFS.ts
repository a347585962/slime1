import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import TipManager from "./TipManagerFS";
import PopupComponet from "./PopupComponetFS";

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
    @property(cc.Node)
    touchNode: cc.Node = null;
    count: number = 0;
    photoNode:cc.Node = null;
    filePath:string = null;
   
    onLoad() {
        this.count = 0;
        this.registerTouchEvent();
    }
    registerTouchEvent() {
   
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this)
    }
    onTouchStart(event) {
        this.touchNode.getComponent(cc.AudioSource).play();
        cc.find('Canvas/slime/mix6').setScale(1);
        cc.find('Canvas/slime/mix6').stopAllActions();
        cc.find('Canvas/slime/mix6').runAction(cc.sequence(
            cc.scaleTo(0.1, 1.05, 0.95),
            cc.scaleTo(0.1, 0.95, 1.05),
            cc.scaleTo(0.1, 1.02, 0.98),
            cc.scaleTo(0.1, 0.98, 1.02),
            cc.scaleTo(0.1, 1, 1)
        ))
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/arrow').active = false;
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());

        var pos = touches[0].getDelta();
        
        var subPos = oldPos.sub(newPos);

      
        cc.find('Canvas/slime/h_l0').y = cc.find('Canvas/slime/h_l0').y - subPos.y/15;
        cc.find('Canvas/slime/h_r0').y = cc.find('Canvas/slime/h_r0').y - subPos.y/15;
        cc.find('Canvas/slime/h_l1').y = cc.find('Canvas/slime/h_l1').y - subPos.y/15;
        cc.find('Canvas/slime/h_r1').y = cc.find('Canvas/slime/h_r1').y - subPos.y/15;
        cc.log(subPos.y / 4);
        
        let distance = cc.find('Canvas/slime/h_l0').y + 290;
        let scaleY = distance / 290;
        if (scaleY > 1) {
            scaleY = 1;
        }
        if (scaleY < 0) {
            scaleY = 0;
        }
        cc.find('Canvas/slime/pull').scaleY = scaleY;

         
        

        // 控制节点移动范围; 
        var minY = -290; //最小Y坐标；
        var maxY = 0;
        var nPos =  cc.find('Canvas/slime/h_l0').getPosition(); //节点实时坐标；

        if (nPos.y < minY) {
            nPos.y = minY;
        };
        if (nPos.y > maxY) {
            nPos.y = maxY;
        };
        cc.find('Canvas/slime/h_l0').setPosition(cc.v2(cc.find('Canvas/slime/h_l0').x, nPos.y));
        cc.find('Canvas/slime/h_l1').setPosition(cc.v2(cc.find('Canvas/slime/h_l1').x, nPos.y));
        cc.find('Canvas/slime/h_r0').setPosition(cc.v2(cc.find('Canvas/slime/h_r0').x, nPos.y));
        cc.find('Canvas/slime/h_r1').setPosition(cc.v2( cc.find('Canvas/slime/h_r1').x, nPos.y));
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        this.touchNode.getComponent(cc.AudioSource).play();
        cc.find('Canvas/slime/mix6').setScale(1);
        cc.find('Canvas/slime/mix6').stopAllActions();
        cc.find('Canvas/slime/mix6').runAction(cc.sequence(
            cc.scaleTo(0.1, 1.05, 0.95),
            cc.scaleTo(0.1, 0.95, 1.05),
            cc.scaleTo(0.1, 1.02, 0.98),
            cc.scaleTo(0.1, 0.98, 1.02),
            cc.scaleTo(0.1, 1, 1)
        ))
        let distance = cc.find('Canvas/slime/h_l0').y + 290;
        if (distance >= 150) {
            this.count = this.count + 1;
            if (this.count % 3 == 0) {
                TipManager.getInstance().jumpTips();
            }
            if (this.count == 7) {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                btn_next.active = true;
                btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
            }
        }
        this.destroyTouchEvent();
        cc.find('Canvas/slime/h_l0').runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(cc.find('Canvas/slime/h_l0').x, -290)),
            cc.callFunc(function () {
                this.registerTouchEvent();
            }.bind(this))
        ));
        cc.find('Canvas/slime/pull').runAction(cc.scaleTo(0.5, 0.8, 0));
        cc.find('Canvas/slime/h_r0').runAction(cc.moveTo(0.5, cc.v2(cc.find('Canvas/slime/h_r0').x, -290)));
        cc.find('Canvas/slime/h_l1').runAction(cc.moveTo(0.5, cc.v2(cc.find('Canvas/slime/h_l1').x, -290)));
        cc.find('Canvas/slime/h_r1').runAction(cc.moveTo(0.5, cc.v2(cc.find('Canvas/slime/h_r1').x, -290)))
    }
    touchNextBtn() {
        TransitionScene.changeScene('clickSlimeFS');
    }
    touchBackBtn() {
        TransitionScene.changeScene('coilSlime');
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
                if (height < designSize.height) {
                    scaleY = height / designSize.height;
                    this.photoNode.setScale(scaleY);
                   
                }
                if (width < designSize.width) {
                    scaleX = width / designSize.width;
                    this.photoNode.setScale(scaleX);
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
