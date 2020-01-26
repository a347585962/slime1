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
export default class DataConfig{
    private static _instance: any;
    public static getInstance(): DataConfig {
        if (DataConfig._instance == null)
            DataConfig._instance = new DataConfig();
        return DataConfig._instance;
    }

    private tag:number = 0;
    private name:string = "bowl_blue_stir";
    private bodyName:string = "blue";
    private tagName:string = "blue_";
    getTag(){
        return this.tag;
    }

    setTag(num:number){
        this.tag = num;

    }
    setName(nam:string)
    {
        this.name = nam;
    }
    getName()
    {
        return this.name;
    }
    setBodyName(nam:string)
    {
        this.bodyName = nam;
    }
    setTagName(nam:string)
    {
        this.tagName = nam;
    }
    getBodyName()
    {
        return this.bodyName;
    }
    getTagName()
    {
        return this.tagName;
    }

    constructor(){
        
    }
}
