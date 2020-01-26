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
import SubgameManager = require("./SubgameManager");
@ccclass
export default class GameData{

    private static _instance: any;
    public static getInstance(): GameData {
        if (GameData._instance == null)
            GameData._instance = new GameData();
        return GameData._instance;
    }
    //
    private mapGameDataItems = new Map<string, GameItem>();
    
    //赋值 传入一个json对象
    initData(object:any){

        let GameName:string = object.GameName;
        let isNew:boolean = object.isNew == "new" ? true : false;
        let Index:number = Number(object.Index);
        let UpdateDate:string = object.UpdateDate;
        let isUpStore:boolean = object.isUpStore == "yes" ? true : false;
        let item:GameItem = new GameItem(GameName, isNew, Index, UpdateDate,isUpStore);
        console.log(GameName + "--" + isNew + "--" + Index + "---" + UpdateDate + isUpStore);
        
        //设定键值对
        this.mapGameDataItems.set(GameName, item);
    }
    clearData(){

        this.mapGameDataItems.clear();

    }
    //根据名字 获取索引值
    getIndexFromName(gameName:string){
        let item = this.mapGameDataItems.get(gameName);
        let re_index = 0;
        if(item){
            re_index = item.Index;
        }
        return re_index;
    }

    /** 获取是否上架 */
    getIsUpStoreByName(gameName:string):boolean{
        let item = this.mapGameDataItems.get(gameName);
        let isNew = false;
        if(item){
            isNew = item.isUpStore;
        }
        return isNew;
    }

    getIsNewFromName(gameName:string):boolean{
        console.log("getIsNewFromName" + gameName);
        let item = this.mapGameDataItems.get(gameName);
        console.log("getIsNewFromName" + item);
        
        let isNew = false;
        if(item){
            isNew = item.isNew;
        }

        console.log("getIsNewFromName" + isNew);
        
        //如果子游戏已经下载  则不显示new
        if(SubgameManager.isSubgameDownLoad(gameName))
            isNew = false;

        return isNew;
    }
    //获取显示词语
    getDateFromName(gameName:string):string{
        let item = this.mapGameDataItems.get(gameName);
        let data = "";
        if(item){
            data = item.UpdateDate;
        }
        return data;
    }

    //根据索引获取名字
    getGameNameFormIndex(index):string{
        let gameName = "";
        this.mapGameDataItems.forEach(element => {
            console.log(element.Index + "---" + index);
            
            if(element.Index == index){
                gameName = element.GameName;
                console.log(gameName + "element.Index-->" + index);
                console.log(this.mapGameDataItems.get(gameName));
                
            }

        });

        return gameName;
    }

    //检测还有几天上架  
    //返回  -1 表示已经上架
    //数字 表示还有几天上架  0表示快要上架
    checkIsUpTo(gameName):number{

        //暂时不用
        return 0;
        
    }
    //显示弹框
    showPop(label:string){
        
        cc.loader.loadRes("pop_bg",cc.Prefab,function(error:Error,loadedResource:cc.Prefab){

            if(error){
                console.log(error + "");
                
                return;
            }

            let changechange = cc.instantiate(loadedResource);
            changechange.parent = cc.Canvas.instance.node;
            changechange.position = cc.v2(0, 0);
            
            changechange.getChildByName("label").getComponent(cc.Label).string = label;
        });


    }

    private selectGameName = "";
    setSelectGameName(select){

        this.selectGameName = select;

    }
    getSelectGameName(){

        return this.selectGameName;

    }

}

class GameItem {
    constructor(GameName:string, isNew:boolean, Index:number, UpdateDate : string, isUpStore : boolean) {
        this.GameName =  GameName;
        this.isNew =  isNew;
        this.UpdateDate =  UpdateDate;
        this.Index =  Index;
        this.isUpStore = isUpStore;
    }
 
    isUpStore:boolean;
    //名称
    GameName:string;
    //新的标致
    isNew:boolean;
    //索引
    Index:number;
    //日期
    UpdateDate : string;
}
