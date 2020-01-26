import MoveIn from "../common/Script/MoveInGS";
import DataConfig from "./DataConfigGS";
import TransitionScene from "../common/Script/codebase/TransitionSceneGS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";
import IconItem from "../common/Script/IconItemGS";

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

    @property({type:Number})
    DelayTime:number = 0;
    
    @property(cc.AudioClip)
   JumpAudio:cc.AudioClip = null;
   @property(cc.AudioClip)
   ChooseAudio:cc.AudioClip = null;


   @property()
   tag:number = 0;
   //private name:string = "";
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scheduleOnce(this.Jump,this.DelayTime);
        this.scheduleOnce(function()
        {
            this.node.getComponent(MoveIn).enabled =true;
            this.node.getChildByName("Button").getComponent(cc.Button).enabled = true;

            if(this.node.parent.getComponent(cc.ScrollView).enabled == false)
                this.node.parent.getComponent(cc.ScrollView).enabled = true;
                
                let jt = this.node.parent.getChildByName("boraxParticle");
            let jt1 = this.node.parent.getChildByName("boraxParticle1");
            jt.active = true;
            jt1.active = true;
            let mid = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2))
            jt.setPosition(cc.v2(mid.x + 20, mid.y + 20));
            jt1.setPosition(cc.v2(mid.x - 20, mid.y + 10));
            
        },11);
        

    }
    
    start () {
       
    }
    Jump()
    {
        let view = cc.view.getVisibleSize();
        var jump1 = cc.jumpTo(1.1,cc.v2(view.width / 4,0),180,1);
        var jump2 = cc.jumpTo(0.55,cc.v2(view.width / 1.4,0),180,1);
        var move = cc.moveTo(0.3,cc.v2(view.width +this.node.getContentSize().width,0));
        var music = cc.callFunc(function(){let num = cc.audioEngine.play(this.JumpAudio,false,0.5)}.bind(this));
        var scale = cc.scaleTo(0.1,1,0.9);
        var scale00 =cc.scaleTo(0.1,1,1);
        var scale0 = cc.scaleTo(0.11,0.82,1);
        var scale1 = cc.scaleTo(0.1,1,0.86);
        var scale2 = cc.scaleTo(0.09,0.88,1);
        var scale3 = cc.scaleTo(0.08,1,0.89);
        var scale4 = cc.scaleTo(0.07,1);
        var delay = cc.delayTime(0.5);
        var delay1 = cc.delayTime(0.2);
        let self = this;
        var seq = cc.sequence(jump1,scale,scale00,delay1,music,jump2,scale0,scale1,scale2,scale3,
            scale4,delay,move,cc.callFunc(function () {
                console.log("IconItem");
                let item = self.node.getComponent(IconItem);
                if(item)
                {
                    item.init();
                }
                    

            }),delay);
        this.node.runAction(seq);
        
        
    };
    choose(event,data)
    {
        
        for(let i = 0;i<this.node.parent.children.length;++i)
        {
            let child = this.node.parent.children;
            let Button = child[i].getChildByName("Button");
            //点击一次之后 设置按钮不可点击
            if(Button){
                Button.getComponent(cc.Button).interactable = false;
            }

            if(child[i].getComponent("chooseGS").tag != data)
            {


                
                let moveUp = cc.moveBy(0.7,cc.v2(0,cc.view.getVisibleSize().height));
                child[i].runAction(moveUp);
            }
            else
            {
                DataConfig.getInstance().setTag(i);
                switch(i)
                {
                    case 0:DataConfig.getInstance().setName("bowl_blue_stir");DataConfig.getInstance().setBodyName("blue");break;
                    case 1:DataConfig.getInstance().setName("bowl_cyan_stir");DataConfig.getInstance().setBodyName("cyan");break;
                    case 2:DataConfig.getInstance().setName("bowl_green_stir");DataConfig.getInstance().setBodyName("green");break;
                    case 3:DataConfig.getInstance().setName("bowl_purple_stir");DataConfig.getInstance().setBodyName("purple");break;
                    case 4:DataConfig.getInstance().setName("bowl_red_stir");DataConfig.getInstance().setBodyName("red");break;
                    case 5:DataConfig.getInstance().setName("bowl_yellow_stir");DataConfig.getInstance().setBodyName("yellow");break;
                }

                this.scheduleOnce(function()
                {
                    var midpos = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height/2));
                        var jumpToMid = cc.jumpTo(1, midpos, 150, 1);
                        var scale = cc.scaleTo(0.3, 1, 0.9);
                        var scale00 = cc.scaleTo(0.3, 1, 1);
                        var scale0 = cc.scaleTo(0.11, 0.82, 1);
                        var scale1 = cc.scaleTo(0.1, 1, 0.86);
                        var scale2 = cc.scaleTo(0.09, 0.88, 1);
                        var scale3 = cc.scaleTo(0.08, 1, 0.89);
                        var scale4 = cc.scaleTo(0.07, 1);
                        var func1 = cc.callFunc(function()
                        {
                            let music = cc.audioEngine.play(this.ChooseAudio,false,0.5);
                            this.node.getChildByName("star").active = true;
                        }.bind(this));
                        let delay = cc.delayTime(1.5);
                        var func = cc.callFunc(function(){
                            TransitionScene.changeScene("gameSceneGS", "111");
                        });
                        var seq = cc.sequence(scale, scale00, jumpToMid, scale0, scale1, scale2, scale3,
                            scale4,func1,delay,func);
                        child[i].runAction(seq);
                },1);
            }
        }
    }
    // update (dt) {}
}
