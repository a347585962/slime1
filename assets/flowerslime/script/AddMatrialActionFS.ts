import nice from "./niceFS";
import MyMoveIn from "./MyMoveInFS";
import MyMixComponent from "./MyMixComponentFS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import MyBlenderMix from "./MyBlenderMixFS";
import AddMatrial from "./AddMatrialFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import TipManager from "./TipManagerFS";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class AddMatrialAction extends cc.Component {

    @property(cc.AudioClip)
    addGlue: cc.AudioClip = null;
    @property(cc.AudioClip)
    jump: cc.AudioClip = null;
    @property(cc.Prefab)
    par: cc.Prefab = null;
    @property(cc.Prefab)
    finish: cc.Prefab = null;
    @property(cc.AudioClip)
    ji: cc.AudioClip = null;
    @property(cc.AudioClip)
    win: cc.AudioClip = null;
    @property(cc.AudioClip)
    addColor: cc.AudioClip = null;
    @property(cc.SpriteFrame)
    smallFoam: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    colorPic: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    water: cc.SpriteFrame = null;


    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private mixRound = 0;
    private curNode:cc.Node = null;
    start() {
    }
    GlueInBowl() {
        let glue = this.node.getChildByName("glue");
        let p = cc.find("pos", this.node.getChildByName("bowl")).convertToWorldSpaceAR(cc.v2(0, 0));
        let pos = this.node.convertToNodeSpaceAR(p);

        let move = cc.moveTo(0.7, pos.x,pos.y + 100);
        let rot = cc.rotateTo(0.7, -115);
        let fun = cc.callFunc(() => {
            this.node.getComponent(AddMatrial).showHelp(glue,glue,true);
            glue.on(cc.Node.EventType.TOUCH_START, this.GlueTouchOn, this);
            glue.on(cc.Node.EventType.TOUCH_END, this.GlueTouchUp, this);
            glue.on(cc.Node.EventType.TOUCH_CANCEL, this.GlueTouchUp, this);
        })

        glue.runAction(cc.sequence(cc.spawn(move, rot), fun));
    }
    private isStop = false;
    private glueSound = -1;
    GlueTouchOn() {
        this.node.getComponent(AddMatrial).StopFinger();
        let glue = cc.find("Canvas/bowl/mixNode/bowl_glue")
        if (this.isStop) {
            glue.resumeAllActions();
        } else {
            glue.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(5, 1), cc.callFunc(() => {
                this.GlueOk();
            })));
        }
        cc.find("Canvas/glue/par").active = true;
        cc.find("Canvas/glue/glue0").active = false;
        this.glueSound = cc.audioEngine.playEffect(this.addGlue, true);
    }
    GlueTouchUp() {
        let glue = cc.find("Canvas/bowl/mixNode/bowl_glue")
        glue.pauseAllActions();
        this.isStop = true;
        cc.find("Canvas/glue/par").active = false;
        cc.find("Canvas/glue/glue0").active = true;
        cc.audioEngine.stopEffect(this.glueSound);
    }
    GlueOk() {
        let glue = cc.find("Canvas/bowl/mixNode/bowl_glue")
        glue.stopAllActions();
        cc.find("Canvas/glue/par").active = false;
        cc.find("Canvas/glue/glue0").active = true;
        cc.audioEngine.stopEffect(this.glueSound);
        let glue1 = this.node.getChildByName("glue")
        glue1.off(cc.Node.EventType.TOUCH_START, this.GlueTouchOn, this);
        glue1.off(cc.Node.EventType.TOUCH_END, this.GlueTouchUp, this);
        glue1.off(cc.Node.EventType.TOUCH_CANCEL, this.GlueTouchUp, this);
        glue.parent.addChild(cc.instantiate(this.par));
        glue1.runAction(cc.sequence(cc.spawn(cc.moveBy(1, cc.visibleRect.width, 0), cc.rotateTo(0.6, 0)),cc.callFunc(()=>{
            this.node.getChildByName("foam").getComponent(MyMoveIn).enabled = true;
            this.node.getChildByName("foam").getComponent(MyMoveIn).actionCallBack = ()=>{
                this.node.getChildByName("foam").getComponent(SpriteDrag).enabled = true;
            }
        })));
        TipManager.getInstance().jumpTips();
    }
    FoamInBowl() {
        let foam = this.node.getChildByName("foam");
        let p = cc.find("pos", this.node.getChildByName("bowl")).convertToWorldSpaceAR(cc.v2(0, 0));
        let pos = this.node.convertToNodeSpaceAR(p);

        let move = cc.moveTo(0.7, pos);
        let rot = cc.rotateTo(0.7, -55);
        let fun = cc.callFunc(() => {
            this.node.getComponent(AddMatrial).showHelp(foam,foam,true);
            foam.on(cc.Node.EventType.TOUCH_START, this.FoamTouchOn, this);
            foam.on(cc.Node.EventType.TOUCH_END, this.FoamTouchUp, this);
            foam.on(cc.Node.EventType.TOUCH_CANCEL, this.FoamTouchUp, this);
        })

        foam.runAction(cc.sequence(cc.spawn(move, rot), fun));
    }
    FoamTouchOn() {
        this.node.getComponent(AddMatrial).StopFinger();
        let foam = this.node.getChildByName("foam");
        let down = foam.getChildByName("foam0");
        let move = cc.moveBy(0.35, 0, -20);
        let fun = cc.callFunc(() => {
            this.createFoam();
        })
        let audio = cc.audioEngine.playEffect(this.ji, false);
        down.runAction(cc.sequence(move, fun));
    }
    FoamTouchUp() {
        let foam = this.node.getChildByName("foam");
        let down = foam.getChildByName("foam0");
        foam.off(cc.Node.EventType.TOUCH_START, this.FoamTouchOn, this);
        foam.off(cc.Node.EventType.TOUCH_END, this.FoamTouchUp, this);
        foam.off(cc.Node.EventType.TOUCH_CANCEL, this.FoamTouchUp, this);
        down.stopAllActions();
        down.runAction(cc.sequence(
            cc.moveTo(0.1, 0, 155),
            cc.callFunc(() => {
                foam.on(cc.Node.EventType.TOUCH_START, this.FoamTouchOn, this);
                foam.on(cc.Node.EventType.TOUCH_END, this.FoamTouchUp, this);
                foam.on(cc.Node.EventType.TOUCH_CANCEL, this.FoamTouchUp, this);
            })
        ));

    }
    private foamRound = 0;
    createFoam() {
        let foam = this.node.getChildByName("foam");
        let down = foam.getChildByName("foam0");
        let InNode = cc.find("Canvas/bowl/mixNode");
        let _node = new cc.Node();
        _node.scale = 0;
        _node.addComponent(cc.Sprite).spriteFrame = this.smallFoam;
        _node.setPosition(InNode.convertToNodeSpaceAR(cc.find("Canvas/foam/createPos").convertToWorldSpaceAR(cc.v2(0, 0))));
        InNode.addChild(_node);
        let move = cc.moveTo(0.8, -50 + Math.random() * 100, -50 + Math.random() * 80);
        let scale = cc.scaleTo(0.4, 1);
        _node.runAction(cc.sequence(cc.spawn(move, scale), cc.callFunc(() => {
            _node.addChild(cc.instantiate(this.par));
        })));
        this.foamRound += 1;
        if (this.foamRound >= 4) {
            TipManager.getInstance().jumpTips();
            down.runAction(cc.sequence(
                cc.moveTo(0.25, 0, 155),
                cc.callFunc(() => {
                    foam.off(cc.Node.EventType.TOUCH_START, this.FoamTouchOn, this);
                    foam.off(cc.Node.EventType.TOUCH_END, this.FoamTouchUp, this);
                    foam.off(cc.Node.EventType.TOUCH_CANCEL, this.FoamTouchUp, this);
                })
            ));

            foam.runAction(cc.sequence(cc.delayTime(1.2), cc.spawn(cc.moveBy(1, cc.visibleRect.width, 0), cc.rotateTo(0.6, 0)), cc.callFunc(() => {
                this.node.getChildByName("spoon").getComponent(MyMoveIn).enabled = true;
                this.node.getChildByName("spoon").getComponent(MyMoveIn).actionCallBack = ()=>{
                    this.node.getChildByName("spoon").getComponent(SpriteDrag).enabled = true;
                    this.node.getComponent(AddMatrial).showHelp(this.node.getChildByName("spoon"),this.node.getChildByName("bowl"),false);
                }
                
            })));
        }
    }
    ColorInBowl() {
        let color = this.node.getChildByName("color");
        let p = cc.find("pos", this.node.getChildByName("bowl")).convertToWorldSpaceAR(cc.v2(0, 0));
        let pos = this.node.convertToNodeSpaceAR(p);

        let move = cc.moveTo(0.7, pos.x - 50, pos.y + 90);
        let rot = cc.rotateTo(0.7, -90);
        let fun = cc.callFunc(() => {
            color.getChildByName("foodcolor1").opacity = 0;
            color.getChildByName("foodcolor2").opacity = 255;
            color.getChildByName("foodcolor").runAction(cc.fadeOut(0.5));
            color.getChildByName("foodcolor_fall").runAction(cc.fadeIn(0.5));
            color.getChildByName("par").active = true;
            let audio = cc.audioEngine.playEffect(this.addColor, true);
            let _node = new cc.Node();
           
            _node.opacity = 0;
            _node.addComponent(cc.Sprite).spriteFrame = this.colorPic;
            cc.find("Canvas/bowl/mixNode").addChild(_node);
            this.curNode = _node;
            _node.runAction(cc.sequence(cc.fadeIn(3),
                cc.callFunc(() => {
                    cc.audioEngine.stopEffect(audio);
                    color.getChildByName("par").active = false;
                    color.runAction(cc.sequence(cc.delayTime(0.7), cc.spawn(cc.moveBy(1, cc.visibleRect.width, 0), cc.rotateTo(0.6, 0)), cc.callFunc(() => {
                        this.node.getChildByName("spoon").getComponent(MyMoveIn).doShowAction();
                        this.node.getChildByName("spoon").getComponent(MyMoveIn).actionCallBack = () => {
                            this.node.getChildByName("spoon").getComponent(SpriteDrag).enabled = true;
                        }
                    })));
                })));

        })

        color.runAction(cc.sequence(cc.spawn(move, rot), fun));
    }
    WaterInBowl()
    {
        let water = this.node.getChildByName("water");
        let p = cc.find("pos", this.node.getChildByName("bowl")).convertToWorldSpaceAR(cc.v2(0, 0));
        let pos = this.node.convertToNodeSpaceAR(p);

        let move = cc.moveTo(0.7, pos);
        let rot = cc.rotateTo(0.7, -90);
        let fun = cc.callFunc(() => {
            this.node.getComponent(AddMatrial).showHelp(water,water,true);
            water.on(cc.Node.EventType.TOUCH_START, this.WaterTouchOn, this);
            water.on(cc.Node.EventType.TOUCH_END, this.WaterTouchUp, this);
            water.on(cc.Node.EventType.TOUCH_CANCEL, this.WaterTouchUp, this);
        })

        water.runAction(cc.sequence(cc.spawn(move, rot), fun));
    }
    private isStop1 = false;
    WaterTouchOn() {
        this.node.getComponent(AddMatrial).StopFinger();
        let _node = cc.find("Canvas/bowl/mixNode/bowl_water")
        cc.find("Canvas/water/par").active = true;
        cc.find("Canvas/water/activator2").opacity = 255;
        cc.find("Canvas/water/activator1").opacity = 0;
        cc.find("Canvas/water/mask/activator_fall").opacity = 255;
        cc.find("Canvas/water/activator").opacity = 0;
        if (this.isStop1) {
            _node.resumeAllActions();
            cc.find("Canvas/water/mask/activator_fall").resumeAllActions();
        } else {
            _node.scale = 0;
            _node.opacity = 255;
            _node.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(3, 0.4), cc.callFunc(() => {
                this.WaterOk();
            })));
            cc.find("Canvas/water/mask/activator_fall").runAction(cc.moveBy(4,0,40));
        }
        
        this.glueSound = cc.audioEngine.playEffect(this.addColor, true);
    }
    WaterTouchUp() {
        let _node = cc.find("Canvas/bowl/mixNode/bowl_water")
        _node.pauseAllActions();
        cc.find("Canvas/water/mask/activator_fall").pauseAllActions();
        this.isStop1 = true;
        cc.find("Canvas/water/par").active = false;
        cc.find("Canvas/water/activator2").opacity = 0;
        cc.find("Canvas/water/activator1").opacity = 255;
        
        cc.audioEngine.stopEffect(this.glueSound);
    }
    WaterOk()
    {
        let water = cc.find("Canvas/bowl/mixNode/bowl_water")
        this.curNode = water;
        water.stopAllActions();
        cc.find("Canvas/water/mask/activator_fall").stopAllActions();
        cc.find("Canvas/water/par").active = false;
        cc.find("Canvas/water/activator2").opacity = 0;
        cc.find("Canvas/water/activator1").opacity = 255;
        cc.audioEngine.stopEffect(this.glueSound);
        let glue1 = this.node.getChildByName("glue")
        let water1 = this.node.getChildByName("water");
        water1.off(cc.Node.EventType.TOUCH_START, this.WaterTouchOn, this);
        water1.off(cc.Node.EventType.TOUCH_END, this.WaterTouchUp, this);
        water1.off(cc.Node.EventType.TOUCH_CANCEL, this.WaterTouchUp, this);
        water.parent.addChild(cc.instantiate(this.par));
        water1.runAction(cc.sequence(cc.spawn(cc.moveBy(1, cc.visibleRect.width, 0), cc.rotateTo(0.6, 0)),cc.callFunc(()=>{
            water1.getChildByName("shadow").active = true;
            cc.find("Canvas/water/mask/activator_fall").opacity = 0;
            cc.find("Canvas/water/activator").opacity = 255;
            cc.find("Canvas/water/activator").scaleY -= 0.2;
            this.node.getChildByName("spoon").getComponent(MyMoveIn).doShowAction();
                        this.node.getChildByName("spoon").getComponent(MyMoveIn).actionCallBack = () => {
                            this.node.getChildByName("spoon").getComponent(SpriteDrag).enabled = true;
                        }
        })));
        TipManager.getInstance().jumpTips();
        this.isStop1 = false;
    }

    update(dt) {
        let mixNode = cc.find("Canvas/bowl/mixNode");
        let com = mixNode.getComponent(MyMixComponent);
        if (com.mixEnable) {
            this.node.getComponent(AddMatrial).StopFinger();
            if(this.curNode != null && this.curNode.opacity != 0){
                this.curNode.opacity -= 3;
            }
            let spoon = this.node.getChildByName("spoon");
            if(com.stopEnable){
                TipManager.getInstance().jumpTips();
                mixNode.addChild(cc.instantiate(this.par));
                com.stopEnable = false;
                spoon.runAction(cc.moveBy(0.7,cc.visibleRect.width,0));
                this.node.getChildByName("bowl").runAction(cc.sequence(cc.delayTime(0.5),
                cc.callFunc(()=>{let audio = cc.audioEngine.playEffect(this.jump,false)}),cc.spawn(cc.jumpBy(0.5,0,0,120,1),cc.scaleTo(0.5,1)),cc.callFunc(()=>{
                    this.node.getChildByName("star5").active = true;
                    let audio = cc.audioEngine.playEffect(this.win,false);
                    setTimeout(() => {
                        TransitionScene.changeScene("addMatrial2FS",7);
                    }, 2000);
                })));
            }
            let sp = spoon.getComponent(SpriteDrag);
            let bl = spoon.getComponent(MyBlenderMix);
            if (com._count == 3 && this.mixRound == 0) {
                mixNode.addChild(cc.instantiate(this.par));
                TipManager.getInstance().jumpTips();
                sp.enabled = false;
                com.stopMix();
                spoon.getComponent(MyBlenderMix).touchUpBlender();
                let move = cc.moveBy(0.7, cc.visibleRect.width, 0);
                let fun = cc.callFunc(() => {
                    let color = this.node.getChildByName("color");
                    color.getComponent(MyMoveIn).enabled = true;
                    color.getComponent(MyMoveIn).actionCallBack = () => {
                        color.getComponent(SpriteDrag).enabled = true;
                    }
                })
                this.node.getChildByName("spoon").runAction(cc.sequence(move, fun));
                this.mixRound += 1;
            }else if((com._count == 6&&this.mixRound == 1)||(com._count == 8&&this.mixRound == 2)||(com._count == 10&&this.mixRound == 3)){
                mixNode.addChild(cc.instantiate(this.par));
                TipManager.getInstance().jumpTips();
                sp.enabled = false;
                com.stopMix();
                spoon.getComponent(MyBlenderMix).touchUpBlender();
                let move = cc.moveBy(0.7, cc.visibleRect.width, 0);
                let fun = cc.callFunc(() => {
                    let water = this.node.getChildByName("water");
                    water.getComponent(MyMoveIn).doShowAction();
                    water.getComponent(MyMoveIn).actionCallBack = () => {
                        water.getComponent(SpriteDrag).enabled = true;
                    }
                })
                this.node.getChildByName("spoon").runAction(cc.sequence(move, fun));
                this.mixRound += 1;
            }
            

        }
    }
}
