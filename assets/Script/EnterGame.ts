import { CocosHelper } from "../common/uitls/CocosHelper_my";
import TransitionScene from "../common/uitls/TransitionScene_my";
import GameData from "./GameData";
import AdsManagerHall from "./AdsManagerHall";
import HttpUtils from "./HttpUtils";
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
export default class EnterGame extends cc.Component {

    private canEnter = false;

    private numberGet = 0;
    private successAddWeb = false;
    
    //进入的声音资源
    @property(cc.AudioClip)
    playMusicAudio: cc.AudioClip = null;
    private _hideNativeSplash() {
        if (CC_JSB) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                // 反射调用原生的隐藏方法
                cc.log("=====static hide ");
                jsb.reflection.callStaticMethod(
                    "org/cocos2dx/javascript/AppActivity",
                    "hideSplash",
                    "()V"
                );
            }
        }
    }
    start () {

        let self = this;
        if(cc.sys.platform == cc.sys.ANDROID){
            let android = CocosHelper.findNode(cc.Canvas.instance.node, "android");
            android.active = true;
            let nodeChi = android.getChildByName("logo");
            if(nodeChi){
                var rotate = nodeChi.getComponent("MoveIn_my");
                //cc.audioEngine.playMusic(this.playMusicAudio, true);
                if(rotate)
                    rotate.actionCallBack = function () {
                        
                        setTimeout(function () {
                            self.checkEnter();
                        }, 2000);
                        
                        let loading = CocosHelper.findNode(cc.Canvas.instance.node, "loading");
                        loading.active = true;

                        let dianIndex = 0;

                        loading.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5),cc.callFunc(function () {
                            dianIndex = dianIndex + 1;
                            for (let index = 1; index < 5; index++) {
                                let dian = loading.getChildByName("dian" + index);
                                if(index <= dianIndex % 4 + 1){
                                    dian.active = true;
                                }else{
                                    dian.active = false;
                                }

                            }


                
                        }))));

                    }  
        }


        }else{
            let android = CocosHelper.findNode(cc.Canvas.instance.node, "ios");
            android.active = true;
            let nodeChi = android.getChildByName("logo");
            let kids0 = android.getChildByName("kids0");
            let kids1 = android.getChildByName("kids1");
            let kids2 = android.getChildByName("kids2");
            if(nodeChi){
                var rotate = nodeChi.getComponent("MoveIn_my");
                //cc.audioEngine.playMusic(this.playMusicAudio, true);

                        setTimeout(function () {
                            kids2.active = false;
                            kids1.active = true;
                            kids0.active = false;
                        }, 1000);
                        setTimeout(function () {
                            kids2.active = true;
                            kids1.active = false;
                            kids0.active = false;
                        }, 2000);

                if(rotate)
                    rotate.actionCallBack = function () {
                        
                        setTimeout(function () {
                            self.checkEnter();
                        }, 2000);
                        
                        let loading = CocosHelper.findNode(cc.Canvas.instance.node, "loading");
                        loading.active = true;

                        let dianIndex = 0;

                        loading.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5),cc.callFunc(function () {
                            dianIndex = dianIndex + 1;
                            for (let index = 1; index < 5; index++) {
                                let dian = loading.getChildByName("dian" + index);
                                if(index <= dianIndex % 4 + 1){
                                    dian.active = true;
                                }else{
                                    dian.active = false;
                                }

                            }

                
                        }))));

                    }  

            }
        }

         //停止所有音效
        //  cc.audioEngine.stopAllEffects();

         //从游戏中回到大厅 显示全屏
         let key = "fromHall";
         let isLock =  cc.sys.localStorage.getItem(key);
         if(isLock == 10){
             console.log("大厅 显示全屏");
             console.log(cc.sys.localStorage.getItem(key));
             //显示全屏
             cc.sys.localStorage.setItem(key, 11);
            
            setTimeout(() => {
                jsToCPP.getInstance().showInterstitial();
            }, 3500);

             
        }

        this.scheduleOnce(() => {
            console.log("_hideNativeSplash");
            
            this._hideNativeSplash();
        }, 1);
        
        console.log("Loading onLoad");
        cc.audioEngine.stopMusic();
        //cc.audioEngine.playMusic(this.playMusicAudio, true);
        cc.audioEngine.stopAllEffects();
        cc.loader.loadRes("bg", cc.AudioClip, function (err, audio) {
            
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);

        })
        jsToCPP.getInstance().setEmailContentAndTitle("DIY Slime", "It’s the time to DIY your own crazy slime with so many rainbow colors and toppings.");
        //debug-----------//
        
        // console.log("loadJsonFormNative");
        // // let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        // // bg.stopAllActions();
        // cc.loader.loadRes("gamedata.json", function (err, object) {
        //     if (err) {
        //         cc.log("解析json文件失败" + err);
        //         return;
        //     }

        //     object.json.forEach(element => {

        //         GameData.getInstance().initData(element);
                
        //     });
        //     TransitionScene.changeScene("hall", "temp");
        // });
        // return;
        //debug end------//

        
        
       
        let url =  HttpUtils.getInstance().getJsonData();//"http://youngcnfoodhall.top/SlimeMake/game.json";  
        // let url = "http://47.88.54.178/UnicornFoodHall/icecream/project.manifest";
        //进入游戏 需要从网络下载json
        

        //停止所有音效
        // cc.audioEngine.stopAllEffects();
        // if (CC_JSB && !CC_PREVIEW) {
        //     jsToCPP.getInstance().setEmailContentAndTitle("Unicorn Food","Wow, there are so many kinds of unicorn foods. Big surprise for the unicorn fans. Let's have fun to make so many unicorn foods.");
        
        // }
        //5S之后，加载本地
        this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
            
            self.loadJsonFormNative();

        })))

        // HttpUtils.getInstance().httpGet(url, function (resonpose) {
            
        //     //获取失败的话 从本地加载json
        //     if(!resonpose){

        //     }else{
        //         self.successAddWeb = true;
        //         self.node.stopAllActions;
        //         console.log("网络json");
                
        //         let jsonobj = JSON.parse(resonpose);
                
        //         //注意抛出异常
        //         try {
        //             let jsonobj = JSON.parse(resonpose);
        //             for(var i = 0; i < jsonobj.length; i++){

        //                 GameData.getInstance().initData(jsonobj[i]);
                     
        //             }
        //             self.canEnter = true;
        //         } catch (error) {
                    
        //         }

        //     }
            
        // });
    }

    onLoad () {
        
       
    }
    
    checkEnter(){

        //检查文件加载完成

        let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        let self = this;
        bg.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.2),cc.callFunc(function () {
            console.log("checkEnter()" + self.canEnter);
            if(self.canEnter){

                bg.stopAllActions();
                self.canEnter = false;
                self.enterNextScene();
            }

        }))));
       

    }
    public static isFirst: boolean = false;
    enterNextScene(){
        
        if(cc.sys.platform == cc.sys.ANDROID){
            // TransitionScene.changeScene("cakeChoose", "temp");
            let isLockHome =  cc.sys.localStorage.getItem("isFirstHome");
            if(!isLockHome){
                isLockHome = 1;
                cc.sys.localStorage.setItem("isFirstHome", isLockHome);
                TransitionScene.changeScene("home", "temp");
            }else{
                
                TransitionScene.changeScene("hall", "temp");
            }
            // TransitionScene.changeScene("home", "temp");    
        }else{
            let isLock =  cc.sys.localStorage.getItem("isFirst");
            if(!isLock){
                isLock = 1;
                cc.sys.localStorage.setItem("isFirst", isLock);
                TransitionScene.changeScene("iosShow", "temp");
            }else{

                let isLockHome =  cc.sys.localStorage.getItem("isFirstHome");
                if(!isLockHome){
                    isLockHome = 1;
                    cc.sys.localStorage.setItem("isFirstHome", isLockHome);
                    TransitionScene.changeScene("home", "temp");
                }else{
    
                    TransitionScene.changeScene("hall", "temp");
                }
                
            }
            
        }
    }
    loadJsonFormNative(){
        let self = this;
        console.log("loadJsonFormNative");
        // let bg = CocosHelper.findNode(cc.Canvas.instance.node, "bg");
        // bg.stopAllActions();
        cc.loader.loadRes("gamedata.json", function (err, object) {
            if (err) {
                cc.log("解析json文件失败" + err);
                return;
            }

            object.json.forEach(element => {

                GameData.getInstance().initData(element);
                
            });
            self.canEnter = true;
        });
    }


    // update (dt) {}
}
