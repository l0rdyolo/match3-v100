System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, EffectManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "078a55y3SlKWKSsHMtOn3Nc", "EffectManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectManager", EffectManager = (_dec = ccclass("EffectManager"), _dec(_class = class EffectManager extends Component {
        static decreaseScale(target, duration, yoyo) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              tween(target).to(duration, {
                scale: Vec3.ZERO
              }).call(() => {
                resolve();

                if (yoyo) {
                  tween(target).to(duration, {
                    scale: Vec3.ONE
                  }).start();
                }
              }).start();
            });
          })();
        }

        static downCellPosition(target, duration) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              tween(target).to(duration, {
                position: new Vec3(target.position.x, target.position.y - 100, //buradaki 100'ü sprite brimi boyutuna göre almalıyız dinamik yap!!!
                target.position.z)
              }).call(() => {
                resolve();
              }).start();
            });
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e327cd5e04cf6dfb72fac98dbc78d652dd1d3f96.js.map