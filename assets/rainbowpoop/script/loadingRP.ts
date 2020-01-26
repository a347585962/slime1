import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperRP";


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
export default class loading extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        if (CC_JSB && !CC_PREVIEW) {
            jsToCPP.getInstance().showBanner();
            jsToCPP.getInstance().setEmailContentAndTitle("Galaxy Slime", "Here comes the trendy galaxy slime with so many cute galaxy stickers. Let's have galaxy slime fun together.");
        }
        cc.sys.localStorage.setItem("isDone", "");

        setTimeout(() => {
            cc.director.loadScene("homeRP");
        }, 8000);
      
        let android = CocosHelper.findNode(cc.Canvas.instance.node, "android");
        android.active = true;
        let nodeChi = android.getChildByName("logo");
        if(nodeChi){
            var rotate = nodeChi.getComponent("MoveIn");
            
            if(rotate)
                rotate.actionCallBack = function () {
                    
                    let food1 = android.getChildByName("food1");
                    let food2 = android.getChildByName("food2");
                    let food3 = android.getChildByName("food3");


                    this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
                        food1.active = true;
                    }),cc.delayTime(0.25), cc.callFunc(function () {
                        food2.active = true;
                    }),cc.delayTime(0.25), cc.callFunc(function () {
                        food3.active = true;
                    }),cc.delayTime(0.25)))


                }  
        }
        
    //     else {
    //         let android = CocosHelper.findNode(cc.Canvas.instance.node, "ios");
    //         android.active = true;
    //         let nodeChi = android.getChildByName("logo");
    //         let kids2 = android.getChildByName("kids2");
    //         let kids1 = android.getChildByName("kids1");
    //         let kids0 = android.getChildByName("kids0");

    //         if(nodeChi){
    //             var rotate = nodeChi.getComponent("MoveIn");
                

    //                     setTimeout(function () {
    //                         kids2.active = false;
    //                         kids1.active = true;
    //                         kids0.active = false;
    //                     }, 1000);
    //                     setTimeout(function () {
    //                         kids2.active = true;
    //                         kids1.active = false;
    //                         kids0.active = false;
    //                     }, 2000);
    //                     setTimeout(function () {
    //                         kids2.active = false;
    //                         kids1.active = false;
    //                         kids0.active = true;
    //                     }, 3000);
    //             if(rotate)
    //                 rotate.actionCallBack = function () {
                        
    //                     let loading = CocosHelper.findNode(cc.Canvas.instance.node, "loading");
    //                     loading.active = true;

    //                     let dianIndex = 0;

    //                     loading.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5),cc.callFunc(function () {
    //                         dianIndex = dianIndex + 1;
    //                         for (let index = 1; index < 4; index++) {
    //                             let dian = loading.getChildByName("dian" + index);
    //                             if(index <= dianIndex % 4 + 1){
    //                                 dian.active = true;
    //                             }else{
    //                                 dian.active = false;
    //                             }

    //                         }

                
    //                     }))));

    //                 } 
    //         }
    //     }
    }

    // update (dt) {}
}
