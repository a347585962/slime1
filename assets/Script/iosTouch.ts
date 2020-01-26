import TransitionScene from "../common/uitls/TransitionScene_my";
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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //HttpUtils.getInstance().getJsonData();
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
    touchStart(event, data){

        let button:cc.Button = event.target.getComponent(cc.Button)

        button.interactable = false;
        
        // TransitionScene.changeScene("hall", "temp");
        TransitionScene.changeScene("home", "temp");
        cc.loader.loadRes("button_general.mp3", cc.AudioClip, function (err, audio) {
            
            cc.audioEngine.play(audio, false,  1.0);


        })

    }
    // update (dt) {}
}
