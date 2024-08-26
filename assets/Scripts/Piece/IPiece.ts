import { Node } from "cc";
import { PieceTypes } from "./PieceTypes";

export interface IPiece{
    canSelected : boolean;
    row : number,
    col : number,
    type : PieceTypes,
}