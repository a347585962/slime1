import SlimeTouchEvent from "./SlimeTouchEventGL";
import MoveIn from "../common/Script/compoent/MoveInGL";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationEvent extends cc.Component {
    resetScene() {
        cc.director.loadScene('choose');
    }
    growFinish0() {
        cc.find('Canvas/slime').getComponent(cc.AudioSource).stop();
        cc.find('Canvas/slime').getComponent(SlimeTouchEvent).destroyTouchEvent();
        cc.find('Canvas/slime').getComponent(SlimeTouchEvent).firstPlay = false;
        cc.find('Canvas/slime/decorate').getComponent(cc.ParticleSystem).resetSystem();
        cc.find('Canvas/slime/decorate').getComponent(cc.AudioSource).play();
        cc.find('Canvas/progress/star0').runAction(cc.repeatForever(cc.sequence(cc.rotateBy(1, -30), cc.rotateBy(1, 30))));
        cc.find('Canvas').runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            cc.find('Canvas/slime').getComponent(SlimeTouchEvent).registerTouchEvent();
            cc.find('Canvas/arrow_top').active = true;
        })))

    }
    growFinish1() {
        cc.find('Canvas/slime').getComponent(SlimeTouchEvent).destroyTouchEvent();
        cc.find('Canvas/progress/star1').runAction(cc.repeatForever(cc.sequence(cc.rotateBy(1, -30), cc.rotateBy(1, 30))));
        cc.find('Canvas').runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            cc.find('Canvas/slime').getComponent(cc.AudioSource).stop();
            cc.find('Canvas/slime/decorate').getComponent(cc.ParticleSystem).resetSystem();
            cc.find('Canvas/slime/decorate').getComponent(cc.AudioSource).play();
            cc.find('Canvas/slime/bubble').active = true;
            cc.find('Canvas/slime/tipClick').active = true;
            cc.find('Canvas/clock').active = true;
        }))) 
    }
    timeOver() {
        cc.find('Canvas/clock').getComponent(cc.AudioSource).stop();
        if (cc.find('Canvas/progress/mask').height < 390) {
            cc.find('Canvas/btn_reset').getComponent(MoveIn).doShowAction();
           
            cc.find('Canvas/slime').children.forEach(child => {
                if (child.name == 'bubbleCopy') {
                    child.destroy();
                }
            })
        }
    }
    boomFinish() {
        cc.find('Canvas/boom').active = false;
    }
}