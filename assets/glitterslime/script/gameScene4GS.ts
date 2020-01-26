import MoveIn from "../common/Script/MoveInGS";
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

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    @property({type:MoveIn})
    mudMoveIn:MoveIn = null;
    @property(cc.Node)
    finger:cc.Node = null;
    @property(cc.Node)
    hand:cc.Node = null;
    @property(cc.Prefab)
    hole:cc.Prefab[] = [];
    @property(cc.AudioClip)
    music:cc.AudioClip = null;
    private num = 0;
    // onLoad () {}

    start () {
       
        this.mudMoveIn.actionCallBack = function()
        {
            this.finger.active = true;
            this.mudMoveIn.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
            this.mudMoveIn.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
            this.mudMoveIn.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);
        }.bind(this);
        this.InitColor();
    }
    touchStart(Event)
    {
        this.hand.stopAllActions();
        this.finger.active = false;
        let handPos = this.node.convertToNodeSpaceAR(Event.getLocation());
        let move = cc.moveTo(0.3,handPos);
        let func = cc.callFunc(function()
        {
            let audioID = cc.audioEngine.play(this.music,false,0.5);
            let pos = this.mudMoveIn.node.convertToNodeSpaceAR(Event.getLocation());
        this.addHole(pos);
        }.bind(this));
        let delay = cc.delayTime(0.1);
        let moveBack = cc.moveBy(0.7,cc.v2(0,100));
        
        let seq = cc.sequence(move,func,delay,moveBack);
        this.hand.runAction(seq);
    }
    touchEnd(Event)
    {}
    addHole(pos)
    {
        let rand = Math.floor(Math.random() * 2);
        let hole = cc.instantiate(this.hole[rand]);
        for(let i = 0;i < rand + 2;++i)
        {
            cc.loader.loadRes("glitterslime/hole/"+DataConfig.getInstance().getBodyName(),cc.SpriteFrame,function(error:Error,resouce:any)
            {
                if(error)
                {
                    console.log(error+"");
                    return;
                }
                hole.children[i].getComponent(cc.Sprite).spriteFrame = resouce;
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this))
        }
        hole.setPosition(pos);
        this.mudMoveIn.node.addChild(hole);
        
        this.num += 1;
    }
    InitColor()
    {
        cc.loader.loadRes("glitterslime/pinch/"+DataConfig.getInstance().getBodyName(),cc.SpriteFrame,function(error:Error,resouce:any) {
            if(error)
            {
                console.log(error+"");
                return;
            }
            this.mudMoveIn.node.getChildByName("mud").getComponent(cc.Sprite).spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));
    }
    update (dt) {
        if(this.num >= 5)
        {
            this.node.getChildByName("star").active = true;
            cc.find("Canvas/menu/next").active = true;
        }
    }
}
