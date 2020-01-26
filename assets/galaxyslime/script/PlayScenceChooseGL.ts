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
export default class PlayScenceChoose extends cc.Component {
    btnClick(event) {
        cc.find('Canvas/mask').active = true;
        let name = event.target.name;
        cc.find('Canvas/btns').getComponent(cc.AudioSource).play();
        cc.find('Canvas/btns').children.forEach(child => {
            if (child.name == name) {
                child.getChildByName('yes').active = true;
            } else {
                child.getChildByName('yes').active = false;
            }
        })
        cc.log(name);
       
        this.node.runAction(cc.sequence(
            cc.scaleBy(0.2, 1.05, 0.95),
            cc.scaleBy(0.3, 0.95, 1.05),
            cc.callFunc(function () {
                cc.director.loadScene(`${name}SlimeGL`);
            }.bind(this))
        ))
    }
}
