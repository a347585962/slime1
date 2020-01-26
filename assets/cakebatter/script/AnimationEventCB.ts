import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCB";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AnimationEvent extends cc.Component {
    dissolveFinish() {
        cc.find('Canvas/cup/scoop/scoop').active = true;
        cc.find('Canvas/cup/scoop').getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/cup/scoop').runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(0, 700)),
            cc.callFunc(function () {
                cc.find('Canvas/cup/scoop').active = false;
            }.bind(this))
        ));
        cc.find('Canvas/cup').runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.spawn(cc.scaleTo(0.5, 0.7), cc.moveBy(0.5, cc.v2(250, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/bottle').runAction(cc.moveTo(0.5, cc.v2(0, -335)));
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                cc.find('Canvas/cup').getComponent(cc.Button).interactable = true;
                cc.find('Canvas/tipClick').active = true;
                cc.find('Canvas/tipClick').setPosition(cc.find('Canvas/cup').getPosition());
            }.bind(this))

        ))
        cc.find('Canvas/cup/waterMask').stopAllActions(); 
        cc.find('Canvas/cup/cup_borax').stopAllActions();
    }
}