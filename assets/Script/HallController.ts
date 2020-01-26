import { CocosHelper } from "../common/uitls/CocosHelper_my";
import GameData from "./GameData";
import TouchMoveCard from "./TouchMoveCard";
import HttpUtils from "./HttpUtils";
import VersionMG from "./VersionMG";


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

    //进入的声音资源
    @property(cc.AudioClip)
    touchA: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private downNode : cc.Node; //下面一层
    private topNode : cc.Node;  //上面一层
    private mdNode : cc.Node;  //上面一层
    
    private nodeNameIndex = -1;
    private nodeName = [ 
        "chocolate_slime", "glitter_slime","batter_slime", "rainbow_slime", "dark_slime",
        "makeup_slime","flower_slime","crazy_slime","rainbowpoop_slime","galaxy_slime",
        "newVersion","mermaid_slime","succlunt_slime","craxy_emoji_slime","unicorn_slime",
        "floam_slime","colar_glow_slime"
    ];
    private stPos:cc.Vec2 = cc.v2();
    private order:number = 1000;
    
    start () {

        //判断弹框
        VersionMG.getInstance().calIsToPopVerDialog();

        //获取一下网络数据
       // HttpUtils.getInstance().getJsonData();

        console.log("Loading onLoad");
        cc.audioEngine.stopMusic();
        
        cc.loader.loadRes("bg", cc.AudioClip, function (err, audio) {
            
            cc.audioEngine.playMusic(audio, true);
            cc.loader.setAutoReleaseRecursively(audio, false);

        })

        let arrow_r = CocosHelper.findNode(cc.Canvas.instance.node, "arrows1");
        arrow_r.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(0, 10)), cc.moveBy(0.5, cc.v2(0, -10)))));

        let arrow_l = CocosHelper.findNode(cc.Canvas.instance.node, "arrows0");
        arrow_l.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.v2(0, -10)), cc.moveBy(0.5, cc.v2(0, 10)))));


        //显示banner
        if(CC_JSB && !CC_PREVIEW)
            jsToCPP.getInstance().showBanner();


        let pageIndex  =  cc.sys.localStorage.getItem("pageViewLocal");
        if(!pageIndex){
            pageIndex = 3;
        }
        console.log("pageViewLocal" + pageIndex);
        
        // let book_bg = CocosHelper.findNode(cc.Canvas.instance.node, "book_bg");
        // let pageViewNode = book_bg.getChildByName("pageview");//CocosHelper.findNode(cc.Canvas.instance.node, "pageview");
        // let pageView = pageViewNode.getComponent(cc.PageView);
        // // pageView.scrollToPage(pageIndex, 0.3);

        // pageView.setCurrentPageIndex(pageIndex);
    }
   
    private touchArrowBool = false;
    touchUrl(){

        if (CC_JSB&& !CC_PREVIEW) {
            if(cc.sys.platform == cc.sys.ANDROID){
                jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/");
                
            }else{
                jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
            }
        }
        cc.PageViewIndicator
    }
    private _pageIndex:number = 0;
    pageViewClick(event,coustom){
    
        var node = event.node;
        this._pageIndex = node.getComponent(cc.PageView).getCurrentPageIndex();
        cc.log("page index" + this._pageIndex);
        
        // cc.sys.localStorage.setItem("pageViewIndexState", this._pageIndex);
        if(this.touchA)
          cc.audioEngine.playEffect(this.touchA, false);

        
    }
    //点击箭头
    touchArrow(event, data){

        // if(this.touchArrowBool)
        //     return;
        
        // this.touchArrowBool = true;
        console.log(data);
        let dir = data == "down" ? 1 : -1;
        console.log(dir);
        console.log(this._pageIndex);
        let tempIndex = this._pageIndex + dir;
        //超过边界
        if(tempIndex < 0 || tempIndex > 16)
            return;

        console.log(tempIndex);
        

        let book_bg = CocosHelper.findNode(cc.Canvas.instance.node, "book_bg");
        let pageViewNode = book_bg.getChildByName("pageview");//CocosHelper.findNode(cc.Canvas.instance.node, "pageview");


        let pageView = pageViewNode.getComponent(cc.PageView);
        pageView.scrollToPage(tempIndex, 0.3);

        if(this.touchA)
            cc.audioEngine.playEffect(this.touchA, false);

        let self = this;
        // pageViewNode.runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(function () {
            
        //     self.touchArrowBool = false;

        // })));

    }

    // update (dt) {}
}
