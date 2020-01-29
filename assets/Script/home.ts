import { CocosHelper } from "../common/uitls/CocosHelper_my";
import MoveIn from "./MoveIn_my";
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
export default class home extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property({type:[cc.SpriteFrame]})
    unicornWingAnimation:cc.SpriteFrame[] = [];

    @property({type:[cc.SpriteFrame]})
    unicornAnimation:cc.SpriteFrame[] = [];

    @property(cc.AudioClip)
    touchAudio: cc.AudioClip = null;


    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        btn_moregame.active = true;
        btn_moregame.opacity = 0;
        btn_moregame.runAction(cc.sequence(cc.fadeIn(2.0),cc.callFunc(function () {
                
            let logo = CocosHelper.findNode(cc.Canvas.instance.node, "logo");
            logo.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(0, 10)), cc.moveBy(0.5, cc.v2(0, -10)))));

                
        })));
    }

    touchHome(event){

        let touchNode = event.target;
        let btCm:cc.Button = touchNode.getComponent(cc.Button);
        btCm.interactable = false;

        cc.audioEngine.playEffect(this.touchAudio, false);

        //cc.sys.localStorage.setItem("isFirstHome", 1);

        TransitionScene.changeScene("chooseNew", "t");

    }

    touchMore(event){
        cc.audioEngine.playEffect(this.touchAudio, false);
        jsToCPP.getInstance().showMoreGame();

    }
    touchUrl(event){
        if (CC_JSB&& !CC_PREVIEW) {
            // if(cc.sys.platform == cc.sys.ANDROID){
            //     jsToCPP.getInstance().openUrl("https://www.crazycampmedia.com/privacys/");
            // }else{
            //     jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/");
            // }
            if(cc.sys.platform == cc.sys.ANDROID){
                jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/");
                
            }else{
                jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
            }
        }
    }
    // update (dt) {}
}
