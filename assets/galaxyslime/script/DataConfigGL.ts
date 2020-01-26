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
    private currentFood: any = null;
    private texture: any = null;
    private index: number = null;
    private isFirstPlay: boolean = true;
    private isFirstDrag: boolean = true;
    private isFirstSlap: boolean = true;
    private isFirstClick: boolean = true;
   
    
    constructor(){
        
    }
    public setTexture(textureOther){

        this.texture = textureOther;
        
    }

    public getTexture(){

        return this.texture;

    }
    public setPlay(isFirst:boolean){

        this.isFirstPlay = isFirst;
        
    }

    public getPlay(){

        return this.isFirstPlay;

    }
    public setDrag(isFirst:boolean){

        this.isFirstDrag= isFirst;
        
    }

    public getDrag(){

        return this.isFirstDrag;

    }
    public setSlap(isFirst:boolean){

        this.isFirstSlap= isFirst;
        
    }

    public getSlap(){

        return this.isFirstSlap;

    }
    public setClick(isFirst:boolean){

        this.isFirstClick= isFirst;
        
    }

    public getClick(){

        return this.isFirstClick;

    }

    getFoodIndex(){ 
        let index =  cc.sys.localStorage.getItem('index');
        if (!index)
            index = 0;
       
        return index;
    }
    setFoodData(foodData) {
        cc.sys.localStorage.setItem('foodData', JSON.stringify(foodData));
    }
    getFoodData() {
        let foodData =  JSON.parse(cc.sys.localStorage.getItem('foodData'));
        if (!foodData) {
            foodData = [];
            cc.sys.localStorage.setItem('foodData', JSON.stringify(foodData));
        }
        return foodData;
    }
    addFood(food) {
        let foodData = JSON.parse(cc.sys.localStorage.getItem('foodData'));
        if (!foodData)
        foodData = [];
        foodData.push(food);
        cc.sys.localStorage.setItem('foodData', JSON.stringify(foodData));

        let index = cc.sys.localStorage.getItem('index');
        
        if (!index)
        index = 0;
        let t = Number(index);
        t = t + 1;
        cc.sys.localStorage.setItem('index', t);
    }
    changeFoodByIndex(index: number, food) {
        
        let foodData = JSON.parse(cc.sys.localStorage.getItem('foodData'));
        foodData.splice(index, 1);
       
        foodData.splice(index, 0, food);
      
        cc.sys.localStorage.setItem('foodData', JSON.stringify(foodData));
                 
    }
    resetFoodData() {
        let foodData = [];
        cc.sys.localStorage.setItem('foodData', JSON.stringify(foodData));
    }
    setCurrentFood(food) {
        this.currentFood = food
    }
    getCurrentFood() {
        if (!this.currentFood) {
            this.currentFood = 'noodle';
            this.setCurrentFood(this.currentFood);
        }
        return this.currentFood;
    }
    setChangeIndex(index:number) {
        this.index = index;
        console.log('index'+this.index);
    }
    getChangeIndex() {
        return this.index;
    }
   
}
