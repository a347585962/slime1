import MoveIn from "../common/Script/MoveInSD";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragSD";
import MixComponent from "../common/Script/CombinedComponent/MixComponentSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperSD";
import DataConfig from "./DataConfigSD";
import RewardManager from "../common/Script/RewardManagerSD";
import HandTouchEvent from "./HandTouchEventSD";
import TipManager from "./TipManagerSD";

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
    count: number = 0;
    foamCount: number = 0;
    mixtureNode: cc.Node = null;
    touchNode: cc.Node = null;
    color: String = null;
    onLoad() {
        this.init();
    }
    init() {
        this.node.getChildByName('green').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('green').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('pink').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('pink').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('purple').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('purple').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('yellow').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('yellow').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        
        this.node.getChildByName('waterBowl').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('waterBowl').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('spoon').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/tipRotate').active = true;
        }.bind(this);
        this.node.getChildByName('hand').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('hand').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/tipRotate').active = true;
        }.bind(this);
        this.initimage();
        
    }
    initimage() {
        let color = DataConfig.getInstance().getColor();
        if (!color) {
            color = 'rainbow';
            
        }
        this.color = color;
        if (color == 'rainbow') {
            cc.find('Canvas/dish/mix0/rainbow').active = true;
            cc.find('Canvas/dish/mix0/singleColor').active = false;
            cc.loader.loadRes(`slimedark/image/bowl_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/dish/mix0').getComponent(MixComponent).mixPaths.push(spriteFrame);
            }.bind(this));
            cc.find('Canvas/green').active = true;
            cc.find('Canvas/pink').active = true;
            cc.find('Canvas/purple').active = true;
            cc.find('Canvas/yellow').active = true;
            cc.find('Canvas/green').getComponent(MoveIn).doShowAction();
        } else {
            cc.find('Canvas/dish/mix0/rainbow').active = false;
            cc.find('Canvas/dish/mix0/singleColor').active = true;
            cc.loader.loadRes(`slimedark/image/bowl_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find('Canvas/dish/mix0/singleColor').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.find(`Canvas/${color}`).active = true;
                cc.find(`Canvas/${color}`).getComponent(MoveIn).doShowAction();
            }.bind(this));
        }
        cc.loader.loadRes(`slimedark/image/bowl_${color}_stir0`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('Canvas/dish/mix0').getComponent(MixComponent).mixPaths.push(spriteFrame);
            cc.loader.loadRes(`slimedark/image/bowl_${color}_stir1`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.find(`Canvas/dish/mix0`).getComponent(MixComponent).mixPaths.push(spriteFrame);
                cc.find(`Canvas/dish/mix1/mixing0`).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.loadRes(`slimedark/image/bowl_${color}_stir2`, cc.SpriteFrame, function (err, spriteFrame) {
                    cc.find(`Canvas/dish/mix1`).getComponent(MixComponent).mixPaths.push(spriteFrame);
                    cc.find(`Canvas/dish/mix2/mixing0`).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    cc.loader.loadRes(`slimedark/image/bowl_${color}_stir3`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.find(`Canvas/dish/mix2`).getComponent(MixComponent).mixPaths.push(spriteFrame);
                    }.bind(this))
                }.bind(this));
            }.bind(this));
        }.bind(this));
        
       
      
    }
    glueTouchEnd(event) {
        let node = event.target;
        node.getChildByName('glue0').active = false;
        node.getChildByName('glue1').active = true;
        if (this.color == 'rainbow') {
            cc.find('dish/mix0/rainbow', this.node).active = true;
            if (node.name == 'green') {
                node.getComponent(SpriteDrag).enabled = false;
                node.runAction(cc.sequence(
                    cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(-100, 230))),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                        cc.find('pourGlue', node).active = true;
                        cc.find('dish/mix0/rainbow/bowl_green',this.node).runAction(cc.scaleTo(3,1))
                    }.bind(this)),
                    cc.delayTime(3),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                        cc.find('pourGlue', node).active = false;
                        TipManager.getInstance().jumpTips();
                    }.bind(this)),
                    cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
                    cc.callFunc(function () {
                        this.node.getChildByName('pink').getComponent(MoveIn).doShowAction();
                    }.bind(this))
                    ))
            } else if (node.name == 'pink') {
                node.getComponent(SpriteDrag).enabled = false;
                node.runAction(cc.sequence(
                    cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(0, 330))),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                        cc.find('pourGlue', node).active = true;
                        cc.find('dish/mix0/rainbow/bowl_pink',this.node).runAction(cc.scaleTo(3,1))
                    }.bind(this)),
                    cc.delayTime(3),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                        cc.find('pourGlue', node).active = false;
                    }.bind(this)),
                    cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
                    cc.callFunc(function () {
                        this.node.getChildByName('purple').getComponent(MoveIn).doShowAction();
                    }.bind(this))
                    ))
            }else if (node.name == 'purple') {
                node.getComponent(SpriteDrag).enabled = false;
                node.runAction(cc.sequence(
                    cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(50, 230))),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                        cc.find('pourGlue', node).active = true;
                        cc.find('dish/mix0/rainbow/bowl_purple',this.node).runAction(cc.scaleTo(3,1))
                    }.bind(this)),
                    cc.delayTime(3),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                        cc.find('pourGlue', node).active = false;
                    }.bind(this)),
                    cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
                    cc.callFunc(function () {
                        this.node.getChildByName('yellow').getComponent(MoveIn).doShowAction();
                    }.bind(this))
                    ))
            }else if (node.name == 'yellow') {
                node.getComponent(SpriteDrag).enabled = false;
                node.runAction(cc.sequence(
                    cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(0, 180))),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                        cc.find('pourGlue', node).active = true;
                        cc.find('dish/mix0/rainbow/bowl_yellow',this.node).runAction(cc.scaleTo(3,1))
                    }.bind(this)),
                    cc.delayTime(3),
                    cc.callFunc(function () {
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                        cc.find('pourGlue', node).active = false;
                        TipManager.getInstance().jumpTips();
                    }.bind(this)),
                    cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
                    cc.callFunc(function () {
                        this.node.getChildByName('waterBowl').getComponent(MoveIn).doShowAction();
                    }.bind(this))
                    ))
            }
           
        } else {
            node.getComponent(SpriteDrag).enabled = false;
            node.runAction(cc.sequence(
                cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(0, 230))),
                cc.callFunc(function () {
                    this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                    cc.find('pourGlue', node).active = true
                    cc.find('dish/mix0/singleColor',this.node).runAction(cc.scaleTo(5,1))
                }.bind(this)),
                cc.delayTime(5),
                cc.callFunc(function () {
                    this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                    cc.find('pourGlue', node).active = false;
                }.bind(this)),
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
                cc.callFunc(function () {
                    this.node.getChildByName('waterBowl').getComponent(MoveIn).doShowAction();
                }.bind(this))
                ))
        }
       
       
    }
    glueTouchCancle(event) {
        
        let node = event.target;
        cc.find('glue0_shadow', node).active = true;
    }
    glueTouchMove(event) {
        cc.log(event);
        let node = event.target;
        cc.find('glue0_shadow', node).active = false;
        this.node.getChildByName('finger1').active = false;
    }

    bowlTouchEnd() {
        this.node.getChildByName('waterBowl').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('waterBowl').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -60), cc.moveTo(0.5, cc.v2(-40,250))),
            cc.callFunc(function () {
                cc.find('Canvas/waterBowl/pourWater').active = true;
                cc.find('Canvas/waterBowl/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterBowl/mask/waterbowl_water_fall').runAction(cc.moveBy(2, cc.v2(0, -60)));
                cc.find('Canvas/dish/bowl_water').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/waterBowl/pourWater').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/waterBowl/pourWater').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('waterBowl').setPosition(cc.v2(280, 0));
                this.node.getChildByName('waterBowl').opacity = 0;
                this.node.getChildByName('dish').runAction(cc.sequence(
                    cc.moveTo(0.5, cc.v2(0, 0)),
                    cc.callFunc(function () {
                       
                        this.mixtureNode = cc.find(`Canvas/dish/mix${this.count}`);
                        
                      
                        this.touchNode = this.node.getChildByName('spoon');
                        
                        this.touchNode.getComponent(MoveIn).doShowAction();
                    }.bind(this))
                ))
            }.bind(this))

        ))
    }
    bowlTouchCancle() {
       
    }
    bowlTouchMove() {
        this.node.getChildByName('finger1').active = false;
    }
    
  
    onTouchStart() {
        this.playAction(); 
        cc.find('Canvas/tipRotate').active = false;
        cc.find('Canvas/spoon/spoon0').active = false;
        this.mixtureNode.getComponent(MixComponent).startMix();
        if (this.mixtureNode.getChildByName('bowl_water')) {
            this.mixtureNode.getChildByName('bowl_water').active = true;
        }
       
        cc.find('Canvas/dish/bowl_water').setScale(0);
        
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/tipRotate').active = false;
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        cc.find('Canvas/spoon/spoon0').active = true;
        this.stopAction();
        this.mixtureNode.getComponent(MixComponent).stopMix();
    }
    playAction() {
        this.touchNode.getComponent(cc.AudioSource).play();
        if (this.touchNode.name == 'hand') {
            let animState = this.touchNode.getComponent(cc.Animation).getAnimationState('rub');
            if (animState.isPaused) {
                this.touchNode.getComponent(cc.Animation).resume();
            } else {
                this.touchNode.getComponent(cc.Animation).play('rub');
            }   
        }
       
       
        let s1 = cc.scaleTo(0.5,1.05,0.95);
        let s2 = cc.scaleTo(0.5, 0.95, 1.05);
        this.mixtureNode.runAction(cc.repeatForever(cc.sequence(s1, s2)));
        this.mixtureNode.runAction(cc.repeatForever(cc.rotateBy(20, 360)));
    }
    stopAction() {
        this.touchNode.getComponent(cc.AudioSource).stop();
        if (this.touchNode.name == 'hand') {
            this.touchNode.getComponent(cc.Animation).pause(); 
        }
        this.mixtureNode.stopAllActions();   
        
    }
    
    mixFinish() {
        cc.find('Canvas/spoon/spoon0').active = true;
        this.stopAction();
        let pos = this.touchNode.getPosition();
        this.touchNode.getComponent(cc.AudioSource).stop();
        this.touchNode.getComponent(SpriteDrag).enabled = false;
        this.touchNode.runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(0, -1600)),
            cc.callFunc(function () {
                this.touchNode.setPosition(pos);
                this.touchNode.opacity = 0;
                if (this.count == 2) {
                    TipManager.getInstance().jumpTips();
                    this.node.getChildByName('dish').runAction(cc.sequence(
                        cc.spawn(cc.moveBy(0.5, cc.v2(0, 200)), cc.scaleTo(0.5, 0.8)),
                        cc.spawn(cc.moveTo(1, cc.v2(0, 0)), cc.scaleTo(1, 1.2)),
                        cc.callFunc(function () {
                            this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                            this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                        }.bind(this)),
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            TransitionScene.changeScene('pullSlimeSD');
                        }.bind(this))
                    ));
                } else if (this.count == 1) {
                    let rota = cc.find(`dish/mix${this.count}`, this.node).rotation;
                    cc.find(`dish/mix${this.count}`, this.node).active = false;
                    cc.find(`dish/mix${this.count+1}`, this.node).active = true;
                    cc.find(`dish/mix${this.count + 1}`, this.node).setRotation(rota);
                    this.count = this.count + 1;
                    this.touchNode = this.node.getChildByName('hand');
                    this.touchNode.getComponent(MoveIn).doShowAction();
                    this.mixtureNode = cc.find(`Canvas/dish/mix${this.count}`);

                }
                else {
                    TipManager.getInstance().jumpTips();
                    this.node.getChildByName('dish').runAction(cc.moveTo(0.5, cc.v2(-165, 0)));
                    let rota = cc.find(`dish/mix${this.count}`, this.node).rotation;
                    cc.find(`dish/mix${this.count}`, this.node).active = false;
                    cc.find(`dish/mix${this.count+1}`, this.node).active = true;
                    cc.find(`dish/mix${this.count + 1}`, this.node).setRotation(rota);
                    this.count = this.count + 1;
                    this.node.getChildByName('waterBowl').getComponent(MoveIn).doShowAction();
                }
            }.bind(this))
        ));
    }
    backLastScence() {
        TransitionScene.changeScene('makeWaterSD');
    }
}
