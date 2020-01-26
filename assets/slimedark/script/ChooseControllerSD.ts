import MoveIn from "../common/Script/MoveInSD";
import DataConfig from "./DataConfigSD";
import TransitionScene from "../common/Script/codebase/TransitionSceneSD";
import showLaoding from "../common/Script/showLaodingSD";

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
export default class ChooseController extends cc.Component {
    onLoad() {
        let count = DataConfig.getInstance().getCount();
        cc.log(count);
        if (count == 1) {
            cc.find('Canvas/gift/single').active = true;
            cc.find('Canvas/gift/rainbow').active = false;
            cc.find('Canvas/single/green').getComponent(MoveIn).actionCallBack = function () {
                cc.find('Canvas/single/green').getComponent(cc.Button).interactable = true;
                cc.find('Canvas/single/pink').getComponent(cc.Button).interactable = true;
                cc.find('Canvas/single/purple').getComponent(cc.Button).interactable = true;
            }.bind(this);
            
        } else if(count == 2) {
            cc.find('Canvas/gift/single').active = false;
            cc.find('Canvas/gift/rainbow').active = true;
            cc.find('Canvas/rainbow/green').getComponent(MoveIn).actionCallBack = function () {
                cc.find('Canvas/tip1').getComponent(MoveIn).doShowAction();
                this.node.runAction(cc.sequence(
                    cc.delayTime(4),
                    cc.callFunc(function () {
                        DataConfig.getInstance().setColor('rainbow');
                        DataConfig.getInstance().setIsStart(false);
                        showLaoding.getInstance().loadingDoneCallback=function(){
                            showLaoding.getInstance().loadingDoneCallback = null;
                            TransitionScene.changeScene('makeWaterSD');
                        }
                        //显示全屏广告
                        showLaoding.getInstance().showAds(false);
                       
                    }.bind(this))
                ))
            }.bind(this);
        }
        this.node.getChildByName('gift').getComponent(MoveIn).actionCallBack = function () {
            cc.find('Canvas/light').active = true;
            cc.find('Canvas/gift').getComponent(cc.AudioSource).play();
            cc.find('Canvas/tip2').getComponent(MoveIn).doShowAction();
            this.node.getChildByName('gift').runAction(cc.sequence(
                cc.moveBy(0.1, cc.v2(0, 50)),
                cc.moveBy(0.2, cc.v2(0, -50)),
                cc.moveBy(0.1, cc.v2(0, 40)),
                cc.moveBy(0.2, cc.v2(0, -40)),
                cc.moveBy(0.1, cc.v2(0, 30)),
                cc.moveBy(0.2, cc.v2(0, -30)),
                cc.moveBy(0.1, cc.v2(0, 10)),
                cc.moveBy(0.2, cc.v2(0, -10)),
                cc.callFunc(function () {
                    cc.find('Canvas/tipClick').active = true;
                    this.node.getChildByName('gift').getComponent(cc.Button).interactable = true;
                }.bind(this))
            ))
        }.bind(this); 
       
        
    }
    giftClick() {
        cc.find('Canvas/tipClick').active = false;
        cc.find('Canvas/tip2').active = false;
        let count = DataConfig.getInstance().getCount();
        if (count == 1) {
          
            this.node.getChildByName('gift').runAction(cc.sequence(
                cc.callFunc(function () {
                    cc.find('Canvas/gift/gift0').getComponent(cc.Animation).play('openGift');
                }.bind(this)),
                cc.delayTime(1), cc.callFunc(function () {
                    cc.find('Canvas/gift').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/gift/gift0').active = false;
                    cc.find('Canvas/gift/gift0_').active = false;
                    cc.find('Canvas/gift/single').zIndex = 1;
                    cc.find('Canvas/gift/single').runAction(cc.sequence(
                        cc.sequence(cc.moveBy(0.5, cc.v2(0, 150)), cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, cc.v2(0, 50)))),
                        cc.delayTime(2),
                        cc.scaleTo(1,0),
                        cc.callFunc(function () {
                            cc.find('Canvas/light').active = false;
                            cc.find('Canvas/gift').active = false;
                            cc.find('Canvas/bgMask').runAction(cc.sequence(
                                cc.fadeTo(1, 0),
                                cc.callFunc(function () {
                                    cc.find('Canvas/single').active = true;
                                }.bind(this))
                            ))
                        }.bind(this)),
                        
                    ))
                }.bind(this))
            ))
            
        } else if(count == 2) {
           
            this.node.getChildByName('gift').runAction(cc.sequence(
                cc.callFunc(function () {
                    cc.find('Canvas/gift/gift0').getComponent(cc.Animation).play('openGift');
                }.bind(this)),
                cc.delayTime(1), cc.callFunc(function () {
                    cc.find('Canvas/gift').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/gift/gift0').active = false;
                    cc.find('Canvas/gift/gift0_').active = false;
                    cc.find('Canvas/gift/rainbow').zIndex = 1;
                    cc.find('Canvas/gift/rainbow').runAction(cc.sequence(
                        cc.sequence(cc.moveBy(0.5, cc.v2(0, 150)), cc.spawn(cc.scaleTo(0.5, 1), cc.moveTo(0.5, cc.v2(0, 50)))),
                        cc.delayTime(2),
                        cc.scaleTo(1,0),
                        cc.callFunc(function () {
                            cc.find('Canvas/light').active = false;
                            cc.find('Canvas/gift').active = false;
                            cc.find('Canvas/bgMask').runAction(cc.sequence(
                                cc.fadeTo(1, 0),
                                cc.callFunc(function () {
                                    cc.find('Canvas/rainbow').active = true;

                                }.bind(this))
                            ))
                        }.bind(this)),
                        
                    ))
                }.bind(this))
            ))
            
        }
        
    }
    colorChoose(event) {
        this.node.getChildByName('tipClick').active = false;
        let name = event.target.name;
        event.target.parent.getComponent(cc.AudioSource).play();
        DataConfig.getInstance().setColor(name);
        DataConfig.getInstance().setIsStart(false);
        showLaoding.getInstance().loadingDoneCallback=function(){
            TransitionScene.changeScene('makeWaterSD');
        }
        //显示全屏广告
        showLaoding.getInstance().showAds(false);
        
    }
}
