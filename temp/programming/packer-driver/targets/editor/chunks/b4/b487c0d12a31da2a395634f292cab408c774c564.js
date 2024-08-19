System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, sleep, _dec, _class, _crd, ccclass, property, EffectManager;

  function _reportPossibleCrUseOfsleep(extras) {
    _reporterNs.report("sleep", "../Promises", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      sleep = _unresolved_2.sleep;
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
        static async decreaseScale(target, duration, yoyo) {
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
        }

        static async downCellPosition(target, duration) {
          return new Promise(resolve => {
            tween(target).to(duration, {
              position: new Vec3(target.position.x, target.position.y - 100, //buradaki 100'ü sprite brimi boyutuna göre almalıyız dinamik yap!!!
              target.position.z)
            }).call(() => {
              resolve();
            }).start();
          });
        }

        static async createPiece(target, to, duration, delay) {
          await (_crd && sleep === void 0 ? (_reportPossibleCrUseOfsleep({
            error: Error()
          }), sleep) : sleep)(delay);
          return new Promise(resolve => {
            tween(target).to(duration, {
              position: to
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b487c0d12a31da2a395634f292cab408c774c564.js.map