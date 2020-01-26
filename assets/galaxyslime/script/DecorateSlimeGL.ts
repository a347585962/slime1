import IconItem from "../common/Script/ads/IconItemGL";
import ColorTouchEvent from "./ColorTouchEventGL";
import { CocosHelper } from "../common/Script/codebase/utils/CocosHelperGL";
import MoveIn from "../common/Script/compoent/MoveInGL";
import DataConfig from "./DataConfigGL";
import showLaoding from "../common/Script/ads/showLaodingGL";
import PopupComponet from "./PopupComponetGL";
import TransitionScene from "../common/Script/codebase/TransitionSceneGL";
import SpriteDrag from "../common/Script/codebase/SpriteDrag/SpriteDragGL";

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
export default class DecorateSlime extends cc.Component {
    @property(cc.Prefab)
    insta: cc.Prefab = null;

    @property(cc.Node)
    private conteneNode: cc.Node = null;
    private iconsPool: cc.NodePool = null;
    private foodName = null;
    private photoNode: cc.Node = null;
    private filePath: string = null;
    private food = {
        name: 'snowCone',
        index: 1
    }
    onLoad() {
        
        if (this.iconsPool == null) {
            this.iconsPool = new cc.NodePool;
            for (let i = 0; i < 15; i++) {
                this.iconsPool.put(cc.instantiate(this.insta));
            }
        } 
        this.foodName = 'galaxySlime';
        cc.find(`Canvas/${this.foodName}`).getComponent(MoveIn).actionCallBack = function () {
            cc.find(`Canvas/${this.foodName}/write`).getComponent(MoveIn).doShowAction();
          
           
        }.bind(this)
        cc.find(`Canvas/${this.foodName}/write`).getComponent(MoveIn).actionCallBack = function () {
            cc.find(`Canvas/${this.foodName}/write`).getComponent(cc.Button).interactable = true;
            cc.find('Canvas/tipClick').active = true;
        }.bind(this);

    }
    writeBtn(event) {
        cc.find('Canvas/tipClick').active = false;
        let node = event.target;
        node.getComponent(cc.Button).interactable = false;
        cc.find('Canvas/write/mask').removeAllChildren();
        this.node.getChildByName('mask').active = true;
        this.node.getChildByName('write').active = true;
        this.node.getChildByName('write').getComponent(cc.AudioSource).play();
        //this.node.getChildByName('write').scale =0;
        this.node.getChildByName('write').runAction(cc.sequence(
            cc.scaleTo(0.5, 1),
            cc.callFunc(function () {
                this.showIconBg('color');
            }.bind(this))
        ))
        

       
    }
    writeClose() {
        CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView").active = false;
        this.node.getChildByName('write').getComponent(cc.AudioSource).play();
        this.node.getChildByName('write').runAction(cc.sequence(
            cc.scaleTo(0.5, 0),
            cc.callFunc(function () {
                this.node.getChildByName('write').active = false;
                this.node.getChildByName('mask').active = false;
               
                cc.find(`Canvas/${this.foodName}/write`).getComponent(cc.Button).interactable = true;
            }.bind(this))
        ))
       
        
    }
    writeOk() {
        this.node.getChildByName('write').getComponent(cc.AudioSource).play();
        CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView").active = false;
        cc.find(`Canvas/${this.foodName}/write`).removeAllChildren();
        CocosHelper.captureNode(cc.find('Canvas/write/mask')).then((texture:cc.RenderTexture) => {
            let node = new cc.Node();
            cc.log(texture);
            node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
           
            cc.find(`Canvas/${this.foodName}/write`).addChild(node);
            node.getComponent(cc.Sprite).srcBlendFactor = cc.macro.BlendFactor.ONE;
           
            node.setScale(1.35);
            // node.setPosition(cc.v2(0, -50));
            this.node.getChildByName('write').runAction(cc.sequence(
                cc.scaleTo(0.5, 0),
                cc.callFunc(function () {
                    this.node.getChildByName('write').active = false;
                    this.node.getChildByName('mask').active = false;
                    cc.find('Canvas/decorate').getComponent(cc.ParticleSystem).resetSystem();
                    cc.find('Canvas/decorate').getComponent(cc.AudioSource).play();
                    cc.find(`Canvas/${this.foodName}/write`).getComponent(cc.Button).interactable = true;
                    let btn_next = CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
                    btn_next.active = true;
                    btn_next.runAction(cc.repeat(cc.sequence(cc.scaleTo(0.2, 1.2), cc.scaleTo(0.2, 1)), 2));

                }.bind(this))
            ))
        })
        
    }

    showIconBg(customData: string) {
        let map = new Map<string, number>();
        map.set('color', 15);
        map.set('galaxySlime', 15);
        let icon_board = CocosHelper.findNode(cc.Canvas.instance.node, "decScrollView");
        //icon_board.getComponent(cc.AudioSource).play();
        icon_board.active = true;
        icon_board.opacity = 0;
        // icon_board.setPosition(cc.v2(0, -180));
        icon_board.getComponent(MoveIn).doShowAction();

        let iconPaths: string[] = [];
        iconPaths.push("galaxyslime/image/icon/reset"); 
        for (let index = 0; index < map.get(customData); index++) {
            iconPaths.push("galaxyslime/image/icon/" + customData + "/" + index);
        }
        let v = this.conteneNode.children.slice();
        for (let c of v) {
            this.iconsPool.put(c);
        }
        let self = this;

        cc.loader.loadResArray(iconPaths, cc.SpriteFrame, (erro, frames: cc.SpriteFrame[]) => {
            cc.log(erro);

            for (let i = 0; i < frames.length; i++) {
                let node: cc.Node = null;
                if (self.iconsPool.size() > 0) {
                    node = self.iconsPool.get();
                } else {
                    node = cc.instantiate(self.insta);
                }
                
                node.getChildByName("0").getComponent(cc.Sprite).spriteFrame = frames[i];
                cc.loader.setAutoReleaseRecursively(frames[i], true);


                node.parent = self.conteneNode;
                node.name = customData;
                let item = node.getComponent(IconItem);
                item.index = i;
                item.isRewardLock = i % 2 == 0;
                item.key = item.moduleName = customData;

                if(i == 0){
                    item.key = "lock";
                }

                item.init();
                let event = new cc.Component.EventHandler;
                event.component = "DecorateSlimeGL";
                event.handler = "touch";
                event.target = self.node;
                item.getComponent(cc.Toggle).isChecked = false;
                item.getComponent(cc.Toggle).checkEvents = [event];
            }
            let scrollviewCm = icon_board.getComponent(cc.ScrollView);
            scrollviewCm.scrollToLeft();

        });
       
    }
    touch(a: cc.Toggle) {
        cc.log(a);
        cc.find('Canvas/write/mask').getComponent(ColorTouchEvent).destroyTouchEvent();
        if (a.isChecked) {
            this.node.getComponent(cc.AudioSource).play();
            let node = a.node;
            let item = node.getComponent(IconItem);
            let index = item.index;
            let pos = a.node.convertToWorldSpaceAR(cc.v2(0, 0));

            let customData = a.node.name;
            console.log(customData);
            console.log(index);

            if (index == 0) {
                if (customData == 'color') {
                    cc.find('Canvas/write/mask').removeAllChildren();
                } else {
                    this.node.getChildByName('btn_next1').getComponent(cc.Button).interactable = true;
                    let oriNode = cc.find(`Canvas/${customData}`);
                    oriNode.children.forEach(child => {
                        if (child.name == 'stickerCopy') {
                            child.destroy();
                        }
                    })
                }
                
            } else {
                if (customData == 'color') {
                    cc.loader.loadRes(`galaxyslime/image/${customData}/${index - 1}`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        cc.log(err);
                        let node = new cc.Node();
                        node.addComponent(cc.Sprite).spriteFrame = spriteFrame;
                        node.getComponent(cc.Sprite).srcBlendFactor = cc.macro.BlendFactor.ONE;
                       
                        
                        cc.find('Canvas/write/mask').getComponent(ColorTouchEvent).init(node);
                       
                        
                    }.bind(this));
                } else {
                    this.node.getChildByName('btn_next1').active = true;
                    this.node.getChildByName('btn_next1').getComponent(cc.Button).interactable = false;
                    cc.loader.loadRes(`galaxyslime/image/${customData}/${index - 1}`, cc.SpriteFrame, function (err, spriteFrame) {
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        cc.log(err);
                        let oriNode = cc.find(`Canvas/${customData}/sticker`);
                        let copyNode = cc.instantiate(oriNode);
                        copyNode.active = true;
                        copyNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        cc.loader.setAutoReleaseRecursively(spriteFrame, true);
                        copyNode.parent = oriNode.parent;
                        copyNode.name = 'stickerCopy'
                        copyNode.setScale(0);
                        let position = oriNode.parent.convertToNodeSpaceAR(node.convertToWorldSpace(cc.v2(0,0)));
                        copyNode.setPosition(position);
                        let action = cc.spawn(cc.sequence(cc.moveTo(0.8,cc.v2(-100,300)),cc.moveTo(0.5,cc.v2(oriNode.getPosition()))),cc.scaleTo(1.3,oriNode.scale));
                        copyNode.runAction(cc.sequence(
                            action,
                            cc.callFunc(function () {
                                this.node.getChildByName('btn_next1').getComponent(cc.Button).interactable = true;
                                cc.find('Canvas/decorateParticle').getComponent(cc.ParticleSystem).resetSystem();
                                cc.find('Canvas/decorateParticle').getComponent(cc.AudioSource).play();
                                let pos = this.node.convertToNodeSpaceAR(oriNode.convertToWorldSpaceAR(cc.v2(0, 0)));
                                cc.find('Canvas/decorateParticle').setPosition(pos);
                                if (cc.find('Canvas/finger1')) {
                                    cc.find('Canvas/finger1').active = true;
                                }
                            }.bind(this)),
                            ));    
                    }.bind(this));
                }
            }
        }
    }
    showSticker() {
        this.node.getChildByName('btn_next').active = false;
        cc.find(`Canvas/${this.foodName}/write`).getComponent(cc.Button).interactable = false;
        this.showIconBg(this.foodName);
    }
    camera() {
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = false;
        CocosHelper.captureNode(cc.Canvas.instance.node).then((texture:cc.RenderTexture)=>{
            if(texture != null){      
                let spriteFrame = new cc.SpriteFrame();
                spriteFrame.setTexture(texture);
                this.photoNode = new cc.Node();
                let sprite = this.photoNode.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                //sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                cc.find('photo',this.node).active =true;
                var maskPhoto = cc.find('photo/mask',this.node);
                let designSize = this.photoNode.getContentSize();
                let width = maskPhoto.width;
                let height = maskPhoto.height;
                
                let scaleX = null;
                let scaleY = null;
                
                if (width < designSize.width) {
                    scaleX = width / designSize.width;
                    this.photoNode.setScale(scaleX);
                }
                if (height < designSize.height) {
                    scaleY = height / designSize.height;
                    this.photoNode.setScale(scaleY);
                   
                }
                if (scaleX && scaleY) {
                    if (scaleX > scaleY) {
                        this.photoNode.setScale(scaleX);
                    } else {
                        this.photoNode.setScale(scaleY);
                    } 
                }
                maskPhoto.addChild(this.photoNode);
                this.photoNode.scale = this.photoNode.scale * 1.1;
                this.photoNode.setPosition(cc.v2(0, -50));
                cc.log(this.photoNode);
                if (CC_JSB&& !CC_PREVIEW) {

                    let picData = texture.readPixels();
                    let width = texture.width;
                    let height = texture.height;
                    let timeName = Date.parse(new Date().toString());
                    this.filePath = jsb.fileUtils.getWritablePath() + timeName+'.png';
    
                    let success = jsb.saveImageData(picData, width, height, this.filePath)
                    if(!success){
                        this.filePath = "";
                    }
                }
            }  
       });
        this.node.getChildByName('btn_camera').getComponent(cc.AudioSource).play();
    }
    downloadImag(){
        this.photoNode.destroy();
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        cc.find('photo',this.node).active = false;
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            if (this.filePath != '') {
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
                    var popup = this.node.getChildByName('popup')
                    popup.active = true;
                    popup.getComponent(PopupComponet).showPopup();
                    popup.runAction(cc.sequence(cc.delayTime(3),cc.callFunc(function(){
                        popup.getComponent(PopupComponet).hidePopup();
                    }.bind(this)))); 
                    if(isSuccess){
                        popup.getComponent(PopupComponet).setTip('Photo downloaded successfully, please check in the album!');
                    }else{
                        popup.getComponent(PopupComponet).setTip('Picture download failed. Please check whether access to the album is open or not!');
                    }      
               }.bind(this));
            }
            else {
                console.log('download failed!');
            }
        }
    }
    shareImage(){
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.photoNode.destroy();
        cc.find('photo',this.node).active = false;
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        if (CC_JSB&& !CC_PREVIEW) {
            if (this.filePath != '') {
               jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function (isSuccess) {  
                    console.log("保存相册回调 "+ isSuccess);
               });
            }
            else {
                console.log('download failed!')
            }
        }
    }  
    closePhoto(){
        this.photoNode.destroy();
        cc.find('Canvas/btn_camera').getComponent(cc.Button).interactable = true;
        cc.find('Canvas/photo/btn_x').getComponent(cc.AudioSource).play();
        this.node.getChildByName('photo').active = false;
    }
    enterDisplayScence() {
       
        CocosHelper.captureNodeSize(cc.find(`Canvas/${this.foodName}`), cc.view.getVisibleSize().width, cc.view.getVisibleSize().height).then((texture: cc.RenderTexture) => {
            DataConfig.getInstance().setTexture(texture);
            console.log(DataConfig.getInstance().getChangeIndex())
            if (DataConfig.getInstance().getChangeIndex()!=null) {
                let index = DataConfig.getInstance().getChangeIndex();
                CocosHelper.saveImageByTexture(texture, `${this.foodName}${index}`, function () {
                    this.food.name = `${this.foodName}${index}`;
                    this.food.index = index;
                    DataConfig.getInstance().changeFoodByIndex(index, this.food);
                    console.log('dsferf'+index);
                    // showLaoding.getInstance().loadingDoneCallback = function () {
                    //     showLaoding.getInstance().loadingDoneCallback = null;
                        TransitionScene.changeScene('displaySlimeGL',12);
                    //}.bind(this);
                    //showLaoding.getInstance().showAds(false);
                }.bind(this))
            } else {
                let index = DataConfig.getInstance().getFoodIndex();
                CocosHelper.saveImageByTexture(texture, `${this.foodName}${index}`, function () {
                    this.food.name = `${this.foodName}${index}`;
                    this.food.index = index;
                    DataConfig.getInstance().addFood(this.food);
                    console.log('retret'+index);
                    // showLaoding.getInstance().loadingDoneCallback = function () {
                    //     showLaoding.getInstance().loadingDoneCallback = null;
                        TransitionScene.changeScene('displaySlimeGL',12);
                    // }.bind(this);
                    // showLaoding.getInstance().showAds(false);
                }.bind(this))
            }
           
        })
       
    }
    stickerTouchMOve() {
        if (cc.find('Canvas/finger1')) {
            cc.find('Canvas/finger1').destroy();
        }
        
    }
}
