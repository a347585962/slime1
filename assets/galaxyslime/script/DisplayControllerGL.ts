import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";
import DataConfig from "./DataConfigGL";
import showLaoding from "../common/Script/ads/showLaodingGL";



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
export default class DisplayController extends cc.Component {
    n: number = 0;
    pos: cc.Vec2 = null;
    texture: cc.RenderTexture = null;
    onLoad() {
        let foods = DataConfig.getInstance().getFoodData();
        let length = foods.length;
        let m = length - 1;
        if (DataConfig.getInstance().getChangeIndex()!=null)
        {
            m = DataConfig.getInstance().getChangeIndex();
            console.log('mmmm' + m);
        }
        for (let i = 0; i < length; i++){
            CocosHelper.getImage(foods[i].name).then((texture: cc.RenderTexture) => {
                if (texture) {
                    let n = i % 9;
                   
                    if (i == m) {
                        cc.find(`Canvas/guizi/slimes/${n}/food`).active = false;
                    } else {
                        cc.find(`Canvas/guizi/slimes/${n}/food`).active = true;  
                    }
                    cc.find(`Canvas/guizi/slimes/${n}/plus`).active = false;
                    cc.find(`Canvas/guizi/slimes/${n}/food`).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                    cc.find(`Canvas/guizi/slimes/${n}/food/btn`).getComponent(cc.Button).clickEvents[0].customEventData = foods[i].index;
                }
                
            })
        }
        let tex = DataConfig.getInstance().getTexture();
        if (tex) {
            cc.find('Canvas/food').active = true;
            cc.find('Canvas/bg').getComponent(cc.AudioSource).play();
            let node = new cc.Node();
            node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            cc.find('Canvas/food').addChild(node);
            node.setScale(0);
            let foods = DataConfig.getInstance().getFoodData();
            let length = foods.length;
            let index = DataConfig.getInstance().getChangeIndex();
            if (index!=null) {
                this.n = index% 9;
                
            } else {
                this.n = (length - 1) % 9;
            }
           
            this.pos = cc.find('Canvas/food').convertToNodeSpaceAR(cc.find(`Canvas/guizi/slimes/${this.n}`).convertToWorldSpaceAR(cc.v2(0, 0)));
            cc.find('Canvas/food').runAction(cc.sequence(
                cc.delayTime(1),
                cc.callFunc(function () {
                    node.runAction(cc.scaleTo(1, 1));
                    DataConfig.getInstance().setChangeIndex(null);
                    console.log('aaaaaaa' + '    ' + this.n);
                }.bind(this)),
                cc.delayTime(3),
                cc.callFunc(function () {
                    cc.find('Canvas/food/light').active = false;
                    
                }.bind(this)),
                cc.spawn(cc.moveTo(1, this.pos), cc.scaleTo(1, 0)),
                cc.callFunc(function () {
                    cc.find(`Canvas/guizi/slimes/${this.n}/food`).active = true;
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));
                }.bind(this))
            ))
            
        } 

    }
    showFoods() {
    }
    enterNextScence() {
        cc.find('Canvas').getComponent(cc.AudioSource).play();
        cc.director.loadScene('makeSlimeGL');
    }
    enterHomeScence() {
        let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
        btn_next.active = false;
        showLaoding.getInstance().loadingDoneCallback = function () {
            showLaoding.getInstance().loadingDoneCallback = null;
            let foods = DataConfig.getInstance().getFoodData();
            let length = foods.length;
            for (let i = 0; i < (9 - length); i++){
                cc.find(`Canvas/guizi/slimes/${length + i}/plus`).active = true;
                cc.find(`Canvas/guizi/slimes/${length + i}/plus/plus`).runAction(cc.sequence(
                    cc.delayTime(1+1.8*i),
                    cc.scaleTo(0.2, 1.1),
                    cc.scaleTo(0.2, 1),
                    cc.scaleTo(0.2, 1.1),
                    cc.scaleTo(0.2, 1)
                ))
            }
        }.bind(this);
        showLaoding.getInstance().showAds(false);
    }
}
