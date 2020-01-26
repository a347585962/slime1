import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import TipManager from "./TipManagerSD";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationEvent extends cc.Component {
    dissolveFinish() {
        TipManager.getInstance().jumpTips();
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
                TransitionScene.changeScene('addMaterialSD');
            }.bind(this))

        ))
        cc.find('Canvas/bowl/bowl_water').stopAllActions(); 
        cc.find('Canvas/bowl/bowl_borax').stopAllActions();
        cc.find('Canvas/bowl/bowl_stir').stopAllActions();
    }
    playAudio() {
        cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
    }
}