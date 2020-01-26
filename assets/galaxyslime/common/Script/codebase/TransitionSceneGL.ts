// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import ColorRect = require('./utils/ColorRectGL');
import { CocosHelper } from './utils/CocosHelperGL';
import ShaderTime from './effect/ShaderTimeGL';
import ShaderHelper from './effect/ShaderHelperGL';

const {ccclass, property} = cc._decorator;


@ccclass
export default class TransitionScene extends cc.Component {
    private newSceneName:string = null;
    private static currentChangeName = "";

    /**
     * resource 下需要拷贝effect文件 才可使用
     * @param newSceneName 新场景名字
     * @param style 1红色渐变  7翻页效果  12从左向右渐变效果
     */
    static changeScene(newSceneName: string, style: number = 0) {
        cc.director.loadScene(newSceneName);
        return;

        if (style == 1 || style == 7 || style == 12) {
            CocosHelper.captureNodeSize(cc.find("Canvas"), cc.visibleRect.width, cc.visibleRect.height).then((texture: cc.RenderTexture) => {
                if (texture == null) {
                    cc.director.loadScene(newSceneName);
                } else {
                    cc.director.loadScene(newSceneName);
                    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
                        let _node = cc.director.getScene().getChildByName("Canvas");
                        let newNode = new cc.Node();
                        newNode.setPosition(cc.v2(0, 0))
                        newNode.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                        newNode.addComponent(ShaderHelper).program = style;
                        newNode.addComponent(ShaderTime);
                        _node.addChild(newNode);
            
                        cc.director.off(cc.Director.EVENT_AFTER_SCENE_LAUNCH);
                    });
                }
            });
        } else {
            cc.director.loadScene(newSceneName);
        }
    }

    private startChange() {
        CocosHelper.visitNode(cc.director.getScene(),function (node:cc.Node) {
            let coms = node.getComponents(cc.Component);
            for(let c of coms){
                let transitiOnExit = c["transitiOnExit"];
                if(transitiOnExit != undefined && transitiOnExit instanceof Function){
                    (transitiOnExit as Function).bind(c)();
                }
            }
        });
        this.node.opacity = 0;
        this.node.stopAllActions();
        let finished = cc.callFunc(()=>{
            if(this.newSceneName != null){
                cc.director.preloadScene(this.newSceneName ,()=>{
                    cc.director.loadScene(this.newSceneName,function(){
                        CocosHelper.visitNode(cc.director.getScene(),function (node:cc.Node) {
                            let coms = node.getComponents(cc.Component);
                            for(let c of coms){
                                let transitionOnEnter = c["transitionOnEnter"];
                                if(transitionOnEnter != undefined && transitionOnEnter instanceof Function){
                                    c["hasTransition"] = true;
                                }
                            }
                        });
                        let node= cc.find("TransitionSceneNode");
                        if(node != null){
                            let loadFinished = cc.callFunc(function(){
                                cc.game.removePersistRootNode(this);
                                this.destroy();
                                CocosHelper.visitNode(cc.director.getScene(),function (node:cc.Node) {
                                    let coms = node.getComponents(cc.Component);
                                    for(let c of coms){
                                        let transitionOnEnter = c["transitionOnEnter"];
                                        if(transitionOnEnter != undefined && transitionOnEnter instanceof Function){
                                            (transitionOnEnter as Function).bind(c)();
                                        }
                                    }
                                });
                            },node);
                            node.runAction(cc.sequence(cc.fadeOut(0.6),loadFinished));
                        }
                           
                    });
                     this.newSceneName = null;
                });
            }
        },this);

        this.node.runAction(cc.sequence(cc.fadeIn(0.6),finished));
    }

    onDestroy(){
        TransitionScene.currentChangeName = "";
    }
    start () {
        if(TransitionScene.currentChangeName != ""){
            cc.error("scene:"+TransitionScene.currentChangeName + " isChanging, don`t change "+this.newSceneName);
        }
        TransitionScene.currentChangeName = this.newSceneName;
        this.startChange();
    }

    // update (dt) {}
}
