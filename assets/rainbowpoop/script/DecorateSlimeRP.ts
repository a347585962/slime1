import IconItem from "../common/Script/ads/IconItemRP";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRP";
import MoveIn from "../common/Script/compoent/MoveInRP";
import SprinkleTouchEvent from "./SprinkleTouchEventRP";
import MyMoveIn from "./MyMoveInRP";
import DataConfig from "./DataConfigRP";
import TransitionScene from "../common/Script/codebase/TransitionSceneRP";

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
export default class DecorateSlime extends cc.Component {
    @property(cc.Prefab)
    insta: cc.Prefab = null;

    @property(cc.Node)
    private conteneNode: cc.Node = null;
    private iconsPool: cc.NodePool = null;
   onLoad(){
        if (this.iconsPool == null) {
            this.iconsPool = new cc.NodePool;
            for (let i = 0; i < 20; i++) {
                this.iconsPool.put(cc.instantiate(this.insta));
            }
        }
       cc.find('Canvas/poop').getComponent(MyMoveIn).actionCallBack = function () {
           CocosHelper.findNode(cc.Canvas.instance.node, "btnScrollView").active = true;
           CocosHelper.findNode(cc.Canvas.instance.node, "btnScrollView").getComponent(cc.ScrollView).scrollToBottom();
           CocosHelper.findNode(cc.Canvas.instance.node, "btnScrollView").getComponent(cc.ScrollView).scrollToTop(1);
           
           
        }.bind(this);
       CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView").getComponent(MoveIn).actionCallBack = function () {
           this.activateToggle();
           let scrollviewCm =  CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView").getComponent(cc.ScrollView);
           
           scrollviewCm.scrollToTop(1);
       }.bind(this);
   }
    singleToggle(event, customEventData) {
        CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView").opacity = 0;
        let node = event.node;
        this.node.stopAllActions
        node.stopAllActions();
        node.setScale(1);
        node.runAction(cc.sequence(
            cc.scaleTo(0.2, 1.1, 0.9),
            cc.scaleTo(0.2, 0.9, 1.1),
            cc.scaleTo(0.2, 1.05, 0.95),
            cc.scaleTo(0.2, 0.95, 1.05),
            cc.scaleTo(0.1,1,1),
        ))
        if (event.isChecked) { 
           
            this.showIconBg(customEventData);
            this.sleepToggle();
        } 
    }
    showIconBg(customData: string) {
        let map = new Map<string, number>();
        map.set('sprinkle', 15);
        map.set('horn', 15);
        map.set('eye', 15);
        map.set('mouth', 15);
        map.set('hair', 15);
        let icon_board = CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView");
        //icon_board.getComponent(cc.AudioSource).play();
        icon_board.active = true;
        icon_board.opacity = 0;
        icon_board.getComponent(MyMoveIn).doShowAction();
        let scrollviewCm = icon_board.getComponent(cc.ScrollView);
        scrollviewCm.scrollToBottom();

        let iconPaths: string[] = [];
        iconPaths.push("rainbowpoop/image/icon/reset"); 
        for (let index = 0; index < map.get(customData); index++) {
            iconPaths.push("rainbowpoop/image/icon/" + customData + "/"  + index);
        }
        let v = this.conteneNode.children.slice();
        for (let c of v) {
            this.iconsPool.put(c);
        }
        let self = this;

        cc.loader.loadResArray(iconPaths, cc.SpriteFrame, (erro, frames: cc.SpriteFrame[]) => {
            cc.log(erro);
            for (let i = 0; i < frames.length; i++) {
                let node: cc.Node = null;
                if (self.iconsPool.size() > 0) {
                    node = self.iconsPool.get();
                } else {
                    node = cc.instantiate(self.insta);
                }
                
                node.getChildByName("0").getComponent(cc.Sprite).spriteFrame = frames[i];
                cc.loader.setAutoReleaseRecursively(frames[i], true);

                cc.loader.setAutoReleaseRecursively(frames[i], true);

                node.parent = self.conteneNode;
                node.name = customData;
                let item = node.getComponent(IconItem);
                item.index = i;
                item.isRewardLock = i % 2 == 0;
                item.key = item.moduleName = customData +'15';

                if(i == 0){
                    item.key = "lock";
                }

                item.init();
                let event = new cc.Component.EventHandler;
                event.component = "DecorateSlimeRP";
                event.handler = "touch";
                event.target = self.node;
                item.getComponent(cc.Toggle).isChecked = false;
                item.getComponent(cc.Toggle).checkEvents = [event];
            }
           

        });
    
    }
    touch(a: cc.Toggle) {
        cc.log(a);
        cc.find('Canvas/poop/decorate/sprinkleMask').getComponent(SprinkleTouchEvent).destroyTouchEvent();
        
        if (a.isChecked) {
            this.node.getComponent(cc.AudioSource).play();
            let node = a.node;
            let item = node.getComponent(IconItem);
            let index = item.index;
            let pos = a.node.convertToWorldSpaceAR(cc.v2(0, 0));

            let customData = a.node.name;
            console.log(customData);
            console.log(index);

            if (index == 0) {
                if (customData == 'sprinkle') {
                    cc.find('Canvas/poop/decorate/sprinkleMask').removeAllChildren();
                    cc.find('Canvas/poop/decorate/glitter').active = false;
                } 
                else {
                    cc.find(`Canvas/poop/decorate/${customData}`).active = false;
                }
                //消除
                
            } else {
                if (customData == 'sprinkle') {
                    cc.loader.loadRes(`rainbowpoop/prefab/${customData}${index - 1}`, cc.Prefab, function (err, prefab) {
                        cc.loader.setAutoReleaseRecursively(prefab, true);
                        cc.log(err);
                        let node = cc.instantiate(prefab);
                        cc.find('Canvas/poop/decorate/sprinkleMask').getComponent(SprinkleTouchEvent).init(node);
                        cc.find('Canvas/tipClick').active = true;
                    }.bind(this));
                } 
                else {
                    this.node.getChildByName('btn_next').getComponent(cc.Button).interactable = false;
                    cc.loader.loadRes(`rainbowpoop/image/${customData}/${index - 1}`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        cc.log(err);
                        let oriNode = cc.find(`Canvas/poop/decorate/${customData}`);
                        let copyNode = cc.instantiate(oriNode);
                        copyNode.active = true;
                        copyNode.zIndex = 1;
                        copyNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        copyNode.parent = oriNode.parent;
                        copyNode.setScale(0);
                        let position = oriNode.parent.convertToNodeSpaceAR(node.convertToWorldSpace(cc.v2(0, 0)));
                        copyNode.setPosition(position);
                        let action = cc.spawn(cc.sequence(cc.moveTo(0.3, cc.v2(-100, 300)), cc.moveTo(0.5, cc.v2(oriNode.getPosition()))), cc.scaleTo(0.8, oriNode.scale));
                        copyNode.runAction(cc.sequence(
                            action,
                            cc.callFunc(function () {
                                oriNode.active = true;
                                oriNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                                this.node.getChildByName('btn_next').getComponent(cc.Button).interactable = true;
                                cc.find('Canvas/decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                                cc.find('Canvas/decorateParticle').getComponent(cc.AudioSource).play();
                                let pos = this.node.convertToNodeSpaceAR(oriNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                                cc.find('Canvas/decorateParticle').setPosition(pos);
                                copyNode.destroy();
                            }.bind(this)),
                        ));
                    }.bind(this));
                }
            }
        }
    }
    activateToggle() {  
        cc.find('Canvas/btnScrollView/view/content').children.forEach(child => {
            child.getComponent(cc.Toggle).interactable = true;
        })
    }
    
    sleepToggle() {
        cc.find('Canvas/btnScrollView/view/content').children.forEach(child => {
            child.getComponent(cc.Toggle).interactable = false;
        })
    }
    enterNextScene() {
        CocosHelper.captureNodeSize(cc.find('Canvas/poop/decorate'), cc.view.getVisibleSize().width, cc.view.getVisibleSize().height).then((texture: cc.RenderTexture) => {
            DataConfig.getInstance().setTexture(texture);
            TransitionScene.changeScene('playSlimeRP',7);
        })
       
    }
    reset(){
        cc.find('Canvas/btn_reset').getComponent(cc.AudioSource).play();
        cc.director.loadScene('decorateSlimeRP');
    }
   
}
