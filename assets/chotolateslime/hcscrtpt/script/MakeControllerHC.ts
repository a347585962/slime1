import MoveIn from "../common/Script/MoveInHC";
import HandTouchEvent from "./HandTouchEventHC";
import KnifeTouchEvent from "./KnifeTouchEventHC";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperHC";
import TransitionScene from "../common/Script/codebase/TransitionSceneHC";

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
export default class MakeController extends cc.Component {
    onLoad() {
        // let btn_home = CocosHelper.findNode(cc.Canvas.instance.node, "btn_home");
        // CocosHelper.showBackOut(btn_home, CocosHelper.ShowDirection.show_from_left);
        // let btn_moregame = CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
        // CocosHelper.showBackOut(btn_moregame, CocosHelper.ShowDirection.show_from_right);

         //动态加载背景音乐
         cc.loader.loadRes("chocolateslime/sound/6", cc.AudioClip, function (err, audio) {
            
            if(err){

                console.log(err + "");
                
                return;
            }
            cc.audioEngine.playMusic(audio, true);

            cc.loader.setAutoReleaseRecursively(audio, false);

        })
        this.node.getChildByName('sculpey').getComponent(MoveIn).actionCallBack = function () {
            cc.find('sculpey/tipClick', this.node).active = true;
        }.bind(this);
        cc.find('sculpey_cut/knife', this.node).getComponent(MoveIn).actionCallBack = function () {
            cc.find('sculpey_cut/knife', this.node).getComponent(KnifeTouchEvent).init();
            cc.find('sculpey_cut/finger', this.node).active = true;
        }.bind(this);
    }
    sculpeyButton0() {
        this.node.getChildByName('sculpey').getComponent(cc.AudioSource).play();
        cc.find('sculpey/tipClick', this.node).active = false;
        cc.find('sculpey/sculpey0', this.node).active = false;
        cc.find('sculpey/sculpey1', this.node).active = true;
        this.node.getChildByName('sculpey').runAction(cc.sequence(cc.scaleTo(0.3, 1.15), cc.scaleTo(0.3, 1), cc.callFunc(function () {
            cc.find('sculpey/tipClick', this.node).active = true;
            cc.find('sculpey/sculpey1', this.node).getComponent(cc.Button).interactable = true;
        }.bind(this))));
    }
    sculpeyButton1() {
        this.node.getChildByName('sculpey').getComponent(cc.AudioSource).play();
        cc.find('sculpey/tipClick', this.node).active = false;
        cc.find('sculpey/sculpey1', this.node).active = false;
        cc.find('sculpey/sculpey2', this.node).active = true;
        this.node.getChildByName('sculpey').runAction(cc.sequence(
            cc.scaleTo(0.3, 1.15),
            cc.scaleTo(0.1,1),
            cc.callFunc(function () {
                cc.find('sculpey/tipClick', this.node).active = false;
                cc.find('sculpey/sculpey2', this.node).active = false; 
                cc.find('sculpey/sculpey3', this.node).active = true;
                cc.find('sculpey/fragment', this.node).active = true;
                cc.find('sculpey/fragment', this.node).getComponent(cc.Animation).play('broken');
                cc.find('sculpey/fragment', this.node).getComponent(cc.AudioSource).play();
                cc.find('sculpey/sculpey3', this.node).runAction(cc.sequence(
                    cc.spawn(cc.rotateBy(0.5, -90), cc.fadeTo(0.5, 100)),
                    cc.callFunc(function () {
                        cc.find('sculpey/sculpey3', this.node).active = false;
                        cc.find('sculpey/sculpey4', this.node).active = true;
                    }.bind(this))));
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                cc.find('sculpey/fragment', this.node).active = false;
                        cc.find('sculpey/hand', this.node).active = true;
                        cc.find('sculpey/hand', this.node).runAction(cc.sequence(cc.moveTo(1, cc.v2(0, -50)),
                            cc.callFunc(function () {
                                cc.find('sculpey/hand', this.node).getComponent(HandTouchEvent).init();
                                cc.find('sculpey/finger', this.node).active = true;
                            }.bind(this))
                        ))
                // cc.find('sculpey/sculpey4', this.node).runAction(cc.sequence(
                //     cc.delayTime(0.5),
                //     cc.spawn(
                //         cc.sequence(
                //             cc.moveBy(0.5, cc.v2(0, 20)),
                //             cc.moveBy(0.5, cc.v2(0, -20))),
                //         cc.sequence(
                //             cc.scaleTo(0.3, 1.1, 0.95),
                //             cc.scaleTo(0.3, 0.95, 1.05),
                //             cc.scaleTo(0.15, 1.05, 0.97),
                //             cc.scaleTo(0.15, 0.97, 1.05),
                //             cc.scaleTo(0.1, 1, 1)
                //         )),
                //     cc.callFunc(function () {
                //         cc.find('sculpey/fragment', this.node).active = false;
                //         cc.find('sculpey/hand', this.node).active = true;
                //         cc.find('sculpey/hand', this.node).runAction(cc.sequence(cc.moveTo(1, cc.v2(0, 0)),
                //             cc.callFunc(function () {
                //                 cc.find('sculpey/hand', this.node).getComponent(HandTouchEvent).init();
                //                 cc.find('sculpey/finger', this.node).active = true;
                //             }.bind(this))
                //         ))
                //     }.bind(this))));
            }.bind(this))
        ));
    }
    mixFinish() {
        cc.find('Canvas/sculpey/sculpey4').stopAllActions();
        cc.find('sculpey/hand', this.node).getComponent(HandTouchEvent).destroyTouchEvent();
                cc.find('sculpey/hand', this.node).active = false;
                this.node.getChildByName('sculpey').active = false;
                this.node.getChildByName('sculpey_cut').active = true;
        cc.find('sculpey/hand', this.node).getComponent(cc.Animation).stop();
        cc.find('sculpey/hand', this.node).runAction(cc.sequence(
            cc.moveTo(0.5, cc.v2(0, -300)),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this))
        ))
    }
    cutSculpey(count: number) {
        this.node.getChildByName('sculpey').getComponent(cc.AudioSource).play();
        let scale = 0.8;
        let y = -Math.random() * 50+10;
        if (count == 0) {
            cc.find('sculpey_cut/sculpey11', this.node).active = false;
            cc.find('sculpey_cut/sculpey_cut0_1', this.node).active = true;
            cc.find('sculpey_cut/sculpey_cut0_0', this.node).active = true;
            let rotation = Math.random() * 300 + 60;
           
            cc.find('sculpey_cut/sculpey_cut0_0', this.node).runAction(cc.spawn(cc.scaleTo(0.5,scale),cc.moveTo(0.5, cc.v2(600 - 100 * count, y)), cc.rotateBy(0.5, rotation)));
        } else if (count == 1) {
            cc.find('sculpey_cut/sculpey_cut0_1', this.node).active = false;
            cc.find('sculpey_cut/sculpey_cut1_1', this.node).active = true;
            cc.find('sculpey_cut/sculpey_cut1_0', this.node).active = true;
            let rotation = Math.random() * 300+60;
            cc.find('sculpey_cut/sculpey_cut1_0', this.node).runAction(cc.spawn(cc.scaleTo(0.5,scale),cc.moveTo(0.5, cc.v2(600 - 100 * count, y)), cc.rotateBy(0.5, rotation)));
            
        } else if (count == 2) {
            cc.find('sculpey_cut/sculpey_cut1_1', this.node).active = false;
            cc.find('sculpey_cut/sculpey_cut2_1', this.node).active = true;
            cc.find('sculpey_cut/sculpey_cut2_0', this.node).active = true;
            let rotation = Math.random() * 300+60;
            cc.find('sculpey_cut/sculpey_cut2_0', this.node).runAction(cc.spawn(cc.scaleTo(0.5,scale),cc.moveTo(0.5, cc.v2(600 - 80 * count, y)), cc.rotateBy(0.5, rotation)));
            
        } else if (count == 3) {
            cc.find('sculpey_cut/sculpey_cut2_1', this.node).active = false;
            cc.find('sculpey_cut/sculpey_cut3_1', this.node).active = true;
            cc.find('sculpey_cut/sculpey_cut3_0', this.node).active = true;
            let rotation = Math.random() * 300+60;
            cc.find('sculpey_cut/sculpey_cut3_0', this.node).runAction(cc.spawn(cc.scaleTo(0.5,scale),cc.moveTo(0.5, cc.v2(600 - 80 * count, y)), cc.rotateBy(0.5, rotation)));
            
        }else if (count == 4) {
            cc.find('sculpey_cut/sculpey_cut3_1', this.node).active = false;
            cc.find('sculpey_cut/sculpey_cut4_1', this.node).active = true;
            let rotation0 = Math.random() * 300+60;
            cc.find('sculpey_cut/sculpey_cut4_1', this.node).runAction(cc.spawn(cc.scaleTo(0.5,scale),cc.moveTo(0.5, cc.v2(600 - 80 * count, y)), cc.rotateBy(0.5, rotation0)));
            cc.find('sculpey_cut/sculpey_cut4_0', this.node).active = true;
            let rotation1 = Math.random() * 300 + 60;
            let y1 = -Math.random() * 50+10;
            cc.find('sculpey_cut/sculpey_cut4_0', this.node).runAction(cc.spawn(cc.scaleTo(0.5, scale), cc.moveTo(0.5, cc.v2(600 - 80 * (count + 1), y1)), cc.rotateBy(0.5, rotation1)));
            this.node.getChildByName('bowl').active = true; 
            this.node.getChildByName('bowl').getComponent(MoveIn).actionCallBack = function () {
                cc.find('sculpey_cut/decorateParticle', this.node).getComponent(cc.ParticleSystem).resetSystem();
                cc.find('sculpey_cut/decorateParticle', this.node).getComponent(cc.AudioSource).play();
                this.putInBowl();
            }.bind(this);
        }
    }
    putInBowl() {
        let worldPosition = this.node.getChildByName('bowl').convertToWorldSpaceAR(cc.v2(0,0));
        let position = this.node.getChildByName('sculpey_cut').convertToNodeSpaceAR(worldPosition);
        cc.find('sculpey_cut/sculpey_cut0_0', this.node).runAction(cc.sequence(cc.delayTime(0.1), cc.moveTo(1, cc.v2(position.x+150,position.y+250)),cc.moveTo(0.3,cc.v2(position.x,position.y+50))));
        cc.find('sculpey_cut/sculpey_cut1_0', this.node).runAction(cc.sequence(cc.delayTime(0.2), cc.moveTo(1, cc.v2(position.x+150,position.y+250)),cc.moveTo(0.3,cc.v2(position.x-30,position.y+70))));
        cc.find('sculpey_cut/sculpey_cut2_0', this.node).runAction(cc.sequence(cc.delayTime(0.25), cc.moveTo(1, cc.v2(position.x+150,position.y+250)),cc.moveTo(0.3,cc.v2(position.x+30,position.y+70))));
        cc.find('sculpey_cut/sculpey_cut3_0', this.node).runAction(cc.sequence(cc.delayTime(0.35), cc.moveTo(1, cc.v2(position.x+150,position.y+250)),cc.moveTo(0.3,cc.v2(position.x+50,position.y+90))));
        cc.find('sculpey_cut/sculpey_cut4_0', this.node).runAction(cc.sequence(cc.delayTime(0.5), cc.moveTo(1, cc.v2(position.x+150,position.y+250)),cc.moveTo(0.3,cc.v2(position.x-50,position.y+90))));
        cc.find('sculpey_cut/sculpey_cut4_1', this.node).runAction(cc.sequence(cc.delayTime(0.6), cc.moveTo(1, cc.v2(position.x+150,position.y+250)), cc.moveTo(0.3, cc.v2(position.x, position.y + 100))));
        this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
            this.node.getChildByName('bowl1').active = true;
        }.bind(this))));  
        let x = -this.node.getChildByName('bowl').getPosition().x-50;
        let y = -this.node.getChildByName('bowl').getPosition().y+200;
        
        this.node.runAction(cc.sequence(
            cc.delayTime(2.5),
            cc.callFunc(function () {
                cc.find('sculpey_cut/sculpey_cut0_0', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                cc.find('sculpey_cut/sculpey_cut1_0', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                cc.find('sculpey_cut/sculpey_cut2_0', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                cc.find('sculpey_cut/sculpey_cut3_0', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                cc.find('sculpey_cut/sculpey_cut4_0', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                cc.find('sculpey_cut/sculpey_cut4_1', this.node).runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                this.node.getChildByName('bowl').runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
                this.node.getChildByName('bowl1').runAction(cc.sequence(cc.moveBy(0.5, cc.v2(x, y)), cc.moveBy(0.5, cc.v2(50, -250))));
            }.bind(this)),
            cc.delayTime(1),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('addMaterialHC');
            }.bind(this))
        ))

    }

}
