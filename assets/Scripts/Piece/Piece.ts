import { Node } from "cc";
import { IPiece } from "./IPiece";
import { PieceTypes } from "./PieceTypes";

export class Piece implements IPiece {
  public row: number = -1!;
  public col: number = -1!;
  public node: Node;
  public type: PieceTypes = null;

  public constructor(row: number, col: number, node: Node, type: PieceTypes) {
    this.row = row;
    this.col = col;
    this.node = node;
    this.type = type;
  }
}
