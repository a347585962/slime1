import MoveIn from "../common/Script/MoveInCS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCS";
import MixComponent from "../common/Script/CombinedComponent/MixComponentCS";
import TransitionScene from "../common/Script/codebase/TransitionSceneCS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCS";
import DataConfig from "./DataConfigCS";
import RewardManager from "../common/Script/RewardManagerCS";
import HandTouchEvent from "./HandTouchEventCS";
import SpponTouchEvent from "./SpoonTouchEventCS";
import TipManager from "./TipManagerCS";

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
    onLoad() {
        this.init();
    }
    init() {
        this.node.getChildByName('glue').getComponent(MoveIn).actionCallBack = function () {
            console.log("glue).getComponent(MoveIn)");
            
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('activator').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('finger1').zIndex = 10;
            this.node.getChildByName('finger1').active = true;
            this.node.getChildByName('activator').getComponent(SpriteDrag).enabled = true;
           
        }.bind(this);
        cc.find('Canvas/dish/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/dish/tipRotate').active = true;
            cc.find('Canvas/dish/spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/dish_green/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/dish_green/tipRotate').active = true;
            cc.find('Canvas/dish_green').zIndex = 1;
            cc.find('Canvas/dish_red').zIndex = 0;
            cc.find('Canvas/dish_green/spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/dish_red/spoon').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/dish_red/tipRotate').active = true;
            cc.find('Canvas/dish_red/spoon').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        this.node.getChildByName('waterCup').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('finger1').active = true;
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('Canvas/dish_red/glitter').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
            let pos = this.node.convertToNodeSpaceAR(cc.find('Canvas/dish_red/glitter').convertToWorldSpaceAR(cc.v2(0, 0)));
            this.node.getChildByName('decorateParticle').setPosition(pos);
            this.node.getChildByName('decorateParticle').setPosition(cc.find('Canvas/dish').getPosition());
            cc.find('Canvas/dish_red/glitter').runAction(cc.sequence(
                cc.delayTime(1),
                cc.moveTo(1, cc.v2(200, 200)),
                cc.callFunc(function () {
                    cc.find('Canvas/dish_red/tipMove').active = true;
                    cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = true;
                }.bind(this))
            ))
        }.bind(this);
        cc.find('Canvas/dish_green/glitter').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
            let pos = this.node.convertToNodeSpaceAR(cc.find('Canvas/dish_green/glitter').convertToWorldSpaceAR(cc.v2(0, 0)));
            this.node.getChildByName('decorateParticle').setPosition(pos);
            cc.find('Canvas/dish_green/glitter').runAction(cc.sequence(
                cc.delayTime(1),
                cc.moveTo(1, cc.v2(-200, 200)),
                cc.callFunc(function () {
                    cc.find('Canvas/dish_green/tipMove').active = true;
                    cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = true;
                }.bind(this))
            ))
        }.bind(this);
        cc.find('Canvas/dish_red/foodcolor').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
            let pos = this.node.convertToNodeSpaceAR(cc.find('Canvas/dish_red/foodcolor').convertToWorldSpaceAR(cc.v2(0, 0)));
            this.node.getChildByName('decorateParticle').setPosition(pos);
            cc.find('Canvas/dish_red/foodcolor').runAction(cc.sequence(
                cc.delayTime(1),
                cc.moveTo(1, cc.v2(200, 200)),
                cc.callFunc(function () {
                    cc.find('Canvas/dish_red/tipMove').active = true;
                    cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = true;
                }.bind(this))
            ))
        }.bind(this);
        cc.find('Canvas/dish_green/foodcolor').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
            let pos = this.node.convertToNodeSpaceAR(cc.find('Canvas/dish_green/foodcolor').convertToWorldSpaceAR(cc.v2(0, 0)));
            this.node.getChildByName('decorateParticle').setPosition(pos);
            cc.find('Canvas/dish_green/foodcolor').runAction(cc.sequence(
                cc.delayTime(1),
                cc.moveTo(1, cc.v2(-200, 200)),
                cc.callFunc(function () {
                    cc.find('Canvas/dish_green/tipMove').active = true;
                    cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = true;
                }.bind(this))
            ))
        }.bind(this);
        
    }
    glueTouchEnd() {
        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('glue').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -120), cc.moveTo(0.5, cc.v2(-50, 230))),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                cc.find('glue/pourGlue', this.node).active = true;
                cc.find('dish/mix/ball_glue',this.node).runAction(cc.scaleTo(3,1))
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                cc.find('glue/pourGlue', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('waterCup').getComponent(MoveIn).doShowAction();
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
    activatorTouchEnd() {
        this.node.getChildByName('activator').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('activator').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -145), cc.moveTo(0.5, cc.v2(160, 300))),
            cc.callFunc(function () {
                cc.find('activator/activator0_water', this.node).active = false;
                cc.find('activator/activator1_water', this.node).active = true;
                cc.find('activator/dropwater', this.node).active = true;
                cc.find('activator/dropwater', this.node).getComponent(cc.AudioSource).play();
                cc.find('dish_red/mix1/activator', this.node).setPosition(cc.v2(-50, -50));
                cc.find('dish_red/mix1/activator', this.node).runAction(cc.scaleTo(2, 1));
               
            }.bind(this)),
            cc.delayTime(2),
            cc.moveTo(0.5, cc.v2(-90, 300)),
            cc.callFunc(function () {
                cc.find('activator/dropwater', this.node).active = true;
                cc.find('activator/dropwater', this.node).getComponent(cc.AudioSource).play();
                cc.find('dish_green/mix1/activator', this.node).setPosition(cc.v2(-50, -50));
                cc.find('dish_green/mix1/activator', this.node).runAction(cc.scaleTo(2, 1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('activator/dropwater', this.node).getComponent(cc.AudioSource).stop();
                cc.find('activator/dropwater', this.node).active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1600, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/dish_red/tipRotate').active = true;
                cc.find('Canvas/dish_green/tipRotate').active = true;
                cc.find('Canvas/dish_green/spoon').getComponent(SpriteDrag).enabled = true;
                cc.find('Canvas/dish_red/spoon').getComponent(SpriteDrag).enabled = true;
            }.bind(this))
            ))
    }
    activatorTouchCancle() {
        cc.find('activator/activator_shadow', this.node).active = true;
    }
    activatorTouchMove() {
        this.node.getChildByName('finger1').active = false;
        cc.find('activator/activator_shadow', this.node).active = false;
        
    }
    waterCupTouchStart() {
        cc.find('Canvas/waterCup/watercup_shadow').active = false;
        this.node.getChildByName('finger1').active = false;
    }
    waterCupTouchEnd() {
        this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('waterCup').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(-80, 270))),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/pourWater').active = true;
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('Canvas/waterCup/mask').active = true;
                cc.find('Canvas/waterCup/water').active = false;
                cc.find('Canvas/waterCup/mask/water_fall').runAction(cc.moveBy(2, cc.v2(-80, 0)));
                cc.find('Canvas/dish/mix/bowl_water').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/waterCup/pourWater').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/waterCup/pourWater').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/dish/spoon').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    waterCupTouchCancle() {
        cc.find('Canvas/waterCup/watercup_shadow').active = true;
    }
    glitterTouchMove(event) { 
        let node = event.target;
        let parentNode = node.parent;
        var nPos =  node.getPosition(); //节点实时坐标；
        if (parentNode.name == 'dish_green') {
            if(cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag))
                cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = false;
            if(cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag))
                cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = false;
            let maxX = 100;
            if (nPos.x > maxX) {
                parentNode.zIndex = 1;
                cc.find('Canvas/dish_red').zIndex = 0;
               
            };
        } else {
            if(cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag))
                cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = false;
            if(cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag))
                cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = false;
            let minX = -100; //最小Y坐标；
            if (nPos.x < minX) {
                parentNode.zIndex = 1;
                cc.find('Canvas/dish_green').zIndex = 0;
                
            };
       
        }
    }
    glitterTouchEnd(event) {
        if (cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        
        if (cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = true;
        }
        let node = event.target;
        let parentNode = node.parent;
        parentNode.getChildByName('tipMove').active = false;
        node.removeComponent(SpriteDrag);
        node.runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(100, 150)),
            cc.callFunc(function () {
                node.getComponent(cc.AudioSource).play();
                cc.find('mask/glitter', node).runAction(cc.moveBy(2, cc.v2(-100, -100)));
                node.getChildByName('pourGlitter').active = true;
                cc.find('mix/glitter',parentNode).runAction(cc.scaleTo(2, 1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                node.getComponent(cc.AudioSource).stop();
                node.getChildByName('pourGlitter').active = false;
                parentNode.getChildByName('foodcolor').getComponent(MoveIn).doShowAction();
                parentNode.getChildByName('foodcolor').getComponent(SpriteDrag).enabled = false;

            }.bind(this)),
            cc.moveBy(0.5,cc.v2(1000,0))
        ))
        
    }
    foodColorTouchMove(event) { 
        let node = event.target;
        let parentNode = node.parent;
        var nPos =  node.getPosition(); //节点实时坐标；
        if (parentNode.name == 'dish_green') {
            if(cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag))
                cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = false;
            if(cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag))
                cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = false;
            let maxX = 100;
            if (nPos.x > maxX) {
                parentNode.zIndex = 1;
                cc.find('Canvas/dish_red').zIndex = 0;
               
            };
        } else {
            if(cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag))
                cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = false;
            if(cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag))
                cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = false;
            let minX = -100; //最小Y坐标；
            if (nPos.x < minX) {
                parentNode.zIndex = 1;
                cc.find('Canvas/dish_green').zIndex = 0;
                
            };
       
        }
    }
    touchCancle() {
        if (cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        
        if (cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = true;
        }
       
    }

    foodColorTouchEnd(event) {
        if (cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/foodcolor').getComponent(SpriteDrag).enabled = true;
        }
        
        if (cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_green/glitter').getComponent(SpriteDrag).enabled = true;
        }
        if (cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag)) {
            cc.find('Canvas/dish_red/glitter').getComponent(SpriteDrag).enabled = true;
        }
        let node = event.target;
        let parentNode = node.parent;
        parentNode.getChildByName('tipMove').active = false;
        node.removeComponent(SpriteDrag);
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(0.5, cc.v2(50, 250)), cc.rotateTo(0.5, -90)),
            cc.callFunc(function () {
                node.getComponent(cc.AudioSource).play();
                node.getChildByName('foodcolour3').active = true;
                node.getChildByName('foodcolour4').active = true;
                node.getChildByName('foodcolour1').active = false;
                node.getChildByName('foodcolour2').active = false;
                node.getChildByName('pourColor').active = true;
                cc.find('mix/foodcolor', parentNode).runAction(cc.scaleTo(2, 2));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                node.getComponent(cc.AudioSource).stop();
                node.getChildByName('pourColor').active = false;
            }.bind(this)),
            cc.rotateTo(0.5, 0),
            cc.callFunc(function () {
                node.getChildByName('foodcolour3').active = false;
                node.getChildByName('foodcolour4').active = false;
                node.getChildByName('foodcolour1').active = true;
                node.getChildByName('foodcolour2').active = true;

            }.bind(this)),
            cc.moveBy(0.5, cc.v2(1000, 0)),
            cc.callFunc(function () {
                parentNode.getChildByName('spoon').getComponent(MoveIn).doShowAction();
            }.bind(this))
        ))
    }
    stopAction(){
        cc.find('dish/mix', this.node).stopAllActions();  
        cc.find('dish/mix', this.node).setScale(1);
    }
    mixFinish() {
        this.stopAction();
        this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
        this.node.getChildByName('decorateParticle').setPosition(cc.find('Canvas/dish').getPosition());
        cc.find('Canvas/dish/spoon').getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/dish/spoon/spoon0').active = true;
        cc.find('Canvas/dish/spoon').runAction(cc.sequence(
            cc.moveBy(0.5, cc.v2(1000, 0)),
            cc.callFunc(function () {
                cc.find('Canvas/dish/spoon').opacity = 0;
                cc.find('Canvas/dish').runAction(cc.sequence(
                    cc.spawn(cc.moveTo(0.5, cc.v2(0, 150)),cc.scaleTo(0.5,0.6)),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish_green').getComponent(MoveIn).doShowAction();
                        cc.find('Canvas/dish_red').getComponent(MoveIn).doShowAction();
                    }.bind(this)),
                    cc.delayTime(2),
                    cc.moveTo(0.5, cc.v2(-50, 50)),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish_green/mix').runAction(cc.scaleTo(4, 1));
                        cc.find('Canvas/dish/mix').runAction(cc.scaleTo(4, 0.8));
                        cc.find('Canvas/dish/pour_green').active = true;
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(4),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish/pour_green').active = false;
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                    }.bind(this)),
                    cc.moveTo(0.5, cc.v2(50, 50)),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish_red/mix').runAction(cc.scaleTo(4, 1));
                        cc.find('Canvas/dish/mix').runAction(cc.scaleTo(4, 0));
                        cc.find('Canvas/dish/pour_red').active = true;
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(4),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish/pour_red').active = false;
                        this.node.getChildByName('pourAudio').getComponent(cc.AudioSource).stop();
                    }.bind(this)),
                    cc.moveTo(0.5, cc.v2(1000, 0)),
                    cc.callFunc(function () {
                        cc.find('Canvas/dish').opacity = 0;
                        cc.find('Canvas/dish_red').runAction(cc.moveBy(0.5,cc.v2(0,100)));
                        cc.find('Canvas/dish_green').runAction(cc.moveBy(0.5,cc.v2(0,100)));
                    }.bind(this)),
                    cc.delayTime(0.5),
                    cc.callFunc(function () {
                        TipManager.getInstance().jumpTips();
                        cc.find('Canvas/dish_red/glitter').getComponent(MoveIn).doShowAction();
                        cc.find('Canvas/dish_green/glitter').getComponent(MoveIn).doShowAction();
                    }.bind(this))

                ))
            }.bind(this))
        ))

    }
    mixColorFinish(event) {
        let node = event.node;
        let parent = node.parent;
        this.node.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        this.node.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
        this.node.getChildByName('decorateParticle').setPosition(parent.getPosition());
        parent.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        parent.getChildByName('spoon').getChildByName('spoon0').active = true;
        parent.getChildByName('spoon').runAction(cc.moveTo(0.5, cc.v2(150, 100)));
        this.count = this.count + 1;
        node.stopAllActions();
        node.setScale(1);
        if (node.name == 'mix') {
           
            parent.getChildByName('mix1').rotation = node.rotation;
            node.active = false;
            parent.getChildByName('mix1').active = true;
            parent.getChildByName('spoon').getComponent(SpponTouchEvent).mixNode = parent.getChildByName('mix1');
            if (this.count == 2) {
                TipManager.getInstance().jumpTips();
                cc.find('Canvas/activator').getComponent(MoveIn).doShowAction();
                cc.find('Canvas/activator').zIndex = 4;
            }

        } else {
            parent.getChildByName('spoon').runAction(cc.moveBy(0.5, cc.v2(1000, 0)));
            if (this.count == 4) {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                this.node.runAction(cc.sequence(
                    cc.delayTime(0.5),
                    cc.callFunc(function () {
                        TransitionScene.changeScene('rubSlimeCS');
                    }.bind(this))
                ))
            }
        }


    }
   
}
