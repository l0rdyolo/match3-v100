import { Node } from "cc";
import { Poolable } from "../SooLib/Optimization/Poolable";

export class PoolHelper {
    private static pools: Map<typeof Poolable, Poolable> = new Map();

    public static registerPool(poolableType: typeof Poolable, poolableInstance: Poolable): void {
        this.pools.set(poolableType, poolableInstance);
    }

    public static get<T extends Poolable>(poolableType: typeof Poolable): Node {
        const poolableInstance = this.pools.get(poolableType);
        if (!poolableInstance) {
            throw new Error(`No pool registered for type: ${poolableType.name}`);
        }
        return poolableInstance.Pool.get();
    }

    public static release<T extends Poolable>(poolableType: typeof Poolable, obj: Node): void {
        const poolableInstance = this.pools.get(poolableType);
        if (!poolableInstance) {
            throw new Error(`No pool registered for type: ${poolableType.name}`);
        }
        poolableInstance.Pool.release(obj);
    }
}