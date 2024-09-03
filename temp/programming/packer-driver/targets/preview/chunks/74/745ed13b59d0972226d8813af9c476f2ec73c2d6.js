System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Sprite, Vec3, SingletonComponent, GridGenerator, GameGlobal, SliderManager, MatchChecker, GravityHandler, PiecePool, _dec, _class, _crd, ccclass, property, GridManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      __checkObsolete__(['_decorator', 'Color', 'Sprite', 'Vec3']);

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
          var offsetDiff = (_crd && GameGlobal === void 0 ? (_reportPossibleCrUseOfGameGlobal({
            error: Error()
          }), GameGlobal) : GameGlobal).PIECE_OFFSET / 2 * this.gridWidth;
          var piecePositionsDiff = -(this.gridWidth / 2) * 100;
          var gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0)); // this.highlightGridCorners();
        }

        SwapPieces(pieceA, pieceB) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var tempA = pieceA.node;
            var tempB = pieceB.node;
            pieceA.node = null;
            pieceB.node = null;
            pieceA.node = tempB;
            pieceB.node = tempA;
            yield _this.sliderManager.Slide(pieceA, pieceB);
            return [pieceA, pieceB];
          })();
        }

        deleteMatches(matches) {
          return _asyncToGenerator(function* () {
            for (var matchedPiece of matches) {
              matchedPiece.delete();
            }
          })();
        }

        handleSelection(pieceA, pieceB) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var [_pieceA, _pieceB] = yield _this2.SwapPieces(pieceA, pieceB);
            var matches = yield _this2.matchChecker.checkForMatches(_pieceA, _pieceB, _this2.grid);

            if (matches.length > 0) {
              yield _this2.deleteMatches(matches);
              yield _this2.sleep(300);
              yield _this2.gravityHandler.applyGravity(_this2.grid);
              yield _this2.sleep(1000); // await this.fillEmptySpaces();

              yield _this2.sleep(900); //buraya bir sleep patlar

              /*
              let newMatches: Piece[] = await this.matchChecker.checkForMatchesAfterGravity(this.grid);
                while (newMatches.length > 0) { 
                  await this.deleteMatches(newMatches);
                  await this.gravityHandler.applyGravity(this.grid);
                  await this.sleep(3000);
                  await this.fillEmptySpaces();
                  await this.sleep(1900);
                    newMatches = await this.matchChecker.checkForMatchesAfterGravity(this.grid);
              }
                */
            } else {
              yield _this2.SwapPieces(pieceA, pieceB);
            }
          })();
        }

        sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        } // private async fillEmptySpaces() {
        //   for (const piece of emptyPieces) {
        //     const newPieceNode = PiecePool.getInstance().getPiece();
        //     piece.node = newPieceNode;
        //     piece.node.setParent(this.node);
        //     this.node.addChild(piece.node);
        //     piece.updatePosition();
        //   }
        // }


        fillEmptySpaces() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var grid = _this3.grid;
            var fillPromises = [];

            for (var row = 0; row < _this3.gridHeight; row++) {
              for (var col = 0; col < _this3.gridWidth; col++) {
                var piece = grid[row][col];

                if (piece.isEmpty) {
                  var newPieceNode = (_crd && PiecePool === void 0 ? (_reportPossibleCrUseOfPiecePool({
                    error: Error()
                  }), PiecePool) : PiecePool).getInstance().getPiece();
                  newPieceNode.setParent(_this3.node);

                  _this3.node.addChild(newPieceNode);

                  newPieceNode.getComponentInChildren(Sprite).color = _this3.colors.yellow;
                  piece.node = newPieceNode;
                  piece.ResetScale();
                  piece.updatePosition(row, col);
                  fillPromises.push(new Promise(resolve => {
                    resolve();
                  }));
                }
              }
            }
          })();
        }

        consoleGrid() {
          var emptyCounter = 0;
          var row = [];

          for (var i = 0; i < this.gridWidth; i++) {
            var col = [];

            for (var j = 0; j < this.gridHeight; j++) {
              var currentPiece = this.grid[i][j];
              col.push(currentPiece);

              if (currentPiece.isEmpty) {
                emptyCounter++;
              }
            }

            row.push(col);
          }

          console.log(row); // emptyCounter === 0
          //   ? console.log("boş piece yok")
          //   : console.log(`boş piece sayısı : ${emptyCounter}`);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=745ed13b59d0972226d8813af9c476f2ec73c2d6.js.map