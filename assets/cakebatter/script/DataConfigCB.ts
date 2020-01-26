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
export default class DataConfig {
    private static _instance: any;
    public static getInstance(): DataConfig {
        if (DataConfig._instance == null)
        DataConfig._instance = new DataConfig();
        return DataConfig._instance;
    }
    color: any = null;
    texture: any = null;
    foam: any = null;
    index: any = null;
    constructor(){
        
    }

    coinName: string = "coinhat";

    addCoinNum(){ 
    
        let isLock =  cc.sys.localStorage.getItem(this.coinName);
        if (!isLock)
            isLock = 0;

        let t = Number(isLock);
        t = t + 1;
        cc.sys.localStorage.setItem(this.coinName, t);
        
    }

    getCoinNum(){ 
    
        let isLock =  cc.sys.localStorage.getItem(this.coinName);
        if (!isLock)
            isLock = 0;
        
        return isLock;
    }

    setColors(color) {
        this.color = color;
    }
    getColors() {
        return this.color;
    }
    setTexture(texture) {
        this.texture = texture;
    }
    getTexture() {
        return this.texture;
    }
    setFoam(foam) {
        this.foam = foam;
    }
    getFoam() {
        return this.foam;
    }
    setIndex(index) {
        this.index = index;
    }
    getIndex() {
        return this.index;
    }

}
