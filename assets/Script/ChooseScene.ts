// import { CocosHelper } from "../common/uitls/CocosHelper";
import GameData from "./GameData";
import { CocosHelper } from "../common/uitls/CocosHelper_my";

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

    //进入的声音资源
    @property(cc.AudioClip)
    moveAudio: cc.AudioClip = null;
    
    //进入的声音资源
    @property(cc.AudioClip)
    playMusicAudio: cc.AudioClip = null;

    start () {

        // let AudioPlayer = cc.find("Audio").getComponent("AudioManager");
        // //停止再开启背景音乐
        // AudioPlayer.stopBgMusic();
        // AudioPlayer.playBgMusic(this.playMusicAudio);

        cc.audioEngine.stopMusic();
        cc.audioEngine.playMusic(this.playMusicAudio,true);
        
        let arrow_r = CocosHelper.findNode(cc.Canvas.instance.node, "arrow_r");
        arrow_r.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(10, 0)), cc.moveBy(0.5, cc.v2(-10, 0)))));

        let arrow_l = CocosHelper.findNode(cc.Canvas.instance.node, "arrow_l");
        arrow_l.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(10, 0)), cc.moveBy(0.5, cc.v2(-10, 0)))));

        arrow_l.active = false;

        this.showItem();

        if(CC_JSB && !CC_PREVIEW)
            jsToCPP.getInstance().showBanner();

    }


    //显示item
    showItem(){

        let pageview = CocosHelper.findNode(cc.Canvas.instance.node, "pageview");
        let content = pageview.getChildByName("view").getChildByName("content");
        for (let index = 1; index < 9; index++) {
            let pageName = index < 5 ? "page_1" : "page_2";
            let pageNode = content.getChildByName(pageName);

            let itemNode = pageNode.getChildByName("game" + (index <= 4 ? index : index - 4));
            let gameName = GameData.getInstance().getGameNameFormIndex(index);
            console.log(itemNode.name + "showItem");
            cc.loader.loadRes(gameName, cc.Prefab,function(error:Error,loadedResource:cc.Prefab){

                if(error){
                    console.log(error + "gameNameerror");
                    
                    return;
                }

                // console.log("加载预制体" + gameName);
                // console.log("加载预制体" + itemNode.name + itemNode.parent.name);
                let changechange = cc.instantiate(loadedResource);
                changechange.parent = itemNode;
                changechange.position = cc.v2(0, 0);
                
                let isNew = GameData.getInstance().getIsNewFromName(gameName);
                cc.log(isNew + "isNewisNewisNew");
                if(isNew){
                    cc.loader.loadRes("talk",cc.Prefab,function(error:Error,talk:cc.Prefab){

                        cc.log(error + "errorerrorerrorerror");

                        let talkNode = cc.instantiate(talk);
                        talkNode.parent =  changechange;
                        talkNode.position = cc.v2(174, 3);


                        talkNode.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(1.0, -40), cc.rotateTo(1.0, 0))));

                    });
                }

            });
        }
    }
    
    touchArrow(a,data){
        console.log(data);
        cc.audioEngine.playEffect(this.moveAudio, false);
        
        let pageview = CocosHelper.findNode(cc.Canvas.instance.node, "pageview");
        pageview.getComponent(cc.PageView).scrollToPage(data == "right" ? 1 : 0, 0.5);

    }

    pageView(event){

        var node = event.node;
        //页码索引
        let pageIndex = node.getComponent(cc.PageView).getCurrentPageIndex();
        let arrow_r = CocosHelper.findNode(cc.Canvas.instance.node, "arrow_r");
        let arrow_l = CocosHelper.findNode(cc.Canvas.instance.node, "arrow_l");

        if(pageIndex == 0){
            arrow_r.active = true;
            arrow_l.active = false;
        }else{
            arrow_r.active = false;
            arrow_l.active = true;
        }
        
        cc.audioEngine.playEffect(this.moveAudio, false);
    }

    touchUrl(){

        if (CC_JSB&& !CC_PREVIEW) {
            if(cc.sys.platform == cc.sys.ANDROID){
                jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/");
                
            }else{
                jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
            }
            
        }

    }


}
