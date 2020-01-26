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
export default class AudioManager extends cc.Component {

    @property(cc.AudioClip)
    bgMusic: cc.AudioClip = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    onLoad() {
        cc.game.addPersistRootNode(this.node);
    }
    start () {

    }
    bgMusicChannel = null;
    playBgMusic(audio:cc.AudioClip) {
        this.bgMusicChannel = cc.audioEngine.playMusic(audio,true);
    };
 
    stopBgMusic() {        
        //  if (this.bgMusicChannel) {
                    
        //      this.bgMusicChannel = null;
        //  }
        cc.audioEngine.stopMusic();     
     };
    // update (dt) {}
}
