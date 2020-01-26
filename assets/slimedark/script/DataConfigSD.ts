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
    private isStart: boolean = true;
    constructor(){
        
    }
    setColor(color) {
        cc.sys.localStorage.setItem('color', color);
        
    }
    getColor() {
        let color = cc.sys.localStorage.getItem('color');
        if (!color) {
            color = 'green';
            cc.sys.localStorage.setItem('color', color);
        }
        return color;
    }
    setCount(count) {
        cc.sys.localStorage.setItem('count', count);
    }
    addCount() {
        let count = this.getCount();
        let t = Number(count)+1;
        this.setCount(t);
    }
    getCount() {
        let count = cc.sys.localStorage.getItem('count');
        if (!count) {
            count = 0;
            cc.sys.localStorage.setItem('count', count);
        }
        return count;
    }
    setIsStart(isStart) {
        this.isStart = isStart;
    }
    getIsStart() {
        return this.isStart;
    }

}
