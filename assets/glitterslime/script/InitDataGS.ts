import DataConfig from "./DataConfigGS";
import MixComponent from "../common/Script/CombinedComponent/MixComponentGS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";
import MoveIn from "../common/Script/MoveInGS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";
import RewardManager from "../common/Script/RewardManagerGS";

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

    @property({ tooltip: "图片数量" })
    picNum: number = 0;
    @property({ type: MixComponent })
    mixCom: MixComponent = null;
    @property({ type: cc.Sprite, tooltip: "初始颜色节点" })
    initNodeColor: cc.Sprite = null;
    // LIFE-CYCLE CALLBACKS:
    private myPic: cc.SpriteFrame[] = [];
    // onLoad () {}
    @property({ type: SpriteDrag, tooltip: "moveIn后需要开启的节点" })
    afterMoveIn: SpriteDrag[] = [];
    @property({ type: MoveIn, tooltip: "moveIn后需要开启的节点" })
    MoveIn: MoveIn = null;
    @property(cc.Node)
    bottle: cc.Node = null;
    @property(cc.AudioClip)
    bgAudio: cc.AudioClip = null;
    @property(cc.AudioClip)
    buttonAudio: cc.AudioClip = null;
    @property(cc.Node)
    figer: cc.Node = null;

    start() {
        
        if (this.initNodeColor != null) {
            this.SetInitNode();
        }
        if (this.bottle != null) {
            this.SetBottleColor();
        }
        if (this.picNum != 0) {
            this.setStirPic();
        }
        if (this.afterMoveIn) {
            this.OpenSpriteDrag();
        }
        if(this.MoveIn)
        {
            this.SetFinger();
        }
        //let number = cc.audioEngine.play(this.bgAudio, true, 0.5);
         
    }
  //chun
    SetFinger()
    {
        this.MoveIn.actionCallBack = function()
        {
            this.figer.active = true;
            this.figer.setPosition(cc.find("Canvas/node3").getPosition());
            CocosHelper.showHand(this.figer,cc.find("Canvas/node3"),cc.find("Canvas/node2"),cc.find("Canvas/node1"));
        }.bind(this);
    }
    //设置搅动图片
    setStirPic() {
        for (var i = 1; i < this.picNum + 1; ++i) {
            cc.loader.loadRes("glitterslime/" + DataConfig.getInstance().getName() + i, cc.SpriteFrame, function (error: Error, resouce: any) {
                if (error) {
                    console.log(error + "");
                    return;
                }
                this.myPic.push(resouce);
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        this.mixCom.setMixPahth(this.myPic);
    }
    //碗中初始化图片
    SetInitNode() {
        cc.loader.loadRes("glitterslime/" +DataConfig.getInstance().getName() + 0, cc.SpriteFrame, function (error: Error, resouce: any) {
            if (error) {
                console.log(error + "");
                return;
            }
            this.initNodeColor.spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));
    }
    //打开SpriteDrag节点
    OpenSpriteDrag() {
        for (let n of this.afterMoveIn) {
            if (n.getComponent(MoveIn)) {
                let moveInCm = n.getComponent(MoveIn);
                moveInCm.actionCallBack = function () {
                    n.getComponent(SpriteDrag).enabled = true;
                    if (n.node.name == "bottle"||(n.node.name == "kettle"&&n.node.parent.name != "cup")||n.node.name == "spoon0") {
                        let pos = n.node.convertToWorldSpaceAR(cc.v2(-480, -320));
                        let finger = cc.find("Canvas/finger");
                        finger.active = true;
                        finger.setPosition(pos);
                        CocosHelper.showHand(finger, n.node, n.node, cc.find("Canvas/bowl"));
                    }
                    if(n.node.name == "kettle"&&n.node.parent.name == "cup")
                    {
                        let pos = n.node.convertToWorldSpaceAR(cc.v2(-480, -320));
                        let finger = cc.find("Canvas/finger");
                        finger.active = true;
                        finger.setPosition(pos);
                        CocosHelper.showHand(finger, n.node, n.node, cc.find("Canvas/cup"));
                    }
                    if (n.node.name == "borax_fall") {
                        let pos = n.node.convertToWorldSpaceAR(cc.v2(-480, -320));
                        let finger = cc.find("Canvas/finger");
                        finger.active = true;
                        finger.setPosition(pos);
                        CocosHelper.showHand(finger, n.node, n.node, cc.find("Canvas/scoop0"));
                    }
                    if (n.node.name == "cup") {
                        let pos = n.node.convertToWorldSpaceAR(cc.v2(-480, -320));
                        let finger = cc.find("Canvas/finger");
                        finger.active = true;
                        finger.setPosition(pos);
                        CocosHelper.showHand(finger, n.node, n.node, cc.find("Canvas/bowl"));
                    }
                    if (n.node.name == "spoon3") {
                        n.node.runAction(cc.moveBy(0.2,cc.v2(0,-193)));
                    }
                    

                }.bind(this);

            }
            continue;
        }
    }
    //设置瓶子颜色
    SetBottleColor() {
        let color = this.bottle.getChildByName("color").getComponent(cc.Sprite);
        let color_ = this.bottle.getChildByName("color_").getComponent(cc.Sprite);
        let mud = this.bottle.parent.getChildByName("mud").getComponent(cc.Sprite);

        cc.loader.loadRes("glitterslime/" +DataConfig.getInstance().getBodyName(), cc.SpriteFrame, function (error: Error, resouce: any) {
            if (error) {
                console.log(error + "")
                return;
            }
            color.spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));
        cc.loader.loadRes("glitterslime/" +DataConfig.getInstance().getBodyName() + 0, cc.SpriteFrame, function (error: Error, resouce: any) {
            if (error) {
                console.log(error + "")
                return;
            }
            mud.spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));
        cc.loader.loadRes("glitterslime/" +DataConfig.getInstance().getBodyName() + "_", cc.SpriteFrame, function (error: Error, resouce: any) {
            if (error) {
                console.log(error + "")
                return;
            }
            color_.spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));

    };
    homeButtonDown() {
        let number = cc.audioEngine.play(this.buttonAudio, false, 0.5);
    }
    moreGameButtonDown() {
        let number = cc.audioEngine.play(this.buttonAudio, false, 0.5);
    }

    //关闭箭头
    flaseParticle() {
        this.node.getChildByName("bottle").getChildByName("boraxParticle").active = false;
        this.node.getChildByName("bottle").getChildByName("boraxParticle1").active = false;
        cc.find("Canvas/finger").stopAllActions();
        cc.find("Canvas/finger").active = false;
    }

    // update (dt) {}
}
