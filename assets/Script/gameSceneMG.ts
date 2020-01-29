// import { CocosHelper } from "../common/uitls/CocosHelper";
// import TransitionScene from "../common/uitls/TransitionScene";
import { CocosHelper } from "../common/uitls/CocosHelper_my";
import TransitionScene from "../common/uitls/TransitionScene_my";
import showLaodingHall from "./showLaodingHall";
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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    //进入的声音资源
    @property(cc.AudioClip)
    playMusicAudio: cc.AudioClip = null;

     //进入的声音资源
     @property(cc.AudioClip)
     btnAudio: cc.AudioClip = null;

    start () {
        // let AudioPlayer = cc.find("Audio").getComponent("AudioManager");
        // //停止再开启背景音乐
        // AudioPlayer.stopBgMusic();
        // AudioPlayer.playBgMusic(this.playMusicAudio);
        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.playMusicAudio,true);

        let logo = CocosHelper.findNode(cc.Canvas.instance.node, "logo");
        if(logo){

            logo.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(0, 10)),cc.moveBy(0.5, cc.v2(0, -10)))));

        }
        let table = CocosHelper.findNode(cc.Canvas.instance.node, "table");
        if(table){
            let slime1 = table.getChildByName("slime1");
            if(slime1)
                slime1.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1.5, 1.08),cc.scaleTo(1.5, 1))));

        }
        
        
    }

    touchMap(){

        if(this.btnAudio)
            cc.audioEngine.playEffect(this.btnAudio, false);
            
            cc.sys.localStorage.setItem("fromHall", 10);
            cc.sys.garbageCollect();
            cc.game.restart();
            // showLaodingHall.getInstance().loadingDoneCallback = ()=>{
                
            //     TransitionScene.changeScene("hall", "111");
            // }; 
            // showLaodingHall.getInstance().showAds(false);
            
    }
    touchplay(event, data){
        if(this.btnAudio)
            cc.audioEngine.playEffect(this.btnAudio, false);
        //TransitionScene.changeScene("LoadSubGame", "111");

        if(data == "batter_slime")
            TransitionScene.changeScene("makeActivatorCB", "ttt");
        
        if(data == "glitter_slime")
            TransitionScene.changeScene("chooseSceneGS", "ttt");

        if(data == "chocolate_slime")
            TransitionScene.changeScene("makeSculpeyHC", "ttt");
            
        if(data == "rainbow_slime")
            TransitionScene.changeScene("makeWaterRS", "ttt");

        if(data == "dark_slime")
            TransitionScene.changeScene("makeWaterSD", "ttt");


            
    }

    // update (dt) {}
}
