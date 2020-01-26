import nice from "./niceFS";
import MyMoveIn from "./MyMoveInFS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import { MyCocosHelper } from "./MyCocosHelperFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import TipManager from "./TipManagerFS";
import showLaoding from "../common/Script/ads/showLaodingFS";

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
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Prefab)
    finish: cc.Prefab = null;
    @property(cc.Prefab)
    par: cc.Prefab = null;
    @property(cc.AudioClip)
    win: cc.AudioClip = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private bowl:cc.Node = null;
    private smallFlower:cc.Node = null;
    private bigFlower:cc.Node = null;
    start () {
        this.bowl = this.node.getChildByName("bigbowl");
        this.smallFlower = this.node.getChildByName("smallFlower");
        this.bigFlower = this.node.getChildByName("bigFlower");
        this.MoveInCallBack();
        this.scheduleOnce(() => {
            this.node.getChildByName("bird2").getComponent(cc.Animation).play();},2);
    }
    MoveInCallBack()
    {
        this.bowl.getComponent(MyMoveIn).actionCallBack = ()=>{
            this.bowl.addChild(cc.instantiate(this.par))
            this.bowl.getChildByName("shadow").active = true;
        }
        this.smallFlower.getComponent(MyMoveIn).actionCallBack = ()=>{
            this.smallFlower.addChild(cc.instantiate(this.par))
            this.smallFlower.runAction(cc.sequence(cc.scaleTo(0.5,0.95),cc.scaleTo(0.5,0.9),cc.delayTime(0.2),cc.moveTo(0.7,320,-130),cc.callFunc(()=>{
                this.smallFlower.getChildByName("shadow").active = true;
                let finger = this.node.getChildByName("finger");
                finger.active = true;
                MyCocosHelper.showHand(finger,this.smallFlower,this.smallFlower,this.bowl);
                this.smallFlower.getComponent(SpriteDrag).enabled = true;
            })));
        }
        this.bigFlower.getComponent(MyMoveIn).actionCallBack = ()=>{
            this.bigFlower.addChild(cc.instantiate(this.par))
            this.bigFlower.runAction(cc.sequence(cc.scaleTo(0.5,0.95),cc.scaleTo(0.5,0.9),cc.delayTime(0.2),cc.moveTo(0.7,320,-130),cc.callFunc(()=>{
                this.bigFlower.getChildByName("shadow").active = true;
                this.bigFlower.getComponent(SpriteDrag).enabled = true;
            })));
        }
    }
    touchCancle(event)
    {
        
        let _node = event.target;
        if(_node.getChildByName("shadow")){
            _node.getChildByName("shadow").active = true;
        }
    }
    touchEnd(event,sp:SpriteDrag)
    {
        let _node = event.target;
        sp.enabled = false;
        let self = this;
        let pos = this.node.convertToNodeSpaceAR(self.bowl.getChildByName("moveNode").convertToWorldSpaceAR(cc.v2(0,0)));
        let move = cc.moveTo(0.7,pos);
        let rot = cc.rotateTo(0.7,-75);
        let fun = cc.callFunc(()=>{
            _node.getChildByName("par").active = true;
            this.node.getComponent(cc.AudioSource).enabled = true;
            cc.find("pic",_node.getChildByName("mask")).runAction(cc.sequence(cc.moveTo(3.5,-180,-60),cc.callFunc(()=>{
                TipManager.getInstance().jumpTips();
                this.node.addChild(cc.instantiate(this.finish));
                _node.getChildByName("par").active = false;
                this.node.getComponent(cc.AudioSource).enabled = false;
                _node.runAction(cc.sequence(cc.spawn(cc.moveBy(1,cc.visibleRect.width,0),cc.rotateTo(0.4,0)),cc.callFunc(()=>{
                    if(_node == self.smallFlower){
                        self.bigFlower.getComponent(MyMoveIn).enabled = true;
                    }else
                    {
                        this.node.getChildByName("heartFull1").active = true;
                        let audio = cc.audioEngine.playEffect(this.win,false);
                        setTimeout(() => {
                            showLaoding.getInstance().showAds("loading_ffm","loading_ffm",false);
                        showLaoding.getInstance().loadingDoneCallback = function () {
                            showLaoding.getInstance().loadingDoneCallback  = null;
                            console.log("广告关闭");

                            TransitionScene.changeScene("playSlimeFS",7);
                             //cc.director.loadScene(data);
                        }
                            
                        }, 2000);
                    }
                })))
            })));
            if(_node == self.smallFlower){
                self.bowl.getChildByName("flower11").runAction(cc.fadeIn(4));
            }else
            {
                self.bowl.getChildByName("flower4").runAction(cc.fadeIn(4));
            }
            
        })
        _node.runAction(cc.sequence(cc.spawn(move,rot),fun));
    }
    touchDown(event)
    {
        let finger = this.node.getChildByName("finger");
        finger.stopAllActions();
        finger.active = false;
        let _node = event.target;
        if(_node.getChildByName("shadow")){
            _node.getChildByName("shadow").active = false;
        }
    }

    // update (dt) {}
}
