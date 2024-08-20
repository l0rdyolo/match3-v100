System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ObjectRepository, _crd;

  _export("ObjectRepository", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ac61LJCNE/pl+B9Fs2yjY", "ObjectRepository", undefined);

      __checkObsolete__(['Component', 'Node']);

      // export class ObjectRepository<T extends Component | Node> implements IObjectRepository<T> {
      //     private items: Map<string, T> = new Map();
      //     private getId(item: T): string {
      //         return item.uuid;
      //     }
      //     add(item: T): void {
      //         const id = this.getId(item);
      //         if (this.items.has(id)) {
      //             throw new Error(`Item with id ${id} already exists.`);
      //         }
      //         this.items.set(id, item);
      //     }
      //     get(id: string): T | null {
      //         return this.items.get(id) ?? null;
      //     }
      //     getAll(): T[] {
      //         return Array.from(this.items.values());
      //     }
      //     update(item: T): void {
      //         const id = this.getId(item);
      //         if (!this.items.has(id)) {
      //             throw new Error(`Item with id ${id} does not exist.`);
      //         }
      //         this.items.set(id, item);
      //     }
      //     remove(id: string): void {
      //         if (!this.items.delete(id)) {
      //             throw new Error(`Item with id ${id} does not exist.`);
      //         }
      //     }
      //     find(predicate: (item: T) => boolean): T[] {
      //         return Array.from(this.items.values()).filter(predicate);
      //     }
      //     count(): number {
      //         return this.items.size;
      //     }
      //     exists(id: string): boolean {
      //         return this.items.has(id);
      //     }
      //     clear(): void {
      //         this.items.clear();
      //     }
      //     insertMany(items: T[]): void {
      //         for (const item of items) {
      //             this.add(item);
      //         }
      //     }
      //     popLast(): T | null {
      //         if (this.items.size === 0) {
      //             return null;
      //         }
      //         const lastEntry = Array.from(this.items.entries()).pop();
      //         if (!lastEntry) {
      //             return null;
      //         }
      //         const [lastKey, lastValue] = lastEntry;
      //         this.items.delete(lastKey);
      //         return lastValue;
      //     }
      // }
      _export("ObjectRepository", ObjectRepository = class ObjectRepository {
        constructor(maxItems) {
          this.items = new Map();
          this.maxItems = void 0;
          this.maxItems = maxItems;
        }

        getId(item) {
          return item.uuid;
        }

        add(item) {
          if (this.items.size >= this.maxItems) {
            throw new Error(`Cannot add item: repository has reached its maximum limit of ${this.maxItems} items.`);
          }

          const id = this.getId(item);

          if (this.items.has(id)) {
            throw new Error(`Item with id ${id} already exists.`);
          }

          this.items.set(id, item);
        }

        get(id) {
          var _this$items$get;

          return (_this$items$get = this.items.get(id)) != null ? _this$items$get : null;
        }

        getAll() {
          return Array.from(this.items.values());
        }

        update(item) {
          const id = this.getId(item);

          if (!this.items.has(id)) {
            throw new Error(`Item with id ${id} does not exist.`);
          }

          this.items.set(id, item);
        }

        remove(id) {
          if (!this.items.delete(id)) {
            throw new Error(`Item with id ${id} does not exist.`);
          }
        }

        find(predicate) {
          return Array.from(this.items.values()).filter(predicate);
        }

        count() {
          return this.items.size;
        }

        exists(id) {
          return this.items.has(id);
        }

        clear() {
          this.items.clear();
        }

        insertMany(items) {
          if (this.items.size + items.length > this.maxItems) {
            throw new Error(`Cannot insert items: repository will exceed its maximum limit of ${this.maxItems} items.`);
          }

          for (const item of items) {
            this.add(item);
          }
        }

        popLast() {
          if (this.items.size === 0) {
            return null;
          }

          const lastEntry = Array.from(this.items.entries()).pop();

          if (!lastEntry) {
            return null;
          }

          const [lastKey, lastValue] = lastEntry;
          this.items.delete(lastKey);
          return lastValue;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d838290a9876bfae882a392289a15859bc01e4a.js.map