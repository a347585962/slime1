import GameData from "./GameData";
import SubgameManager = require("./SubgameManager");
// import { CocosHelper } from "../common/uitls/CocosHelper";
import { CocosHelper } from "../common/uitls/CocosHelper_my";
import TransitionScene from "../common/uitls/TransitionScene_my";
import showLaodingHall from "./showLaodingHall";
import AdsManagerHall from "./AdsManagerHall";
import HttpUtils from "./HttpUtils";
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

    @property
    text: string = 'hello';

    //进入的声音资源
    @property(cc.AudioClip)
    iceMusicAudio: cc.AudioClip = null;

    //进入的声音资源
    @property(cc.AudioClip)
    cottonMusicAudio: cc.AudioClip = null;

    //进入的声音资源
    @property(cc.AudioClip)
    poppornMusicAudio: cc.AudioClip = null;

    //进入的声音资源
    @property(cc.AudioClip)
    cakeMusicAudio: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    isCanEnter:boolean = false;

    checkEnter(){
        let self= this;
        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.01),cc.callFunc(function () {
           
            if(self.isCanEnter){
                bg.stopAllActions();
                self.node.stopAllActions();
                self.enterSub();
            }
            
        }))));

    }

    start () {

        //获取一下网络数据
        // HttpUtils.getInstance().getJsonData();

        let self= this;
        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        let progressBar = CocosHelper.findNode(cc.Canvas.instance.node, "progressBar");
        let BarCm = progressBar.getComponent(cc.ProgressBar);
        let score = (Math.random() + 1) * 0.4;

        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");

        dragon.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3.0),cc.callFunc(function () {
            
            if(dragon.getComponent(dragonBones.ArmatureDisplay))
                dragon.getComponent(dragonBones.ArmatureDisplay).playAnimation("tiao",1);
            
            cc.audioEngine.play(self.iceMusicAudio, false, 1);

        }),cc.delayTime(3.0),cc.callFunc(function () {
            
            if(dragon.getComponent(dragonBones.ArmatureDisplay))
                dragon.getComponent(dragonBones.ArmatureDisplay).playAnimation("eat1",0);
            
            // cc.audioEngine.play(self.iceMusicAudio, false, 1);

        }),cc.delayTime(6.0))));

        self.checkEnter();
        let subName = GameData.getInstance().getSelectGameName();

        console.log(subName + "------subName");
        

        if(cc.sys.isMobile){
            //判断子游戏有没有下载
            if (SubgameManager.isSubgameDownLoad(subName)) {
                //已下载，判断是否需要更新
                SubgameManager.needUpdateSubgame(subName, (success) => {
                    if (success) {
                        //"子游戏需要更新";
                        self.startUpdate();
                    } else {
                        //"子游戏不需要更新";
                        // self.enterSub();
                        
                        let self= this;
                        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
                        let progressBar = CocosHelper.findNode(cc.Canvas.instance.node, "progressBar");
                        let BarCm = progressBar.getComponent(cc.ProgressBar)

                        bg.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.01),cc.callFunc(function () {
                            // console.log(BarCm.progress);
                            
                            BarCm.progress = BarCm.progress + 0.01;
                            if(BarCm.progress >= 1){
                                self.isCanEnter = true;
                            }
                            
                        }))));

                    }
                }, () => {
                    cc.log('出错了');
                    //返回
                    self.touchBack();
                });
            } else {
                //需要下载
                self.startUpdate();
            }
        }

    }

    enterSub(){
        let self= this;
        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        let progressBar = CocosHelper.findNode(cc.Canvas.instance.node, "progressBar");
        let BarCm = progressBar.getComponent(cc.ProgressBar)
        bg.stopAllActions();
        bg.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.01),cc.callFunc(function () {
            // console.log(BarCm.progress);
            
            BarCm.progress = BarCm.progress + 0.01;
            if(BarCm.progress >= 1){
                bg.stopAllActions();
                self.enter();
            }
            
        }))));

    }
    private indexDown = 0;
    startUpdate(){
        let subName = GameData.getInstance().getSelectGameName();

        console.log(subName);
        
        let self= this;
        let progressBar = CocosHelper.findNode(cc.Canvas.instance.node, "progressBar");
        let label = CocosHelper.findNode(cc.Canvas.instance.node, "label");
        let progressBarCm = progressBar.getComponent(cc.ProgressBar);
        //下载子游戏/更新子游戏
        SubgameManager.downloadSubgame(subName, (progress) => {
            if (isNaN(progress)) {
                progress = 0;
            }
            
            progressBarCm.progress = progress * 0.8;
            label.getComponent(cc.Label).string = "资源下载中   " + progress * 100 + "%";
            console.log( "资源下载中   " + progress * 100 + "%");
            
        }, function(success) {
            if (success) {
                label.getComponent(cc.Label).string = "进入游戏" + subName;
                self.isCanEnter = true;
                // self.enter();
            } else {
                cc.log('下载失败');
                self.node.stopAllActions();


                label.getComponent(cc.Label).string = "下载失败";
                TransitionScene.changeScene(subName, "ttt");
            }
            
        });
    }

    enter(){
        cc.audioEngine.stopMusic();

        let dragon = CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
        dragon.stopAllActions();
        dragon.removeComponent(dragonBones.ArmatureDisplay);//.armature().animation.stop();


        let subName = GameData.getInstance().getSelectGameName();
        //把广告回调清空
        console.log("清除回调" + subName);

        if(CC_JSB && !CC_PREVIEW){
            jsToCPP.getInstance().initOnAdsLoaded(null);
            jsToCPP.getInstance().initOnAdsClicked(null);
            jsToCPP.getInstance().initOnAdsExpanded(null);
            jsToCPP.getInstance().initOnAdsCollapsed(null);
            jsToCPP.getInstance().initOnAdsLoadFailed(null);
            jsToCPP.getInstance().initOnAdsRewarded(null);
        }
        
        cc.sys.restartVM();
        // cc.game.restart();
        console.log("进入子游戏" + subName);
        SubgameManager.enterSubgame(subName);
    }


    touchBack(){

        let subName = GameData.getInstance().getSelectGameName();
        TransitionScene.changeScene(subName, "ttt");

    }
    // update (dt) {}
}
