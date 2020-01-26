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
export default class PopupComponet extends cc.Component {
    callback:() => void;
    showPopup(){
        this.node.active = true;
        this.node.setScale(0);
        this.node.getComponent(cc.AudioSource).play();
        this.node.runAction(cc.sequence(cc.scaleTo(0.5,1.1),cc.scaleTo(0.05,1)));
    }
    hidePopup(){
        this.node.getChildByName('btn_x').getComponent(cc.AudioSource).play();
        this.node.runAction(cc.sequence(cc.scaleTo(0.05,1.1),cc.scaleTo(0.5,0),cc.callFunc(function(){
            this.node.active = false;
        }.bind(this))));  
    }
    setTip(tip:string){
        this.node.getChildByName('tip').getComponent(cc.Label).string = tip;
    }
    okClick(){
        this.hidePopup();
        if(this.callback){
            this.callback();
        }  
    }
    setCallback(callback:()=>void){
        this.callback = callback;
    }

}
