import { Node } from "cc";
import { PieceTypes } from "./PieceTypes";

export interface IPiece{
    row : number,
    col : number,
    type : PieceTypes,
}