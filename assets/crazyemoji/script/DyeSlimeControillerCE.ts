import MoveIn from "../common/Script/compoent/MoveInCE";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCE";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragCE";
import TransitionScene from "../common/Script/codebase/TransitionSceneCE";
import DataConfig from "./DataConfigCE";
import TipManager from "./TipManagerCE";
import ObjectAction from "./ObjectActionCE";

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
export default class DyeSlimeController extends cc.Component {
    chooseNames: string[] = null;
    foodName: string = null;
    color: string = null;
    currentColorNode: cc.Node = null;
    count: number = 0;
    candy: string = null;
    colors: string[] = null;
    candys: string[] = null;
    isTouch: boolean = false;
    callback:() => void = null;
    onLoad() {
        this.isTouch = false;
        this.count = 0;
        this.colors = [];
        this.candys = [];
        this.chooseNames = [
            'table',
            'refrigerator',
            'cabinet',
            'sink'
        ]
        this.node.getChildByName('slime').getComponent(MoveIn).actionCallBack = function () {
            let noFirst = DataConfig.getInstance().getNoFirst();
            if (noFirst) {
                this.node.getChildByName('plate').getComponent(MoveIn).doShowAction();
            } else {
                cc.find('Canvas/tip/tips1').active = true;
                cc.find('Canvas/tip/tips1').runAction(cc.moveTo(1, cc.v2(0, 0)));
                this.node.runAction(cc.sequence(
                    cc.delayTime(5),
                    cc.callFunc(function () {
                        cc.find('Canvas/tip/tips1').active = false;
                        cc.find('Canvas/tip/tips2').active = true;
                        cc.find('Canvas/tip/tips2').runAction(cc.moveTo(1, cc.v2(0, 0)));
                    }.bind(this)),
                    cc.delayTime(5),
                    cc.callFunc(function () {
                        cc.find('Canvas/tip/tips2').active = false;
                        cc.find('Canvas/tip/tips3').active = true;
                        cc.find('Canvas/tip/tips3').runAction(cc.moveTo(1, cc.v2(0, 0)));
                    }.bind(this)),
                    cc.delayTime(5),
                    cc.callFunc(function () {
                        cc.find('Canvas/tip/tips3').active = false;
                        this.node.getChildByName('plate').getComponent(MoveIn).doShowAction();
                        DataConfig.getInstance().setNoFirst();
                    }.bind(this))
                ));
            }
          
        }.bind(this);
        this.node.getChildByName('plate').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('slime').getComponent(cc.AudioSource).play();
            this.node.getChildByName('slime').runAction(cc.sequence(
                cc.moveBy(0.5, cc.v2(0, -80)),
                cc.callFunc(function () {
                    cc.find('Canvas/plate/plate_slime').active = true;
                    this.hidePlate();
                    this.node.runAction(cc.sequence(
                        cc.delayTime(0.5),
                        cc.callFunc(function () {
                            this.activateBtn();
                        }.bind(this))
                    ));
                    this.node.getChildByName('slime').active = false;
                }.bind(this))
               
            ))
        }.bind(this);
    }
    init() {
        cc.find('Canvas/refrigerator/mixmachine').active = false;
        cc.find('Canvas/refrigerator/refrigerator/close').active = true;
        cc.find('Canvas/refrigerator/refrigerator/open').active = false;
        cc.find('Canvas/refrigerator/refrigerator/open/drawer').setPosition(cc.v2(-52, -100));
       

    }
    showChangBtns() {
        cc.find('Canvas/btn_back').active = true;
        cc.find('Canvas/refrigerator/right').active = true;
        cc.find('Canvas/sink/right').active = true;
        cc.find('Canvas/sink/left').active = true;
        cc.find('Canvas/cabinet/left').active = true;
    }
    hideChangeBtns() {
        cc.find('Canvas/btn_back').active = false;
        cc.find('Canvas/refrigerator/right').active = false;
        cc.find('Canvas/sink/right').active = false;
        cc.find('Canvas/sink/left').active = false;
        cc.find('Canvas/cabinet/left').active = false;
    }
    chooseBtn(event, data) {
        if (data == 'table') {
            cc.find('Canvas/btn_back').active = false;
        }
        this.node.getChildByName('plate').stopAllActions();
        let scale1 = 0.4;
        cc.find('Canvas/plate').scale = scale1;
        let y = cc.view.getVisibleSize().height / 2 - cc.find('Canvas/plate').height / 2 * scale1 -20;
        this.node.getChildByName('plate').setPosition(cc.v2(0, y));
        this.node.getChildByName('tipClick').active = false;
        let name = data;
        let scale = this.node.getChildByName('bg').scale;
        this.node.getChildByName('bg').runAction(cc.sequence(
            cc.scaleBy(0.5, 1.2),
            cc.callFunc(function () {
                this.node.getChildByName('bg').setScale(scale);
                for (let i = 0; i < this.chooseNames.length; i++){
                    if (name == this.chooseNames[i]) {
                        cc.find(`Canvas/${this.chooseNames[i]}`).active = true;
                        this.showChangBtns();
                        this.init();
                        cc.find('Canvas/btn_back').active = true;
                        if (name == 'table') {
                            cc.find('Canvas/btn_back').active = false;
                            cc.find('Canvas/btn_next').active = false;
                        }
                    } else {
                        cc.find(`Canvas/${this.chooseNames[i]}`).active = false;
                    }
                }
            }.bind(this))
        ))
        
    }
    backBtn() {
        cc.find('Canvas/btn_back').active = false;
        for (let i = 0; i < this.chooseNames.length; i++){
            cc.find(`Canvas/${this.chooseNames[i]}`).active = false;  
        }
        let scale1 = 0.4;
        cc.find('Canvas/plate').scale = scale1;
        let x = -cc.view.getVisibleSize().width / 2 + cc.find('Canvas/plate').width / 2 * scale1 +20;
        let y = -cc.view.getVisibleSize().height / 2 + cc.find('Canvas/plate').height / 2 * scale1 +130;
        this.node.getChildByName('plate').setPosition(cc.v2(x, y));
    }
    nextBtn() {
        this.showPlate(cc.v2(0,0));
        this.node.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                CocosHelper.captureNodeSize(cc.find('Canvas/plate/color'), cc.view.getVisibleSize().width, cc.view.getVisibleSize().height).then((texture: cc.RenderTexture) => {
                    DataConfig.getInstance().setTexture(texture);
                });
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('wrapUpSlimeCE',12);
            }.bind(this))
        ))
        
    }
    plateClick() {
        if (cc.find('Canvas/tipClick')) {
            cc.find('Canvas/tipClick').active = false; 
        }
        if (this.callback) {
            this.callback();
        }
       
    }
    showPlate(pos?: cc.Vec2) {
        let pos1 = cc.v2(0, -150);
        if (pos) {
            pos1 = pos;
        }
        cc.find('Canvas/plate').runAction(
            cc.spawn(cc.scaleTo(0.5, 0.8), cc.moveTo(0.5,pos1))
        )
        this.node.getChildByName('mask').active = true;
    }
    hidePlate() {
        // CocosHelper.captureNodeSize(cc.find('Canvas/plate/color'),cc.view.getVisibleSize().width,cc.view.getVisibleSize().height).then((texture: cc.RenderTexture) => {
        //     cc.find('Canvas/plate/color').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            // cc.log(texture);
            // let node = new cc.Node();
            // node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            // this.node.addChild(node);
            // node.setScale(2);
            //cc.find('Canvas/plate/color').removeAllChildren();
            //cc.find('Canvas/plate/color').setPosition(cc.v2())
            let scale = 0.4;
            let x = -cc.view.getVisibleSize().width / 2 + cc.find('Canvas/plate').width / 2 * scale +20;
            let y = -cc.view.getVisibleSize().height / 2 + cc.find('Canvas/plate').height / 2 * scale +130;
            cc.find('Canvas/plate').runAction(cc.sequence(
                cc.spawn(cc.scaleTo(0.5, scale), cc.moveTo(0.5, cc.v2(x, y))),
                cc.callFunc(function () {
                    this.node.getChildByName('mask').active = false;
                }.bind(this))
            ))
        //})
        
    }
    hidePlateCenter() {
        // CocosHelper.captureNodeSize(cc.find('Canvas/plate/color'),cc.view.getVisibleSize().width,cc.view.getVisibleSize().height).then((texture: cc.RenderTexture) => {
        //     cc.find('Canvas/plate/color').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            // cc.log(texture);
            // let node = new cc.Node();
            // node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            // this.node.addChild(node);
            // node.setScale(2);
            //cc.find('Canvas/plate/color').removeAllChildren();
            //cc.find('Canvas/plate/color').setPosition(cc.v2())
            let scale = 0.4;
            let x = 0
            let y = cc.view.getVisibleSize().height / 2 - cc.find('Canvas/plate').height / 2 * scale -20;
            cc.find('Canvas/plate').runAction(cc.sequence(
                cc.delayTime(1),
                cc.spawn(cc.scaleTo(0.5, scale), cc.moveTo(0.5, cc.v2(x, y))),
                cc.callFunc(function () {
                    this.node.getChildByName('mask').active = false;
                }.bind(this))
            ))
        //})
        
    }
    refrigeratorClick(event) {
       
        cc.find('Canvas/refrigerator/refrigerator/close').getComponent(cc.AudioSource).play();
        cc.find('Canvas/refrigerator/refrigerator/close').active = false;
        cc.find('Canvas/refrigerator/refrigerator/open').active = true;
        cc.find('Canvas/refrigerator/refrigerator/open').getComponent(cc.AudioSource).play();
        if (cc.find('Canvas/refrigerator/refrigerator/close/tipClick')) {
            cc.find('Canvas/refrigerator/refrigerator/close/tipClick').destroy();
        }
    }
    activateBtn() {
        this.chooseNames.forEach(name => {
            cc.find(`Canvas/bg/${name}`).getComponent(cc.Button).interactable = true;
        })
    }
    sleepBtn() {
        this.chooseNames.forEach(name => {
            cc.find(`Canvas/bg/${name}`).getComponent(cc.Button).interactable = false;
        })
    }
    
    candyClick(event, data) {
        this.node.getComponent(cc.AudioSource).play();
        if (cc.find('Canvas/table/tipClick')) {
            cc.find('Canvas/table/tipClick').destroy();
        }
        this.sleepTableBtns();
        this.candy = data;
        let node = event.target;
        node.parent = this.node;
        this.showPlate(cc.v2(0,-150));
        node.runAction(cc.sequence(
            cc.scaleTo(0.3, 1.2),
            cc.scaleTo(0.2,1),
            cc.callFunc(function () {
                cc.find('Canvas/plate').getComponent(cc.Button).interactable = true;
                if (cc.find('Canvas/tipClick')) {
                    cc.find('Canvas/tipClick').active = true;
                    cc.find('Canvas/tipClick').setPosition(cc.v2(0, -150));
                }
                this.callback = function () {
                
                    node.runAction(cc.sequence(
                        cc.callFunc(function () {
                            this.candys.push(this.candy);
                            DataConfig.getInstance().setCandys(this.candys);
                            cc.loader.loadRes(`crazyemoji/prefab/color/${this.candy}`, cc.Prefab, function (err, prefab) {
                                //cc.loader.setAutoReleaseRecursively(prefab, true);
                                let node1 = cc.instantiate(prefab);
                                if (node1.getComponent(cc.AudioSource)) {
                                    node1.getComponent(cc.AudioSource).play();
                                }
                             
                                cc.find('Canvas/plate/color').addChild(node1);
                                let length = node1.childrenCount;
                                for (let i = 0; i < length; i++){
                                    let initPos = node1.children[i].getPosition();
                                    let randomY = 50 + Math.random() * 20;
                                    node1.children[i].setPosition(cc.v2(initPos.x, initPos.y + randomY));
                                    node1.children[i].runAction(cc.moveTo(0.5, initPos));

                                }
                                cc.find('Canvas/plate/decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                                cc.find('Canvas/plate/decorateParticle').getComponent(cc.AudioSource).play();
                                this.hidePlateCenter();
                                node.opacity = 0;
                                let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "next_btn");
                                if (!btn_next.active) {
                                    btn_next.active = true;
                                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                                }
                               
                            }.bind(this));
                        }.bind(this)),
                        cc.delayTime(2.5),
                        cc.callFunc(function () {
                            this.activateTableBtns();
                            node.destroy();
                        }.bind(this))
                    ))
                }.bind(this);
            }.bind(this))
        ))
    }
    activateTableBtns() {
        cc.find('Canvas/table').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
    }
    sleepTableBtns() {
        cc.find('Canvas/table').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
    }
    foodClick(event, data) {
        this.node.getComponent(cc.AudioSource).play();
        if (cc.find('Canvas/refrigerator/refrigerator/open/tipClick')) {
            cc.find('Canvas/refrigerator/refrigerator/open/tipClick').destroy();
        }
       
        this.hideChangeBtns();
        this.color = data;
        this.sleepFoodBtns();
        let node = event.target;
        this.foodName = node.name;
        node.stopAllActions();
        let initPos = node.getPosition();
        node.parent.children.forEach(child => {
            child.zIndex = 0;  
        });
        node.zIndex = 1;
        node.getComponent(cc.Button).interactable = false;
        node.active = false;
        cc.find('Canvas/refrigerator/mixmachine').active = true;
        let pos = cc.find('Canvas/refrigerator/mixmachine').convertToNodeSpaceAR(node.convertToWorldSpaceAR(cc.v2(0, 0)));
        let pos1 = cc.find('Canvas/refrigerator/mixmachine/fruit').getPosition();
       
        cc.find('Canvas/refrigerator/mixmachine/fruit').setPosition(pos)
        cc.find('Canvas/refrigerator/mixmachine/fruit').active = true;
        cc.find('Canvas/refrigerator/mixmachine/fruit').setScale(1);
        cc.find('Canvas/refrigerator/mixmachine/fruit').getComponent(cc.Sprite).spriteFrame = node.getComponent(cc.Sprite).spriteFrame;
        cc.find('Canvas/refrigerator/mixmachine/fruit').runAction(cc.spawn(cc.moveTo(0.5, pos1), cc.scaleTo(0.5, 1.3)));
      
        cc.find('Canvas/refrigerator/mixmachine/machine').stopAllActions();
        cc.find('Canvas/refrigerator/mixmachine/machine').setPosition(cc.v2(132, -6));
        cc.find('Canvas/refrigerator/mixmachine/machine').opacity = 0;
        cc.find('Canvas/refrigerator/mixmachine/mask').active = false;
        cc.find('Canvas/refrigerator/mixmachine/jiaoban_bg').active = false;
        cc.find('Canvas/refrigerator/mixmachine/machine/mix1').active = false;
        cc.find('Canvas/refrigerator/mixmachine/machine/mix2').active = false;
        cc.find('Canvas/refrigerator/mixmachine/machine/mix3').active = false;
        cc.find('Canvas/refrigerator/mixmachine/machine/btn/on').active = true;
        cc.find('Canvas/refrigerator/mixmachine/machine/btn').getComponent(cc.Button).interactable = false;
        cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(cc.Button).interactable = false;
        cc.find('Canvas/refrigerator/mixmachine/machine').active = true;
        cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(MoveIn).doShowAction();
        cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/refrigerator/mixmachine/fruit').getComponent(SpriteDrag).enabled = true;
            cc.find('Canvas/refrigerator/mixmachine/mask').active = true;
            cc.find('Canvas/refrigerator/mixmachine/jiaoban_bg').active = true;
            node.active = true;
            if (cc.find('Canvas/refrigerator/mixmachine/finger')) {
                cc.find('Canvas/refrigerator/mixmachine/finger').active = true;
            }
            if (node.name == 'vegetables' || node.name == 'cucumber' || node.name == 'potato' || node.name == 'tomato') {
                this.closeDrawer();
            }
            this.activateFoodBtns();
        }.bind(this)
    }
    foodTouchStart() {
        cc.loader.loadRes(`crazyemoji/image/food/mixmachine_${this.foodName}1`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(err)
            //cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.find('Canvas/refrigerator/mixmachine/machine/mix1').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.loadRes(`crazyemoji/image/food/mixmachine_${this.foodName}2`, cc.SpriteFrame, function (err, spriteFrame) {
                cc.log(err);
                //cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                cc.find('Canvas/refrigerator/mixmachine/machine/mix2').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.loadRes(`crazyemoji/image/food/mixmachine_${this.color}`, cc.SpriteFrame, function (err, spriteFrame) {
                    //cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                    cc.find('Canvas/refrigerator/mixmachine/machine/mix3').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    cc.loader.loadRes(`crazyemoji/image/food/${this.color}`, cc.SpriteFrame, function (err, spriteFrame) {
                        //cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        cc.find('Canvas/refrigerator/mixmachine/machine/pourJuice').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }.bind(this))
                }.bind(this))
            }.bind(this))
        }.bind(this));
    }
    foodTouchEnd(event) {
        if (cc.find('Canvas/refrigerator/mixmachine/finger')) {
            cc.find('Canvas/refrigerator/mixmachine/finger').destroy();
        }
       
       
        let node = event.target;
        node.getComponent(SpriteDrag).enabled = false;
        cc.find('Canvas/refrigerator/mixmachine/machine/lip').runAction(cc.moveBy(0.3, cc.v2(-1000, 0)));
        node.runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(124, 280)),
            cc.spawn(cc.moveBy(0.3, cc.v2(0, -80)), cc.scaleTo(0.3, 0.5)),
            cc.callFunc(function () {
                cc.find('Canvas/refrigerator/mixmachine/machine/mix1').active = true;
                node.setPosition(cc.v2(-108, -15));
                node.setScale(1.3);
                node.active = false;
                cc.find('Canvas/refrigerator/mixmachine/machine/lip').runAction(cc.sequence(
                    cc.moveBy(0.3, cc.v2(1000, 0)),
                    cc.callFunc(function () {
                        cc.find('Canvas/refrigerator/mixmachine/machine/btn').getComponent(cc.Button).interactable = true;
                        if (cc.find('Canvas/refrigerator/mixmachine/machine/btn/tipClick')) {
                            cc.find('Canvas/refrigerator/mixmachine/machine/btn/tipClick').active = true;
                        }
                        
                    }.bind(this))
                ));
            }.bind(this))
        ))
       
        
    }
    seasoningClick(event, data) {
        this.node.getComponent(cc.AudioSource).play();
        if (cc.find('Canvas/cabinet/tipClick')) {
            cc.find('Canvas/cabinet/tipClick').destroy();
        }
        this.hideChangeBtns();
        this.sleepSeaSoningBtns();
        this.color = data;
        let node = cc.instantiate(event.target);
        if (node.getComponent(ObjectAction)) {
            node.removeComponent(ObjectAction)
        }
        node.getComponent(ObjectAction)
        node.parent = this.node;
        event.target.active = false;
        node.zIndex = 1;
        this.showPlate();
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(1, cc.v2(100, 0)), cc.scaleTo(1, 1.3)),
            cc.callFunc(function () {
                cc.find('Canvas/tipClick').active = true;
                cc.find('Canvas/tipClick').zIndex = 2;
                cc.find('Canvas/tipClick').setPosition(cc.v2(100, 0));
                node.getComponent(SpriteDrag).enabled = true;
            }.bind(this))
        ))

       
        
    }
    seasoningTouchStart(event) {
        cc.find('Canvas/tipClick').active = false;
        let node1 = event.target;
        node1.getComponent(SpriteDrag).enabled = false;
        let x = 250 - Math.random() * 200;
        let y = 130 - Math.random() * 60;
        if (node1.name == 'salasaauce') {
            y = 30 - Math.random() * 60;
            x = 170 - Math.random() * 200;
        } else if (node1.name == 'oil') {
            y = 180 - Math.random() * 60;
            x = 170 - Math.random() * 200;
        }else if (node1.name == 'chilisauce') {
            y = 60 - Math.random() * 60;
        } else if (node1.name == 'chocolatesauce') {
            y = 100 - Math.random() * 60;
            
        }
        node1.runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(x, y))),
            cc.callFunc(function () {
                node1.getChildByName('pour').active = true;
                cc.find('Canvas/cabinet').getComponent(cc.AudioSource).play();
                if (node1.name == 'oil') {
                    node1.getChildByName('oil0').active = false;
                    node1.getChildByName('oil1').active = true;
                    node1.getChildByName('oil1').runAction(cc.fadeTo(3.5, 0));
                } else if (node1.name == 'salasaauce') {
                    node1.getChildByName('salasaauce').runAction(cc.fadeTo(3.5, 0));
                }
                let pos = cc.find('Canvas/plate/color').convertToNodeSpaceAR(node1.getChildByName('pour').convertToWorldSpaceAR(cc.v2(0, 0)));
                this.creatColor(pos,3);

            }.bind(this)),
            cc.delayTime(3.5),
            cc.callFunc(function () {
                cc.find('Canvas/cabinet').getComponent(cc.AudioSource).stop();
                node1.getChildByName('pour').active = false;
                this.hidePlateCenter();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1000, 0))),
            cc.delayTime(2),
            cc.callFunc(function () {
                cc.log(node1.name);
                cc.find(`Canvas/cabinet/${node1.name}`).active = true;
                node1.destroy();
                this.activateSeasoningBtns();
                this.showChangBtns();
            }.bind(this))
        )) 
    }
    washClick(event, data) {
        this.node.getComponent(cc.AudioSource).play();
        this.hideChangeBtns();
        this.sleepWashBtns();
        event.target.parent.getChildByName('tipClick').active = false;
        this.color = data;
        let node = cc.instantiate(event.target);
        if (node.getComponent(ObjectAction)) {
            node.removeComponent(ObjectAction)
        }
        node.parent = this.node;
        event.target.active = false;
        node.zIndex = 1;
        this.showPlate();
        let x = 240 - Math.random() * 220;
        let y = 35 - Math.random() * 60;
        node.runAction(cc.sequence(
            cc.spawn(cc.moveTo(1, cc.v2(x, y)), cc.scaleTo(1, 1.3),cc.rotateTo(1,-20)),
            cc.callFunc(function () {
                let pos = cc.find('Canvas/plate/color').convertToNodeSpaceAR(node.getChildByName('pour').convertToWorldSpaceAR(cc.v2(0, 0)));
                this.creatColor(pos, 6,function () {
                    this.pourFinish(node);
                }.bind(this));
            }.bind(this)),
            cc.delayTime(0.2),
            cc.callFunc(function () {
                if (cc.find('Canvas/finger')) {
                    cc.find('Canvas/finger').active = true;
                    cc.find('Canvas/finger').setPosition(cc.v2(x, y));
                    cc.find('Canvas/finger').zIndex = 2;
                }
                this.registerTouchEvent(node);
            }.bind(this))
        ))
    }
    registerTouchEvent(node:cc.Node) {
        node.on(cc.Node.EventType.TOUCH_START, this.washTouchStart, this);
        node.on(cc.Node.EventType.TOUCH_END, this.washTouchEnd, this);
        node.on(cc.Node.EventType.TOUCH_CANCEL,this.washTouchCancle,this);
    }
    destoryTouchEvent(node:cc.Node) {
        node.off(cc.Node.EventType.TOUCH_START, this.washTouchStart, this);
        node.off(cc.Node.EventType.TOUCH_END, this.washTouchEnd, this);
        node.off(cc.Node.EventType.TOUCH_CANCEL,this.washTouchCancle,this);
    }

    washTouchStart(event) {
        this.isTouch = true;
        if (cc.find('Canvas/finger')) {
            cc.find('Canvas/finger').destroy();
        }
      
        let node = event.target;
        node.getChildByName('pour').active = true;
        cc.find('Canvas/sink').getComponent(cc.AudioSource).play();
        cc.director.getActionManager().resumeTarget(this.currentColorNode);
    }
    washTouchEnd(event) {
        if (this.isTouch) {
            this.isTouch = false
            this.pourFinish(event.target);
        }
        
        
    }
    washTouchCancle(event) {
        if (this.isTouch) {
            this.isTouch = false
            this.pourFinish(event.target);
        }
    }
    pourFinish(node: cc.Node) {
        cc.find('Canvas/plate/decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
        cc.find('Canvas/plate/decorateParticle').getComponent(cc.AudioSource).play();
        cc.director.getActionManager().pauseTarget(this.currentColorNode);
        node.getChildByName('pour').active = false;
        cc.find('Canvas/sink').getComponent(cc.AudioSource).stop();
        let pos = cc.find(`Canvas/sink/${node.name}`).getPosition();
        this.destoryTouchEvent(node);
        this.hidePlateCenter();
        node.runAction(cc.sequence(
            cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, pos), cc.rotateTo(0.5, 0)),
            cc.callFunc(function () {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(function() {
                        this.activateWashBtns();
                        this.showChangBtns();
                    }.bind(this))
                ))
                node.destroy();
                cc.find(`Canvas/sink/${node.name}`).active = true;
               
            }.bind(this))
           
        ))

    }

    activateFoodBtns() {
        cc.find('Canvas/refrigerator/refrigerator/open').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
        cc.find('Canvas/refrigerator/refrigerator/open/drawer').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
        cc.find('Canvas/refrigerator/refrigerator/open/partition').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
    }
    sleepFoodBtns() {
        cc.find('Canvas/refrigerator/refrigerator/open').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
        cc.find('Canvas/refrigerator/refrigerator/open/drawer').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
        cc.find('Canvas/refrigerator/refrigerator/open/partition').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
    }
    activateSeasoningBtns() {
        cc.find('Canvas/cabinet').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
    }
    sleepSeaSoningBtns() {
        cc.find('Canvas/cabinet').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
    }
    activateWashBtns() {
        cc.find('Canvas/sink').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = true;
            }
        });
    }
    sleepWashBtns() {
        cc.find('Canvas/sink').children.forEach(child => {
            if (child.getComponent(cc.Button)) {
                child.getComponent(cc.Button).interactable = false;
            }
        });
    }
    machineBtnClick() {
        if (cc.find('Canvas/refrigerator/mixmachine/machine/btn/tipClick')) {
            cc.find('Canvas/refrigerator/mixmachine/machine/btn/tipClick').destroy();
        }
        cc.find('Canvas/refrigerator/mixmachine/machine/btn').getComponent(cc.Button).interactable = false;
        cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(cc.AudioSource).play();
        cc.find('Canvas/refrigerator/mixmachine/machine/btn/on').active = false;
        cc.find('Canvas/refrigerator/mixmachine/machine').runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function () {
                cc.find('Canvas/refrigerator/mixmachine/machine/mix1').active = false;
                cc.find('Canvas/refrigerator/mixmachine/machine/mix2').active = true;
            }.bind(this)),
            cc.delayTime(1),
            cc.callFunc(function () {
                cc.find('Canvas/refrigerator/mixmachine/machine/mix2').active = false;
                cc.find('Canvas/refrigerator/mixmachine/machine/mix3').active = true;
            }.bind(this)),
            cc.delayTime(1),
            cc.callFunc(function () {
                cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(cc.AudioSource).stop();
                cc.find('Canvas/refrigerator/mixmachine/jiaoban_bg').active = false;
                this.showPlate();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                if (cc.find('Canvas/tipClick')) {
                    cc.find('Canvas/tipClick').active = true;
                }
                cc.find('Canvas/refrigerator/mixmachine/machine').getComponent(cc.Button).interactable = true;
                let node1 = cc.instantiate(cc.find('Canvas/refrigerator/mixmachine/machine'));
                node1.getChildByName('btn').removeComponent(cc.Button);
                this.node.addChild(node1);
                let pos = this.node.convertToNodeSpaceAR(cc.find('Canvas/refrigerator/mixmachine/machine').convertToWorldSpaceAR(cc.v2(0, 0)));
                node1.setPosition(pos);
                cc.find('Canvas/tipClick').setPosition(pos);
                cc.find('Canvas/tipClick').zIndex = 1;
                cc.find('Canvas/refrigerator/mixmachine/machine').active = false;

            }.bind(this))
        ))
    }
    machineClick(event) {
        if (cc.find('Canvas/tipClick')) {
            cc.find('Canvas/tipClick').active = false;
        }
        let node1 = event.target;
        node1.getComponent(cc.Button).interactable = false;
        let x = 300 - Math.random() * 230;
        let y = 180 - Math.random() * 60;
        node1.runAction(cc.sequence(
            cc.spawn(cc.rotateTo(0.5, -90), cc.moveTo(0.5, cc.v2(x, y))),
            cc.callFunc(function () {
                node1.getChildByName('lip').active = false;
                node1.getChildByName('pourJuice').active = true;
                node1.getChildByName('pourJuice').getComponent(cc.AudioSource).play();
                node1.getChildByName('mix3').runAction(cc.fadeTo(4, 0));
                let pos1 = cc.find('Canvas/plate/color').convertToNodeSpaceAR(node1.getChildByName('pourJuice').convertToWorldSpaceAR(cc.v2(0, 0)));
                this.creatColor(pos1,3);

            }.bind(this)),
            cc.delayTime(4),
            cc.callFunc(function () {
                node1.getChildByName('pourJuice').getComponent(cc.AudioSource).stop();
                node1.getChildByName('pourJuice').active = false;
                cc.find('Canvas/refrigerator/mixmachine/mask').active = false;
                this.hidePlateCenter();
            }.bind(this)),
            cc.spawn(cc.rotateTo(0.5, 0), cc.moveBy(0.5, cc.v2(1000, 0))),
            cc.delayTime(2),
            cc.callFunc(function () {
                this.showChangBtns();
                node1.destroy();
            }.bind(this)),
        )) 
    }
    creatColor(pos: cc.Vec2,time:number, callback?:Function) {
        cc.loader.loadRes(`crazyemoji/prefab/color/${this.color}`, cc.Prefab, function (err, prefab) {
            cc.loader.setAutoReleaseRecursively(prefab, true);
            let node = cc.instantiate(prefab);
            let scale = 0.4;
            cc.find('Canvas/plate/color').addChild(node);
            node.setPosition(pos);
            node.setScale(0);
            this.currentColorNode = node;
            this.count = this.count + 1;
            if (this.count == 2) {
                TipManager.getInstance().jumpTips();
                let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                btn_next.active = true;
                btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
            }
            this.colors.push(this.color);
            DataConfig.getInstance().setColors(this.colors);
            this.currentColorNode.runAction(cc.sequence(
                cc.delayTime(0.1),
                cc.callFunc(function () {
                    node.setScale(0.1);
                }.bind(this)),
                cc.scaleTo(time, scale),
                cc.callFunc(function () {
                    cc.find('Canvas/plate/decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('Canvas/plate/decorateParticle').getComponent(cc.AudioSource).play();
                    if (callback) {
                        callback();
                    }
                }.bind(this))
            ));
            if (callback) {
                cc.director.getActionManager().pauseTarget(this.currentColorNode);
            }
        }.bind(this));
    }
    openDrawer() {
        cc.find('Canvas/refrigerator/refrigerator/open/drawer/drawer0').getComponent(cc.Button).enabled = false;
        cc.find('Canvas/refrigerator/refrigerator/open/drawer').runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(-52, -170)),
            cc.callFunc(function () {
                cc.log(cc.find('Canvas/refrigerator/refrigerator/open/drawer/drawer0').getComponent(cc.BlockInputEvents));
                cc.log(cc.find('Canvas/refrigerator/refrigerator/open/drawer/potato').getComponent(cc.Button).interactable);
            }.bind(this))
        ))
    }
    closeDrawer() {
        cc.find('Canvas/refrigerator/refrigerator/open/drawer').children.forEach(child => {
            if (child.name == 'drawer0') {
                child.zIndex = 1
            } else {
                child.zIndex = 0;
            }
        });

        cc.find('Canvas/refrigerator/refrigerator/open/drawer').runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(-52, -100)),
            cc.callFunc(function () {
                cc.find('Canvas/refrigerator/refrigerator/open/drawer/drawer0').getComponent(cc.Button).enabled = true;
            }.bind(this))
        ))
    }

}
