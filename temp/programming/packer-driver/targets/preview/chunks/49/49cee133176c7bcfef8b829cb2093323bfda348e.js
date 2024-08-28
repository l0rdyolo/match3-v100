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
        constructor() {
          super(...arguments);
          this._grid = void 0;
          this.gridGenerator = null;
          this.gridWidth = 0;
          this.gridHeight = 0;
          this.gridOffset = 0;
          this.colors = {
            red: new Color(255, 0, 0),
            black: new Color(0, 0, 0),
            blue: new Color(0, 0, 255),
            yellow: new Color(255, 255, 0)
          };
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

          var offsetDiff = (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET / 2 * this.gridWidth;
          var piecePositionsDiff = -(this.gridWidth / 2) * 100;
          var gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0)); // this.highlightGridCorners();
        }

        SwapPieces(pieceA, pieceB) {
          var pa_row = pieceA.row;
          var pa_col = pieceA.col;
          var pb_row = pieceB.row;
          var pb_col = pieceB.col;
          pieceA.row = pb_row;
          pieceA.col = pb_col;
          pieceB.row = pa_row;
          pieceB.col = pa_col;
          var tempA = this.grid[pa_row][pa_col];
          var tempB = this.grid[pb_row][pb_col];
          this.grid[pa_row][pa_col] = tempB;
          this.grid[pb_row][pb_col] = tempA;
        }

        deleteMatches(matches) {
          for (var matchedPiece of matches) {
            matchedPiece.delete();
          }
        }

        highlightGridCorners() {
          this._grid[0][0].node.getComponentInChildren(Sprite).color = this.colors.black;
          this._grid[this.gridHeight - 1][0].node.getComponentInChildren(Sprite).color = this.colors.yellow;
          this._grid[0][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.blue;
          this._grid[this.gridHeight - 1][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.red;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49cee133176c7bcfef8b829cb2093323bfda348e.js.map