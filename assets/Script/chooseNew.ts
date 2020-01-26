import TransitionScene from "../common/uitls/TransitionScene_my";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelper";
import MoveIn from "../cakebatter/common/Script/MoveInCB";

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

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    @property(cc.AudioClip)
    choose: cc.AudioClip = null;


    buttonArray = ["chocolate_slime", "crazy_slime"];

    start () {

        const element = this.buttonArray[0];
        let btnNodeZero = CocosHelper.findNode(cc.Canvas.instance.node, element);

        let moveIncM = btnNodeZero.getComponent(MoveIn);
        moveIncM.actionCallBack = ()=>{

            for (let index = 0; index < this.buttonArray.length; index++) {
                const element = this.buttonArray[index];
                let btnNode = CocosHelper.findNode(cc.Canvas.instance.node, element);
    
                let logo = btnNode.getChildByName(btnNode.name + "_logo");
                logo.active = true;
                logo.scale = 0;
                let detal = index % 2 == 0 ? 1 : -1;
                logo.runAction(cc.sequence(cc.spawn(cc.rotateBy(0.5, detal * 360),cc.scaleTo(0.5, 1.0)),cc.callFunc(()=>{

                    if(detal == -1){

                        //CocosHelper.createUpDownPrompt(logo);
                        logo.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1.2, cc.v2(0, -10)),cc.moveBy(1.2 , cc.v2(0, 10)))));

                    }else{
                        logo.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1.5, 1.2),cc.scaleTo(1.5, 1.0))));

                    }

                })));
    
            }


        };
    }

    chooseItemBtn(event){

        cc.audioEngine.playEffect(this.choose, false);

        let touchNode = event.target;
        let btCm:cc.Button = touchNode.getComponent(cc.Button);
        btCm.interactable = false;

        for (let index = 0; index < this.buttonArray.length; index++) {
            const element = this.buttonArray[index];
            let btnNode = CocosHelper.findNode(cc.Canvas.instance.node, element);

            let btCmSelect:cc.Button = touchNode.getComponent(cc.Button);
            if(btCmSelect)
                btCmSelect.interactable = false;
            
            if(element != touchNode.name){

                btnNode.runAction(cc.fadeOut(1.0));


            }


        }

        touchNode.runAction(cc.sequence(cc.spawn(cc.jumpTo(1.0, cc.v2(0, -30), 50, 1), cc.scaleTo(1.0, 1.2)),cc.delayTime(1.0), cc.callFunc(()=>{


            this.goToNext(touchNode.name);


        })));

    }

    goToNext(name){
        let isShowScene = false;
        if(name == "chiristmas_slime"){
            
            TransitionScene.changeScene("mainCS", "ttt");
            isShowScene = true;
        }
        if(name == "makeup_slime"){
            
            TransitionScene.changeScene("homeSceneMS", "ttt");
            isShowScene = true;
        }
        if(name == "batter_slime"){
            
            TransitionScene.changeScene("batter_slime", "ttt");
            isShowScene = true;
        }
        if(name == "glitter_slime"){
            
            TransitionScene.changeScene("glitter_slime", "ttt");
            isShowScene = true;
        }
        if(name == "chocolate_slime"){
            
            TransitionScene.changeScene("chocolate_slime", "ttt");
            isShowScene = true;
        }
        if(name == "rainbow_slime"){
            
            TransitionScene.changeScene("rainbow_slime", "ttt");
            isShowScene = true;
        }
        if(name == "dark_slime"){
            
            TransitionScene.changeScene("dark_slime", "ttt");
            isShowScene = true;
        }
        if(name == "craxy_emoji_slime"){
            
            TransitionScene.changeScene("homeCE", "ttt");
            isShowScene = true;
        }
        if(name == "flower_slime"){
            
            TransitionScene.changeScene("homeFS", "ttt");
            isShowScene = true;
        }
        if(name == "galaxy_slime"){
            
            TransitionScene.changeScene("homeGL", "ttt");
            isShowScene = true;
        }
        if(name == "rainbowpoop_slime"){
            
            TransitionScene.changeScene("homeRP", "ttt");
            isShowScene = true;
        }
        

    }

    // update (dt) {}
}
