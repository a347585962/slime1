import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import DataConfig from "./DataConfigGL";
import PopupComponet from "./PopupComponetGL";

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
export default class CellClick extends cc.Component {
    
    cellClick(event, data) {
        let node = event.target;
        node.getComponent(cc.Button).interactable = false;
        if (node.parent.active) {
            cc.find('Canvas').getComponent(cc.AudioSource).play();
            node.parent.stopAllActions();
            node.parent.angle = 0;
            node.parent.runAction(cc.sequence(
                cc.scaleBy(0.5, 1.1),
                cc.scaleBy(0.5, 0.9),
                cc.callFunc(function () {
                     cc.loader.loadRes(`galaxyslime/prefab/popup`, cc.Prefab, function (err, prefab) {
                        let node = cc.instantiate(prefab);
                        cc.find('Canvas').addChild(node);
                        let componet = node.getComponent(PopupComponet);
                        componet.showPopup();
                        componet.setTip('Redo?');
                         componet.setCallback(function () {
                             console.log('btn'+data);
                             DataConfig.getInstance().setChangeIndex(parseInt(data));
                             //cc.loader.releaseAll();
                            TransitionScene.changeScene('makeSlimeGL');
                        })  
                    }.bind(this)); 
                   
                }.bind(this)),
                cc.delayTime(0.5),
                cc.callFunc(function () {
                    node.getComponent(cc.Button).interactable = true;
                }.bind(this))
            ))
        } 
    }
}
