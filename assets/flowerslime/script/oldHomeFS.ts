import MyMoveIn from "./MyMoveInFS";

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
    jump: cc.AudioClip = null;
    @property(cc.AudioClip)
    jump1: cc.AudioClip = null;
    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        if (CC_JSB && !CC_PREVIEW) {
            jsToCPP.getInstance().showBanner();
            jsToCPP.getInstance().setEmailContentAndTitle("Flower Slime",
            "Look,  I just added so many flowers in my slime. It's so fun.");
        }
        cc.loader.loadRes("flowerslime/bg_3",cc.AudioClip,(error,resource)=>{
            if(error){
                console.log(error+"");
                return;
            }
            cc.loader.setAutoRelease(resource,false);
            let audio=cc.audioEngine.playMusic(resource,true);
        });
        this.node.getChildByName("boy").getComponent(MyMoveIn).actionCallBack = ()=>{
            this.node.getChildByName("star_bg2").active = true;
            let logo = this.node.getChildByName("logo");
            let audio = cc.audioEngine.playEffect(this.jump,false);
            logo.runAction(cc.sequence(cc.spawn(cc.jumpBy(0.65,-200,0,30,1),cc.scaleTo(0.65,1),cc.rotateBy(0.65,360*1)),cc.callFunc(()=>{

                let play = this.node.getChildByName("play");
                            let rot =  cc.rotateBy(0.75,360*1);
                            let scale = cc.scaleTo(0.75,1);
                            let audio = cc.audioEngine.play(this.jump1,false,0.5)
                            play.runAction(cc.sequence(cc.spawn(rot,scale),cc.callFunc(()=>{
                                this.node.getChildByName("homeheartParticleleft").active = true;
                                play.getComponent(cc.Button).interactable = true;
                                play.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.65,1.05),cc.scaleTo(0.6,1))))
                            })));
            })));
        }
    }
    touchUrl(){
        
        if(CC_JSB && !CC_PREVIEW){

            console.log("http://www.funfunnymedia.com/privacys/");
            
            jsToCPP.getInstance().openUrl("http://www.funfunnymedia.com/privacys/");
        }
            
    }

    // update (dt) {}
}
