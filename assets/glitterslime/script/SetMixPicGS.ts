import MixComponent from "../common/Script/CombinedComponent/MixComponentGS";
import DataConfig from "./DataConfigGS";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
export enum Choose{
    left,
    right,
    up,
    down,
};
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property()
    mixPaths:string = "";
    @property({type:cc.Enum(Choose)})
    choose:Choose = Choose.left;
    @property({tooltip:"效果时间",visible(){return this.choose == Choose.left;}})
    backDuring:number = 0.4;

    start() {
        let pic = this.node.getChildByName("bowl").getComponent(MixComponent);

        //.mixPaths;
        let spic = [];
        if (DataConfig.getInstance().getTag() == 0) {
            for (let i = 1; i < 6; ++i) {
                spic.push("glitterslime/bowl_blue_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        else if (DataConfig.getInstance().getTag() == 1) {
            for (let i = 1; i < 7; ++i) {
                spic.push("glitterslime/bowl_cyan_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        else if (DataConfig.getInstance().getTag() == 2) {
            for (let i = 1; i < 7; ++i) {
                spic.push("glitterslime/bowl_green_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        else if (DataConfig.getInstance().getTag() == 3) {
            for (let i = 1; i < 7; ++i) {
                spic.push("glitterslime/bowl_purple_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        else if (DataConfig.getInstance().getTag() == 4) {
            for (let i = 1; i < 7; ++i) {
                spic.push("glitterslime/bowl_red_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        else if (DataConfig.getInstance().getTag() == 5) {
            for (let i = 1; i < 7; ++i) {
                spic.push("glitterslime/bowl_yellow_stir" + i)
            }
            cc.loader.loadResArray(spic, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                pic.setMixPahth(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));  
        }

    }

    // update (dt) {}
}
