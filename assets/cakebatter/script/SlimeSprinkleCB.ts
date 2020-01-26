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
export default class SlimeSprinkle extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onAdd(){
        this.startChanger();
    }
    startChanger(){

        this.schedule(function () {
            
            this.changPos(0)

        }.bind(this), 0.02)

    }
    changPos(float){

        let newX = this._moveBone.offset.x;
        console.log(this._moveBone.offset.x);
        
        let absX = Math.abs(newX);
        console.log(absX);
        let ornWidth = this._slotSize.width*.5 * this._scaleX;
        if(absX > 40){
            // console.log(this._moveBone.getBoneData());
            
            

            absX = absX- (1 - this._moveBone.offset.scaleX );// * this._moveBone.getBoneData().length;
            this._sprinkleContainer.scaleX = (ornWidth + absX) / (this._slotSize.width *  .5);
            this._sprinkleContainer.scaleY = (this._moveBone.offset.scaleY);
 
            // console.log("1111" + absX + "---" + this._slotSize.width);
            // console.log((ornWidth + absX) / (this._slotSize.width *  .5));
            // console.log((this._moveBone.offset.scaleY));

        }else {
           this._sprinkleContainer.scaleX = ((ornWidth+absX)* (this._moveBone.offset.scaleX) / (this._slotSize.width*.5));
           this._sprinkleContainer.scaleY = this._moveBone.offset.scaleY;
        }
       
        for(let sp of this._spinkles)
            sp.setScale(1/sp.getParent().scaleX,1/sp.getParent().scaleY);
        
    }

    createContainer(){
        console.log("111111");
        
        if(this._sprinkleContainer == null){
            console.log("66666");
            // this._slotPos = cc.v2(this._slot.global.x,-this._slot.global.y);
            this._slotPos = cc.v2(0,-0);
            console.log("77777");
            // this._scaleX = this._slot.global.scaleX;
            this._scaleX = 1.0;
            console.log("22222");
            //let dis = this._slot.getDisplay();//dynamic_cast<dragonBones::CCSlot*>(_slot)->getDisplay();
            this._slotSize = cc.size(300,300);//dis.getSpriteFrame().getOriginalSize();
            // _slotSize =static_cast<Sprite*>(dis)->getSpriteFrame()->getOriginalSize();
            console.log("33333");
            this._sprinkleContainer = new cc.Node();   
            // _sprinkleContainer->setCascadeOpacityEnabled(true);
            // _owner->setCascadeOpacityEnabled(true);
            this._sprinkleContainer.setPosition(this._slotPos);
            this._sprinkleContainer.setContentSize(this._slotSize);
            // this._sprinkleContainer.setScale(this._scaleX,this._slot.global.scaleY);
            this._sprinkleContainer.setScale(this._scaleX,1.0);
            // this._sprinkleContainer.ignoreAnchorPointForPosition(false);
            // this._sprinkleContainer.setAnchorPoint(Vec2::ANCHOR_MIDDLE);
            this.node.addChild(this._sprinkleContainer);
            
        }
        console.log("44444");
    }
    _spinkles:cc.Node[] = [];
    _slotSize:cc.Size;
    _slotPos:cc.Vec2;
    _scaleX;
    _sprinkleContainer:cc.Node = null;
    private _moveBone:dragonBones.Bone = null;
    private _slot:dragonBones.Slot = null;
    private _sprinklePath:string[] = null;
    setMoveBone(bone){
        this._moveBone = bone;

    }
    setSlotBoneslot(slot){
        this._slot = slot

    }
    setSprinklePath(path){
        console.log("setSprinklePath" + path.length);
        this._sprinklePath = path;


    }
    addSprinkle(sprinklePos:cc.Vec2[]){
        console.log("addSprinkle" + sprinklePos.length);
        for(let pos of sprinklePos){
            let node = new cc.Node();   
            let path = this._sprinklePath[Math.floor(Math.random() * this._sprinklePath.length)];
            console.log(path);
            cc.loader.loadRes(path, cc.SpriteFrame, function (err, sp) {
                cc.loader.setAutoReleaseRecursively(sp, true);
                node.addComponent(cc.Sprite).spriteFrame = sp;
            });
            node.position = pos;
            console.log("this._sprinkleContainer.addChild");
            
            this._sprinkleContainer.addChild(node, Math.random() * 0.6);
            
            this._spinkles.push(node);
            // node.setScale(1/node.getParent().scaleX,1/node.getParent().scaleY);
        }

    };
    // update (dt) {}
}
