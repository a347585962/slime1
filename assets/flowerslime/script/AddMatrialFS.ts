import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragFS";
import AddMatrialAction from "./AddMatrialActionFS";
import MyMoveIn from "./MyMoveInFS";
import { MyCocosHelper } from "./MyCocosHelperFS";

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
export default class AddMatrial extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // if (CC_JSB && !CC_PREVIEW) {
        //     jsToCPP.getInstance().showBanner();
        //     // jsToCPP.getInstance().setEmailContentAndTitle("DIY Unicorn Cake",
        //     // "I love unicorns so much. Look at the unicorn cake I just made. so cute and sweet. There are so many unicorn decorations. Let's play together.");
        // }
        // cc.loader.loadRes("music7",cc.AudioClip,(error,resource)=>{
        //     if(error){
        //         console.log(error+"");
        //         return;
        //     }
        //     cc.loader.setAutoRelease(resource,false);
        //     let audio=cc.audioEngine.playMusic(resource,true);
        // });
        this.node.getChildByName("glue").getComponent(MyMoveIn).actionCallBack = ()=>{
            this.node.getChildByName("glue").getComponent(SpriteDrag).enabled = true;
           this.showHelp(this.node.getChildByName("glue"),this.node.getChildByName("bowl"),false);
        }
    }
    StopFinger()
    {
        let finger = this.node.getChildByName("finger");
        finger.getChildByName("chick").active = false;
        finger.stopAllActions();
        finger.active = false;
    }
    touchDown(event)
    {
        this.StopFinger();
        let _node = event.target;
        if(_node.getChildByName("shadow")){
            _node.getChildByName("shadow").active = false;
        }
    }
    touchCancle(event)
    {
        let _node = event.target;
        if(_node.getChildByName("shadow")){
            _node.getChildByName("shadow").active = true;
        }
    }
    touchEnd(event,sp:SpriteDrag)
    {
        let _node = event.target;
        sp.enabled = false;
        switch(_node.name)
        {
            case "glue":this.node.getComponent(AddMatrialAction).GlueInBowl();break;
            case "foam":this.node.getComponent(AddMatrialAction).FoamInBowl();break;
            case "color":this.node.getComponent(AddMatrialAction).ColorInBowl();break;
            case "water":this.node.getComponent(AddMatrialAction).WaterInBowl();break;
        }
    }
    showHelp(_node1:cc.Node,_node2:cc.Node,chick:boolean){
        let finger = this.node.getChildByName("finger");
        finger.active = true;
        if(chick){
            finger.getChildByName("chick").active = true;
        }
        MyCocosHelper.showHand(finger,_node1,_node1,_node2);
    }

    // update (dt) {}
}
