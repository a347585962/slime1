import HttpUtils from "./HttpUtils";
import GameData from "./GameData";
import { CocosHelper } from "../common/uitls/CocosHelper_my";
import TransitionScene from "../common/uitls/TransitionScene_my";
import showLaodingHall from "./showLaodingHall";
import AdsManagerHall from "./AdsManagerHall";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    //进入的声音资源
    @property(cc.AudioClip)
    playMusicAudio: cc.AudioClip = null;

    onLoad () {
        
        console.log("Loading onLoad");
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.playMusicAudio,true);

    }

    start () {

        let self = this;
        
        AdsManagerHall.getInstance().onAdsLoaded = null;
        AdsManagerHall.getInstance().onAdsLoadFailed = null;
        AdsManagerHall.getInstance().onAdsClicked = null;
        AdsManagerHall.getInstance().onAdsExpanded = null;
        AdsManagerHall.getInstance().onAdsCollapsed = null;
        AdsManagerHall.getInstance().onAdsRewarded = null;
        //停止所有音效
        // cc.audioEngine.stopAllEffects();

        //从游戏中回到大厅 显示全屏
        let key = "fromHall";
        let isLock =  cc.sys.localStorage.getItem(key);
        if(isLock == 10){
            console.log("大厅 显示全屏");
            console.log(cc.sys.localStorage.getItem(key));
            //显示全屏
            cc.sys.localStorage.setItem(key, 11);

            console.log(cc.sys.localStorage.getItem(key));
            showLaodingHall.getInstance().showAds(false);
        }
        
        //对boolean没有支持 用0代表false 1代表true
        cc.sys.localStorage.setItem(key, isLock);

        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        let progressBar = CocosHelper.findNode(cc.Canvas.instance.node, "progressBar");
        
        progressBar.active = false;

        bg.runAction(cc.sequence(cc.delayTime(5),cc.callFunc(function () {
            TransitionScene.changeScene("ChooseScene", "temp");
        })));

    }

}
