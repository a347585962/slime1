import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRP";
import TipManager from "./TipManagerRP";

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
export default class DragonTouchEvent extends cc.Component {

    private _moveBone: dragonBones.Bone = null;
    private initPos = null;
    count: number = 0;
    onLoad() {
        cc.find('Canvas/finger').active = true;
        let dragon = this.node;
        let _armatureDisplay = dragon.getComponent(dragonBones.ArmatureDisplay);
        let _armature = dragon.getComponent(dragonBones.ArmatureDisplay).armature();
        this._moveBone = _armature.getBone('shadow');
        this.initPos = this._moveBone.offset;
        this.registerTouchEvent();

    }

    registerTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this)
    }
    onTouchStart() {
        cc.find('Canvas/finger').active = false;
        cc.find('Canvas').getComponent(cc.AudioSource).play();
        
    }
    //触摸移动；
    onTouchMove(event) {
       
        cc.find('Canvas/finger').active = false;
        let deta: cc.Vec2 = event.getDelta();
        if(this._moveBone){
            this._moveBone.offset.x = this._moveBone.offset.x + deta.x;
            this._moveBone.offset.y = this._moveBone.offset.y + deta.y;
            if (this._moveBone.offset.y<0) {
                this._moveBone.offset.y = 0;
            }
             this._moveBone.invalidUpdate();
        }
       
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {

        this.destroyTouchEvent();
        this.jumpTo(this._moveBone.offset.x);
        cc.log(this._moveBone);
      
        this._moveBone.offset.x = 0;
        this._moveBone.offset.y = 0;
        this._moveBone.invalidUpdate();
    }
    jumpTo(distance) {
       
        let posX = this.node.x;
        
        if (posX + distance > cc.find('Canvas').width / 2) {
            distance = cc.find('Canvas').width / 2 - posX;
        }
        if (posX + distance < -cc.find('Canvas').width / 2) {
            distance = -cc.find('Canvas').width / 2 - posX;
        }
        let pos1 = this.node.getPosition().add(cc.v2(distance / 2, 0));
        let pos2 = this.node.getPosition().add(cc.v2(distance, 0));
        let y = Math.random() * 100 + 150;

        var jumpUp = cc.moveBy(0.5, cc.p(0, y)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(0.5, cc.p(0, -y)).easing(cc.easeCubicActionIn());
        let action1 = cc.spawn(cc.moveTo(1, pos1), cc.sequence(jumpUp, jumpDown));
        let action2 = cc.spawn(cc.moveTo(1, pos2), cc.sequence(jumpUp, jumpDown));
        this.node.runAction(cc.sequence(
            action1,
            cc.callFunc(function () {
                this.node.getComponent(cc.Animation).play();
                this.node.getComponent(cc.AudioSource).play();
            }.bind(this)),
            action2,
            cc.callFunc(function () {
                this.node.getComponent(cc.Animation).play();
                this.node.getComponent(cc.AudioSource).play();
                this.registerTouchEvent();
                this.count = this.count + 1;
                if (this.count == 3) {
                    cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                }
                if (this.count % 3 == 0) {
                    TipManager.getInstance().jumpTips();
                }
            }.bind(this))

        ));
    }
}
