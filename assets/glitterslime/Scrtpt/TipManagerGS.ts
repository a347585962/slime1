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
export default class TipManager {

    private static _instance: any;
    public static getInstance(): TipManager {
        if (TipManager._instance == null)
            TipManager._instance = new TipManager();
        return TipManager._instance;
    }
    constructor(){
        
    }
    
    jumpTips()
    {
        let index = Math.floor(Math.random() * 4);
        let path = ["tips/fantastic", "tips/nice", "tips/great", "tips/great"];
        let scale = [0.8,1, 1, 1, 1, 1];

        let soundPath = ["sound/fatanstic.mp3", "sound/Nice.mp3", "sound/great.mp3", "sound/great.mp3"];
        
        let node = new cc.Node();
        let sp = node.addComponent(cc.Sprite);
        cc.loader.loadRes(path[index] + "", cc.SpriteFrame, function (err, sprite) {
            cc.loader.setAutoReleaseRecursively(sprite, true);
            if(err)
                return;

            sp.spriteFrame = sprite;


        })

        cc.Canvas.instance.node.addChild(node);
        let X = 200 - Math.random() * 400;
        let pos = cc.v2(X, Math.random() * 100+100);
        node.setPosition(cc.v2(0, 0));

        node.setScale(0);

        

        node.runAction(cc.sequence(cc.spawn(cc.jumpTo(0.5, pos, 150, 1), cc.scaleTo(0.5, scale[index]), cc.rotateBy(0.5, 360)),cc.callFunc(function () {
            
            cc.loader.loadRes(soundPath[index] + "", cc.AudioClip, function (err, audio) {
                cc.loader.setAutoReleaseRecursively(audio, true);
                if(err)
                    return;
    
                cc.audioEngine.playEffect(audio, false);
    
    
            })

        }), cc.delayTime(1),cc.removeSelf()));


    }
    playAudioEffect()
    {
        let index = Math.floor(Math.random() * 5);

        let soundPath = ["sound/fatanstic.mp3", "sound/good.mp3", "sound/Nice.mp3", "sound/great.mp3", "sound/well done.mp3", "sound/well done.mp3"];
        cc.loader.loadRes(soundPath[index] + "", cc.AudioClip, function (err, audio) {
            cc.loader.setAutoReleaseRecursively(audio, true);
            if(err)
                return;

            cc.audioEngine.playEffect(audio, false);
        })
    }

    
}
