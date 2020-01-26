
const {ccclass, property} = cc._decorator;
//方向
const ShowDirection = cc.Enum({
    left: 1,
    right: 2,
    top: 3,
    bottom : 4 ,
});
const ActionType = cc.Enum({
    Bezier: 1,
    JumpTo: 2,
    EaseElastic: 3,
    Rote: 4,
    EaseBackOut: 5,
    
});
@ccclass
export default class MoveIn extends cc.Component {

    //node 进入的动画脚本
    //动画前间隔的时间
    @property
    delayTime: number = 0.0;

    //进入的方向
    @property({
        type : ShowDirection
    })
    direction = ShowDirection.left;

    //进入的方向
    @property({
        type : ActionType
    })
    action = ActionType.Bezier;
    //进入的声音资源
    @property(cc.AudioClip)
    private scoreAudio: cc.AudioClip = null;

    //是否自动执行
    @property()
    isLoad: boolean = true;

    //是否自动加载
    @property()
    iscanLoad: boolean = true;

    //动画执行完成的回调
    public actionCallBack : () => void;

    getScreenPos(_node:cc.Node,_dir:number):cc.Vec2{
        let _mainC = cc.Camera.findCamera(_node);
        let _size = cc.view.getDesignResolutionSize();
        let topLeft =  new cc.Vec2(0,_size.height);
        let bottomRight = new cc.Vec2(_size.width,0);
        let curentPosition = _node.position;
        let pos = _node.position;
        if(_node.parent != null){
            curentPosition = _node.parent.convertToWorldSpaceAR(curentPosition);
        }
        if(_mainC != null){
            let v2 = _mainC.getScreenToWorldPoint(topLeft, new cc.Vec2());
            topLeft = cc.v2(v2.x,v2.y)
            let v2_ = _mainC.getScreenToWorldPoint(bottomRight, new cc.Vec2());
            bottomRight = cc.v2(v2_.x,v2_.y);
        }
      
        let endPosiont:cc.Vec2;
        switch (_dir) {
            case  ShowDirection.bottom:
                endPosiont = new cc.Vec2(curentPosition.x,bottomRight.y- _node.getContentSize().height*(1-_node.getAnchorPoint().y));
                break;
            case  ShowDirection.left:
                endPosiont = new cc.Vec2(topLeft.x - _node.getContentSize().width * (1 - _node.getAnchorPoint().x)-300, curentPosition.y);
                break;
            case  ShowDirection.right:
                endPosiont =  new cc.Vec2(bottomRight.x* 1.5+_node.getContentSize().width*_node.getAnchorPoint().x, curentPosition.y);
                break;
            case  ShowDirection.top:
                endPosiont =  new cc.Vec2(curentPosition.x, topLeft.y +_node.getContentSize().width*(_node.getAnchorPoint().y+150));
                break;
        }

        if(_node.parent != null){
            endPosiont = _node.parent.convertToNodeSpaceAR(endPosiont);
        }
        return endPosiont;
        
    }

    onLoad () {
        if(this.iscanLoad){
            cc.log(this.isLoad);
            if(!this.isLoad)
                this.doShowAction();
    
        }
       
    }

    public doShowAction(){
        console.log("doShowAction" +this.node.position);
        
        let endPosiont = this.node.position;
        let statPos:cc.Vec2 = this.getScreenPos(this.node, this.direction);
        this.node.setPosition(statPos);
        this.node.opacity = 255;
        let time = 1.0;
        let action;
        switch (this.action) {
            case  ActionType.Bezier:
                action = cc.bezierTo(time, [cc.v2(endPosiont.x*.5,endPosiont.y+150), cc.v2(endPosiont.x*.5,endPosiont.y+150), cc.v2(endPosiont.x, endPosiont.y)]);
                break;
            case  ActionType.EaseElastic:
                action = cc.moveTo(time, endPosiont).easing(cc.easeElasticOut(2.0));
                break;
            case  ActionType.EaseBackOut:
                action = cc.moveTo(time, endPosiont).easing(cc.easeBackOut());
                break;
            case  ActionType.JumpTo:
                action = cc.jumpTo(time, endPosiont, 200, 1);
                break;
            case  ActionType.Rote:
                {
                    var rotate = -10;
                    if(this.direction == ShowDirection.left)
                        rotate = 10;
                    
                    action = cc.spawn(cc.moveTo(time, endPosiont).easing(cc.easeBackOut()), cc.sequence(cc.rotateBy(time*0.6, rotate), cc.rotateBy(time*0.1, -rotate)));
                }
                break;
            default:
                action = cc.moveTo(time, endPosiont).easing(cc.easeElasticOut(2.0));
        }
        var finished = null;
        var self = this;
        //if(this.actionCallBack)
        // finished = cc.callFunc(function () {
        //     console.log(self.actionCallBack);
            
        //     if(self.actionCallBack)
        //         self.actionCallBack();

        // }, this);
        finished = cc.callFunc(()=>{
            console.log(this.actionCallBack);
            if(this.actionCallBack)
                this.actionCallBack();
        });
        

        var detalTimeTemp = cc.delayTime(this.delayTime);
        let sq = cc.sequence(detalTimeTemp, cc.callFunc(function () {
            if(self.scoreAudio)
                cc.audioEngine.play(self.scoreAudio, false, 1); 
        }),action, finished);
        this.node.runAction(sq);
    };

    start () {
        if(this.isLoad)
            this.doShowAction();

        console.log("movein start");
        
        // this.doShowAction();
        // this.doShowAction();
        // this.node.active = true;
    }
    // update (dt) {}
}
