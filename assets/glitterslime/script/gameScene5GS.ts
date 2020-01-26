import MoveIn from "../common/Script/MoveInGS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";
import TransitionScene from "../common/Script/codebase/TransitionSceneGS";
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

    @property(cc.AudioClip)
    music:cc.AudioClip = null;
    @property(cc.Node)
    help:cc.Node[] = [];
    @property(cc.Node)
    mud:cc.Node = null;
    @property(cc.Node)
    hand0:cc.Node = null;
    @property(cc.Node)
    hand1:cc.Node = null;
    @property(cc.Node)
    hand2:cc.Node = null;
    @property(cc.Node)
    hand3:cc.Node = null;
    @property(cc.Node)
    hand4:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    private round  = -1;
    private toBig = false;
    private toSmall = false;
    private can = false;
    private num = 0;
    // onLoad () {}

    start () {
        this.initColor();
        this.hand0.getComponent(MoveIn).actionCallBack = function()
        {
            //提示
            this.help[0].active = true;
            this.help[1].active = true;
            this.help[2].active = true;
            CocosHelper.showHand(this.help[0],this.help[2],this.help[2],this.help[1]);
            //打开事件监听
            this.node.getChildByName("pinch").on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
            this.node.getChildByName("pinch").on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
            this.node.getChildByName("pinch").on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
            this.node.getChildByName("pinch").on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);
        
        }.bind(this);
    }
    touchStart(event)
    {
        //关闭提示
        this.help[0].stopAllActions();
        this.help[0].active = false;
        this.help[1].active = false;
        this.help[2].active = false;
        //
        let audioID = cc.audioEngine.play(this.music,false,0.5);
    }
    touchMove(event)
    {
        this.hand0.active = false;
        this.hand1.active = false;
        this.hand2.active = false;
        this.hand3.active = false;
        this.node.getChildByName("heart1").active = true;
        this.node.getChildByName("heart2").active = true;
        let startPos = event.getStartLocation();
        let endPos = event.getLocation();
        let len = startPos.sub(endPos).mag();
        
        if(len > 0 && len < 40)
        {
            this.round = 0;
            this.hand0.active = true;
            this.hand1.active = false;
            this.hand2.active = false;
            this.hand3.active = false;
            this.hand4.active = false;
            let scale = cc.scaleTo(0.2,1,1.05);
            let scale1 = cc.scaleTo(0.2,1,1.05);
            this.mud.runAction(scale);
            this.hand0.runAction(scale1);
        }
        else if(len >= 40 && len <=80)
        {
            this.round = 1;
            
            this.mud.scale = 0.9;
            this.hand0.active = false;
            this.hand1.active = true;
            for(let i = 0;i< 4;++i)
            {
            this.hand1.children[i].scale = 1;
            }
            this.hand2.active = false;
            this.hand3.active = false;
            this.hand4.active = false;
        }
        else if(len >80 && len <120)
        {
            this.round = 2;
            this.hand0.active = false;
            this.hand1.active = false;
            this.hand2.active = true;
            for(let i = 0;i< 4;++i)
            {
            this.hand2.children[i].scale = 1;
            }
            this.hand3.active = false;
            this.hand4.active = false;
        }
        else if(len >=120)
        {
            this.round = 3;
            this.hand0.active = false;
            this.hand1.active = false;
            this.hand2.active = false;
            this.hand3.active = true;
            this.hand4.active = false;
            for(let i = 0;i< 4;++i)
            {
            this.hand3.children[i].scale = 1;
            }
            this.toBig = true;
            this.toSmall = false;

        }
        else
        {console.log("111!!!")}
    }
    touchEnd(event)
    {
        //this.node.getChildByName("pinch").off(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
        this.node.getChildByName("heart1").active = false;
        this.node.getChildByName("heart2").active = false;
        switch(this.round)
        {
            case 1:this.handCancle(this.hand1);break;
            case 2:this.handCancle(this.hand2);break;
            case 3:this.handCancle(this.hand3);break;
            case 0:this.hand0Cancle();break;
            default:this.hand1Cancle();break;
        }
    }
    Big()
    {
        for(let i = 0;i<4;++i)
            {
                this.hand3.children[i].scale += 0.002;
                if(this.hand3.children[i].scale >=1.1)
                {
                    this.hand3.children[i].scale = 1.1;
                    this.toBig = false;
                    this.toSmall = true;
                }
            }
            this.mud.scale -= 0.02;
            if(this.mud.scale <= 0.8)
            this.mud.scale = 0.8;
    }
    Small()
    {
        for(let i = 0;i<4;++i)
            {
                this.hand3.children[i].scale -= 0.002;
                if(this.hand3.children[i].scale <=1)
                {
                    this.hand3.children[i].scale = 1;
                    this.toSmall = false;
                }
                
            }
            this.mud.scale += 0.001;
            if(this.mud.scale >= 0.9)
            this.mud.scale = 0.9;
    }
    handCancle(node:cc.Node)
    {
        this.mud.runAction(cc.scaleTo(0.3,1));
        for(let i = 0;i< 4;++i)
        {
            node.children[i].runAction(cc.scaleTo(0.3,0));
        }
        this.scheduleOnce(function(){
            node.active = false;
            this.hand0.active = true;
        }.bind(this),0.3)
        this.toSmall = false;
        this.toBig = false;
        this.num += 1;
    }
    hand0Cancle()
    {
        if(this.round != 0)
        return;
        this.mud.runAction(cc.scaleTo(0.3,1));
        let scale = cc.scaleTo(0.3,1);
        let func = cc.callFunc(function(){this.hand0.active = false;}.bind(this));
        let func1 = cc.callFunc(function(){this.hand4.active = true;}.bind(this));
        this.hand0.runAction(cc.sequence(func,func1));
        this.scheduleOnce( function()
        {
            this.hand4.active = false;
            this.hand0.active = true;
        }.bind(this),0.5);
    }
    //点击松开
    hand1Cancle()
    {
        if(this.round != -1)
        return;
        console.log("1!!!@!@");
        this.mud.runAction(cc.scaleTo(0.2,1,0.95));
        this.hand0.runAction(cc.scaleTo(0.2,1,0.95));
        let func = cc.callFunc(function(){this.hand0.active = false;}.bind(this));
        let func1 = cc.callFunc(function(){this.hand4.active = true;}.bind(this));
        this.hand0.runAction(cc.sequence(func,func1));
        this.scheduleOnce( function()
        {
            this.mud.runAction(cc.scaleTo(0.2,1,1));
        this.hand0.runAction(cc.scaleTo(0.2,1,1));
            this.hand4.active = false;
            this.hand0.active = true;
        }.bind(this),0.3);
    }
    initColor()
    {
        cc.loader.loadRes("glitterslime/pinch/"+DataConfig.getInstance().getBodyName(),cc.SpriteFrame,function(error:Error,resouce:any) {
            if(error)
            {
                console.log(error+"");
                return;
            }
            this.mud.getComponent(cc.Sprite).spriteFrame = resouce;
            cc.loader.setAutoRelease(resouce,true);
        }.bind(this));
        
       for(let i = 0 ; i < 4;++i)
        {
            cc.loader.loadRes("glitterslime/pinch/hand1/"+DataConfig.getInstance().getBodyName() + i,cc.SpriteFrame,function(error:Error,resouce:any) {
                console.log(this.hand1.children[i].name);
                if(error)
                {
                    console.log(error+"");
                    return;
                }
                this.hand1.children[i].getComponent(cc.Sprite).spriteFrame = resouce;
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        for(let i = 0 ; i < 4;++i)
        {
            cc.loader.loadRes("glitterslime/pinch/hand2/"+DataConfig.getInstance().getBodyName() + i,cc.SpriteFrame,function(error:Error,resouce:any) {
                if(error)
                {
                    console.log(error+"");
                    return;
                }
                this.hand2.children[i].getComponent(cc.Sprite).spriteFrame = resouce;
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
        for(let i = 0 ; i < 4;++i)
        {
            cc.loader.loadRes("glitterslime/pinch/hand3/"+DataConfig.getInstance().getBodyName() + i,cc.SpriteFrame,function(error:Error,resouce:any) {
                if(error)
                {
                    console.log(error+"");
                    return;
                }
                this.hand3.children[i].getComponent(cc.Sprite).spriteFrame = resouce;
                cc.loader.setAutoRelease(resouce,true);
            }.bind(this));
        }
    }
     update (dt) {
         if(this.toSmall)
         {
             this.Small();
         }
         if(this.toBig)
         {
             this.Big();
         }
         if(this.num >= 3)
            cc.find("Canvas/menu/next").active = true;
     }
}
