import GameData from "./GameData";
import TransitionScene from "../common/uitls/TransitionScene_my";
import DownSubGameMG from "./DownSubGameMG";
import { CocosHelper } from "../common/uitls/CocosHelper_my";
// import TransitionScene from "../common/uitls/TransitionScene";
// TransitionScene
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
export default class gameItem extends cc.Component {
    //进入的声音资源
    @property(cc.AudioClip)
    moveAudio: cc.AudioClip = null;
    private nodeName = [ 
        "chocolate_slime", "glitter_slime","batter_slime", "rainbow_slime", "dark_slime"
    ];
    // private nodeName = [ 
    //     "chocolate_slime", "glitter_slime","batter_slime", "rainbow_slime", "dark_slime",
    //     "makeup_slime","flower_slime","crazy_slime","rainbowpoop_slime","galaxy_slime",
    //     "newVersion","mermaid_slime","succlunt_slime","craxy_emoji_slime","unicorn_slime",
    //     "floam_slime","colar_glow_slime"
    // ];
    touchButton(event){

        let touchNode = event.target;
        let btCm:cc.Button = touchNode.getComponent(cc.Button);
        if(btCm)
            btCm.interactable = false;

        cc.loader.loadRes("button_general" + "",cc.AudioClip, function (err, audio) {
            cc.audioEngine.playEffect(audio, false);
        })
        let isShowScene = false;
        let name = this.node.name;
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
        
        if(isShowScene){
            
            cc.sys.localStorage.setItem(name + "key", 10);
            return;
        }
            

        setTimeout(() => {
            if(btCm)
                btCm.interactable = true;
        }, 1000);
        cc.loader.loadRes("ingredients_fly_in.mp3",cc.AudioClip, function (err, audio) {
            cc.audioEngine.playEffect(audio, false);
        })
        //弹框
        GameData.getInstance().showPop("Coming Soon");

        // let name = this.node.name;
        // //判断是否是上架了的
        // let state:boolean = GameData.getInstance().getIsUpStoreByName(name);
        // console.log(name);
        
        // if(state){

        //     let book_bg = CocosHelper.findNode(cc.Canvas.instance.node, "book_bg");
        //     if(book_bg){
        //         let pageViewNode = book_bg.getChildByName("pageview");//CocosHelper.findNode(cc.Canvas.instance.node, "pageview");
        //         let pageView = pageViewNode.getComponent(cc.PageView);
            
        //         //记录下翻到了第几页
        //         cc.sys.localStorage.setItem("pageViewLocal", pageView.getCurrentPageIndex());
        //         ;
        //     }
            


        //     GameData.getInstance().setSelectGameName(name);
        //     this.nodeName.forEach(scenename => {
        //         if (scenename == name) {
        //             TransitionScene.changeScene(name, "ttt");
        //             return;
        //         }
        //     })
        //     TransitionScene.changeScene("LoadSubGame", "111");

           
            
        //     // DownSubGameMG.getInstance().downZip("icecream");

        // }else{
            // setTimeout(() => {
            //     if(btCm)
            //         btCm.interactable = true;
            // }, 1000);
            // let strDate:string = GameData.getInstance().getDateFromName(name);
            
            // let temp = strDate;
            // console.log(temp + "temp");
            
            // if(temp != ""){
            //     cc.loader.loadRes("ingredients_fly_in.mp3",cc.AudioClip, function (err, audio) {
            //         cc.audioEngine.playEffect(audio, false);
            //     })
            //     //弹框
            //     GameData.getInstance().showPop(temp);
            // }
            
        // }
    }

    start () {
        //new 的标识
        let gameName = this.node.name;
        let isNew = GameData.getInstance().getIsNewFromName(gameName);
        if(this.node.getChildByName("new")){
            // console.log("changechange.getChildByName(" + isNew);
            
            // this.node.getChildByName("new").active = isNew;
            // //没上架肯定就不显示标识
            // let isUpStore = GameData.getInstance().getIsUpStoreByName(gameName);
            // if(!isUpStore){

            //     this.node.getChildByName("new").active = false;

            // }
            
             //是否上架
            let isUp = GameData.getInstance().getIsUpStoreByName(gameName);
             //是否显示nmew
            let isNew = GameData.getInstance().getIsNewFromName(gameName);
            let isLock =  cc.sys.localStorage.getItem(gameName + "key");
            if(!isLock)
                isLock = 1;
             console.log(isUp + "isUp");
             console.log(isNew + "isNew");
            //上架 就显示new  玩一次之后 new没有
            if(isUp && isLock == 1){
                
                this.node.getChildByName("new").active = true;

            }else{

                this.node.getChildByName("new").active = false;

            }

        }
    }

    // update (dt) {}
}
