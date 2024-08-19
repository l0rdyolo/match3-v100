System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, instantiate, Vec3, EasyLevels, InGameAssets, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GridGenerator;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyLevels(extras) {
    _reporterNs.report("EasyLevels", "../Levels/EasyLevels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInGameAssets(extras) {
    _reporterNs.report("InGameAssets", "../InGameAssets", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelData(extras) {
    _reporterNs.report("LevelData", "../Levels/LevelData", _context.meta, extras);
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
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EasyLevels = _unresolved_2.EasyLevels;
    }, function (_unresolved_3) {
      InGameAssets = _unresolved_3.InGameAssets;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1d2cLMbEBBcKsAfI+8VjC+", "GridGenerator", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass("GridGenerator"), _dec2 = property(Node), _dec(_class = (_class2 = class GridGenerator extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "dummyCandy", _descriptor, this);
        }

        start() {
          this.setNodeActive(this.dummyCandy, true);
          this.testEffects();
        }

        update(deltaTime) {}

        setNodeActive(settingNode, isActive) {
          settingNode.active = isActive;
        }

        testEffects() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // Seviye verilerini al
            var levelData = (_crd && EasyLevels === void 0 ? (_reportPossibleCrUseOfEasyLevels({
              error: Error()
            }), EasyLevels) : EasyLevels).levels[1];

            for (var row = 0; row < levelData.rows; row++) {
              for (var col = 0; col < levelData.cols; col++) {
                var currentGridCellData = levelData.grid[row][col];
                var assetType = (_crd && InGameAssets === void 0 ? (_reportPossibleCrUseOfInGameAssets({
                  error: Error()
                }), InGameAssets) : InGameAssets).NodeMap.get(currentGridCellData);
                var asset = assetType[0];

                if (asset) {
                  // Yeni node'u instantiate et
                  var newNode = instantiate(asset); // Pozisyonunu ayarla

                  var position = _this.getTilePosition(row, col, 100); // 64 örnek tile boyutu


                  newNode.setPosition(position); // Node'u sahneye ekle

                  _this.node.addChild(newNode);

                  newNode.active = true;
                }
              }
            }
          })();
        } // Griddeki her bir tile'ın pozisyonunu hesaplar


        getTilePosition(row, col, tileSize) {
          var x = col * tileSize + tileSize / 2;
          var y = row * tileSize + tileSize / 2;
          return new Vec3(x, y, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dummyCandy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d898929277cd84f322c0465529168ebac19f30d0.js.map