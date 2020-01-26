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
export default class DollTouchEvent extends cc.Component {
    audioNode: cc.Node = null;
    isScale: boolean = true;
    isXi: boolean = true;
    isha1: boolean = true;
    count: number = 0;
    
    init() {
        this.registerTouchEvent();
        let scalex = this.node.getChildByName('slime0').scaleX;
        cc.find('Canvas/slime').stopAllActions();
        this.node.stopAllActions();
        this.count = this.count + 1;
        if (this.isXi) {
            this.node.runAction(cc.scaleTo(2, 1));
            cc.find('Canvas/slime').runAction(cc.sequence(
                cc.delayTime(0.1),
                cc.callFunc(function () {
                    this.node.getChildByName('slime0').active = true;
                    this.node.getChildByName('slime0').scaleY = 0;
                    this.node.getChildByName('slime0').runAction(cc.scaleTo(0.2, scalex,1));
                    cc.find('Canvas').getComponent(cc.AudioSource).play();
                    
                }.bind(this)),
                cc.scaleTo(2, 0.2),
                cc.callFunc(function () {
                    cc.find('Canvas/slime').opacity = 0;
                    this.node.getChildByName('slime0').active = false;
                    this.node.getChildByName('down1').active = false;
                    this.node.getChildByName('up1').active = false;
                    this.node.getChildByName('down2').active = true;
                    this.node.getChildByName('up2').active = true;
                    cc.find('Canvas').getComponent(cc.AudioSource).stop();
                    cc.find('Canvas/flowerStar').getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('Canvas/flowerStar').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/ha1').getComponent(cc.AudioSource).play();
                    this.destroyTouchEvent();
                   
                    this.node.getComponent(cc.Button).interactable = true;
                    this.isXi = false;
                }.bind(this))  
            ))
        } else {
            this.node.runAction(cc.scaleTo(2, 0.8));
            cc.find('Canvas/slime').runAction(cc.sequence(
                cc.delayTime(0.1),
                cc.callFunc(function () {
                    this.node.getChildByName('slime0').scaleY = 1;
                    this.node.getChildByName('slime0').scaleX = scalex;
                    this.node.getChildByName('slime0').active = true;
                    cc.find('Canvas/slime').opacity = 255;
                }.bind(this)),
                cc.scaleTo(2, 0.6),
                cc.callFunc(function () {
                    this.node.getChildByName('slime0').active = false;
                    this.node.getChildByName('down1').active = true;
                    this.node.getChildByName('up1').active = true;
                    this.node.getChildByName('down2').active = false;
                    this.node.getChildByName('up2').active = false;
                    cc.find('Canvas/bg').getComponent(cc.AudioSource).stop();
                    cc.find('Canvas/flowerStar').getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('Canvas/flowerStar').getComponent(cc.AudioSource).play();
                    cc.find('Canvas/ha2').getComponent(cc.AudioSource).play();
                    this.node.getComponent(cc.Button).interactable = true;
                    this.destroyTouchEvent();
                   
                    this.isXi = true;
                }.bind(this)) 
            ))
           
        }
        // cc.director.getActionManager().pauseTarget(cc.find('Canvas/slime'));
        // cc.director.getActionManager().pauseTarget(this.node);
        cc.director.getActionManager().pauseTargets([cc.find('Canvas/slime'), this.node]);
        
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
        if (cc.find('Canvas/finger')) {
            cc.find('Canvas/finger').destroy();
        }
        this.node.getChildByName('slime0').active = true;
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).resetSystem();
        cc.director.getActionManager().resumeTargets([cc.find('Canvas/slime'), this.node]);  
        if (this.isXi) {
            this.node.getComponent(cc.AudioSource).play();
            this.node.getChildByName('slime0').scaleY = 0;
            let scalex = this.node.getChildByName('slime0').scaleX;
            this.node.getChildByName('slime0').runAction(cc.scaleTo(0.2, scalex, 1));
        } else {
            cc.find('Canvas/bg').getComponent(cc.AudioSource).play(); 
            cc.log(cc.find('Canvas/slime'));
        }
       
       
        //this.audioNode.getComponent(cc.AudioSource).play();
    }
    onClick() {
        this.node.getComponent(cc.Button).interactable = false;
        cc.find('Canvas').getComponent(cc.AudioSource).play();
        if (this.isXi) {
            this.node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.scaleBy(0.2, 1.05), cc.scaleTo(0.2, 0.8)), 2),
            cc.callFunc(function () {
                this.init();
            }.bind(this))
            ));
        } else {
            this.node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.moveBy(0.2, cc.v2(0, 10)), cc.moveBy(0.2, cc.v2(0, -10))), 2),
                cc.callFunc(function () {
                    this.init();
                }.bind(this))
            ));
        }
    }
    //触摸移动；
    onTouchMove(event) {
        // if (!this.audioNode.getComponent(cc.AudioSource).isPlaying) {
        //     this.audioNode.getComponent(cc.AudioSource).play();
        // }
       
    }
    onTouchEnd() {
        this._touchEnd();
    }
    onTouchCancle(){
        this._touchEnd();
    }
    private _touchEnd() {
        this.node.getChildByName('slime0').active = false;
        cc.director.getActionManager().pauseTargets([cc.find('Canvas/slime'), this.node]); 
        this.node.getComponent(cc.AudioSource).stop();
        cc.find('Canvas/bg').getComponent(cc.AudioSource).stop();
        cc.find('Canvas/heartFullColor').getComponent(cc.ParticleSystem).stopSystem();
    }

    
}
