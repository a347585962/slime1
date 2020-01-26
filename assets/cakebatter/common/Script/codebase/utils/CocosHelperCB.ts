
export   class CocosHelper {
    static findNode_if(_root:cc.Node,_fun:Function):cc.Node{
        cc.ParticleSystem
        let find:cc.Node = null;
        if(_root != null){
            let flag = _fun(_root);
            if(flag){
                find = _root;
            }else{
                let child = _root.children;
                for(let c of child){
                    find = this.findNode_if(c,_fun);
                    if(find != null){
                        break;
                    }
                }
            }
        }
        return find;
    }

    static getSpinklePath(sprinkleIndex = 0):string[]{
        let temps:string[] = [];
       if(sprinkleIndex == 9){
           for(let i=0; i<9; i++)
               temps.push("PNG/make5/foam" + i +"_fall");
       }else {
            temps.push("PNG/make5/foam" +sprinkleIndex + "_fall");
       }
       console.log(temps);
       
       return temps;
   }
   

    //计算坐标点
    static caculate(imgPath, dis){
        return new Promise((resolve, reject) => {
            let t = 25;
            let t1 = 5;
            let posV:cc.Vec2[] = []; 
            let node = new cc.Node();
            cc.Canvas.instance.node.addChild(node);
            node.position = cc.v2(10000, 10000);
            cc.loader.loadRes(imgPath, cc.SpriteFrame, function (err, sp) {
                
                if(err){
                    console.log(err + "");
                    return posV;

                }
                // var rt = new cc.RenderTexture()
                // rt.initWithSize(texture.width, texture.height)
                // rt.drawTextureAt(texture, 0, 0)
                // var lData = rt.readPixels()


                let sprite:cc.Sprite = node.addComponent(cc.Sprite);
                sprite.spriteFrame = sp;
                // let texture = sprite.spriteFrame.getTexture();
                // console.log(texture  + "texture");
                let w = sprite.node.width;
                let h = sprite.node.height;
                let t = 36;
                let t1 = 6;
                
                // let texture = CocosHelper.captureNodeTemp(node,w, h);
                // let lData = texture.readPixels();
                // let lCounter = 1;
                // for (let i = 0; i < texture.height; ++i) {
                //     for (let j = 0; j < texture.width; ++j) {
                //         let lPixcelIndex = i * texture.width+ j;
                        
                //         let lAlpha = lData[lPixcelIndex * 4 + 3];
                //         if (lAlpha > 10) {
                //             posV.push(cc.v2(j, texture.height - i));
                //         }
                //     }
                // }

                // posV.forEach(element => {
                //     console.log(element.x + element.y);
                    
                // });
                
                
                let posOrger = cc.v2(-w * 0.5, h * 0.5);

                let detalW = w / t1;
                let detalH = h / t1;

                for(let i = 0; i <t; i++){
                    let de = Math.floor(i / t1);
                    let x = detalW / 2 + i % t1 * detalW;
                    let y = - detalH / 2 - de * detalH;
                    let p = cc.v2(x, y);
                    let end = p.add(posOrger);
                    posV.push(end);
                    // console.log(x + "--" + y);
                    
                }
                
                resolve(posV);
            })
        });
        
    }
    static showHand(handNode:cc.Node, oneNode:cc.Node, twoNode:cc.Node,threeNode: cc.Node){

        let nodePos1 = handNode.parent.convertToNodeSpaceAR(oneNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        let nodePos2 = handNode.parent.convertToNodeSpaceAR(twoNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        let nodePos3 = handNode.parent.convertToNodeSpaceAR(threeNode.convertToWorldSpaceAR(cc.v2(0, 0)));

        // let a1 = cc.moveTo(1.0, nodePos1);
        let a2 = cc.moveTo(1.0, nodePos2);
        let a3 = cc.moveTo(1.0, nodePos3);
        handNode.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function () {
            
            handNode.setPosition(nodePos1);

        }),a2, a3,cc.callFunc(function () {
            
            handNode.setPosition(cc.v2(1000, 1000000));

        }),cc.delayTime(1.0))));
    }


    static findNode(_root:cc.Node = cc.director.getScene(),name:string):cc.Node{
        return CocosHelper.findNode_if(_root,function (_node:cc.Node){
            return _node.name == name;
        });
    }

    static visitNode(_root:cc.Node,_visitFun:Function){
        CocosHelper.findNode_if(_root,function (_node:cc.Node){
            _visitFun(_node);
            return false;
        });
    }

    static getScreenPos(_node:cc.Node,_dir:CocosHelper.ShowDirection):cc.Vec2{
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
            topLeft = _mainC.getCameraToWorldPoint(topLeft,new cc.Vec2());
            bottomRight = _mainC.getCameraToWorldPoint(bottomRight,new cc.Vec2());
        }
      
        let endPosiont:cc.Vec2;
        switch (_dir) {
            case CocosHelper.ShowDirection.show_from_bottom:
                endPosiont = new cc.Vec2(curentPosition.x,bottomRight.y- _node.getContentSize().height*(1-_node.getAnchorPoint().y));
                break;
            case  CocosHelper.ShowDirection.show_from_left:
                endPosiont = new cc.Vec2(topLeft.x -_node.getContentSize().width*(1-_node.getAnchorPoint().x), curentPosition.y);
                break;
            case  CocosHelper.ShowDirection.show_from_right:
                endPosiont =  new cc.Vec2(bottomRight.x+_node.getContentSize().width*_node.getAnchorPoint().x, curentPosition.y);
                break;
            case  CocosHelper.ShowDirection.show_from_top:
                endPosiont =  new cc.Vec2(curentPosition.x, topLeft.y +_node.getContentSize().width*(_node.getAnchorPoint().y));
                break;
        }

        
        if(_node.parent != null){
            endPosiont = _node.parent.convertToNodeSpaceAR(endPosiont);
        }
        return endPosiont;
        
    }

    static hideNode(_node:cc.Node,_dir:CocosHelper.ShowDirection,endFunc:Function = null,isAutoRemove:boolean = true ,_time:number = 0.6){
        let endPosiont:cc.Vec2 = CocosHelper.getScreenPos(_node,_dir);
        let _tween = new cc.Tween();
        _tween.to(_time,{position:endPosiont},{progress:null, easing: "expoIn"});
        if(endFunc != null){
            _tween.call(endFunc);
        }
        if(isAutoRemove){
           _tween.removeSelf();
        }else {
            _tween.call(function(){_node.active = false;});
        }
        _tween.target(_node).start();
    }
    static showBackOut(_node:cc.Node,_dir:CocosHelper.ShowDirection,endFunc:Function = null,_time:number = 1.0){
        _node.active = true;
        let endPosiont = _node.position;
        let statPos:cc.Vec2 = CocosHelper.getScreenPos(_node,_dir);
        _node.setPosition(statPos);
        let _tween = new cc.Tween();
        _tween.to(_time,{position:endPosiont},{progress:null, easing: "backOut"});
        if(endFunc != null){
            _tween.call(endFunc);
        }
        _tween.target(_node).start();
    }
    /**
* 以某个节点为目标，截取目标节点内容图片，返回RenderTexture
* @param {Object} distNode 截图的目标节点
* @example 
* captureNode(cc.find('Canvas')).then(texture=>{console.log(texture)});
*/
  static  captureNode(distNode:cc.Node) {
        return new Promise((resolve, reject) => {
            let width = Math.floor(distNode.width);
            let height = Math.floor(distNode.height);
            let cameraNode = distNode.getChildByName('cameraNode');
            if (!cameraNode) {
                cameraNode = new cc.Node('cameraNode');
                cameraNode.parent = distNode;
                cameraNode.x = 0;
                cameraNode.y = 0;
            }
            let camera = cameraNode.getComponent(cc.Camera);
            if (!camera) {
                camera = cameraNode.addComponent(cc.Camera);
            }
            let preGroug = distNode.group;
            distNode.group = "captureLayer";
            // 设置你想要的截图内容的 cullingMask
            camera.cullingMask = distNode["_cullingMask"];//0xffffffff;

            // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
            let texture = new cc.RenderTexture();
            // 初始化纹理大小，如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            texture.initWithSize(width, height, cc.game._renderContext.STENCIL_INDEX8);
            camera.targetTexture = texture;

            // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
            let scaeY = distNode.scaleY;
            distNode.scaleY = -1*scaeY;
            camera.render(null);
            distNode.scaleY = scaeY;
            distNode.group =preGroug;
            resolve(texture);
        })
    }
    /* 以某个节点为目标，截取目标节点内容图片，返回RenderTexture
    */
    static  captureNodeSize(distNode:cc.Node, width:number, height:number) {
        return new Promise((resolve, reject) => {
    
            let cameraNode = distNode.getChildByName('cameraNode');
            if (!cameraNode) {
                cameraNode = new cc.Node('cameraNode');
                cameraNode.parent = distNode;
                cameraNode.x = 0;
                cameraNode.y = 0;
            }
            let camera = cameraNode.getComponent(cc.Camera);
            if (!camera) {
                camera = cameraNode.addComponent(cc.Camera);
            }
            let preGroug = distNode.group;
            distNode.group = "captureLayer";
            // 设置你想要的截图内容的 cullingMask
            camera.cullingMask = distNode["_cullingMask"];//0xffffffff;
            
            // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
            let texture = new cc.RenderTexture();
            // 初始化纹理大小，如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            texture.initWithSize(width, height, cc.game._renderContext.STENCIL_INDEX8);
            camera.targetTexture = texture;

            // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
            let scaeY = distNode.scaleY;
            distNode.scaleY = -1*scaeY;
            camera.render(null);
            camera.enabled = false;
            distNode.scaleY = scaeY;
            distNode.group =preGroug;
            resolve(texture);
            
        })
    }
    static  captureNodeTemp(distNode:cc.Node, width:number, height:number) {
        let cameraNode = distNode.getChildByName('cameraNode');
            if (!cameraNode) {
                cameraNode = new cc.Node('cameraNode');
                cameraNode.parent = distNode;
                cameraNode.x = 0;
                cameraNode.y = 0;
            }
            let camera = cameraNode.getComponent(cc.Camera);
            if (!camera) {
                camera = cameraNode.addComponent(cc.Camera);
            }
            let preGroug = distNode.group;
            distNode.group = "captureLayer";
            // 设置你想要的截图内容的 cullingMask
            camera.cullingMask = distNode["_cullingMask"];//0xffffffff;
            
            // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
            let texture = new cc.RenderTexture();
            // 初始化纹理大小，如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            texture.initWithSize(width, height, cc.game._renderContext.STENCIL_INDEX8);
            camera.targetTexture = texture;

            // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
            let scaeY = distNode.scaleY;
            distNode.scaleY = -1*scaeY;
            camera.render(null);
            camera.enabled = false;
            distNode.scaleY = scaeY;
            distNode.group =preGroug;
            return texture;
    }
    static saveToAlbum(callback:Function){
        CocosHelper.captureNode(cc.Canvas.instance.node).then((texture:cc.RenderTexture)=>{
            if(texture == null){
                callback(false);
            }else {
                let picData = texture.readPixels();
                let width = texture.width;
                let height = texture.height;
               // let picData = CocosHelper.filpYImage(data,width,height);
             
                if (CC_JSB && !CC_PREVIEW) {
                    let timeName = Date.parse(new Date().toString());
                    let filePath = jsb.fileUtils.getWritablePath() + timeName+'.png';
        
                    let success = jsb.saveImageData(picData, width, height, filePath)
                    if (success) {
                       jsToCPP.getInstance().doRuntimePermission(filePath, 1, function (isSuccess) {
                            
                            console.log("保存相册回调 "+ isSuccess);
                            
                       });
                    }
                    else {
                        callback(false);
                    }
                }
            }
          
       });
    }
 // This is a temporary solution
 static filpYImage (data, width, height) {
    // create the data array
    let picData = new Uint8Array(width * height * 4);
    let rowBytes = width * 4;
    for (let row = 0; row < height; row++) {
        let srow = height - 1 - row;
        let start = srow * width * 4;
        let reStart = row * width * 4;
        // save the piexls data
        for (let i = 0; i < rowBytes; i++) {
            picData[reStart + i] = data[start + i];
        }
    }
    return picData;
}


    static createAnimation(sp:cc.Sprite, frames:cc.SpriteFrame[],delaTime:number):cc.FiniteTimeAction{
        let blenderMix :cc. FiniteTimeAction[] = [];
           for(let s of frames){
               blenderMix.push(cc.callFunc(function(){
                     sp.spriteFrame = s;
               }));
               blenderMix.push(cc.delayTime(delaTime));
           }
        return cc.sequence(blenderMix);
    }

//         /**
// * 以某个节点为目标，截取目标节点内容图片，返回临时图片路径；想要截图干净点，请把目标节点移到屏幕之外
// * @param {Object} distNode 截图的目标节点
// * @example 
// * captureNode2(cc.find('Canvas')).then(imgUrl=>{console.log(imgUrl)});
// */
//     captureNode2(distNode:cc.Node, showLoading = 0) {
//         return new Promise((resolve, reject) => {
//             // if(!Game.isWechat()){
//             // reject('not wechat');
//             // return;
//             // }
//             showLoading && wx.showLoading();
//             // distNode.zIndex = 10;
//             let width = Math.floor(distNode.width);
//             let height = Math.floor(distNode.height);
//             let cameraNode = distNode.getChildByName('cameraNode');
//             if (!cameraNode) {
//                 cameraNode = new cc.Node('cameraNode');
//                 cameraNode.parent = distNode;
//                 cameraNode.x = 0;
//                 cameraNode.y = 0;
//             }
//             let camera = cameraNode.getComponent(cc.Camera);
//             if (!camera) {
//                 camera = cameraNode.addComponent(cc.Camera);
//             }
//             let preGroug = distNode.group;
//             distNode.group = "captureLayer";
//             // 设置你想要的截图内容的 cullingMask
//             camera.cullingMask = distNode["_cullingMask"];//0xffffffff;

//             // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
//             let texture = new cc.RenderTexture();
//             // 初始化纹理大小，如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
//             texture.initWithSize(width, height, cc.game._renderContext.STENCIL_INDEX8);
//             camera.targetTexture = texture;

//             // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
//             let scaeY = distNode.scaleY;
//             distNode.scaleY = -1*scaeY;
//             camera.render(null);
//             distNode.scaleY = scaeY
//             // 这样我们就能从 RenderTexture 中获取到数据了
//             let data = texture.readPixels();
//         //console.log(data);



//             let texture2 = new cc.Texture2D();
//             texture2.initWithData(data, 32, width ,height);

//         let spriteFrame = new cc.SpriteFrame();
//         spriteFrame.setTexture(texture);
// this.cakes[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
// distNode.group =preGroug;
//         // let node = new cc.Node();
//         // let sprite = node.addComponent(cc.Sprite);
//         // sprite.spriteFrame = spriteFrame;

//         // node.zIndex = cc.macro.MAX_ZINDEX;
//         // node.parent = cc.find("gameCenter");

//             // 接下来就可以对这些数据进行操作了
//             let tempCanvas = document.createElement('canvas');
//             let ctx = tempCanvas.getContext('2d');
//             tempCanvas.width = texture.width;
//             tempCanvas.height = texture.height;
//             // 官方提供方法，生成图片速度较慢
//             let rowBytes = width * 4;
//             for (let row = 0; row < height; row++) {
//                 let srow = height - 1 - row;//图片翻转的处理
//                 let imageData = ctx.createImageData(width, 1);
//                 let start = Math.floor(srow * width * 4);
//                 for (let i = 0; i < rowBytes; i++) {
//                     imageData.data[i] = data[start + i];
//                 }

//                 ctx.putImageData(imageData, 0, row);
//             }


//             let dataURL = tempCanvas.toDataURL("image/png");
//             console.log(dataURL);
//             resolve(dataURL);
//             return;
//             // var tempFilePath = cc.game.canvas.toTempFilePathSync({
//             //     x: 0,
//             //     y: 0,
//             //     width: width,
//             //     height: height,
//             //     destWidth: width,
//             //     destHeight: height,
//             // });
//             // if (tempFilePath) {
//             //     showLoading && wx.hideLoading();
//             //     resolve(tempFilePath);
//             // } else {
//             //     showLoading && wx.hideLoading();
//             //     reject(err);
//             // }
//         })
//     }
}

export namespace CocosHelper {
    export enum  ShowDirection {
        show_from_top,
        show_from_bottom,
        show_from_left,
        show_from_right
    }
}