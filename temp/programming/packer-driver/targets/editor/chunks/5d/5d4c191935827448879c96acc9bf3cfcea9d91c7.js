System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, SingletonComponent, GridGenerator, _dec, _class, _crd, ccclass, property, GridManager;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridGenerator(extras) {
    _reporterNs.report("GridGenerator", "./GridGenerator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      GridGenerator = _unresolved_3.GridGenerator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a6ef2gOt1Jl4xvHpCootDr", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec(_class = class GridManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);
          this.grid = void 0;
          this.gridGenerator = null;
          this.gridWidth = 0;
          this.gridOffset = 0;
        }

        onLoad() {
          super.onLoad();
        }

        start() {
          this.gridGenerator = this.node.getComponent(_crd && GridGenerator === void 0 ? (_reportPossibleCrUseOfGridGenerator({
            error: Error()
          }), GridGenerator) : GridGenerator);
          this.grid = this.gridGenerator.Generate();
          this.gridWidth = this.gridGenerator.width;
          this.gridOffset = this.gridGenerator.PIECE_OFFSET; //! dinamik olmalı

          const offsetDiff = this.gridOffset / 2 * this.gridWidth;
          const piecePositionsDiff = -(this.gridWidth / 2) * 100;
          console.log(offsetDiff, piecePositionsDiff);
          const gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d4c191935827448879c96acc9bf3cfcea9d91c7.js.map