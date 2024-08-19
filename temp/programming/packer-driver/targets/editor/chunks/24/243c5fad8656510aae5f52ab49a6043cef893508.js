System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Vec3, EasyLevels, InGameAssets, _dec, _class, _crd, ccclass, property, GridGenerator;

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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Vec3', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridGenerator", GridGenerator = (_dec = ccclass("GridGenerator"), _dec(_class = class GridGenerator extends Component {
        start() {
          this.generate((_crd && EasyLevels === void 0 ? (_reportPossibleCrUseOfEasyLevels({
            error: Error()
          }), EasyLevels) : EasyLevels).levels[3]);
        }

        update(deltaTime) {}

        setNodeActive(settingNode, isActive) {
          settingNode.active = isActive;
        }

        generate(level) {
          const rows = level.rows;
          const cols = level.cols;
          const gridData = level.grid;
          const tileSize = 100; // burayı değiştir

          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              const currentClass = gridData[row][col];
              const assetType = (_crd && InGameAssets === void 0 ? (_reportPossibleCrUseOfInGameAssets({
                error: Error()
              }), InGameAssets) : InGameAssets).AssetClass.get(currentClass);

              if (assetType && assetType.length > 0) {
                const randomIndex = Math.floor(Math.random() * assetType.length);
                const randomAsset = assetType[0];

                if (randomAsset) {
                  const newNode = instantiate(randomAsset);
                  this.node.addChild(newNode);
                  const position = this.getTilePosition(row, col, tileSize);
                  newNode.setPosition(position);
                  newNode.active = true;
                }
              }
            } //to center grid
            //   const newPosition = new Vec3(-1 * (tileSize*2),100,0)
            //   this.node.setPosition(newPosition )

          }
        } // Griddeki her bir tile'ın pozisyonunu hesaplar


        getTilePosition(row, col, tileSize) {
          const x = col * tileSize;
          const y = row * tileSize;
          console.log(x, y);
          return new Vec3(x, y, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=243c5fad8656510aae5f52ab49a6043cef893508.js.map