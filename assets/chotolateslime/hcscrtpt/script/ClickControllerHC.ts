import MoveIn from "../common/Script/MoveInHC";
import EventListener from "../common/Script/codebase/EventListenerHC";
import { DragUtil } from "../common/Script/codebase/SpriteDrag/DragUtilHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";

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
        if (this.touchNum == 4) {
            let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
            btn_next.active = true;
            btn_next.runAction(cc.sequence(cc.scaleTo(0.2, 1.1), cc.scaleTo(0.2, 1)));
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
        TransitionScene.changeScene('decorateCupHC');
    }
    touchBackBtn() {
        TransitionScene.changeScene('makeHC');
    }
}
