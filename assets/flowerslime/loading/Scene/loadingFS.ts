import MyMoveIn from "../../script/MyMoveInFS";
import TransitionScene from "../../common/Script/codebase/TransitionSceneFS";


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
    in: cc.AudioClip = null;

    
    private run = false;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.scheduleOnce(() => {
            console.log("_hideNativeSplash");
            
            this._hideNativeSplash();
        }, 1);
        // cc.loader.loadRes("bg_", cc.AudioClip, function (error, resource) {
        //     if (error) {
        //         console.log(error + "");
        //         return;
        //     }
        //     let audio = cc.audioEngine.playMusic(resource, true);
        //     cc.loader.setAutoRelease(resource, false);
        // }.bind(this));
        let mid = this.node.getChildByName("mid1");
        mid.getComponent(MyMoveIn).actionCallBack = ()=>{
            mid.getChildByName("mid").getComponent(cc.Animation).play();
            mid.getChildByName("ballon0").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(2,10),cc.rotateBy(2,-10))));
            mid.getChildByName("ballon1").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(2,-7),cc.rotateBy(2,10))));
            mid.getChildByName("ballon2").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(2,5),cc.rotateBy(2,-9))));
            mid.getChildByName("ballon3").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(2,-6),cc.rotateBy(2,11))));
            
            let down = this.node.getChildByName("down")
            down.active = true;
            down.getChildByName("loading1").runAction(cc.repeatForever(cc.rotateBy(0.1,10)));
            down.getChildByName("loading3").runAction(cc.repeatForever(cc.rotateBy(0.06,10)));
            down.getChildByName("loading4").runAction(cc.repeatForever(cc.rotateBy(0.08,10)));
            down.getChildByName("loading2").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.6,65),cc.rotateBy(0.6,-65))));
            setTimeout(() => {
                TransitionScene.changeScene("home",0)
            }, 4500);
        }
       
        // let logo = this.node.getChildByName("logo")
        // let jump = cc.jumpTo(0.5,0,-35,100,1);
        // let scale = cc.scaleTo(0.5,1);
        // let fun = cc.callFunc(()=>{
        //     this.node.getChildByName("loading").active = true;
        //     this.run = true;
        //     this.scheduleOnce(()=>{
        //         TransitionScene.changeScene("home",0);
        //     },5);
        // });
        // this.node.getChildByName("food").getComponent(MyMoveIn).actionCallBack = ()=>
        // {
        //     logo.runAction(cc.sequence(cc.spawn(jump,scale),fun));
        // let audio = cc.audioEngine.play(this.in,false,0.5);
        // }
        
    }
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


    update (dt) {
        // if(this.run)
        // {
        //     let n = this.node.getChildByName("node");
        //     n.width += 0.25;
        //     if(n.width >= 55)
        //     {
        //         n.width = 0;
        //     }
        // }
    }
}
