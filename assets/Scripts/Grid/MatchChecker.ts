import { _decorator, Color, Node, Sprite, Vec3 } from "cc";
import { EffectManager } from "../Effects/EffectManager";
import { PoolHelper } from "../PoolHelper";
import { PiecesPool } from "../Poolable/PiecesPool";
const { ccclass } = _decorator;

enum Direction {
  Horizontal,
  Vertical,
}

@ccclass("MatchChecker")
export class MatchChecker {
  private static directions = {
    horizontal: [
      { dx: 0, dy: 1 }, // Right
      { dx: 0, dy: -1 }, // Left
    ],
    vertical: [
      { dx: 1, dy: 0 }, // Down
      { dx: -1, dy: 0 }, // Up
    ],
  };

  public static async SwapPiecePositions(
    pieceA: Node,
    pieceB: Node,
    posA: Vec3,
    posB: Vec3,
    gridMap: Map<Node, { row: number; col: number }>
  ) {
    await EffectManager.movePiece(pieceA, posB, 0.1);
    await EffectManager.movePiece(pieceB, posA, 0.1);

    // Update the gridMap
    const posAData = gridMap.get(pieceA);
    const posBData = gridMap.get(pieceB);
    gridMap.set(pieceA, posBData);
    gridMap.set(pieceB, posAData);

    this.checkMatches(pieceA, gridMap);
    this.checkMatches(pieceB, gridMap);
  }

  private static getPieceAtPosition(
    position: { row: number; col: number },
    gridMap: Map<Node, { row: number; col: number }>
  ): Node | undefined {
    return Array.from(gridMap.entries()).find(
      ([_, pos]) => pos.row === position.row && pos.col === position.col
    )?.[0];
  }

  private static visitNeighborWithDirection(
    currentPiece: Node,
    gridMap: Map<Node, { row: number; col: number }>,
    direction: { dx: number; dy: number },
    visited: Set<Node>,
    depth: number,
    maxDepth: number
  ): void {
    if (depth > maxDepth) return;

    const currentPiecePosition = gridMap.get(currentPiece);
    const neighborPiecePosition = {
      row: currentPiecePosition.row + direction.dx,
      col: currentPiecePosition.col + direction.dy,
    };

    const neighbor = this.getPieceAtPosition(neighborPiecePosition, gridMap);
    if (
      neighbor &&
      !visited.has(neighbor) &&
      neighbor.name === currentPiece.name
    ) {
      visited.add(neighbor);
      this.visitNeighborWithDirection(
        neighbor,
        gridMap,
        direction,
        visited,
        depth + 1,
        maxDepth
      );
    }
  }

  public static  checkMatches(
    currentPiece: Node,
    gridMap: Map<Node, { row: number; col: number }>,
    maxDepth: number = 3
  ) : boolean {
    const horizontalVisited = this.collectMatches(
      currentPiece,
      gridMap,
      this.directions.horizontal,
      maxDepth
    );

    const verticalVisited = this.collectMatches(
      currentPiece,
      gridMap,
      this.directions.vertical,
      maxDepth
    );

    let isVertical = false;
    let isHorizontal = false; 


    if (horizontalVisited.size >= 3) {
      this.handleMatch(Array.from(horizontalVisited), gridMap);
      isHorizontal = true;
    }

    if (verticalVisited.size >= 3) {
      this.handleMatch(Array.from(verticalVisited), gridMap);
      isVertical = true;
    }

    return isVertical || isHorizontal;
  }

  private static collectMatches(
    currentPiece: Node,
    gridMap: Map<Node, { row: number; col: number }>,
    directions: { dx: number; dy: number }[],
    maxDepth: number
  ): Set<Node> {
    const visited = new Set<Node>();
    visited.add(currentPiece);

    for (const direction of directions) {
      this.visitNeighborWithDirection(
        currentPiece,
        gridMap,
        direction,
        visited,
        0,
        maxDepth
      );
    }

    return visited;
  }

  private static async handleMatch(
    matchedPieces: Node[],
    gridMap: Map<Node, { row: number; col: number }>
  ): Promise<void> {
    for (const piece of matchedPieces) {
      EffectManager.decreaseScale(piece, 0.1, false);
      gridMap.delete(piece);
      PoolHelper.release(PiecesPool, piece);
    }
  }
}
