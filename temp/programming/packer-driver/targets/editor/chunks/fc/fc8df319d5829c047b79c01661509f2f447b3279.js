System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, Vec3, SingletonComponent, GridGenerator, GameGlobal, _dec, _class, _crd, ccclass, property, GridManager;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../SingletonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiece(extras) {
    _reporterNs.report("Piece", "../Piece/Piece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridGenerator(extras) {
    _reporterNs.report("GridGenerator", "./GridGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameGlobal(extras) {
    _reporterNs.report("GameGlobal", "../Game/GameGlobal", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      GridGenerator = _unresolved_3.GridGenerator;
    }, function (_unresolved_4) {
      GameGlobal = _unresolved_4.GameGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a6ef2gOt1Jl4xvHpCootDr", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'SpriteRenderer', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass("GridManager"), _dec(_class = class GridManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor(...args) {
          super(...args);
          this._grid = void 0;
          this.gridGenerator = null;
          this.gridWidth = 0;
          this.gridHeight = 0;
          this.gridOffset = 0;
        }

        get grid() {
          return this._grid;
        }

        onLoad() {
          super.onLoad();
        }

        start() {
          this.gridGenerator = this.node.getComponent(_crd && GridGenerator === void 0 ? (_reportPossibleCrUseOfGridGenerator({
            error: Error()
          }), GridGenerator) : GridGenerator);
          this._grid = this.gridGenerator.Generate();
          this.gridWidth = this._grid[0].length;
          this.gridHeight = this._grid.length; //! dinamik olmalı

          const offsetDiff = (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET / 2 * this.gridWidth;
          const piecePositionsDiff = -(this.gridWidth / 2) * 100;
          const gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0));
          this._grid[0][0].node.getComponentInChildren(Sprite).color = new Color(0, 0, 0);
        }

        SwapPieces(pieceA, pieceB) {
          // Mevcut satır ve sütunları saklayın
          const pa_row = pieceA.row;
          const pa_col = pieceA.col;
          const pb_row = pieceB.row;
          const pb_col = pieceB.col; // Parçaların satır ve sütun bilgilerini güncelleyin

          pieceA.row = pb_row;
          pieceA.col = pb_col;
          pieceB.row = pa_row;
          pieceB.col = pa_col; // Grid'deki yerleri geçici olarak saklayın

          const tempA = this.grid[pa_row][pa_col];
          const tempB = this.grid[pb_row][pb_col]; // Grid'i yeni pozisyonlara göre güncelleyin

          this.grid[pa_row][pa_col] = tempB;
          this.grid[pb_row][pb_col] = tempA;
        }

        deleteMatches(matches) {
          for (const matchedPiece of matches) {
            matchedPiece.delete();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc8df319d5829c047b79c01661509f2f447b3279.js.map