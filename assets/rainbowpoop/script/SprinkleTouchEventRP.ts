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
export default class SprinkleTouchEvent extends cc.Component {
    sprinkleNode:cc.Node = null;
    init(node:cc.Node){
        this.sprinkleNode = node;
        this.registerTouchEvent();
    }

    registerTouchEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this);
    }
    destroyTouchEvent() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this)
    }
    onTouchStart(event) {  
        cc.find('Canvas/tipClick').active = false; 
        cc.find('Canvas/poop/decorate/glitter').active = true;
        this.node.getComponent(cc.AudioSource).play();
        let touches = event.getTouches();
        let position = touches[0].getLocation();
        let box = this.node.getBoundingBoxToWorld();
        if(box.contains(position)){
            let node = cc.instantiate(this.sprinkleNode);
            node.parent = this.node;
            node.setPosition(cc.v2(0,0));
            node.height = this.node.height;
            node.width = this.node.width
            node.children.forEach(child=>{
                let positionY = Math.random()*(node.height)-(node.height)/2;
                let positionX = Math.random()*(node.width)-(node.width)/2;
                child.setScale(Math.random()*0.5+0.6);
                child.setPosition(cc.v2(positionX,positionY));
                let y = -Math.random()*30-10;
                child.runAction(cc.moveBy(1,cc.v2(0,y)));
            })
        }

    }
    //触摸移动；
    onTouchMove(event) {
        
    }
    onTouchEnd() {
       
    }
    onTouchCancle(){
        
    }
    
}
