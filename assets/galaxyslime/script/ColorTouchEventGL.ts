import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";

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
export default class ColorTouchEvent extends cc.Component {
    sprinkleNode: cc.Node = null;
    points: cc.Vec2 [] = null;
    init(node: cc.Node) {
        if (cc.find('Canvas/write/tipMove')) {
            cc.find('Canvas/write/tipMove').active = true;
        }
        this.points = [];
        this.sprinkleNode = node;
        this.sprinkleNode.setScale(0.4);
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
        let point = event.touch.getLocation();
        this.addCircle(point);
        if (cc.find('Canvas/write/tipMove')) {
            cc.find('Canvas/write/tipMove').destroy();
        }
        
      
    }
    //触摸移动；
    onTouchMove(event) {
        let point = event.touch.getLocation();
        let r = this.node.getBoundingBoxToWorld();
        if(r.contains(point)){
            this.addLine(event.getPreviousLocation(),point);
        }
        
    }
    onTouchEnd() {
       
    }
    onTouchCancle(){
        
    }
    addCircle(tpos:cc.Vec2){    
        let pos = this.node.convertToNodeSpaceAR(tpos);
        let node = cc.instantiate(this.sprinkleNode);
        node.parent = this.node;
        node.setPosition(pos);
        
    }
    addLine(frompos:cc.Vec2,endPos:cc.Vec2){
   
            let newPos = endPos.sub(frompos);
            let lDistance = newPos.mag();
            for(let i=0;i<lDistance;i+=5){
                let ldelta = i / lDistance;
                let lDifX = endPos.x - frompos.x;
                let lDifY = endPos.y - frompos.y;
                let point = new cc.Vec2(frompos.x + (lDifX * ldelta), frompos.y + (lDifY * ldelta));
                let isNew = true;
                if (this.points.length > 0) {
                    for (let i = 0; i < this.points.length; i++){
                        if (this._calculatedistance(point, this.points[i]) < (this.sprinkleNode.width*0.4/4)) {
                            isNew = false;
                            break;
                        } else {
                            isNew = true
                            continue;
                        }
                    }
                }
                if (isNew) {
                    this.addCircle(point);
                    this.points.push(point);
                }
               
            }
        
    }
    private _calculatedistance(pos1:cc.Vec2, pos2:cc.Vec2){

        let dx = pos2.x - pos1.x;
        let dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);

    }
    
}
