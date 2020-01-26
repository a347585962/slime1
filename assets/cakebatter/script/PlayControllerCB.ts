import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import DragonCompoent from "./DragonCompoentCB";
import TipManager from "./TipManagerCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import MoveIn from "../common/Script/MoveInCB";
import DragonBoneScaleBy, { dragonBoneScaleTo } from "./DragonBoneActionsCB";
import PopupComponet from "./PopupComponetCB";
import DataConfig from "./DataConfigCB";
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
    actionNode:cc.Node = null;
    maxGilrY = null;
    startGirlY = null;
    initDistance = null;
    girlRotation = null;
    slimRotation = null;
    girlPos = null;
    start() {
        let color = DataConfig.getInstance().getColors();
        let index = DataConfig.getInstance().getIndex();
        if (!color) {
            color = 'yellow';
        }
        if (!index) {
            index = '3';
        }
        this.node.getChildByName('girl0').getComponent(MoveIn).actionCallBack = function () { 
            this.showSlimeAction();
        }.bind(this);
        cc.loader.loadRes(`cakebatter/image/slime/slime_${color}1`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/slime/slime1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.loadRes(`cakebatter/image/slime/slime_${color}4`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.find('Canvas/slime/slime2').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }.bind(this))
            cc.loader.loadRes(`cakebatter/image/motion1/motion1_slime${index}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.find('Canvas/slime/slime1/foam').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }.bind(this))
            cc.loader.loadRes(`cakebatter/image/motion4/motion4_slime${index}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.find('Canvas/slime/slime2/foam').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            }.bind(this))
        }.bind(this));
    }
    showSlimeAction() {
        this.node.getChildByName('girl0').runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/girl0/front').active = false;
                cc.find('Canvas/girl0/back').active = true;
                cc.find('Canvas/slime').runAction(cc.sequence(
                    cc.moveBy(1, cc.v2(-50, -50)),
                    cc.moveBy(1,cc.v2(50,50))
                ))
            }.bind(this)),
            cc.moveBy(1, cc.v2(-50, -50)),
            cc.moveBy(1, cc.v2(50, 50)),
            cc.callFunc(function () {
                cc.find('Canvas/slime').runAction(cc.scaleTo(1,1,1));
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('girl1').runAction(cc.repeatForever(cc.sequence(
                    cc.callFunc(function () {
                        this.node.getChildByName('girl1').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(0.5)
                )));
                cc.find('Canvas/slime/slime1').active = false;
                cc.find('Canvas/slime/slime2').active = true;
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                cc.find('Canvas/girl1/action0').active = false;
                cc.find('Canvas/girl1/action1').active = true;
                cc.find('Canvas/girl1/action2').active = false;
                this.addTouchEvent();
            }.bind(this))
        ))
    }
    addTouchEvent() {
        this.node.getChildByName('arrow_right').active = true;
        let soundPath = ["sound/fatanstic.mp3", "sound/Nice.mp3", "sound/great.mp3"];
        this.node.runAction(cc.sequence(cc.delayTime(3),
            cc.callFunc(function () {
                let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                btn_next.active = true;
                btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
            }.bind(this))
        ))
        this.node.getChildByName('bg').runAction(cc.repeatForever(cc.sequence(
            cc.delayTime(3),
            cc.callFunc(function () {
                this.node.getChildByName('bg').getComponent(cc.AudioSource).play();
            }.bind(this))
        )));
        this.node.getChildByName('bg').runAction(cc.repeatForever(cc.sequence(
            cc.delayTime(5),
            cc.callFunc(function () {
                let index = Math.floor(Math.random() * 3);
                console.log(index);
                cc.loader.loadRes(soundPath[index] + "", cc.AudioClip, function (err, audio) {
                    cc.loader.setAutoReleaseRecursively(audio, true);
                    if(err)
                        return;
                    cc.audioEngine.playEffect(audio, false);
                })
            }.bind(this))
        )));

        cc.director.getActionManager().pauseTarget(this.node.getChildByName('girl1'));
        cc.director.getActionManager().pauseTarget(this.node);
        cc.director.getActionManager().pauseTarget(this.node.getChildByName('bg'));
       
       
        let pos1 = this.node.getChildByName('girl0').getPosition();
        let pos2 = this.node.getChildByName('girl1').getPosition();

        this.girlPos = pos2;
        this.girlRotation = this.calculateAngle(pos1, pos2);
        this.slimRotation = cc.find('Canvas/slime').rotation;
        this.initDistance = this.calculatedistance(pos1, pos2);

        console.log(this.initDistance);
        this.registerTouchEvent();

    }
    registerTouchEvent() {
        let girl = this.node.getChildByName('girl1');
        girl.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        girl.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        girl.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        girl.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        let girl = this.node.getChildByName('girl1');
        girl.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        girl.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        girl.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        girl.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    onTouchStart() {
        this.node.getChildByName('arrow_right').active = false;
        cc.director.getActionManager().resumeTarget(this.node.getChildByName('girl1'));
        cc.director.getActionManager().resumeTarget(this.node);
        cc.director.getActionManager().resumeTarget(this.node.getChildByName('bg'));

    }
    //触摸移动；
    onTouchMove(event) {
        this.node.getChildByName('arrow_right').active = false;
        //cc.find('Canvas/sculpey/finger').active = false;
        let girl = this.node.getChildByName('girl1');
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        
        var subPos = oldPos.sub(newPos);
        girl.x = this.girlPos.x - subPos.x;
        girl.y = this.girlPos.y - subPos.y;  
        var minX = -250; //最小X坐标；
        var maxX = 250;
        var minY = 150; //最小Y坐标；
        var maxY = 250;
        var nPos = girl.getPosition(); //节点实时坐标；
        if (nPos.x <= -50) {
            cc.find('Canvas/girl1/action1').active = false;
            cc.find('Canvas/girl1/action2').active = true;
        } else {
            cc.find('Canvas/girl1/action1').active = true;
            cc.find('Canvas/girl1/action2').active = false;
        }
 
        if (nPos.x < minX) {
            nPos.x = minX;
        };
        if (nPos.x > maxX) {
            nPos.x = maxX;
        };
        if (nPos.y < minY) {
            nPos.y = minY;
        };
        if (nPos.y > maxY) {
            nPos.y = maxY;
        };
        girl.setPosition(nPos);
        this.caculateScale();
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        cc.director.getActionManager().pauseTarget(this.node.getChildByName('girl1'));
        cc.director.getActionManager().pauseTarget(this.node.getChildByName('bg'));
        this.girlPos = this.node.getChildByName('girl1').getPosition();
        this.showEndAction();
    }
    caculateScale() {
        let pos1 = this.node.getChildByName('girl0').getPosition();
        let pos2 = this.node.getChildByName('girl1').getPosition();
        let distance = this.calculatedistance(pos1, pos2);
        let scale = distance / this.initDistance;
        cc.find('Canvas/slime').setScale(cc.v2(scale,1));

        let rotation = this.calculateAngle(pos1, pos2) - this.girlRotation;
        
        cc.find('Canvas/slime').setRotation(this.slimRotation + rotation);
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
    hideParticle() {
        this._showpartic = -1;
        let heartFullColor = CocosHelper.findNode(cc.Canvas.instance.node, "heartFullColor");
        // heartFullColor.active = false;

        let p = heartFullColor.getComponent(cc.ParticleSystem);
        p.stopSystem();
    }
    camera() {
        cc.find('Canvas/girl1/action0/eye0').getComponent(cc.Animation).pause();
        cc.find('Canvas/girl1/action1/eye0').getComponent(cc.Animation).pause();
        cc.find('Canvas/girl1/action2/eye0').getComponent(cc.Animation).pause();
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
                if(height<designSize.height){
                    this.photoNode.setScale(height/designSize.height);
                }
                if(width<designSize.width) {
                    this.photoNode.setScale(width/designSize.width);
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
        cc.find('Canvas/girl1/action0/eye0').getComponent(cc.Animation).resume();
        cc.find('Canvas/girl1/action1/eye0').getComponent(cc.Animation).resume();
        cc.find('Canvas/girl1/action2/eye0').getComponent(cc.Animation).resume();
    }

    // touchNextBtn() {
    //     TransitionScene.changeScene('clickSlimeCB');
    // }
    // touchBackBtn() {
    //     TransitionScene.changeScene('makeSculpey');
    // }
    private showEndAction() {
        this.destroyTouchEvent();
        let slime = this.node.getChildByName('slime');
        slime.getComponent(cc.AudioSource).play();
        let actionTag = 101014;
        slime.stopActionByTag(actionTag);
        let timeScale = 1;
        let touchEndScale = new cc.Vec2();
        touchEndScale.x = slime.scaleX;
        touchEndScale.y = slime.scaleY;
        let lScale0 = cc.scaleTo(0, touchEndScale.x, touchEndScale.y);
        let lScale1 = cc.scaleTo(0.13*timeScale, touchEndScale.x,0.9*touchEndScale.y);
        let lScale2 = cc.scaleTo(0.11*timeScale, 0.95*touchEndScale.x, touchEndScale.y);
        let lScale3 = cc.scaleTo(0.10*timeScale, touchEndScale.x, 0.96*touchEndScale.y);
        let lScale4 = cc.scaleTo(0.09*timeScale, 0.98*touchEndScale.x, touchEndScale.y);
        let lScale5 = cc.scaleTo(0.08*timeScale, touchEndScale.x, 0.99*touchEndScale.y);
        let lScale6 = cc.scaleTo(0.07 * timeScale, touchEndScale.x, touchEndScale.y);
        let callback = cc.callFunc(function () {
            this.registerTouchEvent();
        }.bind(this))
        let ret = cc.sequence(lScale0, lScale1, lScale2, lScale3, lScale4, lScale5, lScale6, callback);
        ret.setTag(actionTag);
        slime.runAction(ret);
    }
    private calculatedistance(pos1:cc.Vec2, pos2:cc.Vec2){

        let dx = pos2.x - pos1.x;
        let dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);

    }
    private calculateAngle(first:cc.Vec2, second:cc.Vec2)
    {
        let len_y = second.y - first.y;
        let len_x = second.x - first.x;
        let tan_yx = Math.abs(len_y / len_x);
        let temp = Math.atan(tan_yx) * 180/Math.PI;
        let angle = 0;
        if(len_y > 0 && len_x < 0){
            angle = temp - 90;
        }
        else if(len_y > 0 && len_x > 0){
            angle = -temp + 90;
        }
        else if(len_y < 0 && len_x < 0){
            angle = -temp - 90;
        }
        else if(len_y < 0 && len_x > 0){
            angle = temp + 90;
        }
        else if(len_y == 0 && len_x != 0){
            angle = len_x < 0 ? -90 : 90;
        }
        else if(len_x == 0 && len_y != 0){
            angle = len_y < 0 ? 180 : 0;
        }
        return angle;
    }
    touchNextBtn() {
        //TransitionScene.changeScene('playSlime');

        cc.sys.localStorage.setItem("fromHall", 10);
        cc.sys.garbageCollect();
        cc.game.restart();

    }
    touchBackBtn() {
        TransitionScene.changeScene('clickSlimeCB');
    }

}
