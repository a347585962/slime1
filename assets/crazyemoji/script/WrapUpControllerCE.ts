import DataConfig from "./DataConfigCE";
import MoveIn from "../common/Script/compoent/MoveInCE";
import HandTouchEvent from "./HandTouchEventCE";
import MixComponent from "../common/Script/CombinedComponent/MixComponentCE";
import TransitionScene from "../common/Script/codebase/TransitionSceneCE";
import showLaoding from "../common/Script/ads/showLaodingCE";

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
export default class WrapUpController extends cc.Component {
    onLoad() {
        let tex = DataConfig.getInstance().getTexture();
        if (tex) {
            let node = new cc.Node();
            node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            cc.find('Canvas/slime/color').addChild(node);
            node.setScale(1.3);
        }
        cc.find('Canvas/slime/slime0/slime1').getChildByName('hand0').runAction(cc.moveBy(0.5, cc.v2(300, 0)));
        cc.find('Canvas/slime/slime0/slime1').getChildByName('hand1').runAction(
            cc.sequence(
                cc.moveBy(0.5, cc.v2(300, 0)),
                cc.callFunc(function () {
                    cc.find('Canvas/slime/slime0/slime0').active = false;
                    cc.find('Canvas/slime/slime0/slime1').getChildByName('slime').active = true;
                    cc.find('Canvas/slime/slime0/slime1').getChildByName('hand1').getComponent(cc.Button).interactable = true;
                    cc.find('Canvas/tipClick').active = true;
                }.bind(this))
            ));
        let candys = DataConfig.getInstance().getCandys();
        if (!candys) {
            candys = ['star'];
        }
       
        candys.forEach(candy => {
            cc.find(`Canvas/decorate/${candy}`).active = true;  
        })
        
        let colors = DataConfig.getInstance().getColors();
        if (!colors) {
            colors = ['red', 'brown'];
        }
        let color = 'brown';
        if (colors.length == 2) {
            if (colors[0] == 'red' && colors[1] == 'yellow') {
                color = 'orange';
            } else if (colors[1] == 'red' && colors[0] == 'yellow') {
                color = 'orange';
            }else if (colors[1] == 'blue' && colors[0] == 'yellow') {
                color = 'green';
            }else if (colors[0] == 'blue' && colors[1] == 'yellow') {
                color = 'green';
            }else if (colors[0] == 'red' && colors[1] == 'red') {
                color = 'pink';
            }else if (colors[0] == 'yellow' && colors[1] == 'yellow') {
                color = 'orange';
            }else if (colors[0] == 'green' && colors[1] == 'green') {
                color = 'green';
            } else {
                color = 'brown';
            }
            
        }else if (colors.length >= 3) {
            color = 'rainbow'
            for (let i = 0; i < colors.length; i++){
                if (colors[i] == 'brown') {
                    color = colors[i];
                    break;
                }
            }
        }
        cc.log(color);
        DataConfig.getInstance().setColor(color);
        this.node.getChildByName('slime').getComponent(MixComponent).mixPaths = [];
        cc.loader.loadRes(`crazyemoji/image/color/slime9_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err);
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            this.node.getChildByName('slime').getComponent(MixComponent).mixPaths.push(spriteFrame);
            cc.loader.loadRes(`crazyemoji/image/color/slime10_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                this.node.getChildByName('slime').getComponent(MixComponent).mixPaths.push(spriteFrame);
                cc.loader.loadRes(`crazyemoji/image/color/slime11_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                    cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                    this.node.getChildByName('slime').getComponent(MixComponent).mixPaths.push(spriteFrame);
                    cc.loader.loadRes(`crazyemoji/image/color/slime12_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        this.node.getChildByName('slime').getComponent(MixComponent).mixPaths.push(spriteFrame);
                        cc.loader.loadRes(`crazyemoji/image/color/slime13_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                            this.node.getChildByName('slime').getComponent(MixComponent).mixPaths.push(spriteFrame);
                        }.bind(this))
                    }.bind(this))
                }.bind(this))
            }.bind(this))
        }.bind(this))
        
    }
    mixFinish() {
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).stopSystem();
        cc.find('Canvas/slime').stopAllActions();
        cc.find('Canvas/decorate').stopAllActions();
        cc.find('Canvas/slime').setScale(1);
        cc.find('Canvas/decorate').setScale(1.2);
        cc.find('Canvas/hand').active = false;
        cc.find('Canvas/hand').getComponent(HandTouchEvent).destroyTouchEvent();
        cc.find('Canvas/hand').getComponent(cc.AudioSource).stop();
        this.node.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                showLaoding.getInstance().loadingDoneCallback = function () {
                    showLaoding.getInstance().loadingDoneCallback = null;
                    TransitionScene.changeScene('playSlimeCE', 12);
                };
                showLaoding.getInstance().showAds(false);
               
            }.bind(this))
        ))

    }
}
