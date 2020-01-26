import MoveIn from "../common/Script/MoveInCB";
import EventListener from "../common/Script/codebase/EventListenerCB";
import { DragUtil } from "../common/Script/codebase/SpriteDrag/DragUtilCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";
import DataConfig from "./DataConfigCB";
import showLaoding from "../common/Script/showLaodingCB";

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
export default class ClickController extends cc.Component {
    touchNum: number = 0;
    onLoad() {
        this.init()
    }
    init() {
        let color = DataConfig.getInstance().getColors();
        let foam = DataConfig.getInstance().getFoam();
        if (!color) {
            color = 'blue';
        }
        if (!foam) {
            foam = 'foam9';
        }
        cc.loader.loadRes(`cakebatter/image/shadow/slime_${color}`, cc.SpriteFrame, function (err, spriteFrame) {
            if(err){
                cc.log(err);
                return;
            }
            cc.find('Canvas/pull/pull').getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            cc.loader.loadRes(`cakebatter/image/shadow/motion3_${color}_`, cc.SpriteFrame, function (err, spriteFrame) {
                if(err){
                    cc.log(err);
                    return;
                }
                cc.find('Canvas/pull/hand_shadow').getComponent(cc.Sprite).spriteFrame = spriteFrame;
                cc.loader.setAutoReleaseRecursively(spriteFrame, true);
            }.bind(this))
        }.bind(this));
        cc.loader.loadRes(`cakebatter/image/foam1/${foam}`, cc.SpriteFrame, function (err, spriteFrame) {
            if(err){
                cc.log(err);
                return;
            }
            
            cc.find('pull/foam', this.node).getComponent(cc.Sprite).spriteFrame = spriteFrame;
            cc.loader.setAutoReleaseRecursively(spriteFrame, true);
        }.bind(this))

        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);
        // let btn_back = CocosHelper.findNode(cc.Canvas.instance.node, "btn_back");
        // CocosHelper.showBackOut(btn_back, CocosHelper.ShowDirection.show_from_left);
        
        this.node.getChildByName('pull').getComponent(MoveIn).actionCallBack = function () {
            this.registerTouchEvent();
            this.node.getChildByName('tipClick').active = true;
        }.bind(this)
    }
    onTouchStart(event) {
        if (this.touchNum == 5) {
            this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
            this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
            btn_next.active = true;
            btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
        }
       
        this.node.getChildByName('tipClick').active = false;
        let touches = event.getTouches();
        let handPosition = this.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        let position = this.node.getChildByName('pull').convertToNodeSpaceAR(touches[0].getStartLocation());

        let colider = this.node.getChildByName('pull').getComponent(cc.PolygonCollider);
        
        if (cc.Intersection.pointInPolygon(position,colider.points)) {
          
            this.node.getChildByName('pull').getComponent(cc.AudioSource).play();
            this.touchNum = this.touchNum + 1;
            this.destroyTouchEvent();
            this.node.getChildByName('hand').runAction(cc.sequence(
                cc.moveTo(0.5, handPosition),
                cc.callFunc(function () {
                    let num = Math.random() * 3;
                    let node = cc.instantiate(cc.find('pull/hand_shadow', this.node));
                    node.active = true;
                    node.parent = this.node.getChildByName('pull');
                    node.setPosition(position);
                    cc.find('heartParticle', this.node).setPosition(handPosition);
                    cc.find('heartParticle', this.node).getComponent(cc.ParticleSystem).resetSystem();
                    if (num > 1) {
                        let node1 = cc.instantiate(node);
                        node1.parent = this.node.getChildByName('pull');
                        node1.setPosition(cc.v2(position.x - 50, position.y + 10));
                        let nodePos = new cc.Vec2();
                        nodePos = node1.getPosition();
                        if (cc.Intersection.pointInPolygon(nodePos,colider.points)) {
                            node1.active = true;
                        } else {
                            node1.active = false;
                        }
                        if (num > 2) {
                            let node2 = cc.instantiate(node);
                            node2.parent = this.node.getChildByName('pull')
                            node2.setPosition(cc.v2(position.x - 80, position.y + 30)); 
                            let nodePos = new cc.Vec2();
                            nodePos = node2.getPosition();
                            if (cc.Intersection.pointInPolygon(nodePos,colider.points)) {
                                node2.active = true;
                            } else {
                                node2.active = false;
                            }
                        }
                    }  
                }.bind(this)),
                cc.moveTo(0.5, cc.v2(-20, 200)),
                cc.callFunc(function () {
                    this.registerTouchEvent();
                }.bind(this))
            ));
        }
    }
    destroyTouchEvent() {
        this.node.getChildByName('pull').off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
    registerTouchEvent() {
        this.node.getChildByName('pull').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
    touchNextBtn() {
        showLaoding.getInstance().loadingDoneCallback=function(){
            TransitionScene.changeScene('playSlimeCB');
        }
        //显示全屏广告
        showLaoding.getInstance().showAds(false);
       
    }
    touchBackBtn() {
        TransitionScene.changeScene('pullSlimeCB');
    }
}
