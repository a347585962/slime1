import RewardManager from "../common/Script/RewardManagerGS";

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

    @property(cc.AudioClip)
    bgAudio: cc.AudioClip = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        RewardManager.getInstance().loadConfig();
        // cc.audioEngine.playMusic(this.bgAudio, true);  
        cc.loader.loadRes("glitterslime/bg",cc.AudioClip,function(error,resouce){
            if(error)
            {
                console.log(error+"");
                return;
            }
            let audioId = cc.audioEngine.playMusic(resouce,true);
            cc.loader.setAutoRelease(resouce,false);
        }.bind(this));
    }

    // update (dt) {}
}
