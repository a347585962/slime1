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
export default class BarAction extends cc.Component {

    @property(cc.ProgressBar)
    horizontalBar: cc.ProgressBar = null;

    @property()
    speed: number = 10;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    _pingpong = false;
    onLoad () {
        this._pingpong = true;
        this.horizontalBar.progress = 0;

    };

    update(dt) {
    
        this._updateProgressBar(this.horizontalBar, dt);
       
    };
    
    _updateProgressBar(progressBar, dt){
        var progress = progressBar.progress;
        if(progress < 1.0 && this._pingpong){
            progress += dt * this.speed;
        }
        else {
            progress -= dt * this.speed;
            this._pingpong = progress <= 0;
        }
        progressBar.progress = progress;
    }
    // update (dt) {}
}
