
import PopupComponet from "./PopupComponetGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HomeButton extends cc.Component {
    onClick() {
        
        this.node.getComponent(cc.AudioSource).play();
        // cc.loader.loadRes(`prefab/popup`, cc.Prefab, function (err, prefab) {
        //     let node = cc.instantiate(prefab);
        //     cc.find('Canvas').addChild(node);
        //     let componet = node.getComponent(PopupComponet);
        //     componet.showPopup();
        //     componet.setTip('Are you sure you want to back home?');
        //     componet.setCallback(function(){
        //         TransitionScene.changeScene('home',12);
        //     })  
        // }.bind(this)); 
        //cc.director.getScene().getChildByName("audioMusic").getComponent(cc.AudioSource).stop();;
        //返回大厅
        // if(CC_JSB){
            
        //     cc.INGAME =  (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + "SlimeMakeNew/galaxy_slime";
        //     console.log(cc.INGAME);
        //     window.require(cc.INGAME+"/src/dating.js");
           
        // }
        cc.sys.localStorage.setItem("fromHall", 10);
        cc.sys.garbageCollect();
        cc.game.restart();
    }
}
