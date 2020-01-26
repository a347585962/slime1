import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragRP";
import MixComponent from "../common/Script/CombinedComponent/MixComponentRP";

import TransitionScene from "../common/Script/codebase/TransitionSceneRP";
import TipManager from "./TipManagerRP";
import showLaoding from "../common/Script/ads/showLaodingRP";
import { DragUtil } from "../common/Script/codebase/SpriteDrag/DragUtilRP";
import MyMoveIn from "./MyMoveInRP";

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
export default class MakeSlime extends cc.Component {
    count: number = 0;
    mixCount: number = 0;
    initPos: cc.Vec2 = null;
    nameList: string[] = null;
    onLoad() {
        this.nameList = ['blue', 'pink', 'green', 'yellow'];
        this.node.getChildByName('glue').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('waterCup').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('spoon').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('tipRotate').active = true;
            this.node.getChildByName('tipRotate').setPosition(cc.v2(-230, -180));
        }.bind(this);
        this.node.getChildByName('yellow').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('yellow').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('blue').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('pink').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('green').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('borax').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('borax').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('tipClick').active = true;
            this.node.getChildByName('tipClick').setPosition(this.node.getChildByName('borax').getPosition());
        }.bind(this);
        this.node.getChildByName('bowl').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('scoop').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        cc.find('Canvas/bowl/spoon').getComponent(MyMoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl/spoon').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('tipRotate').active = true;
            this.node.getChildByName('tipRotate').setPosition(cc.v2(-100, 0));
        }.bind(this);
        cc.find('Canvas/bowl/waterCup').getComponent(MyMoveIn).actionCallBack = function () {
            cc.find('Canvas/bowl/waterCup').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('bowl3').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('boraxBowl').getComponent(SpriteDrag).enabled = true;
            this.node.getChildByName('finger1').active = true;
        }.bind(this);
        this.node.getChildByName('boraxBowl').getComponent(MyMoveIn).actionCallBack = function () {
            this.node.getChildByName('boraxBowl').getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        
    }
    glueTouchEnd(event) {
        let node = event.target;
     
       
        let index = node.getComponent(SpriteDrag).getOnTargetIndex();
        let pos = cc.v2(200, 300);
        cc.log(index);
        if (index == 1) {
            pos = cc.v2(-70,300)
        }else if (index == 2) {
            pos = cc.v2(-70,40)
        }
        else if (index == 3) {
            pos = cc.v2(200, 40);
        }
        if (cc.find(`bowl${index}/mix0/bowl_glue`, this.node).active) {
            this.node.getChildByName('glue').runAction(cc.moveTo(0.5, cc.v2(300, 0)));
            cc.find('glue/glue_shadow', this.node).active = true;
        } else {
            this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = false;
            this.node.getChildByName('glue').runAction(cc.sequence(
                cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, pos)),
                cc.callFunc(function () {
                    cc.find('glue/glue0', this.node).active = false;
                    cc.find('glue/glue1', this.node).active = true;
                    cc.find('glue/pourGlue', this.node).active = true;
                    cc.find('glue/pourGlue', this.node).getComponent(cc.AudioSource).play();
                    cc.find(`bowl${index}/mix0/bowl_glue`, this.node).active = true;
                    cc.find(`bowl${index}/mix0/bowl_glue`, this.node).runAction(cc.scaleTo(2, 1));
    
                }.bind(this)),
                cc.delayTime(2),
                cc.callFunc(function () {
                    cc.find('glue/pourGlue', this.node).active = false;
                    cc.find('glue/pourGlue', this.node).getComponent(cc.AudioSource).stop();
                }.bind(this)),
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(300, 0))),
                cc.callFunc(function () {
                    cc.find('glue/glue_shadow', this.node).active = true;
                    cc.find('glue/glue0', this.node).active = true;
                    cc.find('glue/glue1', this.node).active = false;
                   
                    this.mixCount = this.mixCount + 1;
                    if (this.mixCount == 4) {
                        this.node.getChildByName('glue').runAction(cc.moveBy(0.5, cc.v2(1000, 0)));
                        this.node.getChildByName('waterCup').getComponent(MyMoveIn).doShowAction();
                        this.mixCount = 0;
                    } else {
                        this.node.getChildByName('glue').getComponent(SpriteDrag).enabled = true;
                    }
                }.bind(this))
                ))
        }
      
       
    }
    glueTouchCancle() {
        cc.find('glue/glue_shadow', this.node).active = true;
    }
    glueTouchMove() {
        cc.find('glue/glue_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    waterTouchEnd(event) {
        let node = event.target;
        let index = node.getComponent(SpriteDrag).getOnTargetIndex();
        let pos = cc.v2(120, 370);
        if (index == 1) {
            pos = cc.v2(-150,370)
        }else if (index == 2) {
            pos = cc.v2(-150,100)
        }
        else if (index == 3) {
            pos = cc.v2(120, 100);
        }
        if (cc.find(`bowl${index}/mix0/bowl_water`, this.node).active) {
            this.node.getChildByName('waterCup').runAction(cc.moveTo(0.5, cc.v2(300, 0)));
            cc.find('waterCup/watercup_shadow', this.node).active = true;
        } else {
            this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = false;
            this.node.getChildByName('waterCup').runAction(cc.sequence(
                cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, pos)),
                cc.callFunc(function () {
                    
                    cc.find('waterCup/pourWater', this.node).active = true;
                    cc.find('waterCup/pourWater', this.node).getComponent(cc.AudioSource).play();
                    cc.find(`bowl${index}/mix0/bowl_water`, this.node).active = true;
                    cc.find(`bowl${index}/mix0/bowl_water`, this.node).runAction(cc.scaleTo(1.5, 1));
                    cc.find('waterCup/waterMask1', this.node).opacity = 0;
                    cc.find('waterCup/waterMask2', this.node).opacity = 255;
                    cc.find('waterCup/waterMask1/water1', this.node).runAction(cc.moveBy(1.5, cc.v2(0, -35)));
                    cc.find('waterCup/waterMask2/water2', this.node).runAction(cc.moveBy(1.5, cc.v2(-15, -10)));
    
                }.bind(this)),
                cc.delayTime(1.5),
                cc.callFunc(function () {
                    cc.find('waterCup/pourWater', this.node).active = false;
                    cc.find('waterCup/pourWater', this.node).getComponent(cc.AudioSource).stop();
                }.bind(this)),
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(300, 0))),
                cc.callFunc(function () {
                    cc.find('waterCup/watercup_shadow', this.node).active = true;
                    cc.find('waterCup/waterMask1', this.node).opacity = 255;
                    cc.find('waterCup/waterMask2', this.node).opacity = 0;
                    this.mixCount = this.mixCount + 1;
                    if (this.mixCount == 4) {
                        this.node.getChildByName('waterCup').runAction(cc.moveBy(0.5, cc.v2(1000, 0)));
                        this.node.getChildByName('spoon').getComponent(MyMoveIn).doShowAction();
                        this.mixCount = 0;
                    } else {
                        this.node.getChildByName('waterCup').getComponent(SpriteDrag).enabled = true;
                    }
                }.bind(this))
                ))
        }
      
       
    }
    waterTouchCancle() {
        cc.find('waterCup/watercup_shadow', this.node).active = true;
    }
    waterTouchMove() {
        cc.find('waterCup/watercup_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    colorTouchEnd(event) {
        this.node.getChildByName('finger1').active = false;
        let node = event.target;
        let index = node.getComponent(SpriteDrag).getOnTargetIndex();
      
        let pos = cc.v2(120, 270);
        if (index == 1) {
            pos = cc.v2(-150,270)
        }else if (index == 2) {
            pos = cc.v2(-150,0)
        }
        else if (index == 3) {
            pos = cc.v2(120, 0);
        }
        if (cc.find(`bowl${index}/mix1/color`, this.node).active) {
            cc.log(this.initPos);
            node.runAction(cc.moveTo(0.5, this.initPos));
            node.getChildByName('fooddyeblue_shadow').active = true;
        } else {
            cc.find(`bowl${index}/mix1/color`, this.node).active = true;
            this.loadImage(node.name, cc.find(`bowl${index}`, this.node));
            node.getComponent(SpriteDrag).enabled = false;
            node.runAction(cc.sequence(
                cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, pos)),
                cc.callFunc(function () {
                    node.getChildByName('pourColor').active = true;
                    node.getChildByName('pourColor').getComponent(cc.AudioSource).play();
                    cc.find(`bowl${index}/mix1/color`, this.node).runAction(cc.scaleTo(1, 1));
                }.bind(this)),
                cc.delayTime(1),
                cc.callFunc(function () {
                    node.getChildByName('pourColor').active = true;
                    node.getChildByName('pourColor').getComponent(cc.AudioSource).stop();
                }.bind(this)),
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(-1000, 0))),
                cc.callFunc(function () {
                    this.activateSpriteDrag();
                    this.mixCount = this.mixCount + 1;
                    if (this.mixCount == 4) {
                        this.node.getChildByName('spoon').getComponent(MyMoveIn).doShowAction();
                        this.mixCount = 0;
                    } 
                }.bind(this))
                ))
        }
      
       
    }
    colorTouchCancle(event) {
        let node = event.target;
        node.getChildByName('fooddyeblue_shadow').active = true;
    }
    colorTouchStart(event) {
        let node = event.target;
        this.initPos = node.getPosition();
        node.getChildByName('fooddyeblue_shadow').active = false;
        this.node.getChildByName('finger1').active = false;
        this.sleepSpriteDrag(node.name);
    }
    sleepSpriteDrag(name?:string) {
        this.nameList.forEach(a => {
            if (name) {
                if (a == name) {
                    cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = true;
                } else {
                    cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = false;
                }
            } else {
                cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = false;
            }
        })
    }
    activateSpriteDrag() {
        this.nameList.forEach(a => {
            cc.find(`Canvas/${a}`).getComponent(SpriteDrag).enabled = true;
        })
    }
    loadImage(color: string, node: cc.Node) {
        cc.loader.loadRes(`rainbowpoop/image/color/bowlfooddye_${color}`, cc.SpriteFrame, function (erro, spriteFrame) {
            node.getChildByName('mix1').getChildByName('color').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoRelease(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`rainbowpoop/image/color/bowlfooddye${color}_mix1`, cc.SpriteFrame, function (erro, spriteFrame) {
            node.getChildByName('mix2').getChildByName('bowl_mix1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoRelease(spriteFrame, true);
        }.bind(this));
        cc.loader.loadRes(`rainbowpoop/image/color/bowl_${color}_mix1_4`, cc.SpriteFrame, function (erro, spriteFrame) {
            node.getChildByName('mix3').getChildByName('bowl_mix1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoRelease(spriteFrame, true);
        }.bind(this));
        for (let i = 0; i < 2; i++){
            cc.loader.loadRes(`rainbowpoop/image/color/bowlfooddye${color}_mix${i}`, cc.SpriteFrame, function (erro, spriteFrame) {
                node.getChildByName('mix1').getComponent(MixComponent).mixPaths[i] = spriteFrame;
                cc.loader.setAutoRelease(spriteFrame, true);
            }.bind(this));
        }
        for (let i = 0; i < 5; i++){
            cc.loader.loadRes(`rainbowpoop/image/color/bowl_${color}_mix1_${i}`, cc.SpriteFrame, function (erro, spriteFrame) {
                node.getChildByName('mix2').getComponent(MixComponent).mixPaths[i] = spriteFrame;
                cc.loader.setAutoRelease(spriteFrame, true);
            }.bind(this));
        }
        for (let i = 0; i < 4; i++){
            cc.loader.loadRes(`rainbowpoop/image/color/bowl_${color}_mix2_${i}`, cc.SpriteFrame, function (erro, spriteFrame) {
                node.getChildByName('mix3').getComponent(MixComponent).mixPaths[i] = spriteFrame;
                cc.loader.setAutoRelease(spriteFrame, true);
            }.bind(this));
        }
        
    }
    spoonTouchStart(event) {
        this.node.getChildByName('tipRotate').active = false;
        let node = event.target;
       
        for (let i = 0; i < 4; i++){
            let potBox = cc.find(`Canvas/bowl${i}`).getComponent(cc.PolygonCollider);
            let appleBox = node.getComponent(cc.PolygonCollider);
            if (DragUtil.collideInCollie(appleBox, potBox)) {
                this.playAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));
               
            } else {
                this.stopAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));
            }
            
        }
        
    }
    spoonTouchMove(event) {
        let node = event.target;
       
        for (let i = 0; i < 4; i++){
            let potBox = cc.find(`Canvas/bowl${i}`).getComponent(cc.PolygonCollider);
            let appleBox = node.getComponent(cc.PolygonCollider);
            if (DragUtil.collideInCollie(appleBox, potBox)) {
                this.playAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));
               
            } else {
                this.stopAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));
            }
            
        }
        cc.log(this.node.getChildByName('spoon').getChildByName('spoon0').active )
        
    }
    spoonTouchEnd(event) {
        let node = event.target;
        let parentNode = node.parent;
        node.getChildByName('spoon0').active = true;
        for (let i = 0; i < 4; i++){
            this.stopAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));   
        }
    }
    spoonTouchCancle(event) {
        let node = event.target;
        node.getChildByName('spoon0').active = true;
        for (let i = 0; i < 4; i++){
            this.stopAction(cc.find(`Canvas/bowl${i}/mix${this.count}`));   
        }

    }
    playAction(node:cc.Node) {
        let s1 = cc.scaleTo(0.5,1,0.95);
        let s2 = cc.scaleTo(0.5, 0.96, 1);
        
        if (!node.parent.getChildByName('isMixing').active && !node.parent.getChildByName('isFinish').active) {
            this.node.getChildByName('spoon').getChildByName('spoon0').active = false;
            cc.log(this.node.getChildByName('spoon').getChildByName('spoon0').active )
            node.runAction(cc.repeatForever(cc.sequence(s1, s2)));
            node.parent.getChildByName('isMixing').active = true;
            node.getComponent(MixComponent).startMix();
        }
       
       
    }
    stopAction(node: cc.Node) {
       
        node.stopAllActions(); 
        let isAllStop: boolean = true;
        for (let i = 0; i < 4; i++){
            if (cc.find(`Canvas/bowl${i}/isMixing`).active) {
                isAllStop = false;
                break;
            } else {
                isAllStop = true;
            }    
        }
        
        if (isAllStop) {
            this.node.getChildByName('spoon').getChildByName('spoon0').active = true;
        } else {
            this.node.getChildByName('spoon').getChildByName('spoon0').active = false;
        }
        node.parent.getChildByName('isMixing').active = false;
        node.getComponent(MixComponent).stopMix();
    }
    boraxClick() {
        this.node.getChildByName('tipClick').active = false;
        cc.find('Canvas/borax/borax_shadow').active = false;
        cc.find('Canvas/borax/borax').active = false;
        cc.find('Canvas/borax/borax_fall').active = true;
        this.node.getChildByName('borax').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, 50), cc.moveTo(0.5, cc.v2(0, 160))),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').active = true;
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).play();
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(2,1));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/borax/pourSugar').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/borax/pourSugar').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(-1700, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('bowl').getComponent(MyMoveIn).doShowAction();
            }.bind(this))
        ))
    }
    scoopTouchStart() {
        this.node.getChildByName('finger1').active = false;
    }
    scoopTouchEnd() {
        this.node.getChildByName('scoop').getComponent(SpriteDrag).enabled = false;
        this.node.getChildByName('scoop').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -30), cc.moveTo(0.5, cc.v2(-30, 250))),
            cc.callFunc(function () {
                cc.find('Canvas/scoop/pourFlour').active = true;
                cc.find('Canvas/scoop/pourFlour').getComponent(cc.AudioSource).play();
                cc.find('Canvas/scoop/scoop_borax').runAction(cc.scaleTo(2,0));
                cc.find('Canvas/bowl/mix/bowl_borax').runAction(cc.fadeTo(2,255));
            }.bind(this)),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('Canvas/scoop/pourFlour').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/scoop/pourFlour').active = false;
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/waterCup').getComponent(MyMoveIn).doShowAction();
            }.bind(this))
        ))
    }
   
    mixFinish(event) {
        let node = event.node;
        let parentNode = node.parent;
        node.stopAllActions(); 
        node.setScale(1);
        parentNode.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        parentNode.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
        parentNode.getChildByName('isFinish').active = true;
        this.mixCount = this.mixCount + 1;
        if (this.mixCount == 4) {
            TipManager.getInstance().jumpTips();
            this.node.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
            this.node.getChildByName('spoon').getChildByName('spoon0').active = true;
            this.node.getChildByName('spoon').runAction(cc.sequence(
                cc.moveBy(0.5, cc.v2(-1500, 0)),
                cc.callFunc(function () {
                    this.node.getChildByName('spoon').opacity = 0;
                    this.node.getChildByName('spoon').setPosition(cc.v2(-200, -50));
                    this.mixCount = 0;
                    if (this.count == 3) {
                        cc.find('Canvas/finish').getComponent(cc.ParticleSystem).resetSystem();
                        cc.find('Canvas/finish').getComponent(cc.AudioSource).play();
                        this.node.runAction(cc.sequence(
                            cc.delayTime(1),
                            cc.callFunc(function () {
                                showLaoding.getInstance().loadingDoneCallback = function () {
                                    showLaoding.getInstance().loadingDoneCallback = null;
                                    TransitionScene.changeScene('fuseSlimeRP',7);
                                }.bind(this);
                                showLaoding.getInstance().showAds('rainbowpoop/prefab/loadingRP','rainbowpoop/prefab/loading1',false);
                               
                            }.bind(this))
                        ))
                        this.node.getChildByName('bowl0').runAction(cc.moveTo(0.5, cc.v2(150, 130)));
                        this.node.getChildByName('bowl1').runAction(cc.moveTo(0.5, cc.v2(-150, 130)));
                        this.node.getChildByName('bowl2').runAction(cc.moveTo(0.5, cc.v2(-150, -130)));
                        this.node.getChildByName('bowl3').runAction(cc.moveTo(0.5, cc.v2(150, -130)));
                        
                    } else {
                        for (let i = 0; i < 4; i++){
                            cc.find(`Canvas/bowl${i}/isMixing`).active = false;
                            cc.find(`Canvas/bowl${i}/isFinish`).active = false;
                            cc.find(`Canvas/bowl${i}/mix${this.count}`).active = false; 
                            cc.find(`Canvas/bowl${i}/mix${this.count + 1}`).active = true;  
                            
                        }
                        if (this.count == 0) {
                            this.node.getChildByName('yellow').getComponent(MyMoveIn).doShowAction();
                            this.node.getChildByName('blue').getComponent(MyMoveIn).doShowAction();
                            this.node.getChildByName('pink').getComponent(MyMoveIn).doShowAction();
                            this.node.getChildByName('green').getComponent(MyMoveIn).doShowAction();
                        } else if (this.count == 1) {
                            this.node.getChildByName('bowl0').getComponent(cc.AudioSource).play();
                            this.node.getChildByName('bowl1').runAction(cc.sequence(
                                cc.moveBy(0.5, cc.v2(-1000, 0)),
                                cc.callFunc(function () {
                                    this.node.getChildByName('bowl1').opacity = 0;
                                    this.node.getChildByName('bowl1').setPosition(cc.v2(-260, 130));
                                }.bind(this))
                            ))
                            this.node.getChildByName('bowl2').runAction(cc.sequence(
                                cc.delayTime(0.5),
                                cc.moveBy(0.5, cc.v2(-1000, 0)),
                                cc.callFunc(function () {
                                    this.node.getChildByName('bowl0').getComponent(cc.AudioSource).play();
                                    this.node.getChildByName('bowl2').opacity = 0;
                                    this.node.getChildByName('bowl2').setPosition(cc.v2(-260, -130));
                                }.bind(this))
                            ))
                            this.node.getChildByName('bowl0').runAction(cc.sequence(
                                cc.delayTime(1),
                                cc.moveBy(0.5, cc.v2(-1000, 0)),
                                cc.callFunc(function () {
                                    this.node.getChildByName('bowl0').getComponent(cc.AudioSource).play();
                                    this.node.getChildByName('bowl0').opacity = 0;
                                    this.node.getChildByName('bowl0').setPosition(cc.v2(0, 130));
                                }.bind(this))
                            ))
                            this.node.getChildByName('bowl3').runAction(cc.sequence(
                                cc.delayTime(1.5),
                                cc.moveBy(0.5, cc.v2(-1000, 0)),
                                cc.callFunc(function () {
                                    this.node.getChildByName('bowl3').opacity = 0;
                                    this.node.getChildByName('bowl3').setPosition(cc.v2(0, -130));
                                    this.node.getChildByName('borax').active = true;
                                    this.node.getChildByName('scoop').active = true;
                                }.bind(this))
                            ))
                        }else if (this.count == 2) {
                            this.node.getChildByName('boraxBowl').getComponent(MyMoveIn).doShowAction();
                        }
                        this.count = this.count + 1;
                    }
                   
                }.bind(this))
            ))
        }
   
    } 
    waterCupTouchStart() {
        cc.find('Canvas/bowl/waterCup/watercup_shadow').active = false;
        this.node.getChildByName('finger1').active = false;
    }
    waterCupTouchEnd() {
        cc.find('Canvas/bowl/waterCup').getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/bowl/waterCup').runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(80, 270))),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/waterCup/pourWater').active = true;
                cc.find('Canvas/bowl/waterCup/pourWater').getComponent(cc.AudioSource).play();
                cc.find('bowl/waterCup/waterMask1', this.node).opacity = 0;
                cc.find('bowl/waterCup/waterMask2', this.node).opacity = 255;
                cc.find('bowl/waterCup/waterMask1/water1', this.node).runAction(cc.moveBy(3, cc.v2(0, -150)));
                cc.find('bowl/waterCup/waterMask2/water2', this.node).runAction(cc.moveBy(3, cc.v2(-70, -50)));
                cc.find('Canvas/bowl/mix/bowl_water').runAction(cc.scaleTo(3,1));
            }.bind(this)),
            cc.delayTime(3),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/waterCup/pourWater').active = false;
                cc.find('Canvas/bowl/waterCup/pourWater').getComponent(cc.AudioSource).stop();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1700, 0))),
            cc.callFunc(function () {
                cc.find('Canvas/bowl/spoon').getComponent(MyMoveIn).doShowAction();
            }.bind(this))
        ))
    }
    waterCupTouchCancle() {
        cc.find('Canvas/bowl/waterCup/watercup_shadow').active = true;
    }
    bowlspoonTouchStart() {
        cc.find('Canvas/bowl/spoon/spoon0').active = false;
        this.node.getChildByName('tipRotate').active = false;
        this.playAction1();
    }
    bowlspoonTouchEnd(event) {
        cc.find('Canvas/bowl/spoon/spoon0').active = true;
        this.stopAction1();
    }
    playAction1() {
        let s1 = cc.scaleTo(0.5,1.04,0.95);
        let s2 = cc.scaleTo(0.5, 0.96, 1.05);
        cc.find('Canvas/bowl/mix').runAction(cc.repeatForever(cc.sequence(s1, s2)));
        cc.find('Canvas/bowl/mix').runAction(cc.repeatForever(cc.rotateBy(20, 360)));
        cc.find('Canvas/bowl/mix').getComponent(MixComponent).startMix();
    }
    stopAction1() {
        cc.find('Canvas/bowl/mix').stopAllActions(); 
        cc.find('Canvas/bowl/mix').getComponent(MixComponent).stopMix();
    }
    waterMixFinish(event) {
        let node = event.node;
        let parentNode = node.parent;
        node.stopAllActions(); 
        node.setScale(1);
        node.angle = 0;
        parentNode.getChildByName('spoon').runAction(cc.moveBy(0.5, cc.v2(-1500, 0)));
        parentNode.getChildByName('spoon').getComponent(SpriteDrag).enabled = false;
        parentNode.getChildByName('decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        parentNode.getChildByName('decorateParticle').getComponent(cc.AudioSource).play();
        parentNode.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.spawn(cc.scaleTo(0.5, 0.6), cc.moveTo(0.5, cc.v2(300, -150))),
            cc.callFunc(function () {
                this.node.getChildByName('boraxBowl').active = true;
                this.node.getChildByName('boraxBowl').getComponent(SpriteDrag).enabled = false;
                for (let i = 0; i < 4; i++){
                    this.node.getChildByName(`bowl${i}`).getComponent(MyMoveIn).doShowAction();
                }
               
                parentNode.active = false;
            }.bind(this))
        ))
    }
    bowlTouchEnd(event) {
        this.node.getChildByName('finger1').active = false;
        let node = event.target;
        let index = node.getComponent(SpriteDrag).getOnTargetIndex();
        let pos = cc.v2(120, 250);
        if (index == 1) {
            pos = cc.v2(-150,250)
        }else if (index == 2) {
            pos = cc.v2(-150,-20)
        }
        else if (index == 3) {
            pos = cc.v2(120, -20);
        }
        if (cc.find(`bowl${index}/mix${this.count}/water`, this.node).active) {
            this.node.getChildByName('boraxBowl').runAction(cc.moveTo(0.5, cc.v2(300, -150)));
            cc.find('boraxBowl/bowl_shadow', this.node).active = true;
        } else {
            this.node.getChildByName('boraxBowl').getComponent(SpriteDrag).enabled = false;
            this.node.getChildByName('boraxBowl').runAction(cc.sequence(
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, pos)),
                cc.callFunc(function () {
                    
                    cc.find('boraxBowl/pourWater', this.node).active = true;
                    cc.find('boraxBowl/pourWater', this.node).getComponent(cc.AudioSource).play();
                    cc.find(`bowl${index}/mix${this.count}/water`, this.node).active = true;
                    cc.find(`bowl${index}/mix${this.count}/water`, this.node).runAction(cc.scaleTo(1.5, 1));
                    cc.find('boraxBowl/water', this.node).opacity = 0;
                    cc.find('boraxBowl/waterFall', this.node).opacity = 255;
                    cc.find('boraxBowl/water', this.node).runAction(cc.scaleBy(1.5,0.95));
                    cc.find('boraxBowl/waterFall/water', this.node).runAction(cc.moveBy(1.5, cc.v2(-15, 0)));
    
                }.bind(this)),
                cc.delayTime(1.5),
                cc.callFunc(function () {
                    cc.find('boraxBowl/pourWater', this.node).active = false;
                    cc.find('boraxBowl/pourWater', this.node).getComponent(cc.AudioSource).stop();
                }.bind(this)),
                cc.spawn(cc.rotateTo(0.5, 0), cc.moveTo(0.5, cc.v2(300, -150))),
                cc.callFunc(function () {
                    cc.find('boraxBowl/bowl_shadow', this.node).active = true;
                    cc.find('boraxBowl/water', this.node).opacity = 255;
                    cc.find('boraxBowl/waterFall', this.node).opacity = 0;
                    this.mixCount = this.mixCount + 1;
                    if (this.mixCount == 4) {
                        this.node.getChildByName('spoon').getComponent(MyMoveIn).doShowAction();
                        this.mixCount = 0;
                        this.node.getChildByName('boraxBowl').runAction(cc.sequence(
                            cc.moveBy(0.5, cc.v2(1600, 0)),
                            cc.callFunc(function () {
                                this.node.getChildByName('boraxBowl').opacity = 0;
                                this.node.getChildByName('boraxBowl').setPosition(cc.v2(300, -150));
                            }.bind(this))
                        ))
                    } else {
                        this.node.getChildByName('boraxBowl').getComponent(SpriteDrag).enabled = true;
                    }
                }.bind(this))
                ))
        }
      
       
    }
    bowlTouchCancle() {
        cc.find('boraxBowl/bowl_shadow', this.node).active = true;
    }
    bowlTouchMove() {
        cc.find('boraxBowl/bowl_shadow', this.node).active = false;
        this.node.getChildByName('finger1').active = false;
    }
    
}
