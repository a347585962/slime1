import TransitionScene from "../common/Script/codebase/TransitionSceneGS";
import showLaoding from "../common/Script/showLaodingGS";

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

    start () {

    }
    private backToHall(){

        // cc.audioEngine.stopMusic();
        // //cc.director.getScene().getChildByName("audioMusic").getComponent(cc.AudioSource).stop();;
        // //返回大厅
        // if(CC_JSB){
            
        //     cc.INGAME =  (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + "SlimeMakeNew/glitter_slime";
        //     console.log(cc.INGAME);
        //     window.require(cc.INGAME+"/src/dating.js");
           
        // }

        cc.sys.localStorage.setItem("fromHall", 10);
        cc.sys.garbageCollect();
        cc.game.restart();

    }

    touchHome(event, customEventData)
    {
        var node = event.target;
        var button:cc.Button = node.getComponent(cc.Button);
        button.interactable = false;
        console.log("touchHome");
        this.backToHall();
    }
    touchMoreGame()
    {
        if(CC_JSB)
	        jsToCPP.getInstance().showMoreGame();
    }
    touchNext(event, customEventData)
    {
        console.log("touchNext");
        var node = event.target;
        var button:cc.Button = node.getComponent(cc.Button);
        button.interactable = false;
        if(customEventData == "backToHall"){

            this.backToHall();

        }else if(customEventData == "gameScene5GS"){
            
            showLaoding.getInstance().loadingDoneCallback = function () {
                
                TransitionScene.changeScene(customEventData, "111");

            }
            showLaoding.getInstance().showAds(true);


        }else{

            TransitionScene.changeScene(customEventData, "111");

        }

        
    }
    // update (dt) {}
}
