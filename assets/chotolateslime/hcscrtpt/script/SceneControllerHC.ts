const {ccclass, property} = cc._decorator;
@ccclass
export default class SceneController extends cc.Component{
    _backStack:string[]=[];
    onLoad(){
        cc.game.addPersistRootNode(this.node);
        this.node.getComponent(SceneController).startTargetScene('makeHC');
    }
    pushScene(nextScene:string) {
        if(nextScene == this._backStack[this._backStack.length-1]){
            return;
        } else {
            this._backStack.push(nextScene);
            var rootNode = cc.find('mask');
            cc.director.preloadScene(nextScene);
            rootNode.runAction(cc.sequence(
                cc.fadeTo(1,200),
                cc.callFunc(function(){
                    cc.director.loadScene(nextScene);
                    cc.find('mask').runAction( cc.fadeTo(1,0));
                }.bind(this),this) 
            ));
        }
    }
    startTargetScene(name:string){
        this._backStack.push(name);
    }
    popScene(){
        if(this._backStack.length>1){
            var lastScene = this._backStack.pop();
            lastScene = this._backStack.pop();
            this.pushScene(lastScene);
        } else {
            cc.error("已经回到第一个场景")
        }
    }
    popToRootScene(){
        if(this._backStack.length<1){
            return;
        }
        while(this._backStack.length>1){
            this._backStack.pop();
        }
        var rootScene = this._backStack.pop();
        this.pushScene(rootScene);
    }
    popTo(name:string){
        if(this._backStack.length<1){
            return;
        }
        var find = false;
        do{
            var lastScene = this._backStack.pop();
            if(lastScene==name){
                find=true;
            }
        } while(this._backStack.length>0 && !find)
        if(find){
            this.pushScene(name);
        }
    }

}
