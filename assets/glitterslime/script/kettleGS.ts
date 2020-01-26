import MoveIn from "../common/Script/MoveInGS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";

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
    addWater:cc.AudioClip = null;
    @property(cc.AudioClip)
    spoon:cc.AudioClip = null;
    @property(cc.AudioClip)
    win:cc.AudioClip = null;
    private audioManger =  -1;
    private audioManger1 = -1;
    private stop:boolean = false;
    private Volume:number = 1.0;
    zeropos:cc.Vec2 = cc.v2(-354,-52);
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    touchStart()
    {
        cc.find("Canvas/finger").stopAllActions();
        cc.find("Canvas/finger").active = false;
    }
    spoonTouchStart(event)
    {
        cc.find("Canvas/finger").stopAllActions();
        cc.find("Canvas/finger").active = false;
        let bowl = cc.find("Canvas/bowl/node/star3");
        bowl.active = true;
        this.audioManger1= cc.audioEngine.play(this.spoon,true,1);
    };
    spoonTouchEnd(event, drag)
    {
        //drag.enabled = false;
        cc.find("Canvas/bowl/node").stopAllActions();
        cc.audioEngine.stop(this.audioManger1);
       
    };
    spoonTouchStartScene2(event, drag:SpriteDrag)
    {
        // drag.enabled = false;
        let heart = cc.find("Canvas/cup/heart1");
        heart.active = true;
        this.audioManger1= cc.audioEngine.play(this.spoon,true,1);
    };
    spoonTouchEndScene2(event, drag)  
    {
        // drag.enabled = false;
        let heart = cc.find("Canvas/cup/heart1");
        heart.active = false;
        cc.audioEngine.stop(this.audioManger1);
    };
    touchEnd(event)
    {
        this.move();
        this.waterFadeIn();
    };
    touchEndScene2(event, drag){
        drag.enabled = false;
        this.node.getComponent(cc.Animation).play();
        this.scheduleOnce(function()
        {
            this.audioManger = cc.audioEngine.play(this.addWater,true,1);
            this.node.getChildByName("water1").active = false;
            this.node.getChildByName("water2").active = true;
            this.node.parent.getChildByName("cup0").zIndex = 0;
            this.node.zIndex = 1;
            this.node.parent.getChildByName("cup1").zIndex = 2;
        },1);
        this.scheduleOnce(function()
        {
            this.node.getChildByName("water2").runAction(cc.fadeOut(1.0));
            let cup_water = cc.find("Canvas/cup").getChildByName("stir").getChildByName("cup_water");
            cup_water.runAction(cc.fadeIn(1.0));
        },1.5);
        this.scheduleOnce(function(){
            cc.audioEngine.stop(this.audioManger);
            let move = cc.moveBy(0.5,cc.v2(cc.view.getVisibleSize().width,0));
            let rot = cc.rotateTo(0.2,0);
            let seq = cc.sequence(rot,move);
            this.node.runAction(seq);
        },4);
        this.scheduleOnce(function(){
            let spoon3 = cc.find("Canvas/cup").getChildByName("spoon3");
            spoon3.getComponent(MoveIn).enabled = true;
        },5);
    };
   move()
   {
    let bowl = cc.find("Canvas/bowl");
    this.node.getComponent(SpriteDrag).enabled = false;
    //this.node.getChildByName("particle").active = true;
    //this.node.getComponent(cc.Animation).play();
    this.node.getChildByName("water_shadow").active = false;
    
    let move1 = cc.moveTo(0.7,cc.v2(bowl.position.x + 50,bowl.position.y+bowl.getContentSize().height/2));
    let rot = cc.rotateTo(0.7,-110);
    let func = cc.callFunc(function(){
        this.node.getChildByName("particle").active = true;
        this.node.getChildByName("water1").active = false;
        this.node.getChildByName("water2").active = true;
        this.node.getChildByName("water2").runAction(cc.fadeOut(1.0));
        this.scheduleOnce(function()
        {this.audioManger = cc.audioEngine.play(this.addWater,true,1);}.bind(this),0.2);
        
    }.bind(this));
    let move2 = cc.moveBy(1,cc.v2(0,-70));
    let move3 = cc.moveBy(1,cc.v2(0,70));
    let seq = cc.sequence(rot,func,move2,move3);
    this.node.runAction(move1);
    this.node.runAction(seq);
   }
   waterFadeIn()
   {
    let water = cc.find("Canvas/bowl/node/water");
    water.scale = 0.5;
    let fadein = cc.fadeIn(1.0);
    let scaleto = cc.scaleTo(2,1.0);
    let seq = cc.sequence(fadein,scaleto);
    water.runAction(seq);
   this.scheduleOnce(
        function () {
            this.node.getChildByName("particle").active = false;
            this.stop = true;
            let roa = cc.rotateTo(0.8,0);
            let move = cc.moveBy(0.8,cc.v2(cc.view.getVisibleSize().width,0));
            let func = cc.callFunc(function(){
                let spoon = cc.find("Canvas/spoon0");
                spoon.getComponent(MoveIn).enabled = true;
            }.bind(this));
            let seq = cc.sequence(roa,move,func);
            this.node.runAction(seq);

        },4
    );
   }
   SceneEnd()
   {
       cc.audioEngine.stop(this.audioManger1);
       let bowl = cc.find("Canvas/bowl/node");
       bowl.getChildByName("star3").active = false;
       let audioId = cc.audioEngine.play(this.win,false,0.5);
       cc.find("Canvas/finish").active = true;
   }
   Scene2End()
   {
        cc.audioEngine.stop(this.audioManger1);
       let bowl = cc.find("Canvas/cup");
       bowl.getChildByName("heart1").active = false;
       let audioId = cc.audioEngine.play(this.win,false,0.5);
       bowl.getChildByName("star").active = true;
   }
    update (dt) {
        if(this.stop)
        {
            this.Volume -= dt;
            if(this.Volume <= 0)
            {
                cc.audioEngine.stop(this.audioManger);
                return;
            }
            
            cc.audioEngine.setVolume(this.audioManger,this.Volume);

        }
    }
}
