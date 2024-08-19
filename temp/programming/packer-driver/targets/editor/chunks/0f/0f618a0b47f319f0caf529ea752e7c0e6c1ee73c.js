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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec2', 'Vec3']);

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

        static async movePiece(target, to, duration) {
          return new Promise(resolve => {
            tween(target).to(duration, {
              position: to
            }).call(() => {
              resolve();
            }).start();
          });
        }

        static async fallPieceToGridPosition(target, to, duration, delay) {
          await (_crd && sleep === void 0 ? (_reportPossibleCrUseOfsleep({
            error: Error()
          }), sleep) : sleep)(delay);
          return new Promise(resolve => {
            tween(target).to(duration, {
              position: to
            }).call(() => {
              resolve();
            }).start();
          });
        }

        static async animateRowFall(pieceProps, duration, delay = 0) {
          const promises = pieceProps.map(pieceProps => {
            return this.fallPieceToGridPosition(pieceProps.piece, pieceProps.targetPosition, duration, delay);
          });
          await Promise.all(promises);
        }

        static highlightPiece(piece) {
          // piece.setScale(1.2, 1.2, 1.2);
          tween(piece).to(0.1, {
            scale: new Vec3(1.2, 1.2, 1.2)
          }).start();
        }

        static async shakePiece(piece, duration = 0.2) {
          const originalPosition = piece.getPosition();
          const shakeAmount = 10; // Sarsılma miktarı

          return new Promise(resolve => {
            tween(piece).by(duration / 4, {
              position: new Vec3(shakeAmount, 0, 0)
            }) // Sağ
            .by(duration / 4, {
              position: new Vec3(-shakeAmount * 2, 0, 0)
            }) // Sol
            .by(duration / 4, {
              position: new Vec3(shakeAmount * 2, 0, 0)
            }) // Sağ
            .by(duration / 4, {
              position: new Vec3(-shakeAmount, 0, 0)
            }) // Sol
            .call(() => {
              piece.setPosition(originalPosition); // Parçayı orijinal konumuna geri döndür

              resolve();
            }).start();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f618a0b47f319f0caf529ea752e7c0e6c1ee73c.js.map