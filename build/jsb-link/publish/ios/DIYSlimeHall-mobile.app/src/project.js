window.__require = function e(t, o, n) {
function c(a, s) {
if (!o[a]) {
if (!t[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!t[r]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(r, !0);
if (i) return i(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
}
var d = o[a] = {
exports: {}
};
t[a][0].call(d.exports, function(e) {
return c(t[a][1][e] || e);
}, d, d.exports, e, t, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) c(n[a]);
return c;
}({
AddController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "18dfb+haP9P2ogn/wIRa1QY", "AddController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SpoonTouchEvent"), c = e("./TipManager"), i = e("../../common/Script/codebase/SpriteDrag/SpriteDrag"), a = e("../../common/Script/compoent/MoveIn"), s = e("../../common/Script/codebase/TransitionScene"), r = cc._decorator, l = r.ccclass, d = (r.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.count = 0;
return t;
}
t.prototype.onLoad = function() {
this.init();
};
t.prototype.init = function() {
this.node.getChildByName("glue").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("glue").getComponent(i.default).enabled = !0;
this.node.getChildByName("finger1").active = !0;
}.bind(this);
this.node.getChildByName("activator").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("finger1").zIndex = 10;
this.node.getChildByName("finger1").active = !0;
this.node.getChildByName("activator").getComponent(i.default).enabled = !0;
}.bind(this);
cc.find("Canvas/dish/spoon").getComponent(a.default).actionCallBack = function() {
cc.find("Canvas/dish/tipRotate").active = !0;
cc.find("Canvas/dish/spoon").getComponent(i.default).enabled = !0;
}.bind(this);
cc.find("Canvas/dish_green/spoon").getComponent(a.default).actionCallBack = function() {
cc.find("Canvas/dish_green/tipRotate").active = !0;
cc.find("Canvas/dish_green").zIndex = 1;
cc.find("Canvas/dish_red").zIndex = 0;
cc.find("Canvas/dish_green/spoon").getComponent(i.default).enabled = !0;
}.bind(this);
cc.find("Canvas/dish_red/spoon").getComponent(a.default).actionCallBack = function() {
cc.find("Canvas/dish_red/tipRotate").active = !0;
cc.find("Canvas/dish_red/spoon").getComponent(i.default).enabled = !0;
}.bind(this);
this.node.getChildByName("waterCup").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("finger1").active = !0;
this.node.getChildByName("waterCup").getComponent(i.default).enabled = !0;
}.bind(this);
cc.find("Canvas/dish_red/glitter").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
var e = this.node.convertToNodeSpaceAR(cc.find("Canvas/dish_red/glitter").convertToWorldSpaceAR(cc.v2(0, 0)));
this.node.getChildByName("decorateParticle").setPosition(e);
this.node.getChildByName("decorateParticle").setPosition(cc.find("Canvas/dish").getPosition());
cc.find("Canvas/dish_red/glitter").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(200, 200)), cc.callFunc(function() {
cc.find("Canvas/dish_red/tipMove").active = !0;
cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !0;
}.bind(this))));
}.bind(this);
cc.find("Canvas/dish_green/glitter").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
var e = this.node.convertToNodeSpaceAR(cc.find("Canvas/dish_green/glitter").convertToWorldSpaceAR(cc.v2(0, 0)));
this.node.getChildByName("decorateParticle").setPosition(e);
cc.find("Canvas/dish_green/glitter").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(-200, 200)), cc.callFunc(function() {
cc.find("Canvas/dish_green/tipMove").active = !0;
cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !0;
}.bind(this))));
}.bind(this);
cc.find("Canvas/dish_red/foodcolor").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
var e = this.node.convertToNodeSpaceAR(cc.find("Canvas/dish_red/foodcolor").convertToWorldSpaceAR(cc.v2(0, 0)));
this.node.getChildByName("decorateParticle").setPosition(e);
cc.find("Canvas/dish_red/foodcolor").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(200, 200)), cc.callFunc(function() {
cc.find("Canvas/dish_red/tipMove").active = !0;
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !0;
}.bind(this))));
}.bind(this);
cc.find("Canvas/dish_green/foodcolor").getComponent(a.default).actionCallBack = function() {
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
var e = this.node.convertToNodeSpaceAR(cc.find("Canvas/dish_green/foodcolor").convertToWorldSpaceAR(cc.v2(0, 0)));
this.node.getChildByName("decorateParticle").setPosition(e);
cc.find("Canvas/dish_green/foodcolor").runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(-200, 200)), cc.callFunc(function() {
cc.find("Canvas/dish_green/tipMove").active = !0;
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !0;
}.bind(this))));
}.bind(this);
};
t.prototype.glueTouchEnd = function() {
this.node.getChildByName("finger1").active = !1;
this.node.getChildByName("glue").getComponent(i.default).enabled = !1;
this.node.getChildByName("glue").runAction(cc.sequence(cc.spawn(cc.rotateTo(.5, -120), cc.moveTo(.5, cc.v2(-50, 230))), cc.callFunc(function() {
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).play();
cc.find("glue/pourGlue", this.node).active = !0;
cc.find("dish/mix/ball_glue", this.node).runAction(cc.scaleTo(3, 1));
}.bind(this)), cc.delayTime(3), cc.callFunc(function() {
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).stop();
cc.find("glue/pourGlue", this.node).active = !1;
}.bind(this)), cc.spawn(cc.rotateTo(.5, 0), cc.moveBy(.5, cc.v2(1600, 0))), cc.callFunc(function() {
this.node.getChildByName("waterCup").getComponent(a.default).doShowAction();
}.bind(this))));
};
t.prototype.glueTouchCancle = function() {
cc.find("glue/glue0_shadow", this.node).active = !0;
console.log("glueTouchCancle");
this.node.getChildByName("finger1").active = !1;
};
t.prototype.glueTouchMove = function() {
cc.find("glue/glue0_shadow", this.node).active = !1;
this.node.getChildByName("finger1").active = !1;
console.log("glueTouchMove");
};
t.prototype.activatorTouchEnd = function() {
console.log("activatorTouchEnd");
this.node.getChildByName("activator").getComponent(i.default).enabled = !1;
this.node.getChildByName("activator").runAction(cc.sequence(cc.spawn(cc.rotateTo(.5, -145), cc.moveTo(.5, cc.v2(160, 300))), cc.callFunc(function() {
cc.find("activator/activator0_water", this.node).active = !1;
cc.find("activator/activator1_water", this.node).active = !0;
cc.find("activator/dropwater", this.node).active = !0;
cc.find("activator/dropwater", this.node).getComponent(cc.AudioSource).play();
cc.find("dish_red/mix1/activator", this.node).setPosition(cc.v2(-50, -50));
cc.find("dish_red/mix1/activator", this.node).runAction(cc.scaleTo(2, 1));
}.bind(this)), cc.delayTime(2), cc.moveTo(.5, cc.v2(-90, 300)), cc.callFunc(function() {
cc.find("activator/dropwater", this.node).active = !0;
cc.find("activator/dropwater", this.node).getComponent(cc.AudioSource).play();
cc.find("dish_green/mix1/activator", this.node).setPosition(cc.v2(-50, -50));
cc.find("dish_green/mix1/activator", this.node).runAction(cc.scaleTo(2, 1));
}.bind(this)), cc.delayTime(2), cc.callFunc(function() {
cc.find("activator/dropwater", this.node).getComponent(cc.AudioSource).stop();
cc.find("activator/dropwater", this.node).active = !1;
}.bind(this)), cc.spawn(cc.rotateTo(.5, 0), cc.moveBy(.5, cc.v2(1600, 0))), cc.callFunc(function() {
cc.find("Canvas/dish_red/tipRotate").active = !0;
cc.find("Canvas/dish_green/tipRotate").active = !0;
cc.find("Canvas/dish_green/spoon").getComponent(i.default).enabled = !0;
cc.find("Canvas/dish_red/spoon").getComponent(i.default).enabled = !0;
}.bind(this))));
};
t.prototype.activatorTouchCancle = function() {
cc.find("activator/activator_shadow", this.node).active = !0;
};
t.prototype.activatorTouchMove = function() {
this.node.getChildByName("finger1").active = !1;
cc.find("activator/activator_shadow", this.node).active = !1;
};
t.prototype.waterCupTouchStart = function() {
cc.find("Canvas/waterCup/watercup_shadow").active = !1;
this.node.getChildByName("finger1").active = !1;
};
t.prototype.waterCupTouchEnd = function() {
this.node.getChildByName("waterCup").getComponent(i.default).enabled = !1;
this.node.getChildByName("waterCup").runAction(cc.sequence(cc.spawn(cc.rotateTo(.5, -90), cc.moveTo(.5, cc.v2(-80, 270))), cc.callFunc(function() {
cc.find("Canvas/waterCup/pourWater").active = !0;
cc.find("Canvas/waterCup/pourWater").getComponent(cc.AudioSource).play();
cc.find("Canvas/waterCup/mask").active = !0;
cc.find("Canvas/waterCup/water").active = !1;
cc.find("Canvas/waterCup/mask/water_fall").runAction(cc.moveBy(2, cc.v2(-80, 0)));
cc.find("Canvas/dish/mix/bowl_water").runAction(cc.scaleTo(2, 1));
}.bind(this)), cc.delayTime(2), cc.callFunc(function() {
cc.find("Canvas/waterCup/pourWater").getComponent(cc.AudioSource).stop();
cc.find("Canvas/waterCup/pourWater").active = !1;
}.bind(this)), cc.spawn(cc.rotateTo(.5, 0), cc.moveBy(.5, cc.v2(1700, 0))), cc.callFunc(function() {
cc.find("Canvas/dish/spoon").getComponent(a.default).doShowAction();
}.bind(this))));
};
t.prototype.waterCupTouchCancle = function() {
cc.find("Canvas/waterCup/watercup_shadow").active = !0;
};
t.prototype.glitterTouchMove = function(e) {
var t = e.target, o = t.parent, n = t.getPosition();
if ("dish_green" == o.name) {
cc.find("Canvas/dish_red/glitter").getComponent(i.default) && (cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !1);
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !1);
if (n.x > 100) {
o.zIndex = 1;
cc.find("Canvas/dish_red").zIndex = 0;
}
} else {
cc.find("Canvas/dish_green/glitter").getComponent(i.default) && (cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !1);
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !1);
if (n.x < -100) {
o.zIndex = 1;
cc.find("Canvas/dish_green").zIndex = 0;
}
}
};
t.prototype.glitterTouchEnd = function(e) {
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_green/glitter").getComponent(i.default) && (cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/glitter").getComponent(i.default) && (cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !0);
var t = e.target, o = t.parent;
o.getChildByName("tipMove").active = !1;
t.removeComponent(i.default);
t.runAction(cc.sequence(cc.moveTo(.5, cc.v2(100, 150)), cc.callFunc(function() {
t.getComponent(cc.AudioSource).play();
cc.find("mask/glitter", t).runAction(cc.moveBy(2, cc.v2(-100, -100)));
t.getChildByName("pourGlitter").active = !0;
cc.find("mix/glitter", o).runAction(cc.scaleTo(2, 1));
}.bind(this)), cc.delayTime(2), cc.callFunc(function() {
t.getComponent(cc.AudioSource).stop();
t.getChildByName("pourGlitter").active = !1;
o.getChildByName("foodcolor").getComponent(a.default).doShowAction();
o.getChildByName("foodcolor").getComponent(i.default) && (o.getChildByName("foodcolor").getComponent(i.default).enabled = !1);
}.bind(this)), cc.moveBy(.5, cc.v2(1e3, 0))));
};
t.prototype.foodColorTouchMove = function(e) {
var t = e.target, o = t.parent, n = t.getPosition();
if ("dish_green" == o.name) {
cc.find("Canvas/dish_red/glitter").getComponent(i.default) && (cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !1);
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !1);
if (n.x > 100) {
o.zIndex = 1;
cc.find("Canvas/dish_red").zIndex = 0;
}
} else {
cc.find("Canvas/dish_green/glitter").getComponent(i.default) && (cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !1);
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !1);
if (n.x < -100) {
o.zIndex = 1;
cc.find("Canvas/dish_green").zIndex = 0;
}
}
};
t.prototype.touchCancle = function() {
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_green/glitter").getComponent(i.default) && (cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/glitter").getComponent(i.default) && (cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !0);
};
t.prototype.foodColorTouchEnd = function(e) {
cc.find("Canvas/dish_green/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_green/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/foodcolor").getComponent(i.default) && (cc.find("Canvas/dish_red/foodcolor").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_green/glitter").getComponent(i.default) && (cc.find("Canvas/dish_green/glitter").getComponent(i.default).enabled = !0);
cc.find("Canvas/dish_red/glitter").getComponent(i.default) && (cc.find("Canvas/dish_red/glitter").getComponent(i.default).enabled = !0);
var t = e.target, o = t.parent;
o.getChildByName("tipMove").active = !1;
t.removeComponent(i.default);
t.runAction(cc.sequence(cc.spawn(cc.moveTo(.5, cc.v2(50, 250)), cc.rotateTo(.5, -90)), cc.callFunc(function() {
t.getComponent(cc.AudioSource).play();
t.getChildByName("foodcolour3").active = !0;
t.getChildByName("foodcolour4").active = !0;
t.getChildByName("foodcolour1").active = !1;
t.getChildByName("foodcolour2").active = !1;
t.getChildByName("pourColor").active = !0;
cc.find("mix/foodcolor", o).runAction(cc.scaleTo(2, 2));
}.bind(this)), cc.delayTime(2), cc.callFunc(function() {
t.getComponent(cc.AudioSource).stop();
t.getChildByName("pourColor").active = !1;
}.bind(this)), cc.rotateTo(.5, 0), cc.callFunc(function() {
t.getChildByName("foodcolour3").active = !1;
t.getChildByName("foodcolour4").active = !1;
t.getChildByName("foodcolour1").active = !0;
t.getChildByName("foodcolour2").active = !0;
}.bind(this)), cc.moveBy(.5, cc.v2(1e3, 0)), cc.callFunc(function() {
o.getChildByName("spoon").getComponent(a.default).doShowAction();
}.bind(this))));
};
t.prototype.stopAction = function() {
cc.find("dish/mix", this.node).stopAllActions();
cc.find("dish/mix", this.node).setScale(1);
};
t.prototype.mixFinish = function() {
this.stopAction();
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
this.node.getChildByName("decorateParticle").setPosition(cc.find("Canvas/dish").getPosition());
cc.find("Canvas/dish/spoon").getComponent(i.default).enabled = !1;
cc.find("Canvas/dish/spoon/spoon0").active = !0;
cc.find("Canvas/dish/spoon").runAction(cc.sequence(cc.moveBy(.5, cc.v2(1e3, 0)), cc.callFunc(function() {
cc.find("Canvas/dish/spoon").opacity = 0;
cc.find("Canvas/dish").runAction(cc.sequence(cc.spawn(cc.moveTo(.5, cc.v2(0, 150)), cc.scaleTo(.5, .6)), cc.callFunc(function() {
cc.find("Canvas/dish_green").getComponent(a.default).doShowAction();
cc.find("Canvas/dish_red").getComponent(a.default).doShowAction();
}.bind(this)), cc.delayTime(2), cc.moveTo(.5, cc.v2(-50, 50)), cc.callFunc(function() {
cc.find("Canvas/dish_green/mix").runAction(cc.scaleTo(4, 1));
cc.find("Canvas/dish/mix").runAction(cc.scaleTo(4, .8));
cc.find("Canvas/dish/pour_green").active = !0;
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).play();
}.bind(this)), cc.delayTime(4), cc.callFunc(function() {
cc.find("Canvas/dish/pour_green").active = !1;
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).stop();
}.bind(this)), cc.moveTo(.5, cc.v2(50, 50)), cc.callFunc(function() {
cc.find("Canvas/dish_red/mix").runAction(cc.scaleTo(4, 1));
cc.find("Canvas/dish/mix").runAction(cc.scaleTo(4, 0));
cc.find("Canvas/dish/pour_red").active = !0;
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).play();
}.bind(this)), cc.delayTime(4), cc.callFunc(function() {
cc.find("Canvas/dish/pour_red").active = !1;
this.node.getChildByName("pourAudio").getComponent(cc.AudioSource).stop();
}.bind(this)), cc.moveTo(.5, cc.v2(1e3, 0)), cc.callFunc(function() {
cc.find("Canvas/dish").opacity = 0;
cc.find("Canvas/dish_red").runAction(cc.moveBy(.5, cc.v2(0, 100)));
cc.find("Canvas/dish_green").runAction(cc.moveBy(.5, cc.v2(0, 100)));
}.bind(this)), cc.delayTime(.5), cc.callFunc(function() {
c.default.getInstance().jumpTips();
cc.find("Canvas/dish_red/glitter").getComponent(a.default).doShowAction();
cc.find("Canvas/dish_green/glitter").getComponent(a.default).doShowAction();
}.bind(this))));
}.bind(this))));
};
t.prototype.mixColorFinish = function(e) {
var t = e.node, o = t.parent;
this.node.getChildByName("decorateParticle").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("decorateParticle").getComponent(cc.AudioSource).play();
this.node.getChildByName("decorateParticle").setPosition(o.getPosition());
o.getChildByName("spoon").getComponent(i.default).enabled = !1;
o.getChildByName("spoon").getChildByName("spoon0").active = !0;
o.getChildByName("spoon").runAction(cc.moveTo(.5, cc.v2(150, 100)));
this.count = this.count + 1;
t.stopAllActions();
t.setScale(1);
if ("mix" == t.name) {
o.getChildByName("mix1").rotation = t.rotation;
t.active = !1;
o.getChildByName("mix1").active = !0;
o.getChildByName("spoon").getComponent(n.default).mixNode = o.getChildByName("mix1");
if (2 == this.count) {
c.default.getInstance().jumpTips();
cc.find("Canvas/activator").getComponent(a.default).doShowAction();
cc.find("Canvas/activator").zIndex = 4;
}
} else {
o.getChildByName("spoon").runAction(cc.moveBy(.5, cc.v2(1e3, 0)));
if (4 == this.count) {
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
s.default.changeScene("rubSlimeCS");
}.bind(this))));
}
}
};
return t = __decorate([ l ], t);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../../common/Script/codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/compoent/MoveIn": "MoveIn",
"./SpoonTouchEvent": "SpoonTouchEvent",
"./TipManager": "TipManager"
} ],
AddEggMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "657d7aTXXxEu6+u0pXNeHgI", "AddEggMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/NodeCompMS"), c = e("../codebase/utils/NodeTransformMS"), i = e("../codebase/SpriteDrag/SpriteDragMS"), a = e("../codebase/SpriteDrag/DragEventListenerMS"), s = e("../codebase/utils/CocosHelperMS"), r = e("../codebase/EventListenerMS"), l = cc._decorator, d = l.ccclass, p = l.property, u = l.requireComponent, h = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.addTouchPos = new c.default();
t.fallPos = new c.default();
t.isAutoFall = !1;
t.finger = null;
t.eggInBowl = null;
t.addEggLis = [];
t.eggAudio = null;
t.breakNode = null;
t.fallNode = null;
t.m_drarg = null;
return t;
}
o = t;
t.prototype.start = function() {
if (null == this.m_drarg) {
this.m_drarg = this.node.getComponent(i.default);
null != this.m_drarg && this.m_drarg.eventTouchs.push(new a.default(this, "dragToBowl", a.DragEventType.TouchEnd));
}
if (null == this.breakNode) {
this.breakNode = this.node.getChildByName("breakNode");
this.breakNode.active = !1;
}
if (null == this.fallNode) {
this.fallNode = this.node.getChildByName("fallNode");
this.fallNode.active = !1;
}
if (null == this.eggInBowl) {
this.eggInBowl = s.CocosHelper.findNode(cc.Canvas.instance.node, this.node.name + "Inbowl");
null != this.eggInBowl && (this.eggInBowl.active = !1);
}
};
t.prototype.dragToBowl = function(e, t) {
null != t && (t.enabled = !1);
var o = this.node;
new cc.Tween().target(o).to(.5, {
position: this.addTouchPos.pos,
scaleX: this.addTouchPos.scale.x,
scaleY: this.addTouchPos.scale.y,
rotation: this.addTouchPos.rotate
}, null).call(this.movetoTouchPos.bind(this)).start();
};
t.prototype.movetoTouchPos = function() {
this.isAutoFall && this.showBreakAction();
};
t.prototype.showBreakAction = function() {
var e = this;
new cc.Tween().target(this.node).by(.2, {
position: new cc.Vec2(20, 50)
}, {
progress: null,
easing: "expoOut"
}).by(.2, {
position: new cc.Vec2(-20, -50)
}, {
progress: null,
easing: "backOut"
}).call(function() {
e.breakNode.active = !0;
e.hideNode();
}).delay(.1).to(.4, {
position: this.fallPos.pos,
scaleX: this.fallPos.scale.x,
scaleY: this.fallPos.scale.y,
rotation: this.fallPos.rotate
}, null).call(function() {
e.breakNode.active = !1;
e.fallNode.active = !0;
e.eggAudio && cc.audioEngine.playEffect(e.eggAudio, !1);
}).delay(.3).call(function() {
e.fallNode.active = !1;
e.eggInBowl && (e.eggInBowl.active = !0);
for (var t = 0, n = e.addEggLis; t < n.length; t++) {
n[t].emit(o.ADD_EGG_END, e);
}
}).start();
};
t.prototype.hideNode = function() {
var e = this.node.getChildByName("noshade");
e && (e.active = !1);
var t = this.node.getChildByName("moving");
null != t && (t.active = !0);
var o = this.getComponent(cc.Sprite);
o && (o.enabled = !1);
};
var o;
t.ADD_EGG_END = "ADD_EGG_END";
__decorate([ p({
type: c.default
}) ], t.prototype, "addTouchPos", void 0);
__decorate([ p({
type: c.default
}) ], t.prototype, "fallPos", void 0);
__decorate([ p() ], t.prototype, "isAutoFall", void 0);
__decorate([ p({
type: cc.Node,
visible: function() {
return !this.isAutoFall;
}
}) ], t.prototype, "finger", void 0);
__decorate([ p({
type: cc.Node
}) ], t.prototype, "eggInBowl", void 0);
__decorate([ p({
type: [ r.default ]
}) ], t.prototype, "addEggLis", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "eggAudio", void 0);
return t = o = __decorate([ d, u(n) ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS",
"../codebase/SpriteDrag/DragEventListenerMS": "DragEventListenerMS",
"../codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../codebase/utils/CocosHelperMS": "CocosHelperMS",
"../codebase/utils/NodeCompMS": "NodeCompMS",
"../codebase/utils/NodeTransformMS": "NodeTransformMS"
} ],
AddEgg: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "da15dFX02lHgLz2MnD+U1+y", "AddEgg");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/NodeComp"), c = e("../codebase/utils/NodeTransform"), i = e("../codebase/SpriteDrag/SpriteDrag"), a = e("../codebase/SpriteDrag/DragEventListener"), s = e("../codebase/utils/CocosHelper"), r = e("../codebase/EventListener"), l = cc._decorator, d = l.ccclass, p = l.property, u = l.requireComponent, h = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.addTouchPos = new c.default();
t.fallPos = new c.default();
t.isAutoFall = !1;
t.finger = null;
t.eggInBowl = null;
t.addEggLis = [];
t.breakNode = null;
t.fallNode = null;
t.m_drarg = null;
return t;
}
o = t;
t.prototype.start = function() {
if (null == this.m_drarg) {
this.m_drarg = this.node.getComponent(i.default);
null != this.m_drarg && this.m_drarg.eventTouchs.push(new a.default(this, "dragToBowl", a.DragEventType.TouchEnd));
}
if (null == this.breakNode) {
this.breakNode = this.node.getChildByName("breakNode");
this.breakNode.active = !1;
}
if (null == this.fallNode) {
this.fallNode = this.node.getChildByName("fallNode");
this.fallNode.active = !1;
}
if (null == this.eggInBowl) {
this.eggInBowl = s.CocosHelper.findNode(cc.Canvas.instance.node, this.node.name + "Inbowl");
null != this.eggInBowl && (this.eggInBowl.active = !1);
}
};
t.prototype.dragToBowl = function(e, t) {
null != t && (t.enabled = !1);
var o = this.node;
new cc.Tween().target(o).to(.5, {
position: this.addTouchPos.pos,
scaleX: this.addTouchPos.scale.x,
scaleY: this.addTouchPos.scale.y,
rotation: this.addTouchPos.rotate
}, null).call(this.movetoTouchPos.bind(this)).start();
};
t.prototype.movetoTouchPos = function() {
this.isAutoFall && this.showBreakAction();
};
t.prototype.showBreakAction = function() {
var e = this;
new cc.Tween().target(this.node).by(.2, {
position: new cc.Vec2(20, 50)
}, {
progress: null,
easing: "expoOut"
}).by(.2, {
position: new cc.Vec2(-20, -50)
}, {
progress: null,
easing: "backOut"
}).call(function() {
e.breakNode.active = !0;
e.hideNode();
}).delay(.1).to(.4, {
position: this.fallPos.pos,
scaleX: this.fallPos.scale.x,
scaleY: this.fallPos.scale.y,
rotation: this.fallPos.rotate
}, null).call(function() {
e.breakNode.active = !1;
e.fallNode.active = !0;
}).delay(.3).call(function() {
e.fallNode.active = !1;
e.eggInBowl && (e.eggInBowl.active = !0);
for (var t = 0, n = e.addEggLis; t < n.length; t++) {
n[t].emit(o.ADD_EGG_END, e);
}
}).start();
};
t.prototype.hideNode = function() {
var e = this.node.getChildByName("noshade");
e && (e.active = !1);
var t = this.node.getChildByName("moving");
null != t && (t.active = !0);
var o = this.getComponent(cc.Sprite);
o && (o.enabled = !1);
};
var o;
t.ADD_EGG_END = "ADD_EGG_END";
__decorate([ p({
type: c.default
}) ], t.prototype, "addTouchPos", void 0);
__decorate([ p({
type: c.default
}) ], t.prototype, "fallPos", void 0);
__decorate([ p() ], t.prototype, "isAutoFall", void 0);
__decorate([ p({
type: cc.Node,
visible: function() {
return !this.isAutoFall;
}
}) ], t.prototype, "finger", void 0);
__decorate([ p({
type: cc.Node
}) ], t.prototype, "eggInBowl", void 0);
__decorate([ p({
type: [ r.default ]
}) ], t.prototype, "addEggLis", void 0);
return t = o = __decorate([ d, u(n) ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../codebase/EventListener": "EventListener",
"../codebase/SpriteDrag/DragEventListener": "DragEventListener",
"../codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../codebase/utils/CocosHelper": "CocosHelper",
"../codebase/utils/NodeComp": "NodeComp",
"../codebase/utils/NodeTransform": "NodeTransform"
} ],
AddIngredientsMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7e3f6RzatlOBafJ1Fy3+Bbi", "AddIngredientsMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/SpriteDrag/DragFallMS"), c = e("../codebase/EventListenerMS"), i = e("../codebase/SpriteDrag/SpriteDragMS"), a = e("../CombinedComponent/MixComponentMS"), s = e("../codebase/utils/CocosHelperMS"), r = cc._decorator, l = r.ccclass, d = (r.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bowl = null;
t.bowlUp = null;
t.mixLayer = null;
t.blender = null;
t.addCount = 0;
t.ingredientNum = 0;
return t;
}
t.prototype.onLoad = function() {
if (null == this.blender) {
this.blender = s.CocosHelper.findNode(cc.Canvas.instance.node, "blender");
this.blender && (this.blender.active = !1);
}
null == this.bowl && (this.bowl = s.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"));
if (null == this.bowlUp) {
this.bowlUp = s.CocosHelper.findNode(cc.Canvas.instance.node, "bowlUp");
this.bowlUp.setSiblingIndex(this.bowlUp.parent.childrenCount + 1);
}
null == this.mixLayer && (this.mixLayer = s.CocosHelper.findNode(cc.Canvas.instance.node, "mixLayer"));
};
t.prototype.initIngredients = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var a = o[t], r = null, l = (r = a instanceof cc.Node ? a : s.CocosHelper.findNode(cc.Canvas.instance.node, a)).getComponent(i.default);
if (0 == l.targetCollider.length && null != this.bowl) {
var d = this.bowl.getComponent(cc.Collider);
null != d && l.targetCollider.push(d);
}
var p = r.getComponent(n.default), u = new c.default(this, "startFall", n.default.fallStart);
p.fallLis.push(u);
p.fallLis.push(new c.default(this, "fallEnd", n.default.fallEnd));
this.ingredientNum++;
}
};
t.prototype.initInbowl = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var c = o[t], i = (c instanceof cc.Node ? c : s.CocosHelper.findNode(cc.Canvas.instance.node, c)).getComponent(n.default);
null == i.inBowl && (i.inBowl = s.CocosHelper.findNode(cc.Canvas.instance.node, c + "Inbowl"));
if (null != i.inBowl) {
i.inBowl.opacity = 0;
i.inBowl.scale = 0;
}
}
};
t.prototype.showBlender = function() {
if (null != this.blender) {
var e = this.blender.getComponent(i.default);
e.enabled = !1;
this.blender.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
s.CocosHelper.showBackOut(this.blender, s.CocosHelper.ShowDirection.show_from_right, function() {
e.enabled = !0;
});
if (null != this.mixLayer) {
this.mixLayer.getComponent(a.default).mixLis.push(new c.default(this, "mixEnd", a.default.MIXEND));
}
}
};
t.prototype.mixEnd = function() {
if (null != this.blender && null != this.bowlUp) {
var e = this.blender.getComponent(i.default);
e && (e.enabled = !1);
this.blender.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
}
null != this.blender && s.CocosHelper.hideNode(this.blender, s.CocosHelper.ShowDirection.show_from_right, null, !1);
};
t.prototype.fallEnd = function(e) {
e.node.runAction(cc.rotateTo(.4, 0));
s.CocosHelper.hideNode(e.node, s.CocosHelper.ShowDirection.show_from_right);
this.addCount++;
this.addCount == this.ingredientNum && this.showBlender();
};
t.prototype.startFall = function(e) {
var t = e.pourTime, o = e.node;
null != this.bowl && o.setSiblingIndex(this.bowl.getSiblingIndex() + 1);
if (null != e.inBowl) {
o.runAction(cc.moveBy(t, new cc.Vec2(0, 50)));
var i = e.inBowl, a = new cc.Tween();
if (null == i) {
i = o;
a.delay(t);
} else a.to(t, {
scale: 1,
opacity: 255
}, null);
a.target(i).call(function() {
c.default.emitEvents(n.default.fallEnd, e.fallLis, e);
}).start();
var r = s.CocosHelper.findNode(o, o.name + "Inner");
if (r) {
new cc.Tween().by(t, {
position: cc.v2(.45 * -r.getContentSize().width, -40)
}, null).hide().target(r).start();
}
}
};
return t = __decorate([ l ], t);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../CombinedComponent/MixComponentMS": "MixComponentMS",
"../codebase/EventListenerMS": "EventListenerMS",
"../codebase/SpriteDrag/DragFallMS": "DragFallMS",
"../codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../codebase/utils/CocosHelperMS": "CocosHelperMS"
} ],
AddIngredients: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b79dHlqcBJtLTGvBf0XMXv", "AddIngredients");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/SpriteDrag/DragFall"), c = e("../codebase/EventListener"), i = e("../codebase/SpriteDrag/SpriteDrag"), a = e("../CombinedComponent/MixComponent"), s = e("../codebase/utils/CocosHelper"), r = cc._decorator, l = r.ccclass, d = (r.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bowl = null;
t.bowlUp = null;
t.mixLayer = null;
t.blender = null;
t.addCount = 0;
t.ingredientNum = 0;
return t;
}
t.prototype.onLoad = function() {
if (null == this.blender) {
this.blender = s.CocosHelper.findNode(cc.Canvas.instance.node, "blender");
this.blender && (this.blender.active = !1);
}
null == this.bowl && (this.bowl = s.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"));
if (null == this.bowlUp) {
this.bowlUp = s.CocosHelper.findNode(cc.Canvas.instance.node, "bowlUp");
this.bowlUp.setSiblingIndex(this.bowlUp.parent.childrenCount + 1);
}
null == this.mixLayer && (this.mixLayer = s.CocosHelper.findNode(cc.Canvas.instance.node, "mixLayer"));
};
t.prototype.initIngredients = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var a = o[t], r = null, l = (r = a instanceof cc.Node ? a : s.CocosHelper.findNode(cc.Canvas.instance.node, a)).getComponent(i.default);
if (0 == l.targetCollider.length && null != this.bowl) {
var d = this.bowl.getComponent(cc.Collider);
null != d && l.targetCollider.push(d);
}
var p = r.getComponent(n.default), u = new c.default(this, "startFall", n.default.fallStart);
p.fallLis.push(u);
p.fallLis.push(new c.default(this, "fallEnd", n.default.fallEnd));
this.ingredientNum++;
}
};
t.prototype.initInbowl = function(e) {
for (var t = 0, o = e; t < o.length; t++) {
var c = o[t], i = (c instanceof cc.Node ? c : s.CocosHelper.findNode(cc.Canvas.instance.node, c)).getComponent(n.default);
null == i.inBowl && (i.inBowl = s.CocosHelper.findNode(cc.Canvas.instance.node, c + "Inbowl"));
if (null != i.inBowl) {
i.inBowl.opacity = 0;
i.inBowl.scale = 0;
}
}
};
t.prototype.showBlender = function() {
if (null != this.blender) {
var e = this.blender.getComponent(i.default);
e.enabled = !1;
this.blender.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
s.CocosHelper.showBackOut(this.blender, s.CocosHelper.ShowDirection.show_from_right, function() {
e.enabled = !0;
});
if (null != this.mixLayer) {
this.mixLayer.getComponent(a.default).mixLis.push(new c.default(this, "mixEnd", a.default.MIXEND));
}
}
};
t.prototype.mixEnd = function() {
if (null != this.blender && null != this.bowlUp) {
var e = this.blender.getComponent(i.default);
e && (e.enabled = !1);
this.blender.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
}
null != this.blender && s.CocosHelper.hideNode(this.blender, s.CocosHelper.ShowDirection.show_from_right, null, !1);
};
t.prototype.fallEnd = function(e) {
e.node.runAction(cc.rotateTo(.4, 0));
s.CocosHelper.hideNode(e.node, s.CocosHelper.ShowDirection.show_from_right);
this.addCount++;
this.addCount == this.ingredientNum && this.showBlender();
};
t.prototype.startFall = function(e) {
var t = e.pourTime, o = e.node;
null != this.bowl && o.setSiblingIndex(this.bowl.getSiblingIndex() + 1);
if (null != e.inBowl) {
o.runAction(cc.moveBy(t, new cc.Vec2(0, 50)));
var i = e.inBowl, a = new cc.Tween();
if (null == i) {
i = o;
a.delay(t);
} else a.to(t, {
scale: 1,
opacity: 255
}, null);
a.target(i).call(function() {
c.default.emitEvents(n.default.fallEnd, e.fallLis, e);
}).start();
var r = s.CocosHelper.findNode(o, o.name + "Inner");
if (r) {
new cc.Tween().by(t, {
position: cc.v2(.45 * -r.getContentSize().width, -40)
}, null).hide().target(r).start();
}
}
};
return t = __decorate([ l ], t);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../CombinedComponent/MixComponent": "MixComponent",
"../codebase/EventListener": "EventListener",
"../codebase/SpriteDrag/DragFall": "DragFall",
"../codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../codebase/utils/CocosHelper": "CocosHelper"
} ],
AdsManagerHall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "debf735slNIY7pqbe5MGKUt", "AdsManagerHall");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator;
n.ccclass, n.property;
(function(e) {
e[e.kTypeNativeAds = 32] = "kTypeNativeAds";
e[e.kTypeRectAds = 16] = "kTypeRectAds";
e[e.kTypeBannerAds = 8] = "kTypeBannerAds";
e[e.kTypeInterstitialAds = 4] = "kTypeInterstitialAds";
e[e.kTypeCrosspromoAds = 2] = "kTypeCrosspromoAds";
e[e.kTypeRewardedAds = 1] = "kTypeRewardedAds";
})(o.ADS_TYPE || (o.ADS_TYPE = {}));
var c = function() {
function e() {
this.initLisenter();
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initLisenter = function() {
var e = this, t = jsToCPP.getInstance();
t.initOnAdsLoaded(function(t) {
console.log(" 广告加载====>ID值" + t);
e.onAdsLoaded && e.onAdsLoaded(t);
});
t.initOnAdsClicked(function(t) {
console.log(" 广告点击====>ID值" + t);
e.onAdsClicked && e.onAdsClicked(t);
});
t.initOnAdsExpanded(function(t) {
console.log(" 广告====>ID值" + t);
e.onAdsExpanded && e.onAdsExpanded(t);
});
t.initOnAdsCollapsed(function(t) {
console.log(" 广告关闭====>ID值" + t);
e.onAdsCollapsed && e.onAdsCollapsed(t);
});
t.initOnAdsLoadFailed(function(t, o) {
console.log(" 广告加载失败====>ID值" + o + "名称" + t);
e.onAdsLoadFailed && e.onAdsLoadFailed(t, o);
});
t.initOnAdsRewarded(function(t, o, n) {
console.log(" reward广告====>ID值" + o + "名称" + t + "是否成功" + n);
e.onAdsRewarded && e.onAdsRewarded(t, o, n);
});
};
e.prototype.public = function() {
jsToCPP.getInstance().showInterstitial();
};
e.prototype.showInterstitial = function() {
return jsToCPP.getInstance().showInterstitial();
};
e.prototype.showCross = function() {
return jsToCPP.getInstance().showCross();
};
e.prototype.showBanner = function() {
jsToCPP.getInstance().showBanner();
};
e.prototype.hideBanner = function() {
jsToCPP.getInstance().hideBanner();
};
e.prototype.showReward = function() {
return jsToCPP.getInstance().showReward();
};
e.prototype.preAllAds = function() {
jsToCPP.getInstance().preLoadAllAds();
};
e.prototype.preAdsByType = function(e) {
jsToCPP.getInstance().preLoadAds(Number(e));
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {} ],
AdsManagerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b918QVIXxNIr1ShsuVxT05", "AdsManagerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator;
n.ccclass, n.property;
(function(e) {
e[e.kTypeNativeAds = 32] = "kTypeNativeAds";
e[e.kTypeRectAds = 16] = "kTypeRectAds";
e[e.kTypeBannerAds = 8] = "kTypeBannerAds";
e[e.kTypeInterstitialAds = 4] = "kTypeInterstitialAds";
e[e.kTypeCrosspromoAds = 2] = "kTypeCrosspromoAds";
e[e.kTypeRewardedAds = 1] = "kTypeRewardedAds";
})(o.ADS_TYPE || (o.ADS_TYPE = {}));
var c = function() {
function e() {
this.initLisenter();
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initLisenter = function() {
var e = jsToCPP.getInstance();
e.initOnAdsLoaded(function(e) {
console.log(" 广告加载====>ID值" + e);
console.log(this.onAdsLoaded);
this.onAdsLoaded && this.onAdsLoaded(e);
}.bind(this));
e.initOnAdsClicked(function(e) {
console.log(" 广告点击====>ID值" + e);
this.onAdsClicked && this.onAdsClicked(e);
}.bind(this));
e.initOnAdsExpanded(function(e) {
console.log(" 广告====>ID值" + e);
this.onAdsExpanded && this.onAdsExpanded(e);
}.bind(this));
e.initOnAdsCollapsed(function(e) {
console.log(" 广告关闭====>ID值" + e);
this.onAdsCollapsed && this.onAdsCollapsed(e);
}.bind(this));
e.initOnAdsLoadFailed(function(e, t) {
console.log(" 广告加载失败====>ID值" + t + "名称" + e);
this.onAdsLoadFailed && this.onAdsLoadFailed(e, t);
}.bind(this));
e.initOnAdsRewarded(function(e, t, o) {
console.log(" reward广告====>ID值" + t + "名称" + e + "是否成功" + o);
this.onAdsRewarded && this.onAdsRewarded(e, t, o);
}.bind(this));
};
e.prototype.public = function() {
jsToCPP.getInstance().showInterstitial();
};
e.prototype.showInterstitial = function() {
return jsToCPP.getInstance().showInterstitial();
};
e.prototype.showCross = function() {
return jsToCPP.getInstance().showCross();
};
e.prototype.showBanner = function() {
jsToCPP.getInstance().showBanner();
};
e.prototype.hideBanner = function() {
jsToCPP.getInstance().hideBanner();
};
e.prototype.showReward = function() {
return jsToCPP.getInstance().showReward();
};
e.prototype.preAllAds = function() {
jsToCPP.getInstance().preLoadAllAds();
};
e.prototype.preAdsByType = function(e) {
jsToCPP.getInstance().preLoadAds(Number(e));
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {} ],
AdsManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a92feecGjxBj4AuZz9B5Buv", "AdsManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator;
n.ccclass, n.property;
(function(e) {
e[e.kTypeNativeAds = 32] = "kTypeNativeAds";
e[e.kTypeRectAds = 16] = "kTypeRectAds";
e[e.kTypeBannerAds = 8] = "kTypeBannerAds";
e[e.kTypeInterstitialAds = 4] = "kTypeInterstitialAds";
e[e.kTypeCrosspromoAds = 2] = "kTypeCrosspromoAds";
e[e.kTypeRewardedAds = 1] = "kTypeRewardedAds";
})(o.ADS_TYPE || (o.ADS_TYPE = {}));
var c = function() {
function e() {
this.initLisenter();
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initLisenter = function() {
var e = jsToCPP.getInstance();
e.initOnAdsLoaded(function(e) {
console.log(" 广告加载====>ID值" + e);
console.log(this.onAdsLoaded);
this.onAdsLoaded && this.onAdsLoaded(e);
}.bind(this));
e.initOnAdsClicked(function(e) {
console.log(" 广告点击====>ID值" + e);
this.onAdsClicked && this.onAdsClicked(e);
}.bind(this));
e.initOnAdsExpanded(function(e) {
console.log(" 广告====>ID值" + e);
this.onAdsExpanded && this.onAdsExpanded(e);
}.bind(this));
e.initOnAdsCollapsed(function(e) {
console.log(" 广告关闭====>ID值" + e);
this.onAdsCollapsed && this.onAdsCollapsed(e);
}.bind(this));
e.initOnAdsLoadFailed(function(e, t) {
console.log(" 广告加载失败====>ID值" + t + "名称" + e);
this.onAdsLoadFailed && this.onAdsLoadFailed(e, t);
}.bind(this));
e.initOnAdsRewarded(function(e, t, o) {
console.log(" reward广告====>ID值" + t + "名称" + e + "是否成功" + o);
this.onAdsRewarded && this.onAdsRewarded(e, t, o);
}.bind(this));
};
e.prototype.public = function() {
jsToCPP.getInstance().showInterstitial();
};
e.prototype.showInterstitial = function() {
return jsToCPP.getInstance().showInterstitial();
};
e.prototype.showCross = function() {
return jsToCPP.getInstance().showCross();
};
e.prototype.showBanner = function() {
jsToCPP.getInstance().showBanner();
};
e.prototype.hideBanner = function() {
jsToCPP.getInstance().hideBanner();
};
e.prototype.showReward = function() {
return jsToCPP.getInstance().showReward();
};
e.prototype.preAllAds = function() {
jsToCPP.getInstance().preLoadAllAds();
};
e.prototype.preAdsByType = function(e) {
jsToCPP.getInstance().preLoadAds(Number(e));
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {} ],
AnimationEventMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1fa0fYGAG9D6o59Onhl5X7S", "AnimationEventMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SlimeTouchEventMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = cc._decorator, a = i.ccclass, s = (i.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.resetScene = function() {
cc.director.loadScene("choose");
};
t.prototype.growFinish0 = function() {
cc.find("Canvas/playLayer5/slime").getComponent(cc.AudioSource).stop();
cc.find("Canvas/playLayer5/slime").getComponent(n.default).destroyTouchEvent();
cc.find("Canvas/playLayer5/slime").getComponent(n.default).firstPlay = !1;
cc.find("Canvas/playLayer5/slime/decorate").getComponent(cc.ParticleSystem).resetSystem();
cc.find("Canvas/playLayer5/slime/decorate").getComponent(cc.AudioSource).play();
cc.find("Canvas/playLayer5/progress/star0").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(1, -30), cc.rotateBy(1, 30))));
cc.find("Canvas/playLayer5").runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
cc.find("Canvas/playLayer5/slime").getComponent(n.default).registerTouchEvent();
cc.find("Canvas/playLayer5/arrow_top").active = !0;
})));
};
t.prototype.growFinish1 = function() {
cc.find("Canvas/playLayer5/slime").getComponent(n.default).destroyTouchEvent();
cc.find("Canvas/playLayer5/progress/star1").runAction(cc.repeatForever(cc.sequence(cc.rotateBy(1, -30), cc.rotateBy(1, 30))));
cc.find("Canvas/playLayer5").runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
cc.find("Canvas/playLayer5/slime").getComponent(cc.AudioSource).stop();
cc.find("Canvas/playLayer5/slime/decorate").getComponent(cc.ParticleSystem).resetSystem();
cc.find("Canvas/playLayer5/slime/decorate").getComponent(cc.AudioSource).play();
cc.find("Canvas/playLayer5/slime/bubble").active = !0;
cc.find("Canvas/playLayer5/slime/tipClick").active = !0;
})));
};
t.prototype.timeOver = function() {
if (cc.find("Canvas/playLayer5/progress/mask").height < 390) {
cc.find("Canvas/playLayer5/btn_reset").getComponent(c.default).doShowAction();
cc.find("Canvas/playLayer5/slime").children.forEach(function(e) {
"bubbleCopy" == e.name && e.destroy();
});
}
};
t.prototype.boomFinish = function() {
cc.find("Canvas/playLayer5/boom").active = !1;
};
return t = __decorate([ a ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./SlimeTouchEventMS": "SlimeTouchEventMS"
} ],
AnimationEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a903eN9WfpMDqGv5/ClNAI9", "AnimationEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SlimeTouchEvent"), c = e("../../common/Script/codebase/SpriteDrag/SpriteDrag"), i = e("../../common/Script/codebase/TransitionScene"), a = e("../../common/Script/codebase/utils/CocosHelper"), s = cc._decorator, r = s.ccclass, l = (s.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.dissolveFinish = function() {
cc.find("Canvas/bowl/spoon").getComponent(c.default).enabled = !1;
cc.find("Canvas/bowl/spoon").runAction(cc.sequence(cc.moveBy(.5, cc.v2(700, 0)), cc.callFunc(function() {
cc.find("Canvas/bowl/spoon").active = !1;
}.bind(this))));
cc.find("Canvas/bowl").runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(.5, cc.v2(0, 0)), cc.callFunc(function() {
cc.find("Canvas/finish").getComponent(cc.ParticleSystem).resetSystem();
cc.find("Canvas/finish").getComponent(cc.AudioSource).play();
}.bind(this)), cc.delayTime(.5), cc.callFunc(function() {
i.default.changeScene("addMaterialCS");
}.bind(this))));
cc.find("Canvas/bowl/bowl_water").stopAllActions();
cc.find("Canvas/bowl/bowl_borax").stopAllActions();
};
t.prototype.coilFinish = function() {
cc.find("Canvas/finish").getComponent(cc.ParticleSystem).resetSystem();
cc.find("Canvas/finish").getComponent(cc.AudioSource).play();
cc.find("Canvas/slime").getComponent(n.default).destroyTouchEvent();
var e = a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
e.active = !0;
e.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)), 2));
};
t.prototype.playAudio = function() {
cc.find("Canvas/slime").getComponent(cc.AudioSource).play();
};
return t = __decorate([ r ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"../../common/Script/codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"./SlimeTouchEvent": "SlimeTouchEvent"
} ],
AudioManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "29cd28xrORDGJQRl5irYFwg", "AudioManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgMusic = null;
t.text = "hello";
t.bgMusicChannel = null;
return t;
}
t.prototype.onLoad = function() {
cc.game.addPersistRootNode(this.node);
};
t.prototype.start = function() {};
t.prototype.playBgMusic = function(e) {
this.bgMusicChannel = cc.audioEngine.playMusic(e, !0);
};
t.prototype.stopBgMusic = function() {
cc.audioEngine.stopMusic();
};
__decorate([ i(cc.AudioClip) ], t.prototype, "bgMusic", void 0);
__decorate([ i ], t.prototype, "text", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
BarAction: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ca202Qg80hAE4g7v8LeqZU7", "BarAction");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.horizontalBar = null;
t.speed = 10;
t._pingpong = !1;
return t;
}
t.prototype.onLoad = function() {
this._pingpong = !0;
this.horizontalBar.progress = 0;
};
t.prototype.update = function(e) {
this._updateProgressBar(this.horizontalBar, e);
};
t.prototype._updateProgressBar = function(e, t) {
var o = e.progress;
if (o < 1 && this._pingpong) o += t * this.speed; else {
o -= t * this.speed;
this._pingpong = o <= 0;
}
e.progress = o;
};
__decorate([ i(cc.ProgressBar) ], t.prototype, "horizontalBar", void 0);
__decorate([ i() ], t.prototype, "speed", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
BgScaleMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5e2b7VWfoxIBKou47/uSz6W", "BgScaleMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.disallowMultiple, a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setBgScale = function() {
if (this.enabled) {
var e = cc.view.getVisibleSize(), t = this.node.width, o = this.node.height;
o < e.height && this.node.setScale(e.height / o);
t < e.width && this.node.setScale(e.width / t);
}
};
t.prototype.onEnable = function() {
this.setBgScale();
};
t.prototype.onLoad = function() {
var e = this;
this.setBgScale();
null == this.rf && (this.rf = cc.director.on("ResizeFrame", function() {
e.setBgScale();
}, this));
};
t.prototype.onDestroy = function() {
null != this.rf && cc.director.off("ResizeFrame", this.rf, this);
};
return t = __decorate([ c, i(), a("common/BgScaleMS") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
BgScale_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8f7c9ns7htM1arvXBxakfAL", "BgScale_my");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.disallowMultiple, a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setBgScale = function() {
if (this.enabled) {
var e = cc.view.getVisibleSize(), t = this.node.width, o = this.node.height;
o < e.height && this.node.setScale(e.height / o);
t < e.width && this.node.setScale(e.width / t);
}
};
t.prototype.onEnable = function() {
this.setBgScale();
};
t.prototype.onLoad = function() {
var e = this;
this.setBgScale();
null == this.rf && (this.rf = cc.director.on("ResizeFrame", function() {
e.setBgScale();
}, this));
};
t.prototype.onDestroy = function() {
null != this.rf && cc.director.off("ResizeFrame", this.rf, this);
};
return t = __decorate([ c, i(), a("common/viewadapter/BgScale") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
BgScale: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d98beh6s5CcbBCO5hMxiBn", "BgScale");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.disallowMultiple, a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setBgScale = function() {
if (this.enabled) {
var e = cc.view.getVisibleSize(), t = this.node.width, o = this.node.height;
o < e.height && this.node.setScale(e.height / o);
t < e.width && this.node.setScale(e.width / t);
}
};
t.prototype.onEnable = function() {
this.setBgScale();
};
t.prototype.onLoad = function() {
var e = this;
this.setBgScale();
null == this.rf && (this.rf = cc.director.on("ResizeFrame", function() {
e.setBgScale();
}, this));
};
t.prototype.onDestroy = function() {
null != this.rf && cc.director.off("ResizeFrame", this.rf, this);
};
return t = __decorate([ c, i(), a("common/BgScale") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
BlenderMixMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4a08051cCxFhYy3GvG/gAPI", "BlenderMixMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./MixComponentMS"), c = e("../codebase/utils/CocosHelperMS"), i = e("../codebase/SpriteDrag/SpriteDragMS"), a = e("../codebase/SpriteDrag/DragEventListenerMS"), s = e("../codebase/EventListenerMS"), r = cc._decorator, l = r.ccclass, d = r.property, p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixBlenderAnimation = [];
t.mixLayer = null;
t.mixCom = null;
t.bowlUp = null;
t.isNeedScale = !0;
t._drag = null;
t.orignalFrame = null;
t._blendaction = null;
t._mixAction = null;
return t;
}
t.prototype.start = function() {
null == this.mixLayer && (this.mixLayer = c.CocosHelper.findNode(cc.Canvas.instance.node, "mixLayer"));
null != this.mixLayer && null == this.mixCom && (this.mixCom = this.mixLayer.getComponent(n.default));
null == this.bowlUp && (this.bowlUp = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowlUp"));
null == this._drag && (this._drag = this.getComponent(i.default));
if (null != this._drag) for (var e = [ "moveBlender", "touchUpBlender", "touchUpBlender" ], t = [ a.DragEventType.Draging, a.DragEventType.TouchCancle, a.DragEventType.TouchEnd ], o = 0; o < e.length; o++) this._drag.eventTouchs.push(new a.default(this, e[o], t[o]));
null != this.mixCom && this.mixCom.mixLis.push(new s.default(this, "mixEnd", n.default.MIXEND));
};
t.prototype.startBlendAction = function() {
if (null == this._blendaction) {
var e = this.getComponent(cc.Sprite);
if (null != e && "spoon" == this.node.name) {
this.orignalFrame = e.spriteFrame;
for (var t = [], o = function(o) {
t.push(cc.callFunc(function() {
e.spriteFrame = o;
}));
t.push(cc.delayTime(.15));
}, n = 0, c = this.mixBlenderAnimation; n < c.length; n++) {
o(c[n]);
}
this._blendaction = cc.repeatForever(cc.sequence(t));
this.node.runAction(this._blendaction);
}
}
if (null != this.mixLayer && null == this._mixAction && this.isNeedScale) {
var i = cc.scaleTo(.7, 1, .95), a = cc.scaleTo(.7, .95, 1.08);
this._mixAction = cc.repeatForever(cc.sequence(i, a));
this.mixLayer.runAction(this._mixAction);
}
};
t.prototype.stopBlendAction = function() {
if (null != this._blendaction) {
this.node.stopAction(this._blendaction);
this._blendaction = null;
var e = this.getComponent(cc.Sprite);
e && this.orignalFrame && (e.spriteFrame = this.orignalFrame);
}
if (null != this.mixLayer && null != this._mixAction) {
this.mixLayer.stopAction(this._mixAction);
this._mixAction = null;
}
};
t.prototype.moveBlender = function(e, t) {
if (-1 != t.getInTargetIndex()) {
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() - 1);
null != this.mixCom && this.mixCom.startMix();
this.startBlendAction();
} else this.touchUpBlender();
};
t.prototype.touchUpBlender = function() {
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
null != this.mixCom && this.mixCom.stopMix();
this.stopBlendAction();
};
t.prototype.mixEnd = function() {
if (null != this._blendaction) {
this.node.stopAction(this._blendaction);
var e = this.getComponent(cc.Sprite);
e && this.orignalFrame && (e.spriteFrame = this.orignalFrame);
this._blendaction = null;
}
if (null != this.mixLayer) {
null != this._mixAction && this.mixLayer.stopAction(this._mixAction);
this._mixAction = null;
this.mixLayer.runAction(cc.scaleTo(.2, 1, 1));
}
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
this._drag && (this._drag.enabled = !1);
};
__decorate([ d({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixBlenderAnimation", void 0);
__decorate([ d({
type: cc.Node
}) ], t.prototype, "mixLayer", void 0);
__decorate([ d({
type: n.default
}) ], t.prototype, "mixCom", void 0);
__decorate([ d({
type: cc.Node
}) ], t.prototype, "bowlUp", void 0);
__decorate([ d ], t.prototype, "isNeedScale", void 0);
return t = __decorate([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS",
"../codebase/SpriteDrag/DragEventListenerMS": "DragEventListenerMS",
"../codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../codebase/utils/CocosHelperMS": "CocosHelperMS",
"./MixComponentMS": "MixComponentMS"
} ],
BlenderMix: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "762cabeV7VFlJnSzyFcYsIO", "BlenderMix");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./MixComponent"), c = e("../codebase/utils/CocosHelper"), i = e("../codebase/SpriteDrag/SpriteDrag"), a = e("../codebase/SpriteDrag/DragEventListener"), s = e("../codebase/EventListener"), r = cc._decorator, l = r.ccclass, d = r.property, p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixBlenderAnimation = [];
t.mixLayer = null;
t.mixCom = null;
t.bowlUp = null;
t._drag = null;
t.orignalFrame = null;
t._blendaction = null;
t._mixAction = null;
return t;
}
t.prototype.start = function() {
null == this.mixLayer && (this.mixLayer = c.CocosHelper.findNode(cc.Canvas.instance.node, "mixLayer"));
null != this.mixLayer && null == this.mixCom && (this.mixCom = this.mixLayer.getComponent(n.default));
null == this.bowlUp && (this.bowlUp = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowlUp"));
null == this._drag && (this._drag = this.getComponent(i.default));
if (null != this._drag) for (var e = [ "moveBlender", "touchUpBlender", "touchUpBlender" ], t = [ a.DragEventType.Draging, a.DragEventType.TouchCancle, a.DragEventType.TouchEnd ], o = 0; o < e.length; o++) this._drag.eventTouchs.push(new a.default(this, e[o], t[o]));
null != this.mixCom && this.mixCom.mixLis.push(new s.default(this, "mixEnd", n.default.MIXEND));
};
t.prototype.startBlendAction = function() {
if (null == this._blendaction) {
var e = this.getComponent(cc.Sprite);
if (null != e) {
this.orignalFrame = e.spriteFrame;
for (var t = [], o = function(o) {
t.push(cc.callFunc(function() {
e.spriteFrame = o;
}));
t.push(cc.delayTime(.15));
}, n = 0, c = this.mixBlenderAnimation; n < c.length; n++) {
o(c[n]);
}
this._blendaction = cc.repeatForever(cc.sequence(t));
this.node.runAction(this._blendaction);
}
}
if (null != this.mixLayer && null == this._mixAction) {
var i = cc.scaleTo(.7, 1, .95), a = cc.scaleTo(.7, .95, 1.08);
this._mixAction = cc.repeatForever(cc.sequence(i, a));
this.mixLayer.runAction(this._mixAction);
}
};
t.prototype.stopBlendAction = function() {
if (null != this._blendaction) {
this.node.stopAction(this._blendaction);
this._blendaction = null;
var e = this.getComponent(cc.Sprite);
e && this.orignalFrame && (e.spriteFrame = this.orignalFrame);
}
if (null != this.mixLayer && null != this._mixAction) {
this.mixLayer.stopAction(this._mixAction);
this._mixAction = null;
}
};
t.prototype.moveBlender = function(e, t) {
if (-1 != t.getInTargetIndex()) {
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() - 1);
null != this.mixCom && this.mixCom.startMix();
this.startBlendAction();
} else this.touchUpBlender();
};
t.prototype.touchUpBlender = function() {
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
null != this.mixCom && this.mixCom.stopMix();
this.stopBlendAction();
};
t.prototype.mixEnd = function() {
if (null != this._blendaction) {
this.node.stopAction(this._blendaction);
var e = this.getComponent(cc.Sprite);
e && this.orignalFrame && (e.spriteFrame = this.orignalFrame);
this._blendaction = null;
}
if (null != this.mixLayer) {
null != this._mixAction && this.mixLayer.stopAction(this._mixAction);
this._mixAction = null;
this.mixLayer.runAction(cc.scaleTo(.2, 1, 1));
}
null != this.bowlUp && this.node.setSiblingIndex(this.bowlUp.getSiblingIndex() + 1);
this._drag && (this._drag.enabled = !1);
};
__decorate([ d({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixBlenderAnimation", void 0);
__decorate([ d({
type: cc.Node
}) ], t.prototype, "mixLayer", void 0);
__decorate([ d({
type: n.default
}) ], t.prototype, "mixCom", void 0);
__decorate([ d({
type: cc.Node
}) ], t.prototype, "bowlUp", void 0);
return t = __decorate([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../codebase/EventListener": "EventListener",
"../codebase/SpriteDrag/DragEventListener": "DragEventListener",
"../codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../codebase/utils/CocosHelper": "CocosHelper",
"./MixComponent": "MixComponent"
} ],
BubbleClickMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "961c2T9FNlIaaDD5mPuIvkt", "BubbleClickMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./PlayControllerMS"), c = cc._decorator, i = c.ccclass, a = (c.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.click = function() {
this.node.stopAllActions();
var e = cc.scaleBy(.1, 1.15, .85), t = cc.scaleBy(.1, .85, 1.15), o = cc.scaleTo(.1, 1.1, .9);
cc.find("Canvas/playLayer5/slime").runAction(cc.repeat(cc.sequence(e, t, o), 2));
var c = cc.find("Canvas/playLayer5/progress/mask").height;
this.node.getComponent(cc.Animation).play("bubble");
this.node.getComponent(cc.AudioSource).play();
cc.find("Canvas/playLayer5/slime/tipClick").active = !1;
this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
"bubbleCopy" == this.node.name ? this.node.destroy() : this.node.active = !1;
cc.find("Canvas/playLayer5").getComponent(n.default).createBubble();
cc.find("Canvas/playLayer5").getComponent(n.default).bubbleNum = cc.find("Canvas/playLayer5").getComponent(n.default).bubbleNum + 1;
}.bind(this))));
cc.find("Canvas/playLayer5/progress/mask").height = c + 5;
if (cc.find("Canvas/playLayer5/progress/mask").height >= 390) {
cc.find("Canvas/playLayer5/boom").active = !0;
cc.find("Canvas/playLayer5/boom").getComponent(cc.AudioSource).play();
cc.find("Canvas/playLayer5/clock").getComponent(cc.Animation).stop();
cc.find("Canvas/playLayer5/clock/clock2").rotation = 0;
cc.find("Canvas/playLayer5/clock").active = !1;
cc.find("Canvas/playLayer5/slime").children.forEach(function(e) {
"bubbleCopy" == e.name && e.destroy();
});
}
};
return t = __decorate([ i ], t);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"./PlayControllerMS": "PlayControllerMS"
} ],
ButtonSafeMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b4214eqYVNM5YpvrX4PMU4z", "ButtonSafeMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.safeTime = .5;
t.clickEvents = [];
return t;
}
t.prototype.start = function() {
var e = this, t = this.node.getComponent(cc.Button);
if (t) {
this.clickEvents = t.clickEvents;
var o = this, n = !1;
this.node.on("click", function() {
t.clickEvents = [];
if (!n) {
n = !0;
o.scheduleOnce(function(e) {
t.clickEvents = o.clickEvents;
n = !1;
}, e.safeTime);
}
}, this);
}
};
__decorate([ i ], t.prototype, "safeTime", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
ButtonSafe_hall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e94d6pbjLZGtYNg4c0TBjGF", "ButtonSafe_hall");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.safeTime = .5;
t.clickEvents = [];
return t;
}
t.prototype.start = function() {
var e = this, t = this.node.getComponent(cc.Button);
if (t) {
this.clickEvents = t.clickEvents;
var o = this, n = !1;
this.node.on("click", function() {
t.clickEvents = [];
if (!n) {
n = !0;
o.scheduleOnce(function(e) {
t.clickEvents = o.clickEvents;
n = !1;
}, e.safeTime);
}
}, this);
}
};
__decorate([ i ], t.prototype, "safeTime", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
ButtonSafe: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bcc98ApuzxNW4dD3UBBCYjg", "ButtonSafe");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.safeTime = 1;
t.scale = 0;
t.clickEvents = [];
return t;
}
t.prototype.start = function() {
var e = this, t = this.node.getComponent(cc.Button);
if (t) {
this.clickEvents = t.clickEvents;
var o = this, n = !1;
this.node.on("click", function() {
e.node.getComponent(cc.AudioSource) && e.node.getComponent(cc.AudioSource).play();
e.node.stopAllActions();
t.clickEvents = [];
if (!n) {
var c = e.node.scale;
0 != e.scale && (c = e.scale);
var i = cc.scaleBy(.3, 1.1, .9), a = cc.scaleBy(.3, .9, 1.1), s = cc.scaleTo(.1, c);
e.node.runAction(cc.repeat(cc.sequence(i, a, s), 2));
n = !0;
o.scheduleOnce(function(e) {
t.clickEvents = o.clickEvents;
n = !1;
}, e.safeTime);
}
}, this);
}
};
__decorate([ i ], t.prototype, "safeTime", void 0);
__decorate([ i ], t.prototype, "scale", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
CakeMaskMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bb1adbDh31Bq5ZSY2ainOsa", "CakeMaskMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMaskMS"), c = cc._decorator, i = c.ccclass, a = (c.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.touchBegin = function(e) {};
t.prototype.touchMove = function(e) {};
t.prototype.touchEnd = function(e) {};
return t = __decorate([ i ], t);
}(n.default));
o.default = a;
cc._RF.pop();
}, {
"./CustomMaskMS": "CustomMaskMS"
} ],
CakeMask: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2e20d88vp1A6phG/KA1mxpl", "CakeMask");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMask"), c = cc._decorator, i = c.ccclass, a = (c.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.touchBegin = function(e) {};
t.prototype.touchMove = function(e) {};
t.prototype.touchEnd = function(e) {};
return t = __decorate([ i ], t);
}(n.default));
o.default = a;
cc._RF.pop();
}, {
"./CustomMask": "CustomMask"
} ],
CheckScribblePercentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e7fafko2y5O6K2lIbgLiRr0", "CheckScribblePercentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/CocosHelperMS"), c = e("../codebase/EventListenerMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.checkPercent = 1;
t.checkEvents = [];
t._pixcelBegin = 0;
t._pixcelEnd = 0;
t.hasInited = !1;
t.iniiting = !1;
return t;
}
o = t;
t.prototype.initBeginPixcel = function(e) {
if (!this.iniiting && !this.hasInited) {
this.iniiting = !0;
console.log("########");
this._pixcelBegin = this.calcute(n.CocosHelper.captureNode2(e));
console.log("initBeginPixcel" + this._pixcelBegin);
e.destroy();
cc.log("_pixcelBegin" + this._pixcelBegin);
this.iniiting = !1;
this.hasInited = !0;
}
};
t.prototype.onEnable = function() {
this.schedule(this.checkSchedle, this.checkPercent);
};
t.prototype.onDisable = function() {
this.unschedule(this.checkSchedle);
};
t.prototype.calcute = function(e) {
for (var t = e.readPixels(), o = 1, n = 0; n < e.height; ++n) for (var c = 0; c < e.width; ++c) {
var i = n * e.width + c, a = t[4 * i], s = t[4 * i + 1], r = t[4 * i + 2];
t[4 * i + 3] > 10 && (a > 0 || s > 0 || r > 0) && ++o;
}
return o;
};
t.prototype.checkSchedle = function(e) {
if (this.enabled && null != this.node) if (this.hasInited || this.iniiting) {
if (this.hasInited) {
this._pixcelEnd = this.calcute(n.CocosHelper.captureNode2(this.node));
var t = 1 - this._pixcelEnd / this._pixcelBegin;
this.enabled && c.default.emitEvents(o.CheckPercentEvent, this.checkEvents, t, this);
}
} else {
this.iniiting = !0;
this._pixcelBegin = this.calcute(n.CocosHelper.captureNode2(this.node));
this.iniiting = !1;
this.hasInited = !0;
cc.log("_pixcelBegin" + this._pixcelBegin);
}
};
var o;
t.CheckPercentEvent = "CheckPercentEvent";
__decorate([ s ], t.prototype, "checkPercent", void 0);
__decorate([ s([ c.default ]) ], t.prototype, "checkEvents", void 0);
return t = o = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS",
"../codebase/utils/CocosHelperMS": "CocosHelperMS"
} ],
CheckScribblePercent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "91745Q1G01Hu6R+085s9Dc9", "CheckScribblePercent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/CocosHelper"), c = e("../codebase/EventListener"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.checkPercent = 1;
t.checkEvents = [];
t._pixcelBegin = 0;
t._pixcelEnd = 0;
t.hasInited = !1;
t.iniiting = !1;
return t;
}
o = t;
t.prototype.initBeginPixcel = function(e) {
if (!this.iniiting && !this.hasInited) {
this.iniiting = !0;
this._pixcelBegin = this.calcute(n.CocosHelper.captureNode2(e));
e.destroy();
this.iniiting = !1;
this.hasInited = !0;
}
};
t.prototype.onEnable = function() {
this.schedule(this.checkSchedle, this.checkPercent);
};
t.prototype.onDisable = function() {
this.unschedule(this.checkSchedle);
};
t.prototype.calcute = function(e) {
for (var t = e.readPixels(), o = 1, n = 0; n < e.height; ++n) for (var c = 0; c < e.width; ++c) {
var i = n * e.width + c, a = t[4 * i], s = t[4 * i + 1], r = t[4 * i + 2];
t[4 * i + 3] > 10 && (a > 0 || s > 0 || r > 0) && ++o;
}
return o;
};
t.prototype.checkSchedle = function(e) {
if (this.enabled && null != this.node) if (this.hasInited || this.iniiting) {
if (this.hasInited) {
this._pixcelEnd = this.calcute(n.CocosHelper.captureNode2(this.node));
var t = 1 - this._pixcelEnd / this._pixcelBegin;
this.enabled && c.default.emitEvents(o.CheckPercentEvent, this.checkEvents, t, this);
}
} else {
this.iniiting = !0;
this._pixcelBegin = this.calcute(n.CocosHelper.captureNode2(this.node));
this.iniiting = !1;
this.hasInited = !0;
}
};
var o;
t.CheckPercentEvent = "CheckPercentEvent";
__decorate([ s ], t.prototype, "checkPercent", void 0);
__decorate([ s([ c.default ]) ], t.prototype, "checkEvents", void 0);
return t = o = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../codebase/EventListener": "EventListener",
"../codebase/utils/CocosHelper": "CocosHelper"
} ],
ChooseScene: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3d32BkQFxJdLZndWpDKGm4", "ChooseScene");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./GameData"), c = e("../common/uitls/CocosHelper_my"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveAudio = null;
t.playMusicAudio = null;
return t;
}
t.prototype.start = function() {
cc.audioEngine.stopMusic();
cc.audioEngine.playMusic(this.playMusicAudio, !0);
c.CocosHelper.findNode(cc.Canvas.instance.node, "arrow_r").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(10, 0)), cc.moveBy(.5, cc.v2(-10, 0)))));
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "arrow_l");
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(10, 0)), cc.moveBy(.5, cc.v2(-10, 0)))));
e.active = !1;
this.showItem();
jsToCPP.getInstance().showBanner();
};
t.prototype.showItem = function() {
for (var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "pageview").getChildByName("view").getChildByName("content"), t = function(t) {
var o = t < 5 ? "page_1" : "page_2", c = e.getChildByName(o).getChildByName("game" + (t <= 4 ? t : t - 4)), i = n.default.getInstance().getGameNameFormIndex(t);
console.log(c.name + "showItem");
cc.loader.loadRes(i, cc.Prefab, function(e, t) {
if (e) console.log(e + "gameNameerror"); else {
var o = cc.instantiate(t);
o.parent = c;
o.position = cc.v2(0, 0);
var a = n.default.getInstance().getIsNewFromName(i);
cc.log(a + "isNewisNewisNew");
a && cc.loader.loadRes("talk", cc.Prefab, function(e, t) {
cc.log(e + "errorerrorerrorerror");
var n = cc.instantiate(t);
n.parent = o;
n.position = cc.v2(174, 3);
n.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(1, -40), cc.rotateTo(1, 0))));
});
}
});
}, o = 1; o < 9; o++) t(o);
};
t.prototype.touchArrow = function(e, t) {
console.log(t);
cc.audioEngine.playEffect(this.moveAudio, !1);
c.CocosHelper.findNode(cc.Canvas.instance.node, "pageview").getComponent(cc.PageView).scrollToPage("right" == t ? 1 : 0, .5);
};
t.prototype.pageView = function(e) {
var t = e.node.getComponent(cc.PageView).getCurrentPageIndex(), o = c.CocosHelper.findNode(cc.Canvas.instance.node, "arrow_r"), n = c.CocosHelper.findNode(cc.Canvas.instance.node, "arrow_l");
if (0 == t) {
o.active = !0;
n.active = !1;
} else {
o.active = !1;
n.active = !0;
}
cc.audioEngine.playEffect(this.moveAudio, !1);
};
t.prototype.touchUrl = function() {
cc.sys.platform == cc.sys.ANDROID ? jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/") : jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
};
__decorate([ s(cc.AudioClip) ], t.prototype, "moveAudio", void 0);
__decorate([ s(cc.AudioClip) ], t.prototype, "playMusicAudio", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"./GameData": "GameData"
} ],
ClickControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "72933fyyiBEMJEmcawIkoK7", "ClickControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/compoent/MoveInMS"), c = e("./TipManagerMS"), i = cc._decorator, a = i.ccclass, s = (i.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
t.touchNum = 0;
return t;
}
t.prototype.init = function() {
this.destroyTouchEvent();
this.touchNum = 0;
this.node.getChildByName("pull").stopAllActions();
this.node.getChildByName("pull").setScale(1);
this.node.getChildByName("pull").setPosition(cc.v2(0, 0));
this.node.getChildByName("pull").opacity = 0;
this.node.getChildByName("tipClick").active = !1;
this.node.getChildByName("pull").children.forEach(function(e) {
"shadow" == e.name && e.destroy();
});
this.node.getChildByName("pull").getComponent(n.default).doShowAction();
this.node.getChildByName("pull").getComponent(n.default).actionCallBack = function() {
this.registerTouchEvent();
this.node.getChildByName("tipClick").active = !0;
}.bind(this);
};
t.prototype.onTouchStart = function(e) {
this.touchNum;
this.node.getChildByName("tipClick").active = !1;
var t = e.getTouches(), o = this.node.convertToNodeSpaceAR(t[0].getStartLocation()), n = this.node.getChildByName("pull").convertToNodeSpaceAR(t[0].getStartLocation()), i = this.node.getChildByName("pull").getComponent(cc.PolygonCollider);
if (cc.Intersection.pointInPolygon(n, i.points)) {
this.touchNum = this.touchNum + 1;
this.destroyTouchEvent();
this.touchNum % 3 == 0 && c.default.getInstance().jumpTips();
this.node.getChildByName("hand").runAction(cc.sequence(cc.moveTo(.5, o), cc.callFunc(function() {
this.node.getChildByName("pull").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
this.node.getChildByName("pull").getComponent(cc.AudioSource).play();
var e = 3 * Math.random(), t = cc.instantiate(cc.find("pull/hand_shadow", this.node));
t.active = !0;
t.name = "shadow";
t.parent = this.node.getChildByName("pull");
t.setPosition(n);
cc.find("heartParticle", this.node).setPosition(o);
cc.find("heartParticle", this.node).getComponent(cc.ParticleSystem).resetSystem();
if (e > 1) {
var c = cc.instantiate(t);
c.name = "shadow";
c.parent = this.node.getChildByName("pull");
c.setPosition(cc.v2(n.x - 50, n.y + 10));
var a = new cc.Vec2();
a = c.getPosition();
cc.Intersection.pointInPolygon(a, i.points) ? c.active = !0 : c.active = !1;
if (e > 2) {
var s = cc.instantiate(t);
s.name = "shadow";
s.parent = this.node.getChildByName("pull");
s.setPosition(cc.v2(n.x - 80, n.y + 30));
var r = new cc.Vec2();
r = s.getPosition();
cc.Intersection.pointInPolygon(r, i.points) ? s.active = !0 : s.active = !1;
}
}
}.bind(this)), cc.moveTo(.5, cc.v2(-20, 200)), cc.callFunc(function() {
this.registerTouchEvent();
}.bind(this))));
}
};
t.prototype.destroyTouchEvent = function() {
this.node.getChildByName("pull").off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.registerTouchEvent = function() {
this.node.getChildByName("pull").on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
return t = __decorate([ a ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./TipManagerMS": "TipManagerMS"
} ],
ClickController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "76b245r0/RGlb2aE5I/bq/l", "ClickController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./PopupComponet"), c = e("./TipManager"), i = e("../../common/Script/compoent/MoveIn"), a = e("../../common/Script/codebase/utils/CocosHelper"), s = e("../../common/Script/codebase/TransitionScene"), r = cc._decorator, l = r.ccclass, d = (r.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
t.touchNum = 0;
return t;
}
t.prototype.onLoad = function() {
this.init();
};
t.prototype.init = function() {
this.node.getChildByName("pull").getComponent(i.default).actionCallBack = function() {
this.registerTouchEvent();
this.node.getChildByName("tipClick").active = !0;
}.bind(this);
};
t.prototype.onTouchStart = function(e) {
if (7 == this.touchNum) {
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
var t = a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
t.active = !0;
t.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)), 2));
this.showEgainBtn();
}
this.node.getChildByName("tipClick").active = !1;
var o = e.getTouches(), n = this.node.convertToNodeSpaceAR(o[0].getStartLocation()), i = this.node.getChildByName("pull").convertToNodeSpaceAR(o[0].getStartLocation()), s = this.node.getChildByName("pull").getComponent(cc.PolygonCollider);
if (cc.Intersection.pointInPolygon(i, s.points)) {
this.node.getChildByName("pull").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
this.touchNum = this.touchNum + 1;
this.destroyTouchEvent();
this.touchNum % 3 == 0 && c.default.getInstance().jumpTips();
this.node.getChildByName("hand").runAction(cc.sequence(cc.moveTo(.5, n), cc.callFunc(function() {
this.node.getChildByName("pull").getComponent(cc.AudioSource).play();
var e = 3 * Math.random(), t = cc.instantiate(cc.find("pull/hand_shadow", this.node));
t.active = !0;
t.parent = this.node.getChildByName("pull");
t.setPosition(i);
cc.find("heartParticle", this.node).setPosition(n);
cc.find("heartParticle", this.node).getComponent(cc.ParticleSystem).resetSystem();
if (e > 1) {
var o = cc.instantiate(t);
o.parent = this.node.getChildByName("pull");
o.setPosition(cc.v2(i.x - 50, i.y + 10));
var c = new cc.Vec2();
c = o.getPosition();
cc.Intersection.pointInPolygon(c, s.points) ? o.active = !0 : o.active = !1;
if (e > 2) {
var a = cc.instantiate(t);
a.parent = this.node.getChildByName("pull");
a.setPosition(cc.v2(i.x - 80, i.y + 30));
var r = new cc.Vec2();
r = a.getPosition();
cc.Intersection.pointInPolygon(r, s.points) ? a.active = !0 : a.active = !1;
}
}
}.bind(this)), cc.moveTo(.5, cc.v2(-20, 200)), cc.callFunc(function() {
this.registerTouchEvent();
}.bind(this))));
}
};
t.prototype.destroyTouchEvent = function() {
this.node.getChildByName("pull").off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.registerTouchEvent = function() {
this.node.getChildByName("pull").on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
a.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(n.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(n.default).hidePopup();
}.bind(this))));
e ? t.getComponent(n.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(n.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
t.prototype.touchNextBtn = function() {
cc.audioEngine.stopMusic();
cc.INGAME = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "SlimeMakeNew/chiristmas_slime";
console.log(cc.INGAME);
window.require(cc.INGAME + "/src/dating.js");
};
t.prototype.touchBackBtn = function() {
s.default.changeScene("playSlimeCS");
};
t.prototype.showEgainBtn = function() {
this.node.getChildByName("playagain_btn").active = !0;
this.node.getChildByName("playagain_btn").setPosition(cc.v2(0, 600));
this.node.getChildByName("playagain_btn").runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, 200)), cc.moveTo(.1, cc.v2(0, 230)), cc.moveTo(.1, cc.v2(0, 200)), cc.callFunc(function() {
this.node.getChildByName("playagain_btn").getComponent(cc.Button).interactable = !0;
}.bind(this))));
};
t.prototype.playAgain = function() {
s.default.changeScene("rubSlimeCS");
};
return t = __decorate([ l ], t);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"../../common/Script/compoent/MoveIn": "MoveIn",
"./PopupComponet": "PopupComponet",
"./TipManager": "TipManager"
} ],
ClickScaleMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bfd5e8fFoBCqYbnktbDwenq", "ClickScaleMS");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = !1, t = !1;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
if (!e) {
e = !0;
this.node.getComponent(cc.AudioSource) && this.node.getComponent(cc.AudioSource).play();
var t = this.node.scale, o = cc.scaleTo(.156, 1 * t, .8 * t);
this.node.runAction(o);
}
}, this);
var o = function() {
if (!t) {
t = !0;
var o = this.node.scale, n = cc.scaleTo(.132, .82 * o, o), c = cc.scaleTo(.12, o, .86 * o), i = cc.scaleTo(.108, .88 * o, o), a = cc.scaleTo(.096, o, .89 * o), s = cc.scaleTo(.084, o), r = cc.callFunc(function() {
e = !1;
t = !1;
}, this), l = cc.sequence(n, c, i, a, s, r);
this.node.runAction(l);
}
};
this.node.on(cc.Node.EventType.TOUCH_END, o, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, o, this);
}
});
cc._RF.pop();
}, {} ],
ClickScale_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c508fdYYRVPJrO5AB44iR9E", "ClickScale_my");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
var e = cc.scaleTo(.156, 1, .8);
this.node.runAction(e);
}, this);
var e = function() {
var e = cc.scaleTo(.132, .82, 1), t = cc.scaleTo(.12, 1, .86), o = cc.scaleTo(.108, .88, 1), n = cc.scaleTo(.096, 1, .89), c = cc.scaleTo(.084, 1), i = cc.sequence(e, t, o, n, c);
this.node.runAction(i);
};
this.node.on(cc.Node.EventType.TOUCH_END, e, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, e, this);
}
});
cc._RF.pop();
}, {} ],
ClickScale: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8830QaupxPy5KjIY5f+eCn", "ClickScale");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function() {
this.node.getComponent(cc.AudioSource) && this.node.getComponent(cc.AudioSource).play();
var e = this.node.scale, t = cc.scaleTo(.156, 1 * e, .8 * e);
this.node.runAction(t);
}, this);
var e = function() {
var e = this.node.scale, t = cc.scaleTo(.132, .82 * e, e), o = cc.scaleTo(.12, e, .86 * e), n = cc.scaleTo(.108, .88 * e, e), c = cc.scaleTo(.096, e, .89 * e), i = cc.scaleTo(.084, e), a = cc.sequence(t, o, n, c, i);
this.node.runAction(a);
};
this.node.on(cc.Node.EventType.TOUCH_END, e, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, e, this);
}
});
cc._RF.pop();
}, {} ],
CocosHelperMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f1f70nH+m1O25lYmcP2VbKj", "CocosHelperMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.findNode_if = function(e, t) {
cc.ParticleSystem;
var o = null;
if (null != e) {
if (t(e)) o = e; else for (var n = 0, c = e.children; n < c.length; n++) {
var i = c[n];
if (null != (o = this.findNode_if(i, t))) break;
}
}
return o;
};
e.findNode = function(t, o) {
void 0 === t && (t = cc.director.getScene());
return e.findNode_if(t, function(e) {
return e.name == o;
});
};
e.visitNode = function(t, o) {
e.findNode_if(t, function(e) {
o(e);
return !1;
});
};
e.showHand = function(e, t, o, n) {
var c = e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))), i = e.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0))), a = e.parent.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
if (t.name == o.name) {
var s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
} else {
s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), s, r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
}
};
e.createShake = function(e, t) {
var o = 100 * Math.random(), n = 100 * Math.random(), c = o > 50 ? t : -t, i = n > 50 ? t : -t, a = cc.v2(c, i), s = cc.v2(-c, -i);
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, a), cc.moveBy(.2, s))));
};
e.createUpDownPrompt = function(e) {
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, -10)), cc.moveBy(.2, cc.v2(0, 10)))));
};
e.getScreenPos = function(t, o) {
var n, c = cc.Camera.findCamera(t), i = cc.view.getDesignResolutionSize(), a = new cc.Vec2(0, i.height), s = new cc.Vec2(i.width, 0), r = t.position;
t.position;
null != t.parent && (r = t.parent.convertToWorldSpaceAR(r));
if (null != c) {
var l = c.getScreenToWorldPoint(a, new cc.Vec2());
a = cc.v2(l.x, l.y);
var d = c.getScreenToWorldPoint(s, new cc.Vec2());
s = cc.v2(d.x, d.y);
}
switch (o) {
case e.ShowDirection.show_from_bottom:
n = new cc.Vec2(r.x, s.y - t.getContentSize().height * (1 - t.getAnchorPoint().y - 500));
break;

case e.ShowDirection.show_from_left:
n = new cc.Vec2(a.x - t.getContentSize().width * (1 - t.getAnchorPoint().x), r.y);
break;

case e.ShowDirection.show_from_right:
n = new cc.Vec2(s.x + t.getContentSize().width * t.getAnchorPoint().x, r.y);
break;

case e.ShowDirection.show_from_top:
n = new cc.Vec2(r.x, a.y + t.getContentSize().width * t.getAnchorPoint().y);
}
null != t.parent && (n = t.parent.convertToNodeSpaceAR(n));
return n;
};
e.hideNode = function(t, o, n, c, i) {
void 0 === n && (n = null);
void 0 === c && (c = !0);
void 0 === i && (i = .6);
var a = e.getScreenPos(t, o), s = new cc.Tween();
s.to(i, {
position: a
}, {
progress: null,
easing: "expoIn"
});
null != n && s.call(n);
c ? s.removeSelf() : s.call(function() {
t.active = !1;
});
s.target(t).start();
};
e.showBackOut = function(t, o, n, c) {
void 0 === n && (n = null);
void 0 === c && (c = 1);
t.active = !0;
var i = t.position, a = e.getScreenPos(t, o);
t.setPosition(a);
var s = new cc.Tween();
s.to(c, {
position: i
}, {
progress: null,
easing: "backOut"
});
null != n && s.call(n);
s.target(t).start();
};
e.captureNode = function(e) {
return new Promise(function(t, o) {
var n = cc.view.getVisibleSize().width, c = cc.view.getVisibleSize().height, i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(n, c, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
e.scaleY = l;
e.group = s;
t(r);
});
};
e.captureNode2 = function(e) {
var t = Math.floor(e.width * e.scaleX), o = Math.floor(e.height * e.scaleY), n = e.getChildByName("cameraNode");
if (!n) {
(n = new cc.Node("cameraNode")).parent = e;
n.x = 0;
n.y = 0;
}
var c = n.getComponent(cc.Camera);
c || (c = n.addComponent(cc.Camera));
var i = e.group;
e.group = "captureLayer";
c.cullingMask = e._cullingMask;
var a = new cc.RenderTexture();
a.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
c.targetTexture = a;
var s = e.scaleY;
e.scaleY = -1 * s;
c.render(null);
e.scaleY = s;
e.group = i;
return a;
};
e.saveToAlbum = function(t) {
e.captureNode(cc.Canvas.instance.node).then(function(e) {
if (null == e) t(!1); else {
var o = e.readPixels(), n = e.width, c = e.height, i = Date.parse(new Date().toString()), a = jsb.fileUtils.getWritablePath() + i + ".png";
jsb.saveImageData(o, n, c, a) ? jsToCPP.getInstance().doRuntimePermission(a, 1, function(e) {
console.log("保存相册回调 " + e);
}) : t(!1);
}
});
};
e.filpYImage = function(e, t, o) {
for (var n = new Uint8Array(t * o * 4), c = 4 * t, i = 0; i < o; i++) for (var a = (o - 1 - i) * t * 4, s = i * t * 4, r = 0; r < c; r++) n[s + r] = e[a + r];
return n;
};
e.createAnimation = function(e, t, o) {
for (var n = [], c = function(t) {
n.push(cc.callFunc(function() {
e.spriteFrame = t;
}));
n.push(cc.delayTime(o));
}, i = 0, a = t; i < a.length; i++) {
c(a[i]);
}
return cc.sequence(n);
};
e.captureNodeSize = function(e, t, o) {
return new Promise(function(n, c) {
var i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
a.enabled = !1;
e.scaleY = l;
e.group = s;
n(r);
});
};
return e;
}();
o.CocosHelper = n;
(function(e) {
(function(e) {
e[e.show_from_top = 0] = "show_from_top";
e[e.show_from_bottom = 1] = "show_from_bottom";
e[e.show_from_left = 2] = "show_from_left";
e[e.show_from_right = 3] = "show_from_right";
})(e.ShowDirection || (e.ShowDirection = {}));
})(n = o.CocosHelper || (o.CocosHelper = {}));
o.CocosHelper = n;
cc._RF.pop();
}, {} ],
CocosHelper_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fd8abSdoZNI8rh0m5qjlA+M", "CocosHelper_my");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.findNode_if = function(e, t) {
cc.ParticleSystem;
var o = null;
if (null != e) {
if (t(e)) o = e; else for (var n = 0, c = e.children; n < c.length; n++) {
var i = c[n];
if (null != (o = this.findNode_if(i, t))) break;
}
}
return o;
};
e.showHand = function(e, t, o, n) {
var c = e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))), i = e.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0))), a = e.parent.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
if (t.name == o.name) {
var s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
} else {
s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), s, r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
}
};
e.findNode = function(t, o) {
void 0 === t && (t = cc.director.getScene());
return e.findNode_if(t, function(e) {
return e.name == o;
});
};
e.visitNode = function(t, o) {
e.findNode_if(t, function(e) {
o(e);
return !1;
});
};
e.getScreenPos = function(t, o) {
var n, c = cc.Camera.findCamera(t), i = cc.view.getDesignResolutionSize(), a = new cc.Vec2(0, i.height), s = new cc.Vec2(i.width, 0), r = t.position;
t.position;
null != t.parent && (r = t.parent.convertToWorldSpaceAR(r));
if (null != c) {
a = c.getCameraToWorldPoint(a, new cc.Vec2());
s = c.getCameraToWorldPoint(s, new cc.Vec2());
}
switch (o) {
case e.ShowDirection.show_from_bottom:
n = new cc.Vec2(r.x, s.y - t.getContentSize().height * (1 - t.getAnchorPoint().y));
break;

case e.ShowDirection.show_from_left:
n = new cc.Vec2(a.x - t.getContentSize().width * (1 - t.getAnchorPoint().x), r.y);
break;

case e.ShowDirection.show_from_right:
n = new cc.Vec2(s.x + t.getContentSize().width * t.getAnchorPoint().x, r.y);
break;

case e.ShowDirection.show_from_top:
n = new cc.Vec2(r.x, a.y + t.getContentSize().width * t.getAnchorPoint().y);
}
null != t.parent && (n = t.parent.convertToNodeSpaceAR(n));
return n;
};
e.hideNode = function(t, o, n, c, i) {
void 0 === n && (n = null);
void 0 === c && (c = !0);
void 0 === i && (i = .6);
var a = e.getScreenPos(t, o), s = new cc.Tween();
s.to(i, {
position: a
}, {
progress: null,
easing: "expoIn"
});
null != n && s.call(n);
c ? s.removeSelf() : s.call(function() {
t.active = !1;
});
s.target(t).start();
};
e.showBackOut = function(t, o, n, c) {
void 0 === n && (n = null);
void 0 === c && (c = 1);
t.active = !0;
var i = t.position, a = e.getScreenPos(t, o);
t.setPosition(a);
var s = new cc.Tween();
s.to(c, {
position: i
}, {
progress: null,
easing: "backOut"
});
null != n && s.call(n);
s.target(t).start();
};
e.captureNode = function(e) {
return new Promise(function(t, o) {
var n = Math.floor(e.width), c = Math.floor(e.height), i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(n, c, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
e.scaleY = l;
e.group = s;
t(r);
});
};
e.captureNode2 = function(e) {
var t = Math.floor(e.width), o = Math.floor(e.height), n = e.getChildByName("cameraNode");
if (!n) {
(n = new cc.Node("cameraNode")).parent = e;
n.x = 0;
n.y = 0;
}
var c = n.getComponent(cc.Camera);
c || (c = n.addComponent(cc.Camera));
var i = e.group;
e.group = "captureLayer";
c.cullingMask = e._cullingMask;
var a = new cc.RenderTexture();
a.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
c.targetTexture = a;
var s = e.scaleY;
e.scaleY = -1 * s;
c.render(null);
e.scaleY = s;
e.group = i;
return a;
};
e.captureNodeSize = function(e, t, o) {
return new Promise(function(n, c) {
var i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
a.enabled = !1;
e.scaleY = l;
e.group = s;
n(r);
});
};
e.saveToAlbum = function(t) {
e.captureNode(cc.Canvas.instance.node).then(function(e) {
if (null == e) t(!1); else {
var o = e.readPixels(), n = e.width, c = e.height, i = Date.parse(new Date().toString()), a = jsb.fileUtils.getWritablePath() + i + ".png";
jsb.saveImageData(o, n, c, a) ? jsToCPP.getInstance().doRuntimePermission(a, 1, function(e) {
console.log("保存相册回调 " + e);
}) : t(!1);
}
});
};
e.filpYImage = function(e, t, o) {
for (var n = new Uint8Array(t * o * 4), c = 4 * t, i = 0; i < o; i++) for (var a = (o - 1 - i) * t * 4, s = i * t * 4, r = 0; r < c; r++) n[s + r] = e[a + r];
return n;
};
e.createAnimation = function(e, t, o) {
for (var n = [], c = function(t) {
n.push(cc.callFunc(function() {
e.spriteFrame = t;
}));
n.push(cc.delayTime(o));
}, i = 0, a = t; i < a.length; i++) {
c(a[i]);
}
return cc.sequence(n);
};
return e;
}();
o.CocosHelper = n;
(function(e) {
(function(e) {
e[e.show_from_top = 0] = "show_from_top";
e[e.show_from_bottom = 1] = "show_from_bottom";
e[e.show_from_left = 2] = "show_from_left";
e[e.show_from_right = 3] = "show_from_right";
})(e.ShowDirection || (e.ShowDirection = {}));
})(n = o.CocosHelper || (o.CocosHelper = {}));
o.CocosHelper = n;
cc._RF.pop();
}, {} ],
CocosHelper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "acdc6Lq6b1L7LC6046MW48R", "CocosHelper");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.findNode_if = function(e, t) {
cc.ParticleSystem;
var o = null;
if (null != e) {
if (t(e)) o = e; else for (var n = 0, c = e.children; n < c.length; n++) {
var i = c[n];
if (null != (o = this.findNode_if(i, t))) break;
}
}
return o;
};
e.showHand = function(e, t, o, n) {
var c = e.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0))), i = e.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0))), a = e.parent.convertToNodeSpaceAR(n.convertToWorldSpaceAR(cc.v2(0, 0)));
if (t.name == o.name) {
var s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
} else {
s = cc.moveTo(1, i), r = cc.moveTo(1, a);
e.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
e.setPosition(c);
}), s, r, cc.callFunc(function() {
e.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
}
};
e.findNode = function(t, o) {
void 0 === t && (t = cc.director.getScene());
return e.findNode_if(t, function(e) {
return e.name == o;
});
};
e.visitNode = function(t, o) {
e.findNode_if(t, function(e) {
o(e);
return !1;
});
};
e.getScreenPos = function(t, o) {
var n, c = cc.Camera.findCamera(t), i = cc.view.getDesignResolutionSize(), a = new cc.Vec2(0, i.height), s = new cc.Vec2(i.width, 0), r = t.position;
t.position;
null != t.parent && (r = t.parent.convertToWorldSpaceAR(r));
if (null != c) {
a = cc.v2(c.getScreenToWorldPoint(a, new cc.Vec2()).x, c.getScreenToWorldPoint(a, new cc.Vec2()).y);
s = cc.v2(c.getScreenToWorldPoint(s, new cc.Vec2()).x, c.getScreenToWorldPoint(s, new cc.Vec2()).y);
}
switch (o) {
case e.ShowDirection.show_from_bottom:
n = new cc.Vec2(r.x, s.y - t.getContentSize().height * (1 - t.getAnchorPoint().y));
break;

case e.ShowDirection.show_from_left:
n = new cc.Vec2(a.x - t.getContentSize().width * (1 - t.getAnchorPoint().x), r.y);
break;

case e.ShowDirection.show_from_right:
n = new cc.Vec2(s.x + t.getContentSize().width * t.getAnchorPoint().x, r.y);
break;

case e.ShowDirection.show_from_top:
n = new cc.Vec2(r.x, a.y + t.getContentSize().width * t.getAnchorPoint().y);
}
null != t.parent && (n = t.parent.convertToNodeSpaceAR(n));
return n;
};
e.hideNode = function(t, o, n, c, i) {
void 0 === n && (n = null);
void 0 === c && (c = !0);
void 0 === i && (i = .6);
var a = e.getScreenPos(t, o), s = new cc.Tween();
s.to(i, {
position: a
}, {
progress: null,
easing: "expoIn"
});
null != n && s.call(n);
c ? s.removeSelf() : s.call(function() {
t.active = !1;
});
s.target(t).start();
};
e.showBackOut = function(t, o, n, c) {
void 0 === n && (n = null);
void 0 === c && (c = 1);
t.active = !0;
var i = t.position, a = e.getScreenPos(t, o);
t.setPosition(a);
var s = new cc.Tween();
s.to(c, {
position: i
}, {
progress: null,
easing: "backOut"
});
null != n && s.call(n);
s.target(t).start();
};
e.captureNode = function(e) {
return new Promise(function(t, o) {
var n = Math.floor(e.width), c = Math.floor(e.height), i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(n, c, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
e.scaleY = l;
e.group = s;
t(r);
});
};
e.captureNode3 = function(e, t, o) {
var n = e.getChildByName("cameraNode");
if (!n) {
(n = new cc.Node("cameraNode")).parent = e;
n.x = 0;
n.y = 0;
}
var c = n.getComponent(cc.Camera);
c || (c = n.addComponent(cc.Camera));
var i = e.group;
e.group = "captureLayer";
c.cullingMask = e._cullingMask;
var a = new cc.RenderTexture();
a.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
c.targetTexture = a;
var s = e.scaleY;
e.scaleY = -1 * s;
c.render(null);
e.scaleY = s;
e.group = i;
return a;
};
e.captureNode2 = function(e) {
var t = e.getChildByName("cameraNode");
if (!t) {
(t = new cc.Node("cameraNode")).parent = e;
t.x = 0;
t.y = 0;
}
var o = t.getComponent(cc.Camera);
o || (o = t.addComponent(cc.Camera));
var n = e.group;
e.group = "captureLayer";
o.cullingMask = e._cullingMask;
var c = new cc.RenderTexture();
c.initWithSize(640, 960, cc.game._renderContext.STENCIL_INDEX8);
o.targetTexture = c;
var i = e.scaleY;
e.scaleY = -1 * i;
o.render(null);
e.scaleY = i;
e.group = n;
return c;
};
e.saveToAlbum = function(t) {
e.captureNode(cc.Canvas.instance.node).then(function(e) {
if (null == e) t(!1); else {
var o = e.readPixels(), n = e.width, c = e.height, i = Date.parse(new Date().toString()), a = jsb.fileUtils.getWritablePath() + i + ".png";
jsb.saveImageData(o, n, c, a) ? jsToCPP.getInstance().doRuntimePermission(a, 1, function(e) {
console.log("保存相册回调 " + e);
}) : t(!1);
}
});
};
e.saveImageByNode = function(t, o, n) {
e.captureNodeSize(t, 640, 960).then(function(e) {
var t = e.readPixels(), c = e.width, i = e.height, a = jsb.fileUtils.getWritablePath() + o + ".png";
if (jsb.saveImageData(t, c, i, a)) {
console.log("save image data success, file: " + a);
n();
} else console.log("save image data failed, file: " + a);
});
};
e.saveImageByTexture = function(e, t, o) {
var n = e.readPixels(), c = e.width, i = e.height, a = jsb.fileUtils.getWritablePath() + t + ".png";
if (jsb.saveImageData(n, c, i, a)) {
console.log("save image data success, file: " + a);
o();
} else console.log("save image data failed, file: " + a);
};
e.getImage = function(e) {
return new Promise(function(t, o) {
var n = jsb.fileUtils.getWritablePath() + e + ".png";
console.log(n);
cc.loader.load(n, function(e, o) {
if (e) console.log("sadesffa" + e); else {
console.log("sadesffa" + n);
t(o);
}
});
});
};
e.filpYImage = function(e, t, o) {
for (var n = new Uint8Array(t * o * 4), c = 4 * t, i = 0; i < o; i++) for (var a = (o - 1 - i) * t * 4, s = i * t * 4, r = 0; r < c; r++) n[s + r] = e[a + r];
return n;
};
e.createShake = function(e, t) {
var o = 100 * Math.random(), n = 100 * Math.random(), c = o > 50 ? t : -t, i = n > 50 ? t : -t, a = cc.v2(c, i), s = cc.v2(-c, -i);
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, a), cc.moveBy(.2, s))));
};
e.createUpDownPrompt = function(e) {
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.2, cc.v2(0, -10)), cc.moveBy(.2, cc.v2(0, 10)))));
};
e.createAnimation = function(e, t, o) {
for (var n = [], c = function(t) {
n.push(cc.callFunc(function() {
e.spriteFrame = t;
}));
n.push(cc.delayTime(o));
}, i = 0, a = t; i < a.length; i++) {
c(a[i]);
}
return cc.sequence(n);
};
e.captureNodeSize = function(e, t, o) {
return new Promise(function(n, c) {
var i = e.getChildByName("cameraNode");
if (!i) {
(i = new cc.Node("cameraNode")).parent = e;
i.x = 0;
i.y = 0;
}
var a = i.getComponent(cc.Camera);
a || (a = i.addComponent(cc.Camera));
i.setPosition(i.parent.convertToNodeSpaceAR(cc.Canvas.instance.node.convertToWorldSpaceAR(cc.v2(0, 0))));
var s = e.group;
e.group = "captureLayer";
a.cullingMask = e._cullingMask;
var r = new cc.RenderTexture();
r.initWithSize(t, o, cc.game._renderContext.STENCIL_INDEX8);
a.targetTexture = r;
var l = e.scaleY;
e.scaleY = -1 * l;
a.render(null);
a.enabled = !1;
e.scaleY = l;
e.group = s;
n(r);
});
};
return e;
}();
o.CocosHelper = n;
(function(e) {
(function(e) {
e[e.show_from_top = 0] = "show_from_top";
e[e.show_from_bottom = 1] = "show_from_bottom";
e[e.show_from_left = 2] = "show_from_left";
e[e.show_from_right = 3] = "show_from_right";
})(e.ShowDirection || (e.ShowDirection = {}));
})(n = o.CocosHelper || (o.CocosHelper = {}));
o.CocosHelper = n;
cc._RF.pop();
}, {} ],
CoilController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f4d0a6dFidPTalIzMWDOTYB", "CoilController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./PopupComponet"), c = e("../../common/Script/codebase/TransitionScene"), i = e("../../common/Script/codebase/utils/CocosHelper"), a = cc._decorator, s = a.ccclass, r = (a.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
return t;
}
t.prototype.touchNextBtn = function() {
c.default.changeScene("playSlimeCS");
};
t.prototype.touchBackBtn = function() {
c.default.changeScene("pullSlime1CS");
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
i.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(n.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(n.default).hidePopup();
}.bind(this))));
e ? t.getComponent(n.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(n.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
return t = __decorate([ s ], t);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"./PopupComponet": "PopupComponet"
} ],
ColorRectAssemblerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "edd73xYQxFIUZg2VM5e3qAY", "ColorRectAssemblerMS");
t.exports = {
useModel: !1,
updateRenderData: function(e) {
if (!e._renderData) {
var t = cc.IARenderData;
e._renderData = new t();
e._renderData.material = e.getMaterial();
e._renderData.ia = e._ia;
}
},
renderIA: function(e, t) {
t._flushIA(e._renderData);
}
};
cc._RF.pop();
}, {} ],
ColorRectAssembler_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e2b85ecOkxOuKopv0MpofAP", "ColorRectAssembler_my");
t.exports = {
useModel: !1,
updateRenderData: function(e) {
if (!e._renderData) {
var t = cc.IARenderData;
e._renderData = new t();
e._renderData.material = e.getMaterial();
e._renderData.ia = e._ia;
}
},
renderIA: function(e, t) {
t._flushIA(e._renderData);
}
};
cc._RF.pop();
}, {} ],
ColorRectAssembler: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0e6edGR+sNIDbLV7qd3tZMc", "ColorRectAssembler");
t.exports = {
useModel: !1,
updateRenderData: function(e) {
if (!e._renderData) {
var t = cc.IARenderData;
e._renderData = new t();
e._renderData.material = e.getMaterial();
e._renderData.ia = e._ia;
}
},
renderIA: function(e, t) {
t._flushIA(e._renderData);
}
};
cc._RF.pop();
}, {} ],
ColorRectMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "266datuDg5DNKGdO80mKKer", "ColorRectMS");
var n = e("./ColorRectAssemblerMS"), c = void 0, i = void 0, a = void 0, s = void 0, r = void 0;
cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
c = cc.renderer.renderEngine;
i = cc.gfx;
a = cc.vmath;
s = a.mat4.create();
r = a.mat4.create();
});
var l = cc.Class({
extends: cc.RenderComponent,
properties: {
blColor: cc.Color,
brColor: cc.Color,
tlColor: cc.Color,
trColor: cc.Color
},
_updateVertexData: function(e) {
var t = this._vData, o = this._uintVData, n = this.node.width, c = this.node.height, i = n * this.node.anchorX, a = c * this.node.anchorY, s = e.m00, r = e.m01, l = e.m04, d = e.m05, p = e.m12, u = e.m13, h = void 0, f = void 0, m = 0, g = this.node.opacity;
this.blColor.a = g;
this.brColor.a = g;
this.tlColor.a = g;
this.trColor.a = g;
h = -i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.blColor._val;
h = n - i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.brColor._val;
h = -i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.tlColor._val;
h = n - i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.trColor._val;
this._vb.update(0, t);
},
_createIA: function() {
var e = cc.renderer.device;
this._vertexFormat = new i.VertexFormat([ {
name: i.ATTR_POSITION,
type: i.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: i.ATTR_COLOR,
type: i.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
} ]);
this._vData = new Float32Array(12);
this._uintVData = new Uint32Array(this._vData.buffer);
this._iData = new Uint16Array([ 0, 1, 2, 1, 3, 2 ]);
this._vb = new i.VertexBuffer(e, this._vertexFormat, i.USAGE_DYNAMIC, null, 4);
this._ib = new i.IndexBuffer(e, i.INDEX_FMT_UINT16, i.USAGE_STATIC, this._iData, this._iData.length);
this.node.getWorldMatrix(r);
this._updateVertexData(r);
this._ia = new c.InputAssembler();
this._ia._vertexBuffer = this._vb;
this._ia._indexBuffer = this._ib;
this._ia._start = 0;
this._ia._count = this._iData.length;
},
onEnable: function() {
this._super();
this.node._renderFlag &= ~cc.RenderFlow.FLAG_RENDER;
this.node._renderFlag |= cc.RenderFlow.FLAG_CUSTOM_IA_RENDER;
},
onLoad: function() {
this._material = new c.SpriteMaterial();
this._material.useTexture = !1;
this._material.useColor = !1;
this._createIA();
},
update: function() {
this.node.getWorldMatrix(r);
r.m00 === s.m00 && r.m01 === s.m01 && r.m04 === s.m04 && r.m05 === s.m05 && r.m12 === s.m12 && r.m13 === s.m13 || this._updateVertexData(r);
}
});
l._assembler = n;
t.exports = l;
cc._RF.pop();
}, {
"./ColorRectAssemblerMS": "ColorRectAssemblerMS"
} ],
ColorRect_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "828e5zeeN1D57k8RVvANCys", "ColorRect_my");
var n = e("./ColorRectAssembler_my"), c = void 0, i = void 0, a = void 0, s = void 0, r = void 0;
cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
c = cc.renderer.renderEngine;
i = cc.gfx;
a = cc.vmath;
s = a.mat4.create();
r = a.mat4.create();
});
var l = cc.Class({
extends: cc.RenderComponent,
properties: {
blColor: cc.Color,
brColor: cc.Color,
tlColor: cc.Color,
trColor: cc.Color
},
_updateVertexData: function(e) {
var t = this._vData, o = this._uintVData, n = this.node.width, c = this.node.height, i = n * this.node.anchorX, a = c * this.node.anchorY, s = e.m00, r = e.m01, l = e.m04, d = e.m05, p = e.m12, u = e.m13, h = void 0, f = void 0, m = 0, g = this.node.opacity;
this.blColor.a = g;
this.brColor.a = g;
this.tlColor.a = g;
this.trColor.a = g;
h = -i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.blColor._val;
h = n - i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.brColor._val;
h = -i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.tlColor._val;
h = n - i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.trColor._val;
this._vb.update(0, t);
},
_createIA: function() {
var e = cc.renderer.device;
this._vertexFormat = new i.VertexFormat([ {
name: i.ATTR_POSITION,
type: i.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: i.ATTR_COLOR,
type: i.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
} ]);
this._vData = new Float32Array(12);
this._uintVData = new Uint32Array(this._vData.buffer);
this._iData = new Uint16Array([ 0, 1, 2, 1, 3, 2 ]);
this._vb = new i.VertexBuffer(e, this._vertexFormat, i.USAGE_DYNAMIC, null, 4);
this._ib = new i.IndexBuffer(e, i.INDEX_FMT_UINT16, i.USAGE_STATIC, this._iData, this._iData.length);
this.node.getWorldMatrix(r);
this._updateVertexData(r);
this._ia = new c.InputAssembler();
this._ia._vertexBuffer = this._vb;
this._ia._indexBuffer = this._ib;
this._ia._start = 0;
this._ia._count = this._iData.length;
},
onEnable: function() {
this._super();
this.node._renderFlag &= ~cc.RenderFlow.FLAG_RENDER;
this.node._renderFlag |= cc.RenderFlow.FLAG_CUSTOM_IA_RENDER;
},
onLoad: function() {
this._material = new c.SpriteMaterial();
this._material.useTexture = !1;
this._material.useColor = !1;
this._createIA();
},
update: function() {
this.node.getWorldMatrix(r);
r.m00 === s.m00 && r.m01 === s.m01 && r.m04 === s.m04 && r.m05 === s.m05 && r.m12 === s.m12 && r.m13 === s.m13 || this._updateVertexData(r);
}
});
l._assembler = n;
t.exports = l;
cc._RF.pop();
}, {
"./ColorRectAssembler_my": "ColorRectAssembler_my"
} ],
ColorRect: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c7fe43FVI5Kbq0I2RKwxb8V", "ColorRect");
var n = e("./ColorRectAssembler"), c = void 0, i = void 0, a = void 0, s = void 0, r = void 0;
cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
c = cc.renderer.renderEngine;
i = cc.gfx;
a = cc.vmath;
s = a.mat4.create();
r = a.mat4.create();
});
var l = cc.Class({
extends: cc.RenderComponent,
properties: {
blColor: cc.Color,
brColor: cc.Color,
tlColor: cc.Color,
trColor: cc.Color
},
_updateVertexData: function(e) {
var t = this._vData, o = this._uintVData, n = this.node.width, c = this.node.height, i = n * this.node.anchorX, a = c * this.node.anchorY, s = e.m00, r = e.m01, l = e.m04, d = e.m05, p = e.m12, u = e.m13, h = void 0, f = void 0, m = 0, g = this.node.opacity;
this.blColor.a = g;
this.brColor.a = g;
this.tlColor.a = g;
this.trColor.a = g;
h = -i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.blColor._val;
h = n - i;
f = -a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.brColor._val;
h = -i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.tlColor._val;
h = n - i;
f = c - a;
t[m++] = h * s + f * l + p;
t[m++] = h * r + f * d + u;
o[m++] = this.trColor._val;
this._vb.update(0, t);
},
_createIA: function() {
var e = cc.renderer.device;
this._vertexFormat = new i.VertexFormat([ {
name: i.ATTR_POSITION,
type: i.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: i.ATTR_COLOR,
type: i.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
} ]);
this._vData = new Float32Array(12);
this._uintVData = new Uint32Array(this._vData.buffer);
this._iData = new Uint16Array([ 0, 1, 2, 1, 3, 2 ]);
this._vb = new i.VertexBuffer(e, this._vertexFormat, i.USAGE_DYNAMIC, null, 4);
this._ib = new i.IndexBuffer(e, i.INDEX_FMT_UINT16, i.USAGE_STATIC, this._iData, this._iData.length);
this.node.getWorldMatrix(r);
this._updateVertexData(r);
this._ia = new c.InputAssembler();
this._ia._vertexBuffer = this._vb;
this._ia._indexBuffer = this._ib;
this._ia._start = 0;
this._ia._count = this._iData.length;
},
onEnable: function() {
this._super();
this.node._renderFlag &= ~cc.RenderFlow.FLAG_RENDER;
this.node._renderFlag |= cc.RenderFlow.FLAG_CUSTOM_IA_RENDER;
},
onLoad: function() {
this._material = new c.SpriteMaterial();
this._material.useTexture = !1;
this._material.useColor = !1;
this._createIA();
},
update: function() {
this.node.getWorldMatrix(r);
r.m00 === s.m00 && r.m01 === s.m01 && r.m04 === s.m04 && r.m05 === s.m05 && r.m12 === s.m12 && r.m13 === s.m13 || this._updateVertexData(r);
}
});
l._assembler = n;
t.exports = l;
cc._RF.pop();
}, {
"./ColorRectAssembler": "ColorRectAssembler"
} ],
CustomMaskMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b2d5d0CTNhBNbKNXuAz8kf6", "CustomMaskMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./MaskDrawMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.draw = new n.default();
t.particleNode = null;
t._enableTouch = !0;
return t;
}
Object.defineProperty(t.prototype, "enableTouch", {
get: function() {
return this._enableTouch;
},
set: function(e) {
this._enableTouch = e;
if (this._enableTouch) {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin.bind(this));
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
} else {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchBegin);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd);
}
},
enumerable: !0,
configurable: !0
});
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
0;
null == this.draw.mask && (this.draw.mask = this);
this.enableTouch = this._enableTouch;
};
t.prototype.start = function() {};
t.prototype.touchBegin = function(e) {
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
}
};
t.prototype.touchMove = function(e) {
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.node.getBoundingBoxToWorld().contains(t) && this.draw.addLine(e.getPreviousLocation(), t);
}
};
t.prototype.touchEnd = function(e) {
this.enabledInHierarchy && this._enableTouch;
};
t.prototype._hitTest = function(e) {
return !0;
};
t.prototype._updateGraphics = function() {
0;
};
__decorate([ a(n.default) ], t.prototype, "draw", void 0);
__decorate([ a(cc.Node) ], t.prototype, "particleNode", void 0);
__decorate([ a({
visible: !1
}) ], t.prototype, "_enableTouch", void 0);
__decorate([ a ], t.prototype, "enableTouch", null);
return t = __decorate([ i ], t);
}(cc.Mask);
o.default = s;
cc._RF.pop();
}, {
"./MaskDrawMS": "MaskDrawMS"
} ],
CustomMask: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "714228A8T1JMaxaxsJmZSPk", "CustomMask");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./MaskDraw"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.draw = new n.default();
t.particleNode = null;
t._enableTouch = !0;
return t;
}
Object.defineProperty(t.prototype, "enableTouch", {
get: function() {
return this._enableTouch;
},
set: function(e) {
this._enableTouch = e;
if (this._enableTouch) {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin.bind(this));
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
} else {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchBegin);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd);
}
},
enumerable: !0,
configurable: !0
});
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
0;
null == this.draw.mask && (this.draw.mask = this);
this.enableTouch = this._enableTouch;
};
t.prototype.start = function() {};
t.prototype.touchBegin = function(e) {
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
}
};
t.prototype.touchMove = function(e) {
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.node.getBoundingBoxToWorld().contains(t) && this.draw.addLine(e.getPreviousLocation(), t);
}
};
t.prototype.touchEnd = function(e) {
this.enabledInHierarchy && this._enableTouch;
};
t.prototype._hitTest = function(e) {
return !0;
};
t.prototype._updateGraphics = function() {
0;
};
__decorate([ a(n.default) ], t.prototype, "draw", void 0);
__decorate([ a(cc.Node) ], t.prototype, "particleNode", void 0);
__decorate([ a({
visible: !1
}) ], t.prototype, "_enableTouch", void 0);
__decorate([ a ], t.prototype, "enableTouch", null);
return t = __decorate([ i ], t);
}(cc.Mask);
o.default = s;
cc._RF.pop();
}, {
"./MaskDraw": "MaskDraw"
} ],
DataConfigMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a519bbbNT1JR7PEreIHCd2Q", "DataConfigMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function() {
function e() {
this.boxTexture = null;
this.isHome = "";
this.pageTexture = null;
this.selectLight = null;
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.setIsHome = function(e) {
this.isHome = e;
};
e.prototype.playMusic = function() {
cc.audioEngine.stopMusic();
cc.loader.loadRes("makeupms/bg", cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !1);
cc.audioEngine.playMusic(t, !0);
});
};
e.prototype.playMusic2 = function() {
cc.audioEngine.stopMusic();
cc.loader.loadRes("makeupms/ba", cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !1);
cc.audioEngine.playMusic(t, !0);
});
};
e.prototype.getIsHome = function() {
return this.isHome;
};
e.prototype.setTexture = function(e) {
this.boxTexture = e;
};
e.prototype.getTexture = function() {
return this.boxTexture;
};
e.prototype.setPageTexture = function(e) {
this.pageTexture = e;
};
e.prototype.getPageTexture = function() {
return this.pageTexture;
};
e.prototype.setSelectLight = function(e) {
this.selectLight = e;
};
e.prototype.getSelectLight = function() {
return this.selectLight;
};
e.prototype.showPhotoPup = function() {
cc.loader.loadRes("makeupms/photo_board", function(e, t) {
if (cc.sys.isMobile && e) cc.log("Prefab error11:" + e); else {
cc.loader.setAutoReleaseRecursively(t, !0);
var o = cc.instantiate(t);
console.log(o);
cc.Canvas.instance.node.addChild(o);
o.name = "newMyPrefab";
o.setPosition(0, 0);
console.log("3333");
o.zIndex = 1e3;
}
});
};
var t;
return e = t = __decorate([ c ], e);
}());
o.default = i;
cc._RF.pop();
}, {} ],
DataConfig: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a7117A9KdZLDp2JsyFNCsGq", "DataConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function() {
function e() {
this.color = null;
this.texture = null;
this.foam = null;
this.coinName = "coinhat";
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.addCoinNum = function() {
var e = cc.sys.localStorage.getItem(this.coinName);
e || (e = 0);
var t = Number(e);
t += 1;
cc.sys.localStorage.setItem(this.coinName, t);
};
e.prototype.getCoinNum = function() {
var e = cc.sys.localStorage.getItem(this.coinName);
e || (e = 0);
return e;
};
e.prototype.setColors = function(e) {
this.color = e;
};
e.prototype.getColors = function() {
return this.color;
};
e.prototype.setTexture = function(e) {
this.texture = e;
};
e.prototype.getTexture = function() {
return this.texture;
};
e.prototype.setFoam = function(e) {
this.foam = e;
};
e.prototype.getFoam = function() {
return this.foam;
};
var t;
return e = t = __decorate([ c ], e);
}());
o.default = i;
cc._RF.pop();
}, {} ],
DownSubGameMG: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0efc6xjkQZNIKbsR/4QguoY", "DownSubGameMG");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.datalist = [];
return t;
}
o = t;
t.getInstance = function() {
null == o._instance && (o._instance = new o());
return o._instance;
};
t.prototype.start = function() {};
t.prototype.downZip = function(e) {
var t = "https://unnicornfallcn.oss-cn-chengdu.aliyuncs.com/" + e + ".zip", o = cc.path.join(jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/", "UnicornFoodHall", e, "/"), n = cc.path.join(o, "game.zip");
jsb.fileUtils.isDirectoryExist(o) && jsb.fileUtils.removeDirectory(o);
jsb.fileUtils.createDirectory(o);
console.log("测试下载----zip");
console.log("url----\x3e" + t);
var c = new jsb.Downloader();
c.setOnTaskError(function(e, t, o, n) {
console.log("errorStr = " + (n || "") + "\n");
});
c.setOnTaskProgress(function(e, t, o, n) {
var c = "下载大小 = " + t + ",总大小 = " + o + ",预期总大小 = " + n + ",进度 = " + Math.floor(o / n * 1e4) / 100 + "%\n";
console.log(c);
});
c.setOnFileTaskSuccess(function(e) {
console.log("------------------download success\n");
});
c.createDownloadFileTask(t, n, "download_test");
};
var o;
return t = o = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
DragController1MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c4ba344AGFEEKrxKw5yC/Lh", "DragController1MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/compoent/MoveInMS"), c = e("./TipManagerMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touchNode = null;
t.pull0 = null;
t.pull1 = null;
t.batter = null;
t.isTouchIn = !1;
t.isTouchLocalPos = cc.v2();
t.isMovePull0 = !1;
t.isMovePull1 = !1;
t.currentNode = null;
return t;
}
t.prototype.init = function() {
this.destroyTouchEvent();
this.node.getChildByName("arrow_top").active = !1;
cc.find("slime/pull0", this.node).setScale(cc.v2(1, 0));
cc.find("slime/pull1", this.node).setScale(cc.v2(1, 0));
cc.find("slime0", this.node).active = !1;
cc.find("slime1", this.node).active = !1;
cc.find("slime2", this.node).active = !1;
this.touchNode.stopAllActions();
this.touchNode.setScale(1);
this.touchNode.setPosition(cc.v2(0, 0));
this.touchNode.opacity = 0;
this.touchNode.getComponent(n.default).doShowAction();
this.touchNode.getComponent(n.default).actionCallBack = function() {
this.registerTouchEvent();
this.node.getChildByName("arrow_top").active = !0;
}.bind(this);
this.registerTouchEvent();
};
t.prototype.registerTouchEvent = function() {
this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function(e) {
this.pull0.getComponent(cc.AudioSource).play();
var t = this.node.getChildByName("slime").getComponent(cc.PolygonCollider), o = this.node.getChildByName("slime").convertToNodeSpaceAR(e.getLocation());
if (cc.Intersection.pointInPolygon(o, t.points)) {
console.log("isIn");
this.isTouchIn = !0;
this.isTouchLocalPos = e.getLocation();
}
};
t.prototype.onTouchMove = function(e) {
this.node.getChildByName("arrow_top").active = !1;
var t = e.getTouches(), o = this.node.convertToNodeSpaceAR(t[0].getStartLocation()), n = this.node.convertToNodeSpaceAR(t[0].getLocation());
if (this.isTouchIn) {
if (!this.isMovePull1) {
this.isMovePull1 = !0;
this.currentNode = this.pull1;
this.currentNode.position = this.currentNode.parent.convertToNodeSpaceAR(this.isTouchLocalPos);
this.currentNode.stopAllActions();
this.currentNode.scaleY = 0;
}
if (!this.isMovePull0) {
this.isMovePull0 = !0;
this.currentNode = this.pull0;
this.currentNode.position = this.currentNode.parent.convertToNodeSpaceAR(this.isTouchLocalPos);
this.currentNode.stopAllActions();
this.currentNode.scaleY = 0;
}
var c = n.sub(o), i = this.currentNode.scaleY + c.y / 10 / 500;
i > 1 && (i = 1);
i < 0 && (i = 0);
this.currentNode.scaleY = i;
}
};
t.prototype.onTouchEnd = function(e) {
this._touchEnd(e);
};
t.prototype.onTouchCancle = function(e) {
this._touchEnd(e);
};
t.prototype._touchEnd = function(e) {
var t = this.currentNode;
t && t.runAction(cc.scaleTo(.5, 1, 0));
this.currentNode = null;
this.isTouchIn = !1;
this.isMovePull1 && (this.isMovePull1 = !1);
this.isMovePull0 && (this.isMovePull0 = !1);
var o = e.getTouches(), n = o[0].getStartLocation(), i = o[0].getLocation().sub(n);
cc.log(i.y);
this.touchNode.setScale(1);
this.touchNode.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
this.touchNode.getComponent(cc.AudioSource).play();
this.touchNode.runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
if (i.y > 50) {
c.default.getInstance().jumpTips();
cc.find("slime0", this.node).active = !0;
var e = 50 + 430 * Math.random(), t = 320 * Math.random();
cc.find("slime0", this.node).position = this.node.convertToNodeSpaceAR(cc.Canvas.instance.node.convertToWorldSpaceAR(cc.v2(e, t)));
cc.find("slime0", this.node).stopAllActions();
cc.find("slime0", this.node).runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.find("slime0", this.node).active = !1;
}.bind(this))));
cc.find("slime1", this.node).active = !0;
var o = 240 - 480 * Math.random(), n = 320 * -Math.random();
cc.find("slime1", this.node).position = this.node.convertToNodeSpaceAR(cc.Canvas.instance.node.convertToWorldSpaceAR(cc.v2(o, n)));
cc.find("slime1", this.node).stopAllActions();
cc.find("slime1", this.node).runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.find("slime1", this.node).active = !1;
}.bind(this))));
var a = -50 - 430 * Math.random(), s = 320 * Math.random();
cc.find("slime2", this.node).position = this.node.convertToNodeSpaceAR(cc.Canvas.instance.node.convertToWorldSpaceAR(cc.v2(a, s)));
cc.find("slime2", this.node).stopAllActions();
cc.find("slime2", this.node).active = !0;
cc.find("slime2", this.node).runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.find("slime2", this.node).active = !1;
}.bind(this))));
}
}.bind(this))));
};
__decorate([ s(cc.Node) ], t.prototype, "touchNode", void 0);
__decorate([ s(cc.Node) ], t.prototype, "pull0", void 0);
__decorate([ s(cc.Node) ], t.prototype, "pull1", void 0);
__decorate([ s(cc.AudioClip) ], t.prototype, "batter", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./TipManagerMS": "TipManagerMS"
} ],
DragEventListenerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d62aeFkEKFF2rg2FiAUp7ul", "DragEventListenerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("../EventListenerMS");
(function(e) {
e[e.TouchDown = 0] = "TouchDown";
e[e.DragBegin = 1] = "DragBegin";
e[e.Draging = 2] = "Draging";
e[e.TouchEnd = 3] = "TouchEnd";
e[e.TouchCancle = 4] = "TouchCancle";
})(n = o.DragEventType || (o.DragEventType = {}));
var i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t(t, o, c) {
void 0 === t && (t = null);
void 0 === o && (o = null);
void 0 === c && (c = null);
var i = e.call(this, t, o) || this;
i.eventName = "TouchEnd";
i._dragType = n.TouchEnd;
null != c && (i.dragType = c);
return i;
}
Object.defineProperty(t.prototype, "dragType", {
get: function() {
return this._dragType;
},
set: function(e) {
this._dragType = e;
this.eventName = Object.keys(n)[e];
},
enumerable: !0,
configurable: !0
});
t.prototype.emit = function(t) {
for (var o, c = [], i = 1; i < arguments.length; i++) c[i - 1] = arguments[i];
o = "string" == typeof t ? t : Object.keys(n)[t];
return e.prototype.emit.apply(this, [ o ].concat(c));
};
__decorate([ s({
override: !0,
visible: !1
}) ], t.prototype, "eventName", void 0);
__decorate([ s({
type: cc.Enum(n),
visible: !1
}) ], t.prototype, "_dragType", void 0);
__decorate([ s({
type: cc.Enum(n)
}) ], t.prototype, "dragType", null);
return t = __decorate([ a("DragEventListener") ], t);
}(c.default);
o.default = r;
cc._RF.pop();
}, {
"../EventListenerMS": "EventListenerMS"
} ],
DragEventListener: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a47dfvAIcZKEL/2s995aXMA", "DragEventListener");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("../EventListener");
(function(e) {
e[e.TouchDown = 0] = "TouchDown";
e[e.DragBegin = 1] = "DragBegin";
e[e.Draging = 2] = "Draging";
e[e.TouchEnd = 3] = "TouchEnd";
e[e.TouchCancle = 4] = "TouchCancle";
})(n = o.DragEventType || (o.DragEventType = {}));
var i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t(t, o, c) {
void 0 === t && (t = null);
void 0 === o && (o = null);
void 0 === c && (c = null);
var i = e.call(this, t, o) || this;
i.eventName = "TouchEnd";
i._dragType = n.TouchEnd;
null != c && (i.dragType = c);
return i;
}
Object.defineProperty(t.prototype, "dragType", {
get: function() {
return this._dragType;
},
set: function(e) {
this._dragType = e;
this.eventName = Object.keys(n)[e];
},
enumerable: !0,
configurable: !0
});
t.prototype.emit = function(t) {
for (var o, c = [], i = 1; i < arguments.length; i++) c[i - 1] = arguments[i];
o = "string" == typeof t ? t : Object.keys(n)[t];
return e.prototype.emit.apply(this, [ o ].concat(c));
};
__decorate([ s({
override: !0,
visible: !1
}) ], t.prototype, "eventName", void 0);
__decorate([ s({
type: cc.Enum(n),
visible: !1
}) ], t.prototype, "_dragType", void 0);
__decorate([ s({
type: cc.Enum(n)
}) ], t.prototype, "dragType", null);
return t = __decorate([ a("DragEventListener") ], t);
}(c.default);
o.default = r;
cc._RF.pop();
}, {
"../EventListener": "EventListener"
} ],
DragFallMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "374c8vBoJpAhK3/WBu4M6Nn", "DragFallMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../utils/NodeTransformMS"), c = e("./SpriteDragMS"), i = e("./DragEventListenerMS"), a = e("../EventListenerMS"), s = cc._decorator, r = s.ccclass, l = s.property, d = s.requireComponent, p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.fallPos = new n.default();
t.fallParticle = null;
t.inBowl = null;
t.fallLis = [];
t.pourFrame = null;
t.pourTime = 2;
t.fallSprite = null;
t.fallAnimation = [];
t.moveToFallTime = .4;
t.drag = null;
t.fallAAction = null;
return t;
}
o = t;
t.prototype.start = function() {
this.initData();
};
t.prototype.initData = function() {
if (null == this.drag) {
this.drag = this.getComponent(c.default);
this.drag.eventTouchs.push(new i.default(this, "dragToBowl", i.DragEventType.TouchEnd));
for (var e = 0, t = [ "startFall", "stopFall" ]; e < t.length; e++) {
var o = t[e];
this.fallLis.push(new a.default(this, o, o));
}
}
null == this.fallSprite && (this.fallSprite = this.node.getChildByName("fallSprite"));
if (null == this.fallParticle) {
var n = this.node.getChildByName("particle");
null != n && (this.fallParticle = n.getComponent(cc.ParticleSystem));
}
};
t.prototype.dragToBowl = function(e, t) {
var n = this;
t.enabled = !1;
new cc.Tween().target(t.moveNode).to(this.moveToFallTime, {
position: this.fallPos.pos,
scaleX: this.fallPos.scale.x,
scaleY: this.fallPos.scale.y,
rotation: this.fallPos.rotate
}, null).call(function() {
for (var e = 0, t = n.fallLis; e < t.length; e++) {
t[e].emit(o.fallStart, n);
}
}).start();
};
t.prototype.startFall = function() {
var e = function() {
if (null == t.fallSprite) return "break";
t.fallSprite.active = !0;
if (null != t.fallAAction) return "break";
if (t.fallAnimation.length <= 0) return "break";
for (var e = t.fallSprite.getComponent(cc.Sprite), o = [], n = function(t) {
o.push(cc.callFunc(function() {
e.spriteFrame = t;
}));
o.push(cc.delayTime(.15));
}, c = 0, i = t.fallAnimation; c < i.length; c++) {
n(i[c]);
}
t.fallAAction = cc.repeatForever(cc.sequence(o));
t.fallSprite.runAction(t.fallAAction);
}, t = this;
do {
if ("break" === e()) break;
} while (0);
null != this.fallParticle && this.fallParticle.resetSystem();
if (null != this.pourFrame) {
var o = this.node, n = this.node.getChildByName("moving");
if (null != n) o = n; else {
var c = this.node.getChildByName("noshade");
null != c && (o = c);
}
var i = o.getComponent(cc.Sprite);
i && (i.spriteFrame = this.pourFrame);
}
};
t.prototype.stopFall = function() {
do {
if (null == this.fallSprite) break;
this.fallSprite.active = !1;
if (null == this.fallAAction) break;
this.fallSprite.stopAction(this.fallAAction);
this.fallAAction = null;
} while (0);
if (null != this.fallParticle) {
var e = this.fallParticle.node.parent.convertToWorldSpaceAR(this.fallParticle.node.position);
this.fallParticle.node.parent = this.node.parent;
this.fallParticle.node.setSiblingIndex(this.node.getSiblingIndex());
this.fallParticle.node.position = this.fallParticle.node.parent.convertToNodeSpaceAR(e);
this.fallParticle.node.rotation = this.fallParticle.node.rotation + this.node.rotation;
this.fallParticle.stopSystem();
}
};
var o;
t.fallStart = "startFall";
t.fallEnd = "stopFall";
__decorate([ l({
type: n.default
}) ], t.prototype, "fallPos", void 0);
__decorate([ l({
type: cc.ParticleSystem
}) ], t.prototype, "fallParticle", void 0);
__decorate([ l({
type: cc.Node
}) ], t.prototype, "inBowl", void 0);
__decorate([ l({
type: [ a.default ]
}) ], t.prototype, "fallLis", void 0);
__decorate([ l({
type: cc.SpriteFrame
}) ], t.prototype, "pourFrame", void 0);
__decorate([ l() ], t.prototype, "pourTime", void 0);
__decorate([ l(cc.Node) ], t.prototype, "fallSprite", void 0);
__decorate([ l({
type: [ cc.SpriteFrame ],
visible: function() {
return null != this.fallSprite;
}
}) ], t.prototype, "fallAnimation", void 0);
return t = o = __decorate([ r, d(c.default) ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../EventListenerMS": "EventListenerMS",
"../utils/NodeTransformMS": "NodeTransformMS",
"./DragEventListenerMS": "DragEventListenerMS",
"./SpriteDragMS": "SpriteDragMS"
} ],
DragFall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "25b58U+MqpFPJQ8h38xoVSj", "DragFall");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../utils/NodeTransform"), c = e("./SpriteDrag"), i = e("./DragEventListener"), a = e("../EventListener"), s = cc._decorator, r = s.ccclass, l = s.property, d = s.requireComponent, p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.fallPos = new n.default();
t.fallParticle = null;
t.inBowl = null;
t.fallLis = [];
t.pourFrame = null;
t.pourTime = 2;
t.fallSprite = null;
t.fallAnimation = [];
t.moveToFallTime = .4;
t.drag = null;
t.fallAAction = null;
return t;
}
o = t;
t.prototype.start = function() {
this.initData();
};
t.prototype.initData = function() {
if (null == this.drag) {
this.drag = this.getComponent(c.default);
this.drag.eventTouchs.push(new i.default(this, "dragToBowl", i.DragEventType.TouchEnd));
for (var e = 0, t = [ "startFall", "stopFall" ]; e < t.length; e++) {
var o = t[e];
this.fallLis.push(new a.default(this, o, o));
}
}
null == this.fallSprite && (this.fallSprite = this.node.getChildByName("fallSprite"));
if (null == this.fallParticle) {
var n = this.node.getChildByName("particle");
null != n && (this.fallParticle = n.getComponent(cc.ParticleSystem));
}
};
t.prototype.dragToBowl = function(e, t) {
var n = this;
t.enabled = !1;
new cc.Tween().target(t.moveNode).to(this.moveToFallTime, {
position: this.fallPos.pos,
scaleX: this.fallPos.scale.x,
scaleY: this.fallPos.scale.y,
rotation: this.fallPos.rotate
}, null).call(function() {
for (var e = 0, t = n.fallLis; e < t.length; e++) {
t[e].emit(o.fallStart, n);
}
}).start();
};
t.prototype.startFall = function() {
var e = function() {
if (null == t.fallSprite) return "break";
t.fallSprite.active = !0;
if (null != t.fallAAction) return "break";
if (t.fallAnimation.length <= 0) return "break";
for (var e = t.fallSprite.getComponent(cc.Sprite), o = [], n = function(t) {
o.push(cc.callFunc(function() {
e.spriteFrame = t;
}));
o.push(cc.delayTime(.15));
}, c = 0, i = t.fallAnimation; c < i.length; c++) {
n(i[c]);
}
t.fallAAction = cc.repeatForever(cc.sequence(o));
t.fallSprite.runAction(t.fallAAction);
}, t = this;
do {
if ("break" === e()) break;
} while (0);
null != this.fallParticle && this.fallParticle.resetSystem();
if (null != this.pourFrame) {
var o = this.node, n = this.node.getChildByName("moving");
if (null != n) o = n; else {
var c = this.node.getChildByName("noshade");
null != c && (o = c);
}
var i = o.getComponent(cc.Sprite);
i && (i.spriteFrame = this.pourFrame);
}
};
t.prototype.stopFall = function() {
do {
if (null == this.fallSprite) break;
this.fallSprite.active = !1;
if (null == this.fallAAction) break;
this.fallSprite.stopAction(this.fallAAction);
this.fallAAction = null;
} while (0);
if (null != this.fallParticle) {
var e = this.fallParticle.node.parent.convertToWorldSpaceAR(this.fallParticle.node.position);
this.fallParticle.node.parent = this.node.parent;
this.fallParticle.node.setSiblingIndex(this.node.getSiblingIndex());
this.fallParticle.node.position = this.fallParticle.node.parent.convertToNodeSpaceAR(e);
this.fallParticle.node.rotation = this.fallParticle.node.rotation + this.node.rotation;
this.fallParticle.stopSystem();
}
};
var o;
t.fallStart = "startFall";
t.fallEnd = "stopFall";
__decorate([ l({
type: n.default
}) ], t.prototype, "fallPos", void 0);
__decorate([ l({
type: cc.ParticleSystem
}) ], t.prototype, "fallParticle", void 0);
__decorate([ l({
type: cc.Node
}) ], t.prototype, "inBowl", void 0);
__decorate([ l({
type: [ a.default ]
}) ], t.prototype, "fallLis", void 0);
__decorate([ l({
type: cc.SpriteFrame
}) ], t.prototype, "pourFrame", void 0);
__decorate([ l() ], t.prototype, "pourTime", void 0);
__decorate([ l(cc.Node) ], t.prototype, "fallSprite", void 0);
__decorate([ l({
type: [ cc.SpriteFrame ],
visible: function() {
return null != this.fallSprite;
}
}) ], t.prototype, "fallAnimation", void 0);
return t = o = __decorate([ r, d(c.default) ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../EventListener": "EventListener",
"../utils/NodeTransform": "NodeTransform",
"./DragEventListener": "DragEventListener",
"./SpriteDrag": "SpriteDrag"
} ],
DragHideShadeMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "489cb+BeFtDHY06mKY7l9go", "DragHideShadeMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SpriteDragMS"), c = e("./DragEventListenerMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = i.requireComponent, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.movingFrame = null;
t.noshade = null;
t.movingNode = null;
t.m_orignalFrame = null;
t.thisNodeAction = null;
t.changeSprite = null;
t.drag = null;
return t;
}
t.prototype.start = function() {
this.noshade = this.node.getChildByName("noshade");
this.movingNode = this.node.getChildByName("moving");
null != this.movingNode && (this.movingNode.active = !0);
if (null != this.noshade) {
if (null != (e = this.noshade.getComponent(cc.Sprite))) {
this.changeSprite = e;
this.m_orignalFrame = e.spriteFrame;
}
} else {
var e;
if (null != (e = this.getComponent(cc.Sprite))) {
this.changeSprite = e;
this.m_orignalFrame = e.spriteFrame;
}
}
if (null == this.drag) {
this.drag = this.getComponent(n.default);
if (null != this.drag) {
var t = new c.default();
t.dragType = c.DragEventType.TouchCancle;
t.eventHander.handler = "moveBack";
t.eventHander.component = "DragHideShade";
t.eventHander.target = this.node;
this.drag.eventTouchs.push(t);
var o = new c.default();
o.dragType = c.DragEventType.DragBegin;
o.eventHander.handler = "startMove";
o.eventHander.component = "DragHideShade";
o.eventHander.target = this.node;
this.drag.eventTouchs.push(o);
}
}
};
t.prototype.startMove = function() {
if (null != this.movingNode || null != this.noshade) {
var e = this.getComponent(cc.Sprite);
e && (e.enabled = !1);
}
if (null != this.movingNode) {
this.movingNode.active = !0;
null != this.noshade && (this.noshade.active = !1);
}
null != this.movingFrame && null != this.changeSprite && (this.changeSprite.spriteFrame = this.movingFrame);
};
t.prototype.moveBack = function() {
if (null != this.movingNode || null != this.noshade) {
var e = this.getComponent(cc.Sprite);
e && (e.enabled = !0);
}
if (null != this.movingNode) {
this.movingNode.active = !1;
null != this.noshade && (this.noshade.active = !0);
}
null != this.movingFrame && null != this.changeSprite && null != this.m_orignalFrame && (this.changeSprite.spriteFrame = this.m_orignalFrame);
};
__decorate([ s(cc.SpriteFrame) ], t.prototype, "movingFrame", void 0);
return t = __decorate([ a, r(n.default) ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./DragEventListenerMS": "DragEventListenerMS",
"./SpriteDragMS": "SpriteDragMS"
} ],
DragHideShade: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a0d9U1xxBBf5e+WPdSQORc", "DragHideShade");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SpriteDrag"), c = e("./DragEventListener"), i = cc._decorator, a = i.ccclass, s = i.property, r = i.requireComponent, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.movingFrame = null;
t.noshade = null;
t.movingNode = null;
t.m_orignalFrame = null;
t.thisNodeAction = null;
t.changeSprite = null;
t.drag = null;
return t;
}
t.prototype.start = function() {
this.noshade = this.node.getChildByName("noshade");
this.movingNode = this.node.getChildByName("moving");
null != this.movingNode && (this.movingNode.active = !0);
if (null != this.noshade) {
if (null != (e = this.noshade.getComponent(cc.Sprite))) {
this.changeSprite = e;
this.m_orignalFrame = e.spriteFrame;
}
} else {
var e;
if (null != (e = this.getComponent(cc.Sprite))) {
this.changeSprite = e;
this.m_orignalFrame = e.spriteFrame;
}
}
if (null == this.drag) {
this.drag = this.getComponent(n.default);
if (null != this.drag) {
var t = new c.default();
t.dragType = c.DragEventType.TouchCancle;
t.eventHander.handler = "moveBack";
t.eventHander.component = "DragHideShade";
t.eventHander.target = this.node;
this.drag.eventTouchs.push(t);
var o = new c.default();
o.dragType = c.DragEventType.DragBegin;
o.eventHander.handler = "startMove";
o.eventHander.component = "DragHideShade";
o.eventHander.target = this.node;
this.drag.eventTouchs.push(o);
}
}
};
t.prototype.startMove = function() {
if (null != this.movingNode || null != this.noshade) {
var e = this.getComponent(cc.Sprite);
e && (e.enabled = !1);
}
if (null != this.movingNode) {
this.movingNode.active = !0;
null != this.noshade && (this.noshade.active = !1);
}
null != this.movingFrame && null != this.changeSprite && (this.changeSprite.spriteFrame = this.movingFrame);
};
t.prototype.moveBack = function() {
if (null != this.movingNode || null != this.noshade) {
var e = this.getComponent(cc.Sprite);
e && (e.enabled = !0);
}
if (null != this.movingNode) {
this.movingNode.active = !1;
null != this.noshade && (this.noshade.active = !0);
}
null != this.movingFrame && null != this.changeSprite && null != this.m_orignalFrame && (this.changeSprite.spriteFrame = this.m_orignalFrame);
};
__decorate([ s(cc.SpriteFrame) ], t.prototype, "movingFrame", void 0);
return t = __decorate([ a, r(n.default) ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./DragEventListener": "DragEventListener",
"./SpriteDrag": "SpriteDrag"
} ],
DragUtilMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8e9e2mrbGZEzoCf/MS9m5sr", "DragUtilMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e[e.linear = 0] = "linear";
e[e.fade = 1] = "fade";
e[e.quadIn = 2] = "quadIn";
e[e.quadOut = 3] = "quadOut";
e[e.quadInOut = 4] = "quadInOut";
e[e.quadOutIn = 5] = "quadOutIn";
e[e.cubicIn = 6] = "cubicIn";
e[e.cubicOut = 7] = "cubicOut";
e[e.cubicInOut = 8] = "cubicInOut";
e[e.cubicOutIn = 9] = "cubicOutIn";
e[e.quartIn = 10] = "quartIn";
e[e.quartOut = 11] = "quartOut";
e[e.quartInOut = 12] = "quartInOut";
e[e.quartOutIn = 13] = "quartOutIn";
e[e.quintIn = 14] = "quintIn";
e[e.quintOut = 15] = "quintOut";
e[e.quintInOut = 16] = "quintInOut";
e[e.quintOutIn = 17] = "quintOutIn";
e[e.sineIn = 18] = "sineIn";
e[e.sineOut = 19] = "sineOut";
e[e.sineInOut = 20] = "sineInOut";
e[e.sineOutIn = 21] = "sineOutIn";
e[e.expoIn = 22] = "expoIn";
e[e.expoOut = 23] = "expoOut";
e[e.expoInOut = 24] = "expoInOut";
e[e.expoOutIn = 25] = "expoOutIn";
e[e.circIn = 26] = "circIn";
e[e.circOut = 27] = "circOut";
e[e.circInOut = 28] = "circInOut";
e[e.circOutIn = 29] = "circOutIn";
e[e.elasticIn = 30] = "elasticIn";
e[e.elasticOut = 31] = "elasticOut";
e[e.elasticInOut = 32] = "elasticInOut";
e[e.elasticOutIn = 33] = "elasticOutIn";
e[e.backIn = 34] = "backIn";
e[e.backOut = 35] = "backOut";
e[e.backInOut = 36] = "backInOut";
e[e.backOutIn = 37] = "backOutIn";
e[e.bounceIn = 38] = "bounceIn";
e[e.bounceOut = 39] = "bounceOut";
e[e.bounceInOut = 40] = "bounceInOut";
e[e.bounceOutIn = 41] = "bounceOutIn";
})(o.TweenType || (o.TweenType = {}));
var n = function() {
function e() {}
e.pointInCollide = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == o) return !1;
var i = o.world;
if (e.isBoxOrPolygo(o)) {
var a = i.points;
if (!c.equals(cc.Vec2.ZERO)) for (var s = i.points.slice(), r = 0; r < s.length; r++) s[r] = s[r].add(c);
return cc.Intersection.pointInPolygon(t.add(n), a);
}
if (o instanceof cc.CircleCollider) {
var l = i.position, d = i.radius;
return t.add(n).sub(l.add(c)).magSqr() < d * d;
}
return !0;
};
e.collideOnCollie = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == t || null == o) return !1;
var i = t.world, a = o.world;
return e.isBoxOrPolygo(t) && e.isBoxOrPolygo(o) ? cc.Intersection.polygonPolygon(i.points, a.points) : t instanceof cc.CircleCollider && o instanceof cc.CircleCollider ? cc.Intersection.circleCircle({
position: i.position,
radius: i.radius
}, {
position: a.position,
radius: a.radius
}) : t instanceof cc.CircleCollider && e.isBoxOrPolygo(o) ? cc.Intersection.polygonCircle(a.points, {
position: i.position,
radius: i.radius
}) : !!(o instanceof cc.CircleCollider && e.isBoxOrPolygo(t)) && cc.Intersection.polygonCircle(i.points, {
position: a.position,
radius: a.radius
});
};
e.collideInCollie = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == t || null == o) return !1;
var i = t.world, a = o.world;
if (e.isBoxOrPolygo(t)) {
for (var s = !0, r = 0, l = i.points; r < l.length; r++) {
var d = l[r];
if (!e.pointInCollide(d, o, n, c)) {
s = !1;
break;
}
}
return s;
}
if (t instanceof cc.CircleCollider && o instanceof cc.CircleCollider) {
var p = i.position, u = a.position, h = i.radius, f = a.radius;
return !(h > f) && u.add(c).sub(p.add(n)).magSqr() < (f - h) * (f - h);
}
if (t instanceof cc.CircleCollider && e.isBoxOrPolygo(o)) {
p = i.position, h = i.radius;
if (!e.pointInCollide(p, o, n, c)) return !1;
for (var m = a.points, g = (s = !0, 0); g < m.length; g++) {
var v = m[g].add(c), _ = m[(g + 1) % m.length].add(c);
if (cc.Intersection.pointLineDistance(p.add(n), v, _, !0) < h) {
s = !1;
break;
}
}
return s;
}
return !1;
};
e.isBoxOrPolygo = function(e) {
return e instanceof cc.BoxCollider || e instanceof cc.PolygonCollider;
};
return e;
}();
o.DragUtil = n;
cc._RF.pop();
}, {} ],
DragUtil: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "499572SZ1ZEFpX3NeLuS8va", "DragUtil");
Object.defineProperty(o, "__esModule", {
value: !0
});
(function(e) {
e[e.linear = 0] = "linear";
e[e.fade = 1] = "fade";
e[e.quadIn = 2] = "quadIn";
e[e.quadOut = 3] = "quadOut";
e[e.quadInOut = 4] = "quadInOut";
e[e.quadOutIn = 5] = "quadOutIn";
e[e.cubicIn = 6] = "cubicIn";
e[e.cubicOut = 7] = "cubicOut";
e[e.cubicInOut = 8] = "cubicInOut";
e[e.cubicOutIn = 9] = "cubicOutIn";
e[e.quartIn = 10] = "quartIn";
e[e.quartOut = 11] = "quartOut";
e[e.quartInOut = 12] = "quartInOut";
e[e.quartOutIn = 13] = "quartOutIn";
e[e.quintIn = 14] = "quintIn";
e[e.quintOut = 15] = "quintOut";
e[e.quintInOut = 16] = "quintInOut";
e[e.quintOutIn = 17] = "quintOutIn";
e[e.sineIn = 18] = "sineIn";
e[e.sineOut = 19] = "sineOut";
e[e.sineInOut = 20] = "sineInOut";
e[e.sineOutIn = 21] = "sineOutIn";
e[e.expoIn = 22] = "expoIn";
e[e.expoOut = 23] = "expoOut";
e[e.expoInOut = 24] = "expoInOut";
e[e.expoOutIn = 25] = "expoOutIn";
e[e.circIn = 26] = "circIn";
e[e.circOut = 27] = "circOut";
e[e.circInOut = 28] = "circInOut";
e[e.circOutIn = 29] = "circOutIn";
e[e.elasticIn = 30] = "elasticIn";
e[e.elasticOut = 31] = "elasticOut";
e[e.elasticInOut = 32] = "elasticInOut";
e[e.elasticOutIn = 33] = "elasticOutIn";
e[e.backIn = 34] = "backIn";
e[e.backOut = 35] = "backOut";
e[e.backInOut = 36] = "backInOut";
e[e.backOutIn = 37] = "backOutIn";
e[e.bounceIn = 38] = "bounceIn";
e[e.bounceOut = 39] = "bounceOut";
e[e.bounceInOut = 40] = "bounceInOut";
e[e.bounceOutIn = 41] = "bounceOutIn";
})(o.TweenType || (o.TweenType = {}));
var n = function() {
function e() {}
e.pointInCollide = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == o) return !1;
var i = o.world;
if (e.isBoxOrPolygo(o)) {
var a = i.points;
if (!c.equals(cc.Vec2.ZERO)) for (var s = i.points.slice(), r = 0; r < s.length; r++) s[r] = s[r].add(c);
return cc.Intersection.pointInPolygon(t.add(n), a);
}
if (o instanceof cc.CircleCollider) {
var l = i.position, d = i.radius;
return t.add(n).sub(l.add(c)).magSqr() < d * d;
}
return !0;
};
e.collideOnCollie = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == t || null == o) return !1;
var i = t.world, a = o.world;
return e.isBoxOrPolygo(t) && e.isBoxOrPolygo(o) ? cc.Intersection.polygonPolygon(i.points, a.points) : t instanceof cc.CircleCollider && o instanceof cc.CircleCollider ? cc.Intersection.circleCircle({
position: i.position,
radius: i.radius
}, {
position: a.position,
radius: a.radius
}) : t instanceof cc.CircleCollider && e.isBoxOrPolygo(o) ? cc.Intersection.polygonCircle(a.points, {
position: i.position,
radius: i.radius
}) : !!(o instanceof cc.CircleCollider && e.isBoxOrPolygo(t)) && cc.Intersection.polygonCircle(i.points, {
position: a.position,
radius: a.radius
});
};
e.collideInCollie = function(t, o, n, c) {
void 0 === n && (n = cc.Vec2.ZERO);
void 0 === c && (c = cc.Vec2.ZERO);
if (null == t || null == o) return !1;
var i = t.world, a = o.world;
if (e.isBoxOrPolygo(t)) {
for (var s = !0, r = 0, l = i.points; r < l.length; r++) {
var d = l[r];
if (!e.pointInCollide(d, o, n, c)) {
s = !1;
break;
}
}
return s;
}
if (t instanceof cc.CircleCollider && o instanceof cc.CircleCollider) {
var p = i.position, u = a.position, h = i.radius, f = a.radius;
return !(h > f) && u.add(c).sub(p.add(n)).magSqr() < (f - h) * (f - h);
}
if (t instanceof cc.CircleCollider && e.isBoxOrPolygo(o)) {
p = i.position, h = i.radius;
if (!e.pointInCollide(p, o, n, c)) return !1;
for (var m = a.points, g = (s = !0, 0); g < m.length; g++) {
var v = m[g].add(c), _ = m[(g + 1) % m.length].add(c);
if (cc.Intersection.pointLineDistance(p.add(n), v, _, !0) < h) {
s = !1;
break;
}
}
return s;
}
return !1;
};
e.isBoxOrPolygo = function(e) {
return e instanceof cc.BoxCollider || e instanceof cc.PolygonCollider;
};
return e;
}();
o.DragUtil = n;
cc._RF.pop();
}, {} ],
DragonBoneActionsMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a7cc5A6GY5KBZ8PasJXRxrS", "DragonBoneActionsMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t(t, o, n) {
var c = e.call(this) || this;
c._scaleDelta = cc.v2(0, 0);
c._startScale = cc.v2(0, 0);
c._previousScale = cc.v2(0, 0);
c._scaleBone = null;
c.initWithDuration(t, o, n);
return c;
}
t.prototype.setScaleBone = function(e) {
this._scaleBone = e;
};
t.prototype.getBone = function() {
return this._scaleBone;
};
t.prototype.initWithDuration = function(t, o, n) {
if (e.prototype.initWithDuration.call(this, t, this)) {
this._scaleDelta = cc.v2(o, n);
return !0;
}
return !1;
};
t.prototype.startWithTarget = function(t) {
e.prototype.startWithTarget.call(this, this, t);
if (null != this._scaleBone) {
this._startScale.x = this._scaleBone.offset.x;
this._startScale.y = this._scaleBone.offset.y;
this._previousScale = this._startScale;
}
};
t.prototype.update = function(e) {
if (null != this._scaleBone) {
var t, o = cc.v2(this._scaleBone.offset.scaleX, this._scaleBone.offset.scaleY).sub(this._previousScale);
this._startScale = this._startScale.add(o);
t = this._startScale.add(cc.v2(this._scaleDelta.x * e, this._scaleDelta.y * e));
this._previousScale = t;
this._scaleBone.offset.scaleX = t.x;
this._scaleBone.offset.scaleY = t.y;
this._scaleBone.invalidUpdate();
}
};
return t = __decorate([ c ], t);
}(cc.ActionInterval));
o.default = i;
var a = function(e) {
__extends(t, e);
function t(t, o, n) {
var c = e.call(this, t, o, n) || this;
c.initWithDurations(t, o, n);
return c;
}
t.prototype.initWithDurations = function(t, o, n) {
if (e.prototype.initWithDuration.call(this, t, o, n)) {
this._endScale = cc.v2(o, n);
return !0;
}
};
t.prototype.startWithTarget = function(t) {
e.prototype.startWithTarget.call(this, t);
this._scaleBone && (this._scaleDelta = this._endScale.sub(cc.v2(this._scaleBone.offset.scaleX, this._scaleBone.offset.scaleY)));
};
return t;
}(i);
o.DragonBoneScaleTo = a;
o.dragonBoneScaleBy = function(e, t, o) {
return new i(e, t, o);
};
o.dragonBoneScaleTo = function(e, t, o) {
return new a(e, t, o);
};
cc._RF.pop();
}, {} ],
DragonBoneActions: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d883t8DAlCS6f7wfzFNL39", "DragonBoneActions");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t(t, o, n) {
var c = e.call(this) || this;
c._scaleDelta = cc.v2(0, 0);
c._startScale = cc.v2(0, 0);
c._previousScale = cc.v2(0, 0);
c._scaleBone = null;
c.initWithDuration(t, o, n);
return c;
}
t.prototype.setScaleBone = function(e) {
this._scaleBone = e;
};
t.prototype.getBone = function() {
return this._scaleBone;
};
t.prototype.initWithDuration = function(t, o, n) {
if (e.prototype.initWithDuration.call(this, t, this)) {
this._scaleDelta = cc.v2(o, n);
return !0;
}
return !1;
};
t.prototype.startWithTarget = function(t) {
e.prototype.startWithTarget.call(this, this, t);
if (null != this._scaleBone) {
this._startScale.x = this._scaleBone.offset.x;
this._startScale.y = this._scaleBone.offset.y;
this._previousScale = this._startScale;
}
};
t.prototype.update = function(e) {
if (null != this._scaleBone) {
var t, o = cc.v2(this._scaleBone.offset.scaleX, this._scaleBone.offset.scaleY).sub(this._previousScale);
this._startScale = this._startScale.add(o);
t = this._startScale.add(cc.v2(this._scaleDelta.x * e, this._scaleDelta.y * e));
this._previousScale = t;
this._scaleBone.offset.scaleX = t.x;
this._scaleBone.offset.scaleY = t.y;
this._scaleBone.invalidUpdate();
}
};
return t = __decorate([ c ], t);
}(cc.ActionInterval));
o.default = i;
var a = function(e) {
__extends(t, e);
function t(t, o, n) {
var c = e.call(this, t, o, n) || this;
c.initWithDurations(t, o, n);
return c;
}
t.prototype.initWithDurations = function(t, o, n) {
if (e.prototype.initWithDuration.call(this, t, o, n)) {
this._endScale = cc.v2(o, n);
return !0;
}
};
t.prototype.startWithTarget = function(t) {
e.prototype.startWithTarget.call(this, t);
this._scaleBone && (this._scaleDelta = this._endScale.sub(cc.v2(this._scaleBone.offset.scaleX, this._scaleBone.offset.scaleY)));
};
return t;
}(i);
o.DragonBoneScaleTo = a;
o.dragonBoneScaleBy = function(e, t, o) {
return new i(e, t, o);
};
o.dragonBoneScaleTo = function(e, t, o) {
return new a(e, t, o);
};
cc._RF.pop();
}, {} ],
DragonCompoentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "40797BW9IFHOYSu8+YyrUYJ", "DragonCompoentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./DragonBoneActionsMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveNodes = [];
t.Pulling = "Pulling";
t.PullEnd = "PullEnd";
t.PullStand = "PullStand";
t._startPos = cc.v2(0, 0);
t._endPos = cc.v2(0, 0);
t._moveBone = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.initListner();
};
t.prototype.distanceSquared = function(e, t) {
var o = t.x - e.x, n = t.y - e.y;
return o * o + n * n;
};
t.prototype.initListner = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
cc.find("Canvas").emit("PullTouch");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var t = this.node.getPosition(), o = e.getDelta();
this._isTouchMove = Math.sqrt(o.x * o.x + o.y * o.y) > 4;
this._isTouchMove;
o.y = 0;
var n = this.node.getPosition().add(o);
if (this.distanceSquared(n, this._endPos) <= this.distanceSquared(this._startPos, this._endPos)) {
var c = this.distanceSquared(n, this._startPos) >= this.distanceSquared(this._endPos, this._startPos);
if (c) {
n = this._endPos;
o = this._endPos.sub(t);
}
this.node.setPosition(n);
if (this._moveBone) {
this._moveBone.offset.x = this._moveBone.offset.x + o.x;
this._moveBone.invalidUpdate();
}
for (var i = 0, a = this.moveNodes; i < a.length; i++) {
var s = a[i];
s.setPosition(s.getPosition().add(o));
}
c ? cc.find("Canvas").emit(this.PullEnd) : cc.find("Canvas").emit(this.Pulling);
}
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
this.scaleAction();
cc.find("Canvas").emit(this.PullEnd);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
this.scaleAction();
cc.find("Canvas").emit(this.PullEnd);
}, this);
};
t.prototype.checkTouchMove = function(e) {
this._isTouchMove;
};
t.prototype.scaleAction = function() {
if (this._moveBone) {
this.node.stopActionByTag(101014);
var e = n.dragonBoneScaleTo(0, 1, 1), t = n.dragonBoneScaleTo(.13, 1, .8), o = n.dragonBoneScaleTo(.11, .8, 1), c = n.dragonBoneScaleTo(.1, 1, .86), i = n.dragonBoneScaleTo(.09, .88, 1), a = n.dragonBoneScaleTo(.08, 1, .89), s = n.dragonBoneScaleTo(.07, 1, 1);
e.setScaleBone(this._moveBone);
t.setScaleBone(this._moveBone);
o.setScaleBone(this._moveBone);
c.setScaleBone(this._moveBone);
i.setScaleBone(this._moveBone);
a.setScaleBone(this._moveBone);
s.setScaleBone(this._moveBone);
var r = cc.sequence(e, t, o, c, i, a, s);
r.setTag(101014);
this.node.runAction(r);
}
};
t.prototype.setMoveBone = function(e) {
this._moveBone = e;
};
t.prototype.getMoveBone = function() {
return this._moveBone;
};
t.prototype.setStartPos = function(e) {
this._startPos = e;
};
t.prototype.setEndPos = function(e) {
this._endPos = e;
};
t.prototype.addMoveNodes = function(e) {
e && this.moveNodes.push(e);
};
t.prototype.getStartPos = function() {
return this._startPos;
};
t.prototype.getEndPos = function() {
return this._endPos;
};
t.prototype.getMoveNodes = function() {
return this.moveNodes;
};
__decorate([ a({
type: cc.Node
}) ], t.prototype, "moveNodes", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./DragonBoneActionsMS": "DragonBoneActionsMS"
} ],
DragonCompoent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "490ac+UEmFO1LhUXX12MUKe", "DragonCompoent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./DragonBoneActions"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveNodes = [];
t.Pulling = "Pulling";
t.PullEnd = "PullEnd";
t.PullStand = "PullStand";
t._startPos = cc.v2(0, 0);
t._endPos = cc.v2(0, 0);
t._moveBone = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.initListner();
};
t.prototype.distanceSquared = function(e, t) {
var o = t.x - e.x, n = t.y - e.y;
return o * o + n * n;
};
t.prototype.initListner = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
cc.find("Canvas").emit("PullTouch");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var t = this.node.getPosition(), o = e.getDelta();
this._isTouchMove = Math.sqrt(o.x * o.x + o.y * o.y) > 4;
this._isTouchMove;
o.y = 0;
var n = this.node.getPosition().add(o);
if (this.distanceSquared(n, this._endPos) <= this.distanceSquared(this._startPos, this._endPos)) {
var c = this.distanceSquared(n, this._startPos) >= this.distanceSquared(this._endPos, this._startPos);
if (c) {
n = this._endPos;
o = this._endPos.sub(t);
}
this.node.setPosition(n);
if (this._moveBone) {
this._moveBone.offset.x = this._moveBone.offset.x + o.x;
this._moveBone.offset;
this._moveBone.invalidUpdate();
}
for (var i = 0, a = this.moveNodes; i < a.length; i++) {
var s = a[i];
s.setPosition(s.getPosition().add(o));
}
c ? cc.find("Canvas").emit(this.PullEnd) : cc.find("Canvas").emit(this.Pulling);
}
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
this.scaleAction();
cc.find("Canvas").emit(this.PullEnd);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
this.scaleAction();
cc.find("Canvas").emit(this.PullEnd);
}, this);
};
t.prototype.checkTouchMove = function(e) {
this._isTouchMove;
};
t.prototype.scaleAction = function() {
if (this._moveBone) {
this.node.stopActionByTag(101014);
var e = n.dragonBoneScaleTo(0, 1, 1), t = n.dragonBoneScaleTo(.13, 1, .8), o = n.dragonBoneScaleTo(.11, .8, 1), c = n.dragonBoneScaleTo(.1, 1, .86), i = n.dragonBoneScaleTo(.09, .88, 1), a = n.dragonBoneScaleTo(.08, 1, .89), s = n.dragonBoneScaleTo(.07, 1, 1);
e.setScaleBone(this._moveBone);
t.setScaleBone(this._moveBone);
o.setScaleBone(this._moveBone);
c.setScaleBone(this._moveBone);
i.setScaleBone(this._moveBone);
a.setScaleBone(this._moveBone);
s.setScaleBone(this._moveBone);
var r = cc.sequence(e, t, o, c, i, a, s);
r.setTag(101014);
this.node.runAction(r);
}
};
t.prototype.destroyTouchEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
};
t.prototype.setMoveBone = function(e) {
this._moveBone = e;
};
t.prototype.getMoveBone = function() {
return this._moveBone;
};
t.prototype.setStartPos = function(e) {
this._startPos = e;
};
t.prototype.setEndPos = function(e) {
this._endPos = e;
};
t.prototype.addMoveNodes = function(e) {
e && this.moveNodes.push(e);
};
t.prototype.getStartPos = function() {
return this._startPos;
};
t.prototype.getEndPos = function() {
return this._endPos;
};
t.prototype.getMoveNodes = function() {
return this.moveNodes;
};
__decorate([ a({
type: cc.Node
}) ], t.prototype, "moveNodes", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./DragonBoneActions": "DragonBoneActions"
} ],
EatMaskMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a91f82yli9GFLPxWawfaGcS", "EatMaskMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMaskMS"), c = e("./MaskDrawMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.backdraw = new c.default();
return t;
}
t.prototype.start = function() {};
t.prototype.touchBegin = function(e) {};
t.prototype.touchMove = function(e) {};
t.prototype.touchEnd = function(e) {
if (this.enabledInHierarchy) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
this.backdraw.addCircle(t);
var o = this.getComponent(cc.AudioSource);
o && o.play();
if (this.particleNode) {
this.particleNode.setPosition(this.node.convertToNodeSpaceAR(t));
this.particleNode.getComponent(cc.ParticleSystem).resetSystem();
}
}
};
t.prototype.empty = function() {
this.draw.empty();
};
__decorate([ s(c.default) ], t.prototype, "backdraw", void 0);
return t = __decorate([ a ], t);
}(n.default);
o.default = r;
cc._RF.pop();
}, {
"./CustomMaskMS": "CustomMaskMS",
"./MaskDrawMS": "MaskDrawMS"
} ],
EatMask: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1e815rRtiJIHZHo6DTL9BrL", "EatMask");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMask"), c = e("./MaskDraw"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.backdraw = new c.default();
return t;
}
t.prototype.start = function() {};
t.prototype.touchBegin = function(e) {};
t.prototype.touchMove = function(e) {};
t.prototype.touchEnd = function(e) {
if (this.enabledInHierarchy) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
this.backdraw.addCircle(t);
var o = this.getComponent(cc.AudioSource);
o && o.play();
if (this.particleNode) {
this.particleNode.setPosition(this.node.convertToNodeSpaceAR(t));
this.particleNode.getComponent(cc.ParticleSystem).resetSystem();
}
}
};
t.prototype.empty = function() {
this.draw.empty();
};
__decorate([ s(c.default) ], t.prototype, "backdraw", void 0);
return t = __decorate([ a ], t);
}(n.default);
o.default = r;
cc._RF.pop();
}, {
"./CustomMask": "CustomMask",
"./MaskDraw": "MaskDraw"
} ],
EnterGame: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "03586tkjahIq4ccxFcmBMyO", "EnterGame");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/CocosHelper_my"), c = e("../common/uitls/TransitionScene_my"), i = e("./GameData"), a = e("./HttpUtils"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.canEnter = !1;
t.numberGet = 0;
t.successAddWeb = !1;
t.playMusicAudio = null;
return t;
}
t.prototype._hideNativeSplash = function() {
if (cc.sys.os == cc.sys.OS_ANDROID) {
cc.log("=====static hide ");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideSplash", "()V");
}
};
t.prototype.start = function() {
var e = this, t = this;
if (cc.sys.platform == cc.sys.ANDROID) {
(c = n.CocosHelper.findNode(cc.Canvas.instance.node, "android")).active = !0;
if (s = c.getChildByName("logo")) {
var o = s.getComponent("MoveIn_my");
cc.audioEngine.playMusic(this.playMusicAudio, !0);
o && (o.actionCallBack = function() {
setTimeout(function() {
t.checkEnter();
}, 2e3);
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "loading");
e.active = !0;
var o = 0;
e.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
o += 1;
for (var t = 1; t < 5; t++) {
var n = e.getChildByName("dian" + t);
n.active = t <= o % 4 + 1;
}
}))));
});
}
} else {
var c;
(c = n.CocosHelper.findNode(cc.Canvas.instance.node, "ios")).active = !0;
var s = c.getChildByName("logo"), r = c.getChildByName("kids0"), l = c.getChildByName("kids1"), d = c.getChildByName("kids2");
if (s) {
o = s.getComponent("MoveIn_my");
cc.audioEngine.playMusic(this.playMusicAudio, !0);
setTimeout(function() {
d.active = !1;
l.active = !0;
r.active = !1;
}, 1e3);
setTimeout(function() {
d.active = !0;
l.active = !1;
r.active = !1;
}, 2e3);
o && (o.actionCallBack = function() {
setTimeout(function() {
t.checkEnter();
}, 2e3);
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "loading");
e.active = !0;
var o = 0;
e.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
o += 1;
for (var t = 1; t < 5; t++) {
var n = e.getChildByName("dian" + t);
n.active = t <= o % 4 + 1;
}
}))));
});
}
}
cc.audioEngine.stopAllEffects();
var p = "fromHall";
if (10 == cc.sys.localStorage.getItem(p)) {
console.log("大厅 显示全屏");
console.log(cc.sys.localStorage.getItem(p));
cc.sys.localStorage.setItem(p, 11);
jsToCPP.getInstance().showInterstitial();
}
this.scheduleOnce(function() {
console.log("_hideNativeSplash");
e._hideNativeSplash();
}, 1);
console.log("Loading onLoad");
cc.audioEngine.stopMusic();
cc.audioEngine.playMusic(this.playMusicAudio, !0);
cc.loader.loadRes("bg", cc.AudioClip, function(e, t) {
cc.audioEngine.playMusic(t, !0);
cc.loader.setAutoReleaseRecursively(t, !1);
});
jsToCPP.getInstance().setEmailContentAndTitle("DIY Slime", "It’s the time to DIY your own crazy slime with so many rainbow colors and toppings.");
var u = a.default.getInstance().getJsonData();
cc.audioEngine.stopAllEffects();
this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
t.successAddWeb || t.loadJsonFormNative();
})));
a.default.getInstance().httpGet(u, function(e) {
if (e) {
t.successAddWeb = !0;
t.node.stopAllActions;
console.log("网络json");
JSON.parse(e);
try {
for (var o = JSON.parse(e), n = 0; n < o.length; n++) i.default.getInstance().initData(o[n]);
t.canEnter = !0;
} catch (e) {
console.log("网络json错误 加载本地json");
t.loadJsonFormNative();
}
} else ;
});
};
t.prototype.onLoad = function() {};
t.prototype.checkEnter = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), t = this;
e.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
console.log("checkEnter()" + t.canEnter);
if (t.canEnter) {
e.stopAllActions();
t.canEnter = !1;
t.enterNextScene();
}
}))));
};
t.prototype.enterNextScene = function() {
if (cc.sys.platform == cc.sys.ANDROID) {
if (t = cc.sys.localStorage.getItem("isFirstHome")) c.default.changeScene("hall", "temp"); else {
t = 1;
cc.sys.localStorage.setItem("isFirstHome", t);
c.default.changeScene("home", "temp");
}
} else {
var e = cc.sys.localStorage.getItem("isFirst");
if (e) {
var t;
if (t = cc.sys.localStorage.getItem("isFirstHome")) c.default.changeScene("hall", "temp"); else {
t = 1;
cc.sys.localStorage.setItem("isFirstHome", t);
c.default.changeScene("home", "temp");
}
} else {
e = 1;
cc.sys.localStorage.setItem("isFirst", e);
c.default.changeScene("iosShow", "temp");
}
}
};
t.prototype.loadJsonFormNative = function() {
var e = this;
console.log("loadJsonFormNative");
cc.loader.loadRes("gamedata.json", function(t, o) {
if (t) cc.log("解析json文件失败" + t); else {
o.json.forEach(function(e) {
i.default.getInstance().initData(e);
});
e.canEnter = !0;
}
});
};
t.isFirst = !1;
__decorate([ l(cc.AudioClip) ], t.prototype, "playMusicAudio", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./GameData": "GameData",
"./HttpUtils": "HttpUtils"
} ],
EventListenerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a205KRl2xN7puSFrFnCtS7", "EventListenerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function() {
function e(e, t, o) {
void 0 === e && (e = null);
void 0 === t && (t = null);
void 0 === o && (o = null);
this.eventName = "";
this.eventHander = new cc.Component.EventHandler();
this.isEnable = !0;
this.isSwallow = !1;
if (null != e && null != t) {
this.eventHander.target = e.node;
var n = cc.js.getClassName(e), c = n.lastIndexOf(".");
c >= 0 && (n = n.slice(c + 1));
this.eventHander.component = n;
this.eventHander.handler = t;
}
null != o && (this.eventName = o);
}
e.emitEvents = function(e, t) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
for (var c = 0, i = t; c < i.length; c++) {
var a = i[c];
if (a.emit.apply(a, [ e ].concat(o))) break;
}
};
e.prototype.emit = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
if ("" != e) {
if (e != this.eventName) return !1;
if (!this.isEnable) return !1;
if (null == this.eventHander) return !1;
var n = t.slice();
n.push(this);
this.eventHander.emit(n);
return this.isSwallow;
}
};
__decorate([ i({
override: !0,
tooltip: "事件名称"
}) ], e.prototype, "eventName", void 0);
__decorate([ i(cc.Component.EventHandler) ], e.prototype, "eventHander", void 0);
__decorate([ i() ], e.prototype, "isEnable", void 0);
__decorate([ i({
tooltip: "是否中断其它监听"
}) ], e.prototype, "isSwallow", void 0);
return e = __decorate([ c("EventListener") ], e);
}();
o.default = a;
cc._RF.pop();
}, {} ],
EventListener: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4720eBcM4BLZ5uUULN2wJ2d", "EventListener");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function() {
function e(e, t, o) {
void 0 === e && (e = null);
void 0 === t && (t = null);
void 0 === o && (o = null);
this.eventName = "";
this.eventHander = new cc.Component.EventHandler();
this.isEnable = !0;
this.isSwallow = !1;
if (null != e && null != t) {
this.eventHander.target = e.node;
var n = cc.js.getClassName(e), c = n.lastIndexOf(".");
c >= 0 && (n = n.slice(c + 1));
this.eventHander.component = n;
this.eventHander.handler = t;
}
null != o && (this.eventName = o);
}
e.emitEvents = function(e, t) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
for (var c = 0, i = t; c < i.length; c++) {
var a = i[c];
if (a.emit.apply(a, [ e ].concat(o))) break;
}
};
e.prototype.emit = function(e) {
for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
if ("" != e) {
if (e != this.eventName) return !1;
if (!this.isEnable) return !1;
if (null == this.eventHander) return !1;
var n = t.slice();
n.push(this);
this.eventHander.emit(n);
return this.isSwallow;
}
};
__decorate([ i({
override: !0,
tooltip: "事件名称"
}) ], e.prototype, "eventName", void 0);
__decorate([ i(cc.Component.EventHandler) ], e.prototype, "eventHander", void 0);
__decorate([ i() ], e.prototype, "isEnable", void 0);
__decorate([ i({
tooltip: "是否中断其它监听"
}) ], e.prototype, "isSwallow", void 0);
return e = __decorate([ c("EventListener") ], e);
}();
o.default = a;
cc._RF.pop();
}, {} ],
GameData: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bdb6c4xXc1OqK2XqBXvIgPY", "GameData");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, e("./SubgameManager")), a = function() {
function e() {
this.mapGameDataItems = new Map();
this.selectGameName = "";
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.initData = function(e) {
var t = e.GameName, o = "new" == e.isNew, n = Number(e.Index), c = e.UpdateDate, i = "yes" == e.isUpStore, a = new s(t, o, n, c, i);
console.log(t + "--" + o + "--" + n + "---" + c + i);
this.mapGameDataItems.set(t, a);
};
e.prototype.clearData = function() {
this.mapGameDataItems.clear();
};
e.prototype.getIndexFromName = function(e) {
var t = this.mapGameDataItems.get(e), o = 0;
t && (o = t.Index);
return o;
};
e.prototype.getIsUpStoreByName = function(e) {
var t = this.mapGameDataItems.get(e), o = !1;
t && (o = t.isUpStore);
return o;
};
e.prototype.getIsNewFromName = function(e) {
console.log("getIsNewFromName" + e);
var t = this.mapGameDataItems.get(e);
console.log("getIsNewFromName" + t);
var o = !1;
t && (o = t.isNew);
console.log("getIsNewFromName" + o);
i.isSubgameDownLoad(e) && (o = !1);
return o;
};
e.prototype.getDateFromName = function(e) {
var t = this.mapGameDataItems.get(e), o = "";
t && (o = t.UpdateDate);
return o;
};
e.prototype.getGameNameFormIndex = function(e) {
var t = this, o = "";
this.mapGameDataItems.forEach(function(n) {
console.log(n.Index + "---" + e);
if (n.Index == e) {
o = n.GameName;
console.log(o + "element.Index--\x3e" + e);
console.log(t.mapGameDataItems.get(o));
}
});
return o;
};
e.prototype.checkIsUpTo = function(e) {
return 0;
};
e.prototype.showPop = function(e) {
cc.loader.loadRes("pop_bg", cc.Prefab, function(t, o) {
if (t) console.log(t + ""); else {
var n = cc.instantiate(o);
n.parent = cc.Canvas.instance.node;
n.position = cc.v2(0, 0);
n.getChildByName("label").getComponent(cc.Label).string = e;
}
});
};
e.prototype.setSelectGameName = function(e) {
this.selectGameName = e;
};
e.prototype.getSelectGameName = function() {
return this.selectGameName;
};
var t;
return e = t = __decorate([ c ], e);
}();
o.default = a;
var s = function() {
return function(e, t, o, n, c) {
this.GameName = e;
this.isNew = t;
this.UpdateDate = n;
this.Index = o;
this.isUpStore = c;
};
}();
cc._RF.pop();
}, {
"./SubgameManager": "SubgameManager"
} ],
HallController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "eb570CsVZVCwIuwdnaH5Skq", "HallController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/CocosHelper_my"), c = e("./HttpUtils"), i = e("./VersionMG"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.touchA = null;
t.nodeNameIndex = -1;
t.nodeName = [ "chocolate_slime", "glitter_slime", "batter_slime", "rainbow_slime", "dark_slime", "makeup_slime", "flower_slime", "crazy_slime", "rainbowpoop_slime", "galaxy_slime", "newVersion", "mermaid_slime", "succlunt_slime", "craxy_emoji_slime", "unicorn_slime", "floam_slime", "colar_glow_slime" ];
t.stPos = cc.v2();
t.order = 1e3;
t.touchArrowBool = !1;
t._pageIndex = 0;
return t;
}
t.prototype.start = function() {
i.default.getInstance().calIsToPopVerDialog();
c.default.getInstance().getJsonData();
console.log("Loading onLoad");
cc.audioEngine.stopMusic();
cc.loader.loadRes("bg", cc.AudioClip, function(e, t) {
cc.audioEngine.playMusic(t, !0);
cc.loader.setAutoReleaseRecursively(t, !1);
});
n.CocosHelper.findNode(cc.Canvas.instance.node, "arrows1").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "arrows0").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, -10)), cc.moveBy(.5, cc.v2(0, 10)))));
jsToCPP.getInstance().showBanner();
var e = cc.sys.localStorage.getItem("pageViewLocal");
e || (e = 3);
console.log("pageViewLocal" + e);
};
t.prototype.touchUrl = function() {
cc.sys.platform == cc.sys.ANDROID ? jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/") : jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
cc.PageViewIndicator;
};
t.prototype.pageViewClick = function(e, t) {
var o = e.node;
this._pageIndex = o.getComponent(cc.PageView).getCurrentPageIndex();
cc.log("page index" + this._pageIndex);
this.touchA && cc.audioEngine.playEffect(this.touchA, !1);
};
t.prototype.touchArrow = function(e, t) {
console.log(t);
var o = "down" == t ? 1 : -1;
console.log(o);
console.log(this._pageIndex);
var c = this._pageIndex + o;
if (!(c < 0 || c > 16)) {
console.log(c);
n.CocosHelper.findNode(cc.Canvas.instance.node, "book_bg").getChildByName("pageview").getComponent(cc.PageView).scrollToPage(c, .3);
this.touchA && cc.audioEngine.playEffect(this.touchA, !1);
}
};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
__decorate([ r ], t.prototype, "text", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "touchA", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"./HttpUtils": "HttpUtils",
"./VersionMG": "VersionMG"
} ],
HandTouchEventMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0abcf+Gz+pIQZSZnWAZqogG", "HandTouchEventMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixtureNode = null;
t.nodePos = null;
return t;
}
t.prototype.registerTouchEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function() {
this.playAction();
};
t.prototype.onTouchMove = function(e) {
this.node.parent.getChildByName("finger").active = !1;
};
t.prototype.onTouchEnd = function() {
this._touchEnd();
};
t.prototype.onTouchCancle = function() {
this._touchEnd();
};
t.prototype._touchEnd = function() {
this.stopAction();
};
t.prototype.playAction = function() {
this.node.getComponent(cc.AudioSource).play();
this.node.getComponent(cc.Animation).getAnimationState("grab").isPaused ? this.node.getComponent(cc.Animation).resume() : this.node.getComponent(cc.Animation).play("grab");
var e = cc.scaleTo(1.4, 1.05, .95), t = cc.scaleTo(1.4, .95, 1.05);
this.mixtureNode.runAction(cc.repeatForever(cc.sequence(e, t)));
};
t.prototype.stopAction = function() {
this.node.getComponent(cc.AudioSource).stop();
this.mixtureNode.stopAllActions();
this.node.getComponent(cc.Animation).pause();
};
__decorate([ i(cc.Node) ], t.prototype, "mixtureNode", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
HandTouchEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "93c380e+5ZEEKTtfG57ebeh", "HandTouchEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/Script/CombinedComponent/MixComponent"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixtureNode = null;
t.nodePos = null;
return t;
}
t.prototype.init = function() {
this.nodePos = this.node.getPosition();
this.registerTouchEvent();
};
t.prototype.registerTouchEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function() {
this.playAction();
this.mixtureNode.getComponent(n.default).startMix();
};
t.prototype.onTouchMove = function(e) {
this.node.parent.getChildByName("finger").active = !1;
};
t.prototype.onTouchEnd = function() {
this._touchEnd();
};
t.prototype.onTouchCancle = function() {
this._touchEnd();
};
t.prototype._touchEnd = function() {
this.stopAction();
this.mixtureNode.getComponent(n.default).stopMix();
};
t.prototype.playAction = function() {
this.node.getComponent(cc.Animation).getAnimationState("rub").isPaused ? this.node.getComponent(cc.Animation).resume() : this.node.getComponent(cc.Animation).play("rub");
var e = cc.scaleTo(.5, 1.05, .95), t = cc.scaleTo(.5, .95, 1.05);
this.mixtureNode.runAction(cc.repeatForever(cc.sequence(e, t)));
};
t.prototype.stopAction = function() {
this.mixtureNode.stopAllActions();
this.node.getComponent(cc.Animation).pause();
};
__decorate([ a(cc.Node) ], t.prototype, "mixtureNode", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../../common/Script/CombinedComponent/MixComponent": "MixComponent"
} ],
HelloWorldMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorldMS");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {
this.label.string = this.text;
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
HomeButtonMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c8102LhamBM/IuVam+ytcuZ", "HomeButtonMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/ads/showLaodingMS"), c = e("../common/common/Script/codebase/TransitionSceneMS"), i = cc._decorator, a = i.ccclass, s = (i.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onClick = function() {
n.default.getInstance().loadingDoneCallback = function() {
n.default.getInstance().loadingDoneCallback = null;
c.default.changeScene("homeSceneMS", 7);
};
n.default.getInstance().showAds(!1);
};
return t = __decorate([ a ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS"
} ],
HomeButton: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "81536IgpLRLZbLqOKgUtaRg", "HomeButton");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onClick = function() {
cc.audioEngine.stopMusic();
this.node.getComponent(cc.AudioSource).play();
cc.game.restart();
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
HttpUtils: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d79e6k2UdNJCr8/jyu+bE0z", "HttpUtils");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./GameData"), c = cc._decorator, i = c.ccclass, a = (c.property, function() {
function e() {
this.jsonUrl = "http://youngcnfoodhall.top/SlimeMakeNew/game.json";
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.httpGet = function(e, t) {
var o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
console.log("xhrxhrxhrxhrxhr");
console.log(o.readyState);
console.log(o.status);
if (4 === o.readyState && o.status >= 200 && o.status < 300) {
var e = o.responseText;
t(e);
} else t(null);
};
o.open("GET", e, !0);
cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate");
o.timeout = 5e3;
o.send();
};
e.prototype.getJsonUrl = function() {
return this.jsonUrl;
};
e.prototype.getJsonData = function() {
var e = this.jsonUrl;
console.log("连接" + e);
t.getInstance().httpGet(e, function(e) {
if (e) {
console.log("网络json");
try {
n.default.getInstance().clearData();
for (var t = JSON.parse(e), o = 0; o < t.length; o++) n.default.getInstance().initData(t[o]);
console.log(JSON.stringify(t));
} catch (e) {}
} else ;
});
};
var t;
return e = t = __decorate([ i ], e);
}());
o.default = a;
cc._RF.pop();
}, {
"./GameData": "GameData"
} ],
IcingMaskMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "104791ULulMc5r3azmFhQY1", "IcingMaskMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMaskMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "enableTouch", {
get: function() {
return this._enableTouch;
},
set: function(e) {
this._enableTouch = e;
if (this._enableTouch) {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin.bind(this));
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
} else {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchBegin);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd);
}
},
enumerable: !0,
configurable: !0
});
t.prototype.touchBegin = function(e) {
cc.find("Canvas/cake/tipClick").active = !1;
cc.find("Canvas/cake/finger").active = !1;
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
}
};
__decorate([ a ], t.prototype, "enableTouch", null);
return t = __decorate([ i ], t);
}(n.default);
o.default = s;
cc._RF.pop();
}, {
"./CustomMaskMS": "CustomMaskMS"
} ],
IcingMask: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ecc1fvnFV1DW5Wm4zXdNOJ1", "IcingMask");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./CustomMask"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "enableTouch", {
get: function() {
return this._enableTouch;
},
set: function(e) {
this._enableTouch = e;
if (this._enableTouch) {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin.bind(this));
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this));
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this));
} else {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchBegin);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd);
}
},
enumerable: !0,
configurable: !0
});
t.prototype.touchBegin = function(e) {
cc.find("Canvas/cake/tipClick").active = !1;
cc.find("Canvas/cake/finger").active = !1;
if (this.enabledInHierarchy && this._enableTouch) {
var t = e.touch.getLocation();
this.draw.addCircle(t);
}
};
__decorate([ a ], t.prototype, "enableTouch", null);
return t = __decorate([ i ], t);
}(n.default);
o.default = s;
cc._RF.pop();
}, {
"./CustomMask": "CustomMask"
} ],
IconItemMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6b8d0E1UERN95naji5XH+qA", "IconItemMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./RewardManagerMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isRewardLock = !0;
t.index = 0;
t.key = "";
t.moduleName = "";
t.getFreeNode = null;
t.isOnEvent = !1;
t.itemKey = "";
return t;
}
t.prototype.start = function() {
"" == this.moduleName && (this.moduleName = this.key);
if (!this.isOnEvent) {
this.isOnEvent = !0;
var e = this.node;
e.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this, !0);
e.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, !0);
e.on(cc.Node.EventType.TOUCH_MOVE, this.touchStart, this, !0);
}
this.init();
};
t.prototype.initLisenter = function() {
var e = this;
n.default.getInstance().showRewardLoadingCall = function() {};
n.default.getInstance().showRewardFalseCall = function() {
e.unLisenter();
};
n.default.getInstance().removeRewardLoadingCall = function(t) {
var o = n.default.getInstance().isLocked(e.itemKey);
console.log("回调" + e.itemKey);
e.getFreeNode.active = o;
e.unLisenter();
};
};
t.prototype.unLisenter = function() {
n.default.getInstance().showRewardLoadingCall = null;
n.default.getInstance().showRewardFalseCall = null;
n.default.getInstance().removeRewardLoadingCall = null;
};
t.prototype.init = function() {
this.itemKey = n.default.getInstance().getItemKey(this.key, this.moduleName, this.index);
var e = n.default.getInstance().isLocked(this.itemKey);
this.getFreeNode.active = e;
};
t.prototype.touchEnd = function(e) {
console.log("IconItem touchEnd");
this.isStopEvent() && e.stopPropagationImmediate();
if (this.getFreeNode.active && cc.sys.isMobile) {
this.initLisenter();
console.log("aaaaaa" + this.itemKey);
n.default.getInstance().showRewardAds(this.itemKey);
}
};
t.prototype.touchStart = function(e) {
console.log("IconItem  touchStart");
};
t.prototype.isStopEvent = function() {
return !!cc.sys.isMobile && this.getFreeNode.activeInHierarchy;
};
__decorate([ a ], t.prototype, "isRewardLock", void 0);
__decorate([ a ], t.prototype, "index", void 0);
__decorate([ a ], t.prototype, "key", void 0);
__decorate([ a ], t.prototype, "moduleName", void 0);
__decorate([ a(cc.Node) ], t.prototype, "getFreeNode", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./RewardManagerMS": "RewardManagerMS"
} ],
IconItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fa5daX90vlMAbFE16wFkC7j", "IconItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./RewardManager"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isRewardLock = !0;
t.index = 0;
t.key = "";
t.moduleName = "";
t.getFreeNode = null;
t.isOnEvent = !1;
t.itemKey = "";
return t;
}
t.prototype.start = function() {
"" == this.moduleName && (this.moduleName = this.key);
if (!this.isOnEvent) {
this.isOnEvent = !0;
var e = this.node;
e.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this, !0);
e.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, !0);
e.on(cc.Node.EventType.TOUCH_MOVE, this.touchStart, this, !0);
}
this.init();
};
t.prototype.initLisenter = function() {
var e = this;
n.default.getInstance().showRewardLoadingCall = function() {};
n.default.getInstance().showRewardFalseCall = function() {
e.unLisenter();
};
n.default.getInstance().removeRewardLoadingCall = function(t) {
var o = n.default.getInstance().isLocked(e.itemKey);
console.log("回调" + e.itemKey);
e.getFreeNode.active = o;
e.unLisenter();
};
};
t.prototype.unLisenter = function() {
n.default.getInstance().showRewardLoadingCall = null;
n.default.getInstance().showRewardFalseCall = null;
n.default.getInstance().removeRewardLoadingCall = null;
};
t.prototype.init = function() {
this.itemKey = n.default.getInstance().getItemKey(this.key, this.moduleName, this.index);
var e = n.default.getInstance().isLocked(this.itemKey);
this.getFreeNode.active = e;
};
t.prototype.touchEnd = function(e) {
console.log("IconItem touchEnd");
this.isStopEvent() && e.stopPropagationImmediate();
if (this.getFreeNode.active && cc.sys.isMobile) {
this.initLisenter();
console.log("aaaaaa" + this.itemKey);
n.default.getInstance().showRewardAds(this.itemKey);
}
};
t.prototype.touchStart = function(e) {
console.log("IconItem  touchStart");
};
t.prototype.isStopEvent = function() {
return !!cc.sys.isMobile && this.getFreeNode.activeInHierarchy;
};
__decorate([ a ], t.prototype, "isRewardLock", void 0);
__decorate([ a ], t.prototype, "index", void 0);
__decorate([ a ], t.prototype, "key", void 0);
__decorate([ a ], t.prototype, "moduleName", void 0);
__decorate([ a(cc.Node) ], t.prototype, "getFreeNode", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./RewardManager": "RewardManager"
} ],
LoadSubGame: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0ff3aqtRnxD8qJsE8tiEJGP", "LoadSubGame");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./GameData"), c = e("./SubgameManager"), i = e("../common/uitls/CocosHelper_my"), a = e("../common/uitls/TransitionScene_my"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.iceMusicAudio = null;
t.cottonMusicAudio = null;
t.poppornMusicAudio = null;
t.cakeMusicAudio = null;
t.isCanEnter = !1;
t.indexDown = 0;
return t;
}
t.prototype.checkEnter = function() {
var e = this, t = i.CocosHelper.findNode(cc.Canvas.instance.node, "bg");
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
if (e.isCanEnter) {
t.stopAllActions();
e.node.stopAllActions();
e.enterSub();
}
}))));
};
t.prototype.start = function() {
var e = this, t = this, o = (i.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), 
i.CocosHelper.findNode(cc.Canvas.instance.node, "progressBar").getComponent(cc.ProgressBar), 
Math.random(), i.CocosHelper.findNode(cc.Canvas.instance.node, "dragon"));
o.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
o.getComponent(dragonBones.ArmatureDisplay) && o.getComponent(dragonBones.ArmatureDisplay).playAnimation("tiao", 1);
cc.audioEngine.play(t.iceMusicAudio, !1, 1);
}), cc.delayTime(3), cc.callFunc(function() {
o.getComponent(dragonBones.ArmatureDisplay) && o.getComponent(dragonBones.ArmatureDisplay).playAnimation("eat1", 0);
}), cc.delayTime(6))));
t.checkEnter();
var a = n.default.getInstance().getSelectGameName();
console.log(a + "------subName");
cc.sys.isMobile && (c.isSubgameDownLoad(a) ? c.needUpdateSubgame(a, function(o) {
if (o) t.startUpdate(); else {
var n = e, c = i.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), a = i.CocosHelper.findNode(cc.Canvas.instance.node, "progressBar").getComponent(cc.ProgressBar);
c.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
a.progress = a.progress + .01;
a.progress >= 1 && (n.isCanEnter = !0);
}))));
}
}, function() {
cc.log("出错了");
t.touchBack();
}) : t.startUpdate());
};
t.prototype.enterSub = function() {
var e = this, t = i.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), o = i.CocosHelper.findNode(cc.Canvas.instance.node, "progressBar").getComponent(cc.ProgressBar);
t.stopAllActions();
t.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.01), cc.callFunc(function() {
o.progress = o.progress + .01;
if (o.progress >= 1) {
t.stopAllActions();
e.enter();
}
}))));
};
t.prototype.startUpdate = function() {
var e = n.default.getInstance().getSelectGameName();
console.log(e);
var t = this, o = i.CocosHelper.findNode(cc.Canvas.instance.node, "progressBar"), s = i.CocosHelper.findNode(cc.Canvas.instance.node, "label"), r = o.getComponent(cc.ProgressBar);
c.downloadSubgame(e, function(e) {
isNaN(e) && (e = 0);
r.progress = .8 * e;
s.getComponent(cc.Label).string = "资源下载中   " + 100 * e + "%";
console.log("资源下载中   " + 100 * e + "%");
}, function(o) {
if (o) {
s.getComponent(cc.Label).string = "进入游戏" + e;
t.isCanEnter = !0;
} else {
cc.log("下载失败");
t.node.stopAllActions();
s.getComponent(cc.Label).string = "下载失败";
a.default.changeScene(e, "ttt");
}
});
};
t.prototype.enter = function() {
cc.audioEngine.stopMusic();
var e = i.CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
e.stopAllActions();
e.removeComponent(dragonBones.ArmatureDisplay);
var t = n.default.getInstance().getSelectGameName();
console.log("清除回调" + t);
jsToCPP.getInstance().initOnAdsLoaded(null);
jsToCPP.getInstance().initOnAdsClicked(null);
jsToCPP.getInstance().initOnAdsExpanded(null);
jsToCPP.getInstance().initOnAdsCollapsed(null);
jsToCPP.getInstance().initOnAdsLoadFailed(null);
jsToCPP.getInstance().initOnAdsRewarded(null);
cc.sys.restartVM();
console.log("进入子游戏" + t);
c.enterSubgame(t);
};
t.prototype.touchBack = function() {
var e = n.default.getInstance().getSelectGameName();
a.default.changeScene(e, "ttt");
};
__decorate([ l(cc.Label) ], t.prototype, "label", void 0);
__decorate([ l ], t.prototype, "text", void 0);
__decorate([ l(cc.AudioClip) ], t.prototype, "iceMusicAudio", void 0);
__decorate([ l(cc.AudioClip) ], t.prototype, "cottonMusicAudio", void 0);
__decorate([ l(cc.AudioClip) ], t.prototype, "poppornMusicAudio", void 0);
__decorate([ l(cc.AudioClip) ], t.prototype, "cakeMusicAudio", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./GameData": "GameData",
"./SubgameManager": "SubgameManager"
} ],
Loading: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6b59GHoLNNCIUEp4P4/8vB", "Loading");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/CocosHelper_my"), c = e("../common/uitls/TransitionScene_my"), i = e("./showLaodingHall"), a = e("./AdsManagerHall"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.playMusicAudio = null;
return t;
}
t.prototype.onLoad = function() {
console.log("Loading onLoad");
cc.audioEngine.stopMusic();
cc.audioEngine.playMusic(this.playMusicAudio, !0);
};
t.prototype.start = function() {
a.default.getInstance().onAdsLoaded = null;
a.default.getInstance().onAdsLoadFailed = null;
a.default.getInstance().onAdsClicked = null;
a.default.getInstance().onAdsExpanded = null;
a.default.getInstance().onAdsCollapsed = null;
a.default.getInstance().onAdsRewarded = null;
cc.audioEngine.stopAllEffects();
var e = "fromHall", t = cc.sys.localStorage.getItem(e);
if (10 == t) {
console.log("大厅 显示全屏");
console.log(cc.sys.localStorage.getItem(e));
cc.sys.localStorage.setItem(e, 11);
console.log(cc.sys.localStorage.getItem(e));
i.default.getInstance().showAds(!1);
}
cc.sys.localStorage.setItem(e, t);
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg");
n.CocosHelper.findNode(cc.Canvas.instance.node, "progressBar").active = !1;
o.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function() {
c.default.changeScene("ChooseScene", "temp");
})));
};
__decorate([ l(cc.AudioClip) ], t.prototype, "playMusicAudio", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./AdsManagerHall": "AdsManagerHall",
"./showLaodingHall": "showLaodingHall"
} ],
MainController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4b19f5ORyBFVrl7cmvxSc/I", "MainController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/Script/compoent/MoveIn"), c = e("../../common/Script/ads/AdsManager"), i = e("../../common/Script/codebase/TransitionScene"), a = cc._decorator, s = a.ccclass, r = (a.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
cc.sys.isMobile && c.default.getInstance().showBanner();
cc.audioEngine.stopMusic();
cc.loader.loadRes("sound/chrismasbg", cc.AudioClip, function(e, t) {
cc.audioEngine.playMusic(t, !0);
cc.loader.setAutoReleaseRecursively(t, !1);
}.bind(this));
this.node.getChildByName("girlhand").getComponent(n.default).actionCallBack = function() {
this.node.getChildByName("girlhand").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
}.bind(this);
this.node.getChildByName("boy").getComponent(n.default).actionCallBack = function() {
this.node.getChildByName("paillette").active = !0;
this.node.getChildByName("paillette").getComponent(cc.AudioSource).play();
}.bind(this);
this.node.getChildByName("logo").getComponent(n.default).actionCallBack = function() {
this.node.getChildByName("logo").runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
}.bind(this);
this.node.getChildByName("btn").getComponent(n.default).actionCallBack = function() {
this.node.getChildByName("btn_moregame").active = !0;
this.node.getChildByName("star_bg2").active = !0;
this.node.getChildByName("homeheartParticleleft").active = !0;
this.node.getChildByName("btn").getComponent(cc.Button).interactable = !0;
this.node.getChildByName("btn").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, .9), cc.scaleTo(1, 1))));
}.bind(this);
};
t.prototype.btnClick = function() {
this.node.getChildByName("btn").stopAllActions();
this.node.getChildByName("btn").setScale(1);
i.default.changeScene("addMaterialCS");
};
return t = __decorate([ s ], t);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {
"../../common/Script/ads/AdsManager": "AdsManager",
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/compoent/MoveIn": "MoveIn"
} ],
MaskDrawMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1d1f9GDTzdFCI6NitD7MvzR", "MaskDrawMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function() {
function e() {
this.mask = null;
this.r = 16;
}
e.prototype.addCircle = function(e) {
if (null != this.mask && this.mask.enabledInHierarchy) {
var t = this.mask.node.convertToNodeSpaceAR(e), o = this.mask._graphics;
o.circle(t.x, t.y, this.r);
o.fill();
}
};
e.prototype.addLine = function(e, t) {
for (var o = t.sub(e).mag(), n = 0; n < o; n += 3) {
var c = n / o, i = t.x - e.x, a = t.y - e.y;
this.addCircle(new cc.Vec2(e.x + i * c, e.y + a * c));
}
};
e.prototype.empty = function() {
this.mask._graphics.clear();
};
__decorate([ i(cc.Mask) ], e.prototype, "mask", void 0);
__decorate([ i() ], e.prototype, "r", void 0);
return e = __decorate([ c("MaskDraw") ], e);
}();
o.default = a;
cc._RF.pop();
}, {} ],
MaskDraw: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ccb61Bowt1KtLwRGKAEIJ/R", "MaskDraw");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function() {
function e() {
this.mask = null;
this.r = 16;
}
e.prototype.addCircle = function(e) {
if (null != this.mask && this.mask.enabledInHierarchy) {
var t = this.mask.node.convertToNodeSpaceAR(e), o = this.mask._graphics;
o.circle(t.x, t.y, this.r);
o.fill();
}
};
e.prototype.addLine = function(e, t) {
for (var o = t.sub(e).mag(), n = 0; n < o; n += 3) {
var c = n / o, i = t.x - e.x, a = t.y - e.y;
this.addCircle(new cc.Vec2(e.x + i * c, e.y + a * c));
}
};
e.prototype.empty = function() {
this.mask._graphics.clear();
};
__decorate([ i(cc.Mask) ], e.prototype, "mask", void 0);
__decorate([ i() ], e.prototype, "r", void 0);
return e = __decorate([ c("MaskDraw") ], e);
}();
o.default = a;
cc._RF.pop();
}, {} ],
MixComponentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30e3fNgS/5OeKER7V0o9aaz", "MixComponentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/EventListenerMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixPaths = [];
t.delayPerUnit = 2.3;
t.mixLis = [];
t.spoonAudio = null;
t._count = 0;
t.mixEnable = !1;
t.currntTime = 0;
t.changeNodes = [];
t.current = -1;
return t;
}
o = t;
t.prototype.setMixPahth = function(e) {
if (0 != this.changeNodes.length) for (var t = 0, o = this.changeNodes; t < o.length; t++) {
var n = o[t];
cc.isValid(n) && (n.name = n.name + "pre");
}
this.changeNodes = [];
this.mixPaths = e;
this._count = 0;
this.currntTime = 0;
};
t.prototype.startMix = function() {
this.spoonAudio && -1 == this.current && (this.current = cc.audioEngine.play(this.spoonAudio, !0, 1));
if (0 == this.changeNodes.length) for (var e = 0, t = this.mixPaths; e < t.length; e++) {
var o = t[e], n = new cc.Node();
n.zIndex = -1;
n.name = "changing";
n.addComponent(cc.Sprite).spriteFrame = o;
n.opacity = 0;
n.parent = this.node;
this.changeNodes.push(n);
}
this.mixEnable = !0;
};
t.prototype.stopMix = function() {
cc.audioEngine.stop(this.current);
this.current = -1;
this.mixEnable = !1;
n.default.emitEvents(o.MIXSTOP, this.mixLis, this);
};
t.prototype.update = function(e) {
this.updateMix(e);
};
t.prototype.updateMix = function(e) {
if (this.mixEnable && !(this._count >= this.changeNodes.length)) {
var t = null, c = null;
if (0 == this._count) for (var i = 0, a = this.node.children; i < a.length; i++) {
var s = a[i];
"changing" != s.name && s.active && (s.opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
} else this._count - 1 < this.changeNodes.length && ((t = this.changeNodes[this._count - 1]).opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
this._count < this.changeNodes.length && ((c = this.changeNodes[this._count]).opacity = this.currntTime / this.delayPerUnit * 255);
this.currntTime += e;
if (this.currntTime >= this.delayPerUnit) {
t && (t.opacity = 0);
c && (c.opacity = 255);
this.currntTime = 0;
this._count++;
}
n.default.emitEvents(o.MIXING, this.mixLis, this);
if (this._count >= this.changeNodes.length) {
cc.audioEngine.stop(this.current);
n.default.emitEvents(o.MIXEND, this.mixLis, this);
}
}
};
t.prototype.reset = function() {
this._count = 0;
this.changeNodes = [];
};
var o;
t.MIXING = "MIXING";
t.MIXSTOP = "MIXSTOP";
t.MIXEND = "MIXEND";
__decorate([ a({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixPaths", void 0);
__decorate([ a() ], t.prototype, "delayPerUnit", void 0);
__decorate([ a({
type: [ n.default ]
}) ], t.prototype, "mixLis", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "spoonAudio", void 0);
return t = o = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS"
} ],
MixComponent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9c5950si/dNB7dCxfmWAHPd", "MixComponent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/EventListener"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixPaths = [];
t.delayPerUnit = 2.3;
t.mixLis = [];
t.spoonAudio = null;
t._count = 0;
t.mixEnable = !1;
t.currntTime = 0;
t.changeNodes = [];
t.current = -1;
return t;
}
o = t;
t.prototype.setMixPahth = function(e) {
if (0 != this.changeNodes.length) for (var t = 0, o = this.changeNodes; t < o.length; t++) {
var n = o[t];
cc.isValid(n) && (n.name = n.name + "pre");
}
this.changeNodes = [];
this.mixPaths = e;
this._count = 0;
this.currntTime = 0;
};
t.prototype.startMix = function() {
this.spoonAudio && -1 == this.current && (this.current = cc.audioEngine.play(this.spoonAudio, !0, 1));
if (0 == this.changeNodes.length) for (var e = 0, t = this.mixPaths; e < t.length; e++) {
var o = t[e], n = new cc.Node();
n.zIndex = -1;
n.name = "changing";
n.addComponent(cc.Sprite).spriteFrame = o;
n.opacity = 0;
n.parent = this.node;
this.changeNodes.push(n);
}
this.mixEnable = !0;
};
t.prototype.stopMix = function() {
cc.audioEngine.stop(this.current);
this.current = -1;
this.mixEnable = !1;
n.default.emitEvents(o.MIXSTOP, this.mixLis, this);
};
t.prototype.update = function(e) {
this.updateMix(e);
};
t.prototype.updateMix = function(e) {
if (this.mixEnable && !(this._count >= this.changeNodes.length)) {
var t = null, c = null;
if (0 == this._count) for (var i = 0, a = this.node.children; i < a.length; i++) {
var s = a[i];
"changing" != s.name && s.active && (s.opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
} else this._count - 1 < this.changeNodes.length && ((t = this.changeNodes[this._count - 1]).opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
this._count < this.changeNodes.length && ((c = this.changeNodes[this._count]).opacity = this.currntTime / this.delayPerUnit * 255);
this.currntTime += e;
if (this.currntTime >= this.delayPerUnit) {
t && (t.opacity = 0);
c && (c.opacity = 255);
this.currntTime = 0;
this._count++;
}
n.default.emitEvents(o.MIXING, this.mixLis, this);
if (this._count >= this.changeNodes.length) {
cc.audioEngine.stop(this.current);
n.default.emitEvents(o.MIXEND, this.mixLis, this);
}
}
};
t.prototype.reset = function() {
this._count = 0;
this.changeNodes = [];
};
var o;
t.MIXING = "MIXING";
t.MIXSTOP = "MIXSTOP";
t.MIXEND = "MIXEND";
__decorate([ a({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixPaths", void 0);
__decorate([ a() ], t.prototype, "delayPerUnit", void 0);
__decorate([ a({
type: [ n.default ]
}) ], t.prototype, "mixLis", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "spoonAudio", void 0);
return t = o = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../codebase/EventListener": "EventListener"
} ],
MoreGameButton: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e6512FG8+VDjoen2NA061Px", "MoreGameButton");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.showMoreGame = function() {
this.node.getComponent(cc.AudioSource).play();
jsToCPP.getInstance().showMoreGame();
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
MoveComponentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b5ab5O9PTdDG7mM3ymkra26", "MoveComponentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/EventListenerMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixPaths = [];
t.delayPerUnit = 2.3;
t.mixLis = [];
t.spoonAudio = null;
t._count = 0;
t.mixEnable = !1;
t.currntTime = 0;
t.changeNodes = [];
t.current = -1;
return t;
}
o = t;
t.prototype.setMixPahth = function(e) {
if (0 != this.changeNodes.length) for (var t = 0, o = this.changeNodes; t < o.length; t++) {
var n = o[t];
cc.isValid(n) && (n.name = n.name + "pre");
}
this.changeNodes = [];
this.mixPaths = e;
this._count = 0;
this.currntTime = 0;
};
t.prototype.startMix = function() {
this.spoonAudio && -1 == this.current && (this.current = cc.audioEngine.play(this.spoonAudio, !0, 1));
console.log("startMix");
if (0 == this.changeNodes.length) for (var e = 0, t = this.mixPaths; e < t.length; e++) {
var o = t[e], n = new cc.Node();
n.zIndex = -1;
n.name = "changing";
n.addComponent(cc.Sprite).spriteFrame = o;
n.opacity = 0;
n.parent = this.node;
this.changeNodes.push(n);
}
this.mixEnable = !0;
};
t.prototype.stopMix = function() {
cc.audioEngine.stop(this.current);
this.current = -1;
this.mixEnable = !1;
n.default.emitEvents(o.MIXSTOP, this.mixLis, this);
};
t.prototype.update = function(e) {
this.updateMix(e);
};
t.prototype.updateMix = function(e) {
if (this.mixEnable && !(this._count >= this.changeNodes.length)) {
var t = null, c = null;
if (0 == this._count) for (var i = 0, a = this.node.children; i < a.length; i++) {
var s = a[i];
"changing" != s.name && s.active && (s.opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
} else this._count - 1 < this.changeNodes.length && ((t = this.changeNodes[this._count - 1]).opacity = 255 * (1 - this.currntTime / this.delayPerUnit));
this._count < this.changeNodes.length && ((c = this.changeNodes[this._count]).opacity = this.currntTime / this.delayPerUnit * 255);
this.currntTime += e;
if (this.currntTime >= this.delayPerUnit) {
t && (t.opacity = 0);
c && (c.opacity = 255);
this.currntTime = 0;
this._count++;
}
n.default.emitEvents(o.MIXING, this.mixLis, this);
if (this._count >= this.changeNodes.length) {
cc.audioEngine.stop(this.current);
n.default.emitEvents(o.MIXEND, this.mixLis, this);
}
}
};
t.prototype.reset = function() {
this._count = 0;
this.changeNodes = [];
};
var o;
t.MIXING = "MIXING";
t.MIXSTOP = "MIXSTOP";
t.MIXEND = "MIXEND";
__decorate([ a({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixPaths", void 0);
__decorate([ a() ], t.prototype, "delayPerUnit", void 0);
__decorate([ a({
type: [ n.default ]
}) ], t.prototype, "mixLis", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "spoonAudio", void 0);
return t = o = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS"
} ],
MoveInMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "779b3GnknFLIoDdKjsoqU66", "MoveInMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property;
o.ShowDirection = cc.Enum({
left: 1,
right: 2,
top: 3,
bottom: 4
});
o.ActionType = cc.Enum({
Bezier: 1,
JumpTo: 2,
EaseElastic: 3,
Rote: 4
});
var a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.delayTime = 0;
t.direction = o.ShowDirection.left;
t.action = o.ActionType.Bezier;
t.scoreAudio = null;
t.isLoad = !0;
t.isShow = !1;
return t;
}
t.prototype.getScreenPos = function(e, t) {
var n, c = cc.Camera.findCamera(e), i = cc.view.getDesignResolutionSize(), a = new cc.Vec2(0, i.height), s = new cc.Vec2(i.width, 0), r = e.position;
e.position;
null != e.parent && (r = e.parent.convertToWorldSpaceAR(r));
if (null != c) {
var l = c.getScreenToWorldPoint(a, new cc.Vec2());
a = cc.v2(l.x, l.y);
var d = c.getScreenToWorldPoint(s, new cc.Vec2());
s = cc.v2(d.x, d.y);
}
switch (t) {
case o.ShowDirection.bottom:
n = new cc.Vec2(r.x, s.y - e.getContentSize().height * (1 - e.getAnchorPoint().y) - 500);
break;

case o.ShowDirection.left:
n = new cc.Vec2(a.x - 1.5 * e.getContentSize().width * (1 - e.getAnchorPoint().x), r.y);
break;

case o.ShowDirection.right:
n = new cc.Vec2(1.5 * s.x + e.getContentSize().width * e.getAnchorPoint().x, r.y);
break;

case o.ShowDirection.top:
n = new cc.Vec2(r.x, a.y + e.getContentSize().width * e.getAnchorPoint().y + 500);
}
null != e.parent && (n = e.parent.convertToNodeSpaceAR(n));
return n;
};
t.prototype.onLoad = function() {
this.isShow || this.isLoad || this.doShowAction();
};
t.prototype.doShowAction = function() {
var e = this.node.position, t = this.getScreenPos(this.node, this.direction);
this.node.setPosition(t);
this.node.opacity = 255;
var n;
switch (this.action) {
case o.ActionType.Bezier:
n = cc.bezierTo(1, [ cc.v2(.5 * e.x, e.y + 150), cc.v2(.5 * e.x, e.y + 150), cc.v2(e.x, e.y) ]);
break;

case o.ActionType.EaseElastic:
n = cc.moveTo(1, e).easing(cc.easeElasticOut(2));
break;

case o.ActionType.JumpTo:
n = cc.jumpTo(1, e, 200, 1);
break;

case o.ActionType.Rote:
var c = -10;
this.direction == o.ShowDirection.left && (c = 10);
n = cc.spawn(cc.moveTo(1, e).easing(cc.easeBackOut()), cc.rotateBy(.58, c), cc.rotateBy(.58, -c).easing(cc.easeBackInOut()));
break;

default:
n = cc.moveTo(1, e).easing(cc.easeElasticOut(2));
}
var i, a = this;
i = cc.callFunc(function() {
a.actionCallBack && a.actionCallBack();
}, this);
var s = cc.delayTime(this.delayTime), r = cc.sequence(s, cc.callFunc(function() {
a.scoreAudio && cc.audioEngine.play(a.scoreAudio, !1, 1);
}), n, i);
this.node.runAction(r);
};
t.prototype.start = function() {
this.isLoad && this.doShowAction();
console.log("movein start");
};
__decorate([ i ], t.prototype, "delayTime", void 0);
__decorate([ i({
type: o.ShowDirection
}) ], t.prototype, "direction", void 0);
__decorate([ i({
type: o.ActionType
}) ], t.prototype, "action", void 0);
__decorate([ i(cc.AudioClip) ], t.prototype, "scoreAudio", void 0);
__decorate([ i() ], t.prototype, "isLoad", void 0);
__decorate([ i() ], t.prototype, "isShow", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
MoveIn_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6c7bbVKjaBBrJLf8DrBqUta", "MoveIn_my");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = cc.Enum({
left: 1,
right: 2,
top: 3,
bottom: 4
}), s = cc.Enum({
Bezier: 1,
JumpTo: 2,
EaseElastic: 3,
Rote: 4
}), r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.delayTime = 0;
t.direction = a.left;
t.action = s.Bezier;
t.scoreAudio = null;
t.isLoad = !0;
return t;
}
t.prototype.getScreenPos = function(e, t) {
var o, n = cc.Camera.findCamera(e), c = cc.view.getDesignResolutionSize(), i = new cc.Vec2(0, c.height), s = new cc.Vec2(c.width, 0), r = e.position;
e.position;
null != e.parent && (r = e.parent.convertToWorldSpaceAR(r));
if (null != n) {
i = n.getCameraToWorldPoint(i, new cc.Vec2());
s = n.getCameraToWorldPoint(s, new cc.Vec2());
}
switch (t) {
case a.bottom:
o = new cc.Vec2(r.x, s.y - e.getContentSize().height * (1 - e.getAnchorPoint().y));
break;

case a.left:
o = new cc.Vec2(i.x - e.getContentSize().width * (1 - e.getAnchorPoint().x), r.y);
break;

case a.right:
o = new cc.Vec2(s.x + e.getContentSize().width * e.getAnchorPoint().x, r.y);
break;

case a.top:
o = new cc.Vec2(r.x, i.y + e.getContentSize().width * e.getAnchorPoint().y);
}
null != e.parent && (o = e.parent.convertToNodeSpaceAR(o));
return o;
};
t.prototype.onLoad = function() {
this.isLoad || this.doShowAction();
};
t.prototype.doShowAction = function() {
var e = this.node.position, t = this.getScreenPos(this.node, this.direction);
this.node.setPosition(t);
this.node.opacity = 255;
var o;
switch (this.action) {
case s.Bezier:
o = cc.bezierTo(1, [ cc.v2(.5 * e.x, e.y + 150), cc.v2(.5 * e.x, e.y + 150), cc.v2(e.x, e.y) ]);
break;

case s.EaseElastic:
o = cc.moveTo(1, e).easing(cc.easeElasticOut(2));
break;

case s.JumpTo:
o = cc.jumpTo(1, e, 200, 1);
break;

case s.Rote:
var n = -10;
this.direction == a.left && (n = 10);
o = cc.spawn(cc.moveTo(1, e).easing(cc.easeBackOut()), cc.rotateBy(.58, n), cc.rotateBy(.58, -n).easing(cc.easeBackInOut()));
break;

default:
o = cc.moveTo(1, e).easing(cc.easeElasticOut(2));
}
var c, i = this;
c = cc.callFunc(function() {
i.actionCallBack && i.actionCallBack();
}, this);
var r = cc.delayTime(this.delayTime), l = cc.sequence(r, cc.callFunc(function() {
i.scoreAudio && cc.audioEngine.play(i.scoreAudio, !1, 1);
}), o, c);
this.node.runAction(l);
};
t.prototype.start = function() {
this.isLoad && this.doShowAction();
console.log("movein start");
};
__decorate([ i ], t.prototype, "delayTime", void 0);
__decorate([ i({
type: a
}) ], t.prototype, "direction", void 0);
__decorate([ i({
type: s
}) ], t.prototype, "action", void 0);
__decorate([ i(cc.AudioClip) ], t.prototype, "scoreAudio", void 0);
__decorate([ i() ], t.prototype, "isLoad", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {} ],
MoveIn: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d3dcbn/GB9HJpaFlxASkauB", "MoveIn");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = cc.Enum({
left: 1,
right: 2,
top: 3,
bottom: 4
}), s = cc.Enum({
Bezier: 1,
JumpTo: 2,
EaseElastic: 3,
Rote: 4,
EaseBackOut: 5
}), r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.delayTime = 0;
t.direction = a.left;
t.action = s.Bezier;
t.scoreAudio = null;
t.isLoad = !0;
t.iscanLoad = !0;
return t;
}
t.prototype.getScreenPos = function(e, t) {
var o, n = cc.Camera.findCamera(e), c = cc.view.getDesignResolutionSize(), i = new cc.Vec2(0, c.height), s = new cc.Vec2(c.width, 0), r = e.position;
e.position;
null != e.parent && (r = e.parent.convertToWorldSpaceAR(r));
if (null != n) {
var l = n.getScreenToWorldPoint(i, new cc.Vec2());
i = cc.v2(l.x, l.y);
var d = n.getScreenToWorldPoint(s, new cc.Vec2());
s = cc.v2(d.x, d.y);
}
switch (t) {
case a.bottom:
o = new cc.Vec2(r.x, s.y - e.getContentSize().height * (1 - e.getAnchorPoint().y));
break;

case a.left:
o = new cc.Vec2(i.x - e.getContentSize().width * (1 - e.getAnchorPoint().x) - 300, r.y);
break;

case a.right:
o = new cc.Vec2(1.5 * s.x + e.getContentSize().width * e.getAnchorPoint().x, r.y);
break;

case a.top:
o = new cc.Vec2(r.x, i.y + e.getContentSize().width * (e.getAnchorPoint().y + 150));
}
null != e.parent && (o = e.parent.convertToNodeSpaceAR(o));
return o;
};
t.prototype.onLoad = function() {
if (this.iscanLoad) {
cc.log(this.isLoad);
this.isLoad || this.doShowAction();
}
};
t.prototype.doShowAction = function() {
var e = this;
console.log("doShowAction" + this.node.position);
var t = this.node.position, o = this.getScreenPos(this.node, this.direction);
this.node.setPosition(o);
this.node.opacity = 255;
var n;
switch (this.action) {
case s.Bezier:
n = cc.bezierTo(1, [ cc.v2(.5 * t.x, t.y + 150), cc.v2(.5 * t.x, t.y + 150), cc.v2(t.x, t.y) ]);
break;

case s.EaseElastic:
n = cc.moveTo(1, t).easing(cc.easeElasticOut(2));
break;

case s.EaseBackOut:
n = cc.moveTo(1, t).easing(cc.easeBackOut());
break;

case s.JumpTo:
n = cc.jumpTo(1, t, 200, 1);
break;

case s.Rote:
var c = -10;
this.direction == a.left && (c = 10);
n = cc.spawn(cc.moveTo(1, t).easing(cc.easeBackOut()), cc.sequence(cc.rotateBy(.6, c), cc.rotateBy(.1, -c)));
break;

default:
n = cc.moveTo(1, t).easing(cc.easeElasticOut(2));
}
var i, r = this;
i = cc.callFunc(function() {
console.log(e.actionCallBack);
e.actionCallBack && e.actionCallBack();
});
var l = cc.delayTime(this.delayTime), d = cc.sequence(l, cc.callFunc(function() {
r.scoreAudio && cc.audioEngine.play(r.scoreAudio, !1, 1);
}), n, i);
this.node.runAction(d);
};
t.prototype.start = function() {
this.isLoad && this.doShowAction();
console.log("movein start");
};
__decorate([ i ], t.prototype, "delayTime", void 0);
__decorate([ i({
type: a
}) ], t.prototype, "direction", void 0);
__decorate([ i({
type: s
}) ], t.prototype, "action", void 0);
__decorate([ i(cc.AudioClip) ], t.prototype, "scoreAudio", void 0);
__decorate([ i() ], t.prototype, "isLoad", void 0);
__decorate([ i() ], t.prototype, "iscanLoad", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {} ],
NewDataCalMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7ef24qp8SdBvI5/VUfrwaQw", "NewDataCalMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function() {
function e() {
this.isPlayBlue = !1;
this.isPlayPink = !1;
this.selectName = "blue";
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.setSelectName = function(e) {
this.selectName = e;
};
e.prototype.getSelectName = function() {
return this.selectName;
};
e.prototype.setBoolValue = function(e, t) {
"blue" == e && (this.isPlayBlue = t);
"pink" == e && (this.isPlayPink = t);
};
e.prototype.getBoolValue = function(e) {
var t = !1;
"blue" == e && (t = this.isPlayBlue);
"pink" == e && (t = this.isPlayPink);
return t;
};
e.prototype.showUI = function() {
var e = cc.find("Canvas");
if (e) {
cc.loader.loadRes("makeupms/uishowMS", function(t, o) {
if (cc.sys.isMobile && t) cc.log("Prefab error11:" + t); else if (o instanceof cc.Prefab) {
var n = cc.instantiate(o);
console.log(n);
e.addChild(n);
n.name = "newMyPrefab";
n.setPosition(0, 0);
n.zIndex = 1e3;
cc.loader.setAutoReleaseRecursively(o, !0);
} else cc.log("Prefab error22");
});
} else cc.log("find Canvas error");
};
e.prototype.start = function() {};
var t;
return e = t = __decorate([ c ], e);
}());
o.default = i;
cc._RF.pop();
}, {} ],
NodeCompMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c4ffa7Ik9JG47VGudV0rXJT", "NodeCompMS");
var n = cc.Class({
extends: cc.Component,
editor: !1,
properties: {},
start: function() {
this.enabled = !1;
}
});
t.exports = n;
cc._RF.pop();
}, {} ],
NodeComp_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c0231xHxy5I37x23X5C20zz", "NodeComp_my");
var n = cc.Class({
extends: cc.Component,
editor: !1,
properties: {},
start: function() {
this.enabled = !1;
}
});
t.exports = n;
cc._RF.pop();
}, {} ],
NodeComp: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "887135MGUpIJoIYo+qmROAW", "NodeComp");
var n = cc.Class({
extends: cc.Component,
editor: !1,
properties: {},
start: function() {
this.enabled = !1;
}
});
t.exports = n;
cc._RF.pop();
}, {} ],
NodeHitHookMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "41e5eFvU2NMa725F8n1jdvL", "NodeHitHookMS");
var n = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("./SpriteDrag/SpriteDragMS"));
var c = cc.vmath, i = cc.v2(), a = cc.v2(), s = c.mat4.create();
cc.Node.prototype._hitTest = function(e, t) {
var o = this.getComponent(n.default);
if (o && o.enabledInHierarchy) return o.hitTest(e, t);
var r = this._contentSize.width, l = this._contentSize.height, d = i, p = a, u = cc.Camera.findCamera(this);
u ? u.getScreenToWorldPoint(e, d) : d.set(e);
this._updateWorldMatrix();
if (!c.mat4.invert(s, this._worldMatrix)) return !1;
c.vec2.transformMat4(p, d, s);
p.x += this._anchorPoint.x * r;
p.y += this._anchorPoint.y * l;
if (p.x >= 0 && p.y >= 0 && p.x <= r && p.y <= l) {
if (t && t.mask) {
for (var h = t.mask, f = this, m = 0; f && m < h.index; ++m, f = f.parent) ;
if (f === h.node) {
var g = f.getComponent(cc.Mask);
return !g || !g.enabledInHierarchy || g._hitTest(d);
}
t.mask = null;
return !0;
}
return !0;
}
return !1;
};
cc._RF.pop();
}, {
"./SpriteDrag/SpriteDragMS": "SpriteDragMS"
} ],
NodeHitHook: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f005d+S3x5IzaSMY3jOY7yg", "NodeHitHook");
var n = function(e) {
return e && e.__esModule ? e : {
default: e
};
}(e("./SpriteDrag/SpriteDrag"));
var c = cc.vmath, i = cc.v2(), a = cc.v2(), s = c.mat4.create();
cc.Node.prototype._hitTest = function(e, t) {
var o = this.getComponent(n.default);
if (o && o.enabledInHierarchy) return o.hitTest(e, t);
var r = this._contentSize.width, l = this._contentSize.height, d = i, p = a, u = cc.Camera.findCamera(this);
u ? u.getScreenToWorldPoint(e, d) : d.set(e);
this._updateWorldMatrix();
if (!c.mat4.invert(s, this._worldMatrix)) return !1;
c.vec2.transformMat4(p, d, s);
p.x += this._anchorPoint.x * r;
p.y += this._anchorPoint.y * l;
if (p.x >= 0 && p.y >= 0 && p.x <= r && p.y <= l) {
if (t && t.mask) {
for (var h = t.mask, f = this, m = 0; f && m < h.index; ++m, f = f.parent) ;
if (f === h.node) {
var g = f.getComponent(cc.Mask);
return !g || !g.enabledInHierarchy || g._hitTest(d);
}
t.mask = null;
return !0;
}
return !0;
}
return !1;
};
cc._RF.pop();
}, {
"./SpriteDrag/SpriteDrag": "SpriteDrag"
} ],
NodeTransformMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2c9f6U3rmFGSIXrWO9erpSA", "NodeTransformMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
e("./CocosHelperMS");
(function(e) {
e[e.None = 0] = "None";
e[e.RecordNode = 1] = "RecordNode";
e[e.SaveNode = 2] = "SaveNode";
e[e.previewNode = 3] = "previewNode";
})(n = o.OptionType || (o.OptionType = {}));
var c = cc._decorator, i = c.ccclass, a = c.property, s = function() {
function e() {
this._pos = cc.Vec2.ZERO;
this._scale = new cc.Vec2(1, 1);
this._rotate = 0;
this.hasSet = !1;
this._optionType = n.None;
}
Object.defineProperty(e.prototype, "pos", {
get: function() {
return this._pos;
},
set: function(e) {
0;
this._pos = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "scale", {
get: function() {
return this._scale;
},
set: function(e) {
0;
this._scale = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "rotate", {
get: function() {
return this._rotate;
},
set: function(e) {
0;
this._rotate = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "optionType", {
get: function() {
return this._optionType;
},
set: function(e) {
this.cacheTransforms(e);
},
enumerable: !0,
configurable: !0
});
e.prototype.getTween = function(e) {
var t = new cc.Tween();
t.to(e, {
position: this.pos,
scaleX: this.scale.x,
scaleY: this.scale.y,
rotation: this.rotate
}, null);
return t;
};
e.prototype.cacheTransforms = function(e) {};
__decorate([ a({
visible: !1
}) ], e.prototype, "_pos", void 0);
__decorate([ a({
type: cc.Vec2
}) ], e.prototype, "pos", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "_scale", void 0);
__decorate([ a({
type: cc.Vec2
}) ], e.prototype, "scale", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "_rotate", void 0);
__decorate([ a({
type: cc.Float
}) ], e.prototype, "rotate", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "hasSet", void 0);
__decorate([ a({
type: cc.Enum(n),
visible: !1
}) ], e.prototype, "_optionType", void 0);
__decorate([ a({
type: cc.Enum(n)
}) ], e.prototype, "optionType", null);
return e = __decorate([ i("NodeTransform") ], e);
}();
o.default = s;
cc._RF.pop();
}, {
"./CocosHelperMS": "CocosHelperMS"
} ],
NodeTransform: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3f4a0gKP1lMmJXZZV73XFsI", "NodeTransform");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n;
e("./CocosHelper");
(function(e) {
e[e.None = 0] = "None";
e[e.RecordNode = 1] = "RecordNode";
e[e.SaveNode = 2] = "SaveNode";
e[e.previewNode = 3] = "previewNode";
})(n = o.OptionType || (o.OptionType = {}));
var c = cc._decorator, i = c.ccclass, a = c.property, s = function() {
function e() {
this._pos = cc.Vec2.ZERO;
this._scale = new cc.Vec2(1, 1);
this._rotate = 0;
this.hasSet = !1;
this._optionType = n.None;
}
Object.defineProperty(e.prototype, "pos", {
get: function() {
return this._pos;
},
set: function(e) {
0;
this._pos = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "scale", {
get: function() {
return this._scale;
},
set: function(e) {
0;
this._scale = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "rotate", {
get: function() {
return this._rotate;
},
set: function(e) {
0;
this._rotate = e;
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(e.prototype, "optionType", {
get: function() {
return this._optionType;
},
set: function(e) {
this.cacheTransforms(e);
},
enumerable: !0,
configurable: !0
});
e.prototype.getTween = function(e) {
var t = new cc.Tween();
t.to(e, {
position: this.pos,
scaleX: this.scale.x,
scaleY: this.scale.y,
rotation: this.rotate
}, null);
return t;
};
e.prototype.cacheTransforms = function(e) {};
__decorate([ a({
visible: !1
}) ], e.prototype, "_pos", void 0);
__decorate([ a({
type: cc.Vec2
}) ], e.prototype, "pos", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "_scale", void 0);
__decorate([ a({
type: cc.Vec2
}) ], e.prototype, "scale", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "_rotate", void 0);
__decorate([ a({
type: cc.Float
}) ], e.prototype, "rotate", null);
__decorate([ a({
visible: !1
}) ], e.prototype, "hasSet", void 0);
__decorate([ a({
type: cc.Enum(n),
visible: !1
}) ], e.prototype, "_optionType", void 0);
__decorate([ a({
type: cc.Enum(n)
}) ], e.prototype, "optionType", null);
return e = __decorate([ i("NodeTransform") ], e);
}();
o.default = s;
cc._RF.pop();
}, {
"./CocosHelper": "CocosHelper"
} ],
OnceClickButtonMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b22e0yJpbFBtbOxJZBVa212", "OnceClickButtonMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.executionOrder, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._ccBtn = null;
t._interactable = !0;
t._isReset = !0;
t._onClick = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on("click", this._onClicked.bind(this));
};
t.prototype.start = function() {
this._ccBtn = this.node.getComponent(cc.Button);
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
};
t.prototype.onDisable = function() {
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
};
t.prototype._onClicked = function() {
if (!this._isReset) {
this._interactable = !1;
this._ccBtn && (this._ccBtn.interactable = !1);
}
};
t.prototype._onTouchEnded = function(e) {
if (this._isInteractable()) {
this._onClick && this._onClick();
e.stopPropagation();
}
};
t.prototype._isInteractable = function() {
if (this._isReset) {
this._isReset = !1;
return !0;
}
return this._interactable || this._ccBtn && this._ccBtn.interactable;
};
t.prototype.setOnClick = function(e) {
this._onClick = e;
};
t.prototype.reset = function() {
this._isReset = !0;
this._interactable = !0;
this._ccBtn && (this._ccBtn.interactable = !0);
};
return t = __decorate([ c, i(-1) ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
PlayControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0d2e4jvZIlNC7F/5e2Ke1pG", "PlayControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SlimeTouchEventMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bubblePre = null;
t.bubbleNum = 0;
t.maxNum = 30;
t.text = "hello";
return t;
}
t.prototype.init = function() {
this.node.getChildByName("arrow_bottom").active = !1;
this.node.getChildByName("arrow_top").active = !1;
this.node.getChildByName("slime").getComponent(cc.Animation).stop();
this.node.getChildByName("progress").getComponent(cc.Animation).stop();
cc.find("progress/mask", this.node).height = 0;
cc.find("progress/star0", this.node).stopAllActions();
cc.find("progress/star1", this.node).stopAllActions();
cc.find("progress/star0/star0", this.node).active = !1;
cc.find("progress/star0/star1", this.node).active = !0;
cc.find("progress/star1/star0", this.node).active = !1;
cc.find("progress/star1/star1", this.node).active = !0;
cc.find("slime/tipClick", this.node).active = !1;
cc.find("slime/bubble", this.node).getComponent(cc.Button).interactable = !0;
cc.find("slime/bubble", this.node).getComponent(cc.Animation).setCurrentTime(0);
cc.find("slime/bubble", this.node).getComponent(cc.Animation).stop();
cc.find("slime/bubble", this.node).active = !1;
cc.find("Canvas/playLayer5/slime").children.forEach(function(e) {
"bubbleCopy" == e.name && e.destroy();
});
cc.loader.loadRes("makeupms/image/slime/" + this.text + "Slime", cc.SpriteFrame, function(e, t) {
cc.find("slime/slime0", this.node).getComponent(cc.Sprite).spriteFrame = t;
cc.find("slime/slime0", this.node).setScale(.8);
}.bind(this));
cc.find("slime/mould", this.node).active = !0;
cc.find("slime/mould", this.node).setScale(.8);
cc.find("slime/mould", this.node).stopAllActions();
cc.find("slime/mould", this.node).setPosition(cc.v2(0, 42));
cc.find("slime/mould", this.node).getComponent(c.default).doShowAction();
cc.find("slime/mould", this.node).getComponent(c.default).actionCallBack = function() {
this.node.getChildByName("slime").getComponent(n.default).registerTouchEvent();
this.node.getChildByName("slime").getComponent(n.default).firstPlay = !0;
this.node.getChildByName("arrow_bottom").active = !0;
}.bind(this);
};
t.prototype.createBubble = function() {
var e = cc.instantiate(this.bubblePre);
e.active = !0;
cc.find("Canvas/playLayer5/slime").addChild(e);
e.name = "bubbleCopy";
var t = Math.random() * (cc.find("Canvas/playLayer5/slime").height - 200) - (cc.find("Canvas/playLayer5/slime").height - 200) / 2, o = Math.random() * (cc.find("Canvas/playLayer5/slime").width - 200) - (cc.find("Canvas/playLayer5/slime").width - 200) / 2;
e.setPosition(cc.v2(o, t));
e.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.destroy();
this.createBubble();
}.bind(this))));
if (this.bubbleNum > 10 && this.bubbleNum <= 20 && cc.find("Canvas/playLayer5/slime").childrenCount < 9) this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
var e = cc.instantiate(this.bubblePre);
e.active = !0;
cc.find("Canvas/playLayer5/slime").addChild(e);
e.name = "bubbleCopy";
var t = Math.random() * (cc.find("Canvas/playLayer5/slime").height - 300) - (cc.find("Canvas/playLayer5/slime").height - 300) / 2, o = Math.random() * (cc.find("Canvas/playLayer5/slime").width - 300) - (cc.find("Canvas/playLayer5/slime").width - 300) / 2;
e.setPosition(cc.v2(o, t));
e.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.destroy();
}.bind(this))));
}.bind(this)))); else if (this.bubbleNum > 20 && cc.find("Canvas/playLayer5/slime").childrenCount < 10) {
this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function() {
var e = cc.instantiate(this.bubblePre);
cc.find("Canvas/playLayer5/slime").addChild(e);
e.active = !0;
e.name = "bubbleCopy";
var t = Math.random() * (cc.find("Canvas/playLayer5/slime").height - 300) - (cc.find("Canvas/playLayer5/slime").height - 300) / 2, o = Math.random() * (cc.find("Canvas/playLayer5/slime").width - 300) - (cc.find("Canvas/playLayer5/slime").width - 300) / 2;
e.setPosition(cc.v2(o, t));
e.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.destroy();
}.bind(this))));
}.bind(this))));
this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
var e = cc.instantiate(this.bubblePre);
e.active = !0;
cc.find("Canvas/playLayer5/slime").addChild(e);
e.name = "bubbleCopy";
var t = Math.random() * (cc.find("Canvas/playLayer5/slime").height - 300) - (cc.find("Canvas/playLayer5/slime").height - 300) / 2, o = Math.random() * (cc.find("Canvas/playLayer5/slime").width - 300) - (cc.find("Canvas/playLayer5/slime").width - 300) / 2;
e.setPosition(cc.v2(o, t));
e.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.destroy();
}.bind(this))));
}.bind(this))));
}
};
t.prototype.reset = function() {
cc.director.loadScene("playSlime");
};
t.prototype.touchBackBtn = function() {
TransitionScene.changeScene("choose", 7);
};
__decorate([ s(cc.Prefab) ], t.prototype, "bubblePre", void 0);
__decorate([ s ], t.prototype, "text", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./SlimeTouchEventMS": "SlimeTouchEventMS"
} ],
PlayController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "42a56QyovZL7qBB/5C5W1qz", "PlayController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./TipManager"), c = e("./PopupComponet"), i = e("../../common/Script/codebase/utils/CocosHelper"), a = e("../../common/Script/codebase/TransitionScene"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.touchNode = null;
t.count = 0;
t.photoNode = null;
t.filePath = null;
return t;
}
t.prototype.onLoad = function() {
this.count = 0;
this.registerTouchEvent();
};
t.prototype.registerTouchEvent = function() {
this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function(e) {
this.touchNode.getComponent(cc.AudioSource).play();
cc.find("Canvas/slime/mix6").setScale(1);
cc.find("Canvas/slime/mix6").stopAllActions();
cc.find("Canvas/slime/mix6").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
};
t.prototype.onTouchMove = function(e) {
cc.find("Canvas/arrow").active = !1;
var t = e.getTouches(), o = this.node.convertToNodeSpaceAR(t[0].getStartLocation()), n = this.node.convertToNodeSpaceAR(t[0].getLocation()), c = (t[0].getDelta(), 
o.sub(n));
cc.find("Canvas/slime/h_l0").y = cc.find("Canvas/slime/h_l0").y - c.y / 15;
cc.find("Canvas/slime/h_r0").y = cc.find("Canvas/slime/h_r0").y - c.y / 15;
cc.find("Canvas/slime/h_l1").y = cc.find("Canvas/slime/h_l1").y - c.y / 15;
cc.find("Canvas/slime/h_r1").y = cc.find("Canvas/slime/h_r1").y - c.y / 15;
cc.log(c.y / 4);
var i = (cc.find("Canvas/slime/h_l0").y + 290) / 290;
i > 1 && (i = 1);
i < 0 && (i = 0);
cc.find("Canvas/slime/pull").scaleY = i;
var a = cc.find("Canvas/slime/h_l0").getPosition();
a.y < -290 && (a.y = -290);
a.y > 0 && (a.y = 0);
cc.find("Canvas/slime/h_l0").setPosition(cc.v2(cc.find("Canvas/slime/h_l0").x, a.y));
cc.find("Canvas/slime/h_l1").setPosition(cc.v2(cc.find("Canvas/slime/h_l1").x, a.y));
cc.find("Canvas/slime/h_r0").setPosition(cc.v2(cc.find("Canvas/slime/h_r0").x, a.y));
cc.find("Canvas/slime/h_r1").setPosition(cc.v2(cc.find("Canvas/slime/h_r1").x, a.y));
};
t.prototype.onTouchEnd = function() {
this._touchEnd();
};
t.prototype.onTouchCancle = function() {
this._touchEnd();
};
t.prototype._touchEnd = function() {
this.touchNode.getComponent(cc.AudioSource).play();
cc.find("Canvas/slime/mix6").setScale(1);
cc.find("Canvas/slime/mix6").stopAllActions();
cc.find("Canvas/slime/mix6").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
if (cc.find("Canvas/slime/h_l0").y + 290 >= 150) {
this.count = this.count + 1;
this.count % 3 == 0 && n.default.getInstance().jumpTips();
if (7 == this.count) {
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
var e = i.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
e.active = !0;
e.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)), 2));
}
}
this.destroyTouchEvent();
cc.find("Canvas/slime/h_l0").runAction(cc.sequence(cc.moveTo(.5, cc.v2(cc.find("Canvas/slime/h_l0").x, -290)), cc.callFunc(function() {
this.registerTouchEvent();
}.bind(this))));
cc.find("Canvas/slime/pull").runAction(cc.scaleTo(.5, .8, 0));
cc.find("Canvas/slime/h_r0").runAction(cc.moveTo(.5, cc.v2(cc.find("Canvas/slime/h_r0").x, -290)));
cc.find("Canvas/slime/h_l1").runAction(cc.moveTo(.5, cc.v2(cc.find("Canvas/slime/h_l1").x, -290)));
cc.find("Canvas/slime/h_r1").runAction(cc.moveTo(.5, cc.v2(cc.find("Canvas/slime/h_r1").x, -290)));
};
t.prototype.touchNextBtn = function() {
a.default.changeScene("clickSlimeCS");
};
t.prototype.touchBackBtn = function() {
a.default.changeScene("coilSlimeCS");
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
i.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(c.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(c.default).hidePopup();
}.bind(this))));
e ? t.getComponent(c.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(c.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
__decorate([ l(cc.Node) ], t.prototype, "touchNode", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"./PopupComponet": "PopupComponet",
"./TipManager": "TipManager"
} ],
PlaySlimesControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ac51crRi/lDXaV9ISTIm2C7", "PlaySlimesControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./SlapControllerMS"), c = e("./ClickControllerMS"), i = e("./RubControllerMS"), a = e("./PlayControllerMS"), s = e("./DragController1MS"), r = e("../common/common/Script/ads/showLaodingMS"), l = e("../common/common/Script/codebase/TransitionSceneMS"), d = e("./addNew/NewDataCalMS"), p = e("../common/common/Script/codebase/utils/CocosHelperMS"), u = cc._decorator, h = u.ccclass, f = (u.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
this.node.getComponent(cc.AudioSource).play();
}.bind(this))));
for (var e = 1; e <= 5; e++) if (1 == e) {
cc.find("Canvas/playLayer" + e).active = !0;
cc.find("Canvas/btns/" + e + "/yes").active = !0;
} else {
cc.find("Canvas/playLayer" + e).active = !1;
cc.find("Canvas/btns/" + e + "/yes").active = !1;
}
setTimeout(function() {
p.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").active = !0;
}, 8e3);
};
t.prototype.init = function() {
cc.find("Canvas/playLayer1").getComponent(n.default).init();
cc.find("Canvas/playLayer2").getComponent(c.default).init();
cc.find("Canvas/playLayer3").getComponent(s.default).init();
cc.find("Canvas/playLayer4").getComponent(i.default).init();
cc.find("Canvas/playLayer5").getComponent(a.default).init();
};
t.prototype.btnClick = function(e) {
var t = e.target.name;
e.target.parent.getComponent(cc.AudioSource).play();
cc.log(e.target.parent);
for (var o = 1; o <= 5; o++) if (o == Number(t)) {
cc.find("Canvas/playLayer" + o).active = !0;
cc.find("Canvas/btns/" + o + "/yes").active = !0;
} else {
cc.find("Canvas/playLayer" + o).active = !1;
cc.find("Canvas/btns/" + o + "/yes").active = !1;
}
this.init();
};
t.prototype.touchNextBtn = function(e, t) {
p.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").active = !1;
"blue" == t && d.default.getInstance().setBoolValue("blue", !0);
"pink" == t && d.default.getInstance().setBoolValue("pink", !0);
var o = d.default.getInstance().getBoolValue("blue"), n = d.default.getInstance().getBoolValue("pink");
if (o && n) d.default.getInstance().showUI(); else {
r.default.getInstance().loadingDoneCallback = function() {
r.default.getInstance().loadingDoneCallback = null;
l.default.changeScene("selectColorSceneMS");
};
r.default.getInstance().showAds(!1);
}
};
return t = __decorate([ h ], t);
}(cc.Component));
o.default = f;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"./ClickControllerMS": "ClickControllerMS",
"./DragController1MS": "DragController1MS",
"./PlayControllerMS": "PlayControllerMS",
"./RubControllerMS": "RubControllerMS",
"./SlapControllerMS": "SlapControllerMS",
"./addNew/NewDataCalMS": "NewDataCalMS"
} ],
PopupComponet: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1df021M/ipA4oiYvsfYxLve", "PopupComponet");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.showPopup = function() {
this.node.getChildByName("mask") && (this.node.getChildByName("mask").active = !1);
this.node.active = !0;
this.node.setScale(0);
this.node.getComponent(cc.AudioSource).play();
this.node.runAction(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.05, 1), cc.callFunc(function() {
this.node.getChildByName("mask") && (this.node.getChildByName("mask").active = !0);
}.bind(this))));
};
t.prototype.hidePopup = function() {
this.node.getChildByName("btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("mask") && (this.node.getChildByName("mask").active = !1);
this.node.runAction(cc.sequence(cc.scaleTo(.05, 1.1), cc.scaleTo(.5, 0), cc.callFunc(function() {
this.node.active = !1;
}.bind(this))));
};
t.prototype.setTip = function(e) {
this.node.getChildByName("tip").getComponent(cc.Label).string = e;
};
t.prototype.okClick = function() {
this.hidePopup();
this.callback && this.callback();
};
t.prototype.setCallback = function(e) {
this.callback = e;
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
PourController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b5e4TxogBNcbery6/otP0b", "PourController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./PopupComponet"), c = e("../../common/Script/compoent/MoveIn"), i = e("../../common/Script/codebase/SpriteDrag/SpriteDrag"), a = e("../../common/Script/codebase/TransitionScene"), s = e("../../common/Script/codebase/utils/CocosHelper"), r = cc._decorator, l = r.ccclass, d = (r.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
return t;
}
t.prototype.onLoad = function() {
this.node.getChildByName("snowflake").getComponent(c.default).actionCallBack = function() {
this.node.getChildByName("snowflake").getComponent(i.default).enabled = !0;
this.node.getChildByName("tipMove").active = !0;
}.bind(this);
};
t.prototype.touchEnd = function() {
this.node.getChildByName("tipMove").active = !1;
this.node.getChildByName("snowflake").getComponent(i.default).enabled = !1;
this.node.getChildByName("snowflake").runAction(cc.sequence(cc.moveTo(.5, cc.v2(-10, 250)), cc.callFunc(function() {
cc.find("Canvas/snowflake/snow").active = !0;
this.node.getChildByName("snowflake").getComponent(cc.AudioSource).play();
cc.find("Canvas/snowflake/snowflake").runAction(cc.fadeTo(4, 0));
cc.find("Canvas/slime/snow").runAction(cc.fadeTo(4, 255));
}.bind(this)), cc.delayTime(4), cc.callFunc(function() {
this.node.getChildByName("snowflake").getComponent(cc.AudioSource).stop();
cc.find("Canvas/snowflake/snow").active = !1;
cc.find("Canvas/slime").runAction(cc.spawn(cc.moveTo(1, cc.v2(0, 0)), cc.rotateTo(1, -45)));
}.bind(this)), cc.moveBy(.5, cc.v2(1e3, 0)), cc.delayTime(.5), cc.callFunc(function() {
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
}.bind(this)), cc.delayTime(.5), cc.callFunc(function() {
a.default.changeScene("pullSlime1CS");
}.bind(this))));
};
t.prototype.touchBackBtn = function() {
a.default.changeScene("pullSlime0CS");
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
s.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(n.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(n.default).hidePopup();
}.bind(this))));
e ? t.getComponent(n.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(n.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
return t = __decorate([ l ], t);
}(cc.Component));
o.default = d;
cc._RF.pop();
}, {
"../../common/Script/codebase/SpriteDrag/SpriteDrag": "SpriteDrag",
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"../../common/Script/compoent/MoveIn": "MoveIn",
"./PopupComponet": "PopupComponet"
} ],
PullControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3d135nsPMBABaE3BQ1Dl+Ao", "PullControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./DataConfigMS"), c = e("../common/common/Script/codebase/utils/CocosHelperMS"), i = e("./DragonCompoentMS"), a = e("./TipManagerMS"), s = e("../common/common/Script/ads/showLaodingMS"), r = e("../common/common/Script/codebase/TransitionSceneMS"), l = e("./tool/components/ShaderHelperMS"), d = e("./tool/components/ShaderTimeMS"), p = cc._decorator, u = p.ccclass, h = p.property, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.actionNode = null;
t.colorName = null;
t.showPartic = -1;
t.indexPNum = 0;
t._loopSound = -1;
t._showpartic = -1;
return t;
}
t.prototype.start = function() {
var e = this, t = c.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
t.active = !0;
t.zIndex = 100;
t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n.default.getInstance().getPageTexture());
t.getComponent(l.default).enabled = !0;
t.getComponent(d.default).enabled = !0;
setTimeout(function() {
e.dynamicCreate();
}, 1e3);
};
t.prototype.dynamicCreate = function() {
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "dragon");
e.active = !0;
this.addHandCm();
e.runAction(cc.sequence(cc.moveTo(1, cc.v2(-9, -16)), cc.callFunc(function() {
cc.find("Canvas/arrow_right").active = !0;
cc.find("Canvas/arrow_left").active = !0;
})));
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
t.active = !0;
t.zIndex = 100;
t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n.default.getInstance().getPageTexture());
t.getComponent(l.default).enabled = !0;
t.getComponent(d.default).enabled = !0;
var o = c.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0"), i = c.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0"), a = c.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1"), s = c.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
o.active = !0;
i.active = !0;
a.active = !0;
s.active = !0;
o.opacity = 0;
o.runAction(cc.fadeIn(1));
i.opacity = 0;
i.runAction(cc.fadeIn(1));
a.opacity = 0;
a.runAction(cc.fadeIn(1));
s.opacity = 0;
s.runAction(cc.fadeIn(1));
};
t.prototype.addHandCm = function() {
this.actionNode = new cc.Node();
cc.Canvas.instance.node.addChild(this.actionNode);
for (var e = [ "left_hand0", "right_hand0" ], t = c.CocosHelper.findNode(cc.Canvas.instance.node, "dragon"), o = (t.getComponent(dragonBones.ArmatureDisplay), 
t.getComponent(dragonBones.ArmatureDisplay).armature()), n = 0; n < e.length; n++) {
var a = e[n], s = c.CocosHelper.findNode(cc.Canvas.instance.node, a), r = s.getComponent(i.default), l = s.getPosition(), d = l.add(cc.v2());
d.x = s.getParent().convertToNodeSpaceAR("left_hand0" == a ? cc.v2(0, 0) : cc.v2(cc.view.getVisibleSize().width, 0)).x;
r.setStartPos(l);
r.setEndPos(d);
var p = "left_hand0" == a ? "slimel0" : "slimer0", u = o.getBone(p);
r.setMoveBone(u);
}
for (var h = 1; h <= 5; h++) {
console.log(h);
var f = o.getSlot("motion" + h + "_slime");
f.displayIndex = -1;
f._updateColor();
}
var m = this;
cc.find("Canvas").on("PullTouch", function(e, t, o) {
cc.find("Canvas/arrow_right").active = !1;
cc.find("Canvas/arrow_left").active = !1;
console.log(m._loopSound);
cc.audioEngine.stopEffect(m._loopSound);
});
cc.find("Canvas").on("Pulling", function(e, t, o) {
cc.director.getActionManager().resumeTarget(m.actionNode);
m.showParticle();
if (-1 == m._loopSound) {
m._loopSound = cc.audioEngine.playEffect(m.lachang, !1);
setTimeout(function() {
m._loopSound = -1;
}, 1500);
}
});
cc.find("Canvas").on("PullEnd", function(e, t, o) {
console.log("PullEnd");
cc.director.getActionManager().pauseTarget(m.actionNode);
console.log(m._loopSound);
m.hideParticle();
});
this.startAction();
};
t.prototype.startAction = function() {
for (var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "dragon").getComponent(dragonBones.ArmatureDisplay).armature(), t = function(t) {
o.actionNode.runAction(cc.sequence(cc.delayTime(2 * (t + 1)), cc.callFunc(function() {
a.default.getInstance().jumpTips();
c.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0"), c.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0"), 
c.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1"), c.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
if (5 != t) {
var o = e.getSlot("motion" + t + "_slime"), n = e.getSlot("motion" + (t + 1) + "_slime");
console.log("motion2_slime" + (t + 1));
n.displayIndex = 0;
console.log("motion1_slime" + t);
o.displayIndex = -1;
} else {
c.CocosHelper.findNode(cc.Canvas.instance.node, "finish").getComponent(cc.ParticleSystem).resetSystem();
var i = c.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
i.active = !0;
i.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)), 2));
}
}.bind(o))));
}, o = this, n = 0; n < 6; n++) t(n);
cc.director.getActionManager().pauseTarget(this.actionNode);
};
t.prototype.showParticle = function() {};
t.prototype.hideParticle = function() {};
t.prototype.touchNextBtn = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
s.default.getInstance().showAds(!1);
s.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
s.default.getInstance().loadingDoneCallback = null;
cc.director.loadScene("homeSceneMS");
};
};
t.prototype.touchBackBtn = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
var t = cc.view.getVisibleSize().width, o = cc.view.getVisibleSize().height;
c.CocosHelper.captureNodeSize(cc.Canvas.instance.node, t, o).then(function(e) {
if (null == e) ; else {
n.default.getInstance().setPageTexture(e);
r.default.changeScene("play3SceneMS");
}
});
};
__decorate([ h({
type: cc.AudioClip
}) ], t.prototype, "lachang", void 0);
return t = __decorate([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"./DataConfigMS": "DataConfigMS",
"./DragonCompoentMS": "DragonCompoentMS",
"./TipManagerMS": "TipManagerMS",
"./tool/components/ShaderHelperMS": "ShaderHelperMS",
"./tool/components/ShaderTimeMS": "ShaderTimeMS"
} ],
PullController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "804be6gU+BKM4yM7EgW4QtY", "PullController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./TipManager"), c = e("./DragonCompoent"), i = e("./PopupComponet"), a = e("../../common/Script/codebase/utils/CocosHelper"), s = e("../../common/Script/codebase/TransitionScene"), r = e("../../common/Script/ads/showLaoding"), l = cc._decorator, d = l.ccclass, p = l.property, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
t.actionNode = null;
t.maxCount = null;
t.time = null;
t.isPulling = !0;
t.showPartic = -1;
t.indexPNum = 0;
t._loopSound = -1;
t._showpartic = -1;
return t;
}
t.prototype.start = function() {
a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_home").zIndex = 100;
a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_back").zIndex = 100;
a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").zIndex = 100;
if ("pullSlime0CS" == cc.director.getScene().name) {
this.maxCount = 4;
this.time = 2;
} else {
this.maxCount = 2;
this.time = 3;
}
this.dynamicCreate();
};
t.prototype.dynamicCreate = function() {
a.CocosHelper.findNode(cc.Canvas.instance.node, "dragon").getComponent(dragonBones.ArmatureDisplay);
this.addHandCm();
};
t.prototype.addHandCm = function() {
this.actionNode = new cc.Node();
cc.Canvas.instance.node.addChild(this.actionNode);
for (var e = [ "left_hand0", "right_hand0" ], t = a.CocosHelper.findNode(cc.Canvas.instance.node, "dragon"), o = (t.getComponent(dragonBones.ArmatureDisplay), 
t.getComponent(dragonBones.ArmatureDisplay).armature()), n = 0; n < e.length; n++) {
var i = e[n], s = a.CocosHelper.findNode(cc.Canvas.instance.node, i), r = s.getComponent(c.default), l = s.getPosition(), d = l.add(cc.v2());
d.x = s.getParent().convertToNodeSpaceAR("left_hand0" == i ? cc.v2(0, 0) : cc.v2(cc.view.getVisibleSize().width, 0)).x;
r.setStartPos(l);
r.setEndPos(d);
var p = "left_hand0" == i ? "slimel0" : "slimer0", u = o.getBone(p);
r.setMoveBone(u);
}
for (var h = 1; h <= this.maxCount; h++) {
console.log(h);
var f = o.getSlot("motion" + h + "_slime");
f.displayIndex = -1;
f._updateColor();
}
var m = this;
cc.find("Canvas").on("PullTouch", function(e, t, o) {
cc.find("Canvas/arrow_right").active = !1;
cc.find("Canvas/arrow_left").active = !1;
console.log("PullTouch");
cc.audioEngine.stopEffect(m._loopSound);
});
cc.find("Canvas").on("Pulling", function(e, t, o) {
m.showParticle();
m.isPulling = !0;
cc.director.getActionManager().resumeTarget(m.actionNode);
if (-1 == m._loopSound) {
m._loopSound = cc.audioEngine.playEffect(m.lachang, !1);
setTimeout(function() {
m._loopSound = -1;
}, 1500);
}
});
cc.find("Canvas").on("PullEnd", function(e, t, o) {
m.isPulling = !1;
console.log("PullEnd");
cc.director.getActionManager().pauseTarget(m.actionNode);
m.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.log(m.isPulling);
m.isPulling || m.hideParticle();
})));
});
this.startAction();
};
t.prototype.startAction = function() {
for (var e = a.CocosHelper.findNode(cc.Canvas.instance.node, "dragon").getComponent(dragonBones.ArmatureDisplay).armature(), t = function(t) {
o.actionNode.runAction(cc.sequence(cc.delayTime(o.time * (t + 1)), cc.callFunc(function() {
n.default.getInstance().jumpTips();
a.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand0"), a.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand0"), 
a.CocosHelper.findNode(cc.Canvas.instance.node, "left_hand1"), a.CocosHelper.findNode(cc.Canvas.instance.node, "right_hand1");
if (t != this.maxCount) {
var o = e.getSlot("motion" + t + "_slime"), c = e.getSlot("motion" + (t + 1) + "_slime");
console.log("motion2_slime" + (t + 1));
c.displayIndex = 0;
console.log("motion1_slime" + t);
o.displayIndex = -1;
} else {
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
var i = a.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
i.active = !0;
i.runAction(cc.repeat(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1)), 2));
}
}.bind(o))));
}, o = this, c = 0; c <= this.maxCount; c++) t(c);
cc.director.getActionManager().pauseTarget(this.actionNode);
};
t.prototype.showParticle = function() {
this.indexPNum = this.indexPNum + 1;
var e = a.CocosHelper.findNode(cc.Canvas.instance.node, "heartFullColor");
if (-1 == this._showpartic) {
this._showpartic = 1;
var t = e.getComponent(cc.ParticleSystem);
e.active = !0;
t.resetSystem();
}
};
t.prototype.hideParticle = function() {
this._showpartic = -1;
a.CocosHelper.findNode(cc.Canvas.instance.node, "heartFullColor").getComponent(cc.ParticleSystem).stopSystem();
};
t.prototype.touchNextBtn = function() {
if ("pullSlime0CS" == cc.director.getScene().name) {
r.default.getInstance().loadingDoneCallback = function() {
r.default.getInstance().loadingDoneCallback = null;
s.default.changeScene("pourSnowCS");
};
r.default.getInstance().showAds(!1);
} else s.default.changeScene("coilSlimeCS");
};
t.prototype.touchBackBtn = function() {
"pullSlime0CS" == cc.director.getScene().name ? s.default.changeScene("rubSlimeCS") : s.default.changeScene("pourSnowCS");
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
a.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(i.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(i.default).hidePopup();
}.bind(this))));
e ? t.getComponent(i.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(i.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
__decorate([ p({
type: cc.AudioClip
}) ], t.prototype, "lachang", void 0);
return t = __decorate([ d ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../common/Script/ads/showLaoding": "showLaoding",
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"./DragonCompoent": "DragonCompoent",
"./PopupComponet": "PopupComponet",
"./TipManager": "TipManager"
} ],
RewardManagerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "494f8WrUwlJXr8rKyJJZ4pz", "RewardManagerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AdsManagerMS"), c = function() {
function e() {
this.showCrossCount = 0;
this.mapRewardItems = new Map();
this.jsonPath = "content.json";
this.showCrossCount = 0;
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.loadConfig = function() {
var e = this;
cc.loader.loadRes(this.jsonPath, function(t, o) {
t ? cc.log("解析json文件失败" + t) : o.json.forEach(function(t) {
var o = t.Indexs.split(",");
if (0 != o.length) {
console.log(o);
for (var n = t.IAPID, c = t.ModuleName, a = t.Key, s = 0; s < o.length; s++) {
var r = new i(n, c, a, -1), l = o[s];
r.index = Number(l);
e.mapRewardItems.set(r.getKey(), r);
}
console.log(e.mapRewardItems);
}
});
});
};
e.prototype.getRewardInfoItem = function(e, t, o) {
var n = this.getItemKey(e, t, o);
return this.mapRewardItems.has(n) ? this.mapRewardItems.get(n) : null;
};
e.prototype.getItemKey = function(e, t, o) {
console.log(e + t + String(o));
return e + t + String(o);
};
e.prototype.isLocked = function(e) {
if (!this.mapRewardItems.has(e)) return !1;
var t = cc.sys.localStorage.getItem(e);
t || (t = 1);
cc.sys.localStorage.setItem(e, t);
return 1 == t;
};
e.prototype.isLockOther = function(e) {
var t = cc.sys.localStorage.getItem(e);
t || (t = 1);
cc.sys.localStorage.setItem(e, t);
return 1 == t;
};
e.prototype.showRewardAds = function(e) {
if (this.mapRewardItems.has(e) && this.isLocked(e)) {
console.log("显示reward,开始解锁" + e);
this.showRewardAdsByItem(this.mapRewardItems.get(e));
}
};
e.prototype.showRewardAdsByItem = function(e) {
if (jsToCPP.getInstance().checkNetworkAvailable()) {
cc.sys.isMobile && this.initLisenter();
if (n.default.getInstance().showReward()) {
this.s_showFullAds = !1;
this._waitingUnLockItemInfo = e;
this.showRewardLoadingCall && this.showRewardLoadingCall();
} else {
n.default.getInstance().preAdsByType(n.ADS_TYPE.kTypeRewardedAds);
if (!this.showRewardFailedHandleAndroid()) return;
console.log(e);
this._waitingUnLockItemInfo = e;
this.unLockedByItem(this._waitingUnLockItemInfo);
}
cc.log("要解锁的key", this._waitingUnLockItemInfo.getKey());
cc.log("=========onAdsCollapsed %d 1111=========", this.s_showFullAds);
} else {
jsToCPP.getInstance().popAlertDialog("there is problem with internet connection and try later");
this.showRewardFalseCall && this.showRewardFalseCall();
}
};
e.prototype.unLocked = function(e) {
cc.sys.localStorage.setItem(e, 0);
console.log("解锁成功" + e);
};
e.prototype.unLockedByItem = function(e) {
console.log("解锁" + e.getKey());
this.unLocked(e.getKey());
};
e.prototype.showRewardFailedHandleAndroid = function() {
var e, t = n.ADS_TYPE.kTypeInterstitialAds;
if (this.showCrossCount >= 2) {
this.showCrossCount = 0;
t = n.ADS_TYPE.kTypeCrosspromoAds;
}
this.showCrossCount++;
if (!(e = t == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross())) {
jsToCPP.getInstance().popAlertDialog("there is problem with internet connection and try later");
this.showRewardFalseCall && this.showRewardFalseCall();
}
return e;
};
e.prototype.unLisenter = function() {
n.default.getInstance().onAdsLoaded = null;
n.default.getInstance().onAdsClicked = null;
n.default.getInstance().onAdsExpanded = null;
n.default.getInstance().onAdsCollapsed = null;
n.default.getInstance().onAdsLoadFailed = null;
n.default.getInstance().onAdsRewarded = null;
};
e.prototype.initLisenter = function() {
console.log(" RewardManager initLisenter");
n.default.getInstance().initLisenter();
n.default.getInstance().onAdsLoaded = function(e) {}.bind(this);
n.default.getInstance().onAdsClicked = function(e) {}.bind(this);
n.default.getInstance().onAdsExpanded = function(e) {
console.log(" RewardManager====>广告====>ID值" + e);
}.bind(this);
n.default.getInstance().onAdsCollapsed = function(e) {
console.log(" RewardManager====>onAdsCollapsed====>ID值" + e);
this.unLisenter();
console.log(" RewardManager====>self.unLisenter()");
this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}.bind(this);
n.default.getInstance().onAdsLoadFailed = function(e, t) {
console.log(" RewardManager====>onAdsLoadFailed====>ID值" + t);
this.unLisenter();
console.log(" RewardManager====>self.unLisenter()");
t != n.ADS_TYPE.kTypeInterstitialAds || this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}.bind(this);
n.default.getInstance().onAdsRewarded = function(e, t, o) {
console.log(" RewardManager====>self.unLisenter()");
this.unLisenter();
console.log(" RewardManager====>onAdsRewarded-------" + this._waitingUnLockItemInfo.getKey());
if (o) this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey()); else {
this.unLockedByItem(this._waitingUnLockItemInfo);
this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}
}.bind(this);
};
return e;
}();
o.default = c;
var i = function() {
function e(e, t, o, n) {
this.index = 999;
this.iapId = e;
this.moduleName = t;
this.keyInModule = o;
this.index = n;
}
e.prototype.getKey = function() {
return this.moduleName + this.keyInModule + this.index;
};
e.prototype.isNull = function() {
return 999 == this.index;
};
return e;
}();
o.RewardInfoItem = i;
cc._RF.pop();
}, {
"./AdsManagerMS": "AdsManagerMS"
} ],
RewardManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "78ffeD1at5JSLm2D6gDK4Ia", "RewardManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AdsManager"), c = function() {
function e() {
this.showCrossCount = 0;
this.mapRewardItems = new Map();
this.jsonPath = "content.json";
this.showCrossCount = 0;
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.loadConfig = function() {
var e = this;
cc.loader.loadRes(this.jsonPath, function(t, o) {
t ? cc.log("解析json文件失败" + t) : o.json.forEach(function(t) {
var o = t.Indexs.split(",");
if (0 != o.length) {
console.log(o);
for (var n = t.IAPID, c = t.ModuleName, a = t.Key, s = 0; s < o.length; s++) {
var r = new i(n, c, a, -1), l = o[s];
r.index = Number(l);
e.mapRewardItems.set(r.getKey(), r);
}
console.log(e.mapRewardItems);
}
});
});
};
e.prototype.getRewardInfoItem = function(e, t, o) {
var n = this.getItemKey(e, t, o);
return this.mapRewardItems.has(n) ? this.mapRewardItems.get(n) : null;
};
e.prototype.getItemKey = function(e, t, o) {
console.log(e + t + String(o));
return e + t + String(o);
};
e.prototype.isLocked = function(e) {
if (!this.mapRewardItems.has(e)) return !1;
var t = cc.sys.localStorage.getItem(e);
t || (t = 1);
cc.sys.localStorage.setItem(e, t);
return 1 == t;
};
e.prototype.isLockOther = function(e) {
var t = cc.sys.localStorage.getItem(e);
t || (t = 1);
cc.sys.localStorage.setItem(e, t);
return 1 == t;
};
e.prototype.showRewardAds = function(e) {
if (this.mapRewardItems.has(e) && this.isLocked(e)) {
console.log("显示reward,开始解锁" + e);
this.showRewardAdsByItem(this.mapRewardItems.get(e));
}
};
e.prototype.showRewardAdsByItem = function(e) {
if (jsToCPP.getInstance().checkNetworkAvailable()) {
cc.sys.isMobile && this.initLisenter();
if (n.default.getInstance().showReward()) {
this.s_showFullAds = !1;
this._waitingUnLockItemInfo = e;
this.showRewardLoadingCall && this.showRewardLoadingCall();
} else {
n.default.getInstance().preAdsByType(n.ADS_TYPE.kTypeRewardedAds);
if (!this.showRewardFailedHandleAndroid()) return;
console.log(e);
this._waitingUnLockItemInfo = e;
this.unLockedByItem(this._waitingUnLockItemInfo);
}
cc.log("要解锁的key", this._waitingUnLockItemInfo.getKey());
cc.log("=========onAdsCollapsed %d 1111=========", this.s_showFullAds);
} else {
jsToCPP.getInstance().popAlertDialog("there is problem with internet connection and try later");
this.showRewardFalseCall && this.showRewardFalseCall();
}
};
e.prototype.unLocked = function(e) {
cc.sys.localStorage.setItem(e, 0);
console.log("解锁成功" + e);
};
e.prototype.unLockedByItem = function(e) {
console.log("解锁" + e.getKey());
this.unLocked(e.getKey());
};
e.prototype.showRewardFailedHandleAndroid = function() {
var e, t = n.ADS_TYPE.kTypeInterstitialAds;
if (this.showCrossCount >= 2) {
this.showCrossCount = 0;
t = n.ADS_TYPE.kTypeCrosspromoAds;
}
this.showCrossCount++;
if (!(e = t == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross())) {
jsToCPP.getInstance().popAlertDialog("there is problem with internet connection and try later");
this.showRewardFalseCall && this.showRewardFalseCall();
}
return e;
};
e.prototype.unLisenter = function() {
n.default.getInstance().onAdsLoaded = null;
n.default.getInstance().onAdsClicked = null;
n.default.getInstance().onAdsExpanded = null;
n.default.getInstance().onAdsCollapsed = null;
n.default.getInstance().onAdsLoadFailed = null;
n.default.getInstance().onAdsRewarded = null;
};
e.prototype.initLisenter = function() {
console.log(" RewardManager initLisenter");
n.default.getInstance().initLisenter();
n.default.getInstance().onAdsLoaded = function(e) {}.bind(this);
n.default.getInstance().onAdsClicked = function(e) {}.bind(this);
n.default.getInstance().onAdsExpanded = function(e) {
console.log(" RewardManager====>广告====>ID值" + e);
}.bind(this);
n.default.getInstance().onAdsCollapsed = function(e) {
console.log(" RewardManager====>onAdsCollapsed====>ID值" + e);
this.unLisenter();
console.log(" RewardManager====>self.unLisenter()");
this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}.bind(this);
n.default.getInstance().onAdsLoadFailed = function(e, t) {
console.log(" RewardManager====>onAdsLoadFailed====>ID值" + t);
this.unLisenter();
console.log(" RewardManager====>self.unLisenter()");
t != n.ADS_TYPE.kTypeInterstitialAds || this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}.bind(this);
n.default.getInstance().onAdsRewarded = function(e, t, o) {
console.log(" RewardManager====>self.unLisenter()");
this.unLisenter();
console.log(" RewardManager====>onAdsRewarded-------" + this._waitingUnLockItemInfo.getKey());
if (o) this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey()); else {
this.unLockedByItem(this._waitingUnLockItemInfo);
this.removeRewardLoadingCall && this.removeRewardLoadingCall(this._waitingUnLockItemInfo.getKey());
}
}.bind(this);
};
return e;
}();
o.default = c;
var i = function() {
function e(e, t, o, n) {
this.index = 999;
this.iapId = e;
this.moduleName = t;
this.keyInModule = o;
this.index = n;
}
e.prototype.getKey = function() {
return this.moduleName + this.keyInModule + this.index;
};
e.prototype.isNull = function() {
return 999 == this.index;
};
return e;
}();
o.RewardInfoItem = i;
cc._RF.pop();
}, {
"./AdsManager": "AdsManager"
} ],
RotateCompoentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dc7ccqxPvVAsIn/mgeXiaKA", "RotateCompoentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/EventListenerMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.endRotate = 0;
t.touchPrePos = cc.v2(0, 0);
return t;
}
t.prototype.start = function() {};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
};
t.prototype.onDisable = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
};
t.prototype.touchMove = function(e) {
this.node.getContentSize();
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = (this.getWordPos(e.getLocation()), 
this.getWordPos(e.getPreviousLocation()), e.getDelta().sub(t)), n = this.touchPrePos.sub(t), c = 180 * o.angle(n) / 3.1415926, i = this.node.rotation + 20 * c;
this.node.rotation = i;
if (i >= this.endRotate) {
this.node.rotation = this.endRotate;
this.enabled = !1;
for (var a = 0, s = this.eventTouchs.slice().reverse(); a < s.length; a++) {
if (s[a].emit("RotaEnd", e, this)) break;
}
}
};
t.prototype.touchStart = function(e) {
this.touchPrePos = cc.v2(0, 0);
};
t.prototype.touchEnd = function(e) {};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) {
var o = t.getScreenToWorldPoint(e, void 0);
return cc.v2(o.x, o.y);
}
}
return e;
};
__decorate([ a({
type: [ n.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ a({
tooltip: "完成的角度"
}) ], t.prototype, "endRotate", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../codebase/EventListenerMS": "EventListenerMS"
} ],
RotateCompoent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66583z7d0tAc6TSC5OHBvgw", "RotateCompoent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/EventListener"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.endRotate = 0;
t.touchPrePos = cc.v2(0, 0);
return t;
}
t.prototype.start = function() {};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
};
t.prototype.onDisable = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
};
t.prototype.touchMove = function(e) {
this.node.getContentSize();
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = (this.getWordPos(e.getLocation()), 
this.getWordPos(e.getPreviousLocation()), e.getDelta().sub(t)), n = this.touchPrePos.sub(t), c = 180 * o.angle(n) / 3.1415926, i = this.node.rotation + 20 * c;
this.node.rotation = i;
if (i >= this.endRotate) {
this.node.rotation = this.endRotate;
this.enabled = !1;
for (var a = 0, s = this.eventTouchs.slice().reverse(); a < s.length; a++) {
if (s[a].emit("RotaEnd", e, this)) break;
}
}
};
t.prototype.touchStart = function(e) {
this.touchPrePos = cc.v2(0, 0);
};
t.prototype.touchEnd = function(e) {};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) {
var o = t.getScreenToWorldPoint(e, void 0);
return cc.v2(o.x, o.y);
}
}
return e;
};
__decorate([ a({
type: [ n.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ a({
tooltip: "完成的角度"
}) ], t.prototype, "endRotate", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../codebase/EventListener": "EventListener"
} ],
RubControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "219fagHQvVN+o7NRjczy9m5", "RubControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./HandTouchEventMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = cc._decorator, a = i.ccclass, s = (i.property, 
function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {
this.node.getChildByName("finger").active = !1;
this.node.getChildByName("slime").stopAllActions();
this.node.getChildByName("slime").setScale(1);
this.node.getChildByName("slime").setPosition(cc.v2(0, 0));
this.node.getChildByName("slime").opacity = 0;
this.node.getChildByName("hand").opacity = 0;
this.node.getChildByName("hand").stopAllActions();
this.node.getChildByName("hand").setPosition(cc.v2(0, -110));
this.node.getChildByName("hand").getComponent(cc.Animation).stop();
this.node.getChildByName("hand").getComponent(cc.Animation).setCurrentTime(0);
this.node.getChildByName("hand").getComponent(n.default).destroyTouchEvent();
this.node.getChildByName("slime").getComponent(c.default).doShowAction();
this.node.getChildByName("hand").getComponent(c.default).doShowAction();
this.node.getChildByName("hand").getComponent(c.default).actionCallBack = function() {
this.node.getChildByName("hand").getComponent(n.default).registerTouchEvent();
this.node.getChildByName("finger").active = !0;
}.bind(this);
};
return t = __decorate([ a ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./HandTouchEventMS": "HandTouchEventMS"
} ],
RubController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10c66q+CmBBFJIalbPwCcIe", "RubController");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./HandTouchEvent"), c = e("./TipManager"), i = e("./PopupComponet"), a = e("../../common/Script/compoent/MoveIn"), s = e("../../common/Script/codebase/utils/CocosHelper"), r = e("../../common/Script/codebase/TransitionScene"), l = cc._decorator, d = l.ccclass, p = (l.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.count = 0;
t.photoNode = null;
t.filePath = null;
return t;
}
t.prototype.onLoad = function() {
cc.find("Canvas/hand_right/hand").getComponent(a.default).actionCallBack = function() {
cc.find("Canvas/hand_right/hand").getComponent(n.default).init();
cc.find("Canvas/hand_right/finger").active = !0;
}.bind(this);
cc.find("Canvas/hand_left/hand").getComponent(a.default).actionCallBack = function() {
cc.find("Canvas/hand_left/hand").getComponent(n.default).init();
cc.find("Canvas/hand_left/finger").active = !0;
}.bind(this);
};
t.prototype.mixFinish = function(e) {
c.default.getInstance().jumpTips();
var t = e.node, o = t.parent;
o.getChildByName("hand").getComponent(cc.Animation).stop();
o.getChildByName("hand").getComponent(n.default).destroyTouchEvent();
t.stopAllActions();
t.setScale(1);
o.getChildByName("hand").runAction(cc.moveBy(.5, cc.v2(0, -1e3)));
this.count = this.count + 1;
if (2 == this.count) {
cc.find("Canvas/hand_right").runAction(cc.moveTo(1, cc.v2(0, 70)));
cc.find("Canvas/hand_left").runAction(cc.sequence(cc.moveTo(1, cc.v2(0, 0)), cc.callFunc(function() {
cc.find("Canvas/hand_right").active = !1;
cc.find("Canvas/hand_left").opacity = 0;
cc.find("Canvas/mix").active = !0;
this.node.getChildByName("finish").getComponent(cc.ParticleSystem).resetSystem();
this.node.getChildByName("finish").getComponent(cc.AudioSource).play();
}.bind(this)), cc.delayTime(.5), cc.callFunc(function() {
r.default.changeScene("pullSlime0CS");
}.bind(this))));
}
};
t.prototype.touchBackBtn = function() {
r.default.changeScene("addMaterialCS");
};
t.prototype.camera = function() {
var e = this;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !1;
s.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(t) {
if (null != t) {
var o = new cc.SpriteFrame();
o.setTexture(t);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = o;
cc.find("photo", e.node).active = !0;
var n = cc.find("photo/mask", e.node), c = e.photoNode.getContentSize(), i = n.width, a = n.height, s = null, r = null;
if (i < c.width) {
s = i / c.width;
e.photoNode.setScale(s);
}
if (a < c.height) {
r = a / c.height;
e.photoNode.setScale(r);
}
s && r && (s > r ? e.photoNode.setScale(s) : e.photoNode.setScale(r));
n.addChild(e.photoNode);
cc.log(e.photoNode);
var l = t.readPixels(), d = t.width, p = t.height, u = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + u + ".png";
jsb.saveImageData(l, d, p, e.filePath) || (e.filePath = "");
}
});
this.node.getChildByName("btn_camera").getComponent(cc.AudioSource).play();
};
t.prototype.downloadImag = function() {
this.photoNode.destroy();
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var t = this.node.getChildByName("popup");
t.active = !0;
t.getComponent(i.default).showPopup();
t.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
t.getComponent(i.default).hidePopup();
}.bind(this))));
e ? t.getComponent(i.default).setTip("Photo downloaded successfully, please check in the album!") : t.getComponent(i.default).setTip("Picture download failed. Please check whether access to the album is open or not!");
}.bind(this)) : console.log("download failed!");
};
t.prototype.shareImage = function() {
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.photoNode.destroy();
cc.find("photo", this.node).active = !1;
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
"" != this.filePath ? jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("保存相册回调 " + e);
}) : console.log("download failed!");
};
t.prototype.closePhoto = function() {
this.photoNode.destroy();
cc.find("Canvas/btn_camera").getComponent(cc.Button).interactable = !0;
cc.find("Canvas/photo/btn_x").getComponent(cc.AudioSource).play();
this.node.getChildByName("photo").active = !1;
};
return t = __decorate([ d ], t);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../../common/Script/codebase/TransitionScene": "TransitionScene",
"../../common/Script/codebase/utils/CocosHelper": "CocosHelper",
"../../common/Script/compoent/MoveIn": "MoveIn",
"./HandTouchEvent": "HandTouchEvent",
"./PopupComponet": "PopupComponet",
"./TipManager": "TipManager"
} ],
SavePhotoMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e45b1w+pjdBMoWY3+x4wf8X", "SavePhotoMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.btn = null;
t.photoNode = null;
t.filePath = "";
t.imagetexture = null;
return t;
}
t.prototype.start = function() {
var e = this;
cc.loader.loadRes("sound/button_camera", cc.AudioClip, function(e, t) {
if (!e) {
cc.loader.setAutoReleaseRecursively(t, !0);
cc.audioEngine.playEffect(t, !1);
}
});
var t = this.node.getChildByName("photo_mask");
n.CocosHelper.captureNode(cc.Canvas.instance.node).then(function(o) {
if (null != o) {
e.imagetexture = o;
var n = new cc.SpriteFrame();
n.setTexture(o);
e.photoNode = new cc.Node();
e.photoNode.addComponent(cc.Sprite).spriteFrame = n;
var c = e.photoNode.getContentSize(), i = e.node.width, a = e.node.height;
a < c.height && e.photoNode.setScale(a / c.height);
i < c.width && e.photoNode.setScale(i / c.width);
console.log(i);
console.log(c.width);
console.log(i / c.width);
t.addChild(e.photoNode);
cc.log(e.photoNode);
var s = o.readPixels(), r = o.width, l = o.height, d = Date.parse(new Date().toString());
e.filePath = jsb.fileUtils.getWritablePath() + d + ".png";
jsb.saveImageData(s, r, l, e.filePath) || (e.filePath = "");
}
});
};
t.prototype.touchDown = function(e) {
cc.audioEngine.playEffect(this.btn, !1);
var t = e.target;
t.getComponent(cc.Button).interactable = !1;
if (null != this.imagetexture) if ("" != this.filePath) jsToCPP.getInstance().doRuntimePermission(this.filePath, 1, function(e) {
console.log("保存相册回调 " + e);
var o = this.node.getChildByName("popup_board");
o.active = !0;
o.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
o.active = !1;
t.getComponent(cc.Button).interactable = !0;
}.bind(this))));
o.getChildByName("label").getComponent(cc.Label).string = e ? "Photo downloaded successfully, please check in the album!" : "Picture download failed. Please check whether access to the album is open or not!";
}.bind(this)); else {
t.getComponent(cc.Button).interactable = !0;
console.log("download failed!");
} else t.getComponent(cc.Button).interactable = !0;
};
t.prototype.touchShare = function(e) {
cc.audioEngine.playEffect(this.btn, !1);
var t = e.target;
t.getComponent(cc.Button).interactable = !1;
var o = this;
if ("" != this.filePath) {
jsToCPP.getInstance().doRuntimePermission(this.filePath, 2, function(e) {
console.log("打开邮箱成功与否 " + e);
if (!e) {
console.log("打开邮箱失败");
var t = o.node.getChildByName("popup_tips");
t.active = !0;
t.scale = 0;
t.runAction(cc.scaleTo(.25, 1));
}
});
t.getComponent(cc.Button).interactable = !0;
} else {
console.log("download failed!");
t.getComponent(cc.Button).interactable = !0;
}
};
t.prototype.touchHide = function() {
cc.audioEngine.playEffect(this.btn, !1);
this.node.getChildByName("popup_tips").active = !1;
};
t.prototype.touchClose = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
this.node.removeFromParent();
};
__decorate([ a(cc.Label) ], t.prototype, "label", void 0);
__decorate([ a ], t.prototype, "text", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "btn", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS"
} ],
ScaleRootAdapterMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "294c9G7z8hHtL87JnnTIebq", "ScaleRootAdapterMS");
cc.Class({
extends: cc.Component,
properties: {},
setUp: function() {
var e = cc.view.getFrameSize(), t = cc.Canvas.instance.designResolution, o = e.width / t.width, n = e.height / t.height, c = 1;
o > n ? c = n / o : n > o && (c = o / n);
this.node.scaleX = c;
this.node.scaleY = c;
},
start: function() {
this.setUp();
},
lateUpdate: function() {
0;
}
});
cc._RF.pop();
}, {} ],
ScaleRootAdapter_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5b907LT8xVL4rzP91xpCYh2", "ScaleRootAdapter_my");
cc.Class({
extends: cc.Component,
properties: {},
setUp: function() {
var e = cc.view.getFrameSize(), t = cc.Canvas.instance.designResolution, o = e.width / t.width, n = e.height / t.height, c = 1;
o > n ? c = n / o : n > o && (c = o / n);
this.node.scaleX = c;
this.node.scaleY = c;
},
start: function() {
this.setUp();
},
lateUpdate: function() {
0;
}
});
cc._RF.pop();
}, {} ],
ScaleRootAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "59031Qom4pKPJyPMKM31OA1", "ScaleRootAdapter");
cc.Class({
extends: cc.Component,
properties: {},
setUp: function() {
var e = cc.view.getFrameSize(), t = cc.Canvas.instance.designResolution, o = e.width / t.width, n = e.height / t.height, c = 1;
o > n ? c = n / o : n > o && (c = o / n);
this.node.scaleX = c;
this.node.scaleY = c;
},
start: function() {
this.setUp();
},
lateUpdate: function() {
0;
}
});
cc._RF.pop();
}, {} ],
ShaderHelperMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "49d0auleM9GkaUgf+inMFoR", "ShaderHelperMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = n.executeInEditMode, s = function() {
function e() {
this.key = "";
this.value = 0;
}
__decorate([ i({
readonly: !0
}) ], e.prototype, "key", void 0);
__decorate([ i(cc.Float) ], e.prototype, "value", void 0);
return e = __decorate([ c("ShaderProperty") ], e);
}();
o.ShaderProperty = s;
var r = cc.Enum({}), l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._program = 0;
t._props = [];
t.material = null;
return t;
}
o = t;
Object.defineProperty(t.prototype, "program", {
get: function() {
return this._program;
},
set: function(e) {
if (this._program !== e) {
this._program = e;
this.applyEffect();
}
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "props", {
get: function() {
return this._props;
},
set: function(e) {
this._props = e;
this.applyEffect();
},
enumerable: !0,
configurable: !0
});
t.prototype.start = function() {
this.applyEffect();
};
t.prototype.applyEffect = function() {
var e = this.node.getComponent(cc.Sprite);
if (e) {
var t = o.effectAssets[this.program], n = new cc.Material();
!!t.shaders.find(function(e) {
return e.defines.find(function(e) {
return "USE_TEXTURE" === e.name;
});
}) && n.define("USE_TEXTURE", !0);
n.effectAsset = t;
n.name = t.name;
e.setMaterial(0, n);
this.material = e.getMaterial(0);
this.setProperty(t);
this.node.emit("effect-changed", this, this.material);
}
};
t.prototype.setProperty = function(e) {
var t = this;
this._props.length && this._props.forEach(function(e) {
return e.key && t.material.setProperty(e.key, e.value || 0);
});
cc.Class.Attr.setClassAttr(o, "props", "visible", !!this._props.length);
};
t.prototype.next = function() {
this.program = (this.program + 1) % o.effectAssets.length;
};
t.prototype.prev = function() {
0 !== this.program ? this.program = (this.program - 1) % o.effectAssets.length : this.program = o.effectAssets.length - 1;
};
var o;
t.effectAssets = null;
__decorate([ i ], t.prototype, "_program", void 0);
__decorate([ i({
type: r
}) ], t.prototype, "program", null);
__decorate([ i({
type: [ s ]
}) ], t.prototype, "_props", void 0);
__decorate([ i({
type: [ s ]
}) ], t.prototype, "props", null);
return t = o = __decorate([ c, a ], t);
}(cc.Component);
o.default = l;
cc.game.on(cc.game.EVENT_ENGINE_INITED, function() {
cc.dynamicAtlasManager.enabled = !1;
cc.loader.loadResDir("effect", cc.EffectAsset, function(e, t) {
l.effectAssets = t;
var o = l.effectAssets.map(function(e, t) {
return {
name: e._name,
value: t
};
});
cc.Class.Attr.setClassAttr(l, "program", "enumList", o);
});
});
cc._RF.pop();
}, {} ],
ShaderHelper: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df530LDfCBPRLICTgiHgOZt", "ShaderHelper");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = n.executeInEditMode, s = function() {
function e() {
this.key = "";
this.value = 0;
}
__decorate([ i({
readonly: !0
}) ], e.prototype, "key", void 0);
__decorate([ i(cc.Float) ], e.prototype, "value", void 0);
return e = __decorate([ c("ShaderProperty") ], e);
}();
o.ShaderProperty = s;
var r = cc.Enum({}), l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._program = 0;
t._props = [];
t.material = null;
return t;
}
o = t;
Object.defineProperty(t.prototype, "program", {
get: function() {
return this._program;
},
set: function(e) {
if (this._program !== e) {
this._program = e;
this.applyEffect();
}
},
enumerable: !0,
configurable: !0
});
Object.defineProperty(t.prototype, "props", {
get: function() {
return this._props;
},
set: function(e) {
this._props = e;
this.applyEffect();
},
enumerable: !0,
configurable: !0
});
t.prototype.start = function() {
this.applyEffect();
};
t.prototype.applyEffect = function() {
var e = this.node.getComponent(cc.Sprite);
if (e) {
var t = o.effectAssets[this.program], n = new cc.Material();
!!t.shaders.find(function(e) {
return e.defines.find(function(e) {
return "USE_TEXTURE" === e.name;
});
}) && n.define("USE_TEXTURE", !0);
n.effectAsset = t;
n.name = t.name;
e.setMaterial(0, n);
this.material = e.getMaterial(0);
this.setProperty(t);
this.node.emit("effect-changed", this, this.material);
}
};
t.prototype.setProperty = function(e) {
var t = this;
this._props.length && this._props.forEach(function(e) {
return e.key && t.material.setProperty(e.key, e.value || 0);
});
cc.Class.Attr.setClassAttr(o, "props", "visible", !!this._props.length);
};
t.prototype.next = function() {
this.program = (this.program + 1) % o.effectAssets.length;
};
t.prototype.prev = function() {
0 !== this.program ? this.program = (this.program - 1) % o.effectAssets.length : this.program = o.effectAssets.length - 1;
};
var o;
t.effectAssets = null;
__decorate([ i ], t.prototype, "_program", void 0);
__decorate([ i({
type: r
}) ], t.prototype, "program", null);
__decorate([ i({
type: [ s ]
}) ], t.prototype, "_props", void 0);
__decorate([ i({
type: [ s ]
}) ], t.prototype, "props", null);
return t = o = __decorate([ c, a ], t);
}(cc.Component);
o.default = l;
cc.game.on(cc.game.EVENT_ENGINE_INITED, function() {
cc.dynamicAtlasManager.enabled = !1;
cc.loader.loadResDir("effect", cc.EffectAsset, function(e, t) {
l.effectAssets = t;
var o = l.effectAssets.map(function(e, t) {
return {
name: e._name,
value: t
};
});
cc.Class.Attr.setClassAttr(l, "program", "enumList", o);
});
});
cc._RF.pop();
}, {} ],
ShaderMouseMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6a433CpyjtM9bwxXlpRQ676", "ShaderMouseMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.executeInEditMode, a = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
var e = this;
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
this.node.on("effect-changed", function(t, o) {
if (o.effect._properties.iResolution) {
var n = e.node.getBoundingBox().size;
o.effect.setProperty("iResolution", cc.v2(n.width, n.height));
e._material = o;
} else e._material = null;
}, this);
};
t.prototype.onDestroy = function() {
this.node.targetOff(this);
};
t.prototype._onTouchMove = function(e) {
this._material && this._material.effect.setProperty("mouse", e.getLocation());
};
return t = __decorate([ c, i ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
ShaderNameLabelMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4cd0ffQe75Ddod5dqnEgLHx", "ShaderNameLabelMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./ShaderHelperMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = c.executeInEditMode, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.shaderHelper = null;
return t;
}
t.prototype.start = function() {
var e = this;
this.shaderHelper && setTimeout(function() {
var t = n.default.effectAssets[e.shaderHelper.program];
e.getComponent(cc.Label).string = t.name;
}, 1e3);
};
__decorate([ a(n.default) ], t.prototype, "shaderHelper", void 0);
return t = __decorate([ i, s ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"./ShaderHelperMS": "ShaderHelperMS"
} ],
ShaderTimeMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5866cn/yXtO664c25gnwSdk", "ShaderTimeMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._max = 65535;
t.step = .01;
t._start = 0;
return t;
}
Object.defineProperty(t.prototype, "max", {
get: function() {
return this._max;
},
set: function(e) {
this._max = e;
},
enumerable: !0,
configurable: !0
});
t.prototype.update = function(e) {
this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];
this.node.active && this._material && this._material.effect._properties.time && this._setShaderTime(e);
};
t.prototype._setShaderTime = function(e) {
var t = this._start;
t > this.max && (t = 0);
t += this.step;
this._material.effect.setProperty("time", t);
this._start = t;
};
__decorate([ i ], t.prototype, "_max", void 0);
__decorate([ i ], t.prototype, "step", void 0);
__decorate([ i ], t.prototype, "max", null);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
ShaderTime: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "30c57JsFrRPcY1lr+MiJP52", "ShaderTime");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._max = 65535;
t.step = .01;
t._start = 0;
return t;
}
Object.defineProperty(t.prototype, "max", {
get: function() {
return this._max;
},
set: function(e) {
this._max = e;
},
enumerable: !0,
configurable: !0
});
t.prototype.update = function(e) {
this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];
this.node.active && this._material && this._material.effect._properties.time && this._setShaderTime(e);
};
t.prototype._setShaderTime = function(e) {
var t = this._start;
t > this.max && (t = 0);
t += this.step;
this._material.effect.setProperty("time", t);
this._start = t;
};
__decorate([ i ], t.prototype, "_max", void 0);
__decorate([ i ], t.prototype, "step", void 0);
__decorate([ i ], t.prototype, "max", null);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
SlapControllerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0f850aC9ARMKL6BovgwhZUY", "SlapControllerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/compoent/MoveInMS"), c = e("./TipManagerMS"), i = cc._decorator, a = i.ccclass, s = (i.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.photoNode = null;
t.filePath = null;
t.touchNum = 0;
return t;
}
t.prototype.onLoad = function() {
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
this.init();
}.bind(this))));
};
t.prototype.init = function() {
this.destroyTouchEvent();
this.touchNum = 0;
this.node.getChildByName("slime").stopAllActions();
this.node.getChildByName("slime").setScale(1);
this.node.getChildByName("slime").setPosition(cc.v2(0, 0));
this.node.getChildByName("slime").opacity = 0;
this.node.getChildByName("slime").getComponent(n.default).enabled = !0;
this.node.getChildByName("slime").getComponent(n.default).doShowAction();
this.node.getChildByName("tipClick").active = !1;
cc.find("slime/slime", this.node).children.forEach(function(e) {
"shadow" == e.name && e.destroy();
});
this.node.getChildByName("slime").getComponent(n.default).actionCallBack = function() {
cc.log(this.node.getChildByName("slime").position);
this.registerTouchEvent();
this.node.getChildByName("tipClick").active = !0;
}.bind(this);
};
t.prototype.onTouchStart = function(e) {
this.node.getChildByName("tipClick").active = !1;
var t = e.getTouches(), o = this.node.convertToNodeSpaceAR(t[0].getStartLocation()), n = cc.find("slime/slime", this.node).convertToNodeSpaceAR(t[0].getStartLocation()), i = cc.find("slime/slime", this.node).getComponent(cc.PolygonCollider);
if (cc.Intersection.pointInPolygon(n, i.points)) {
this.touchNum = this.touchNum + 1;
this.destroyTouchEvent();
this.touchNum % 3 == 0 && c.default.getInstance().jumpTips();
this.node.getChildByName("hand").runAction(cc.sequence(cc.moveTo(.5, o), cc.callFunc(function() {
this.node.getChildByName("slime").runAction(cc.sequence(cc.scaleTo(.1, 1.05, .95), cc.scaleTo(.1, .95, 1.05), cc.scaleTo(.1, 1.02, .98), cc.scaleTo(.1, .98, 1.02), cc.scaleTo(.1, 1, 1)));
this.node.getChildByName("slime").getComponent(cc.AudioSource).play();
var e = cc.instantiate(cc.find("slime/slime/hand_shadow", this.node));
e.active = !0;
e.name = "shadow";
e.parent = this.node.getChildByName("slime").getChildByName("slime");
e.setPosition(n);
e.runAction(cc.fadeTo(4, 0));
}.bind(this)), cc.moveTo(.5, cc.v2(0, -400)), cc.callFunc(function() {
this.registerTouchEvent();
}.bind(this))));
}
};
t.prototype.destroyTouchEvent = function() {
this.node.getChildByName("slime").off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
t.prototype.registerTouchEvent = function() {
this.node.getChildByName("slime").on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
return t = __decorate([ a ], t);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./TipManagerMS": "TipManagerMS"
} ],
SlimeTouchEventMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ecd7DTCt9LmZqfP+w1Y72x", "SlimeTouchEventMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.firstPlay = !0;
return t;
}
t.prototype.registerTouchEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function() {
cc.find("Canvas/playLayer5/arrow_top").active = !1;
cc.find("Canvas/playLayer5/arrow_bottom").active = !1;
this.node.getComponent(cc.AudioSource).play();
cc.log(this.firstPlay);
if (this.firstPlay) {
if (this.node.getComponent(cc.Animation).getAnimationState("play0").isPaused) {
this.node.getComponent(cc.Animation).resume();
cc.find("Canvas/playLayer5/progress").getComponent(cc.Animation).resume();
} else {
this.node.getComponent(cc.Animation).play("play0");
cc.find("Canvas/playLayer5/progress").getComponent(cc.Animation).play("grow0");
}
} else {
if (this.node.getComponent(cc.Animation).getAnimationState("play1").isPaused) {
this.node.getComponent(cc.Animation).resume();
cc.find("Canvas/playLayer5/progress").getComponent(cc.Animation).resume();
} else {
this.node.getComponent(cc.Animation).play("play1");
cc.find("Canvas/playLayer5/progress").getComponent(cc.Animation).play("grow1");
}
}
};
t.prototype.onTouchMove = function(e) {};
t.prototype.onTouchEnd = function() {
this._touchEnd();
};
t.prototype.onTouchCancle = function() {
this._touchEnd();
};
t.prototype._touchEnd = function() {
this.node.getComponent(cc.AudioSource).stop();
this.node.getComponent(cc.Animation).pause();
cc.find("Canvas/playLayer5/progress").getComponent(cc.Animation).pause();
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
SlimeTouchEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dca68vdNSJEGq1JFpHlbHlN", "SlimeTouchEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
this.registerTouchEvent();
};
t.prototype.registerTouchEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.destroyTouchEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
};
t.prototype.onTouchStart = function(e) {
cc.find("Canvas/hint").active = !1;
var t = this.node.getComponent(cc.Animation).getAnimationState("coilSlime");
t.isPlaying && this.node.getComponent(cc.Animation).pause();
console.log(t.isPaused);
t.isPaused ? this.node.getComponent(cc.Animation).resume() : this.node.getComponent(cc.Animation).play("coilSlime");
};
t.prototype.onTouchMove = function(e) {
cc.find("Canvas/hint").active = !1;
};
t.prototype.onTouchEnd = function() {
this._touchEnd();
};
t.prototype.onTouchCancle = function() {
this._touchEnd();
};
t.prototype._touchEnd = function() {
this.node.getComponent(cc.Animation).pause();
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
SpoonTouchEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "422e8fnOtdKAbzfVHE81AEo", "SpoonTouchEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/Script/CombinedComponent/MixComponent"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mixNode = null;
return t;
}
t.prototype.spoonTouchStart = function() {
this.node.parent.getChildByName("tipRotate").active = !1;
this.node.getChildByName("spoon0").active = !1;
this.mixNode.getComponent(n.default).startMix();
var e = cc.scaleTo(.5, 1.05, .95), t = cc.scaleTo(.5, .95, 1.05);
this.mixNode.runAction(cc.repeatForever(cc.sequence(e, t)));
this.mixNode.runAction(cc.repeatForever(cc.rotateBy(20, 360)));
};
t.prototype.spoonTouchEnd = function() {
this.node.getChildByName("spoon0").active = !0;
this.mixNode.getComponent(n.default).stopMix();
this.mixNode.stopAllActions();
};
__decorate([ a(cc.Node) ], t.prototype, "mixNode", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../../common/Script/CombinedComponent/MixComponent": "MixComponent"
} ],
SpriteDragEventManagerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "10f44hDMrxPjI6t/hCoOqNP", "SpriteDragEventManagerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("../utils/NodeCompMS"), i = e("./DragUtilMS"), a = e("./DragEventListenerMS");
(function(e) {
e[e.EndInTouchPos = 0] = "EndInTouchPos";
e[e.BackToStart = 1] = "BackToStart";
e[e.LimitInTarget = 2] = "LimitInTarget";
})(n = o.DragType || (o.DragType = {}));
var s = cc._decorator, r = s.ccclass, l = s.property, d = s.executionOrder, p = s.disallowMultiple, u = (s.menu, 
s.executeInEditMode), h = s.requireComponent, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.targetCollider = [];
t.touch_collider = null;
t.moveNode = null;
t.self_collider = null;
t.isSwallowTouches = !0;
t.isDragOriginPoint = !1;
t.dragOffset = cc.Vec2.ZERO;
t.isDragToTop = !1;
t.dragScale = null;
t.dragRotate = null;
t.dragType = n.EndInTouchPos;
t.backDuring = .4;
t.backEasingType = i.TweenType.backOut;
t.isTouch = !1;
t.isDraging = !1;
t.isCanDrag = !0;
t.m_dragMoveDamp = 0;
t.backTween = null;
t._listener = null;
t._lisCancele = null;
t._moveDeta = cc.Vec2.ZERO;
t.isMoveOut = !1;
return t;
}
t.prototype.initData = function() {
cc.director.getCollisionManager().enabled = !0;
if (null == this.touch_collider) {
var e = this.node.addComponent(cc.BoxCollider), t = this.node.getAnchorPoint(), o = this.node.getContentSize();
e.offset = new cc.Vec2((.5 - t.x) * o.width, (.5 - t.y) * o.height);
e.size = this.node.getContentSize();
this.touch_collider = e;
}
null == this.self_collider && (this.self_collider = this.touch_collider);
null == this.moveNode && (this.moveNode = this.node);
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
null == this.dragScale && (this.dragScale = this.m_originalScale);
null == this.dragRotate && (this.dragRotate = this.m_originalRotate);
this.backEasing = Object.keys(i.TweenType)[this.backEasingType];
};
t.prototype.cancle = function(e, t) {
var o = this.node;
t.type = SpriteDrag.OnApplicationFocus;
t.touch = e;
t.bubbles = !0;
o.dispatchEvent(t);
};
t.prototype.hitTest = function(e, t) {
if (null != t) {
if (null == this._listener) {
this._listener = t;
this._lisCancele = t.onTouchCancelled;
}
t.onTouchCancelled = this.cancle.bind(this);
}
return i.DragUtil.pointInCollide(this.getWordPos(e), this.touch_collider);
};
t.prototype.initDataInEDITOR = function() {
null == this.dragScale && (this.dragScale = new cc.Vec2(this.node.scaleX, this.node.scaleY));
null == this.dragRotate && (this.dragRotate = this.node.rotation);
};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) {
var o = t.getScreenToWorldPoint(e, void 0);
return cc.v2(o.x, o.y);
}
}
return e;
};
t.prototype.geOriginalPos = function() {
return this.m_originalPos;
};
t.prototype.saveOrignialTransfor = function() {
if (null != this.moveNode) {
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
}
};
t.prototype.getInTargetIndex = function(e, t) {
void 0 === e && (e = cc.Vec2.ZERO);
void 0 === t && (t = cc.Vec2.ZERO);
for (var o = 0; o < this.targetCollider.length; o++) {
var n = this.targetCollider[o];
if (i.DragUtil.collideInCollie(this.self_collider, n, e, t)) return o;
}
return -1;
};
t.prototype.getOnTargetIndex = function() {
for (var e = 0; e < this.targetCollider.length; e++) {
var t = this.targetCollider[e];
if (i.DragUtil.collideOnCollie(this.self_collider, t)) return e;
}
return -1;
};
t.prototype.backToOriginal = function(e) {
var t = this;
if (null != this.moveNode) {
null != this.backTween ? this.backTween.stop() : this.backTween = new cc.Tween();
this.backTween.target(this.moveNode).to(this.backDuring, {
position: this.m_originalPos,
scaleX: this.m_originalScale.x,
scaleY: this.m_originalScale.y,
rotation: this.m_originalRotate
}, {
progress: null,
easing: this.backEasing
}).call(function() {
t.backTween = null;
t.isCanDrag = !0;
t.isDragToTop && null != t.moveNode && t.moveNode.setSiblingIndex(t.m_originalSiblingIndex);
if (null != t.eventTouchs) for (var o = 0, n = t.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(a.DragEventType.TouchCancle, e, t)) break;
}
}).start();
}
};
t.prototype.onDragBegin = function(e) {
if (null != this.backTween) {
this.backTween.stop();
this.backTween = null;
}
this.m_dragMoveDamp = .3;
this.isDragToTop && this.moveNode.setSiblingIndex(500);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.DragBegin, e, this)) break;
}
};
t.prototype.onDrag = function(e) {
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.Draging, e, this)) break;
}
};
t.prototype.onTouchCancle = function(e) {
if (this.isDraging && this.dragType == n.BackToStart) this.backToOriginal(e); else {
this.isCanDrag = !0;
this.isDragToTop && this.isDraging && this.moveNode.setSiblingIndex(this.m_originalSiblingIndex);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.TouchCancle, e, this)) break;
}
}
};
t.prototype.onTouchEnd = function(e) {
this.isCanDrag = !0;
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.TouchEnd, e, this)) break;
}
};
t.prototype.touchStart = function(e) {
if (this.isCanDrag) {
var t = this.getWordPos(e.getLocation());
if (i.DragUtil.pointInCollide(t, this.touch_collider)) {
this._moveDeta = cc.Vec2.ZERO;
this.isMoveOut = !1;
this.isDraging = !1;
this.isTouch = !0;
this.isCanDrag = !0;
if (this.isSwallowTouches) {
e.stopPropagation();
for (var o = 0, n = this.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(a.DragEventType.TouchDown, e, this)) break;
}
}
}
}
};
t.prototype.touchMove = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isSwallowTouches && e.stopPropagation();
var t = this.getWordPos(e.getLocation()), o = this.getWordPos(e.getPreviousLocation()), c = this.moveNode.parent.convertToNodeSpaceAR(t), a = this.moveNode.parent.convertToNodeSpaceAR(o);
if (this.dragType == n.LimitInTarget) {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = c.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this._moveDeta.addSelf(c.sub(a));
this.isMoveOut && i.DragUtil.pointInCollide(t, this.touch_collider) && (this.m_dragOffset = c.sub(this.moveNode.position));
var s = this.moveNode.position.add(this.m_dragOffset), r = this.moveNode.position.add(this.m_dragOffset).lerp(c, this.m_dragMoveDamp);
if (-1 != this.getInTargetIndex(r.sub(s))) {
this._moveDeta = cc.Vec2.ZERO;
this.cacheMoveToPos = c;
this.isMoveOut = !1;
} else {
this.cacheMoveToPos = s;
this.isMoveOut = !0;
}
} else {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = c.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this.cacheMoveToPos = c;
}
this.onDrag(e);
}
};
t.prototype.touchEnd = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
switch (this.dragType) {
case n.BackToStart:
-1 == this.getOnTargetIndex() ? this.onTouchCancle(e) : this.onTouchEnd(e);
break;

case n.EndInTouchPos:
this.onTouchEnd(e);
}
this.isDraging = !1;
}
};
t.prototype.touchCancel = function(e) {
if (this.isTouch && this.isCanDrag) {
cc.log(SpriteDrag.OnApplicationFocus);
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
this.onTouchCancle(e);
this.isDraging = !1;
}
};
t.prototype.disposeLis = function() {
if (null != this._listener && null != this._lisCancele) {
this._listener.onTouchCancelled = this._lisCancele;
this._listener = null;
this._lisCancele = null;
}
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.on(SpriteDrag.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onDisable = function() {
this.isTouch = !1;
this.disposeLis();
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.off(SpriteDrag.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onLoad = function() {
this.initData();
};
t.prototype.start = function() {
this.initData();
};
t.prototype.destroy = function() {
this.disposeLis();
return e.prototype.destroy.call(this);
};
t.prototype.onDestroy = function() {
this.disposeLis();
};
t.prototype.update = function(e) {
if (1 == this.isDraging && 1 == this.isTouch) {
this.m_dragMoveDamp < 1 && (this.m_dragMoveDamp += .01);
var t = this.moveNode.position.add(this.m_dragOffset).lerp(this.cacheMoveToPos, this.m_dragMoveDamp);
this.moveNode.setPosition(t.sub(this.m_dragOffset));
var o = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY).lerp(this.dragScale, this.m_dragMoveDamp);
this.moveNode.setScale(o.x, o.y);
var n = this.moveNode.rotation, c = cc.misc.lerp(n, this.dragRotate, this.m_dragMoveDamp);
this.moveNode.angle = -c;
}
};
t.OnApplicationFocus = "OnApplicationFocus";
__decorate([ l({
type: [ a.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ l({
type: [ cc.Collider ],
tooltip: "拖动到的目标区域"
}) ], t.prototype, "targetCollider", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应TOUCH_START的范围,默认为结点自身大小,超过节点自身大小无用"
}) ], t.prototype, "touch_collider", void 0);
__decorate([ l({
type: cc.Node,
tooltip: "拖动的结点，默认为当前结点"
}) ], t.prototype, "moveNode", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应与目标区域\b碰撞的范围,默认touch_collider"
}) ], t.prototype, "self_collider", void 0);
__decorate([ l({}) ], t.prototype, "isSwallowTouches", void 0);
__decorate([ l({
tooltip: "在拖动时是否固定moveNode的原点"
}) ], t.prototype, "isDragOriginPoint", void 0);
__decorate([ l({
tooltip: "拖动时的偏移值",
visible: function() {
return this.isDragOriginPoint;
}
}) ], t.prototype, "dragOffset", void 0);
__decorate([ l({
tooltip: "拖动时是否显示到最上层"
}) ], t.prototype, "isDragToTop", void 0);
__decorate([ l({
tooltip: "拖动时的缩放,默认为节点当前scale"
}) ], t.prototype, "dragScale", void 0);
__decorate([ l({
tooltip: "拖动时的旋转,默认为节点当前Rotation"
}) ], t.prototype, "dragRotate", void 0);
__decorate([ l({
type: cc.Enum(n),
tooltip: "返回时效果"
}) ], t.prototype, "dragType", void 0);
__decorate([ l({
tooltip: "效果时间",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backDuring", void 0);
__decorate([ l({
type: cc.Enum(i.TweenType),
tooltip: "返回时Easing效果",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backEasingType", void 0);
return t = __decorate([ r, d(1), p(), u(), h(c) ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../utils/NodeCompMS": "NodeCompMS",
"./DragEventListenerMS": "DragEventListenerMS",
"./DragUtilMS": "DragUtilMS"
} ],
SpriteDragEventManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9686cIDKGVDOaIx+OwlOYgh", "SpriteDragEventManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("../utils/NodeComp"), i = e("./DragUtil"), a = e("./DragEventListener");
(function(e) {
e[e.EndInTouchPos = 0] = "EndInTouchPos";
e[e.BackToStart = 1] = "BackToStart";
e[e.LimitInTarget = 2] = "LimitInTarget";
})(n = o.DragType || (o.DragType = {}));
var s = cc._decorator, r = s.ccclass, l = s.property, d = s.executionOrder, p = s.disallowMultiple, u = (s.menu, 
s.executeInEditMode), h = s.requireComponent, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.targetCollider = [];
t.touch_collider = null;
t.moveNode = null;
t.self_collider = null;
t.isSwallowTouches = !0;
t.isDragOriginPoint = !1;
t.dragOffset = cc.Vec2.ZERO;
t.isDragToTop = !1;
t.dragScale = null;
t.dragRotate = null;
t.dragType = n.EndInTouchPos;
t.backDuring = .4;
t.backEasingType = i.TweenType.backOut;
t.isTouch = !1;
t.isDraging = !1;
t.isCanDrag = !0;
t.m_dragMoveDamp = 0;
t.backTween = null;
t._listener = null;
t._lisCancele = null;
t._moveDeta = cc.Vec2.ZERO;
t.isMoveOut = !1;
return t;
}
t.prototype.initData = function() {
cc.director.getCollisionManager().enabled = !0;
if (null == this.touch_collider) {
var e = this.node.addComponent(cc.BoxCollider), t = this.node.getAnchorPoint(), o = this.node.getContentSize();
e.offset = new cc.Vec2((.5 - t.x) * o.width, (.5 - t.y) * o.height);
e.size = this.node.getContentSize();
this.touch_collider = e;
}
null == this.self_collider && (this.self_collider = this.touch_collider);
null == this.moveNode && (this.moveNode = this.node);
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
null == this.dragScale && (this.dragScale = this.m_originalScale);
null == this.dragRotate && (this.dragRotate = this.m_originalRotate);
this.backEasing = Object.keys(i.TweenType)[this.backEasingType];
};
t.prototype.cancle = function(e, t) {
var o = this.node;
t.type = SpriteDrag.OnApplicationFocus;
t.touch = e;
t.bubbles = !0;
o.dispatchEvent(t);
};
t.prototype.hitTest = function(e, t) {
if (null != t) {
if (null == this._listener) {
this._listener = t;
this._lisCancele = t.onTouchCancelled;
}
t.onTouchCancelled = this.cancle.bind(this);
}
return i.DragUtil.pointInCollide(this.getWordPos(e), this.touch_collider);
};
t.prototype.initDataInEDITOR = function() {
null == this.dragScale && (this.dragScale = new cc.Vec2(this.node.scaleX, this.node.scaleY));
null == this.dragRotate && (this.dragRotate = this.node.rotation);
};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) {
var o = t.getScreenToWorldPoint(e, void 0);
return cc.v2(o.x, o.y);
}
}
return e;
};
t.prototype.geOriginalPos = function() {
return this.m_originalPos;
};
t.prototype.saveOrignialTransfor = function() {
if (null != this.moveNode) {
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
}
};
t.prototype.getInTargetIndex = function(e, t) {
void 0 === e && (e = cc.Vec2.ZERO);
void 0 === t && (t = cc.Vec2.ZERO);
for (var o = 0; o < this.targetCollider.length; o++) {
var n = this.targetCollider[o];
if (i.DragUtil.collideInCollie(this.self_collider, n, e, t)) return o;
}
return -1;
};
t.prototype.getOnTargetIndex = function() {
for (var e = 0; e < this.targetCollider.length; e++) {
var t = this.targetCollider[e];
if (i.DragUtil.collideOnCollie(this.self_collider, t)) return e;
}
return -1;
};
t.prototype.backToOriginal = function(e) {
var t = this;
if (null != this.moveNode) {
null != this.backTween ? this.backTween.stop() : this.backTween = new cc.Tween();
this.backTween.target(this.moveNode).to(this.backDuring, {
position: this.m_originalPos,
scaleX: this.m_originalScale.x,
scaleY: this.m_originalScale.y,
rotation: this.m_originalRotate
}, {
progress: null,
easing: this.backEasing
}).call(function() {
t.backTween = null;
t.isCanDrag = !0;
t.isDragToTop && null != t.moveNode && t.moveNode.setSiblingIndex(t.m_originalSiblingIndex);
if (null != t.eventTouchs) for (var o = 0, n = t.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(a.DragEventType.TouchCancle, e, t)) break;
}
}).start();
}
};
t.prototype.onDragBegin = function(e) {
if (null != this.backTween) {
this.backTween.stop();
this.backTween = null;
}
this.m_dragMoveDamp = .3;
this.isDragToTop && this.moveNode.setSiblingIndex(500);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.DragBegin, e, this)) break;
}
};
t.prototype.onDrag = function(e) {
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.Draging, e, this)) break;
}
};
t.prototype.onTouchCancle = function(e) {
if (this.isDraging && this.dragType == n.BackToStart) this.backToOriginal(e); else {
this.isCanDrag = !0;
this.isDragToTop && this.isDraging && this.moveNode.setSiblingIndex(this.m_originalSiblingIndex);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.TouchCancle, e, this)) break;
}
}
};
t.prototype.onTouchEnd = function(e) {
this.isCanDrag = !0;
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(a.DragEventType.TouchEnd, e, this)) break;
}
};
t.prototype.touchStart = function(e) {
if (this.isCanDrag) {
var t = this.getWordPos(e.getLocation());
if (i.DragUtil.pointInCollide(t, this.touch_collider)) {
this._moveDeta = cc.Vec2.ZERO;
this.isMoveOut = !1;
this.isDraging = !1;
this.isTouch = !0;
this.isCanDrag = !0;
if (this.isSwallowTouches) {
e.stopPropagation();
for (var o = 0, n = this.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(a.DragEventType.TouchDown, e, this)) break;
}
}
}
}
};
t.prototype.touchMove = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isSwallowTouches && e.stopPropagation();
var t = this.getWordPos(e.getLocation()), o = this.getWordPos(e.getPreviousLocation()), c = this.moveNode.parent.convertToNodeSpaceAR(t), a = this.moveNode.parent.convertToNodeSpaceAR(o);
if (this.dragType == n.LimitInTarget) {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = c.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this._moveDeta.addSelf(c.sub(a));
this.isMoveOut && i.DragUtil.pointInCollide(t, this.touch_collider) && (this.m_dragOffset = c.sub(this.moveNode.position));
var s = this.moveNode.position.add(this.m_dragOffset), r = this.moveNode.position.add(this.m_dragOffset).lerp(c, this.m_dragMoveDamp);
if (-1 != this.getInTargetIndex(r.sub(s))) {
this._moveDeta = cc.Vec2.ZERO;
this.cacheMoveToPos = c;
this.isMoveOut = !1;
} else {
this.cacheMoveToPos = s;
this.isMoveOut = !0;
}
} else {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = c.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this.cacheMoveToPos = c;
}
this.onDrag(e);
}
};
t.prototype.touchEnd = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
switch (this.dragType) {
case n.BackToStart:
-1 == this.getOnTargetIndex() ? this.onTouchCancle(e) : this.onTouchEnd(e);
break;

case n.EndInTouchPos:
this.onTouchEnd(e);
}
this.isDraging = !1;
}
};
t.prototype.touchCancel = function(e) {
if (this.isTouch && this.isCanDrag) {
cc.log(SpriteDrag.OnApplicationFocus);
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
this.onTouchCancle(e);
this.isDraging = !1;
}
};
t.prototype.disposeLis = function() {
if (null != this._listener && null != this._lisCancele) {
this._listener.onTouchCancelled = this._lisCancele;
this._listener = null;
this._lisCancele = null;
}
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.on(SpriteDrag.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onDisable = function() {
this.isTouch = !1;
this.disposeLis();
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.off(SpriteDrag.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onLoad = function() {
this.initData();
};
t.prototype.start = function() {
this.initData();
};
t.prototype.destroy = function() {
this.disposeLis();
return e.prototype.destroy.call(this);
};
t.prototype.onDestroy = function() {
this.disposeLis();
};
t.prototype.update = function(e) {
if (1 == this.isDraging && 1 == this.isTouch) {
this.m_dragMoveDamp < 1 && (this.m_dragMoveDamp += .01);
var t = this.moveNode.position.add(this.m_dragOffset).lerp(this.cacheMoveToPos, this.m_dragMoveDamp);
this.moveNode.setPosition(t.sub(this.m_dragOffset));
var o = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY).lerp(this.dragScale, this.m_dragMoveDamp);
this.moveNode.setScale(o.x, o.y);
var n = this.moveNode.rotation, c = cc.misc.lerp(n, this.dragRotate, this.m_dragMoveDamp);
this.moveNode.angle = -c;
}
};
t.OnApplicationFocus = "OnApplicationFocus";
__decorate([ l({
type: [ a.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ l({
type: [ cc.Collider ],
tooltip: "拖动到的目标区域"
}) ], t.prototype, "targetCollider", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应TOUCH_START的范围,默认为结点自身大小,超过节点自身大小无用"
}) ], t.prototype, "touch_collider", void 0);
__decorate([ l({
type: cc.Node,
tooltip: "拖动的结点，默认为当前结点"
}) ], t.prototype, "moveNode", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应与目标区域\b碰撞的范围,默认touch_collider"
}) ], t.prototype, "self_collider", void 0);
__decorate([ l({}) ], t.prototype, "isSwallowTouches", void 0);
__decorate([ l({
tooltip: "在拖动时是否固定moveNode的原点"
}) ], t.prototype, "isDragOriginPoint", void 0);
__decorate([ l({
tooltip: "拖动时的偏移值",
visible: function() {
return this.isDragOriginPoint;
}
}) ], t.prototype, "dragOffset", void 0);
__decorate([ l({
tooltip: "拖动时是否显示到最上层"
}) ], t.prototype, "isDragToTop", void 0);
__decorate([ l({
tooltip: "拖动时的缩放,默认为节点当前scale"
}) ], t.prototype, "dragScale", void 0);
__decorate([ l({
tooltip: "拖动时的旋转,默认为节点当前Rotation"
}) ], t.prototype, "dragRotate", void 0);
__decorate([ l({
type: cc.Enum(n),
tooltip: "返回时效果"
}) ], t.prototype, "dragType", void 0);
__decorate([ l({
tooltip: "效果时间",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backDuring", void 0);
__decorate([ l({
type: cc.Enum(i.TweenType),
tooltip: "返回时Easing效果",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backEasingType", void 0);
return t = __decorate([ r, d(1), p(), u(), h(c) ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../utils/NodeComp": "NodeComp",
"./DragEventListener": "DragEventListener",
"./DragUtil": "DragUtil"
} ],
SpriteDragMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1b7e26x1WJDpaWmf03OoDFR", "SpriteDragMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("./DragUtilMS"), i = e("./DragEventListenerMS"), a = e("../utils/NodeCompMS");
(function(e) {
e[e.EndInTouchPos = 0] = "EndInTouchPos";
e[e.BackToStart = 1] = "BackToStart";
e[e.LimitInTarget = 2] = "LimitInTarget";
})(n = o.DragType || (o.DragType = {}));
var s = cc._decorator, r = s.ccclass, l = s.property, d = s.executionOrder, p = s.disallowMultiple, u = s.menu, h = s.executeInEditMode, f = s.requireComponent, m = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.targetCollider = [];
t.touch_collider = null;
t.moveNode = null;
t.self_collider = null;
t.isSwallowTouches = !0;
t.isDragOriginPoint = !1;
t.dragOffset = cc.Vec2.ZERO;
t.isDragToTop = !1;
t.dragScale = null;
t.dragRotate = null;
t.dragType = n.EndInTouchPos;
t.backDuring = .4;
t.backEasingType = c.TweenType.backOut;
t.isTouch = !1;
t.isDraging = !1;
t.isCanDrag = !0;
t.m_dragMoveDamp = 0;
t.backTween = null;
t._listener = null;
t._lisCancele = null;
t._moveDeta = cc.Vec2.ZERO;
t.isMoveOut = !1;
return t;
}
o = t;
t.prototype.initData = function() {
cc.director.getCollisionManager().enabled = !0;
if (null == this.touch_collider) {
var e = this.node.addComponent(cc.BoxCollider), t = this.node.getAnchorPoint(), o = this.node.getContentSize();
e.offset = new cc.Vec2((.5 - t.x) * o.width, (.5 - t.y) * o.height);
e.size = this.node.getContentSize();
this.touch_collider = e;
}
null == this.self_collider && (this.self_collider = this.touch_collider);
null == this.moveNode && (this.moveNode = this.node);
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
null != this.dragScale && 0 != this.dragScale.x || (this.dragScale = this.m_originalScale);
null == this.dragRotate && (this.dragRotate = this.m_originalRotate);
this.backEasing = Object.keys(c.TweenType)[this.backEasingType];
};
t.prototype.cancle = function(e, t) {
var n = this.node;
t.type = o.OnApplicationFocus;
t.touch = e;
t.bubbles = !0;
n.dispatchEvent(t);
};
t.prototype.hitTest = function(e, t) {
if (null != t) {
if (null == this._listener) {
this._listener = t;
this._lisCancele = t.onTouchCancelled;
}
t.onTouchCancelled = this.cancle.bind(this);
}
return c.DragUtil.pointInCollide(this.getWordPos(e), this.touch_collider);
};
t.prototype.initDataInEDITOR = function() {
null == this.dragScale && (this.dragScale = new cc.Vec2(this.node.scaleX, this.node.scaleY));
null == this.dragRotate && (this.dragRotate = this.node.rotation);
};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) {
var o = t.getScreenToWorldPoint(e, void 0);
return cc.v2(o.x, o.y);
}
}
return e;
};
t.prototype.geOriginalPos = function() {
return this.m_originalPos;
};
t.prototype.saveOrignialTransfor = function() {
if (null != this.moveNode) {
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = this.moveNode.rotation;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
}
};
t.prototype.getInTargetIndex = function(e, t) {
void 0 === e && (e = cc.Vec2.ZERO);
void 0 === t && (t = cc.Vec2.ZERO);
for (var o = 0; o < this.targetCollider.length; o++) {
var n = this.targetCollider[o];
if (c.DragUtil.collideInCollie(this.self_collider, n, e, t)) return o;
}
return -1;
};
t.prototype.getOnTargetIndex = function() {
for (var e = 0; e < this.targetCollider.length; e++) {
var t = this.targetCollider[e];
if (c.DragUtil.collideOnCollie(this.self_collider, t)) return e;
}
return -1;
};
t.prototype.backToOriginal = function(e) {
var t = this;
if (null != this.moveNode) {
null != this.backTween ? this.backTween.stop() : this.backTween = new cc.Tween();
this.backTween.target(this.moveNode).to(this.backDuring, {
position: this.m_originalPos,
scaleX: this.m_originalScale.x,
scaleY: this.m_originalScale.y,
rotation: this.m_originalRotate
}, {
progress: null,
easing: this.backEasing
}).call(function() {
t.backTween = null;
t.isCanDrag = !0;
t.isDragToTop && null != t.moveNode && t.moveNode.setSiblingIndex(t.m_originalSiblingIndex);
if (null != t.eventTouchs) for (var o = 0, n = t.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(i.DragEventType.TouchCancle, e, t)) break;
}
}).start();
}
};
t.prototype.onDragBegin = function(e) {
if (null != this.backTween) {
this.backTween.stop();
this.backTween = null;
}
this.m_dragMoveDamp = .3;
this.isDragToTop && this.moveNode.setSiblingIndex(500);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.DragBegin, e, this)) break;
}
};
t.prototype.onDrag = function(e) {
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.Draging, e, this)) break;
}
};
t.prototype.onTouchCancle = function(e) {
if (this.isDraging && this.dragType == n.BackToStart) this.backToOriginal(e); else {
this.isCanDrag = !0;
this.isDragToTop && this.isDraging && this.moveNode.setSiblingIndex(this.m_originalSiblingIndex);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.TouchCancle, e, this)) break;
}
}
};
t.prototype.onTouchEnd = function(e) {
this.isCanDrag = !0;
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.TouchEnd, e, this)) break;
}
};
t.prototype.touchStart = function(e) {
if (this.isCanDrag) {
var t = this.getWordPos(e.getLocation());
if (c.DragUtil.pointInCollide(t, this.touch_collider)) {
this._moveDeta = cc.Vec2.ZERO;
this.isMoveOut = !1;
this.isDraging = !1;
this.isTouch = !0;
this.isCanDrag = !0;
if (this.isSwallowTouches) {
e.stopPropagation();
for (var o = 0, n = this.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(i.DragEventType.TouchDown, e, this)) break;
}
}
}
}
};
t.prototype.touchMove = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isSwallowTouches && e.stopPropagation();
var t = this.getWordPos(e.getLocation()), o = this.getWordPos(e.getPreviousLocation()), i = this.moveNode.parent.convertToNodeSpaceAR(t), a = this.moveNode.parent.convertToNodeSpaceAR(o);
if (this.dragType == n.LimitInTarget) {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = i.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this._moveDeta.addSelf(i.sub(a));
this.isMoveOut && c.DragUtil.pointInCollide(t, this.touch_collider) && (this.m_dragOffset = i.sub(this.moveNode.position));
var s = this.moveNode.position.add(this.m_dragOffset), r = this.moveNode.position.add(this.m_dragOffset).lerp(i, this.m_dragMoveDamp);
if (-1 != this.getInTargetIndex(r.sub(s))) {
this._moveDeta = cc.Vec2.ZERO;
this.cacheMoveToPos = i;
this.isMoveOut = !1;
} else {
this.cacheMoveToPos = s;
this.isMoveOut = !0;
}
} else {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = i.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this.cacheMoveToPos = i;
}
this.onDrag(e);
}
};
t.prototype.touchEnd = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
switch (this.dragType) {
case n.BackToStart:
-1 == this.getOnTargetIndex() ? this.onTouchCancle(e) : this.onTouchEnd(e);
break;

case n.EndInTouchPos:
this.onTouchEnd(e);
break;

default:
this.onTouchEnd(e);
}
this.isDraging = !1;
}
};
t.prototype.touchCancel = function(e) {
if (this.isTouch && this.isCanDrag) {
cc.log(o.OnApplicationFocus);
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
this.onTouchCancle(e);
this.isDraging = !1;
}
};
t.prototype.disposeLis = function() {
if (null != this._listener && null != this._lisCancele) {
this._listener.onTouchCancelled = this._lisCancele;
this._listener = null;
this._lisCancele = null;
}
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.on(o.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onDisable = function() {
this.isTouch = !1;
this.disposeLis();
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.off(o.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onLoad = function() {
this.initData();
};
t.prototype.start = function() {
this.initData();
};
t.prototype.destroy = function() {
this.disposeLis();
return e.prototype.destroy.call(this);
};
t.prototype.onDestroy = function() {
this.disposeLis();
};
t.prototype.update = function(e) {
if (1 == this.isDraging && 1 == this.isTouch) {
this.m_dragMoveDamp < 1 && (this.m_dragMoveDamp += .01);
var t = this.moveNode.position.add(this.m_dragOffset).lerp(this.cacheMoveToPos, this.m_dragMoveDamp);
this.moveNode.setPosition(t.sub(this.m_dragOffset));
var o = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY).lerp(this.dragScale, this.m_dragMoveDamp);
this.moveNode.setScale(o.x, o.y);
var n = this.moveNode.rotation, c = cc.misc.lerp(n, this.dragRotate, this.m_dragMoveDamp);
this.moveNode.angle = -c;
}
};
var o;
t.OnApplicationFocus = "OnApplicationFocus";
__decorate([ l({
type: [ i.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ l({
type: [ cc.Collider ],
tooltip: "拖动到的目标区域"
}) ], t.prototype, "targetCollider", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应TOUCH_START的范围,默认为结点自身大小,超过节点自身大小无用"
}) ], t.prototype, "touch_collider", void 0);
__decorate([ l({
type: cc.Node,
tooltip: "拖动的结点，默认为当前结点"
}) ], t.prototype, "moveNode", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应与目标区域\b碰撞的范围,默认touch_collider"
}) ], t.prototype, "self_collider", void 0);
__decorate([ l({}) ], t.prototype, "isSwallowTouches", void 0);
__decorate([ l({
tooltip: "在拖动时是否固定moveNode的原点"
}) ], t.prototype, "isDragOriginPoint", void 0);
__decorate([ l({
tooltip: "拖动时的偏移值",
visible: function() {
return this.isDragOriginPoint;
}
}) ], t.prototype, "dragOffset", void 0);
__decorate([ l({
tooltip: "拖动时是否显示到最上层"
}) ], t.prototype, "isDragToTop", void 0);
__decorate([ l({
type: cc.Vec2,
tooltip: "拖动时的缩放,默认为节点当前scale"
}) ], t.prototype, "dragScale", void 0);
__decorate([ l({
tooltip: "拖动时的旋转,默认为节点当前Rotation"
}) ], t.prototype, "dragRotate", void 0);
__decorate([ l({
type: cc.Enum(n),
tooltip: "返回时效果"
}) ], t.prototype, "dragType", void 0);
__decorate([ l({
tooltip: "效果时间",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backDuring", void 0);
__decorate([ l({
type: cc.Enum(c.TweenType),
tooltip: "返回时Easing效果",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backEasingType", void 0);
return t = o = __decorate([ r, d(1), p(), u("common/SpriteDragMS"), h(), f(a) ], t);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../utils/NodeCompMS": "NodeCompMS",
"./DragEventListenerMS": "DragEventListenerMS",
"./DragUtilMS": "DragUtilMS"
} ],
SpriteDrag: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f39e2qzvQNOm57kCQf9YyHr", "SpriteDrag");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c = e("./DragUtil"), i = e("./DragEventListener"), a = e("../utils/NodeComp");
(function(e) {
e[e.EndInTouchPos = 0] = "EndInTouchPos";
e[e.BackToStart = 1] = "BackToStart";
e[e.LimitInTarget = 2] = "LimitInTarget";
})(n = o.DragType || (o.DragType = {}));
var s = cc._decorator, r = s.ccclass, l = s.property, d = s.executionOrder, p = s.disallowMultiple, u = s.menu, h = s.executeInEditMode, f = s.requireComponent, m = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.eventTouchs = [];
t.targetCollider = [];
t.touch_collider = null;
t.moveNode = null;
t.self_collider = null;
t.isSwallowTouches = !0;
t.isDragOriginPoint = !1;
t.dragOffset = cc.Vec2.ZERO;
t.isDragToTop = !1;
t.dragScale = null;
t.dragRotate = null;
t.dragType = n.EndInTouchPos;
t.backDuring = .4;
t.backEasingType = c.TweenType.backOut;
t.isTouch = !1;
t.isDraging = !1;
t.isCanDrag = !0;
t.m_dragMoveDamp = 0;
t.backTween = null;
t._listener = null;
t._lisCancele = null;
t._moveDeta = cc.Vec2.ZERO;
t.isMoveOut = !1;
return t;
}
o = t;
t.prototype.initData = function() {
cc.director.getCollisionManager().enabled = !0;
if (null == this.touch_collider) {
var e = this.node.addComponent(cc.BoxCollider), t = this.node.getAnchorPoint(), o = this.node.getContentSize();
e.offset = new cc.Vec2((.5 - t.x) * o.width, (.5 - t.y) * o.height);
e.size = this.node.getContentSize();
this.touch_collider = e;
}
null == this.self_collider && (this.self_collider = this.touch_collider);
null == this.moveNode && (this.moveNode = this.node);
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = -this.moveNode.angle;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
null == this.dragScale && (this.dragScale = this.m_originalScale);
null == this.dragRotate && (this.dragRotate = this.m_originalRotate);
this.backEasing = Object.keys(c.TweenType)[this.backEasingType];
};
t.prototype.cancle = function(e, t) {
var n = this.node;
t.type = o.OnApplicationFocus;
t.touch = e;
t.bubbles = !0;
n.dispatchEvent(t);
};
t.prototype.hitTest = function(e, t) {
if (null != t) {
if (null == this._listener) {
this._listener = t;
this._lisCancele = t.onTouchCancelled;
}
t.onTouchCancelled = this.cancle.bind(this);
}
return c.DragUtil.pointInCollide(this.getWordPos(e), this.touch_collider);
};
t.prototype.initDataInEDITOR = function() {
null == this.dragScale && (this.dragScale = new cc.Vec2(this.node.scaleX, this.node.scaleY));
null == this.dragRotate && (this.dragRotate = -this.node.angle);
};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) return t.getScreenToWorldPoint(e, void 0);
}
return e;
};
t.prototype.geOriginalPos = function() {
return this.m_originalPos;
};
t.prototype.saveOrignialTransfor = function() {
if (null != this.moveNode) {
this.m_originalPos = this.moveNode.position;
this.m_originalScale = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY);
this.m_originalRotate = -this.moveNode.angle;
this.m_originalSiblingIndex = this.moveNode.getSiblingIndex();
}
};
t.prototype.getInTargetIndex = function(e, t) {
void 0 === e && (e = cc.Vec2.ZERO);
void 0 === t && (t = cc.Vec2.ZERO);
for (var o = 0; o < this.targetCollider.length; o++) {
var n = this.targetCollider[o];
if (c.DragUtil.collideInCollie(this.self_collider, n, e, t)) return o;
}
return -1;
};
t.prototype.getOnTargetIndex = function() {
for (var e = 0; e < this.targetCollider.length; e++) {
var t = this.targetCollider[e];
if (c.DragUtil.collideOnCollie(this.self_collider, t)) return e;
}
return -1;
};
t.prototype.backToOriginal = function(e) {
var t = this;
if (null != this.moveNode) {
null != this.backTween ? this.backTween.stop() : this.backTween = new cc.Tween();
this.backTween.target(this.moveNode).to(this.backDuring, {
position: this.m_originalPos,
scaleX: this.m_originalScale.x,
scaleY: this.m_originalScale.y,
rotation: this.m_originalRotate
}, {
progress: null,
easing: this.backEasing
}).call(function() {
t.backTween = null;
t.isCanDrag = !0;
t.isDragToTop && null != t.moveNode && t.moveNode.setSiblingIndex(t.m_originalSiblingIndex);
if (null != t.eventTouchs) for (var o = 0, n = t.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(i.DragEventType.TouchCancle, e, t)) break;
}
}).start();
}
};
t.prototype.onDragBegin = function(e) {
if (null != this.backTween) {
this.backTween.stop();
this.backTween = null;
}
this.m_dragMoveDamp = .3;
this.isDragToTop && this.moveNode.setSiblingIndex(500);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.DragBegin, e, this)) break;
}
};
t.prototype.onDrag = function(e) {
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.Draging, e, this)) break;
}
};
t.prototype.onTouchCancle = function(e) {
if (this.isDraging && this.dragType == n.BackToStart) this.backToOriginal(e); else {
this.isCanDrag = !0;
this.isDragToTop && this.isDraging && this.moveNode.setSiblingIndex(this.m_originalSiblingIndex);
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.TouchCancle, e, this)) break;
}
}
};
t.prototype.onTouchEnd = function(e) {
this.isCanDrag = !0;
for (var t = 0, o = this.eventTouchs.slice().reverse(); t < o.length; t++) {
if (o[t].emit(i.DragEventType.TouchEnd, e, this)) break;
}
};
t.prototype.touchStart = function(e) {
if (this.isCanDrag) {
var t = this.getWordPos(e.getLocation());
if (c.DragUtil.pointInCollide(t, this.touch_collider)) {
this._moveDeta = cc.Vec2.ZERO;
this.isMoveOut = !1;
this.isDraging = !1;
this.isTouch = !0;
this.isCanDrag = !0;
if (this.isSwallowTouches) {
e.stopPropagation();
for (var o = 0, n = this.eventTouchs.slice().reverse(); o < n.length; o++) {
if (n[o].emit(i.DragEventType.TouchDown, e, this)) break;
}
}
}
}
};
t.prototype.touchMove = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isSwallowTouches && e.stopPropagation();
var t = this.getWordPos(e.getLocation()), o = this.getWordPos(e.getPreviousLocation()), i = this.moveNode.parent.convertToNodeSpaceAR(t), a = this.moveNode.parent.convertToNodeSpaceAR(o);
if (this.dragType == n.LimitInTarget) {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = i.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this._moveDeta.addSelf(i.sub(a));
this.isMoveOut && c.DragUtil.pointInCollide(t, this.touch_collider) && (this.m_dragOffset = i.sub(this.moveNode.position));
var s = this.moveNode.position.add(this.m_dragOffset), r = this.moveNode.position.add(this.m_dragOffset).lerp(i, this.m_dragMoveDamp);
if (-1 != this.getInTargetIndex(r.sub(s))) {
this._moveDeta = cc.Vec2.ZERO;
this.cacheMoveToPos = i;
this.isMoveOut = !1;
} else {
this.cacheMoveToPos = s;
this.isMoveOut = !0;
}
} else {
if (!this.isDraging) {
this.m_dragOffset = cc.Vec2.ZERO;
this.isDragOriginPoint ? this.m_dragOffset = this.dragOffset : this.m_dragOffset = i.sub(this.moveNode.position);
this.onDragBegin(e);
this.isDraging = !0;
}
this.cacheMoveToPos = i;
}
this.onDrag(e);
}
};
t.prototype.touchEnd = function(e) {
if (this.isTouch && this.isCanDrag && null != this.moveNode) {
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
switch (this.dragType) {
case n.BackToStart:
-1 == this.getOnTargetIndex() ? this.onTouchCancle(e) : this.onTouchEnd(e);
break;

case n.EndInTouchPos:
this.onTouchEnd(e);
break;

default:
this.onTouchEnd(e);
}
this.isDraging = !1;
}
};
t.prototype.touchCancel = function(e) {
if (this.isTouch && this.isCanDrag) {
cc.log(o.OnApplicationFocus);
this.isTouch = !1;
this.isSwallowTouches && e.stopPropagation();
this.onTouchCancle(e);
this.isDraging = !1;
}
};
t.prototype.disposeLis = function() {
if (null != this._listener && null != this._lisCancele) {
this._listener.onTouchCancelled = this._lisCancele;
this._listener = null;
this._lisCancele = null;
}
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.on(o.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onDisable = function() {
this.isTouch = !1;
this.disposeLis();
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.off(o.OnApplicationFocus, this.touchCancel, this);
};
t.prototype.onLoad = function() {
this.initData();
};
t.prototype.start = function() {
this.initData();
};
t.prototype.destroy = function() {
this.disposeLis();
return e.prototype.destroy.call(this);
};
t.prototype.onDestroy = function() {
this.disposeLis();
};
t.prototype.update = function(e) {
if (1 == this.isDraging && 1 == this.isTouch) {
this.m_dragMoveDamp < 1 && (this.m_dragMoveDamp += .01);
var t = this.moveNode.position.add(this.m_dragOffset).lerp(this.cacheMoveToPos, this.m_dragMoveDamp);
this.moveNode.setPosition(t.sub(this.m_dragOffset));
var o = new cc.Vec2(this.moveNode.scaleX, this.moveNode.scaleY).lerp(this.dragScale, this.m_dragMoveDamp);
this.moveNode.setScale(o.x, o.y);
var n = -this.moveNode.angle, c = cc.misc.lerp(n, this.dragRotate, this.m_dragMoveDamp);
this.moveNode.angle = -c;
}
};
var o;
t.OnApplicationFocus = "OnApplicationFocus";
__decorate([ l({
type: [ i.default ],
tooltip: "监听事件"
}) ], t.prototype, "eventTouchs", void 0);
__decorate([ l({
type: [ cc.Collider ],
tooltip: "拖动到的目标区域"
}) ], t.prototype, "targetCollider", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应TOUCH_START的范围,默认为结点自身大小,超过节点自身大小无用"
}) ], t.prototype, "touch_collider", void 0);
__decorate([ l({
type: cc.Node,
tooltip: "拖动的结点，默认为当前结点"
}) ], t.prototype, "moveNode", void 0);
__decorate([ l({
type: cc.Collider,
tooltip: "节点响应与目标区域\b碰撞的范围,默认touch_collider"
}) ], t.prototype, "self_collider", void 0);
__decorate([ l({}) ], t.prototype, "isSwallowTouches", void 0);
__decorate([ l({
tooltip: "在拖动时是否固定moveNode的原点"
}) ], t.prototype, "isDragOriginPoint", void 0);
__decorate([ l({
tooltip: "拖动时的偏移值",
visible: function() {
return this.isDragOriginPoint;
}
}) ], t.prototype, "dragOffset", void 0);
__decorate([ l({
tooltip: "拖动时是否显示到最上层"
}) ], t.prototype, "isDragToTop", void 0);
__decorate([ l({
tooltip: "拖动时的缩放,默认为节点当前scale"
}) ], t.prototype, "dragScale", void 0);
__decorate([ l({
tooltip: "拖动时的旋转,默认为节点当前Rotation"
}) ], t.prototype, "dragRotate", void 0);
__decorate([ l({
type: cc.Enum(n),
tooltip: "返回时效果"
}) ], t.prototype, "dragType", void 0);
__decorate([ l({
tooltip: "效果时间",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backDuring", void 0);
__decorate([ l({
type: cc.Enum(c.TweenType),
tooltip: "返回时Easing效果",
visible: function() {
return this.dragType == n.BackToStart;
}
}) ], t.prototype, "backEasingType", void 0);
return t = o = __decorate([ r, d(1), p(), u("common/SpriteDrag"), h(), f(a) ], t);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../utils/NodeComp": "NodeComp",
"./DragEventListener": "DragEventListener",
"./DragUtil": "DragUtil"
} ],
SubgameManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "783d6BV5LxEFbFggjjch+MU", "SubgameManager");
var n = {
_storagePath: [],
_getfiles: function(e, t, o, n) {
this._storagePath[e] = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "SlimeMakeNew/" + e;
this._downloadCallback = o;
this._finishCallback = n;
this._fileName = e;
var c = "http://youngcnfoodhall.top/SlimeMakeNew/" + e;
this.check_before(e);
var i = this._storagePath[e] + "/project.manifest";
this.manifestUrl = i;
var a = JSON.stringify({
packageUrl: c,
remoteManifestUrl: c + "/project.manifest",
remoteVersionUrl: c + "/version.manifest",
version: "0.8",
assets: {},
searchPaths: []
});
this._am = new jsb.AssetsManager("", this._storagePath[e], function(e, t) {
for (var o = e.split("."), n = t.split("."), c = 0; c < o.length; ++c) {
var i = parseInt(o[c]), a = parseInt(n[c] || 0);
if (i !== a) return i - a;
}
return n.length > o.length ? -1 : 0;
});
this._am.setVerifyCallback(function(e, t) {
t.compressed;
return !0;
});
cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
1 === t ? this._am.setEventCallback(this._updateCb.bind(this)) : 2 == t ? this._am.setEventCallback(this._checkCb.bind(this)) : this._am.setEventCallback(this._needUpdate.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
console.log(a);
if (jsb.fileUtils.isFileExist(i)) {
console.log("加载本地Manifest");
this._am.loadLocalManifest(this.manifestUrl);
} else {
console.log("加载网络Manifest");
var s = new jsb.Manifest(a, this._storagePath);
this._am.loadLocalManifest(s, this._storagePath);
}
}
if (1 === t) {
this._am.update();
this._failCount = 0;
} else this._am.checkUpdate();
this._updating = !0;
console.log("更新文件:" + i);
},
check_before: function(e) {
var t = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "SlimeMakeNew/" + e + "/project.manifest.temp";
if (jsb.fileUtils.isFileExist(t)) {
var o = jsb.fileUtils.getStringFromFile(t);
"" == o && (o = "{}");
JSON.parse(o).module != this.file_module && console.log("remove temp file:" + jsb.fileUtils.removeFile(t));
}
},
_updateCb: function(e) {
var t = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("updateCb本地没有配置文件");
t = !0;
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
console.log("updateCb下载配置文件错误");
t = !0;
break;

case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("updateCb解析文件错误");
t = !0;
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
console.log("updateCb发现新的更新");
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("updateCb已经是最新的");
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log(e.getPercentByFile());
this._downloadCallback && this._downloadCallback(e.getPercent());
break;

case jsb.EventAssetsManager.ASSET_UPDATED:
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
console.log("updateCb更新错误");
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
var o = jsb.fileUtils.getSearchPaths(), n = this._am.getLocalManifest().getSearchPaths();
Array.prototype.unshift(o, n);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o));
jsb.fileUtils.setSearchPaths(o);
this._finishCallback && this._finishCallback(!0);
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this._failCount++;
if (this._failCount <= 3) {
this._am.downloadFailedAssets();
console.log("updateCb更新失败" + this._failCount + " 次");
} else {
console.log("updateCb失败次数过多");
this._failCount = 0;
t = !0;
this._updating = !1;
}
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
console.log("updateCb解压失败");
}
if (t) {
cc.eventManager.removeListener(this._updateListener);
this._updating = !1;
this._finishCallback && this._finishCallback(!1);
}
},
stopDown: function() {
self._updating = !1;
this._am.setEventCallback(null);
},
_checkCb: function(e) {
var t = !1;
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("checkCb本地没有配置文件");
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
console.log("checkCb下载配置文件错误");
t = !0;
break;

case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("checkCb解析文件错误");
t = !0;
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this._getfiles(this._fileName, 1, this._downloadCallback, this._finishCallback);
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("checkCb已经是最新的");
this._finishCallback && this._finishCallback(!0);
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
case jsb.EventAssetsManager.ASSET_UPDATED:
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
console.log("checkCb更新错误");
t = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
console.log("checkCb更新完成");
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
console.log("checkCb更新失败");
t = !0;
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
console.log("checkCb解压失败");
}
this._updating = !1;
t && this._finishCallback && this._finishCallback(!1);
},
_needUpdate: function(e) {
switch (e.getEventCode()) {
case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("子游戏已经是最新的，不需要更新");
this._finishCallback && this._finishCallback(!1);
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
console.log("子游戏需要更新");
this._finishCallback && this._finishCallback(!0);
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
case jsb.EventAssetsManager.ERROR_UPDATING:
case jsb.EventAssetsManager.UPDATE_FAILED:
this._downloadCallback();
}
},
downloadSubgame: function(e, t, o) {
this._getfiles(e, 2, t, o);
},
enterSubgame: function(e) {
if (this._storagePath[e]) {
console.log("enterSubgame: require " + this._storagePath[e] + "/src/main.js");
window.require(this._storagePath[e] + "/src/main.js");
} else this.downloadSubgame(e);
},
isSubgameDownLoad: function(e) {
var t = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "SlimeMakeNew/" + e + "/project.manifest";
console.log(t);
return !!jsb.fileUtils.isFileExist(t);
},
needUpdateSubgame: function(e, t, o) {
this._getfiles(e, 3, o, t);
},
setManifest: function(e) {
this._manifestUrl = e;
},
setLogLabel: function(e) {
this._label = e;
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
TipManagerMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c0df1dBsFVMzak6gJSEqlIS", "TipManagerMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function() {
function e() {
this.showIndex = 0;
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.jumpTips = function() {
this.showIndex = this.showIndex + 1;
var e = this.showIndex % 4, t = new cc.Node(), o = t.addComponent(cc.Sprite);
cc.loader.loadRes([ "tips/fantastic", "tips/nice", "tips/great", "tips/great" ][e], cc.SpriteFrame, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e || (o.spriteFrame = t);
});
cc.Canvas.instance.node.addChild(t);
var n = 200 - 400 * Math.random(), c = cc.v2(n, 50 * Math.random() + 170);
t.setPosition(cc.v2(0, 0));
t.zIndex = 100;
t.setScale(0);
cc.loader.loadRes([ "sound/fatanstic", "sound/Nice", "sound/great", "sound/great" ][e], cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e ? console.log(e + "") : cc.audioEngine.playEffect(t, !1);
});
t.runAction(cc.sequence(cc.spawn(cc.jumpTo(.5, c, 150, 1), cc.scaleTo(.5, [ .6, .8, .8, .8, .8, .8 ][e]), cc.rotateBy(.5, 360)), cc.callFunc(function() {}), cc.delayTime(1), cc.removeSelf()));
};
e.prototype.playAudioEffect = function() {
var e = Math.floor(5 * Math.random());
cc.loader.loadRes([ "sound/fatanstic.mp3", "sound/good.mp3", "sound/Nice.mp3", "sound/great.mp3", "sound/well done.mp3", "sound/well done.mp3" ][e] + "", cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e || cc.audioEngine.playEffect(t, !1);
});
};
var t;
return e = t = __decorate([ c ], e);
}());
o.default = i;
cc._RF.pop();
}, {} ],
TipManager: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9254d1L1QxOSJwyeYkN545A", "TipManager");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function() {
function e() {}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.jumpTips = function() {
var e = Math.floor(4 * Math.random()), t = new cc.Node(), o = t.addComponent(cc.Sprite);
cc.loader.loadRes([ "tips/fantastic", "tips/nice", "tips/great", "tips/great" ][e] + "", cc.SpriteFrame, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e || (o.spriteFrame = t);
});
cc.Canvas.instance.node.addChild(t);
var n = 200 - 400 * Math.random(), c = cc.v2(n, 50 * Math.random() + 170);
t.setPosition(cc.v2(0, 0));
t.setScale(0);
cc.loader.loadRes([ "sound/fatanstic.mp3", "sound/Nice.mp3", "sound/great.mp3", "sound/great.mp3" ][e] + "", cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e || cc.audioEngine.playEffect(t, !1);
});
t.runAction(cc.sequence(cc.spawn(cc.jumpTo(.5, c, 150, 1), cc.scaleTo(.5, [ .6, .8, .8, .8, .8, .8 ][e]), cc.rotateBy(.5, 360)), cc.callFunc(function() {}), cc.delayTime(1), cc.removeSelf()));
};
e.prototype.playAudioEffect = function() {
var e = Math.floor(5 * Math.random());
cc.loader.loadRes([ "sound/fatanstic.mp3", "sound/good.mp3", "sound/Nice.mp3", "sound/great.mp3", "sound/well done.mp3", "sound/well done.mp3" ][e] + "", cc.AudioClip, function(e, t) {
cc.loader.setAutoReleaseRecursively(t, !0);
e || cc.audioEngine.playEffect(t, !1);
});
};
var t;
return e = t = __decorate([ c ], e);
}());
o.default = i;
cc._RF.pop();
}, {} ],
TouchBtn: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "82905gbWMxJ7auOQhPbIH5N", "TouchBtn");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.touchMoreGame = function() {
console.log("touchMoreGame");
jsToCPP.getInstance().showMoreGame();
};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
TouchComponentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cd0cbPoRt1O/bAri/+TxItO", "TouchComponentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
TouchComponent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1af59GPzTNLHb4fBVQcPFl1", "TouchComponent");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {};
return t = __decorate([ c ], t);
}(cc.Component));
o.default = i;
cc._RF.pop();
}, {} ],
TouchMoveCard: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "08b59SLfMlMk5gGHztglUYo", "TouchMoveCard");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.oldPostion = cc.v2();
t.scoreAudio = null;
t.touchPrePos = cc.v2(0, 0);
return t;
}
t.prototype.start = function() {
this.initLisenter();
this.oldPostion = this.node.getPosition();
};
t.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
};
t.prototype.onDisable = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
};
t.prototype.touchMove = function(e) {
this.node.getContentSize();
var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), o = e.getDelta().sub(t), n = this.touchPrePos.sub(t), c = -180 * o.signAngle(n) / 3.1415926;
console.log(o.signAngle(n));
var i = this.node.rotation + .5 * c;
this.node.rotation = i;
this.node.getPosition();
var a = e.getDelta(), s = this.node.getPosition().add(cc.v2(.05 * a.x, a.y));
this.node.setPosition(s);
};
t.prototype.touchStart = function(e) {
this.touchPrePos = cc.v2(0, 0);
};
t.prototype.touchEnd = function(e) {
var t = this.node.position, o = t.sub(this.oldPostion).mag();
console.log(o);
this.enabled = !1;
if (o > 150) {
var n = t.y >= this.oldPostion.y ? 1 : -1;
this.moveOut(n, .25);
} else {
var c = this;
this.node.runAction(cc.sequence(cc.spawn(cc.rotateTo(.25, 0), cc.moveTo(.25, this.oldPostion)), cc.callFunc(function() {
c.enabled = !0;
})));
}
};
t.prototype.moveOut = function(e, t) {
var o = this;
cc.audioEngine.play(o.scoreAudio, !1, 1);
this.node.runAction(cc.sequence(cc.moveBy(t, cc.v2(0, 1e3 * e)), cc.callFunc(function() {
o.touchCallBack && o.touchCallBack(e);
})));
};
t.prototype.initLisenter = function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
cc.find("Canvas").emit("PullTouch");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
this.node.getPosition();
var t = e.getDelta();
this._isTouchMove = Math.sqrt(t.x * t.x + t.y * t.y) > 4;
}, this);
};
t.prototype.getWordPos = function(e) {
if (null != this.node) {
var t = cc.Camera.findCamera(this.node);
if (null != t) return t.getCameraToWorldPoint(e, void 0);
}
return e;
};
__decorate([ i(cc.AudioClip) ], t.prototype, "scoreAudio", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
TransformRecordMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "70997w3z4dIBocPcwJZRsOF", "TransformRecordMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/NodeCompMS"), c = e("../codebase/utils/NodeTransformMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = i.requireComponent, l = i.disallowMultiple, d = i.executeInEditMode, p = function() {
function e() {
this.key = "";
this.value = new c.default();
}
__decorate([ s() ], e.prototype, "key", void 0);
__decorate([ s(c.default) ], e.prototype, "value", void 0);
return e = __decorate([ a("NodeTransformKey") ], e);
}();
o.NodeTransformKey = p;
var u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.transforems = [];
return t;
}
t.prototype.onLoad = function() {};
t.prototype.getTransform = function(e) {
for (var t = 0, o = this.transforems; t < o.length; t++) {
var n = o[t];
if (n.key == e) return n.value;
}
return null;
};
__decorate([ s([ p ]) ], t.prototype, "transforems", void 0);
return t = __decorate([ a, r(n), l(), d() ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../codebase/utils/NodeCompMS": "NodeCompMS",
"../codebase/utils/NodeTransformMS": "NodeTransformMS"
} ],
TransformRecord: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2fa0aBScjlEQoJmcSPhbvEM", "TransformRecord");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../codebase/utils/NodeComp"), c = e("../codebase/utils/NodeTransform"), i = cc._decorator, a = i.ccclass, s = i.property, r = i.requireComponent, l = i.disallowMultiple, d = i.executeInEditMode, p = function() {
function e() {
this.key = "";
this.value = new c.default();
}
__decorate([ s() ], e.prototype, "key", void 0);
__decorate([ s(c.default) ], e.prototype, "value", void 0);
return e = __decorate([ a("NodeTransformKey") ], e);
}();
o.NodeTransformKey = p;
var u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.transforems = [];
return t;
}
t.prototype.onLoad = function() {};
t.prototype.getTransform = function(e) {
for (var t = 0, o = this.transforems; t < o.length; t++) {
var n = o[t];
if (n.key == e) return n.value;
}
return null;
};
__decorate([ s([ p ]) ], t.prototype, "transforems", void 0);
return t = __decorate([ a, r(n), l(), d() ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../codebase/utils/NodeComp": "NodeComp",
"../codebase/utils/NodeTransform": "NodeTransform"
} ],
TransitionSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "67001pLkMlOcYCs8I4qMnzN", "TransitionSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./utils/CocosHelperMS"), c = e("../../../../Script/tool/components/ShaderHelperMS"), i = e("../../../../Script/tool/components/ShaderTimeMS"), a = cc._decorator, s = a.ccclass, r = (a.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.newSceneName = null;
return t;
}
o = t;
t.changeScene = function(e, t) {
void 0 === t && (t = 0);
var o = 100 * Math.random() > 50 ? 7 : 12;
7 == o || 12 == o ? n.CocosHelper.captureNodeSize(cc.find("Canvas"), cc.visibleRect.width, cc.visibleRect.height).then(function(t) {
if (null == t) cc.director.loadScene(e); else {
cc.director.loadScene(e);
cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
var e = cc.director.getScene().getChildByName("Canvas"), n = new cc.Node();
n.setPosition(cc.v2(0, 0));
n.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t);
n.addComponent(c.default).program = o;
n.addComponent(i.default);
e.addChild(n);
cc.director.off(cc.Director.EVENT_AFTER_SCENE_LAUNCH);
});
}
}) : cc.director.loadScene(e);
};
t.prototype.startChange = function() {
var e = this;
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitiOnExit;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
this.node.opacity = 0;
this.node.stopAllActions();
var t = cc.callFunc(function() {
null != e.newSceneName && cc.director.preloadScene(e.newSceneName, function() {
cc.director.loadScene(e.newSceneName, function() {
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && (n.hasTransition = !0);
}
});
var e = cc.find("TransitionSceneNode");
if (null != e) {
var t = cc.callFunc(function() {
cc.game.removePersistRootNode(this);
this.destroy();
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
}, e);
e.runAction(cc.sequence(cc.fadeOut(.6), t));
}
});
e.newSceneName = null;
});
}, this);
this.node.runAction(cc.sequence(cc.fadeIn(.6), t));
};
t.prototype.onDestroy = function() {
o.currentChangeName = "";
};
t.prototype.start = function() {
"" != o.currentChangeName && cc.error("scene:" + o.currentChangeName + " isChanging, don`t change " + this.newSceneName);
o.currentChangeName = this.newSceneName;
this.startChange();
};
var o;
t.currentChangeName = "";
return t = o = __decorate([ s ], t);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {
"../../../../Script/tool/components/ShaderHelperMS": "ShaderHelperMS",
"../../../../Script/tool/components/ShaderTimeMS": "ShaderTimeMS",
"./utils/CocosHelperMS": "CocosHelperMS"
} ],
TransitionScene_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f0cbbe7smJKtL0Vt4L7hVyT", "TransitionScene_my");
Object.defineProperty(o, "__esModule", {
value: !0
});
e("./ColorRect_my");
var n = e("./CocosHelper_my"), c = cc._decorator, i = c.ccclass, a = (c.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.newSceneName = null;
return t;
}
o = t;
t.changeScene = function(e, t) {
void 0 === t && (t = "codebase/TransitionScen");
cc.director.loadScene(e);
};
t.prototype.startChange = function() {
var e = this;
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitiOnExit;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
this.node.opacity = 0;
this.node.stopAllActions();
var t = cc.callFunc(function() {
null != e.newSceneName && cc.director.preloadScene(e.newSceneName, function() {
cc.director.loadScene(e.newSceneName, function() {
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && (n.hasTransition = !0);
}
});
var e = cc.find("TransitionSceneNode");
if (null != e) {
var t = cc.callFunc(function() {
cc.game.removePersistRootNode(this);
this.destroy();
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
}, e);
e.runAction(cc.sequence(cc.fadeOut(.6), t));
}
});
e.newSceneName = null;
});
}, this);
this.node.runAction(cc.sequence(cc.fadeIn(.6), t));
};
t.prototype.onDestroy = function() {
o.currentChangeName = "";
};
t.prototype.start = function() {
"" != o.currentChangeName && cc.error("scene:" + o.currentChangeName + " isChanging, don`t change " + this.newSceneName);
o.currentChangeName = this.newSceneName;
this.startChange();
};
var o;
t.currentChangeName = "";
return t = o = __decorate([ i ], t);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {
"./CocosHelper_my": "CocosHelper_my",
"./ColorRect_my": "ColorRect_my"
} ],
TransitionScene: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4164ct9dVBNL4lmyJRr6Vxp", "TransitionScene");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./utils/CocosHelper"), c = e("./effect/ShaderTime"), i = e("./effect/ShaderHelper"), a = cc._decorator, s = a.ccclass, r = (a.property, 
function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.newSceneName = null;
return t;
}
o = t;
t.changeScene = function(e, t) {
void 0 === t && (t = 0);
1 == t || 7 == t || 12 == t ? n.CocosHelper.captureNodeSize(cc.find("Canvas"), cc.visibleRect.width, cc.visibleRect.height).then(function(o) {
if (null == o) cc.director.loadScene(e); else {
cc.director.loadScene(e);
cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
var e = cc.director.getScene().getChildByName("Canvas"), n = new cc.Node();
n.setPosition(cc.v2(0, 0));
n.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(o);
n.addComponent(i.default).program = t;
n.addComponent(c.default);
e.addChild(n);
cc.director.off(cc.Director.EVENT_AFTER_SCENE_LAUNCH);
});
}
}) : cc.director.loadScene(e);
};
t.prototype.startChange = function() {
var e = this;
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitiOnExit;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
this.node.opacity = 0;
this.node.stopAllActions();
var t = cc.callFunc(function() {
null != e.newSceneName && cc.director.preloadScene(e.newSceneName, function() {
cc.director.loadScene(e.newSceneName, function() {
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && (n.hasTransition = !0);
}
});
var e = cc.find("TransitionSceneNode");
if (null != e) {
var t = cc.callFunc(function() {
cc.game.removePersistRootNode(this);
this.destroy();
n.CocosHelper.visitNode(cc.director.getScene(), function(e) {
for (var t = 0, o = e.getComponents(cc.Component); t < o.length; t++) {
var n = o[t], c = n.transitionOnEnter;
void 0 != c && c instanceof Function && c.bind(n)();
}
});
}, e);
e.runAction(cc.sequence(cc.fadeOut(.6), t));
}
});
e.newSceneName = null;
});
}, this);
this.node.runAction(cc.sequence(cc.fadeIn(.6), t));
};
t.prototype.onDestroy = function() {
o.currentChangeName = "";
};
t.prototype.start = function() {
"" != o.currentChangeName && cc.error("scene:" + o.currentChangeName + " isChanging, don`t change " + this.newSceneName);
o.currentChangeName = this.newSceneName;
this.startChange();
};
var o;
t.currentChangeName = "";
return t = o = __decorate([ s ], t);
}(cc.Component));
o.default = r;
cc._RF.pop();
}, {
"./effect/ShaderHelper": "ShaderHelper",
"./effect/ShaderTime": "ShaderTime",
"./utils/CocosHelper": "CocosHelper"
} ],
VersionMG: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "cbfd9KQjSVHaKuEdRPPl67F", "VersionMG");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./HttpUtils"), c = cc._decorator, i = c.ccclass, a = (c.property, function() {
function e() {
this.startVersionNum = "versionLocal";
this.showPopSceneName = "hall";
this.startVersion = 10;
this.androidV = 12;
this.iosV = 11;
this.isShowPop = !1;
cc.sys.platform == cc.sys.ANDROID ? this.startVersion = this.androidV : this.startVersion = this.iosV;
cc.sys.localStorage.setItem(this.startVersionNum, this.startVersion);
}
t = e;
e.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
e.prototype.initVersion = function() {
var e = cc.sys.localStorage.getItem(this.startVersionNum);
e || (e = this.startVersion);
cc.sys.localStorage.setItem(this.startVersionNum, this.startVersion);
};
e.prototype.getVersion = function() {
var e = cc.sys.localStorage.getItem(this.startVersionNum);
e || (e = this.startVersion);
return e;
};
e.prototype.calIsToPopVerDialog = function() {
var e = this;
n.default.getInstance().httpGet("http://youngcnfoodhall.top/SlimeMakeNew/version.json", function(t) {
if (t) {
console.log("网络json");
try {
var o = JSON.parse(t)[0];
if (o) {
var n = 0, c = "android";
if (cc.sys.platform == cc.sys.ANDROID) {
n = Number(o.androidNewVersion);
c = "android";
} else {
n = Number(o.androidVersion);
c = "ios";
}
var i = e.getVersion(), a = cc.director.getScene().name;
console.log("平台 ： " + c);
console.log("本地版本" + i);
console.log("网络版本" + n);
console.log("当前场景名" + a);
console.log("是否弹过 " + e.isShowPop);
var s = (r = jsToCPP.getInstance()).getArray();
if (0 == Number(s.length) && n > e.getVersion() && a == e.showPopSceneName) {
console.log("显示弹框");
e.showPopDialogToMarket();
e.isShowPop = !0;
var r;
(r = jsToCPP.getInstance()).setArray("ont");
r.setArray("two");
r.setArray("three");
}
}
} catch (e) {
console.log("网络json错误 加载本地json");
}
} else ;
});
};
e.prototype.showPopDialogToMarket = function() {
cc.loader.loadRes("pop_market", cc.Prefab, function(e, t) {
if (e) console.log(e + ""); else {
var o = cc.instantiate(t);
o.parent = cc.Canvas.instance.node;
o.position = cc.v2(0, 0);
o.zIndex = 100;
}
});
};
var t;
return e = t = __decorate([ i ], e);
}());
o.default = a;
cc._RF.pop();
}, {
"./HttpUtils": "HttpUtils"
} ],
ViewSizeAdapterMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "84127JALlxJuKPl8X+F6n5v", "ViewSizeAdapterMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, n.disallowMultiple), a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setup = function() {
var e = cc.view.getFrameSize();
cc.log(" fx == " + e.width + " fy ==" + e.height);
var t, o = cc.Canvas.instance.designResolution, n = e.width / o.width, c = e.height / o.height;
t = n > c ? c : n;
cc.log("scaleX == " + n + " y ==" + c);
cc.log(" minScale == " + t);
cc.log(" Rx == " + e.width / t + " Ry ==" + e.height / t);
cc.view.setDesignResolutionSize(e.width / t, e.height / t, cc.ResolutionPolicy.NO_BORDER);
cc.Canvas.instance.alignWithScreen();
};
t.prototype.onLoad = function() {
var e = this;
this.setup();
cc.view.setResizeCallback(function() {
e.setup();
cc.director.dispatchEvent(new cc.Event.EventCustom("ResizeFrame", !0));
});
};
return t = __decorate([ c, i(), a("common/ViewSizeAdapterMS") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
ViewSizeAdapter_my: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b1f8aIugDRAkJxwcKb0maG+", "ViewSizeAdapter_my");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, n.disallowMultiple), a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setup = function() {
var e = cc.view.getFrameSize();
cc.log(" fx == " + e.width + " fy ==" + e.height);
var t, o = cc.Canvas.instance.designResolution, n = e.width / o.width, c = e.height / o.height;
t = n > c ? c : n;
cc.log("scaleX == " + n + " y ==" + c);
cc.log(" minScale == " + t);
cc.log(" Rx == " + e.width / t + " Ry ==" + e.height / t);
cc.view.setDesignResolutionSize(e.width / t, e.height / t, cc.ResolutionPolicy.NO_BORDER);
cc.Canvas.instance.alignWithScreen();
};
t.prototype.onLoad = function() {
var e = this;
this.setup();
cc.view.setResizeCallback(function() {
e.setup();
cc.director.dispatchEvent(new cc.Event.EventCustom("ResizeFrame", !0));
});
};
return t = __decorate([ c, i(), a("common/viewadapter/ViewSizeAdapter") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
ViewSizeAdapter: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d257d2nwwROGpKmriVd8Vua", "ViewSizeAdapter");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = (n.property, n.disallowMultiple), a = n.menu, s = function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setup = function() {
var e = cc.view.getFrameSize();
cc.log(" fx == " + e.width + " fy ==" + e.height);
var t, o = cc.Canvas.instance.designResolution, n = e.width / o.width, c = e.height / o.height;
t = n > c ? c : n;
cc.log("scaleX == " + n + " y ==" + c);
cc.log(" minScale == " + t);
cc.log(" Rx == " + e.width / t + " Ry ==" + e.height / t);
cc.view.setDesignResolutionSize(e.width / t, e.height / t, cc.ResolutionPolicy.NO_BORDER);
cc.Canvas.instance.alignWithScreen();
};
t.prototype.onLoad = function() {
var e = this;
this.setup();
cc.view.setResizeCallback(function() {
e.setup();
cc.director.dispatchEvent(new cc.Event.EventCustom("ResizeFrame", !0));
});
};
return t = __decorate([ c, i(), a("common/ViewSizeAdapter") ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
chooseMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d95f5vQ4kxLVpu6ykzWFRuf", "chooseMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = e("./DataConfigMS"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.fly = null;
t.choose = null;
return t;
}
t.prototype.start = function() {
var e = this, t = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
t.active = !0;
t.opacity = 0;
t.runAction(cc.sequence(cc.fadeIn(1.5), cc.callFunc(function() {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "star11");
t.active = !0;
t.getComponent(cc.ParticleSystem).resetSystem();
e.show();
}), cc.spawn(cc.jumpBy(1.5, cc.v2(0, 0), 100, 2), cc.rotateBy(1.5, 360))));
};
t.prototype.show = function() {
for (var e = this, t = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0"), o = [ "slime1", "slime2", "slime3", "slime4", "slime5" ], i = function(i) {
var a = o[i], s = n.CocosHelper.findNode(cc.Canvas.instance.node, a), r = s.position;
s.position = t.position;
s.scale = 0;
s.active = !0;
s.runAction(cc.sequence(cc.delayTime(.5 + .25 * i), cc.callFunc(function() {
s.position = t.position;
cc.audioEngine.playEffect(e.fly, !1);
3 == i && setTimeout(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "font2"), t = e.getComponent(c.default);
e.active = !0;
t.enabled = !0;
t.actionCallBack = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").active = !0;
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
};
}, 1e3);
}), cc.spawn(cc.moveTo(1.5, r).easing(cc.easeElasticOut(.5)), cc.scaleTo(1, 1))));
}, a = 0; a < o.length; a++) i(a);
};
t.prototype.touchSlime = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
cc.audioEngine.playEffect(this.choose, !1);
if ("slime0" == o.name) {
var n = o.rotation;
n = 0 == n ? 45 : 0;
o.runAction(cc.sequence(cc.rotateTo(.5, n), cc.callFunc(function() {
o.getComponent(cc.Button).interactable = !0;
})));
} else {
var c = o.scale, i = cc.scaleTo(.132, .82 * c, c), a = cc.scaleTo(.12, c, .86 * c), s = cc.scaleTo(.108, .88 * c, c), r = cc.scaleTo(.096, c, .89 * c), l = cc.scaleTo(.084, c), d = cc.callFunc(function() {
o.getComponent(cc.Button).interactable = !0;
}, this), p = cc.sequence(i, a, s, r, l, d);
o.runAction(p);
}
};
t.prototype.touchNet = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
var t = cc.view.getVisibleSize().width, o = cc.view.getVisibleSize().height;
n.CocosHelper.captureNodeSize(cc.Canvas.instance.node, t, o).then(function(e) {
if (null == e) ; else {
i.default.getInstance().setPageTexture(e);
cc.director.loadScene("make1SceneMS");
}
});
};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
__decorate([ r ], t.prototype, "text", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "fly", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "choose", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./DataConfigMS": "DataConfigMS"
} ],
fallSpriteCompoentMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "ec736kV8RxKqYctv4T+pisw", "fallSpriteCompoentMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n, c, i = e("../common/common/Script/codebase/utils/CocosHelperMS"), a = cc._decorator, s = a.ccclass, r = a.property;
(function(e) {
e[e.eFallSprite = 0] = "eFallSprite";
e[e.eFallParticle = 1] = "eFallParticle";
})(n = o.nodefallType || (o.nodefallType = {}));
(function(e) {
e[e.eInMask = 0] = "eInMask";
e[e.eInSprite = 1] = "eInSprite";
})(c = o.nodeInType || (o.nodeInType = {}));
var l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spritePaths = [];
t.fallBowlInPaths = [];
t.nodeFallType = n.eFallSprite;
t.nodeInType = c.eInMask;
t.rotate = 0;
t.bowlNode = null;
t.isFallMove = !1;
t.nodeInGoodsSpriteFrame = null;
t.nodechangeSpriteFrame = null;
t.offect = cc.v2(0, 0);
t.moveoffect = cc.v2(0, 0);
t.totalTime = 3;
t.audioFall = null;
t.bowlInFall = null;
t.current = -1;
t._blendaction = null;
return t;
}
t.prototype.start = function() {
var e = this, t = (this.node.name, this.bowlNode.convertToWorldSpaceAR(cc.v2(0, 0))), o = cc.v2(this.offect.x + t.x, this.offect.y + t.y), a = this.node.parent.convertToNodeSpaceAR(o), s = this;
this.rotate = -this.rotate;
new cc.Tween().target(this.node).to(1, {
position: a,
rotation: this.rotate
}, null).call(function() {
if (0 != s.fallBowlInPaths.length) {
if (s.bowlInFall) {
s.bowlInFall.active = !0;
s.bowlInFall.opacity = 0;
s.bowlInFall.runAction(cc.sequence(cc.fadeIn(1), cc.callFunc(function() {
for (var e = s.bowlInFall.getComponent(cc.Sprite), t = [], o = function(o) {
t.push(cc.callFunc(function() {
e.spriteFrame = o;
}));
t.push(cc.delayTime(.5));
}, n = 0, c = s.fallBowlInPaths; n < c.length; n++) {
o(c[n]);
}
var i = cc.sequence(t);
s.bowlInFall.runAction(i);
})));
}
} else if (s.bowlInFall) {
s.bowlInFall.active = !0;
s.bowlInFall.opacity = 0;
s.bowlInFall.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(e.totalTime - .5)));
}
if (e.nodechangeSpriteFrame) {
(p = e.node.getComponent(cc.Sprite)).spriteFrame = e.nodechangeSpriteFrame;
}
s.actionStartCallBack && s.actionStartCallBack();
e.audioFall && (e.current = cc.audioEngine.play(e.audioFall, !0, 1));
if (e.nodeFallType == n.eFallSprite && null == e._blendaction) {
(d = i.CocosHelper.findNode(e.node, e.node.name + "_fall")).active = !0;
for (var t = d.getComponent(cc.Sprite), o = [], a = function(e) {
o.push(cc.callFunc(function() {
t.spriteFrame = e;
}));
o.push(cc.delayTime(.15));
}, r = 0, l = e.spritePaths; r < l.length; r++) {
a(l[r]);
}
e._blendaction = cc.repeatForever(cc.sequence(o));
d.runAction(e._blendaction);
}
if (e.nodeFallType == n.eFallParticle) {
var d;
(d = i.CocosHelper.findNode(e.node, e.node.name + "_p")).active = !0;
d.getComponent(cc.ParticleSystem).resetSystem();
if (h = i.CocosHelper.findNode(e.node, e.node.name + "_in")) {
h.active = !0;
var p = h.getComponent(cc.Sprite);
if (e.nodeInGoodsSpriteFrame) {
p.spriteFrame = e.nodeInGoodsSpriteFrame;
var u = cc.fadeOut(e.totalTime + .5);
h.runAction(u);
} else {
u = cc.fadeOut(e.totalTime + .5);
h.runAction(u);
}
}
}
if (e.nodeInType == c.eInSprite) {
var h;
if (h = i.CocosHelper.findNode(e.node, e.node.name + "_in")) {
h.active = !0;
p = h.getComponent(cc.Sprite);
e.nodeInGoodsSpriteFrame && (p.spriteFrame = e.nodeInGoodsSpriteFrame);
u = cc.fadeOut(e.totalTime);
h.runAction(u);
}
}
e.nodeInType, c.eInMask;
if (e.isFallMove) {
var f = cc.v2(-e.moveoffect.x, -e.moveoffect.y), m = cc.v2(e.moveoffect.x, e.moveoffect.y), g = cc.moveBy(e.totalTime / 2, f), v = cc.moveBy(e.totalTime / 2, m), _ = e, y = cc.sequence(g, v, cc.callFunc(function() {
_.moveOut();
}));
e.node.runAction(y);
} else {
var C = e;
y = cc.sequence(cc.delayTime(e.totalTime), cc.callFunc(function() {
C.moveOut();
}));
e.node.runAction(y);
}
}).start();
};
t.prototype.moveOut = function() {
var e = this;
cc.audioEngine.stop(this.current);
var t = i.CocosHelper.findNode(e.node, e.node.name + "_p"), o = i.CocosHelper.findNode(e.node, e.node.name + "_fall");
t && (t.active = !1);
o && (o.active = !1);
var n = cc.moveBy(1, cc.v2(1e3, 0)), c = cc.rotateTo(1, 0), a = cc.sequence(cc.spawn(n, c), cc.callFunc(function() {
e.node.active = !1;
e.actionEndCallBack && e.actionEndCallBack();
}));
this.node.runAction(a);
};
__decorate([ r({
type: [ cc.SpriteFrame ],
tooltip: "倒入液体的图片"
}) ], t.prototype, "spritePaths", void 0);
__decorate([ r({
type: [ cc.SpriteFrame ],
tooltip: "倒入碗里面渐变的图片"
}) ], t.prototype, "fallBowlInPaths", void 0);
__decorate([ r({
type: cc.Enum(n),
tooltip: "容器倒入材料效果 粒子或者图片帧动画"
}) ], t.prototype, "nodeFallType", void 0);
__decorate([ r({
type: cc.Enum(c),
tooltip: "容器内材料效果 往下沉或者渐变消失"
}) ], t.prototype, "nodeInType", void 0);
__decorate([ r({
tooltip: "旋转角度"
}) ], t.prototype, "rotate", void 0);
__decorate([ r({
type: cc.Node,
tooltip: "倒入的容器 比如碗"
}) ], t.prototype, "bowlNode", void 0);
__decorate([ r({
tooltip: "是否上下左右移动"
}) ], t.prototype, "isFallMove", void 0);
__decorate([ r({
type: cc.SpriteFrame,
tooltip: "容器内材料是否换图片 比如倒水倒牛奶,旋转之后需要换图片"
}) ], t.prototype, "nodeInGoodsSpriteFrame", void 0);
__decorate([ r({
type: cc.SpriteFrame,
tooltip: "容器是否换图片 比如倒粉, 袋子要换成一个有缺口的"
}) ], t.prototype, "nodechangeSpriteFrame", void 0);
__decorate([ r({
type: cc.Vec2,
tooltip: "以倒入容器比如碗的中点为准，偏移量"
}) ], t.prototype, "offect", void 0);
__decorate([ r({
type: cc.Vec2,
tooltip: "工具的移动偏移量"
}) ], t.prototype, "moveoffect", void 0);
__decorate([ r({
tooltip: "总共的时间"
}) ], t.prototype, "totalTime", void 0);
__decorate([ r({
type: cc.AudioClip,
tooltip: "倒入的音效"
}) ], t.prototype, "audioFall", void 0);
__decorate([ r({
type: cc.Node,
tooltip: "倒入碗里面的东西"
}) ], t.prototype, "bowlInFall", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS"
} ],
gameItem: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4c512HdKblAQaNQrWcg4QEz", "gameItem");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./GameData"), c = e("../common/uitls/TransitionScene_my"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveAudio = null;
t.nodeName = [ "chocolate_slime", "glitter_slime", "batter_slime", "rainbow_slime", "dark_slime" ];
return t;
}
t.prototype.touchButton = function(e) {
var t = e.target.getComponent(cc.Button);
t && (t.interactable = !1);
cc.loader.loadRes("button_general", cc.AudioClip, function(e, t) {
cc.audioEngine.playEffect(t, !1);
});
var o = this.node.name;
"chiristmas_slime" == o && c.default.changeScene("mainCS", "ttt");
"makeup_slime" == o && c.default.changeScene("homeSceneMS", "ttt");
};
t.prototype.start = function() {
var e = this.node.name;
n.default.getInstance().getIsNewFromName(e);
if (this.node.getChildByName("new")) {
var t = n.default.getInstance().getIsUpStoreByName(e), o = n.default.getInstance().getIsNewFromName(e);
console.log(t + "isUp");
console.log(o + "isNew");
this.node.getChildByName("new").active = !!t && !!o;
}
};
__decorate([ s(cc.AudioClip) ], t.prototype, "moveAudio", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./GameData": "GameData"
} ],
gameSceneMG: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "46e4cTZ+GZDZoPt72lhB+d2", "gameSceneMG");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/CocosHelper_my"), c = e("../common/uitls/TransitionScene_my"), i = e("./showLaodingHall"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.playMusicAudio = null;
t.btnAudio = null;
return t;
}
t.prototype.start = function() {
cc.audioEngine.stopMusic();
cc.audioEngine.playMusic(this.playMusicAudio, !0);
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "logo");
e && e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)))));
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "table");
if (t) {
var o = t.getChildByName("slime1");
o && o.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1.5, 1.08), cc.scaleTo(1.5, 1))));
}
};
t.prototype.touchMap = function() {
this.btnAudio && cc.audioEngine.playEffect(this.btnAudio, !1);
i.default.getInstance().loadingDoneCallback = function() {
c.default.changeScene("hall", "111");
};
i.default.getInstance().showAds(!1);
};
t.prototype.touchplay = function() {
this.btnAudio && cc.audioEngine.playEffect(this.btnAudio, !1);
c.default.changeScene("LoadSubGame", "111");
};
__decorate([ r(cc.AudioClip) ], t.prototype, "playMusicAudio", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "btnAudio", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./showLaodingHall": "showLaodingHall"
} ],
homeBtnMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7b0fefkixhAhY6vh+jMngwF", "homeBtnMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/ads/showLaodingMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {};
t.prototype.touchHome = function() {
n.default.getInstance().showAds(!1);
n.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
n.default.getInstance().loadingDoneCallback = null;
cc.director.loadScene("homeSceneMS");
};
};
__decorate([ a(cc.Label) ], t.prototype, "label", void 0);
__decorate([ a ], t.prototype, "text", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS"
} ],
homeMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c3a2bZRK2pIvKaplK3KmWkZ", "homeMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/ads/showLaodingMS"), c = e("../common/common/Script/codebase/utils/CocosHelperMS"), i = e("../common/common/Script/compoent/MoveInMS"), a = e("./DataConfigMS"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
var e = this;
a.default.getInstance().playMusic();
jsToCPP.getInstance().setEmailContentAndTitle("Makeup Slime", " Check outmy makeup slime. So many makeups to add into the slime and crazy rainbow slime fun. Let's play together.");
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "cosmetics6");
t.active = !0;
t.opacity = 0;
t.runAction(cc.sequence(cc.fadeIn(1.5), cc.callFunc(function() {
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl");
t.active = !0;
var o = t.getComponent(i.default);
o.enabled = !0;
o.actionCallBack = function() {
e.show1();
};
})));
};
t.prototype.show1 = function() {
for (var e = this, t = function(t) {
var o = "cosmetics" + t, n = c.CocosHelper.findNode(cc.Canvas.instance.node, o);
n.active = !0;
var a = n.getComponent(i.default);
a.delayTime = .75 * t;
a.enabled = !0;
a.actionCallBack = function() {
5 == t && e.show2();
};
}, o = 0; o < 6; o++) t(o);
};
t.prototype.show2 = function() {
var e = this, t = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"), o = t.getChildByName("bowl_slime_"), n = t.getChildByName("slime1");
o.active = !0;
o.opacity = 0;
n.active = !0;
n.opacity = 0;
o.runAction(cc.sequence(cc.fadeIn(1.5), cc.callFunc(function() {
e.show3();
})));
n.runAction(cc.sequence(cc.delayTime(1), cc.fadeIn(1.5), cc.callFunc(function() {})));
};
t.prototype.show3 = function() {
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "logo");
e.active = !0;
var t = e.getComponent(i.default);
t.enabled = !0;
t.actionCallBack = function() {
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(2, cc.v2(0, 10)), cc.moveBy(2, cc.v2(0, -10)))));
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "play");
t.active = !0;
var o = t.getComponent(i.default);
o.enabled = !0;
o.actionCallBack = function() {};
};
};
t.prototype.touchPlay = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.getComponent(cc.AudioSource) && o.getComponent(cc.AudioSource).play();
n.default.getInstance().showAds(!1);
n.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
n.default.getInstance().loadingDoneCallback = null;
a.default.getInstance().setIsHome("111");
cc.director.loadScene("selectSceneMS");
};
};
t.prototype.touchUrl = function() {
console.log("https://www.crazycampmedia.com/privacys/");
jsToCPP.getInstance().openUrl("http://www.fungalaxymedia.com/privacys/");
};
t.prototype.touchMore = function() {
console.log("touchMore");
jsToCPP.getInstance().showMoreGame();
};
__decorate([ l(cc.Label) ], t.prototype, "label", void 0);
__decorate([ l ], t.prototype, "text", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./DataConfigMS": "DataConfigMS"
} ],
home: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "0db33/hUCVEI7hpU2wWdSQ/", "home");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/CocosHelper_my"), c = e("../common/uitls/TransitionScene_my"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.unicornWingAnimation = [];
t.unicornAnimation = [];
t.touchAudio = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_moregame");
e.active = !0;
e.opacity = 0;
e.runAction(cc.sequence(cc.fadeIn(2), cc.callFunc(function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "logo").runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)))));
})));
};
t.prototype.touchHome = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
cc.audioEngine.playEffect(this.touchAudio, !1);
cc.sys.localStorage.setItem("isFirstHome", 1);
c.default.changeScene("hall", "t");
};
t.prototype.touchMore = function(e) {
cc.audioEngine.playEffect(this.touchAudio, !1);
jsToCPP.getInstance().showMoreGame();
};
t.prototype.touchUrl = function(e) {
cc.sys.platform == cc.sys.ANDROID ? jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/") : jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
};
__decorate([ s(cc.Label) ], t.prototype, "label", void 0);
__decorate([ s({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "unicornWingAnimation", void 0);
__decorate([ s({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "unicornAnimation", void 0);
__decorate([ s(cc.AudioClip) ], t.prototype, "touchAudio", void 0);
__decorate([ s ], t.prototype, "text", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/uitls/CocosHelper_my": "CocosHelper_my",
"../common/uitls/TransitionScene_my": "TransitionScene_my"
} ],
iosTouch: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "07ec5dqekZORJCikWHTI/qB", "iosTouch");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/uitls/TransitionScene_my"), c = e("./HttpUtils"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
c.default.getInstance().getJsonData();
};
t.prototype.touchUrl = function() {
cc.sys.platform == cc.sys.ANDROID ? jsToCPP.getInstance().openUrl("https://www.kidskitchenfunmedia.com/privacys/") : jsToCPP.getInstance().openUrl("https://www.crazykidsgamesmedia.com/privacys/");
};
t.prototype.touchStart = function(e, t) {
e.target.getComponent(cc.Button).interactable = !1;
n.default.changeScene("home", "temp");
cc.loader.loadRes("button_general.mp3", cc.AudioClip, function(e, t) {
cc.audioEngine.play(t, !1, 1);
});
};
__decorate([ s(cc.Label) ], t.prototype, "label", void 0);
__decorate([ s ], t.prototype, "text", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/uitls/TransitionScene_my": "TransitionScene_my",
"./HttpUtils": "HttpUtils"
} ],
loadingMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b8cd5zJJzBOOYjsell7oP4A", "loadingMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.jump = null;
return t;
}
t.prototype.start = function() {
for (var e = this, t = [ 3, 5, 2, 1, 0 ], o = function(o) {
var c = Number(t[o]), i = n.CocosHelper.findNode(cc.Canvas.instance.node, "monster" + c), a = i.height;
i.runAction(cc.sequence(cc.delayTime(.75 * o), cc.callFunc(function() {
cc.audioEngine.playEffect(e.jump, !1);
}), cc.jumpBy(1, cc.v2(0, 0), a, 1), cc.callFunc(function() {
o == t.length - 1 && cc.director.loadScene("homeSceneMS");
})));
}, c = 0; c < t.length; c++) o(c);
};
__decorate([ a(cc.Label) ], t.prototype, "label", void 0);
__decorate([ a ], t.prototype, "text", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "jump", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS"
} ],
loading_adsMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "965a3VShZlCBZZ1sI3Cl1+U", "loading_adsMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.jump = null;
return t;
}
t.prototype.start = function() {
for (var e = this, t = [ 3, 5, 2, 1, 0 ], o = function(o) {
var c = Number(t[o]), i = n.node.getChildByName("monster" + c), a = i.height;
i.runAction(cc.sequence(cc.delayTime(.5 * o), cc.callFunc(function() {
cc.audioEngine.playEffect(e.jump, !1);
}), cc.jumpBy(1, cc.v2(0, 0), a, 1), cc.callFunc(function() {})));
}, n = this, c = 0; c < t.length; c++) o(c);
};
__decorate([ i(cc.Label) ], t.prototype, "label", void 0);
__decorate([ i ], t.prototype, "text", void 0);
__decorate([ i(cc.AudioClip) ], t.prototype, "jump", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
make1AddSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1f218YF9VhFRa+DvIkkH8Yu", "make1AddSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../../common/common/Script/compoent/MoveInMS"), i = e("../../common/common/Script/codebase/SpriteDrag/SpriteDragMS"), a = e("../fallSpriteCompoentMS"), s = e("../../common/common/Script/codebase/TransitionSceneMS"), r = cc._decorator, l = r.ccclass, d = r.property, p = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.winAudio = null;
t.toolIndex = 0;
return t;
}
t.prototype.start = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("bowl_up").zIndex = 100;
for (var e = [ "slimeactivator", "clearglue" ], t = function(t) {
var o = e[t], a = n.CocosHelper.findNode(cc.Canvas.instance.node, o);
a.getComponent(c.default).actionCallBack = function() {
var e = a.getComponent(i.default);
e && (e.enabled = !0);
if ("slimeactivator" == o) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
t.zIndex = 100;
n.CocosHelper.showHand(t, a, a, n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"));
}
};
}, o = 0; o < e.length; o++) t(o);
};
t.prototype.touchBegin = function(e, t, o, c) {
console.log("touchBegin");
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
i.stopAllActions();
i.active = !1;
var a = t.moveNode;
a.getChildByName("shadow") && (a.getChildByName("shadow").active = !1);
};
t.prototype.touchCancle = function(e, t, o, n) {
var c = t.moveNode;
c.getChildByName("shadow") && (c.getChildByName("shadow").active = !1);
};
t.prototype.touchEnd = function(e, t, o, n) {
var c = this;
console.log("TouchEnd");
var i = t.moveNode;
t.enabled = !1;
i.getChildByName("shadow") && (i.getChildByName("shadow").active = !1);
var s = i.getComponent(a.default);
if (s) {
s.enabled = !0;
s.actionStartCallBack = function() {
console.log(i.name);
"clearglue" == i.name && (i.getChildByName("clearglue_top").active = !1);
};
s.actionEndCallBack = function() {
c.toolIndex = c.toolIndex + 1;
2 == c.toolIndex && c.dealNext();
};
}
};
t.prototype.dealNext = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("spoon");
e.active = !0;
var t = e.getComponent(c.default);
t.enabled = !0;
t.actionCallBack = function() {
console.log("spoonmoveInCm.actionCallBack");
e.getComponent(i.default).enabled = !0;
};
};
t.prototype.mixEND = function() {
var e = this;
console.log("mixEnd");
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("spoon");
t.getComponent(i.default).enabled = !1;
n.CocosHelper.hideNode(t, n.CocosHelper.ShowDirection.show_from_top, function() {
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "flowerHeart");
o.active = !0;
o.getComponent(cc.ParticleSystem).resetSystem();
t.active = !1;
cc.audioEngine.playEffect(e.winAudio, !1);
setTimeout(function() {
s.default.changeScene("make2AddSceneMS");
}, 2e3);
});
};
__decorate([ d(cc.Label) ], t.prototype, "label", void 0);
__decorate([ d ], t.prototype, "text", void 0);
__decorate([ d(cc.AudioClip) ], t.prototype, "winAudio", void 0);
return t = __decorate([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../../common/common/Script/compoent/MoveInMS": "MoveInMS",
"../fallSpriteCompoentMS": "fallSpriteCompoentMS"
} ],
make1MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7e5e0JCrRNM4aMZ3Xq9SWEi", "make1MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/SpriteDrag/SpriteDragMS"), c = e("../common/common/Script/codebase/utils/CocosHelperMS"), i = e("../common/common/Script/compoent/MoveInMS"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.done = null;
t.indexIng = 0;
t.soundIndex = -1;
t.totalContent = 400;
return t;
}
t.prototype.start = function() {
var e = this, t = this.node.getChildByName("tool");
t.getComponent(i.default).actionCallBack = function() {
t.getComponent(n.default).enabled = !0;
var o = e.node.getChildByName("progressBar");
o.opacity = 0;
o.active = !0;
o.runAction(cc.fadeIn(1));
o.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.015), cc.callFunc(function() {
o.getComponent(cc.ProgressBar).progress = o.getComponent(cc.ProgressBar).progress + .005;
if (o.getComponent(cc.ProgressBar).progress > 1) {
cc.audioEngine.stopAllEffects();
o.stopAllActions();
var t = e.node.getChildByName("tool"), n = e.node.getChildByName("box");
c.CocosHelper.hideNode(t, c.CocosHelper.ShowDirection.show_from_right);
c.CocosHelper.hideNode(n, c.CocosHelper.ShowDirection.show_from_right);
i.getChildByName("decorateParticle").active = !0;
cc.audioEngine.playEffect(e.done, !1);
e.showNext();
}
}))));
var i = e.node.getChildByName("slime"), a = i.getChildByName("slime_in");
a.opacity = 0;
a.active = !0;
a.runAction(cc.fadeIn(4));
var s = e.node.getChildByName("tool");
s.getChildByName("tool_p").active = !0;
s.getChildByName("tool_p").getComponent(cc.ParticleSystem).resetSystem();
t.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {}), cc.delayTime(1.5))));
s.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(-20, 0)), cc.moveBy(1, cc.v2(20, 0)))));
};
};
t.prototype.showNext = function() {};
t.prototype.touchBegin = function(e, t, o, n) {
console.log("touchBegin");
};
t.prototype.touchIng = function(e, t, o, n) {};
t.prototype.touchCancle = function(e, t, o, n) {};
t.prototype.touchEnd = function(e, t, o, n) {};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
__decorate([ r ], t.prototype, "text", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "done", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../common/common/Script/codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS"
} ],
make2AddSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "51729HWgIpL3qKJyqnjAfOJ", "make2AddSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../../common/common/Script/compoent/MoveInMS"), i = e("../../common/common/Script/codebase/SpriteDrag/SpriteDragMS"), a = e("../TipManagerMS"), s = e("../../common/common/Script/CombinedComponent/MixComponentMS"), r = e("../../common/common/Script/codebase/TransitionSceneMS"), l = cc._decorator, d = l.ccclass, p = l.property, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.fly = null;
t.cut = null;
t.fallAudio = null;
t.power = null;
t.scoroop = null;
t.sauceAudio = null;
t.mixBlenderAnimation = [];
t.winAudio = null;
t.isTouchToolBool = !1;
t.toolIndex = 0;
t.zorder = 0;
t.showlipstickHanf = !1;
t.touchSauceSoundT = -1;
t.touchSauceSound = -1;
t.slwwpSound = 0;
t.leftSoundIndex = -1;
t.rightSoundIndex = -1;
t.leftSoundIndexeye = 0;
t.rightSoundIndexeye = 0;
t.stepLeft = 0;
t.stepRight = 0;
t.isJumpNextStep = !1;
t.mixIndex = 0;
return t;
}
t.prototype.start = function() {
for (var e = this, t = [ "bowl_l_content", "bowl_r_content" ], o = function(e) {
for (var o = t[e], s = n.CocosHelper.findNode(cc.Canvas.instance.node, o), r = 0, l = s.children; r < l.length; r++) {
var d = l[r];
"bowl" != d.name && (d.active = !1);
}
var p = s.getComponent(c.default), u = a;
p.actionCallBack = function() {
for (var e, t = 0, o = function(o) {
if ("bowl" != o.name) {
o.active = !1;
var n = o.position, c = 260 - 520 * Math.random(), a = 260 - 520 * Math.random(), r = cc.v2(n.x + c, n.y + a), l = [ "bowl_l_content" == s.name ? cc.v2(-500, 500) : cc.v2(500, 500), r, n ];
o.position = cc.v2(-500, 500);
e = cc.cardinalSplineTo(1.5, l, 0);
o.active = !0;
o.runAction(cc.sequence(cc.delayTime(.2 * t), cc.callFunc(function() {
cc.audioEngine.playEffect(u.fly, !1);
}), e, cc.callFunc(function() {
var e = o.getComponent(i.default);
e && (e.enabled = !0);
})));
}
t++;
}, n = 0, c = s.children; n < c.length; n++) {
o(c[n]);
}
};
}, a = this, s = 0; s < t.length; s++) o(s);
n.CocosHelper.findNode(cc.Canvas.instance.node, "bg").runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
if (!e.isTouchToolBool) for (var t = [ "bowl_l_content", "bowl_r_content" ], o = 0; o < t.length; o++) for (var c = t[o], a = 0, s = n.CocosHelper.findNode(cc.Canvas.instance.node, c).children; a < s.length; a++) {
var r = s[a];
if ("bowl" != r.name) {
var l = r.getComponent(i.default);
if (l && l.enabled) {
r.runAction(cc.jumpBy(.5, cc.v2(0, 0), 40, 2));
break;
}
}
}
}), cc.delayTime(5))));
};
t.prototype.touchBegin = function(e, t, o, n) {
console.log("touchBegin");
this.isTouchToolBool = !0;
};
t.prototype.touchCancle = function(e, t, o, n) {};
t.prototype.touchEnd = function(e, t, o, n) {
console.log("TouchEnd");
var c = t.moveNode;
t.enabled = !1;
this.isTouchToolBool = !1;
c.parent.name;
"lipstick" == c.name && this.dolipstick(c, c.parent.getChildByName("bowl"));
"eyeshadow_pen" == c.name && this.doeyeshadow_pen(c, c.parent.getChildByName("bowl"));
"nailpolish" == c.name && this.donailpolish(c, c.parent.getChildByName("bowl"));
"eyeshadowblink" == c.name && this.doeyeshadowblink(c, c.parent.getChildByName("bowl"));
"eyeshadow" == c.name && this.doeyeshadow(c, c.parent.getChildByName("bowl"));
"sleepingmask" == c.name && this.dosleepingmask(c, c.parent.getChildByName("bowl"));
"glitter" == c.name && this.doglitter(c, c.parent.getChildByName("bowl"));
"glitter" == c.name && this.doglitter(c, c.parent.getChildByName("bowl"));
"facialgel" == c.name && this.dofacialgel(c, c.parent.getChildByName("bowl"));
"lipgloss" == c.name && this.dolipgloss(c, c.parent.getChildByName("bowl"));
};
t.prototype.dolipgloss = function(e, t) {
var o = this, n = t.getChildByName("lipgloss_bowl"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
n.on(cc.Node.EventType.TOUCH_START, o.ipglossTouch, o);
n.on(cc.Node.EventType.TOUCH_CANCEL, o.ipglossEnd, o);
n.on(cc.Node.EventType.TOUCH_END, o.ipglossEnd, o);
var c = n.getChildByName("lipgloss_bowl_in");
c.scale = 0;
c.active = !0;
c.runAction(cc.sequence(cc.scaleTo(2, .5), cc.callFunc(function() {
n.targetOff(o);
var e = t.getChildByName("bowl_mix").getChildByName("bowl_lipgloss"), i = e.convertToWorldSpaceAR(cc.v2(0, 0)), a = c.parent.convertToNodeSpaceAR(i);
c.runAction(cc.sequence(cc.jumpTo(.5, a, 50, 1), cc.callFunc(function() {
c.active = !1;
e.active = !0;
o.zorder = o.zorder + 1;
e.zIndex = o.zorder;
cc.audioEngine.stopEffect(o.touchSauceSoundT);
n.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
})));
cc.director.getActionManager().pauseTarget(c);
})));
};
t.prototype.ipglossTouch = function(e) {
this.isTouchToolBool = !0;
var t = e.target.getChildByName("lipgloss_bowl_in");
cc.director.getActionManager().resumeTarget(t);
this.touchSauceSoundT = cc.audioEngine.playEffect(this.sauceAudio, !0);
};
t.prototype.ipglossEnd = function(e) {
this.isTouchToolBool = !1;
var t = e.target.getChildByName("lipgloss_bowl_in");
cc.director.getActionManager().pauseTarget(t);
cc.audioEngine.stopEffect(this.touchSauceSoundT);
};
t.prototype.dofacialgel = function(e, t) {
var o = this, n = t.getChildByName("facialgel_bowl"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
n.on(cc.Node.EventType.TOUCH_START, o.facialgelTouch, o);
n.on(cc.Node.EventType.TOUCH_CANCEL, o.facialgelEnd, o);
n.on(cc.Node.EventType.TOUCH_END, o.facialgelEnd, o);
var c = n.getChildByName("facialgel_in");
c.scale = 0;
c.active = !0;
c.runAction(cc.sequence(cc.scaleTo(2, 2), cc.callFunc(function() {
n.targetOff(o);
var e = t.getChildByName("bowl_mix").getChildByName("bowl_facialgel"), i = e.convertToWorldSpaceAR(cc.v2(0, 0)), a = c.parent.convertToNodeSpaceAR(i);
c.runAction(cc.sequence(cc.jumpTo(.5, a, 50, 1), cc.callFunc(function() {
c.active = !1;
e.active = !0;
o.zorder = o.zorder + 1;
e.zIndex = o.zorder;
cc.audioEngine.stopEffect(o.touchSauceSound);
n.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
})));
cc.director.getActionManager().pauseTarget(c);
})));
};
t.prototype.facialgelTouch = function(e) {
this.isTouchToolBool = !0;
var t = e.target.getChildByName("facialgel_in");
cc.director.getActionManager().resumeTarget(t);
this.touchSauceSound = cc.audioEngine.playEffect(this.sauceAudio, !0);
};
t.prototype.facialgelEnd = function(e) {
this.isTouchToolBool = !1;
var t = e.target.getChildByName("facialgel_in");
cc.director.getActionManager().pauseTarget(t);
cc.audioEngine.stopEffect(this.touchSauceSound);
};
t.prototype.doglitter = function(e, t) {
var o = this, n = t.getChildByName("bowl_glitter"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
o.isTouchToolBool = !1;
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
var c = n.getChildByName("glitter_p");
c.active = !0;
var i = t.getChildByName("bowl_mix").getChildByName("bowl_glitter");
i.active = !0;
i.scale = 0;
o.zorder = o.zorder + 1;
i.zIndex = o.zorder;
cc.audioEngine.playEffect(o.power, !1);
n.runAction(cc.sequence(cc.jumpBy(1, cc.v2(0, 0), 50, 2), cc.delayTime(1), cc.callFunc(function() {
cc.audioEngine.playEffect(o.power, !1);
}), cc.jumpBy(1, cc.v2(0, 0), 50, 2)));
i.runAction(cc.sequence(cc.scaleTo(3.5, 1), cc.callFunc(function() {
c.active = !1;
n.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
})));
};
t.prototype.dosleepingmask = function(e, t) {
var o = this, n = t.getChildByName("sleepingmask"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
o.isTouchToolBool = !1;
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
var c = n.getChildByName("sleepingmask_spoon"), i = c.position;
c.position = cc.v2(0, 1500);
c.active = !0;
c.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
c.on(cc.Node.EventType.TOUCH_START, o.sleepingmaskTouch, o);
c.on(cc.Node.EventType.TOUCH_CANCEL, o.sleepingmaskEnd, o);
c.on(cc.Node.EventType.TOUCH_END, o.sleepingmaskEnd, o);
c.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.25, cc.v2(-10, 7)), cc.moveBy(.25, cc.v2(10, -7)))));
var e = t.getChildByName("bowl_mix").getChildByName("bowl_sleepingmask");
e.active = !0;
e.scale = 0;
e.runAction(cc.sequence(cc.scaleTo(2.5, 1), cc.callFunc(function() {
c.targetOff(o);
cc.audioEngine.stopEffect(o.slwwpSound);
c.getChildByName("sleepingmask_spoon_p").active = !1;
c.stopAllActions();
c.parent.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
o.zorder = o.zorder + 1;
e.zIndex = o.zorder;
cc.director.getActionManager().pauseTarget(e);
cc.director.getActionManager().pauseTarget(c);
})));
})));
};
t.prototype.sleepingmaskTouch = function(e) {
this.isTouchToolBool = !0;
console.log("eyeshadowblinkTouch");
var t = e.target, o = t, n = o.getChildByName("sleepingmask_spoon_p"), c = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_sleepingmask");
cc.director.getActionManager().resumeTarget(c);
cc.director.getActionManager().resumeTarget(o);
n.active = !0;
t.parent.parent.parent;
this.slwwpSound = cc.audioEngine.playEffect(this.scoroop, !0);
};
t.prototype.sleepingmaskEnd = function(e) {
this.isTouchToolBool = !1;
var t = e.target, o = t, n = o.getChildByName("sleepingmask_spoon_p"), c = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_sleepingmask");
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(o);
n.active = !1;
t.parent.parent.parent;
cc.audioEngine.stopEffect(this.slwwpSound);
};
t.prototype.dolipstick = function(e, t) {
var o = this;
e.runAction(cc.sequence(cc.jumpTo(.5, cc.v2(t.position.x + 40, t.position.y + 150), 50, 1), cc.rotateTo(.2, -110), cc.callFunc(function() {
if (!o.showlipstickHanf) {
o.showlipstickHanf = !0;
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
t.zIndex = 100;
t.position = t.parent.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(0, 0)));
t.active = !0;
t.stopAllActions();
t.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.callFunc(function() {
t.active = !1;
})));
}
e.on(cc.Node.EventType.TOUCH_START, o.lipsticknodeTouch, o);
})));
};
t.prototype.lipsticknodeTouch = function(e) {
var t = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "finger").active = !1;
this.isTouchToolBool = !0;
var o = e.target;
o.targetOff(this);
var c = o.getChildByName("lipstick_in"), i = o.parent.getChildByName("bowl");
if (c) {
var a = c.parent.convertToWorldSpaceAR(c.position);
c.parent = i;
c.position = c.parent.convertToNodeSpaceAR(a);
var s = i.getChildByName("bowl_mix").getChildByName("bowl_lipstick");
cc.audioEngine.playEffect(this.cut, !1);
o.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
this.doStep(i.parent.name);
c.runAction(cc.sequence(cc.spawn(cc.rotateTo(.5, s.rotation), cc.jumpTo(.5, s.position, 50, 1)), cc.callFunc(function() {
t.isTouchToolBool = !1;
s.active = !0;
c.active = !1;
t.zorder = t.zorder + 1;
s.zIndex = t.zorder;
})));
}
};
t.prototype.doeyeshadow_pen = function(e, t) {
var o = this;
e.runAction(cc.sequence(cc.jumpTo(.5, cc.v2(t.position.x + 40, t.position.y + 150), 50, 1), cc.rotateTo(.2, -110), cc.callFunc(function() {
if (!o.showlipstickHanf) {
o.showlipstickHanf = !0;
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
t.zIndex = 100;
t.position = t.parent.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.v2(0, 0)));
t.active = !0;
t.stopAllActions();
t.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.callFunc(function() {
t.active = !1;
})));
}
e.on(cc.Node.EventType.TOUCH_START, o.eyeshadow_penTouch, o);
})));
};
t.prototype.eyeshadow_penTouch = function(e) {
var t = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "finger").active = !1;
var o = e.target;
o.targetOff(this);
var c = o.getChildByName("eyeshadow_pen_in"), i = o.parent.getChildByName("bowl");
if (c) {
var a = c.parent.convertToWorldSpaceAR(c.position);
c.parent = i;
c.position = c.parent.convertToNodeSpaceAR(a);
var s = i.getChildByName("bowl_mix").getChildByName("bowl_eyeshadow_pen");
cc.audioEngine.playEffect(this.cut, !1);
o.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
this.doStep(i.parent.name);
c.runAction(cc.sequence(cc.spawn(cc.rotateTo(.5, s.rotation), cc.jumpTo(.5, s.position, 50, 1)), cc.callFunc(function() {
t.isTouchToolBool = !1;
s.active = !0;
c.active = !1;
t.zorder = t.zorder + 1;
s.zIndex = t.zorder;
})));
}
};
t.prototype.donailpolish = function(e, t) {
var o = this, n = t.getChildByName("bowl_nailpolish"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
e.active = !1;
n.active = !0;
n.getChildByName("bowl_nailpolish_p").active = !0;
var c = t.getChildByName("bowl_mix").getChildByName("bowl_nailpolish_in");
c.active = !0;
c.scale = 0;
o.zorder = o.zorder + 1;
c.zIndex = o.zorder;
cc.audioEngine.playEffect(o.fallAudio, !1);
o.isTouchToolBool = !1;
c.runAction(cc.sequence(cc.scaleTo(2, 1), cc.callFunc(function() {
n.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
})));
};
t.prototype.doeyeshadowblink = function(e, t) {
var o = this, n = t.getChildByName("eyeshadowblink_bowl"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
o.isTouchToolBool = !1;
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
var c = n.getChildByName("eyeshadowblink_spoon"), i = c.position;
c.position = cc.v2(0, 1500);
c.active = !0;
c.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
c.on(cc.Node.EventType.TOUCH_START, o.eyeshadowblinkTouch, o);
c.on(cc.Node.EventType.TOUCH_CANCEL, o.eyeshadowblinkEnd, o);
c.on(cc.Node.EventType.TOUCH_END, o.eyeshadowblinkEnd, o);
c.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.25, cc.v2(7, 7)), cc.moveBy(.25, cc.v2(-7, -7)))));
var e = t.getChildByName("bowl_mix").getChildByName("bowl_eyeshadowblink");
e.active = !0;
e.scale = 0;
e.runAction(cc.sequence(cc.scaleTo(2, 1), cc.callFunc(function() {})));
var i = n.getChildByName("eyeshadowblink_in");
o.zorder = o.zorder + 1;
e.zIndex = o.zorder;
i.runAction(cc.sequence(cc.fadeOut(4), cc.callFunc(function() {
c.targetOff(o);
cc.audioEngine.stopEffect(o.leftSoundIndex);
cc.audioEngine.stopEffect(o.rightSoundIndex);
n.getChildByName("eyeshadowblink_bowl_p").active = !1;
c.parent.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
cc.director.getActionManager().pauseTarget(e);
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(i);
})));
})));
};
t.prototype.eyeshadowblinkTouch = function(e) {
this.isTouchToolBool = !0;
console.log("eyeshadowblinkTouch");
var t = e.target, o = t.parent.getChildByName("eyeshadowblink_spoon"), n = t.parent.getChildByName("eyeshadowblink_bowl_p"), c = t.parent.getChildByName("eyeshadowblink_in"), i = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_eyeshadowblink");
cc.director.getActionManager().resumeTarget(i);
cc.director.getActionManager().resumeTarget(o);
cc.director.getActionManager().resumeTarget(c);
n.active = !0;
var a = t.parent.parent.parent;
"bowl_l_content" == a.name && (this.leftSoundIndex = cc.audioEngine.playEffect(this.power, !0));
"bowl_r_content" == a.name && (this.rightSoundIndex = cc.audioEngine.playEffect(this.power, !0));
};
t.prototype.eyeshadowblinkEnd = function(e) {
this.isTouchToolBool = !1;
var t = e.target, o = t.parent.getChildByName("eyeshadowblink_spoon"), n = t.parent.getChildByName("eyeshadowblink_bowl_p"), c = t.parent.getChildByName("eyeshadowblink_in"), i = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_eyeshadowblink");
cc.director.getActionManager().pauseTarget(i);
cc.director.getActionManager().pauseTarget(o);
cc.director.getActionManager().pauseTarget(c);
n.active = !1;
var a = t.parent.parent.parent;
if ("bowl_l_content" == a.name) {
cc.audioEngine.stopEffect(this.leftSoundIndex);
cc.audioEngine.stopEffect(this.leftSoundIndex);
cc.audioEngine.stopEffect(this.rightSoundIndex);
}
if ("bowl_r_content" == a.name) {
cc.audioEngine.stopEffect(this.rightSoundIndex);
cc.audioEngine.stopEffect(this.leftSoundIndex);
cc.audioEngine.stopEffect(this.rightSoundIndex);
}
};
t.prototype.doeyeshadow = function(e, t) {
var o = this, n = t.getChildByName("eyeshadow_bowl"), c = n.convertToWorldSpaceAR(cc.v2(0, 0)), i = e.parent.convertToNodeSpaceAR(c);
e.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
e.active = !1;
n.active = !0;
o.zorder = o.zorder + 1;
n.zIndex = o.zorder;
var c = n.getChildByName("eyeshadow_spoon"), i = c.position;
c.position = cc.v2(0, 1500);
c.active = !0;
c.runAction(cc.sequence(cc.jumpTo(.5, i, 50, 1), cc.callFunc(function() {
c.on(cc.Node.EventType.TOUCH_START, o.eyeshadowTouch, o);
c.on(cc.Node.EventType.TOUCH_CANCEL, o.eyeshadowEnd, o);
c.on(cc.Node.EventType.TOUCH_END, o.eyeshadowEnd, o);
c.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.25, cc.v2(7, 7)), cc.moveBy(.25, cc.v2(-7, -7)))));
var e = t.getChildByName("bowl_mix").getChildByName("bowl_eyeshadow");
e.active = !0;
e.scale = 0;
e.runAction(cc.sequence(cc.scaleTo(4, 1), cc.callFunc(function() {})));
var i = n.getChildByName("eyeshadow_in");
o.zorder = o.zorder + 1;
e.zIndex = o.zorder;
i.runAction(cc.sequence(cc.fadeOut(4), cc.callFunc(function() {
c.targetOff(o);
cc.audioEngine.stopEffect(o.leftSoundIndexeye);
cc.audioEngine.stopEffect(o.rightSoundIndexeye);
n.getChildByName("eyeshadow_p").active = !1;
c.parent.runAction(cc.sequence(cc.moveBy(1, cc.v2(1e3, 0)), cc.hide()));
o.doStep(t.parent.name);
})));
cc.director.getActionManager().pauseTarget(e);
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(i);
})));
})));
};
t.prototype.eyeshadowTouch = function(e) {
console.log("eyeshadowblinkTouch");
var t = e.target, o = t.parent.getChildByName("eyeshadow_spoon"), n = t.parent.getChildByName("eyeshadow_p"), c = t.parent.getChildByName("eyeshadow_in"), i = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_eyeshadow");
cc.director.getActionManager().resumeTarget(i);
cc.director.getActionManager().resumeTarget(o);
cc.director.getActionManager().resumeTarget(c);
n.active = !0;
var a = t.parent.parent.parent;
"bowl_l_content" == a.name && (this.leftSoundIndexeye = cc.audioEngine.playEffect(this.power, !0));
"bowl_r_content" == a.name && (this.rightSoundIndexeye = cc.audioEngine.playEffect(this.power, !0));
};
t.prototype.eyeshadowEnd = function(e) {
var t = e.target, o = t.parent.getChildByName("eyeshadow_spoon"), n = t.parent.getChildByName("eyeshadow_p"), c = t.parent.getChildByName("eyeshadow_in"), i = t.parent.parent.getChildByName("bowl_mix").getChildByName("bowl_eyeshadow");
cc.director.getActionManager().pauseTarget(i);
cc.director.getActionManager().pauseTarget(o);
cc.director.getActionManager().pauseTarget(c);
n.active = !1;
var a = t.parent.parent.parent;
if ("bowl_l_content" == a.name) {
cc.audioEngine.stopEffect(this.leftSoundIndexeye);
cc.audioEngine.stopEffect(this.leftSoundIndexeye);
cc.audioEngine.stopEffect(this.rightSoundIndexeye);
}
if ("bowl_r_content" == a.name) {
cc.audioEngine.stopEffect(this.rightSoundIndexeye);
cc.audioEngine.stopEffect(this.leftSoundIndexeye);
cc.audioEngine.stopEffect(this.rightSoundIndexeye);
}
};
t.prototype.doStep = function(e) {
var t = "bowl_l_content" == e ? "blue" : "pink";
"blue" == t && (this.stepLeft = this.stepLeft + 1);
"pink" == t && (this.stepRight = this.stepRight + 1);
console.log(this.stepLeft + "----" + this.stepRight);
if (2 == this.stepLeft && 2 == this.stepRight) {
if ("isFirst" == cc.sys.localStorage.getItem("isFirst")) {
cc.sys.localStorage.setItem("isFirst", "isFirst");
(o = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next")).active = !0;
o.scale = 0;
o.runAction(cc.scaleTo(1, 1));
}
cc.sys.localStorage.setItem("isFirst", "isFirst");
}
(this.stepRight + this.stepLeft) % 2 == 0 && a.default.getInstance().jumpTips();
if (this.stepRight + this.stepLeft >= 15) {
var o;
(o = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next")).active = !1;
this.showNextBigStep();
}
};
t.prototype.touchNext = function(e) {
var t = e.target;
t.getComponent(cc.Button).interactable = !1;
t.getComponent(cc.AudioSource) && t.getComponent(cc.AudioSource).play();
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").active = !1;
this.showNextBigStep();
};
t.prototype.showNextBigStep = function() {
var e = this;
if (!this.isJumpNextStep) {
this.isJumpNextStep = !0;
for (var t = [ "bowl_l_content", "bowl_r_content" ], o = function(o) {
for (var c = t[o], a = n.CocosHelper.findNode(cc.Canvas.instance.node, c), s = 0, r = a.children; s < r.length; s++) {
var l = r[s];
if ("bowl" != l.name) {
l.runAction(cc.fadeOut(1));
l.getComponent(i.default) && (l.getComponent(i.default).enabled = !1);
} else {
l.runAction(cc.moveBy(1, cc.v2(0, 60)));
var d = l.getChildByName("bowl_hand");
d.active = !0;
d.position = cc.v2(0, -500);
d.runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(-8, -175)), cc.callFunc(function() {
if ("bowl_l_content" == a.name) {
e.handLeft();
e.handRight();
}
})));
}
}
}, c = 0; c < t.length; c++) o(c);
}
};
t.prototype.handLeft = function() {
for (var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l_content").getChildByName("bowl"), t = e.getChildByName("bowl_hand"), o = [], c = t.getComponent(cc.Sprite), i = function(e) {
o.push(cc.callFunc(function() {
c.spriteFrame = e;
}));
o.push(cc.delayTime(.45));
}, a = 0, r = this.mixBlenderAnimation; a < r.length; a++) {
i(r[a]);
}
var l = cc.repeatForever(cc.sequence(o));
t.runAction(l);
t.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
cc.director.getActionManager().pauseTarget(t);
var d = e.getChildByName("bowl_mix"), p = cc.scaleTo(.7, 1, .95), u = cc.scaleTo(.7, .95, 1.08), h = cc.repeatForever(cc.sequence(p, u));
d.runAction(h);
cc.director.getActionManager().pauseTarget(d);
t.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.getActionManager().resumeTarget(t);
cc.director.getActionManager().resumeTarget(d);
d.getComponent(s.default).startMix();
}, this);
t.on(cc.Node.EventType.TOUCH_CANCEL, function() {
cc.director.getActionManager().pauseTarget(t);
cc.director.getActionManager().pauseTarget(d);
d.getComponent(s.default).stopMix();
}, this);
t.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.getActionManager().pauseTarget(t);
cc.director.getActionManager().pauseTarget(d);
d.getComponent(s.default).stopMix();
}, this);
};
t.prototype.handRight = function() {
for (var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r_content").getChildByName("bowl"), t = e.getChildByName("bowl_hand"), o = [], c = t.getComponent(cc.Sprite), i = function(e) {
o.push(cc.callFunc(function() {
c.spriteFrame = e;
}));
o.push(cc.delayTime(.45));
}, a = 0, r = this.mixBlenderAnimation; a < r.length; a++) {
i(r[a]);
}
var l = cc.repeatForever(cc.sequence(o));
t.runAction(l);
t.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
cc.director.getActionManager().pauseTarget(t);
var d = e.getChildByName("bowl_mix"), p = cc.scaleTo(.7, 1, .95), u = cc.scaleTo(.7, .95, 1.08), h = cc.repeatForever(cc.sequence(p, u));
d.runAction(h);
cc.director.getActionManager().pauseTarget(d);
t.on(cc.Node.EventType.TOUCH_START, function() {
cc.director.getActionManager().resumeTarget(t);
cc.director.getActionManager().resumeTarget(d);
d.getComponent(s.default).startMix();
}, this);
t.on(cc.Node.EventType.TOUCH_CANCEL, function() {
cc.director.getActionManager().pauseTarget(t);
cc.director.getActionManager().pauseTarget(d);
d.getComponent(s.default).stopMix();
}, this);
t.on(cc.Node.EventType.TOUCH_END, function() {
cc.director.getActionManager().pauseTarget(t);
cc.director.getActionManager().pauseTarget(d);
d.getComponent(s.default).stopMix();
}, this);
};
t.prototype.mixEndRight = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r_content").getChildByName("bowl"), t = e.getChildByName("bowl_hand"), o = e.getChildByName("bowl_mix");
o.getComponent(s.default).stopMix();
t.targetOff(this);
t.stopAllActions();
o.stopAllActions();
o.scale = 1;
t.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, -1e3)), cc.hide()));
a.default.getInstance().jumpTips();
this.mixIndex = this.mixIndex + 1;
if (2 == this.mixIndex) {
this.mixIndex = 2e3;
this.makeOver();
}
};
t.prototype.mixEndLeft = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l_content").getChildByName("bowl"), t = e.getChildByName("bowl_hand"), o = e.getChildByName("bowl_mix");
o.getComponent(s.default).stopMix();
t.targetOff(this);
t.stopAllActions();
o.stopAllActions();
o.scale = 1;
t.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, -1e3)), cc.hide()));
a.default.getInstance().jumpTips();
this.mixIndex = this.mixIndex + 1;
if (2 == this.mixIndex) {
this.mixIndex = 2e3;
this.makeOver();
}
};
t.prototype.makeOver = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "flowerHeart");
e.active = !0;
e.getComponent(cc.ParticleSystem).resetSystem();
cc.audioEngine.playEffect(this.winAudio, !1);
setTimeout(function() {
r.default.changeScene("selectColorSceneMS");
}, 2e3);
};
__decorate([ p(cc.Label) ], t.prototype, "label", void 0);
__decorate([ p ], t.prototype, "text", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "fly", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "cut", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "fallAudio", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "power", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "scoroop", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "sauceAudio", void 0);
__decorate([ p({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "mixBlenderAnimation", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "winAudio", void 0);
return t = __decorate([ d ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../common/common/Script/CombinedComponent/MixComponentMS": "MixComponentMS",
"../../common/common/Script/codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../../common/common/Script/compoent/MoveInMS": "MoveInMS",
"../TipManagerMS": "TipManagerMS"
} ],
make2MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d1b452BBmpMrpmU0eXulm89", "make2MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/SpriteDrag/SpriteDragMS"), c = e("../common/common/Script/codebase/utils/CocosHelperMS"), i = e("../common/common/Script/compoent/MoveInMS"), a = e("./fallSpriteCompoentMS"), s = e("./DataConfigMS"), r = e("./tool/components/ShaderHelperMS"), l = e("./tool/components/ShaderTimeMS"), d = e("../common/common/Script/ads/showLaodingMS"), p = cc._decorator, u = p.ccclass, h = p.property, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.winAudio = null;
t.pushAudio = null;
t.foameFrame = null;
t.indexZ = 0;
t.isTouch = !1;
t.pushIndex = 1;
t.step = 0;
return t;
}
t.prototype.start = function() {
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
e.active = !0;
e.zIndex = 100;
e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(s.default.getInstance().getPageTexture());
e.getComponent(r.default).enabled = !0;
e.getComponent(l.default).enabled = !0;
c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("bowl_up").zIndex = 100;
for (var t = [ "borax", "vaseline", "schoolglue", "water" ], o = function(e) {
var o = t[e], a = c.CocosHelper.findNode(cc.Canvas.instance.node, o);
a.getComponent(i.default).actionCallBack = function() {
var e = a.getComponent(n.default);
e && (e.enabled = !0);
if ("water" == o) {
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
t.zIndex = 100;
c.CocosHelper.showHand(t, a, a, c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"));
}
};
}, a = 0; a < t.length; a++) o(a);
};
t.prototype.touchBegin = function(e, t, o, n) {
console.log("touchBegin");
var i = c.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
i.stopAllActions();
i.active = !1;
var a = t.moveNode;
a.getChildByName("shadow") && (a.getChildByName("shadow").active = !1);
};
t.prototype.touchCancle = function(e, t, o, n) {
var c = t.moveNode;
c.getChildByName("shadow") && (c.getChildByName("shadow").active = !1);
};
t.prototype.touchEnd = function(e, t, o, n) {
var i = this;
console.log("TouchEnd");
var s = t.moveNode;
t.enabled = !1;
s.getChildByName("shadow") && (s.getChildByName("shadow").active = !1);
if ("vaseline" == s.name) {
var r = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl"), l = s.parent.convertToNodeSpaceAR(r.convertToWorldSpaceAR(cc.v2(222, 76)));
s.runAction(cc.sequence(cc.jumpTo(.5, l, 100, 1), cc.rotateTo(.2, -45), cc.callFunc(function() {
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "finger2"), t = c.CocosHelper.findNode(cc.Canvas.instance.node, "chick");
t.position = t.parent.convertToNodeSpaceAR(s.convertToWorldSpaceAR(cc.v2(0, 0)));
e.position = e.parent.convertToNodeSpaceAR(s.convertToWorldSpaceAR(cc.v2(0, 0)));
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)))));
t.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 1.1))));
e.zIndex = 100;
t.zIndex = 100;
s.on(cc.Node.EventType.TOUCH_START, i.touchTool, i);
})));
}
var d = s.getComponent(a.default);
if (d) {
d.enabled = !0;
d.actionStartCallBack = function() {
console.log(s.name);
};
d.actionEndCallBack = function() {
i.indexZ = i.indexZ + 2;
d.bowlInFall.zIndex = i.indexZ;
i.dealNext();
};
}
};
t.prototype.touchTool = function(e, t) {
var o = this;
if (!this.isTouch) {
this.isTouch = !0;
var n = c.CocosHelper.findNode(cc.Canvas.instance.node, "finger2"), a = c.CocosHelper.findNode(cc.Canvas.instance.node, "chick");
n.stopAllActions();
n.active = !1;
a.stopAllActions();
a.active = !1;
cc.audioEngine.playEffect(this.pushAudio, !1);
var s = c.CocosHelper.findNode(cc.Canvas.instance.node, "vaseline"), r = s.getChildByName("vaseline_in");
s.getChildByName("vaseline_t");
r.runAction(cc.moveTo(.25, cc.v2(-14, 4)));
var l = r.getChildByName("bowl_foam" + this.pushIndex);
l.scale = 0;
l.active = !0;
var d = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("bowl_in"), p = this;
l.runAction(cc.sequence(cc.scaleTo(.25, .8), cc.callFunc(function() {
var e = l.parent.convertToWorldSpaceAR(l.position);
l.parent = d;
o.indexZ = o.indexZ + 2;
l.zIndex = o.indexZ;
l.position = l.parent.convertToNodeSpaceAR(e);
l.runAction(cc.sequence(cc.moveTo(.25, cc.v2(30 * o.pushIndex, 0)), cc.callFunc(function() {
r.runAction(cc.moveTo(.2, cc.v2(-14, 32)));
p.isTouch = !1;
p.pushIndex = p.pushIndex + 1;
if (4 == p.pushIndex) {
p.isTouch = !0;
c.CocosHelper.hideNode(s, i.ShowDirection.right);
p.dealNext();
}
})));
})));
}
};
t.prototype.dealNext = function() {
this.step = this.step + 1;
if (4 == this.step) {
var e = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("spoon");
e.active = !0;
var t = e.getComponent(i.default);
t.enabled = !0;
t.actionCallBack = function() {
e.getComponent(n.default).enabled = !0;
};
}
};
t.prototype.mixEND = function() {
var e = this;
console.log("mixEnd");
var t = c.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("spoon");
t.getComponent(n.default).enabled = !1;
c.CocosHelper.hideNode(t, c.CocosHelper.ShowDirection.show_from_top, function() {
var o = c.CocosHelper.findNode(cc.Canvas.instance.node, "flowerHeart");
o.active = !0;
o.getComponent(cc.ParticleSystem).resetSystem();
t.active = !1;
cc.audioEngine.playEffect(e.winAudio, !1);
var n = cc.view.getVisibleSize().width, i = cc.view.getVisibleSize().height;
c.CocosHelper.captureNodeSize(cc.Canvas.instance.node, n, i).then(function(e) {
null == e || s.default.getInstance().setPageTexture(e);
});
setTimeout(function() {
d.default.getInstance().showAds(!1);
d.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
d.default.getInstance().loadingDoneCallback = null;
cc.director.loadScene("play1SceneMS");
};
}, 3e3);
}, !1);
};
__decorate([ h(cc.Label) ], t.prototype, "label", void 0);
__decorate([ h ], t.prototype, "text", void 0);
__decorate([ h(cc.AudioClip) ], t.prototype, "winAudio", void 0);
__decorate([ h(cc.AudioClip) ], t.prototype, "pushAudio", void 0);
__decorate([ h(cc.SpriteFrame) ], t.prototype, "foameFrame", void 0);
return t = __decorate([ u ], t);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"../common/common/Script/codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./DataConfigMS": "DataConfigMS",
"./fallSpriteCompoentMS": "fallSpriteCompoentMS",
"./tool/components/ShaderHelperMS": "ShaderHelperMS",
"./tool/components/ShaderTimeMS": "ShaderTimeMS"
} ],
platorm: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "aa9909PXs1AmZ60MbFjBT/f", "platorm");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
if (cc.sys.platform == cc.sys.ANDROID) {
this.node.getChildByName("bg").active = !1;
this.node.getChildByName("kids0").active = !1;
this.node.getChildByName("crazy").active = !1;
} else this.node.getChildByName("loading_bg").active = !1;
};
__decorate([ i(cc.Label) ], t.prototype, "label", void 0);
__decorate([ i ], t.prototype, "text", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
play1BlueSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "33b568QNK5MlZrNvvtvFShn", "play1BlueSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../TipManagerMS"), i = e("../../common/common/Script/codebase/TransitionSceneMS"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.boomSp = [];
t.boom = null;
t.winAudio = null;
t.isShowBubble = !1;
t.bubbleNum = 0;
return t;
}
t.prototype.start = function() {
var e = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime2");
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.isShowBubble || (e.isShowBubble = !0);
e.showBubble();
}))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "bg").runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
e.active = !0;
e.opacity = 0;
e.runAction(cc.fadeIn(1));
})));
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_home").zIndex = 1e3;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").zIndex = 1e3;
};
t.prototype.showBubble = function() {
var e = this, t = 250 - 500 * Math.random(), o = 350 - 700 * Math.random(), i = new cc.Node(), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bubble_cotent");
i.parent = a;
i.position = cc.v2(o, t);
var s = i.addComponent(cc.Sprite);
s.spriteFrame = this.boomSp[0];
i.zIndex = 10;
i.scale = 0;
var r = this.node.scale, l = cc.scaleTo(.132, .82 * r, r), d = cc.scaleTo(.12, r, .86 * r), p = cc.scaleTo(.108, .88 * r, r), u = cc.scaleTo(.096, r, .89 * r), h = cc.scaleTo(.084, r), f = cc.sequence(l, d, p, u, h);
i.runAction(cc.sequence(cc.scaleTo(.5, 1), f));
i.on(cc.Node.EventType.TOUCH_START, function() {
i.targetOff(e);
e.bubbleNum % 2 == 0 && c.default.getInstance().jumpTips();
e.bubbleNum = e.bubbleNum + 1;
for (var t = [], o = function(e) {
t.push(cc.callFunc(function() {
s.spriteFrame = e;
}));
t.push(cc.delayTime(.15));
}, n = 0, a = e.boomSp; n < a.length; n++) {
o(a[n]);
}
cc.audioEngine.playEffect(e.boom, !1);
var r = cc.sequence(t, cc.callFunc(function() {
e.isShowBubble = !1;
}));
i.runAction(r);
i.runAction(cc.sequence(cc.delayTime(.7), cc.fadeOut(.2), cc.removeSelf()));
}, this);
};
t.prototype.touchNext = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
c.active = !0;
c.getComponent(cc.ParticleSystem).resetSystem();
c.zIndex = 100;
cc.audioEngine.playEffect(this.winAudio, !1);
setTimeout(function() {
i.default.changeScene("playSlimeBlueMS");
}, 3e3);
};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
__decorate([ r ], t.prototype, "text", void 0);
__decorate([ r({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "boomSp", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "boom", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "winAudio", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../TipManagerMS": "TipManagerMS"
} ],
play1MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9d7b0koFl5LXbUxhJNZ1EC0", "play1MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = e("../common/common/Script/ads/IconItemMS"), a = e("../common/common/Script/codebase/SpriteDrag/SpriteDragMS"), s = e("./fallSpriteCompoentMS"), r = e("./DataConfigMS"), l = e("./tool/components/ShaderHelperMS"), d = e("./tool/components/ShaderTimeMS"), p = e("../common/common/Script/ads/RewardManagerMS"), u = e("./TipManagerMS"), h = cc._decorator, f = h.ccclass, m = h.property, g = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.touchNodeVector = [];
t.insta = null;
t.conteneNode = null;
t.iconBg = null;
t.liquidSprime = null;
t.liquidSprime1 = null;
t.liquidSprime2 = null;
t.liquidAUDIO = null;
t.touchBtnAudio = null;
t.flyAudio = null;
t.flyAudioOut = null;
t.sauceOut = null;
t.movePour = null;
t.win = null;
t.swip = null;
t.push = null;
t.doneAudio = null;
t.flyTop = null;
t.iconsPool = null;
t.selectItemName = "";
t._step = 0;
t.isShowLight = !1;
t.selectLightTempIndex = 0;
t.isLightShow = !1;
t.soundIndex = -1;
t.mascaraMoveIng = !1;
t.mascaraCanSauce = !0;
t.selectlipstick = 0;
t.tempRotate = 0;
t.lipstickmove = !1;
t.lipsticCankmove = !0;
t.lipstickNum = 0;
t.liquidTouchIndex = 0;
t.isTouchTool = !1;
return t;
}
t.prototype.start = function() {
p.default.getInstance().loadConfig();
r.default.getInstance().playMusic();
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
e.active = !0;
e.zIndex = 100;
e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r.default.getInstance().getPageTexture());
e.getComponent(l.default).enabled = !0;
e.getComponent(d.default).enabled = !0;
if (null == this.iconsPool) {
this.iconsPool = new cc.NodePool();
for (var t = 0; t < 5; t++) this.iconsPool.put(cc.instantiate(this.insta));
}
n.CocosHelper.findNode(cc.Canvas.instance.node, "box_up").zIndex = 10;
n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_up").zIndex = 10;
this.showTips();
};
t.prototype.showTips = function() {
var e = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "box_up").runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
for (var t = null, o = 0, c = e.touchNodeVector; o < c.length; o++) {
var i = c[o];
if (0 != i.width) {
t = i;
break;
}
}
var a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl");
console.log(a.color.getR());
if (t && Number(a.color.getR()) > 120) {
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
s.zIndex = 100;
s.position = s.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0)));
s.active = !0;
s.stopAllActions();
s.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.moveBy(.5, cc.v2(0, 10)), cc.moveBy(.5, cc.v2(0, -10)), cc.callFunc(function() {
s.active = !1;
})));
}
}), cc.delayTime(5))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "box").runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {}), cc.delayTime(10))));
};
t.prototype.doDealStep = function() {
var e = this;
this._step = this._step + 1;
console.log("this._step");
this._step % 2 == 0 && u.default.getInstance().jumpTips();
if (7 == this._step) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime"), o = n.CocosHelper.captureNode2(t);
r.default.getInstance().setTexture(o);
console.log(o);
var c = cc.view.getVisibleSize().width, i = cc.view.getVisibleSize().height;
t.getChildByName("plate_slime_t").active = !1;
n.CocosHelper.captureNodeSize(t, c, i).then(function(o) {
t.getChildByName("plate_slime_t").active = !0;
if (null == o) ; else {
r.default.getInstance().setTexture(o);
var a = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
a.active = !0;
a.getComponent(cc.ParticleSystem).resetSystem();
cc.audioEngine.playEffect(e.win, !1);
setTimeout(function() {
n.CocosHelper.captureNodeSize(cc.Canvas.instance.node, c, i).then(function(e) {
null == e || r.default.getInstance().setPageTexture(e);
});
cc.director.loadScene("play2SceneMS");
}, 3e3);
}
});
}
};
t.prototype.btnTest = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime"), t = n.CocosHelper.captureNode2(e);
r.default.getInstance().setTexture(t);
console.log(t);
var o = cc.view.getVisibleSize().width, c = cc.view.getVisibleSize().height;
e.getChildByName("plate_slime_t").active = !1;
n.CocosHelper.captureNodeSize(e, o, c).then(function(t) {
e.getChildByName("plate_slime_t").active = !0;
if (null == t) ; else {
var o = new cc.Node(), n = o.addComponent(cc.Sprite);
n.spriteFrame = new cc.SpriteFrame(t);
cc.Canvas.instance.node.addChild(o);
o.x = 0;
o.y = 0;
r.default.getInstance().setTexture(t);
console.log(n.node.width);
cc.director.loadScene("play2SceneMS");
}
});
};
t.prototype.touchNode = function(e, t) {
var o = this;
console.log(t);
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
c.zIndex = 100;
c.active = !1;
e.target;
this.touchNodeVector.forEach(function(e) {
e.getComponent(cc.Button).interactable = !1;
});
this.selectItemName = t;
this.toolFly(t, function() {
o.changeStatus(!1);
o.showBtn(!0);
o.showTool(t);
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
e.zIndex = 100;
e.active = !1;
}, !0);
console.log(t);
};
t.prototype.showTool = function(e) {
if ("air" != e) {
this.showIconBg(e);
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board");
t.active = !0;
t.opacity = 0;
setTimeout(function() {
var e = t.position, o = e.sub(cc.v2(-400, 0));
t.setPosition(o);
t.runAction(cc.sequence(cc.spawn(cc.moveTo(.56, e), cc.fadeIn(.5)), cc.callFunc(function() {})));
}, 100);
} else this.showAir();
};
t.prototype.showIconBg = function(e) {
for (var t = [ "nail_polish", "eye_shadow", "lipstick", "liquid", "air", "mascara", "light" ], o = 0, c = 0; c < t.length; c++) {
if (t[c] == e) {
o = c;
break;
}
}
var a = [ [ "nail_polish_red", "nail_polish_purple", "nail_polish_greed", "nail_polish_blue" ], [ "eye_shadow_blue", "eye_shadow_brown", "eye_shadow_pink", "eye_shadow_purple" ], [ "lipstick_golden", "lipstick_greed", "lipstick_orange", "lipstick_pink", "lipstick_purple" ], [ "liquid_foundation_0", "liquid_foundation_1" ], [ "air" ], [ "mascara_blue", "mascara_brown", "mascara_orange", "mascara_purple" ], [ "light_golden", "light_rainbow0", "light_rainbow1" ] ][o], s = n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board");
s.active = !0;
var r = [];
for (c = 0; c < a.length; c++) r.push("makeupms/icon/" + a[c]);
for (var l = 0, d = this.conteneNode.children.slice(); l < d.length; l++) {
var p = d[l];
this.iconsPool.put(p);
}
var u = this;
cc.loader.loadResArray(r, cc.SpriteFrame, function(t, o) {
for (var n = 0; n < o.length; n++) {
var c = null;
(c = u.iconsPool.size() > 0 ? u.iconsPool.get() : cc.instantiate(u.insta)).getChildByName("Background").getComponent(cc.Sprite).spriteFrame = o[n];
c.parent = u.conteneNode;
var a = c.getComponent(i.default);
a.index = n;
a.isRewardLock = n % 2 == 0;
a.key = a.moduleName = e;
0 == n && (a.key = "lock");
a.init();
var s = new cc.Component.EventHandler();
s.component = "play1";
s.handler = "touchItem";
s.target = u.node;
a.getComponent(cc.Toggle).isChecked = !1;
a.getComponent(cc.Toggle).checkEvents = [ s ];
}
});
s.getChildByName("scrollview").getComponent(cc.ScrollView).scrollToLeft();
};
t.prototype.touchItem = function(e) {
if (e.isChecked) {
cc.audioEngine.playEffect(this.touchBtnAudio, !1);
var t = e.node, o = t.getComponent(i.default), n = o.index;
e.node.convertToWorldSpaceAR(cc.v2(0, 0));
console.log(t.name + " " + o.moduleName);
-1 != o.moduleName.indexOf("liquid") ? this.showLiquid(n) : -1 != o.moduleName.indexOf("lipstick") ? this.showlipstick(n) : -1 != o.moduleName.indexOf("mascara") ? this.showmascara(n) : -1 != o.moduleName.indexOf("nail_polish") ? this.shownail_polish(n) : -1 != o.moduleName.indexOf("eye_shadow") ? this.showeye_shadow(n) : -1 != o.moduleName.indexOf("light") && this.showlight(n);
}
};
t.prototype.showlight = function(e) {
var t = this;
if (!this.isShowLight) {
this.isShowLight = !0;
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_small");
o.stopAllActions();
var i = cc.v2(-167, 93);
o.position = cc.v2(-167, -993);
o.active = !0;
this.selectLightTempIndex = e;
cc.audioEngine.playEffect(this.flyAudio, !1);
o.active = !0;
o.runAction(cc.sequence(cc.moveTo(1, i), cc.callFunc(function() {
t.isShowLight = !1;
o.getComponent(a.default).enabled = !0;
})));
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_move");
s.stopAllActions();
s.position = cc.v2(0, 227);
s.active = !1;
this.selectlipstick = e;
var l = [ "light_golden", "light_rainbow0", "light_rainbow1" ];
r.default.getInstance().setSelectLight(l[e]);
cc.loader.loadRes("makeupms/light/" + l[e], cc.SpriteFrame, function(e, t) {
e ? console.log(e + "") : s.getChildByName("light_move_in").getComponent(cc.Sprite).spriteFrame = t;
});
cc.loader.loadRes("makeupms/light/small/" + l[e], cc.SpriteFrame, function(e, t) {
if (e) console.log(e + ""); else {
n.CocosHelper.findNode(cc.Canvas.instance.node, "light_inslime").getComponent(cc.Sprite).spriteFrame = t;
}
});
cc.audioEngine.playEffect(this.flyAudio, !1);
setTimeout(function() {
n.CocosHelper.showBackOut(s, c.ShowDirection.top, function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_inslime");
e.active = !0;
e.scale = 0;
e.stopAllActions();
e.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(3, 1), cc.callFunc(function() {
t.isLightShow = !1;
o.active = !1;
cc.audioEngine.stopEffect(t.soundIndex);
cc.audioEngine.playEffect(t.flyAudioOut, !1);
n.CocosHelper.hideNode(s, c.ShowDirection.right);
t.changeStatus(!0);
t.selectItemName = "";
t.toolBoardMiss();
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "light0");
e.active = !1;
var i = e.getChildByName("light_touch");
i.position = cc.v2(1e3, 1e4);
i.width = 0;
i.height = 0;
t.doDealStep();
})));
cc.director.getActionManager().pauseTarget(e);
});
}, 300);
}
};
t.prototype.light_smallTouchBegin = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
};
t.prototype.light_smallTouchIng = function(e, t, o, c) {
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_small"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_move"), s = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_inslime"), r = i.convertToWorldSpaceAR(cc.v2(-50, 0)), l = t.moveNode;
if (a.getBoundingBox().contains(a.parent.convertToNodeSpaceAR(r))) {
if (!this.isLightShow) {
this.isLightShow = !0;
cc.director.getActionManager().resumeTarget(s);
l.getChildByName("tool_p" + this.selectLightTempIndex).active = !0;
l.children.forEach(function(e) {
e.getComponent(cc.ParticleSystem) && e.getComponent(cc.ParticleSystem).resetSystem();
});
this.soundIndex = cc.audioEngine.playEffect(this.movePour, !0);
}
} else {
cc.director.getActionManager().pauseTarget(s);
l.getChildByName("tool_p" + this.selectLightTempIndex).active = !1;
cc.audioEngine.stopEffect(this.soundIndex);
this.isLightShow = !1;
}
};
t.prototype.light_smallTouchUp = function(e, t, o, c) {
var i = t.moveNode, a = n.CocosHelper.findNode(cc.Canvas.instance.node, "light_inslime");
cc.director.getActionManager().pauseTarget(a);
i.getChildByName("tool_p" + this.selectLightTempIndex).active = !1;
cc.audioEngine.stopEffect(this.soundIndex);
this.isLightShow = !1;
};
t.prototype.showeye_shadow = function(e) {
var t = this, o = n.CocosHelper.findNode(cc.Canvas.instance.node, "eye_shadow_move");
o.stopAllActions();
o.position = cc.v2(167, 146);
o.active = !1;
this.selectlipstick = e;
var i = [ "eye_shadow_blue", "eye_shadow_brown", "eye_shadow_pink", "eye_shadow_purple" ];
cc.loader.loadRes("makeupms/eye_shadow/" + i[e], cc.SpriteFrame, function(e, t) {
e ? console.log(e + "") : o.getComponent(cc.Sprite).spriteFrame = t;
});
cc.loader.loadRes("makeupms/eye_shadow/small/" + i[e], cc.SpriteFrame, function(e, t) {
e ? console.log(e + "") : o.getChildByName("eye_shadow_move_in").getComponent(cc.Sprite).spriteFrame = t;
});
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(o, c.ShowDirection.top, function() {
o.on(cc.Node.EventType.TOUCH_START, t.eye_shadowTouch, t);
});
};
t.prototype.eye_shadowTouch = function() {
var e = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "eye_shadow_move");
t.targetOff(this);
t.getChildByName("eye_shadow_move_lid").runAction(cc.sequence(cc.fadeOut(.25), cc.callFunc(function() {
t.runAction(cc.sequence(cc.rotateTo(.5, -137), cc.callFunc(function() {
t.on(cc.Node.EventType.TOUCH_START, e.eye_shadow_Touch, e);
t.on(cc.Node.EventType.TOUCH_END, e.eye_shadow_TouchUp, e);
var o = t.getChildByName("eye_shadow_move_in");
o.active = !0;
o.scale = 0;
o.runAction(cc.sequence(cc.scaleTo(3, 1), cc.callFunc(function() {
cc.audioEngine.stopEffect(e.soundIndex);
t.targetOff(e);
var i = o, a = i.parent.convertToWorldSpaceAR(i.position), s = n.CocosHelper.findNode(cc.Canvas.instance.node, "content_tool").getChildByName("plate").getChildByName("plate_slime");
i.parent = s;
i.position = i.parent.convertToNodeSpaceAR(a);
i.zIndex = e._step;
var r = 200 - 400 * Math.random(), l = 90 - 170 * Math.random();
console.log(r + "  " + l);
i.runAction(cc.sequence(cc.delayTime(.01), cc.jumpTo(.5, cc.v2(r, l), 50, 1), cc.callFunc(function() {
cc.audioEngine.playEffect(e.flyAudioOut, !1);
n.CocosHelper.hideNode(t, c.ShowDirection.right);
e.changeStatus(!0);
e.selectItemName = "";
e.toolBoardMiss();
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "box"), i = o.getChildByName("eye_shadow_touch");
o.getChildByName("eye_shadow1").active = !1;
o.getChildByName("eye_shadow2").active = !1;
o.getChildByName("eye_shadow0").active = !1;
i.position = cc.v2(1e3, 1e4);
i.width = 0;
i.height = 0;
e.doDealStep();
})));
})));
cc.director.getActionManager().pauseTarget(o);
})));
})));
};
t.prototype.eye_shadow_Touch = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "eye_shadow_move_in");
cc.director.getActionManager().resumeTarget(e);
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = cc.audioEngine.playEffect(this.sauceOut, !0);
};
t.prototype.eye_shadow_TouchUp = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "eye_shadow_move_in");
cc.director.getActionManager().pauseTarget(e);
cc.audioEngine.stopEffect(this.soundIndex);
};
t.prototype.shownail_polish = function(e) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "nail_move"), o = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime");
t.getComponent(a.default).enabled = !1;
t.stopAllActions();
t.position = cc.v2(167, 146);
t.active = !1;
this.selectlipstick = e;
var i = [ "nail_polish_red", "nail_polish_purple", "nail_polish_greed", "nail_polish_blue" ], s = t.getChildByName("nail_move_p");
cc.loader.loadRes("makeupms/nail_polish/p/" + i[e], cc.SpriteFrame, function(e, t) {
if (e) console.log(e + ""); else {
var o = s.getComponent(cc.ParticleSystem);
o.custom = !0;
o.spriteFrame = t;
o.resetSystem();
}
});
cc.loader.loadRes("makeupms/nail_polish/" + i[e], cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getChildByName("nail_up").getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes("makeupms/nail_polish/small/" + i[e], cc.SpriteFrame, function(e, t) {
e ? console.log(e + "") : o.getChildByName("nail_polish_inslime").getComponent(cc.Sprite).spriteFrame = t;
});
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(t, c.ShowDirection.top, function() {
t.getComponent(a.default).enabled = !0;
});
};
t.prototype.nail_movebegin = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
};
t.prototype.nail_moveEnd = function(e, t, o, i) {
var a = this, r = t.moveNode;
t.enabled = !1;
var l = n.CocosHelper.findNode(cc.Canvas.instance.node, "nail_move");
l.getChildByName("nail-polish_lid_").runAction(cc.fadeOut(.25));
l.getChildByName("nail-polish_lid").runAction(cc.fadeOut(.25));
var d = r.getComponent(s.default);
if (d) {
d.enabled = !0;
d.bowlInFall.zIndex = this._step;
d.actionStartCallBack = function() {
console.log(r.name);
};
d.actionEndCallBack = function() {
cc.audioEngine.playEffect(a.flyAudioOut, !1);
n.CocosHelper.hideNode(l, c.ShowDirection.right);
a.changeStatus(!0);
a.selectItemName = "";
a.toolBoardMiss();
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "box"), t = e.getChildByName("nail_polish_touch");
e.getChildByName("nail_polish1").active = !1;
e.getChildByName("nail_polish2").active = !1;
e.getChildByName("nail_polish3").active = !1;
e.getChildByName("nail_polish0").active = !1;
a.doDealStep();
t.position = cc.v2(1e3, 1e4);
t.width = 0;
t.height = 0;
};
}
};
t.prototype.showAir = function() {
var e = this, t = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_move");
t.position = cc.v2(167, 146);
t.active = !1;
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(t, c.ShowDirection.top, function() {
t.on(cc.Node.EventType.TOUCH_START, e.airTouch, e);
});
};
t.prototype.airTouch = function() {
var e = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_move"), o = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_in_touch");
t.targetOff(this);
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_in");
i.runAction(cc.sequence(cc.moveTo(.25, i.parent.convertToNodeSpaceAR(o.convertToWorldSpaceAR(cc.v2(0, 0)))), cc.callFunc(function() {
i.active = !1;
o.active = !0;
n.CocosHelper.hideNode(t, c.ShowDirection.right);
o.on(cc.Node.EventType.TOUCH_START, e.air_in_Touch, e);
o.on(cc.Node.EventType.TOUCH_END, e.air_in_TouchUp, e);
var a = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_inslime");
a.active = !0;
a.scale = 0;
a.zIndex = e._step;
a.runAction(cc.sequence(cc.scaleTo(3, 1), cc.callFunc(function() {
cc.audioEngine.stopEffect(e.soundIndex);
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_in_touch");
t.targetOff(e);
t.getChildByName("air_in_touch_orgin").active = !0;
t.getChildByName("air_in_touch_push").active = !1;
t.getChildByName("air_in_touch_fall").active = !1;
cc.audioEngine.playEffect(e.flyAudioOut, !1);
n.CocosHelper.hideNode(t, c.ShowDirection.right);
e.changeStatus(!0);
e.selectItemName = "";
e.toolBoardMiss();
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "box"), i = o.getChildByName("air_touch");
o.getChildByName("air0").active = !1;
i.position = cc.v2(1e3, 1e4);
i.width = 0;
i.height = 0;
e.doDealStep();
})));
cc.director.getActionManager().pauseTarget(a);
})));
};
t.prototype.air_in_Touch = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_in_touch");
e.getChildByName("air_in_touch_orgin").active = !1;
e.getChildByName("air_in_touch_push").active = !0;
e.getChildByName("air_in_touch_fall").active = !0;
e.getChildByName("air_in_touch_fall").opacity = 0;
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = cc.audioEngine.playEffect(this.sauceOut, !0);
e.getChildByName("air_in_touch_fall").runAction(cc.sequence(cc.fadeIn(.2), cc.callFunc(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_inslime");
cc.director.getActionManager().resumeTarget(e);
})));
};
t.prototype.air_in_TouchUp = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_in_touch");
e.getChildByName("air_in_touch_orgin").active = !0;
e.getChildByName("air_in_touch_push").active = !1;
e.getChildByName("air_in_touch_fall").active = !1;
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "air_inslime");
cc.director.getActionManager().pauseTarget(t);
cc.audioEngine.stopEffect(this.soundIndex);
};
t.prototype.showmascara = function(e) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "mascara_move");
t.getComponent(a.default).enabled = !1;
t.stopAllActions();
t.position = cc.v2(167, 146);
t.active = !1;
this.selectlipstick = e;
var o = [ "mascara_blue", "mascara_brown", "mascara_orange", "mascara_purple" ];
cc.loader.loadRes("makeupms/mascara/" + o[e] + 2, cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getChildByName("mascara_lid").getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes("makeupms/mascara/" + o[e] + 1, cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getChildByName("mascara_blue1").getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes("makeupms/mascara/" + o[e] + 0, cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getChildByName("mascara_blue0").getComponent(cc.Sprite).spriteFrame = o;
});
cc.loader.loadRes("makeupms/mascara/" + o[e] + 0, cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getComponent(cc.Sprite).spriteFrame = o;
});
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(t, c.ShowDirection.top, function() {
t.getComponent(a.default).enabled = !0;
});
this.lipstickNum = 0;
};
t.prototype.mascaraTouchBegin = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "mascara_move").getChildByName("mascara_blue1").runAction(cc.fadeOut(.5));
this.mascaraMoveIng = !1;
};
t.prototype.mascaraTouchIng = function(e, t, o, c) {
var i = this, a = 180 * e.getLocation().angle(e.getPreviousLocation()) / Math.PI;
this.tempRotate = -a;
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "mascara_move"), r = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), l = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime"), d = s.convertToWorldSpaceAR(cc.v2(0, -100));
if (this.mascaraCanSauce && l.getBoundingBox().contains(l.parent.convertToNodeSpaceAR(d))) {
this.mascaraCanSauce = !1;
var p = new cc.Node();
p.parent = l;
p.position = l.convertToNodeSpaceAR(d);
p.angle = -this.tempRotate;
p.zIndex = this._step;
console.log(this.tempRotate);
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = cc.audioEngine.playEffect(this.swip, !1);
cc.loader.loadRes("makeupms/mascara/small/" + [ "mascara_blue", "mascara_brown", "mascara_orange", "mascara_purple" ][this.selectlipstick], cc.SpriteFrame, function(e, t) {
e || (p.addComponent(cc.Sprite).spriteFrame = t);
});
this.lipstickNum = this.lipstickNum + 1;
if (4 == this.lipstickNum) {
var u = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next"), h = n.CocosHelper.findNode(cc.Canvas.instance.node, "decorateParticle");
if (!u.active) {
h.position = cc.v2(0, 0);
h.active = !0;
h.getComponent(cc.ParticleSystem).resetSystem();
cc.audioEngine.playEffect(this.doneAudio, !1);
u.active = !0;
this.lipstickNum = -1e4;
}
}
}
if (!this.mascaraMoveIng) {
this.mascaraMoveIng = !0;
r.stopAllActions();
r.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
i.mascaraCanSauce = !0;
}), cc.delayTime(1.3))));
}
};
t.prototype.mascaraTouchEnd = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "bg").stopAllActions();
};
t.prototype.showlipstick = function(e) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "lipstick");
t.getComponent(a.default).enabled = !1;
t.stopAllActions();
t.position = cc.v2(167, 146);
t.active = !1;
this.selectlipstick = e;
cc.loader.loadRes("makeupms/lipstick/" + [ "lipstick_golden", "lipstick_greed", "lipstick_orange", "lipstick_pink", "lipstick_purple" ][e], cc.SpriteFrame, function(e, o) {
e ? console.log(e + "") : t.getComponent(cc.Sprite).spriteFrame = o;
});
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(t, c.ShowDirection.top, function() {
t.getComponent(a.default).enabled = !0;
});
this.lipstickNum = 0;
};
t.prototype.lipstickTouchBegin = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_reset").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "lipstick");
this.lipstickmove = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "bg").stopAllActions();
this.lipsticCankmove = !1;
};
t.prototype.lipstickTouchIng = function(e, t, o, c) {
var i = this, a = 180 * e.getLocation().angle(e.getPreviousLocation()) / Math.PI;
this.tempRotate = -a;
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "lipstick").convertToWorldSpaceAR(cc.v2(0, 100)), r = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime");
if (this.lipsticCankmove && r.getBoundingBox().contains(r.parent.convertToNodeSpaceAR(s))) {
this.lipsticCankmove = !1;
var l = new cc.Node();
l.parent = r;
l.position = r.convertToNodeSpaceAR(s);
l.angle = -this.tempRotate;
l.zIndex = this._step;
console.log(this.tempRotate);
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = cc.audioEngine.playEffect(this.swip, !1);
cc.loader.loadRes("makeupms/lipstick/small/" + [ "lipstick_golden", "lipstick_greed", "lipstick_orange", "lipstick_pink", "lipstick_purple" ][this.selectlipstick], cc.SpriteFrame, function(e, t) {
e || (l.addComponent(cc.Sprite).spriteFrame = t);
});
this.lipstickNum = this.lipstickNum + 1;
if (4 == this.lipstickNum) {
var d = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next"), p = n.CocosHelper.findNode(cc.Canvas.instance.node, "decorateParticle");
if (!d.active) {
p.position = cc.v2(0, 0);
p.active = !0;
p.getComponent(cc.ParticleSystem).resetSystem();
cc.audioEngine.playEffect(this.doneAudio, !1);
d.active = !0;
this.lipstickNum = -1e4;
}
}
}
if (!this.lipstickmove) {
this.lipstickmove = !0;
var u = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg");
u.stopAllActions();
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime");
u.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
i.lipsticCankmove = !0;
}), cc.delayTime(1.3))));
}
};
t.prototype.lipstickTouchEnd = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "bg").stopAllActions();
};
t.prototype.showLiquid = function(e) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "liquid"), o = t.getChildByName("liquid_touch");
t.stopAllActions();
t.position = cc.v2(171, 112);
t.active = !1;
if (1 == e) {
t.getChildByName("liquid_up").getComponent(cc.Sprite).spriteFrame = this.liquidSprime;
o.getChildByName("liquid_fall1").getComponent(cc.Sprite).spriteFrame = this.liquidSprime1;
o.getChildByName("liquid_fall2").getComponent(cc.Sprite).spriteFrame = this.liquidSprime1;
o.getChildByName("liquid_fall3").getComponent(cc.Sprite).spriteFrame = this.liquidSprime1;
} else {
t.getChildByName("liquid_up").getComponent(cc.Sprite).spriteFrame = t.getComponent(cc.Sprite).spriteFrame;
o.getChildByName("liquid_fall1").getComponent(cc.Sprite).spriteFrame = this.liquidSprime2;
o.getChildByName("liquid_fall2").getComponent(cc.Sprite).spriteFrame = this.liquidSprime2;
o.getChildByName("liquid_fall3").getComponent(cc.Sprite).spriteFrame = this.liquidSprime2;
}
cc.audioEngine.playEffect(this.flyAudio, !1);
n.CocosHelper.showBackOut(t, c.ShowDirection.top);
t.on(cc.Node.EventType.TOUCH_START, this.liquidTouch, this);
};
t.prototype.liquidTouch = function() {
var e = this, t = n.CocosHelper.findNode(cc.Canvas.instance.node, "liquid"), o = t.getChildByName("liquid_touch");
if (!this.isTouchTool) {
this.isTouchTool = !0;
this.hideUi();
if (0 == this.liquidTouchIndex) {
t.getChildByName("liquid_lid").runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 50)), cc.callFunc(function() {
e.isTouchTool = !1;
}), cc.fadeOut(.5)));
this.liquidTouchIndex = this.liquidTouchIndex + 1;
} else {
var i = o.getChildByName("liquid_fall" + this.liquidTouchIndex);
i.active = !0;
i.scale = 0;
t.runAction(cc.rotateTo(.25, -19));
o.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, -20)), cc.callFunc(function() {})));
cc.audioEngine.playEffect(this.push, !1);
i.runAction(cc.sequence(cc.scaleTo(.5, -1, 1), cc.callFunc(function() {
var a = i.parent.convertToWorldSpaceAR(i.position), s = n.CocosHelper.findNode(cc.Canvas.instance.node, "content_tool").getChildByName("plate").getChildByName("plate_slime");
i.parent = s;
i.position = i.parent.convertToNodeSpaceAR(a);
i.zIndex = e._step;
var r = 200 - 400 * Math.random(), l = 90 - 170 * Math.random();
console.log(r + "  " + l);
o.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 20)), cc.callFunc(function() {})));
i.runAction(cc.sequence(cc.delayTime(.01), cc.jumpTo(.5, cc.v2(r, l), 50, 1), cc.callFunc(function() {
e.liquidTouchIndex = e.liquidTouchIndex + 1;
e.isTouchTool = !1;
if (4 == e.liquidTouchIndex) {
e.isTouchTool = !1;
cc.audioEngine.playEffect(e.flyAudioOut, !1);
n.CocosHelper.hideNode(t, c.ShowDirection.right);
e.changeStatus(!0);
e.selectItemName = "";
e.toolBoardMiss();
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl").getChildByName("liquid_touch");
o.position = cc.v2(1e3, 1e4);
o.width = 0;
o.height = 0;
e.doDealStep();
}
})));
})));
}
}
};
t.prototype.touchBtnDone = function(e, t) {
e.target.active = !1;
cc.audioEngine.playEffect(this.touchBtnAudio, !1);
this.toolBoardMiss();
if ("lipstick" == this.selectItemName) {
(i = n.CocosHelper.findNode(cc.Canvas.instance.node, "lipstick")).getComponent(a.default).enabled = !1;
cc.audioEngine.playEffect(this.flyAudioOut, !1);
n.CocosHelper.hideNode(i, c.ShowDirection.left);
this.changeStatus(!0);
this.selectItemName = "";
this.toolBoardMiss();
var o = (s = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl")).getChildByName("lipstick_touch");
s.getChildByName("lipstick0").active = !1;
s.getChildByName("lipstick1").active = !1;
s.getChildByName("lipstick2").active = !1;
o.position = cc.v2(1e3, 1e4);
o.width = 0;
o.height = 0;
this.doDealStep();
} else if ("mascara" == this.selectItemName) {
var i, s;
(i = n.CocosHelper.findNode(cc.Canvas.instance.node, "mascara_move")).getComponent(a.default).enabled = !1;
cc.audioEngine.playEffect(this.flyAudioOut, !1);
n.CocosHelper.hideNode(i, c.ShowDirection.left);
this.changeStatus(!0);
this.selectItemName = "";
this.toolBoardMiss();
(o = (s = n.CocosHelper.findNode(cc.Canvas.instance.node, "mascara")).getChildByName("mascara_touch")).position = cc.v2(1e3, 1e4);
o.width = 0;
o.height = 0;
s.getChildByName("mascara0").active = !1;
s.getChildByName("mascara1").active = !1;
s.getChildByName("mascara2").active = !1;
s.getChildByName("mascara3").active = !1;
s.getChildByName("mascara4").active = !1;
this.doDealStep();
}
};
t.prototype.touchBtnReset = function() {
cc.audioEngine.playEffect(this.touchBtnAudio, !1);
this.toolBoardMiss();
};
t.prototype.hideUi = function() {
this.showBtn(!1);
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
};
t.prototype.toolBoardMiss = function() {
var e = this;
this.showBtn(!1);
n.CocosHelper.findNode(cc.Canvas.instance.node, "ui_board").active = !1;
this.changeStatus(!0);
this.toolFly(this.selectItemName, function() {
e.touchNodeVector.forEach(function(e) {
e.getComponent(cc.Button).interactable = !0;
});
}, !1);
};
t.prototype.showNextBtn = function() {
for (var e = [ "btn_next" ], t = function(t) {
var o = e[t], c = n.CocosHelper.findNode(cc.Canvas.instance.node, o);
c.active = !0;
c.opacity = 0;
setTimeout(function() {
var e = c.position, t = e.sub(cc.v2(400, 0));
c.setPosition(t);
c.runAction(cc.sequence(cc.spawn(cc.moveTo(.56, e), cc.fadeIn(.5)), cc.callFunc(function() {})));
}, 100);
}, o = 0; o < e.length; o++) t(o);
};
t.prototype.showBtn = function(e) {
for (var t = [ "btn_reset" ], o = function(o) {
var c = t[o], i = n.CocosHelper.findNode(cc.Canvas.instance.node, c);
if (e) {
i.active = !0;
i.opacity = 0;
setTimeout(function() {
var e = i.position, t = e.sub(cc.v2(400, 0));
i.setPosition(t);
i.runAction(cc.sequence(cc.spawn(cc.moveTo(.56, e), cc.fadeIn(.5)), cc.callFunc(function() {})));
}, 100);
} else i.active = !1;
}, c = 0; c < t.length; c++) o(c);
};
t.prototype.toolFly = function(e, t, o) {
var c = o ? 500 : -500;
if ("" != e) {
for (var i = [], a = 0; a < 5; a++) {
console.log(e + a);
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, e + a);
if (!s) break;
i.push(s);
console.log(s.name);
}
cc.audioEngine.playEffect(this.flyTop, !1);
var r = function(e) {
var o = i[e];
o.zIndex = 100;
o.runAction(cc.sequence(cc.delayTime(.05 * e), cc.moveBy(.3, cc.v2(0, c)), cc.callFunc(function() {
o.zIndex = 2;
e == i.length - 1 && t && t();
})));
};
for (a = 0; a < i.length; a++) r(a);
} else t && t();
};
t.prototype.changeStatus = function(e) {
for (var t = [ "bowl", "box", "mascara", "light0", "bg_t" ], o = 0; o < t.length; o++) {
var c = t[o], i = n.CocosHelper.findNode(cc.Canvas.instance.node, c);
this.doGrey(i, e);
}
};
t.prototype.doGrey = function(e, t) {
var o = t ? 255 : 100;
e.color = new cc.Color(o, o, o, 255);
e.children.forEach(function(e) {
e.color = new cc.Color(o, o, o, 255);
});
};
__decorate([ m(cc.Label) ], t.prototype, "label", void 0);
__decorate([ m ], t.prototype, "text", void 0);
__decorate([ m(cc.Node) ], t.prototype, "touchNodeVector", void 0);
__decorate([ m(cc.Prefab) ], t.prototype, "insta", void 0);
__decorate([ m(cc.Node) ], t.prototype, "conteneNode", void 0);
__decorate([ m(cc.Node) ], t.prototype, "iconBg", void 0);
__decorate([ m(cc.SpriteFrame) ], t.prototype, "liquidSprime", void 0);
__decorate([ m(cc.SpriteFrame) ], t.prototype, "liquidSprime1", void 0);
__decorate([ m(cc.SpriteFrame) ], t.prototype, "liquidSprime2", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "liquidAUDIO", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "touchBtnAudio", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "flyAudio", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "flyAudioOut", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "sauceOut", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "movePour", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "win", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "swip", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "push", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "doneAudio", void 0);
__decorate([ m(cc.AudioClip) ], t.prototype, "flyTop", void 0);
return t = __decorate([ f ], t);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../common/common/Script/ads/IconItemMS": "IconItemMS",
"../common/common/Script/ads/RewardManagerMS": "RewardManagerMS",
"../common/common/Script/codebase/SpriteDrag/SpriteDragMS": "SpriteDragMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./DataConfigMS": "DataConfigMS",
"./TipManagerMS": "TipManagerMS",
"./fallSpriteCompoentMS": "fallSpriteCompoentMS",
"./tool/components/ShaderHelperMS": "ShaderHelperMS",
"./tool/components/ShaderTimeMS": "ShaderTimeMS"
} ],
play1PinkSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c4a64U0l9xCbIlSKqcQT8j9", "play1PinkSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../TipManagerMS"), i = e("../../common/common/Script/codebase/TransitionSceneMS"), a = cc._decorator, s = a.ccclass, r = a.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.boomSp = [];
t.boom = null;
t.winAudio = null;
t.isShowBubble = !1;
t.bubbleNum = 0;
return t;
}
t.prototype.start = function() {
var e = this;
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime2");
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
e.isShowBubble || (e.isShowBubble = !0);
e.showBubble();
}))));
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg");
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
t.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
e.active = !0;
e.opacity = 0;
e.runAction(cc.fadeIn(1));
})));
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_home").zIndex = 1e3;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").zIndex = 1e3;
};
t.prototype.showBubble = function() {
var e = this, t = 250 - 500 * Math.random(), o = 350 - 700 * Math.random(), i = new cc.Node(), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bubble_cotent");
i.parent = a;
i.position = cc.v2(o, t);
var s = i.addComponent(cc.Sprite);
s.spriteFrame = this.boomSp[0];
i.zIndex = 10;
i.scale = 0;
var r = this.node.scale, l = cc.scaleTo(.132, .82 * r, r), d = cc.scaleTo(.12, r, .86 * r), p = cc.scaleTo(.108, .88 * r, r), u = cc.scaleTo(.096, r, .89 * r), h = cc.scaleTo(.084, r), f = cc.sequence(l, d, p, u, h);
i.runAction(cc.sequence(cc.scaleTo(.5, 1), f));
i.on(cc.Node.EventType.TOUCH_START, function() {
i.targetOff(e);
e.bubbleNum % 2 == 0 && c.default.getInstance().jumpTips();
e.bubbleNum = e.bubbleNum + 1;
for (var t = [], o = function(e) {
t.push(cc.callFunc(function() {
s.spriteFrame = e;
}));
t.push(cc.delayTime(.15));
}, n = 0, a = e.boomSp; n < a.length; n++) {
o(a[n]);
}
cc.audioEngine.playEffect(e.boom, !1);
var r = cc.sequence(t, cc.callFunc(function() {
e.isShowBubble = !1;
}));
i.runAction(r);
i.runAction(cc.sequence(cc.delayTime(.7), cc.fadeOut(.2), cc.removeSelf()));
}, this);
};
t.prototype.touchNext = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
c.active = !0;
c.getComponent(cc.ParticleSystem).resetSystem();
c.zIndex = 100;
cc.audioEngine.playEffect(this.winAudio, !1);
setTimeout(function() {
i.default.changeScene("playSlimePinkMS");
}, 3e3);
};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
__decorate([ r ], t.prototype, "text", void 0);
__decorate([ r({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "boomSp", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "boom", void 0);
__decorate([ r(cc.AudioClip) ], t.prototype, "winAudio", void 0);
return t = __decorate([ s ], t);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../TipManagerMS": "TipManagerMS"
} ],
play2MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bd1727HBphDSIsCJSDa0OzE", "play2MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = e("./DataConfigMS"), i = e("../common/common/Script/CombinedComponent/MoveComponentMS"), a = e("./tool/components/ShaderHelperMS"), s = e("./tool/components/ShaderTimeMS"), r = e("./TipManagerMS"), l = cc._decorator, d = l.ccclass, p = l.property, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.flyAudio = null;
t.done = null;
t.touch = null;
t.touchHandTopBeginAudio = null;
t.handShow = !1;
t.sound = -1;
t.soundIndex = -1;
t.hand_move_pos = cc.v2(0, 0);
t.moveindex = 0;
t.isMove = !1;
t.isBegin = !1;
t.touchEnd = !1;
t.touchEndNum = 0;
return t;
}
t.prototype.start = function() {
c.default.getInstance().playMusic();
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
e.active = !0;
e.zIndex = 100;
e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().getPageTexture());
e.getComponent(a.default).enabled = !0;
e.getComponent(s.default).enabled = !0;
for (var t = [ "plate_slime0", "plate_slime1", "plate_slime2" ], o = 0; o < t.length; o++) {
var i = t[o], r = n.CocosHelper.findNode(cc.Canvas.instance.node, i), l = new cc.Node();
l.parent = r;
l.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(c.default.getInstance().getTexture());
}
var d = n.CocosHelper.findNode(cc.Canvas.instance.node, "touchLeft"), p = n.CocosHelper.findNode(cc.Canvas.instance.node, "touchRight");
d.on(cc.Node.EventType.TOUCH_MOVE, this.touchLeftMove, this);
var u = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
setTimeout(function() {
n.CocosHelper.showHand(u, d, d, p);
}, 1e3);
};
t.prototype.touchLeftMove = function(e) {
var t = e.getDelta(), o = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger"), c = n.CocosHelper.findNode(cc.Canvas.instance.node, "touchRight");
o.stopAllActions();
o.active = !1;
if (t.x > 0) {
cc.audioEngine.playEffect(this.touch, !1);
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "touchLeft");
i.off(cc.Node.EventType.TOUCH_MOVE, this.touchLeftMove, this);
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime1_").active = !0;
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime0").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime1").active = !0;
n.CocosHelper.showHand(o, c, c, i);
c.on(cc.Node.EventType.TOUCH_MOVE, this.touchRightMove, this);
}
};
t.prototype.touchRightMove = function(e) {
var t = e.getDelta(), o = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger"), c = n.CocosHelper.findNode(cc.Canvas.instance.node, "touchRight");
o.stopAllActions();
if (t.x < 0) {
cc.audioEngine.playEffect(this.touch, !1);
n.CocosHelper.findNode(cc.Canvas.instance.node, "touchLeft");
c.off(cc.Node.EventType.TOUCH_MOVE, this.touchRightMove, this);
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime2_").active = !0;
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime1").active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_slime2").active = !0;
for (var a = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in").getComponent(i.default), s = [], r = 3; r < 7; r++) {
var l = "makeupms/slime/plate_slime" + r;
l = 5 == r || 6 == r ? l + "_1" : l;
s.push(l);
}
var d = this;
cc.loader.loadResArray(s, cc.SpriteFrame, function(e, t) {
if (e) console.log(e + ""); else {
a.setMixPahth(t);
console.log("showHand");
d.showHand();
}
});
}
};
t.prototype.showHand = function() {
if (!this.handShow) {
this.handShow = !0;
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
e.active = !0;
e.on(cc.Node.EventType.TOUCH_START, this.touchHandBegin, this);
e.on(cc.Node.EventType.TOUCH_MOVE, this.touchHandMove, this);
e.on(cc.Node.EventType.TOUCH_END, this.touchHandEnd, this);
e.on(cc.Node.EventType.TOUCH_CANCEL, this.touchHandCancle, this);
var t = e.getChildByName("slime_hand_r"), o = e.getChildByName("slime_hand_r1"), c = e.getChildByName("slime_hand_l1"), i = e.getChildByName("slime_hand_l");
t.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(-20, 20)), cc.moveBy(.5, cc.v2(0, -20)), cc.moveBy(.5, cc.v2(20, 0)))));
o.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(-20, 20)), cc.moveBy(.5, cc.v2(0, -20)), cc.moveBy(.5, cc.v2(20, 0)))));
c.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(20, 20)), cc.moveBy(.5, cc.v2(0, -20)), cc.moveBy(.5, cc.v2(-20, 0)))));
i.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(20, 20)), cc.moveBy(.5, cc.v2(0, -20)), cc.moveBy(.5, cc.v2(-20, 0)))));
cc.director.getActionManager().pauseTarget(t);
cc.director.getActionManager().pauseTarget(o);
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(i);
var a = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in"), s = this.node.scale, r = cc.scaleTo(.11 * 5.2, .82 * s, s), l = cc.scaleTo(.52, s, .86 * s), d = cc.scaleTo(.09 * 5.2, .88 * s, s), p = cc.scaleTo(.08 * 5.2, s, .89 * s), u = cc.scaleTo(.07 * 5.2, s), h = cc.callFunc(function() {}, this), f = cc.sequence(r, l, d, p, u, h);
a.runAction(cc.repeatForever(f));
cc.director.getActionManager().pauseTarget(a);
}
};
t.prototype.touchHandBegin = function() {
console.log("touchHandBegin");
n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in").getComponent(i.default).enabled = !0;
};
t.prototype.touchHandMove = function(e) {
var t = this, o = n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move"), c = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in"), a = c.getComponent(i.default), s = e.getDelta();
if (Math.abs(s.x) > 0 || Math.abs(s.y) > 0) {
if (-1 == this.sound) {
console.log("detal.x");
this.sound = 0;
a.startMix();
cc.director.getActionManager().resumeTarget(o);
cc.director.getActionManager().resumeTarget(c);
var r = o.getChildByName("slime_hand_r"), l = o.getChildByName("slime_hand_r1"), d = o.getChildByName("slime_hand_l1"), p = o.getChildByName("slime_hand_l");
cc.director.getActionManager().resumeTarget(r);
cc.director.getActionManager().resumeTarget(l);
cc.director.getActionManager().resumeTarget(d);
cc.director.getActionManager().resumeTarget(p);
setTimeout(function() {
t.sound = -1;
}, 1e3);
}
} else {
this.sound = -1;
a.stopMix();
cc.director.getActionManager().pauseTarget(o);
cc.director.getActionManager().pauseTarget(c);
r = o.getChildByName("slime_hand_r"), l = o.getChildByName("slime_hand_r1"), d = o.getChildByName("slime_hand_l1"), 
p = o.getChildByName("slime_hand_l");
cc.director.getActionManager().pauseTarget(r);
cc.director.getActionManager().pauseTarget(l);
cc.director.getActionManager().pauseTarget(d);
cc.director.getActionManager().pauseTarget(p);
}
};
t.prototype.touchHandEnd = function() {
this.sound = -1;
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
console.log("touchHandEnd");
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in");
t.getComponent(i.default).stopMix();
cc.director.getActionManager().pauseTarget(e);
cc.director.getActionManager().pauseTarget(t);
var o = e.getChildByName("slime_hand_r"), c = e.getChildByName("slime_hand_r1"), a = e.getChildByName("slime_hand_l1"), s = e.getChildByName("slime_hand_l");
cc.director.getActionManager().pauseTarget(o);
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(a);
cc.director.getActionManager().pauseTarget(s);
};
t.prototype.touchHandCancle = function() {
this.sound = -1;
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move"), t = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in"), o = t.getComponent(i.default);
cc.director.getActionManager().pauseTarget(e);
cc.director.getActionManager().pauseTarget(t);
o.stopMix();
var c = e.getChildByName("slime_hand_r"), a = e.getChildByName("slime_hand_r1"), s = e.getChildByName("slime_hand_l1"), r = e.getChildByName("slime_hand_l");
cc.director.getActionManager().pauseTarget(c);
cc.director.getActionManager().pauseTarget(a);
cc.director.getActionManager().pauseTarget(s);
cc.director.getActionManager().pauseTarget(r);
};
t.prototype.MixEnd = function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in");
e.stopAllActions();
e.runAction(cc.scaleTo(.2, 1));
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
t.stopAllActions();
t.runAction(cc.moveTo(.2, cc.v2(0, -80)));
var o = t.getChildByName("slime_hand_r"), c = t.getChildByName("slime_hand_r1"), i = t.getChildByName("slime_hand_l1"), a = t.getChildByName("slime_hand_l");
o.stopAllActions();
c.stopAllActions();
i.stopAllActions();
a.stopAllActions();
o.runAction(cc.moveTo(.2, cc.v2(201, -179)));
c.runAction(cc.moveTo(.2, cc.v2(200, -199)));
i.runAction(cc.moveTo(.2, cc.v2(-200, -205)));
a.runAction(cc.moveTo(.2, cc.v2(-202, -182)));
t.off(cc.Node.EventType.TOUCH_START, this.touchHandBegin, this);
t.off(cc.Node.EventType.TOUCH_MOVE, this.touchHandMove, this);
t.off(cc.Node.EventType.TOUCH_END, this.touchHandEnd, this);
t.off(cc.Node.EventType.TOUCH_CANCEL, this.touchHandCancle, this);
t.on(cc.Node.EventType.TOUCH_MOVE, this.touchHandTopMove, this);
t.on(cc.Node.EventType.TOUCH_START, this.touchHandTopBegin, this);
t.on(cc.Node.EventType.TOUCH_END, this.touchHandTopEnd, this);
t.on(cc.Node.EventType.TOUCH_CANCEL, this.touchHandTopEnd, this);
this.hand_move_pos = t.position;
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
s.active = !0;
var r = s.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(0, 0)));
s.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function() {
s.setPosition(r);
}), cc.moveBy(1, cc.v2(0, 100)), cc.callFunc(function() {
s.setPosition(cc.v2(1e3, 1e6));
}), cc.delayTime(1))));
};
t.prototype.touchHandTopBegin = function() {
if (!this.isBegin) {
this.isBegin = !0;
if (!this.isMove) {
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = -1;
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r"), t = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r1"), o = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l"), c = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l1");
e.active = !1;
o.active = !1;
t.active = !0;
c.active = !0;
n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move").runAction(cc.scaleTo(.2, .95));
this.moveindex = 0;
}
}
};
t.prototype.touchHandTopMove = function(e) {
var t = n.CocosHelper.findNode(cc.Canvas.instance.node, "finger");
t.stopAllActions();
t.active = !1;
var o = e.getDelta();
if (!this.isMove) {
-1 == this.soundIndex && (this.soundIndex = cc.audioEngine.playEffect(this.touchHandTopBeginAudio, !0));
if (o.y > 0) {
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r"), i = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r1"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l"), s = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l1");
c.active = !1;
a.active = !1;
i.active = !0;
s.active = !0;
console.log(this.moveindex);
this.moveindex = this.moveindex + .06;
if (this.moveindex > 7.9) return;
n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
var r = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_l"), l = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_r");
r.scaleY = r.scaleY + this.moveindex / 350;
l.scaleY = l.scaleY + this.moveindex / 350;
var d = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in");
d.scaleY = d.scaleY - this.moveindex / 1e3;
d.scaleX = d.scaleX + this.moveindex / 1e3;
i.setPosition(i.getPosition().add(cc.v2(0, .65 * this.moveindex)));
s.setPosition(s.getPosition().add(cc.v2(0, .65 * this.moveindex)));
}
}
};
t.prototype.touchHandTopEnd = function() {
var e = this;
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = -1;
if (!this.touchEnd) {
this.touchEnd = !0;
this.isMove = !0;
cc.audioEngine.stopEffect(this.soundIndex);
this.soundIndex = -1;
var t = !1;
this.moveindex > 5 && (t = !0);
var o = !1;
this.moveindex > .5 && (o = !0);
this.moveindex = 0;
n.CocosHelper.findNode(cc.Canvas.instance.node, "hand_move");
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
if (!c.active) {
c.active = !0;
n.CocosHelper.createShake(c, 7);
}
if (o) {
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_l"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_r");
i.runAction(cc.scaleTo(.35, 1, 0));
a.runAction(cc.scaleTo(.35, 1, 0));
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in"), l = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r1"), d = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l1");
l.runAction(cc.moveTo(.35, cc.v2(200, -199)));
d.runAction(cc.moveTo(.35, cc.v2(-200, -199)));
var p = cc.scaleTo(.132, .82, 1), u = cc.scaleTo(.12, 1, .86), h = cc.scaleTo(.108, .88, 1), f = cc.scaleTo(.096, 1, .89), m = cc.scaleTo(.084, 1), g = cc.callFunc(function() {}, this);
s.stopAllActions();
var v = cc.sequence(p, u, h, f, m, g);
s.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r"), c = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r1"), i = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l1");
o.active = !0;
i.active = !0;
c.stopAllActions();
a.stopAllActions();
c.setPosition(cc.v2(200, -199));
a.setPosition(cc.v2(-200, -199));
c.active = !1;
a.active = !1;
e.moveindex = 0;
if (t) {
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "decorateParticle");
s.active = !0;
s.getComponent(cc.ParticleSystem).resetSystem();
cc.audioEngine.playEffect(e.done, !1);
e.touchEndNum % 2 == 0 && r.default.getInstance().jumpTips();
e.touchEndNum = e.touchEndNum + 1;
}
}), v));
setTimeout(function() {
e.isMove = !1;
e.isBegin = !1;
e.touchEnd = !1;
}, 500);
} else {
this.isMove = !1;
this.isBegin = !1;
this.touchEnd = !1;
var _ = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r"), y = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_r1"), C = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l"), S = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime_hand_l1");
_.active = !0;
C.active = !0;
y.stopAllActions();
S.stopAllActions();
y.setPosition(cc.v2(200, -199));
S.setPosition(cc.v2(-200, -199));
y.active = !1;
S.active = !1;
this.moveindex = 0;
var T = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_l"), b = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime4_r");
T.runAction(cc.scaleTo(.05, 1, 0));
b.runAction(cc.scaleTo(.05, 1, 0));
n.CocosHelper.findNode(cc.Canvas.instance.node, "plate_pull_in");
}
}
};
t.prototype.touchNet = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
var t = cc.view.getVisibleSize().width, o = cc.view.getVisibleSize().height;
n.CocosHelper.captureNodeSize(cc.Canvas.instance.node, t, o).then(function(e) {
if (null == e) ; else {
c.default.getInstance().setPageTexture(e);
cc.director.loadScene("play3SceneMS");
}
});
};
__decorate([ p(cc.Label) ], t.prototype, "label", void 0);
__decorate([ p ], t.prototype, "text", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "flyAudio", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "done", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "touch", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "touchHandTopBeginAudio", void 0);
return t = __decorate([ d ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../common/common/Script/CombinedComponent/MoveComponentMS": "MoveComponentMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"./DataConfigMS": "DataConfigMS",
"./TipManagerMS": "TipManagerMS",
"./tool/components/ShaderHelperMS": "ShaderHelperMS",
"./tool/components/ShaderTimeMS": "ShaderTimeMS"
} ],
play3MS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fb005VRAGJHJZrqtxGuoe1q", "play3MS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = e("./tool/components/ShaderHelperMS"), i = e("../common/common/Script/codebase/TransitionSceneMS"), a = e("./DataConfigMS"), s = e("./tool/components/ShaderTimeMS"), r = e("./TipManagerMS"), l = cc._decorator, d = l.ccclass, p = l.property, u = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.boomSp = [];
t.boom = null;
t.winAudio = null;
t.isShowBubble = !1;
t.bubbleNum = 0;
return t;
}
t.prototype.start = function() {
var e = this, t = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime2"), o = a.default.getInstance().getSelectLight();
cc.loader.loadRes("makeupms/light/fen/" + o, cc.SpriteFrame, function(e, o) {
e || (t.getComponent(cc.Sprite).spriteFrame = o);
});
"light_golden" == o && (t.active = !1);
var i = n.CocosHelper.findNode(cc.Canvas.instance.node, "showContent");
i.active = !0;
i.zIndex = 100;
i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a.default.getInstance().getPageTexture());
i.getComponent(c.default).enabled = !0;
i.getComponent(s.default).enabled = !0;
this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
e.isShowBubble || (e.isShowBubble = !0);
e.showBubble();
}))));
var r = n.CocosHelper.findNode(cc.Canvas.instance.node, "bg"), l = n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
r.runAction(cc.repeatForever(cc.sequence(cc.delayTime(10), cc.callFunc(function() {
l.getComponent(c.default).program = 3 % c.default.effectAssets.length;
}), cc.delayTime(10), cc.callFunc(function() {
l.getComponent(c.default).program = c.default.effectAssets.length - 1;
}))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_home").zIndex = 1e3;
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").zIndex = 1e3;
};
t.prototype.showBubble = function() {
var e = this, t = 250 - 500 * Math.random(), o = 450 - 900 * Math.random(), n = new cc.Node();
n.parent = cc.Canvas.instance.node;
n.position = cc.v2(o, t);
var c = n.addComponent(cc.Sprite);
c.spriteFrame = this.boomSp[0];
n.scale = 0;
var i = this.node.scale, a = cc.scaleTo(.132, .82 * i, i), s = cc.scaleTo(.12, i, .86 * i), l = cc.scaleTo(.108, .88 * i, i), d = cc.scaleTo(.096, i, .89 * i), p = cc.scaleTo(.084, i), u = cc.sequence(a, s, l, d, p);
n.runAction(cc.sequence(cc.scaleTo(.5, 1), u));
n.on(cc.Node.EventType.TOUCH_START, function() {
n.targetOff(e);
e.bubbleNum % 2 == 0 && r.default.getInstance().jumpTips();
e.bubbleNum = e.bubbleNum + 1;
for (var t = [], o = function(e) {
t.push(cc.callFunc(function() {
c.spriteFrame = e;
}));
t.push(cc.delayTime(.15));
}, i = 0, a = e.boomSp; i < a.length; i++) {
o(a[i]);
}
cc.audioEngine.playEffect(e.boom, !1);
var s = cc.sequence(t, cc.callFunc(function() {
e.isShowBubble = !1;
}));
n.runAction(s);
n.runAction(cc.sequence(cc.delayTime(.7), cc.fadeOut(.2), cc.removeSelf()));
}, this);
};
t.prototype.touchNext = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.active = !1;
n.CocosHelper.findNode(cc.Canvas.instance.node, "slime0");
var c = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
c.active = !0;
c.getComponent(cc.ParticleSystem).resetSystem();
c.zIndex = 100;
cc.audioEngine.playEffect(this.winAudio, !1);
setTimeout(function() {
var e = cc.view.getVisibleSize().width, t = cc.view.getVisibleSize().height;
n.CocosHelper.captureNodeSize(cc.Canvas.instance.node, e, t).then(function(e) {
null == e || a.default.getInstance().setPageTexture(e);
});
i.default.changeScene("play4SceneMS");
}, 3e3);
};
__decorate([ p(cc.Label) ], t.prototype, "label", void 0);
__decorate([ p ], t.prototype, "text", void 0);
__decorate([ p({
type: [ cc.SpriteFrame ]
}) ], t.prototype, "boomSp", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "boom", void 0);
__decorate([ p(cc.AudioClip) ], t.prototype, "winAudio", void 0);
return t = __decorate([ d ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"./DataConfigMS": "DataConfigMS",
"./TipManagerMS": "TipManagerMS",
"./tool/components/ShaderHelperMS": "ShaderHelperMS",
"./tool/components/ShaderTimeMS": "ShaderTimeMS"
} ],
playSlimeMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "df9a1EZG4xNkKh5H16f4l3D", "playSlimeMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./TipManagerMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.touchSlime = null;
t.touchSlimeAudio = null;
t.pullSlime = null;
t.lachangAudio = null;
t.batterAudio = null;
t.scaleNode = 1;
t.moveindex = 0;
t.pullNode = null;
t.distent = 0;
t.touchNum = 0;
t.soundIndex = -1;
return t;
}
t.prototype.start = function() {
var e = this;
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
setTimeout(function() {
e.scaleNode = e.node.scale;
}, 500);
};
t.prototype.touchBegin = function() {};
t.prototype.touchMove = function(e) {
this.moveindex = this.moveindex + 1;
if (3 == this.moveindex) {
var t = e.getLocation();
console.log(this.moveindex);
var o = new cc.Node();
o.parent = this.node;
o.anchorX = .5, o.anchorY = 0;
o.scaleY = 0;
o.scaleX = 0;
var n = o.addComponent(cc.Sprite);
n.spriteFrame = this.pullSlime;
n.node.position = this.node.convertToNodeSpaceAR(t);
this.pullNode = o;
this.soundIndex = cc.audioEngine.playEffect(this.lachangAudio, !0);
} else if (this.moveindex > 3) {
if (this.moveindex >= 95) return;
console.log(this.moveindex);
t = e.getLocation();
var c = 180 * this.pullNode.parent.convertToWorldSpaceAR(this.pullNode.getPosition()).angle(e.getPreviousLocation()) / Math.PI, i = t.sub(this.pullNode.getPosition()).mag();
if (i > this.distent) {
this.pullNode.scaleY = this.pullNode.scaleY + this.moveindex / 4e3;
this.pullNode.scaleX = this.pullNode.scaleX + this.moveindex / 4e3;
} else {
this.pullNode.scaleY = this.pullNode.scaleY - this.moveindex / 4e3;
this.pullNode.scaleX = this.pullNode.scaleX + this.moveindex / 4e3;
}
this.pullNode.scaleX = this.pullNode.scaleX >= 1 ? 1 : this.pullNode.scaleX;
this.pullNode.scaleX = this.pullNode.scaleX < 0 ? 0 : this.pullNode.scaleX;
this.distent = i;
this.pullNode.angle = c;
}
};
t.prototype.touchEnd = function(e) {
var t = this;
cc.audioEngine.stopEffect(this.soundIndex);
if (this.moveindex > 3) {
this.pullNode.runAction(cc.sequence(cc.scaleTo(.5, 0), cc.callFunc(function() {
cc.audioEngine.playEffect(t.batterAudio, !1);
}), cc.removeSelf()));
this.pullNode = null;
this.moveindex = 0;
} else {
this.moveindex = 0;
this.touchNum = this.touchNum + 1;
if (this.touchNum % 10 == 0) {
this.node.stopAllActions();
this.node.scale = this.scaleNode;
var o = 3.2, c = this.node.scale, i = cc.scaleTo(.11 * o, .92 * c, c), a = cc.scaleTo(.1 * o, c, .96 * c), s = cc.scaleTo(.09 * o, .98 * c, c), r = cc.scaleTo(.08 * o, c, .99 * c), l = cc.scaleTo(.07 * o, c), d = cc.sequence(i, a, s, r, l);
this.node.runAction(d);
}
this.touchNum % 5 == 0 && n.default.getInstance().jumpTips();
var p = e.getLocation(), u = new cc.Node();
u.parent = this.node;
var h = u.addComponent(cc.Sprite);
h.spriteFrame = this.touchSlime;
h.node.position = this.node.convertToNodeSpaceAR(p);
cc.audioEngine.playEffect(this.touchSlimeAudio, !1);
o = 1.2, c = this.node.scale, i = cc.scaleTo(.11 * o, .82 * c, c), a = cc.scaleTo(.1 * o, c, .86 * c), 
s = cc.scaleTo(.09 * o, .88 * c, c), r = cc.scaleTo(.08 * o, c, .89 * c), l = cc.scaleTo(.07 * o, c), 
d = cc.sequence(i, a, s, r, l);
u.runAction(cc.sequence(d, cc.delayTime(2), cc.fadeOut(1), cc.removeSelf()));
}
};
t.prototype.touchCancale = function() {
this.moveindex = 0;
};
__decorate([ a(cc.Label) ], t.prototype, "label", void 0);
__decorate([ a ], t.prototype, "text", void 0);
__decorate([ a(cc.SpriteFrame) ], t.prototype, "touchSlime", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "touchSlimeAudio", void 0);
__decorate([ a(cc.SpriteFrame) ], t.prototype, "pullSlime", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "lachangAudio", void 0);
__decorate([ a(cc.AudioClip) ], t.prototype, "batterAudio", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./TipManagerMS": "TipManagerMS"
} ],
popDialogMarket: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "50961Ny18FOjKqE247PNclD", "popDialogMarket");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.showAudio = null;
return t;
}
t.prototype.start = function() {
var e = this.node.getChildByName("pop_bg_t");
e.scale = 0;
var t = this.node.getChildByName("pop_content");
t.active = !0;
t.width = cc.view.getVisibleSize().width;
t.height = cc.view.getVisibleSize().height;
this.showAudio && cc.audioEngine.play(this.showAudio, !1, 1);
e.runAction(cc.sequence(cc.scaleTo(.25, 1), cc.callFunc(function() {
t.active = !0;
})));
};
t.prototype.touchToMarketBtn = function() {
jsToCPP.getInstance().rateUs();
this.close();
};
t.prototype.touchCloseBtn = function() {
this.close();
};
t.prototype.close = function() {
var e = this.node.getChildByName("pop_bg_t");
this.node.getChildByName("pop_content").active = !1;
var t = this;
e.runAction(cc.sequence(cc.scaleTo(.25, 0), cc.callFunc(function() {
t.node.removeFromParent();
})));
};
__decorate([ i(cc.AudioClip) ], t.prototype, "showAudio", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
popDialog: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e9d69DXEwtJ6bwOXP2xBcIc", "popDialog");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, c = n.ccclass, i = n.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.showAudio = null;
return t;
}
t.prototype.start = function() {
this.node.scale = 0;
var e = this.node.getChildByName("pop_content");
e.active = !0;
e.width = cc.view.getVisibleSize().width;
e.height = cc.view.getVisibleSize().height;
this.showAudio && cc.audioEngine.play(this.showAudio, !1, 1);
this.node.runAction(cc.sequence(cc.scaleTo(.25, 1), cc.callFunc(function() {
e.active = !0;
})));
};
t.prototype.touchOkBtn = function() {
this.close();
};
t.prototype.touchCloseBtn = function() {
this.close();
};
t.prototype.close = function() {
this.node.getChildByName("pop_content").active = !1;
this.node.runAction(cc.sequence(cc.scaleTo(.25, 0), cc.removeSelf()));
};
__decorate([ i(cc.AudioClip) ], t.prototype, "showAudio", void 0);
return t = __decorate([ c ], t);
}(cc.Component);
o.default = a;
cc._RF.pop();
}, {} ],
selectColorSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "45e06N2cyNOPJyHevTqw/r2", "selectColorSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../../common/common/Script/compoent/MoveInMS"), i = e("./NewDataCalMS"), a = e("../../common/common/Script/codebase/TransitionSceneMS"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
var e = i.default.getInstance().getBoolValue("blue"), t = i.default.getInstance().getBoolValue("pink");
if (e) {
var o = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r");
o.position = cc.v2(-258, -23);
a.position = cc.v2(258, -23);
o.active = !0;
a.active = !0;
var s = o.getChildByName("ui1"), r = o.getChildByName("ui0");
s.getComponent(cc.Sprite).spriteFrame = r.getComponent(cc.Sprite).spriteFrame;
} else if (t) {
o = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r");
o.position = cc.v2(258, -23);
a.position = cc.v2(-258, -23);
o.active = !0;
a.active = !0;
s = a.getChildByName("ui1"), r = a.getChildByName("ui0");
s.getComponent(cc.Sprite).spriteFrame = r.getComponent(cc.Sprite).spriteFrame;
} else {
o = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l"), a = n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r");
o.active = !0;
a.active = !0;
}
var l = n.CocosHelper.findNode(cc.Canvas.instance.node, "font"), d = l.getComponent(c.default);
l.active = !0;
d.enabled = !0;
d.actionCallBack = function() {
l.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_r").getChildByName("ui1").runAction(cc.repeatForever(cc.sequence(cc.moveBy(2, cc.v2(0, 10)), cc.moveBy(2, cc.v2(0, -10)))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "bowl_l").getChildByName("ui1").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(2, 1.05), cc.scaleTo(2, 1))));
};
};
t.prototype.selectItem = function(e) {
var t = e.target, o = [ "bowl_r", "bowl_l" ];
t.getComponent(cc.AudioSource) && t.getComponent(cc.AudioSource).play();
for (var c = 0; c < o.length; c++) {
var i = o[c], s = n.CocosHelper.findNode(cc.Canvas.instance.node, i);
s.getChildByName("touch_right").getComponent(cc.Button).interactable = !1;
console.log(t.name);
t.parent.name != i && s.runAction(cc.fadeOut(.5));
}
t.stopAllActions();
t.angle = 0;
t.scale = 1;
t.parent.runAction(cc.sequence(cc.spawn(cc.jumpTo(1, cc.v2(0, 0)), cc.scaleTo(1, 1.1)), cc.callFunc(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
e.active = !0;
e.getComponent(cc.AudioSource) && e.getComponent(cc.AudioSource).play();
setTimeout(function() {
"bowl_r" == t.parent.name ? a.default.changeScene("play1PinkSceneMS") : a.default.changeScene("play1BlueSceneMS");
}, 2e3);
})));
var r = n.CocosHelper.findNode(cc.Canvas.instance.node, "font");
r.stopAllActions();
r.runAction(cc.moveBy(.5, cc.v2(0, 500)));
};
__decorate([ l(cc.Label) ], t.prototype, "label", void 0);
__decorate([ l ], t.prototype, "text", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../../common/common/Script/compoent/MoveInMS": "MoveInMS",
"./NewDataCalMS": "NewDataCalMS"
} ],
selectSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "43704cWjwxDo4InO0Q++Woh", "selectSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../../common/common/Script/compoent/MoveInMS"), i = e("../../common/common/Script/codebase/TransitionSceneMS"), a = e("../DataConfigMS"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
a.default.getInstance().playMusic();
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "font"), t = e.getComponent(c.default);
e.active = !0;
t.enabled = !0;
t.actionCallBack = function() {
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "new").runAction(cc.repeatForever(cc.sequence(cc.rotateTo(2, -5), cc.rotateTo(2, 5))));
n.CocosHelper.findNode(cc.Canvas.instance.node, "old").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(2, 1.05), cc.scaleTo(2, 1))));
};
};
t.prototype.touchItem = function(e) {
var t = e.target, o = [ "old", "new" ];
t.getComponent(cc.AudioSource) && t.getComponent(cc.AudioSource).play();
for (var c = 0; c < o.length; c++) {
var a = o[c], s = n.CocosHelper.findNode(cc.Canvas.instance.node, a);
s.getComponent(cc.Button).interactable = !1;
console.log(t.name);
t.name != a && s.runAction(cc.fadeOut(.5));
}
t.stopAllActions();
t.angle = 0;
t.scale = 1;
t.runAction(cc.sequence(cc.spawn(cc.jumpTo(1, cc.v2(0, 0)), cc.scaleTo(1, 1.1)), cc.callFunc(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "finish");
e.active = !0;
e.getComponent(cc.AudioSource) && e.getComponent(cc.AudioSource).play();
setTimeout(function() {
"old" == t.name ? i.default.changeScene("showSceneMS") : i.default.changeScene("showToolSceneMS");
}, 2e3);
})));
var r = n.CocosHelper.findNode(cc.Canvas.instance.node, "font");
r.stopAllActions();
r.runAction(cc.moveBy(.5, cc.v2(0, 500)));
};
__decorate([ l(cc.Label) ], t.prototype, "label", void 0);
__decorate([ l ], t.prototype, "text", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../../common/common/Script/compoent/MoveInMS": "MoveInMS",
"../DataConfigMS": "DataConfigMS"
} ],
showLaodingHall: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a7985u3L0tMuIDQ1k6JMpOE", "showLaodingHall");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AdsManagerHall"), c = function() {
function e() {
this._loadingMinTime = 2;
this._loadingMaxTime = 5;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
this._adShowing = !1;
this._isRequestingLoadAd = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
if (cc.sys.isMobile) {
this.initAdsCall();
n.default.getInstance().initLisenter();
}
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initAdsCall = function() {
var e = this;
n.default.getInstance().onAdsLoaded = function(t) {
console.log(" showLaodingHall====>广告====>ID值" + t);
e._isRequestingLoadAd && e._adLoadType == t && (t == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross());
};
n.default.getInstance().onAdsClicked = function(e) {};
n.default.getInstance().onAdsExpanded = function(t) {
console.log(" showLaodingHall====>广告====>ID值" + t);
if (e._adLoadType == t) {
e.isAdsShowed = !0;
e._adLoadDone = !0;
e._adShowing = !0;
}
};
n.default.getInstance().onAdsCollapsed = function(t) {
console.log(" showLaodingHall====>广告====>ID值" + t);
console.log(t);
if (e._adLoadType == t) {
if (e._bLoadingCanRemove) {
e._taskDone();
return;
}
e._adShowing = !1;
}
e._timeCheckSchedule(0);
};
n.default.getInstance().onAdsLoadFailed = function(t, o) {
e._adLoadType == o && (e._adLoadDone = !0);
};
};
e.prototype.showAds = function(e) {
var t = cc.find("Canvas");
if (t) {
var o = this, c = "loading/Ads";
c = cc.sys.platform == cc.sys.ANDROID ? "loading/Ads" : "loading/android";
cc.loader.loadRes(c, function(c, i) {
if (cc.sys.isMobile && c) cc.log("Prefab error11:" + c); else if (i instanceof cc.Prefab) {
var a = cc.instantiate(i);
console.log("add prefab1111");
t.addChild(a);
a.name = "newMyPrefab";
a.setPosition(0, 0);
a.zIndex = 100;
cc.sys.isMobile && n.default.getInstance().initLisenter();
o.loadAd(e);
o._timeEnter = new Date();
} else cc.log("Prefab error22");
});
} else cc.log("find Canvas error");
};
e.prototype.loadAd = function(e) {
void 0 === e && (e = !1);
this._isRequestingLoadAd = !1;
this._adShowing = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
this._adLoadType = e ? n.ADS_TYPE.kTypeCrosspromoAds : n.ADS_TYPE.kTypeInterstitialAds;
var t = cc.find("Canvas"), o = this, c = cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
o.isAdsShowed = !1;
cc.sys.isMobile && (o._adLoadType == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross());
o.scheduTime = setInterval(function() {
o._timeCheckSchedule(0);
}, 5);
}));
t.runAction(c);
};
e.prototype._timeCheckSchedule = function(e) {
var t = (new Date().getTime() - this._timeEnter.getTime()) % 864e5 % 36e5 % 6e4, o = Math.round(t / 1e3);
if (o >= this._loadingMinTime && this._adLoadDone) this._adLoadInTime(); else if (o >= this._loadingMaxTime) if (this._adLoadType != n.ADS_TYPE.kTypeCrosspromoAds || this.isAdsShowed) this._adLoadTimeOut(); else {
this._isRequestingLoadAd = !1;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
cc.sys.isMobile && n.default.getInstance().showInterstitial();
}
};
e.prototype._adLoadInTime = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._adLoadTimeOut = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._taskDone = function() {
clearInterval(this.scheduTime);
var e = cc.find("Canvas");
e.getChildByName("newMyPrefab") && e.getChildByName("newMyPrefab").removeFromParent();
this.loadingDoneCallback && this.loadingDoneCallback();
console.log("hide ads");
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {
"./AdsManagerHall": "AdsManagerHall"
} ],
showLaodingMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b6aa83GjRtKVa+fsm8/d5LU", "showLaodingMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AdsManagerMS"), c = function() {
function e() {
this._loadingMinTime = 2;
this._loadingMaxTime = 5;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
this._adShowing = !1;
this._isRequestingLoadAd = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
if (cc.sys.isMobile) {
this.initAdsCall();
n.default.getInstance().initLisenter();
}
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initAdsCall = function() {
var e = this;
n.default.getInstance().onAdsLoaded = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
e._isRequestingLoadAd && e._adLoadType == t && (t == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross());
};
n.default.getInstance().onAdsClicked = function(e) {};
n.default.getInstance().onAdsExpanded = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
if (e._adLoadType == t) {
e.isAdsShowed = !0;
e._adLoadDone = !0;
e._adShowing = !0;
}
};
n.default.getInstance().onAdsCollapsed = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
console.log(t);
if (e._adLoadType == t) {
if (e._bLoadingCanRemove) {
e._taskDone();
return;
}
e._adShowing = !1;
}
e._timeCheckSchedule(0);
};
n.default.getInstance().onAdsLoadFailed = function(t, o) {
e._adLoadType == o && (e._adLoadDone = !0);
};
};
e.prototype.showAds = function(e) {
var t = cc.find("Canvas");
if (t) {
var o = this;
cc.loader.loadRes("makeupms/ads_loading", function(c, i) {
console.log("1111");
console.log("444");
if (cc.sys.isMobile && c) cc.log("Prefab error11:" + c); else {
console.log("555");
console.log(i);
if (i instanceof cc.Prefab) {
console.log("2222");
var a = cc.instantiate(i);
console.log(a);
t.addChild(a);
a.name = "newMyPrefab";
a.setPosition(0, 0);
console.log("3333");
a.zIndex = 1e3;
n.default.getInstance().initLisenter();
o.loadAd(e);
o._timeEnter = new Date();
} else cc.log("Prefab error22");
}
});
} else cc.log("find Canvas error");
};
e.prototype.loadAd = function(e) {
void 0 === e && (e = !1);
this._isRequestingLoadAd = !1;
this._adShowing = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
this._adLoadType = e ? n.ADS_TYPE.kTypeCrosspromoAds : n.ADS_TYPE.kTypeInterstitialAds;
var t = cc.find("Canvas"), o = this, c = cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
o.isAdsShowed = !1;
n.default.getInstance().initLisenter();
o._adLoadType == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross();
o.scheduTime = setInterval(function() {
o._timeCheckSchedule(0);
}, 5);
}));
t.runAction(c);
};
e.prototype._timeCheckSchedule = function(e) {
var t = (new Date().getTime() - this._timeEnter.getTime()) % 864e5 % 36e5 % 6e4, o = Math.round(t / 1e3);
if (o >= this._loadingMinTime && this._adLoadDone) this._adLoadInTime(); else if (o >= this._loadingMaxTime) if (this._adLoadType != n.ADS_TYPE.kTypeCrosspromoAds || this.isAdsShowed) this._adLoadTimeOut(); else {
this._isRequestingLoadAd = !1;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
cc.sys.isMobile && n.default.getInstance().showInterstitial();
}
};
e.prototype._adLoadInTime = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._adLoadTimeOut = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._taskDone = function() {
clearInterval(this.scheduTime);
this.loadingDoneCallback && this.loadingDoneCallback();
cc.find("Canvas").getChildByName("newMyPrefab").removeFromParent();
console.log("hide ads");
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {
"./AdsManagerMS": "AdsManagerMS"
} ],
showLaoding: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f6f0fDW4ZpHMaHztdPOzRtS", "showLaoding");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./AdsManager"), c = function() {
function e() {
this._loadingMinTime = 2;
this._loadingMaxTime = 5;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
this._adShowing = !1;
this._isRequestingLoadAd = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
if (cc.sys.isMobile) {
this.initAdsCall();
n.default.getInstance().initLisenter();
}
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.initAdsCall = function() {
var e = this;
n.default.getInstance().onAdsLoaded = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
e._isRequestingLoadAd && e._adLoadType == t && (t == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross());
};
n.default.getInstance().onAdsClicked = function(e) {};
n.default.getInstance().onAdsExpanded = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
if (e._adLoadType == t) {
e.isAdsShowed = !0;
e._adLoadDone = !0;
e._adShowing = !0;
}
};
n.default.getInstance().onAdsCollapsed = function(t) {
console.log(" showLaoding====>广告====>ID值" + t);
console.log(t);
if (e._adLoadType == t) {
if (e._bLoadingCanRemove) {
e._taskDone();
return;
}
e._adShowing = !1;
}
e._timeCheckSchedule(0);
};
n.default.getInstance().onAdsLoadFailed = function(t, o) {
e._adLoadType == o && (e._adLoadDone = !0);
};
};
e.prototype.showAds = function(e) {
var t = cc.find("Canvas");
if (t) {
var o = this;
cc.loader.loadRes("loading_bg", function(c, i) {
console.log("1111");
console.log("444");
if (cc.sys.isMobile && c) cc.log("Prefab error11:" + c); else {
console.log("555");
console.log(i);
if (i instanceof cc.Prefab) {
console.log("2222");
var a = cc.instantiate(i);
console.log(a);
t.addChild(a);
a.name = "newMyPrefab";
a.setPosition(0, 0);
console.log("3333");
cc.sys.isMobile && n.default.getInstance().initLisenter();
o.loadAd(e);
o._timeEnter = new Date();
} else cc.log("Prefab error22");
}
});
} else cc.log("find Canvas error");
};
e.prototype.loadAd = function(e) {
void 0 === e && (e = !1);
this._isRequestingLoadAd = !1;
this._adShowing = !1;
this._bLoadingCanRemove = !1;
this._adLoadDone = !1;
this._adLoadType = e ? n.ADS_TYPE.kTypeCrosspromoAds : n.ADS_TYPE.kTypeInterstitialAds;
var t = cc.find("Canvas"), o = this, c = cc.sequence(cc.delayTime(1.5), cc.callFunc(function() {
o.isAdsShowed = !1;
if (cc.sys.isMobile) {
n.default.getInstance().initLisenter();
o._adLoadType == n.ADS_TYPE.kTypeInterstitialAds ? n.default.getInstance().showInterstitial() : n.default.getInstance().showCross();
}
o.scheduTime = setInterval(function() {
o._timeCheckSchedule(0);
}, 5);
}));
t.runAction(c);
};
e.prototype._timeCheckSchedule = function(e) {
var t = (new Date().getTime() - this._timeEnter.getTime()) % 864e5 % 36e5 % 6e4, o = Math.round(t / 1e3);
if (o >= this._loadingMinTime && this._adLoadDone) this._adLoadInTime(); else if (o >= this._loadingMaxTime) if (this._adLoadType != n.ADS_TYPE.kTypeCrosspromoAds || this.isAdsShowed) this._adLoadTimeOut(); else {
this._isRequestingLoadAd = !1;
this._adLoadType = n.ADS_TYPE.kTypeInterstitialAds;
cc.sys.isMobile && n.default.getInstance().showInterstitial();
}
};
e.prototype._adLoadInTime = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._adLoadTimeOut = function() {
this._adShowing ? this._bLoadingCanRemove = !0 : this._taskDone();
};
e.prototype._taskDone = function() {
clearInterval(this.scheduTime);
this.loadingDoneCallback && this.loadingDoneCallback();
var e = cc.find("Canvas");
e.getChildByName("newMyPrefab") && e.getChildByName("newMyPrefab").removeFromParent();
console.log("hide ads");
};
return e;
}();
o.default = c;
cc._RF.pop();
}, {
"./AdsManager": "AdsManager"
} ],
showMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "459f1bdlWZOuJUQsYtySINu", "showMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../common/common/Script/compoent/MoveInMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.fly = null;
return t;
}
t.prototype.start = function() {
setTimeout(function() {
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "font1"), t = e.getComponent(c.default);
e.active = !0;
t.enabled = !0;
t.actionCallBack = function() {
n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next").active = !0;
e.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
};
}, 2e3);
for (var e = 0; e < 15; e++) {
var t = "cosmetics" + e, o = n.CocosHelper.findNode(cc.Canvas.instance.node, t);
o.active = !1;
var i = o.getChildByName(t + "_");
if (i) {
console.log(i.name);
i.zIndex = -1;
}
var a = o.addComponent(c.default);
a.direction = c.ShowDirection.bottom;
a.action = c.ActionType.JumpTo;
a.isLoad = !1;
a.delayTime = 1 + Math.random() * (e % 7) * .15;
if (e > 5) {
a.direction = c.ShowDirection.top;
a.delayTime = 1 + Math.random() * (e % 7) * .15;
}
e % 3 == 0 && (a.scoreAudio = this.fly);
o.active = !0;
}
};
t.prototype.touchNet = function(e) {
e.target.getComponent(cc.Button).interactable = !1;
cc.director.loadScene("chooseSceneMS");
};
__decorate([ s(cc.Label) ], t.prototype, "label", void 0);
__decorate([ s ], t.prototype, "text", void 0);
__decorate([ s(cc.AudioClip) ], t.prototype, "fly", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../common/common/Script/compoent/MoveInMS": "MoveInMS"
} ],
showToolSceneMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5f0dbfw63lPBqiLO2X0Xv95", "showToolSceneMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/codebase/utils/CocosHelperMS"), c = e("../../common/common/Script/compoent/MoveInMS"), i = e("../../common/common/Script/codebase/TransitionSceneMS"), a = e("../DataConfigMS"), s = cc._decorator, r = s.ccclass, l = s.property, d = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
t.fly = null;
return t;
}
t.prototype.start = function() {
a.default.getInstance().playMusic2();
for (var e = [ "bowl_l_content", "bowl_r_content" ], t = function(t) {
for (var i = e[t], a = n.CocosHelper.findNode(cc.Canvas.instance.node, i), s = 0, r = a.children; s < r.length; s++) {
var l = r[s];
"bowl" != l.name && (l.active = !1);
}
var d = a.getComponent(c.default), p = o;
d.actionCallBack = function() {
for (var e = 0, t = 0, o = a.children; t < o.length; t++) {
var n = o[t];
if ("bowl" != n.name) {
n.active = !1;
var c = n.position, i = 260 - 520 * Math.random(), s = 260 - 520 * Math.random(), r = cc.v2(c.x + i, c.y + s), l = [ "bowl_l_content" == a.name ? cc.v2(-500, 500) : cc.v2(500, 500), r, c ];
n.position = cc.v2(-500, 500);
var d = cc.cardinalSplineTo(1, l, 0);
n.active = !0;
n.runAction(cc.sequence(cc.delayTime(.2 * e), cc.callFunc(function() {
cc.audioEngine.playEffect(p.fly, !1);
}), d, cc.callFunc(function() {})));
}
e++;
}
};
}, o = this, i = 0; i < e.length; i++) t(i);
var s = n.CocosHelper.findNode(cc.Canvas.instance.node, "font"), r = s.getComponent(c.default);
s.active = !0;
r.enabled = !0;
r.actionCallBack = function() {
s.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 10)), cc.moveBy(1, cc.v2(0, -10)))));
var e = n.CocosHelper.findNode(cc.Canvas.instance.node, "btn_next");
e.active = !0;
e.opacity = 0;
e.runAction(cc.fadeIn(1));
e.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 1))));
};
};
t.prototype.touchItem = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.getComponent(cc.AudioSource) && o.getComponent(cc.AudioSource).play();
i.default.changeScene("make1AddSceneMS");
};
__decorate([ l(cc.Label) ], t.prototype, "label", void 0);
__decorate([ l ], t.prototype, "text", void 0);
__decorate([ l(cc.AudioClip) ], t.prototype, "fly", void 0);
return t = __decorate([ r ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../common/common/Script/codebase/TransitionSceneMS": "TransitionSceneMS",
"../../common/common/Script/codebase/utils/CocosHelperMS": "CocosHelperMS",
"../../common/common/Script/compoent/MoveInMS": "MoveInMS",
"../DataConfigMS": "DataConfigMS"
} ],
touchPhotoMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9b589086nJKVonkBVCdn9Xb", "touchPhotoMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("./DataConfigMS"), c = cc._decorator, i = c.ccclass, a = c.property, s = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {};
t.prototype.touch = function(e) {
e.target;
n.default.getInstance().showPhotoPup();
};
__decorate([ a(cc.Label) ], t.prototype, "label", void 0);
__decorate([ a ], t.prototype, "text", void 0);
return t = __decorate([ i ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {
"./DataConfigMS": "DataConfigMS"
} ],
uishowMS: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d05224pmUpJK4mcK+Reznc+", "uishowMS");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = e("../../common/common/Script/ads/showLaodingMS"), c = e("./NewDataCalMS"), i = cc._decorator, a = i.ccclass, s = i.property, r = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {};
t.prototype.touchPlayAgain = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.getComponent(cc.AudioSource) && o.getComponent(cc.AudioSource).play();
c.default.getInstance().setBoolValue("blue", !1);
c.default.getInstance().setBoolValue("pink", !1);
n.default.getInstance().showAds(!1);
n.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
n.default.getInstance().loadingDoneCallback = null;
cc.director.loadScene("selectColorSceneMS");
};
};
t.prototype.touchPlayNext = function(e, t) {
var o = e.target;
o.getComponent(cc.Button).interactable = !1;
o.getComponent(cc.AudioSource) && o.getComponent(cc.AudioSource).play();
c.default.getInstance().setBoolValue("blue", !1);
c.default.getInstance().setBoolValue("pink", !1);
n.default.getInstance().showAds(!1);
n.default.getInstance().loadingDoneCallback = function() {
console.log("广告关闭");
n.default.getInstance().loadingDoneCallback = null;
cc.director.loadScene("selectSceneMS");
};
};
__decorate([ s(cc.Label) ], t.prototype, "label", void 0);
__decorate([ s ], t.prototype, "text", void 0);
return t = __decorate([ a ], t);
}(cc.Component);
o.default = r;
cc._RF.pop();
}, {
"../../common/common/Script/ads/showLaodingMS": "showLaodingMS",
"./NewDataCalMS": "NewDataCalMS"
} ]
}, {}, [ "AdsManagerHall", "AudioManager", "BarAction", "ButtonSafe_hall", "ChooseScene", "DownSubGameMG", "EnterGame", "GameData", "HallController", "HttpUtils", "LoadSubGame", "Loading", "MoveIn_my", "SubgameManager", "TouchBtn", "TouchMoveCard", "VersionMG", "gameItem", "gameSceneMG", "home", "iosTouch", "platorm", "popDialog", "popDialogMarket", "showLaodingHall", "AddController", "AnimationEvent", "ClickController", "CoilController", "DataConfig", "DragonBoneActions", "DragonCompoent", "HandTouchEvent", "HomeButton", "MainController", "MoreGameButton", "PlayController", "PopupComponet", "PourController", "PullController", "RubController", "SlimeTouchEvent", "SpoonTouchEvent", "TipManager", "AddEgg", "AddIngredients", "BlenderMix", "CheckScribblePercent", "MixComponent", "TransformRecord", "AdsManager", "IconItem", "RewardManager", "showLaoding", "EventListener", "CakeMask", "CustomMask", "EatMask", "IcingMask", "MaskDraw", "NodeHitHook", "DragEventListener", "DragFall", "DragHideShade", "DragUtil", "SpriteDrag", "SpriteDragEventManager", "TouchComponent", "TransitionScene", "ClickScale", "ShaderHelper", "ShaderTime", "CocosHelper", "ColorRect", "ColorRectAssembler", "NodeComp", "NodeTransform", "BgScale", "ScaleRootAdapter", "ViewSizeAdapter", "ButtonSafe", "MoveIn", "RotateCompoent", "ClickScale_my", "CocosHelper_my", "ColorRectAssembler_my", "ColorRect_my", "NodeComp_my", "TransitionScene_my", "BgScale_my", "ScaleRootAdapter_my", "ViewSizeAdapter_my", "AnimationEventMS", "BubbleClickMS", "ButtonSafeMS", "ClickControllerMS", "DataConfigMS", "DragController1MS", "DragonBoneActionsMS", "DragonCompoentMS", "HandTouchEventMS", "HelloWorldMS", "HomeButtonMS", "OnceClickButtonMS", "PlayControllerMS", "PlaySlimesControllerMS", "PullControllerMS", "RubControllerMS", "SavePhotoMS", "SlapControllerMS", "SlimeTouchEventMS", "TipManagerMS", "NewDataCalMS", "make1AddSceneMS", "make2AddSceneMS", "play1BlueSceneMS", "play1PinkSceneMS", "selectColorSceneMS", "selectSceneMS", "showToolSceneMS", "uishowMS", "chooseMS", "fallSpriteCompoentMS", "homeBtnMS", "homeMS", "loadingMS", "loading_adsMS", "make1MS", "make2MS", "play1MS", "play2MS", "play3MS", "playSlimeMS", "showMS", "ShaderHelperMS", "ShaderMouseMS", "ShaderNameLabelMS", "ShaderTimeMS", "touchPhotoMS", "AddEggMS", "AddIngredientsMS", "BlenderMixMS", "CheckScribblePercentMS", "MixComponentMS", "MoveComponentMS", "TransformRecordMS", "AdsManagerMS", "IconItemMS", "RewardManagerMS", "showLaodingMS", "EventListenerMS", "CakeMaskMS", "CustomMaskMS", "EatMaskMS", "IcingMaskMS", "MaskDrawMS", "NodeHitHookMS", "DragEventListenerMS", "DragFallMS", "DragHideShadeMS", "DragUtilMS", "SpriteDragEventManagerMS", "SpriteDragMS", "TouchComponentMS", "TransitionSceneMS", "ClickScaleMS", "CocosHelperMS", "ColorRectAssemblerMS", "ColorRectMS", "NodeCompMS", "NodeTransformMS", "BgScaleMS", "ScaleRootAdapterMS", "ViewSizeAdapterMS", "MoveInMS", "RotateCompoentMS" ]);