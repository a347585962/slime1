
import MoveIn from "../common/Script/compoent/MoveInCE";
import TransitionScene from "../common/Script/codebase/TransitionSceneCE";
import DataConfig from "./DataConfigCE";
import RewardManager from "../common/Script/ads/RewardManagerCE";
import showLaoding from "../common/Script/ads/showLaodingCE";

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
export default class HomeController extends cc.Component {
    onLoad() {
        
        RewardManager.getInstance().loadConfig();
        cc.audioEngine.stopMusic();
        
        //动态加载背景音乐
        cc.loader.loadRes("crazyemoji/sound/6", cc.AudioClip, function (err, audio) {
            
            if (err) {

                console.log(err + "");
                
                return;
            }
            cc.audioEngine.playMusic(audio, true);
            cc.audioEngine.setMusicVolume(0.6);

            cc.loader.setAutoReleaseRecursively(audio, false);

        });
       cc.find('Canvas/slime/slime0').getComponent(MoveIn).actionCallBack = function () {
           cc.find('Canvas/slime/slime0').runAction(cc.sequence(
                cc.delayTime(1),
                cc.moveBy(0.5, cc.v2(0, -80)),
                cc.callFunc(function() {
                    cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/slime/slime0').opacity = 0;
                    cc.find('Canvas/slime/slime1').active = true;
                }.bind(this)),
                cc.delayTime(1),
                cc.callFunc(function() {
                    cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/slime/slime1').opacity = 0;
                    cc.find('Canvas/slime/slime2').active = true;
                }.bind(this)),
                cc.delayTime(1),
                cc.callFunc(function() {
                    cc.find('Canvas/slime').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/slime/slime2').opacity = 0;
                    cc.find('Canvas/slime/slime3').active = true;
                    this.node.getChildByName('logo').getComponent(MoveIn).doShowAction();
                }.bind(this))
            ));
        }.bind(this);
        this.node.getChildByName('logo').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('play').getComponent(MoveIn).doShowAction();
            this.node.getChildByName('logo').runAction(cc.repeatForever(cc.sequence(
                cc.moveBy(1, cc.v2(0, -10)),
                cc.moveBy(1,cc.v2(0,10))
            )));
        }.bind(this);
       
        this.node.getChildByName('play').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('btn_moregame').active = true;
            this.node.getChildByName('star_bg2').active = true;
            this.node.getChildByName('play').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('play').runAction(cc.repeatForever(cc.sequence(
                cc.scaleTo(1, 0.9),
                cc.scaleTo(1, 1),
            )));
        }.bind(this);
    }
    btnClick() {
        this.node.getChildByName('play').stopAllActions();
        this.node.getChildByName('play').setScale(1);
        // showLaoding.getInstance().loadingDoneCallback = function () {
        //     showLaoding.getInstance().loadingDoneCallback = null;
        //     TransitionScene.changeScene('dyeSlime', 12);
        // };
        // showLaoding.getInstance().showAds(false);
       
        TransitionScene.changeScene('dyeSlimeCE', 12);
       
    }
    touchUrl(){

        if (CC_JSB && !CC_PREVIEW) {
            jsToCPP.getInstance().openUrl("https://www.crazycampmedia.com/privacys/");
        }

    }
    
}
