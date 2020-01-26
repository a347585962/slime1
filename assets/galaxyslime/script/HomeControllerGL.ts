
import MoveIn from "../common/Script/compoent/MoveInGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import DataConfig from "./DataConfigGL";
import RewardManager from "../common/Script/ads/RewardManagerGL";
import showLaoding from "../common/Script/ads/showLaodingGL";

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
        cc.loader.loadRes("galaxyslime/sound/6", cc.AudioClip, function (err, audio) {
            
            if (err) {

                console.log(err + "");
                
                return;
            }
            cc.audioEngine.playMusic(audio, true);

            cc.loader.setAutoReleaseRecursively(audio, false);

        });
        this.node.getChildByName('girl').setPosition(cc.v2(400, -720));
        this.node.getChildByName('girl').runAction(cc.sequence(
            cc.moveTo(2, cc.v2(225, -70)),
            cc.callFunc(function () {
                this.node.getChildByName('girl').runAction(cc.repeatForever(
                    cc.sequence(
                        cc.moveBy(1, cc.v2(-10, 10)),
                        cc.moveBy(1,cc.v2(10,-10))
                    )
                ))
            }.bind(this))
            
        ))
        this.node.getChildByName('logo').getComponent(MoveIn).actionCallBack = function () {
            //this.node.getChildByName('logo').getComponent(cc.AudioSource).play();
            this.node.getChildByName('logo').runAction(cc.repeatForever(cc.sequence(
                cc.scaleTo(1, 1.1),
                cc.scaleTo(1, 1)
            )));
        }.bind(this);
       
        this.node.getChildByName('play_btn').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('btn_moregame').active = true;
         
            this.node.getChildByName('play_btn').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('play_btn').runAction(cc.repeatForever(cc.sequence(
                cc.scaleTo(1, 0.9),
                cc.scaleTo(1, 1),
            )));
        }.bind(this);
        
    }
    btnClick() {
        this.node.getChildByName('play_btn').stopAllActions();
        this.node.getChildByName('play_btn').setScale(1);
        showLaoding.getInstance().loadingDoneCallback = function () {
            showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('makeSlimeGL',12);
        }.bind(this);
        showLaoding.getInstance().showAds(false);
        
    }
    touchUrl(){

        if (CC_JSB&& !CC_PREVIEW) {
            jsToCPP.getInstance().openUrl("https://www.crazycampmedia.com/privacys/");
        }

    }
    
}
