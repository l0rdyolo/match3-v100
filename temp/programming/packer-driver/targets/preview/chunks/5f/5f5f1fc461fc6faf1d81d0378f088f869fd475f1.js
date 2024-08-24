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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Vec2', 'Vec3']);

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
          this.gridWidth = this.gridGenerator.width;
          this.gridOffset = this.gridGenerator.PIECE_OFFSET; //! dinamik olmalı

          var offsetDiff = this.gridOffset / 2 * this.gridWidth;
          var piecePositionsDiff = -(this.gridWidth / 2) * 100;
          var gridX = piecePositionsDiff + offsetDiff;
          this.node.setPosition(new Vec3(gridX, -200, 0));
        }

        SwapPieces(pieceA, pieceB) {
          // Mevcut satır ve sütunları saklayın
          var pa_row = pieceA.row;
          var pa_col = pieceA.col;
          var pb_row = pieceB.row;
          var pb_col = pieceB.col; // Parçaların satır ve sütun bilgilerini güncelleyin

          pieceA.row = pb_row;
          pieceA.col = pb_col;
          pieceB.row = pa_row;
          pieceB.col = pa_col; // Grid'deki yerleri geçici olarak saklayın

          var tempA = this.grid[pa_row][pa_col];
          var tempB = this.grid[pb_row][pb_col]; // Grid'i yeni pozisyonlara göre güncelleyin

          this.grid[pa_row][pa_col] = tempB;
          this.grid[pb_row][pb_col] = tempA;
          console.log(this.grid);
        }

      }) || _class)); // async swapPieces(piece1: Piece, piece2: Piece,piece1Pos:Vec3,piece2Pos:Vec3) {
      //     console.log("Swap pieces:",piece1,piece2)
      //       // Pozisyonları değiştir
      //       // const tempPosition = piece1.node.position.clone();
      //       //piece1.node.position = piece2.node.position;
      //       // piece2.node.position = tempPosition;
      //       EffectManager.movePiece(piece1.node,piece2Pos,0.1);
      //       await EffectManager.movePiece(piece2.node,piece1Pos,0.1);
      //       // Satır ve sütun değerlerini değiştir
      //       const tempRow = piece1.row;
      //       const tempCol = piece1.col;
      //       piece1.row = piece2.row;
      //       piece1.col = piece2.col;
      //       piece2.row = tempRow;
      //       piece2.col = tempCol;
      //      /* // Type'ları değiştir
      //       const tempType = piece1.type;
      //       piece1.type = piece2.type;
      //       piece2.type = tempType;*/
      //       // Grid'deki referansları güncelle
      //       this.gridGenerator.grid[piece1.row][piece1.col] = piece1;
      //       this.gridGenerator.grid[piece2.row][piece2.col] = piece2;
      //   }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f5f1fc461fc6faf1d81d0378f088f869fd475f1.js.map