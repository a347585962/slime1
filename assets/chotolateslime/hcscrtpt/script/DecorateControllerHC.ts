import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";
import RewardManager from "../common/Script/RewardManagerHC";
import IconItem from "../common/Script/IconItemHC";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragHC";
import MoveIn from "../common/Script/MoveInHC";
import PopupComponet from "./PopupComponetHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";

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
export default class DecorateController extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    insta: cc.Prefab = null;

    @property(cc.Node)
    private conteneNode: cc.Node = null;

    @property
    text: string = 'hello';
    private iconsPool: cc.NodePool = null;
    stepNum: number = 0;
    cupIndex: number = null;
    start () {
        RewardManager.getInstance().loadConfig();

        if (this.iconsPool == null) {
            this.iconsPool = new cc.NodePool;
            for (let i = 0; i < 15; i++) {
                this.iconsPool.put(cc.instantiate(this.insta));
            }
        }

    }
    onLoad() {
        cc.game.addPersistRootNode(cc.find('cupCopy'));
        this.showIconBg('cup');
        cc.find('cup/dish', this.node).getComponent(MoveIn).actionCallBack = function () {
            cc.find('cup/dish/pull', this.node).getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('cup/bowl', this.node).getComponent(MoveIn).actionCallBack = function () {
            cc.find('cup/bowl', this.node).getComponent(SpriteDrag).enabled = true;
        }.bind(this);
        cc.find('decScrollView', this.node).getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('btn_next').getComponent(cc.Button).interactable = true;
        }.bind(this);
        
        // let btn_reset = CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset");
        // CocosHelper.showBackOut(btn_reset, CocosHelper.ShowDirection.show_from_left);

    }
    showButtons() {
        let count = this.node.getChildByName('buttons').childrenCount;
        for (let i = count - 1; i >= 0; i--){
            this.node.getChildByName('buttons').runAction(cc.sequence(
                cc.delayTime(0.2 * (count-1-i)),
                cc.callFunc(function () {
                    this.node.getChildByName('buttons').getComponent(cc.AudioSource).play();
                    this.node.getChildByName('buttons').children[i].active = true;
                    let scale = this.node.getChildByName('buttons').children[i].scale;
                    this.node.getChildByName('buttons').children[i].runAction(cc.sequence(cc.scaleBy(0.1, 1.1, 0.9), cc.scaleBy(0.1, 0.9, 1.1), cc.scaleTo(0.1, scale)));
                }.bind(this))
            ))
        }
    }
    singleToggle(event,customEventData){
        this.showIconBg(customEventData);
    }
    // update (dt) {}
    showIconBg(customData:string){
        let icon_board = CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView");
        icon_board.active = true;

        let iconPaths: string[] = [];
        iconPaths.push("chocolateslime/image/dec/reset"); 
        if (customData == 'cup') {
            for (let index = 0; index < 14; index++) {
                iconPaths.push("chocolateslime/image/dec/icon/"+customData+"/" + index); 
                
            }
        } else {
            for (let index = 0; index < 15; index++) {
                iconPaths.push("chocolateslime/image/dec/icon/"+customData+"/" + index); 
                
            }
        }
        
        let v = this.conteneNode.children.slice();
        for (let c of v) {
            this.iconsPool.put(c);
        }
        let self = this;

        cc.loader.loadResArray(iconPaths, cc.SpriteFrame, (erro, frames: cc.SpriteFrame[]) => {

            for (let i = 0; i < frames.length; i++) {
                let node: cc.Node = null;
                if (self.iconsPool.size() > 0) {
                    node = self.iconsPool.get();
                } else {
                    node = cc.instantiate(self.insta);
                }
                
                node.getChildByName("0").getComponent(cc.Sprite).spriteFrame = frames[i];
                node.parent = self.conteneNode;
                let item = node.getComponent(IconItem);
                item.index = i;
                item.isRewardLock = i % 2 == 0;
                item.key = item.moduleName = customData;

                if(i == 0){
                    item.key = "lock";
                }

                item.init();
                let event = new cc.Component.EventHandler;
                event.component = "DecorateControllerHC";
                event.handler = "touch";
                event.target = self.node;
                item.getComponent(cc.Toggle).isChecked = false;
                item.getComponent(cc.Toggle).checkEvents = [event];
            }
            let scrollviewCm = icon_board.getComponent(cc.ScrollView);
            scrollviewCm.scrollToTop();

        });
       
    }
    touch(a: cc.Toggle) {
        if (a.isChecked) {
            this.node.getComponent(cc.AudioSource).play();
            let node = a.node;
            let item = node.getComponent(IconItem);
            let index = item.index;
            let pos = a.node.convertToWorldSpaceAR(cc.v2(0, 0));

            let customData = item.moduleName;
            console.log(customData);
            console.log(index);

            if (index == 0) {
                if (customData == 'cup') {
                    cc.loader.loadRes(`chocolateslime/image/dec/${customData}/0`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.find(`Canvas/cup/${customData}`).getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }.bind(this));
                } else if (customData == 'eye' || customData == 'mouth' || customData == 'mustache') {
                    cc.find(`Canvas/cup/${customData}`).active = false;
                    
                } else if (customData == 'sticker') {
                    cc.find('Canvas/cup/sticker').children.forEach(child => {
                        if (child.name != 'item') {
                            child.destroy();
                        }
                    })
                }
                //消除
                
            } else {
                if (customData == 'cup'||customData == 'eye' || customData == 'mouth' || customData == 'mustache') {
                    cc.loader.loadRes(`chocolateslime/image/dec/${customData}/${index - 1}`, cc.SpriteFrame, function (err, spriteFrame) {
                        if (customData == 'cup') {
                            this.cupIndex = index - 1;
                            let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                            btn_next.active = true;
                            btn_next.runAction(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1)));
                        }
                        let oriNode = cc.find(`Canvas/cup/${customData}`);
                        let copyNode = cc.instantiate(oriNode);
                        copyNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        copyNode.parent = oriNode.parent;
                        copyNode.setScale(0);
                        let position = oriNode.parent.convertToNodeSpaceAR(node.convertToWorldSpace(cc.v2(0,0)));
                        copyNode.setPosition(position);
                        copyNode.active = true;
                        let action = cc.spawn(cc.sequence(cc.moveTo(0.8,cc.v2(-100,300)),cc.moveTo(0.5,cc.v2(oriNode.getPosition()))),cc.scaleTo(1.3,oriNode.scale));
                        copyNode.runAction(cc.sequence(
                            action,
                            cc.callFunc(function(){
                                cc.find('Canvas/cup/decorate').getComponent(cc.ParticleSystem).resetSystem();
                                cc.find('Canvas/cup/decorate').getComponent(cc.AudioSource).play();
                                cc.find('Canvas/cup/decorate').setPosition(oriNode.getPosition());
                                if (customData == 'cup') {
                                    cc.find('Canvas/cup/decorate').setPosition(cc.v2(oriNode.getPosition().x,oriNode.getPosition().y+200));
                                } else {
                                    cc.find('Canvas/cup/decorate').setPosition(oriNode.getPosition());
                                }
                                copyNode.destroy();
                                oriNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                                if(!oriNode.active){
                                    oriNode.active = true;
                                }
                            }.bind(this)),
                            ));    
                    }.bind(this));
                    
                } else if (customData == 'sticker') {
                    cc.loader.loadRes(`chocolateslime/image/dec/sticker/${index-1}`, cc.SpriteFrame, function (err, spriteFrame) {
                        let oriNode = cc.find('Canvas/cup/sticker/item');
                        let copyNode = cc.instantiate(oriNode);
                        copyNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        copyNode.parent = oriNode.parent;
                        copyNode.name = `item${index}`;
                        copyNode.setScale(0);
                        let position = oriNode.parent.convertToNodeSpaceAR(node.convertToWorldSpace(cc.v2(0,0)));
                        copyNode.setPosition(position);
                        copyNode.active = true;
                        let action = cc.spawn(cc.sequence(cc.moveTo(0.5,cc.v2(-100,300)),cc.moveTo(0.3,cc.v2(oriNode.getPosition()))),cc.scaleTo(0.5,oriNode.scale));
                        copyNode.runAction(cc.sequence(
                            action,
                            cc.callFunc(function(){
                                cc.find('Canvas/cup/decorate').getComponent(cc.ParticleSystem).resetSystem();
                                cc.find('Canvas/cup/decorate').getComponent(cc.AudioSource).play();
                                cc.find('Canvas/cup/decorate').setPosition(cc.find('Canvas/cup/sticker').getPosition());
                                copyNode.getComponent(SpriteDrag).enabled = true;
                            }.bind(this)),
                            ));    
                    }.bind(this));  
                }
            }
        }
    }
    nextButton() {
        this.node.getChildByName('btn_next').getComponent(cc.Button).interactable = false;
        if (this.stepNum == 0) {
            this.node.getChildByName('decScrollView').runAction(cc.sequence(cc.moveBy(0.5, cc.v2(-500, 0)),
                cc.callFunc(function () {
                    this.node.getChildByName('decScrollView').opacity = 0;
                    this.node.getChildByName('decScrollView').setPosition(cc.v2(-268,0));
                    this.node.getChildByName('decScrollView').getComponent(MoveIn).doShowAction();
                    this.showButtons();
                    this.showIconBg('eye');
                }.bind(this))
            ))
            this.stepNum = this.stepNum + 1;
        } else {
            this.node.getChildByName('btn_next').active = false;
            this.node.getChildByName('btn_reset').active = false;
            cc.find('Canvas/cup/sticker').children.forEach(child => {
                child.getComponent(SpriteDrag).enabled = false;
            })
            let count = this.node.getChildByName('buttons').childrenCount;
            for (let i = 0; i<count; i++){
                this.node.getChildByName('buttons').runAction(cc.sequence(
                    cc.delayTime(0.2 * i),
                    cc.callFunc(function () {
                        this.node.getChildByName('buttons').children[i].active = false;
                    }.bind(this))
                ))
            }
            this.node.getChildByName('decScrollView').runAction(cc.sequence(cc.moveBy(0.5, cc.v2(-500, 0)),
                cc.callFunc(function () {
                    cc.find('cup/dish', this.node).getComponent(MoveIn).doShowAction();
                }.bind(this))
        ))
        }
        
    }
    reset() {
        //cc.find('Canvas/btn_reset').getComponent(cc.AudioSource).play();
        // cc.loader.loadRes(`chocolateslime/prefab/popup`, cc.Prefab, function (err, prefab) {
        //     let node = cc.instantiate(prefab);
        //     node.parent = this.node;
        //     let componet = node.getComponent(PopupComponet);
        //     componet.showPopup();
        //     componet.setTip('Are you sure you want to reset?');
        //     componet.setCallback(function(){
                
        //     })  
        // }.bind(this));   
        cc.director.loadScene('decorateCupHC');
    }
    pullTouchEnd() {

        cc.loader.loadRes(`chocolateslime/image/dec/cup/${this.cupIndex}_0`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('cup/cupMask', this.node).active = true;
            cc.find('cup/cupMask1', this.node).active = true;
            cc.find('cup/cupMask', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.find('cup/cupMask1', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
        cc.loader.loadRes(`chocolateslime/image/dec/cup/${this.cupIndex}`, cc.SpriteFrame, function (err, spriteFrame) {
            cc.find('cup/mask', this.node).getComponent(cc.Mask).spriteFrame = spriteFrame;
        }.bind(this));
        cc.find('cup/dish/pull', this.node).getComponent(SpriteDrag).enabled = false;
        cc.find('cup/dish/pull', this.node).setPosition(cc.v2(520, 875));
        cc.find('cup/dish/pull', this.node).setScale(1);
        cc.find('cup/dish/pull', this.node).getComponent(cc.Animation).play('pourPull');
        this.node.runAction(cc.repeat(cc.sequence(cc.delayTime(0.6), cc.callFunc(function () {
            cc.find('cup/dish/pull', this.node).getComponent(cc.AudioSource).play(); 
        }.bind(this))),3))
        cc.find('cup/mask/slime0', this.node).runAction(cc.sequence(cc.delayTime(2),
            cc.callFunc(function () {
                cc.find('cup/mask/slime0', this.node).opacity = 255;
                cc.find('cup/dish', this.node).active = false;
                cc.find('cup/bowl', this.node).getComponent(MoveIn).doShowAction();
                cc.find('cup/cupMask1', this.node).active = false;
            }.bind(this)),
            cc.scaleTo(0.2, 1.05, 0.95),
            cc.scaleTo(0.2, 0.95, 1.05),
            cc.scaleTo(0.2, 1.05, 0.95),
            cc.scaleTo(0.2,0.95, 1.05),
            cc.scaleTo(0.1,1)
        ));
    }
    bowlTouchEnd() {
        cc.find('cup/cupMask1', this.node).active = true;
        cc.find('cup/bowl', this.node).getComponent(SpriteDrag).enabled = false;
        cc.find('cup/bowl', this.node).setPosition(cc.v2(-140, 515));
        cc.find('cup/bowl', this.node).runAction(cc.sequence(
            cc.rotateTo(0.5, 60),
            cc.callFunc(function () {
                cc.find('cup/bowl', this.node).getComponent(cc.AudioSource).play();
                cc.find('cup/bowl/sculpey', this.node).runAction(cc.scaleTo(1, 0));
                cc.find('cup/bowl/pourSculpey', this.node).getComponent(cc.ParticleSystem).resetSystem();
                cc.find('cup/mask/slime1', this.node).runAction(cc.sequence(cc.fadeTo(1, 255), cc.callFunc(function () {
                    cc.find('cup/bowl/pourSculpey', this.node).active = false;
                    cc.find('cup/dish', this.node).active = false;
                    cc.find('cup/decorateParticle', this.node).getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('cup/decorateParticle', this.node).getComponent(cc.AudioSource).play();
                }.bind(this))));
            }.bind(this)),
            cc.delayTime(1),
            cc.moveBy(0.5, cc.v2(-600, 0)),
            cc.callFunc(function () {
                cc.find('cup/bowl', this.node).active = false;
                this.node.getChildByName('cup').runAction(cc.sequence(
                    cc.spawn(cc.moveTo(0.5, cc.v2(0, -225)), cc.scaleTo(0.5, 0.9)),
                    cc.callFunc(function () {
                        this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                        this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
                    }.bind(this)),
                    cc.delayTime(0.5),
                    cc.callFunc(function () {
                        let node = cc.instantiate(this.node.getChildByName('cup'));
                        node.setScale(1);
                        node.parent = cc.find('cupCopy');
                        node.getComponent(MoveIn).enabled = false;
                        TransitionScene.changeScene('chooseHC');
                    }.bind(this))
                ))
            }.bind(this))
        ));
    }

}
