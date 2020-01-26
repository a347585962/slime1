
import MoveIn from "../common/Script/compoent/MoveInRP";
import TransitionScene from "../common/Script/codebase/TransitionSceneRP";
import DataConfig from "./DataConfigRP";
import RewardManager from "../common/Script/ads/RewardManagerRP";
import showLaoding from "../common/Script/ads/showLaodingRP";

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
        if (CC_JSB && !CC_PREVIEW) {
            jsToCPP.getInstance().showBanner();
        }
        RewardManager.getInstance().loadConfig();
        cc.audioEngine.stopMusic();
      
        //动态加载背景音乐
        cc.loader.loadRes("rainbowpoop/sound/6", cc.AudioClip, function (err, audio) {
            
            if (err) {

                console.log(err + "");
                
                return;
            }
            cc.audioEngine.playMusic(audio, true);

            cc.loader.setAutoReleaseRecursively(audio, false);

        }); 
        this.node.getChildByName('logo').runAction(cc.sequence(
            cc.spawn(cc.scaleTo(1, 0.9),cc.rotateBy(1,720)),
            cc.callFunc(function () {
                this.node.getChildByName('logo').runAction(cc.repeatForever(cc.sequence(
                    cc.moveBy(1,cc.v2(0,30)),
                    cc.moveBy(1,cc.v2(0,-30)),
                )));
            }.bind(this))
        ));
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
        // showLaoding.getInstance().loadingDoneCallback = function () {
        //     showLaoding.getInstance().loadingDoneCallback = null;
            TransitionScene.changeScene('makeSlimeRP',7);
        // }.bind(this);
        // showLaoding.getInstance().showAds('prefab/loadingRP','prefab/loading1',false);
      
       
       
    }
    touchUrl(){

        if (CC_JSB&& !CC_PREVIEW) {
            jsToCPP.getInstance().openUrl("https://www.crazycampmedia.com/privacys/");
        }

    }
    
}
