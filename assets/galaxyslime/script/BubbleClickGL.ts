import PlayController from "./PlayControllerGL";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";
import DataConfig from "./DataConfigGL";

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
export default class BubbleClick extends cc.Component {
    click() {
        this.node.stopAllActions();
        let scaleX = 1;
        let scaleY = 1;
        let action = cc.scaleBy(0.1,1.05,0.95);
        let action1 = cc.scaleBy(0.1,0.95,1.05);
        let action2 = cc.scaleTo(0.1,scaleX,scaleY);
        cc.find('Canvas/slime').runAction(cc.repeat(cc.sequence(action,action1,action2),2));
        let height = cc.find('Canvas/progress/mask').height;
        this.node.getComponent(cc.Animation).play('bubble');
        this.node.getComponent(cc.AudioSource).play();
        cc.find('Canvas/slime/tipClick').active = false;
        this.node.runAction(cc.sequence(cc.delayTime(0.6), cc.callFunc(function () {
            this.node.destroy();
            cc.find('Canvas').getComponent(PlayController).createBubble();
            cc.find('Canvas').getComponent(PlayController).bubbleNum = cc.find('Canvas').getComponent(PlayController).bubbleNum + 1;
        }.bind(this))));
        let animState = cc.find('Canvas/clock').getComponent(cc.Animation).getAnimationState('timing');
        if (!animState.isPlaying) {
            cc.find('Canvas/clock').getComponent(cc.Animation).play('timing');
            cc.find('Canvas/clock').getComponent(cc.AudioSource).play();
        }
        cc.find('Canvas/progress/mask').height = height + 5;
        if (cc.find('Canvas/progress/mask').height >= 390) {
            cc.find('Canvas/slime').runAction(cc.sequence(cc.delayTime(0.6), cc.callFunc(function () {
                cc.log('aaa');
                cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
                cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
            }.bind(this))));
            cc.find('Canvas/boom').active = true;
            cc.find('Canvas/boom').getComponent(cc.AudioSource).play();
            cc.find('Canvas/clock').getComponent(cc.Animation).stop();
            cc.find('Canvas/clock/clock2').rotation = 0;
            cc.find('Canvas/clock').getComponent(cc.AudioSource).stop();
            cc.find('Canvas/clock').active = false;
            cc.find('Canvas/slime').children.forEach(child => {
                if (child.name == 'bubbleCopy') {
                    child.destroy();
                }
            })
        }
    }
}
