
import EventListener from "../common/Script/codebase/EventListenerGL";
import { DragUtil } from "../common/Script/codebase/SpriteDrag/DragUtilGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";
import PopupComponet from "./PopupComponetGL";
import TipManager from "./TipManagerGL";
import MoveIn from "../common/Script/compoent/MoveInGL";
import DataConfig from "./DataConfigGL";

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
export default class SlapController extends cc.Component {
    photoNode:cc.Node = null;
    filePath:string = null;
    touchNum: number = 0;
    onLoad() {
        this.node.getChildByName('btns').children.forEach(child => {
            if (child.name == 'slap') {
                child.getChildByName('yes').active = true;
            } else {
                child.getChildByName('yes').active = false;
            }
        })
        this.init();
      
    }
    init() {
        this.node.getChildByName('slime').getComponent(MoveIn).actionCallBack = function () {
            cc.log(this.node.getChildByName('slime').position);
            this.registerTouchEvent();
            this.node.getChildByName('tipClick').active = true;
        }.bind(this);
        DataConfig.getInstance().setSlap(false);
        if (!DataConfig.getInstance().getDrag()&&!DataConfig.getInstance().getClick()&&!DataConfig.getInstance().getPlay()&&!DataConfig.getInstance().getSlap()) {
            let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
            btn_next.active = true;
        }
    }
    onTouchStart(event) {
        
        this.node.getChildByName('tipClick').active = false;
        let touches = event.getTouches();
        let handPosition = this.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        let position = cc.find('slime/slime', this.node).convertToNodeSpaceAR(touches[0].getStartLocation());

        let colider = cc.find('slime/slime', this.node).getComponent(cc.PolygonCollider);
        
        if (cc.Intersection.pointInPolygon(position, colider.points)) {
           
          
           
            this.touchNum = this.touchNum + 1;
            this.destroyTouchEvent();
            if (this.touchNum % 3 == 0) {
                TipManager.getInstance().jumpTips();
            }
            this.node.getChildByName('hand').runAction(cc.sequence(
                cc.moveTo(0.5, handPosition),
                cc.callFunc(function () {
                    this.node.getChildByName('slime').runAction(cc.sequence(
                        cc.scaleTo(0.1, 1.05, 0.95),
                        cc.scaleTo(0.1, 0.95, 1.05),
                        cc.scaleTo(0.1, 1.02, 0.98),
                        cc.scaleTo(0.1, 0.98, 1.02),
                        cc.scaleTo(0.1, 1, 1)
                    ))
                    this.node.getChildByName('slime').getComponent(cc.AudioSource).play();
                    let node = cc.instantiate(cc.find('slime/slime/hand_shadow', this.node));
                    node.active = true;
                    node.name = 'shadow';
                    node.parent = this.node.getChildByName('slime').getChildByName('slime');
                    node.setPosition(position);
                    node.runAction(cc.fadeTo(4, 0));
                    // cc.find('heartParticle', this.node).setPosition(handPosition);
                    // cc.find('heartParticle', this.node).getComponent(cc.ParticleSystem).resetSystem();
                }.bind(this)),
                cc.moveTo(0.5, cc.v2(0, -400)),
                cc.callFunc(function () {
                    this.registerTouchEvent();
                }.bind(this))
            ));
        }
    }
    destroyTouchEvent() {
        this.node.getChildByName('slime').off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
    registerTouchEvent() {
        this.node.getChildByName('slime').on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }
    enterNextScence() {
        DataConfig.getInstance().setClick(true);
        DataConfig.getInstance().setDrag(true);
        DataConfig.getInstance().setSlap(true);
        DataConfig.getInstance().setPlay(true);
        TransitionScene.changeScene('packSlimeGL');
    }
}
