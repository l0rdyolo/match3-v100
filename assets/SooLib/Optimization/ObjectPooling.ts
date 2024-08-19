import { Component, Node } from "cc";

export interface IObjectPool<T extends Component | Node> {
    get(): T;
    release(element: T): void;
}

export class ObjectPooling<T extends Component | Node> implements IObjectPool<T> {
    private createObject: () => T;
    private initObject?: (obj: T) => void;
    private recycleObject?: (obj: T) => void;

    private onObjectAcquired: ((obj: T) => void)[] = [];
    private objectQueue: T[] = [];

    private maxSize: number;
    get size(): number {
        return this.objectQueue.length;
    }

    constructor(
        createObject: () => T,
        initObject?: (obj: T) => void,
        recycleObject?: (obj: T) => void,
        values?: T[],
        initialSize: number = 10,
        maxSize: number = 1000
    ) {
        if (!createObject) {
            throw new Error("The createObject cannot be null");
        }

        if (initialSize < 0) {
            throw new Error("The initialSize cannot be negative");
        }

        this.createObject = createObject;
        this.initObject = initObject;
        this.recycleObject = recycleObject;
        this.maxSize = maxSize;

        if (values) {
            for (let value of values) {
                this.objectQueue.push(value);
            }
        }
    }

    public get(): T {
        let obj: T;

        if (this.objectQueue.length === 0) {
            obj = this.createObject();
        } else {
            obj = this.objectQueue.shift()!;
        }

        this.initObject?.(obj);
        this.onObjectAcquired.forEach(callback => callback(obj));
        return obj;
    }

    public release(obj: T): void {
        if (!obj) {
            throw new Error("Object cannot be null");
        }

        if (this.objectQueue.indexOf(obj) !== -1) {
            throw new Error("Problem while releasing object: Element which you want to release is already released.");
        }

        if (this.size < this.maxSize) {
            this.objectQueue.push(obj);
        }

        this.recycleObject?.(obj);
    }

    public addOnObjectAcquiredListener(callback: (obj: T) => void): void {
        this.onObjectAcquired.push(callback);
    }

    public removeOnObjectAcquiredListener(callback: (obj: T) => void): void {
        this.onObjectAcquired = this.onObjectAcquired.filter(listener => listener !== callback);
    }

    public clear(): void {
        this.objectQueue.length = 0;
    }
}
