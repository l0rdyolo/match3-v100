import { Node } from "cc";
import { PieceTypes } from "./PieceTypes";

export interface IPiece{
    canSelect : boolean;
    row : number,
    col : number,
    type : PieceTypes,
}