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
export default class TouchMoveCard extends cc.Component {

    // onLoad () {}
    private oldPostion:cc.Vec2 = cc.v2();

    public touchCallBack:(direct:number)=>void;

    //进入的声音资源
    @property(cc.AudioClip)
    private scoreAudio: cc.AudioClip = null;


    start () {
        this.initLisenter();
        this.oldPostion = this.node.getPosition();

    }
    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);
    }
    
    onDisable() {

        this.node.off(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);

    }
    private touchPrePos:cc.Vec2 = cc.v2(0, 0);
    touchMove(event: cc.Event.EventTouch) {
        let size = this.node.getContentSize();//->getContentSize();
        let centerPos = this.node.convertToWorldSpaceAR(cc.v2(0,0));
        
        // let newPos = this.getWordPos(event.getLocation());
        // let prePos = this.getWordPos(event.getPreviousLocation());
   
        let touchPos = event.getDelta();
        let endDirect = touchPos.sub(centerPos);// - centerPos;
        let preDirect = this.touchPrePos.sub(centerPos);// - centerPos;
        let angel = (endDirect.signAngle(preDirect)) * -180 / 3.1415926;

        console.log(endDirect.signAngle(preDirect));
        

        let newRotate = this.node.rotation + angel * 0.5;
        this.node.rotation = newRotate;

        let prePos = this.node.getPosition();
        let deta:cc.Vec2 = event.getDelta();
        let newPos = this.node.getPosition().add(cc.v2(deta.x * 0.05, deta.y));
        this.node.setPosition(newPos);
    }
    touchStart(event: cc.Event.EventTouch){
        
        this.touchPrePos = cc.v2(0, 0);
    }
    touchEnd(event: cc.Event.EventTouch){

        let endPos = this.node.position;

        let distance = endPos.sub(this.oldPostion).mag();
        console.log(distance);
        this.enabled = false;
        if(distance > 150){
            let direct = endPos.y >= this.oldPostion.y ? 1 : -1;
            this.moveOut(direct, 0.25);

        }else{

            let self = this;
            this.node.runAction(cc.sequence(cc.spawn(cc.rotateTo(0.25, 0), cc.moveTo(0.25, this.oldPostion)),cc.callFunc(function () {
                
                self.enabled = true;

            })));

        }
    }

    moveOut(direct, time){

        

        let self = this;

        cc.audioEngine.play(self.scoreAudio, false, 1.0);

        this.node.runAction(cc.sequence(cc.moveBy(time, cc.v2(0, 1000 * direct)),cc.callFunc(function () {
            
            if(self.touchCallBack)
                self.touchCallBack(direct);
            
        })));

    }


    initLisenter(){

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.find('Canvas').emit("PullTouch");
        },this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event:cc.Event.EventTouch) {
            // console.log("TOUCH_MOVE");
            let prePos = this.node.getPosition();
            let deta:cc.Vec2 = event.getDelta();
            this._isTouchMove = Math.sqrt(deta.x * deta.x + deta.y * deta.y) > 4;
            


        },this);

    }
    private getWordPos(cameraPos:cc.Vec2):cc.Vec2 {
        let wordPos:cc.Vec2;
        if(this.node != null){
            let _camr = cc.Camera.findCamera(this.node);
            if(_camr != null){
                return _camr.getCameraToWorldPoint(cameraPos,wordPos);
            }
        }
        return cameraPos;
   }
    // update (dt) {}
}
