import DataConfig from "./DataConfigCB";
import TransitionScene from "../common/Script/codebase/TransitionSceneCB";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperCB";

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
export default class ChooseController extends cc.Component {
    private positions = null;
    onLoad() {
        this.init(); 
    }
    init() {
        // this.positions = [
        //     cc.v2(121, 0),
        //     cc.v2(403, 0),
        //     cc.v2(685, 0),
        //     cc.v2(967, 0),
        //     cc.v2(1249, 0)
        // ]
        // let nodes = cc.find('Canvas/beadScrollView/view/content');
        // let count = nodes.childrenCount;
        // for (let i = 0; i < count; i++){
        //     let n = count - i-1;
        //     let bezier = [cc.v2(0, this.node.height / 2), cc.v2(300, this.node.height / 2), cc.v2(500, 0)];
        //     // cc.log(nodes.children[i - 1]);
        //     nodes.children[i].runAction(cc.sequence(
        //         cc.delayTime(0.5 * n),
        //         cc.bezierTo(1, bezier),
        //         cc.callFunc(function () {
        //             cc.find('Canvas/beadScrollView').getComponent(cc.AudioSource).play();
        //         }.bind(this)),
        //         cc.moveTo(0.5, this.positions[i]),
        //         cc.callFunc(function () {
        //             nodes.children[i].getComponent(cc.Button).interactable = true;
        //         }.bind(this))
        //     ))
        // }
        
        

    }
    foamClick(event, data) {
        DataConfig.getInstance().setFoam(event.target.name);
        DataConfig.getInstance().setIndex(data);
        //cc.find('Canvas/beadScrollView').getComponent(cc.ScrollView).scrollToLeft();
        let array = ["foam3", "foam9"];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
            if(element != event.target.name){

                let nodet = CocosHelper.findNode(cc.Canvas.instance.node, element);
                nodet.runAction(cc.fadeOut(0.5));
            }

        }

        event.target.runAction(cc.sequence(
            cc.spawn(cc.scaleTo(1, 1.1),cc.moveTo(1,cc.v2(0, 0))),
            cc.callFunc(function () {
                this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
                this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
            }.bind(this)),
            cc.delayTime(0.5),
            cc.callFunc(function () {
                TransitionScene.changeScene('stickBeadCB');
            }.bind(this))
        ))


        // cc.find('Canvas/beadScrollView').getComponent(cc.ScrollView).enabled = false;
        // let nodes = cc.find('Canvas/beadScrollView/view/content');
        // let pos = cc.find('Canvas/beadScrollView/view/content').convertToNodeSpaceAR(cc.v2(480, 320));
        // cc.log(pos);
        // nodes.children.forEach(child => {
        //     child.getComponent(cc.Button).interactable = false;
        //     if (child.name == event.target.name) {
        //         child.active = true;
        //         child.runAction(cc.sequence(
        //             cc.spawn(cc.scaleTo(1, 1.1),cc.moveTo(1,pos)),
        //             cc.callFunc(function () {
        //                 this.node.getChildByName('finish').getComponent(cc.ParticleSystem).resetSystem();
        //                 this.node.getChildByName('finish').getComponent(cc.AudioSource).play();
        //             }.bind(this)),
        //             cc.delayTime(0.5),
        //             cc.callFunc(function () {
        //                 TransitionScene.changeScene('stickBeadCB');
        //             }.bind(this))
        //         ))
        //     } else {
        //         child.active = false;
        //     }
        // })
    }
}
