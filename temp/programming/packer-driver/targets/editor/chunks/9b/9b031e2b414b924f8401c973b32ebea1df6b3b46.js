System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, Vec3, SingletonComponent, GridGenerator, GameGlobal, SliderManager, MatchChecker, GravityHandler, PiecePool, _dec, _class, _crd, ccclass, property, GridManager;

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

  function _reportPossibleCrUseOfSliderManager(extras) {
    _reporterNs.report("SliderManager", "../Interaction/SliderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatchChecker(extras) {
    _reporterNs.report("MatchChecker", "../Match/MatchChecker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGravityHandler(extras) {
    _reporterNs.report("GravityHandler", "./GravityHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPiecePool(extras) {
    _reporterNs.report("PiecePool", "../Piece/PiecePool", _context.meta, extras);
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
    }, function (_unresolved_5) {
      SliderManager = _unresolved_5.SliderManager;
    }, function (_unresolved_6) {
      MatchChecker = _unresolved_6.MatchChecker;
    }, function (_unresolved_7) {
      GravityHandler = _unresolved_7.GravityHandler;
    }, function (_unresolved_8) {
      PiecePool = _unresolved_8.PiecePool;
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
          this.sliderManager = null;
          this.matchChecker = null;
          this.gravityHandler = null;
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
          this.init();
        }

        init() {
          this.sliderManager = new (_crd && SliderManager === void 0 ? (_reportPossibleCrUseOfSliderManager({
            error: Error()
          }), SliderManager) : SliderManager)();
          this.matchChecker = new (_crd && MatchChecker === void 0 ? (_reportPossibleCrUseOfMatchChecker({
            error: Error()
          }), MatchChecker) : MatchChecker)();
          this.gravityHandler = new (_crd && GravityHandler === void 0 ? (_reportPossibleCrUseOfGravityHandler({
            error: Error()
          }), GravityHandler) : GravityHandler)();
        }

        highlightGridCorners() {
          this._grid[0][0].node.getComponentInChildren(Sprite).color = this.colors.black;
          this._grid[this.gridHeight - 1][0].node.getComponentInChildren(Sprite).color = this.colors.yellow;
          this._grid[0][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.blue;
          this._grid[this.gridHeight - 1][this.gridWidth - 1].node.getComponentInChildren(Sprite).color = this.colors.red;
        }

        start() {
          this.gridGenerator = this.node.getComponent(_crd && GridGenerator === void 0 ? (_reportPossibleCrUseOfGridGenerator({
            error: Error()
          }), GridGenerator) : GridGenerator);
          this._grid = this.gridGenerator.Generate();
          this.gridWidth = this._grid[0].length;
          this.gridHeight = this._grid.length;
          const offsetDiff = (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET / 2 * this.gridWidth;
          const piecePositionsDiff = -(this.gridWidth / 2) * 100;
          const gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0));
          this.highlightGridCorners();
        }

        async SwapPieces(pieceA, pieceB) {
          await this.sliderManager.Slide(pieceA, pieceB);
          const pa_row = pieceA.row;
          const pa_col = pieceA.col;
          const pb_row = pieceB.row;
          const pb_col = pieceB.col;
          pieceA.row = pb_row;
          pieceA.col = pb_col;
          pieceB.row = pa_row;
          pieceB.col = pa_col;
          const tempA = this.grid[pa_row][pa_col];
          const tempB = this.grid[pb_row][pb_col];
          this.grid[pa_row][pa_col] = tempB;
          this.grid[pb_row][pb_col] = tempA;
        }

        async deleteMatches(matches) {
          const fillPromises = [];

          for (const matchedPiece of matches) {
            matchedPiece.delete();
            fillPromises.push(new Promise(resolve => {
              resolve();
            }));
          }

          await Promise.all(fillPromises);
        }

        async handleSelection(pieceA, pieceB) {
          //! IDEA - 1: swap piece grid dönebilir.
          await this.SwapPieces(pieceA, pieceB);
          let matches = await this.matchChecker.checkForMatches(pieceA, pieceB, this.grid);

          if (matches.length > 0) {
            await this.deleteMatches(matches);
            await this.gravityHandler.applyGravity(this._grid); // await this.fillEmptySpaces(); 
          } else {
            await this.SwapPieces(pieceA, pieceB);
          }
        }

        async fillEmptySpaces() {
          const grid = this.grid;
          const fillPromises = [];

          for (let row = 0; row < this.gridHeight; row++) {
            for (let col = 0; col < this.gridWidth; col++) {
              const piece = grid[row][col];

              if (piece.node === null) {
                const newPieceNode = (_crd && PiecePool === void 0 ? (_reportPossibleCrUseOfPiecePool({
                  error: Error()
                }), PiecePool) : PiecePool).getInstance().getPiece();
                newPieceNode.setParent(this.node);
                this.node.addChild(newPieceNode);
                piece.node = newPieceNode;
                piece.canSelect = true;
                piece.ResetScale();
                piece.updatePosition(row, col);
                fillPromises.push(new Promise(resolve => {
                  resolve();
                }));
              }
            }
          }

          await Promise.all(fillPromises);
          console.log("empty cells filled");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b031e2b414b924f8401c973b32ebea1df6b3b46.js.map