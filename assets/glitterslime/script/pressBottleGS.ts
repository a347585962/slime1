import SpriteDragEventManager from "../common/Script/codebase/SpriteDrag/SpriteDragEventManagerGS";
import DragHideShade from "../common/Script/codebase/SpriteDrag/DragHideShadeGS";
import DataConfig from "./DataConfigGS";
import MoveIn from "../common/Script/MoveInGS";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGS";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGS";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    pressAudio:cc.AudioClip = null;
   @property(cc.Node)
   finger:cc.Node = null;

    private audoiManger = -1;
    private mixColorScaleY = 1;
    private maxColorScaleY = 1.2;
    private ScaleYspeed = 0.005;
    zorepos: cc.Vec2 = cc.v2(850, 320);
    moveState: boolean = true;
    pressState: boolean = false;
    pressFull: boolean = false;
    can: boolean = true;
    index: number = -1;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    touchStart()
    {
        this.finger.stopAllActions();
        this.finger.active = false;
    }
    touchOn(event) {
        cc.find("Canvas/finger1").active = false;
        cc.find("Canvas/finger1").getChildByName("node1").active = false;
        
        // // if (this.node.getChildByName("color").scaleY == this.mixColorScaleY) {
       this.pressState = true;
        // // }
        this.bottleScaleTo(0.0075, this.ScaleYspeed, 0.55, 0.55, true, this.node);
        let color = this.node.getChildByName("color");
        this.bottleScaleTo(0.0075,this.ScaleYspeed, 1.2, this.maxColorScaleY,true, color)

    };
    touchEnd(event) {
        
        if (this.moveState) {
            let bowl = cc.find("Canvas/bowl").getContentSize();
            let endpos = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.view.getVisibleSize().width / 2 + bowl.width / 2 - 80
                , cc.view.getVisibleSize().height / 2 + bowl.height / 2 - 110));
            let move = cc.moveTo(0.5, endpos);
            let rot = cc.rotateTo(0.5, -110);
            let scale = cc.scaleTo(0.5, 0.5);
            let func = cc.callFunc(function () {
                this.node.getChildByName("lid").active = false;
                this.node.parent.getChildByName("bottle_shadow").active = false;
                this.node.parent.getComponent(SpriteDrag).enabled = false;
                
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchOn, this);
                this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd2, this);
                this.moveState = false;
            }.bind(this));
            let func1 = cc.callFunc(function(){
                //finger
                let pos = this.node.convertToWorldSpaceAR(cc.v2(0,0));
                console.log(pos.x,pos.y);
                cc.find("Canvas/finger1").active = true;
                cc.find("Canvas/finger1").getChildByName("node1").active = true;
                pos.x -= cc.view.getVisibleSize().width / 2;
                pos.y -= cc.view.getVisibleSize().height / 2;
                cc.find("Canvas/finger1").setPosition(cc.v2(pos.x + 60,pos.y)); 
            }.bind(this));
            let seq = cc.sequence(func, scale);
            let seq1= cc.sequence(move,func1);
            this.node.runAction(seq1);
            this.node.runAction(seq);
            this.node.runAction(rot);
        }

    };
    touchEnd2() {
        this.finger.active = false;
        this.finger.stopAllActions();
        this.pressState = false;
        // this.can = true;
        let color = this.node.getChildByName("color");
        // if(color.scaleY >=this.maxColorScaleY)
        // {
        //     this.press();
        // }
        


    }
    setData() {
        //===================================
        let self = this;

        this.index += 1;
        if (DataConfig.getInstance().getTag() == 0) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_blue" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_blue" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_blue" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_blue" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }
        else if (DataConfig.getInstance().getTag() == 1) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_cyan" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_cyan" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_cyan" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_cyan" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }
        else if (DataConfig.getInstance().getTag() == 2) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_green" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_green" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_green" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_green" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }
        else if (DataConfig.getInstance().getTag() == 3) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_purple" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_purple" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_purple" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_purple" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }
        else if (DataConfig.getInstance().getTag() == 4) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_red" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_red" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_red" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_red" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }
        else if (DataConfig.getInstance().getTag() == 5) {
            if (this.index == 0) {
                cc.loader.loadRes("glitterslime/bowl_yellow" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            } else if (this.index == 1) {

                cc.loader.loadRes("glitterslime/bowl_yellow" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 2) {

                cc.loader.loadRes("glitterslime/bowl_yellow" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
            else if (this.index == 3) {

                cc.loader.loadRes("glitterslime/bowl_yellow" + this.index, cc.SpriteFrame, function (error: Error, resource: any) {

                    if (error) {
                        console.log(error + "");
                        return;
                    }
                    let press = cc.find("Canvas/bowl/node/press");
                    press.getComponent(cc.Sprite).spriteFrame = resource;
                    cc.loader.setAutoRelease(resource,true);
                });

            }
        }


        let fadin = cc.fadeIn(1);
        this.node.parent.children[0].runAction(fadin);
        self.node.parent.children[0].active = false;
        if (this.index >= 3) {
            let moveOut = cc.moveBy(1, cc.v2(cc.view.getVisibleSize().width, 0));
            let kettleMove = cc.callFunc(function () {
                let kettle = cc.find("Canvas/kettle");//.getComponent("kettle");
                //kettle.RunAction();
                //kettle.nodeOn();
                //kettle.active = true;
                kettle.getComponent(MoveIn).enabled = true;
            });
            let seq = cc.sequence(moveOut, kettleMove);
            this.node.parent.runAction(seq);
            return;
        }

    }
    update(dt) {
        //+============
        //let color  = this.node.getChildByName("color");
        if (this.index >= 3 || this.moveState)
            return;
        if (this.pressState) {
            this.bottleScaleTo(0.0075, this.ScaleYspeed, 0.55, 0.55, true, this.node);
            let color = this.node.getChildByName("color");
            this.bottleScaleTo(0.0075,this.ScaleYspeed, 1.2, this.maxColorScaleY,true, color)
        }
        else {
            this.bottleScaleTo(0.0075, this.ScaleYspeed, 0.5, 0.5, false, this.node);
            let color = this.node.getChildByName("color");
            this.bottleScaleTo(0.0075, this.ScaleYspeed, 1.2, this.mixColorScaleY, false, color)
         }

        // if (this.pressFull) {
        //     this.press();
        // }

    }
    press() {
        this.mixColorScaleY -= 0.15;
        this.ScaleYspeed += 0.005;
        this.audoiManger = cc.audioEngine.play(this.pressAudio,false,0.5);
        this.node.parent.children[0].active = true;
        this.node.parent.children[0].setPosition(cc.v2(this.node.position.x -60, this.node.position.y -12));
        this.node.parent.children[0].setScale(0);
        this.node.parent.children[0].rotation =115 + this.node.rotation;
        let scale = cc.scaleTo(0.7, 0.5);

        let endpos = this.node.parent.convertToNodeSpaceAR(cc.v2(cc.view.getVisibleSize().width / 2, cc.view.getVisibleSize().height / 2));
        //console.log(pos.x,pos.y);
        let move = cc.moveTo(0.7, endpos);
        let zero = cc.callFunc(this.setData, this);
        let seq = cc.sequence(scale, move, zero);
        this.node.parent.children[0].runAction(seq);
        this.scheduleOnce(function () {
            let fad = cc.fadeOut(1);
            this.node.parent.children[0].runAction(fad);
        }, 0.9)
        this.can = false;
    }
    bottleScaleTo(xSpeed: number, ySpeed: number, MaxX: number, MaxY: number, BigSmall: boolean, _node: cc.Node) {
        if (BigSmall) {
            _node.scaleX += xSpeed;
            _node.scaleY += ySpeed; 
                if (_node.scaleY >= MaxY) {
                    _node.scaleY = MaxY;
                    if (_node == this.node.getChildByName("color"))
                    {
                        this.press();
                        this.pressState = false;
                        this.node.off(cc.Node.EventType.TOUCH_START, this.touchOn, this);
                        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd2, this);
                    }
 
                }
                if (_node.scaleX >= MaxX)
                    _node.scaleX = MaxX;
            

        }
        else {
            _node.scaleX -= xSpeed;
            _node.scaleY -= ySpeed;
            if (_node.scaleY <= MaxY) {
                _node.scaleY = MaxY;
                if (_node == this.node.getChildByName("color"))
                    {
                        this.node.on(cc.Node.EventType.TOUCH_START, this.touchOn, this);
                        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd2, this);
                    }
            }
            if (_node.scaleX <= MaxX)
                _node.scaleX = MaxX;
        }
    };
}
