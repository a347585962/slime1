
import { MyCocosHelper } from "./MyCocosHelperFS";
import DataConfig from "./DataConfigFS";

import home from "./homeFS";
import showLaoding from "../common/Script/ads/showLaodingFS";
import TransitionScene from "../common/Script/codebase/TransitionSceneFS";

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
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    touchHome(event, data) {
        // if (event.target) {

        //     let btncm: cc.Button = event.target.getComponent(cc.Button);
        //     if (btncm)
        //         btncm.interactable = false;
        // }
        cc.loader.loadRes("flowerslime/home", cc.Prefab, (error, resource) => {
            if (error) {
                console.log(error + "");
                return;
            }
            cc.loader.setAutoRelease(resource, false);
            let n = cc.instantiate(resource);
            cc.find("Canvas").addChild(n);
            n.getComponent(home).setNode(event.target);
            n.getComponent(home).showPopup();

        });
        cc.loader.loadRes("flowerslime/choose", cc.AudioClip, (error, resource) => {
            if (error) {
                console.log(error + "");
                return;
            }
            cc.loader.setAutoRelease(resource, false);
            let audio = cc.audioEngine.play(resource, false, 0.5);
        });


    }
    touchMoreGame(event, data) {
        if (CC_JSB)
            jsToCPP.getInstance().showMoreGame();
    }
    touchNext(event, data) {
        if (data == "eat") {
            event.target.getComponent(cc.Button).interactable = false;
            // cc.find("Canvas/mould/shadow").getComponent(cc.Sprite).spriteFrame = null;
            MyCocosHelper.captureNodeSize(cc.find("Canvas/cake"), cc.visibleRect.width, cc.visibleRect.height).then((texture: cc.RenderTexture) => {
                if (texture == null) {
                    console.log("texture == null");
                } else {
                    // var node = new cc.Node();
                    // var sprite = node.addComponent(cc.Sprite);
                    // sprite.spriteFrame = new cc.SpriteFrame(texture);
                    // cc.Canvas.instance.node.addChild(node);
                    // node.x = 0;
                    // node.y = 0;

                    DataConfig.getInstance().setTexture(texture);
                    
                    
                    
                }
                // showLaoding.getInstance().showAds(false);
                // showLaoding.getInstance().loadingDoneCallback = function () {
                //             showLaoding.getInstance().loadingDoneCallback  = null;
                //             console.log("广告关闭");

                //         TransitionScene.changeScene("eatCake", 2);
                //              //cc.director.loadScene(data);
                //         }

            });


        } else if (data == "pull") {
            
            TransitionScene.changeScene("pullSlime0FS", 7);
        }
        else if (data == "click") {
           
            TransitionScene.changeScene("clickSlimeFS", 12);
        }
        else if (data == "add") {
           
            TransitionScene.changeScene("addMatrialFS", 0);
        }

    }
    touchRestart(event, data) {
        event.target.getComponent(cc.Button).ineractable = false;
        TransitionScene.changeScene(data, 0);
    }
    touchBack(event, data) {
        event.target.getComponent(cc.Button).ineractable = false;
        TransitionScene.changeScene(data, 0);
    }
    // update (dt) {}
}
