import MoveIn from "../common/Script/MoveInRS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragRS";
import MixComponent from "../common/Script/CombinedComponent/MixComponentRS";
import TransitionScene from "../common/Script/codebase/TransitionSceneRS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRS";
import DataConfig from "./DataConfigRS";
import RewardManager from "../common/Script/RewardManagerRS";
import HandTouchEvent from "./HandTouchEventRS";

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
    onLoad() {
        this.init();
    }
    init() {
        this.node.getChildByName('glue').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('foam').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('foam').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('waterBowl').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('waterBowl').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('spoon').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        
    }
    glueTouchEnd() {
        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('glue').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(0, 230))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).resetSystem();
                cc.find('dish/mix0',this.node).runAction(cc.scaleTo(5,1))
            }.bind(this)),
            cc.delayTime(5),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('glue/pourGlue', this.node).getComponent(cc.ParticleSystem).stopSystem();
                cc.find('glue/pourGlue', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('waterBowl').getComponent(MoveIn).doShowAction();
            }.bind(this))
            ))
    }
    glueTouchCancle() {
        cc.find('glue/glue0_shadow', this.node).active = true;
    }
    glueTouchMove() {
        cc.find('glue/glue0_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    foamTouchEnd() {
        this.node.getChildByName('foam').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('foam').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -60), cc.moveTo(0.5, cc.v2(70, 50))),
            cc.callFunc(function () {
                this.node.getChildByName('foam').getComponent(cc.Button).interactable = true;
                this.node.getChildByName('tipClick').active = true;
            }.bind(this))
        ))
    }
    foamTouchCancle() {
        cc.find('foam/foam_shadow', this.node).active = true;
    }
    foamTouchMove() {
        cc.find('foam/foam_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    foamClick() {
        this.node.getChildByName('foam').getComponent(cc.Button).interactable = false;
        this.node.getChildByName('foam').getComponent(cc.AudioSource).play();
        this.node.getChildByName('tipClick').active = false;
        cc.find('Canvas/foam/foam0').runAction(cc.sequence(
            cc.moveBy(0.2, cc.v2(0, -20)),
            cc.moveBy(0.2, cc.v2(0, 20))
        ))
        let pos = this.node.getChildByName('foam').convertToNodeSpaceAR(cc.find(`Canvas/dish/bowl_foam${this.foamCount}`).convertToWorldSpaceAR(cc.v2(0, 0)));
        cc.find('Canvas/foam/foam2').runAction(cc.sequence(
            cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, pos)),
            cc.callFunc(function () {
                cc.find('Canvas/foam/foam2').setScale(0);
                cc.find('Canvas/foam/foam2').setPosition(cc.v2(-53, 160));
                cc.find(`Canvas/dish/bowl_foam${this.foamCount}`).active = true;
                if (this.foamCount == 3) {
                    this.node.getChildByName('foam').runAction(cc.sequence(
                        cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
                        cc.callFunc(function () { 
                            this.node.getChildByName('glue').getComponent(MoveIn).doShowAction();
                        }.bind(this))
                    ))
                } else {
                    this.node.getChildByName('foam').getComponent(cc.Button).interactable = true;
                    this.node.getChildByName('tipClick').active = true;
                    this.foamCount = this.foamCount + 1;
                }  
            }.bind(this))
        ))
    }
    bowlTouchEnd() {
        this.node.getChildByName('waterBowl').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('waterBowl').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -60), cc.moveTo(0.5, cc.v2(-40,250))),
            cc.callFunc(function () {
                cc.find('Canvas/waterBowl/mask').active = true;
                cc.find('Canvas/waterBowl/waterbowl_water').setScale(cc.v2(0.9, 0.7));
                cc.find('Canvas/waterBowl/waterbowl_water').active = false;
                cc.find('Canvas/waterBowl/pourWater').active = true;
                cc.find('Canvas/waterBowl/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterBowl/mask/waterbowl_water_fall').runAction(cc.moveBy(2, cc.v2(-120, 0)));
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
                cc.find('Canvas/waterBowl/mask').active = false;
                cc.find('Canvas/waterBowl/waterbowl_water').active = true;
                this.node.getChildByName('dish').runAction(cc.sequence(
                    cc.moveTo(0.5, cc.v2(0, 0)),
                    cc.callFunc(function () {
                        this.node.getChildByName('hand').runAction(cc.sequence(
                            cc.moveTo(0.5, cc.v2(80, -350)),
                            cc.callFunc(function () {
                                cc.find('Canvas/finger').active = true;
                                this.node.getChildByName('hand').getComponent(HandTouchEvent).init(cc.find(`Canvas/dish/mix${this.count}`));
                            }.bind(this))
                        ))
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
    
    stopAction(){
        cc.find(`dish/mix${this.count}`, this.node).stopAllActions();  
        cc.find(`dish/mix${this.count}`, this.node).setScale(1);
        this.node.getChildByName('hand').getComponent(cc.Animation).stop();
    }
    mixFinish() {
        this.stopAction();
        this.node.getChildByName('hand').getComponent(cc.AudioSource).stop();
        this.node.getChildByName('hand').getComponent(HandTouchEvent).destroyTouchEvent();
        this.node.getChildByName('hand').runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(0, -1600)),
            cc.callFunc(function () {
                if (this.count == 1) {
                    this.node.getChildByName('dish').runAction(cc.sequence(
                        cc.spawn(cc.moveBy(0.5, cc.v2(0, 200)), cc.scaleTo(0.5, 0.8)),
                        cc.spawn(cc.moveTo(1, cc.v2(0, 0)), cc.scaleTo(1, 1.2)),
                        cc.callFunc(function () {
                            this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                            this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                        }.bind(this)),
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            TransitionScene.changeScene('splitSlimeRS');
                        }.bind(this))
                    ));
                } else {
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
        TransitionScene.changeScene('makeWaterRS');
    }
}
