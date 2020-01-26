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
export default class nice extends cc.Component {

    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
   static addNode(){
        let n  = new cc.Node();
        n.name = "nice1";
        n.setPosition(cc.v2(0,230))
        n.angle = 0;
        n.addComponent(cc.Sprite);
        cc.Canvas.instance.node.addChild(n);
        let n1  = new cc.Node();
        n1.name = "nice2";
        n1.setPosition(cc.v2(230,200))
        n1.angle = -25;
        n1.addComponent(cc.Sprite);
        cc.Canvas.instance.node.addChild(n1);
        let n2  = new cc.Node();
        n2.name = "nice3";
        n2.setPosition(cc.v2(-230,200))
        n2.angle = 25;
        n2.addComponent(cc.Sprite);
        cc.Canvas.instance.node.addChild(n2);

    }
    static addNice(tim){
        this.addNode();
        let url: string[] = [];
        url.push("Canvas/nice1");
        url.push("Canvas/nice2");
        url.push("Canvas/nice3");
        let picUrl = ["flowerslime/nice_","flowerslime/good_","flowerslime/welldone_"];
        let soundUrdl = ["nice","good","welldone"];
        let node = cc.find(url[Math.floor(Math.random() * 3)])
        node.scale = 0;

        let num = Math.floor(Math.random() * 3);
        console.log("num" + num)
        cc.loader.loadRes(picUrl[num],cc.SpriteFrame,(error,resource)=>{
            if(error){
                console.log(error+"");
                return;
            }
            cc.loader.setAutoRelease(resource,true)
            node.getComponent(cc.Sprite).spriteFrame = resource

        });
        
        let scale = cc.scaleTo(0.5, 0.8);
        let fun = cc.callFunc(function () {
            cc.loader.loadRes(soundUrdl[num],cc.AudioClip,(error,resource)=>{
                if(error){
                    console.log(error+"");
                    return;
                }
                cc.loader.setAutoRelease(resource,true)
                let audio = cc.audioEngine.play(resource, false, 1)
            });
        }.bind(this))

        let fun1 = cc.callFunc(function () {
            node.getComponent(cc.Sprite).spriteFrame = null;
        });
        node.runAction(cc.sequence(cc.spawn(scale, fun), cc.delayTime(tim), fun1));
    }

    // update (dt) {}
}
