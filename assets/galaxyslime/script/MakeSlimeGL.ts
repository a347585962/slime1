import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGL";
import MixComponent from "../common/Script/CombinedComponent/MixComponentGL";
import MoveIn from "../common/Script/compoent/MoveInGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import TipManager from "./TipManagerGL";
import showLaoding from "../common/Script/ads/showLaodingGL";

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
export default class MakeSlime extends cc.Component {
    count: number = 0;
    addCount: number = 0;
    onLoad() {
        cc.find('Canvas/bg/planet1').runAction(cc.repeatForever(
            cc.sequence(
                cc.moveBy(2, cc.v2(0, 13)),
                cc.moveBy(2, cc.v2(0, -13))
            )
        ));
        cc.find('Canvas/bg/planet3').runAction(cc.repeatForever(
            cc.sequence(
                cc.moveBy(3, cc.v2(0, 15)),
                cc.moveBy(3, cc.v2(0, -15))
            )
        ));
        cc.find('Canvas/bg/planet0').runAction(cc.repeatForever(
            cc.sequence(
                cc.moveBy(3, cc.v2(0, 10)),
                cc.moveBy(3,cc.v2(0,-10))
            )
        ))
        this.node.getChildByName('glue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('liquidstarch').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('liquidstarch').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        cc.find('Canvas/bowl_blue/glitter').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_blue/glitter').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/bowl_purple/glitter').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_purple/glitter').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/bowl_purple/tipMove').active = true;
        }.bind(this);
        cc.find('Canvas/bowl_pink/glitter').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_pink/glitter').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/bowl_blue/paint').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_blue/paint').getComponent(cc.Button).interactable = true;
            cc.find('Canvas/bowl_blue/paint/paint_lid').active = false;
        }.bind(this);
        cc.find('Canvas/bowl_purple/paint').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_purple/paint').getComponent(cc.Button).interactable = true;
            cc.find('Canvas/bowl_purple/tipClick').active = true;
            cc.find('Canvas/bowl_purple/paint/paint_lid').active = false;
        }.bind(this);
        cc.find('Canvas/bowl_pink/paint').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_pink/paint').getComponent(cc.Button).interactable = true;
            cc.find('Canvas/bowl_pink/paint/paint_lid').active = false;
        }.bind(this);
        cc.find('Canvas/bowl_blue/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_blue/spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/bowl_purple/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_purple/spoon').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/bowl_purple/tipRotate').active = true;
        }.bind(this);
        cc.find('Canvas/bowl_pink/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl_pink/spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
    }
    glueTouchEnd() {
        cc.find('glue/glue0', this.node).active = false;
        cc.find('glue/glue1', this.node).active = true;
        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('glue').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(150, 200))),
            cc.callFunc(function () {
                
                cc.find('glue/pourGlue', this.node).active = true;
                cc.find('glue/pourGlue', this.node).getComponent(cc.AudioSource).play();
                cc.find('bowl_purple/mix0/glue',this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.moveTo(0.5, cc.v2(-50, 0)),
            cc.callFunc(function () {
                cc.find('bowl_blue/mix0/glue',this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.moveTo(0.5, cc.v2(350, 0)),
            cc.callFunc(function () {
                cc.find('bowl_pink/mix0/glue',this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                cc.find('glue/pourGlue', this.node).getComponent(cc.AudioSource).stop();
                cc.find('glue/pourGlue', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/bowl_pink/glitter').getComponent(MoveIn).doShowAction();
                cc.find('Canvas/bowl_purple/glitter').getComponent(MoveIn).doShowAction();
                cc.find('Canvas/bowl_blue/glitter').getComponent(MoveIn).doShowAction();
            }.bind(this))
            ))
    }
    glueTouchCancle() {
        cc.find('glue/glue_shadow', this.node).active = true;
    }
    glueTouchMove() {
        cc.find('glue/glue_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    glitterTouchCancle(event) {
        let node = event.target;
        node.getChildByName('glitter_shadow').active = true;
    }
    glitterTouchMove(event) { 
        let node = event.target;
        node.getChildByName('glitter_shadow').active = false;
    }
    glitterTouchEnd(event) {
        let node = event.target;
        let parentNode = node.parent;
        if (parentNode.getChildByName('tipMove')) {
            parentNode.getChildByName('tipMove').active = false;
        }
       
        node.removeComponent(SpriteDrag);
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(0.5, cc.v2(100, 150)),cc.rotateTo(0.5,-90)),
            cc.callFunc(function () {
                node.getChildByName('glitter_lid').active = false;
                node.getChildByName('glitter_fall').runAction(cc.fadeTo(2,0));
                node.getChildByName('pourGlitter').active = true;
                node.getChildByName('pourGlitter').getComponent(cc.AudioSource).play();
                cc.find('mix0/glitter',parentNode).runAction(cc.scaleTo(2, 1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                node.getChildByName('pourGlitter').getComponent(cc.AudioSource).stop();
                node.getChildByName('pourGlitter').active = false;
                this.count = this.count + 1;
                if (this.count == 3) {
                    this.node.getChildByName('liquidstarch').getComponent(MoveIn).doShowAction();
                    this.count = 0;
                }
            }.bind(this)),
            cc.spawn(cc.moveBy(0.5,cc.v2(1000,0)),cc.rotateTo(0.5,0))
        ))
        
    }
    liqTouchEnd() {
      
        cc.find('liquidstarch/liquidstarch_lid', this.node).active = false;
        this.node.getChildByName('liquidstarch').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('liquidstarch').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(180, 220))),
            cc.callFunc(function () {
                
                cc.find('liquidstarch/pour', this.node).active = true;
                cc.find('liquidstarch/pour', this.node).getComponent(cc.AudioSource).play();
                cc.find(`bowl_purple/mix${this.addCount}/liquidstarch`,this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.moveTo(0.5, cc.v2(-20, 20)),
            cc.callFunc(function () {
                cc.find(`bowl_blue/mix${this.addCount}/liquidstarch`,this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.moveTo(0.5, cc.v2(370, 20)),
            cc.callFunc(function () {
                cc.find(`bowl_pink/mix${this.addCount}/liquidstarch`,this.node).runAction(cc.fadeTo(3,255))
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                cc.find('liquidstarch/pour', this.node).getComponent(cc.AudioSource).stop();
                cc.find('liquidstarch/pour', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                if (this.addCount == 0) {
                    TipManager.getInstance().jumpTips();
                    cc.find('liquidstarch/liquidstarch_lid', this.node).active = true;
                    this.node.getChildByName('liquidstarch').opacity = 0;
                    this.node.getChildByName('liquidstarch').setPosition(cc.v2(300, 160));
                    cc.find('Canvas/bowl_pink/paint').getComponent(MoveIn).doShowAction();
                    cc.find('Canvas/bowl_purple/paint').getComponent(MoveIn).doShowAction();
                    cc.find('Canvas/bowl_blue/paint').getComponent(MoveIn).doShowAction();
                } else {
                    cc.find('Canvas/bowl_pink/spoon').getComponent(SpriteDrag).enabled = true;
                    cc.find('Canvas/bowl_purple/spoon').getComponent(SpriteDrag).enabled = true;
                    cc.find('Canvas/bowl_blue/spoon').getComponent(SpriteDrag).enabled = true;
                }
            }.bind(this))
            ))
    }
    liqTouchCancle() {
        cc.find('liquidstarch/liquidstarch_shadow', this.node).active = true;
    }
    liqTouchMove() {
        cc.find('liquidstarch/liquidstarch_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    paintClick(event) {
        let node = event.target;
        let parentNode = node.parent;
        node.getComponent(cc.AudioSource).play();
        node.getComponent(cc.Button).interactable = false;
        if (parentNode.getChildByName('tipClick')) {
            parentNode.getChildByName('tipClick').active = false;
        }
       
        node.getChildByName('paintpurple').runAction(cc.scaleTo(0.5, 1));
        node.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.callFunc(function () {
                node.getChildByName('paintpurple').active = false;
                cc.find('mix0/paint', parentNode).active = true;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                parentNode.getChildByName('spoon').getComponent(MoveIn).doShowAction();
            }.bind(this))

        ))
        
    }
    spoonTouchStart(event) {
        let node = event.target;
        let parentNode = node.parent;
        node.getChildByName('spoon0').active = false;
        if (parentNode.getChildByName('tipRotate')) {
            parentNode.getChildByName('tipRotate').active = false;
        }
        this.playAction(parentNode.getChildByName(`mix${this.addCount}`));
    }
    spoonTouchEnd(event) {
        let node = event.target;
        let parentNode = node.parent;
        node.getChildByName('spoon0').active = true;
        this.stopAction(parentNode.getChildByName(`mix${this.addCount}`));
    }
    spoonTouchCancle(event) {
        let node = event.target;
        node.getChildByName('spoon0').active = true;
        node.setPosition(cc.v2(50, 100));
    }
    playAction(node:cc.Node) {
        let s1 = cc.scaleTo(0.5,1,0.95);
        let s2 = cc.scaleTo(0.5, 0.96, 1);
        node.runAction(cc.repeatForever(cc.sequence(s1, s2)));
        node.getComponent(MixComponent).startMix();
    }
    stopAction(node:cc.Node) {
        node.stopAllActions(); 
        node.getComponent(MixComponent).stopMix();
    }
   
    mixFinish(event) {
        let node = event.node;
        let parentNode = node.parent;

        node.stopAllActions(); 
        node.setScale(1);
        parentNode.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        parentNode.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        parentNode.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
        if (this.addCount == 0) {
            this.count = this.count + 1;
            parentNode.getChildByName('spoon').runAction(cc.moveTo(0.2, cc.v2(120, 90)));
            parentNode.getChildByName('mix0').active = false;
            parentNode.getChildByName('mix1').active = true;
            if (this.count == 3) {
                this.addCount = this.addCount + 1;
                this.node.getChildByName('liquidstarch').getComponent(MoveIn).doShowAction();
                TipManager.getInstance().jumpTips();
                this.count = 0;
            }
        } else {
            parentNode.getChildByName('spoon').runAction(cc.moveBy(0.5, cc.v2(1600, 0)));
            parentNode.getChildByName('mix1').active = false;
            parentNode.getChildByName('slime').active = true;
            this.registerTouchEvent(parentNode.getChildByName('slime'));
            if (parentNode.getChildByName('finger')) {
                parentNode.getChildByName('finger').active = true;
            }
           
        }
   
    }
    registerTouchEvent(touchNode:cc.Node) {
   
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent(touchNode: cc.Node) {
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this)
    }
    onTouchStart(event) {
        let node = event.target
        node.getComponent(cc.AudioSource).play();
    }
    //触摸移动；
    onTouchMove(event) {
        let node = event.target;
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        let currentNode = node.getChildByName('mixok');
        var subPos = newPos.sub(oldPos);
        let scaleY =  currentNode.scaleY+(subPos.y / 10 / 500);
        if (scaleY > 1) {
            scaleY = 1;
        }
        if (scaleY < 0) {
            scaleY = 0;
        }
        currentNode.scaleY = scaleY;
            //cc.find('slime/pull1',this.node).scaleY = scaleY;

        
    }
    onTouchEnd(event) {
        this._touchEnd(event);
    }
    onTouchCancle(event) {
        
        this._touchEnd(event);
    }
    private _touchEnd(event) {
      
        let node = event.target;
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());
        let currentNode = node.getChildByName('mixok');
        

        var subPos = newPos.sub(oldPos);
        this.node.runAction(cc.sequence(
           cc.delayTime(0.5),
            cc.callFunc(function () {
                // this.registerTouchEvent();
                node.getComponent(cc.AudioSource).play();
                node.runAction(cc.sequence(
                    cc.scaleTo(0.1, 1.05, 0.95),
                    cc.scaleTo(0.1, 0.95, 1.05),
                    cc.scaleTo(0.1, 1.02, 0.98),
                    cc.scaleTo(0.1, 0.98, 1.02),
                    cc.scaleTo(0.1, 1, 1)
                ))
                if (subPos.y > 50) {
                    node.parent.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                    node.parent.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
                    node.parent.getChildByName('finger').active = false;
                    this.count = this.count + 1;
                    this.destroyTouchEvent(node);
                    if (this.count == 3) {
                        this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                        this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                        this.node.runAction(cc.sequence(
                            cc.delayTime(0.5),
                            cc.callFunc(function () {
                                TransitionScene.changeScene('fuseSlimeGL', 12);
                            }.bind(this))
                        ))
                    }
                }
                
            }.bind(this))
        ));

        
        currentNode.runAction(cc.scaleTo(0.5, 1, 0));
    }
}
