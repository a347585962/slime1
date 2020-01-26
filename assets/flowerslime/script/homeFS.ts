import showLaoding from "../common/Script/ads/showLaodingFS";
import DataConfig from "./DataConfigFS";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class home extends cc.Component {
    private _node: cc.Node = null;
    callback: () => void;
    setNode(n: cc.Node) {
        this._node = n;
    }
    showPopup(_node: cc.Node) {
        this._node.getComponent(cc.Button).interactable = false;
        this.node.active = true;
        this.node.setScale(0);
        this.node.getComponent(cc.AudioSource).play();
        this.node.runAction(cc.sequence(cc.scaleTo(0.5, 1.1), cc.scaleTo(0.05, 1)));
    }
    hidePopup(event) {
        let _node = event.target;
        if (_node.getComponent(cc.AudioSource)) {
            _node.getComponent(cc.AudioSource).play();
        }
        this.node.runAction(cc.sequence(cc.scaleTo(0.05, 1.1), cc.scaleTo(0.5, 0), cc.callFunc(function () {
            this._node.getComponent(cc.Button).interactable = true;
            this.node.destroy();
        }.bind(this))));
    }
    setTip(tip: string) {
        this.node.getChildByName('tip').getComponent(cc.Label).string = tip;
    }
    okClick(event) {  
       
        if (event.target) {

            let btncm: cc.Button = event.target.getComponent(cc.Button);
            if (btncm)
                btncm.interactable = false;
        }

        cc.audioEngine.stopMusic();
        // if (CC_JSB) {

        //     cc.INGAME = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + "UnicornCakeHotUP/cake_8";
        //     console.log(cc.INGAME);
        //     window.require(cc.INGAME + "/src/dating.js");
        // }

        // showLaoding.getInstance().showAds("loading_ffm","loading_ffm",false);
        // showLaoding.getInstance().loadingDoneCallback = function () {
        //     showLaoding.getInstance().loadingDoneCallback = null;
        //     console.log("广告关闭");

        //     cc.director.loadScene("home");

        // }
        cc.sys.localStorage.setItem("fromHall", 10);
        cc.sys.garbageCollect();
        cc.game.restart();
    }
    setCallback(callback: () => void) {
        this.callback = callback;
    }

}
