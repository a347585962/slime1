import MoveIn from "../common/Script/MoveInHC";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragHC";
import MixComponent from "../common/Script/CombinedComponent/MixComponentHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";

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
export default class AddController extends cc.Component {
    onLoad() {
        this.init();
    }
    init() {
        
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);

        this.node.getChildByName('glue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
        }.bind(this)
        this.node.getChildByName('warm').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('warm').getComponent(SpriteDrag).enabled = true;
        }.bind(this)
        this.node.getChildByName('soda').getComponent(MoveIn).actionCallBack = function () {
            cc.find('soda/soda_scoop', this.node).getComponent(cc.Button).interactable = true;
            cc.find('soda/tipClick', this.node).active = true;
        }.bind(this)
        this.node.getChildByName('pure').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('pure').getComponent(SpriteDrag).enabled = true;
        }.bind(this)
        this.node.getChildByName('chocolate').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('chocolate').getComponent(SpriteDrag).enabled = true;
        }.bind(this)
        this.node.getChildByName('spoon').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this)
    }
    glueTouchEnd() {
        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('glue').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(30, 230))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).resetSystem();
                cc.find('dish/mix',this.node).runAction(cc.scaleTo(5,1))
            }.bind(this)),
            cc.delayTime(5),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).stopSystem();
                cc.find('glue/pourGlue', this.node).active = false;
                this.node.getChildByName('warm').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(1600, 230)))
            ))
    }
    glueTouchCancle() {
        cc.find('glue/glue0_shadow', this.node).active = true;
    }
    glueTouchMove() {
        cc.find('glue/glue0_shadow', this.node).active = false;
    }
    warmTouchEnd() {
        this.node.getChildByName('warm').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('warm').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -80), cc.moveTo(0.5, cc.v2(70, 100))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('warm/warm0', this.node).active = false;
                cc.find('warm/warm1', this.node).active = true;
                cc.find('warm/pourWarm', this.node).active = true;
                cc.find('warm/pourWarm', this.node).setScale(0);
                cc.find('warm/pourWarm', this.node).runAction(cc.scaleTo(0.5, 1));
                cc.find('dish/warm', this.node).runAction(cc.scaleTo(3, 1));
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('warm/pourWarm', this.node).active = false;
                cc.find('warm/warm0', this.node).active = true;
                cc.find('warm/warm1', this.node).active = false;
                this.node.getChildByName('chocolate').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(1600, 100)))
            ))
    }
    warmTouchCancle() {
        cc.find('warm/warm0_shadow', this.node).active = true;
    }
    warmTouchMove() {
        if (cc.find('warm/warm0_shadow', this.node).active = true) {
            cc.find('warm/warm0_shadow', this.node).active = false;
        } 
    }
    spoonTouchStart() {
        cc.find('soda/finger', this.node).active = false;
    }
    spoonTouchEnd() {
        cc.find('soda/soda_scoop', this.node).getComponent(SpriteDrag).enabled = false;
        cc.find('soda/soda_scoop',this.node).runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(-212, 320)),
            cc.callFunc(function () {
                    this.node.getChildByName('soda').getComponent(cc.AudioSource).play();
                    cc.find('soda/soda_scoop/pourSugar',this.node).getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('dish/soda', this.node).runAction(cc.scaleTo(2, 1));
                    cc.find('soda/soda_scoop/soda_scoop0', this.node).runAction(cc.scaleTo(1, 0));
                }.bind(this)),
                cc.delayTime(2),
            cc.callFunc(function () {
                    this.node.getChildByName('soda').getComponent(cc.AudioSource).stop();
                    cc.find('soda/soda_scoop/pourSugar', this.node).getComponent(cc.ParticleSystem).stopSystem();
                    cc.find('soda/soda_scoop/pourSugar', this.node).active = false;
                    this.node.getChildByName('pure').getComponent(MoveIn).doShowAction();
                }.bind(this)),
                cc.moveTo(0.5, cc.v2(100, 170)),
                cc.callFunc(function () {
                    this.node.getChildByName('soda').runAction(cc.moveTo(0.5, cc.v2(1600, 0)));
                }.bind(this))
                ))
    }
    spoonClick() {
        cc.find('soda/tipClick', this.node).active = false;
        cc.find('soda/soda_scoop', this.node).rotation = -5;
        cc.find('soda/soda_scoop', this.node).setPosition(cc.v2(105, 175));
        cc.find('soda/soda_scoop', this.node).runAction(cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(100,170))));
        cc.find('soda/soda2', this.node).runAction(cc.moveBy(0.5, cc.v2(0, -15)));
        cc.find('soda/soda_scoop/soda_scoop0', this.node).runAction(cc.sequence(cc.scaleTo(0.5, 1),
            cc.callFunc(function () {
                cc.find('soda/finger', this.node).active = true;
                cc.find('soda/soda_scoop', this.node).getComponent(SpriteDrag).enabled = true;
            }.bind(this))
        ))
    }
    pureTouchEnd() {
        this.node.getChildByName('pure').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('pure').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(0, 260))),
            cc.callFunc(function () {
                cc.find('pure/pure0', this.node).active = false;
                cc.find('pure/pure1', this.node).active = true;
                cc.find('pure/pourPure', this.node).runAction(cc.sequence(cc.scaleTo(0.5, 1), cc.callFunc(function () {
                    this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                    cc.find('pure/pourPure', this.node).getComponent(cc.Animation).play('pourPure');
                }.bind(this))));
                cc.find('dish/pure', this.node).runAction(cc.scaleTo(3, 1));
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('pure/pourPure', this.node).getComponent(cc.Animation).stop();
                cc.find('pure/pourPure', this.node).active = false;
                cc.find('pure/pure0', this.node).active = true;
                cc.find('pure/pure1', this.node).active = false;
                this.node.getChildByName('dish').runAction(cc.moveTo(0.5, cc.v2(0, 0)));
                this.node.getChildByName('spoon').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(1600, 260)))
            ))
    }
    pureTouchCancle() {
        cc.find('pure/pure_shadow', this.node).active = true;
    }
    pureTouchMove() {
        cc.find('pure/pure_shadow', this.node).active = false;
    }
    chocolateTouchEnd() {
        this.node.getChildByName('chocolate').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('chocolate').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -80), cc.moveTo(0.5, cc.v2(10, 150))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('chocolate/pourChocolate', this.node).active = true;
                cc.find('chocolate/chocolate1', this.node).active = true;
                cc.find('chocolate/chocolate0', this.node).active = false;
                cc.find('dish/chocolate',this.node).runAction(cc.scaleTo(3,1))
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('chocolate/chocolate1', this.node).active = false;
                cc.find('chocolate/chocolate0', this.node).active = true;
                cc.find('chocolate/pourChocolate', this.node).active = false;
                this.node.getChildByName('soda').getComponent(MoveIn).doShowAction();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(1600, 150)))
            ))
    }
    chocolateTouchCancle() {
        cc.find('chocolate/chocolate_shadow', this.node).active = true;
    }
    chocolateTouchMove() {
        cc.find('chocolate/chocolate_shadow', this.node).active = false;
    }
    mixStart() {
        cc.find('dish/mix', this.node).getComponent(MixComponent).startMix();
        cc.find('dish/chocolate', this.node).active = false;
        cc.find('dish/warm', this.node).active = false;
        cc.find('dish/soda', this.node).active = false;
        cc.find('dish/pure', this.node).active = false;
        cc.find('spoon/spoon0', this.node).active = false;
        this.playAction();
    }
    mixEnd() {
        cc.find('dish/mix', this.node).getComponent(MixComponent).stopMix();
        cc.find('spoon/spoon0', this.node).active = true;
        this.stopAction();
    }
    playAction(){
        let s1 = cc.scaleTo(0.7,1,0.95);
        let s2 = cc.scaleTo(0.8, 0.95, 1.08);
        cc.find('dish/mix', this.node).runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find('dish/mix', this.node).runAction(cc.repeatForever(cc.rotateBy(20,360)));
    }
    stopAction(){
        cc.find('dish/mix', this.node).stopAllActions();   
    }
    mixFinish() {
        this.stopAction();
        this.node.getChildByName('spoon').runAction(cc.moveBy(0.5, cc.v2(1600, 0)));
        this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('dish').runAction(cc.sequence(cc.scaleTo(0.5, 1.1),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('makeHC');
            }.bind(this))
        ));
    }
}
