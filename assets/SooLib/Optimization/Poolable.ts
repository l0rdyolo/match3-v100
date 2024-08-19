import { _decorator, Component, Node, instantiate, Prefab, Vec3, Quat } from 'cc';
import { IObjectPool, ObjectPooling } from './ObjectPooling';
const { ccclass, property } = _decorator;

// Define the Poolable abstract class
@ccclass('Poolable')
export abstract class Poolable extends Component {
    @property(Prefab)
    protected poolObject: Prefab = null;

    @property
    protected maxCount: number = 20;

    protected pool: IObjectPool<Node>;

    public get Pool(): IObjectPool<Node> {
        return this.pool
    }

    protected onObjectAcquired(obj: Node): void {
        obj.active = true;
        // other logics ...
    }

    protected onObjectReleased(obj: Node): void {
        obj.active = false;
        obj.setParent(this.node);
        obj.setPosition(Vec3.ZERO);
        obj.setScale(Vec3.ONE);
        obj.setRotation(new Quat());
        // other logics ...
    }

    protected creator(): Node {
        const obj = instantiate(this.poolObject);
        obj.setParent(this.node);
        return obj;
    }

    protected onLoad(): void {
        const list: Node[] = [];
        for (let i = 0; i < this.maxCount; i++) {
            const obj = this.creator();
            obj.active = false;
            list.push(obj);
        }

        this.pool = new ObjectPooling<Node>(
            () => this.creator(),
            (obj) => this.onObjectAcquired(obj),
            (obj) => this.onObjectReleased(obj),
            list,
            this.maxCount,
            this.maxCount
        );
    }
}
