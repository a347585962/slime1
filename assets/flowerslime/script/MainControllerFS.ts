
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";
import AdsManager from "../common/Script/ads/AdsManagerFS";
import MoveIn from "../common/Script/compoent/MoveInFS";


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
export default class MainController extends cc.Component {
    onLoad() {
        if(cc.sys.isMobile){
            AdsManager.getInstance().showBanner();
        }
        cc.audioEngine.stopMusic();
        cc.loader.loadRes('flowerslime/sound/1', cc.AudioClip, function (err, audio) {
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);
        }.bind(this))
        this.node.getChildByName('girlhand').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('girlhand').runAction(cc.sequence(
                cc.scaleTo(0.1, 1.05, 0.95),
                cc.scaleTo(0.1, 0.95, 1.05),
                cc.scaleTo(0.1, 1.02, 0.98),
                cc.scaleTo(0.1, 0.98, 1.02),
                cc.scaleTo(0.1, 1, 1)
            ));
        }.bind(this);
        this.node.getChildByName('boy').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('paillette').active = true;
            this.node.getChildByName('paillette').getComponent(cc.AudioSource).play();
        }.bind(this);
        this.node.getChildByName('logo').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('logo').runAction(cc.repeatForever(cc.sequence(
                cc.moveBy(1, cc.v2(0, 10)),
                cc.moveBy(1,cc.v2(0,-10)),
            )));
        }.bind(this);
       
        this.node.getChildByName('btn').getComponent(MoveIn).actionCallBack = function () {
            this.node.getChildByName('btn_moregame').active = true;
            this.node.getChildByName('star_bg2').active = true;
            this.node.getChildByName('homeheartParticleleft').active = true;
            this.node.getChildByName('btn').getComponent(cc.Button).interactable = true;
            this.node.getChildByName('btn').runAction(cc.repeatForever(cc.sequence(
                cc.scaleTo(1, 0.9),
                cc.scaleTo(1, 1),
            )));
        }.bind(this);
    }
    btnClick() {
        this.node.getChildByName('btn').stopAllActions();
        this.node.getChildByName('btn').setScale(1);
        TransitionScene.changeScene('addMaterial');
    }
}
