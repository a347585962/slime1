import SlimeTouchEvent from "./SlimeTouchEventFS";

import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperFS";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationEvent extends cc.Component {
    dissolveFinish() {
        cc.find('Canvas/bowl/spoon').getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/bowl/spoon').runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(700, 0)),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/spoon').active = false;
            }.bind(this))
        ));
        cc.find('Canvas/bowl').runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.moveTo(0.5, cc.v2(0, 0)),
            cc.callFunc(function () {
                cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
                cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('addMaterial');
            }.bind(this))

        ))
        cc.find('Canvas/bowl/bowl_water').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').stopAllActions();
    }
    coilFinish() {
        cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
        cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
        cc.find('Canvas/slime').getComponent(SlimeTouchEvent).destroyTouchEvent();
        let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
        btn_next.active = true;
        btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
    }
    playAudio() {
        cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
    }
}