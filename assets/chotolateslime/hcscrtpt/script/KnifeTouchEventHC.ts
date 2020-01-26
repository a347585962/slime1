import MakeController from "./MakeControllerHC";

const { ccclass, property } = cc._decorator;

@ccclass
export default class KnifeTouchEvent extends cc.Component {
    knifeNodePos: cc.Vec2 = null;
    initialPos: cc.Vec2 = null;
    cutCount: number = 0;
    init() {
        this.initialPos = this.node.getPosition();
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
    onTouchStart() {
        this.knifeNodePos = this.node.getPosition();
        cc.find('Canvas/sculpey_cut/finger').active = false;
    }
    //触摸移动；
    onTouchMove(event) {
        cc.find('Canvas/sculpey_cut/finger').active = false;
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.convertToNodeSpaceAR(touches[0].getLocation());

        var pos = touches[0].getDelta();
        
        var subPos = oldPos.sub(newPos);

        if(pos.y < 0 )
            self.node.y = self.knifeNodePos.y - subPos.y;

        // 控制节点移动范围; 
        var minY = 0; //最小Y坐标；
        var maxY = -100;
        var nPos = self.node.getPosition(); //节点实时坐标；

        if (nPos.y < minY) {
            nPos.y = minY;
        };
        if (nPos.y > maxY) {
            nPos.y = maxY;
        };
        self.node.setPosition(cc.v2(this.knifeNodePos.x, nPos.y));  
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        var diatance = Math.abs(this.node.getPosition().y - this.initialPos.y);
        if (diatance > 50) {
            this.destroyTouchEvent();
            cc.find('Canvas').getComponent(MakeController).cutSculpey(this.cutCount);
            if (this.cutCount == 4) {
                this.node.runAction(cc.moveTo(0.5, cc.v2(-150, -550)));
            } else {
                this.cutCount = this.cutCount + 1;
                this.node.runAction(cc.sequence(
                    cc.moveTo(0.5, cc.v2(520 - 110 * this.cutCount)),
                    cc.callFunc(function () {
                        this.init(); 
                    }.bind(this))
                ));
            }
           

            
        }
    }
}
