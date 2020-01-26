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
    private colors:string[] = null;
    private texture: any = null;
    private candys: string[] = null;
    private color:string = null;
   
    
    constructor(){
        
    }
    setColors(colors: string[]) {
        this.colors = colors;
    }
    getColors() {
        return this.colors;
    }
    setColor(color: string) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setCandys(candys: string[]) {
        this.candys = candys;
    }
    getCandys() {
        return this.candys;
    }
    public setTexture(textureOther){

        this.texture = textureOther;
        
    }

    public getTexture(){

        return this.texture;

    }
    public setNoFirst() {
        cc.sys.localStorage.setItem('noFirst','1');
    }
    public getNoFirst() {
        let noFirst = cc.sys.localStorage.getItem('noFirst');
        if (noFirst) {
            return true;
        } else {
            return false;
        }
    }
    public setNoFirst1() {
        cc.sys.localStorage.setItem('noFirst1','1');
    }
    public getNoFirst1() {
        let noFirst = cc.sys.localStorage.getItem('noFirst1');
        if (noFirst) {
            return true;
        } else {
            return false;
        }
    }
    
}
