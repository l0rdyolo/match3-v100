System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, HeapManager, PriorityQueue, _Symbol$iterator, _crd;

  function defaultComparer(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  _export("PriorityQueue", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a61edfYWHtOHbtIYHTydrnt", "PriorityQueue", undefined);

      HeapManager = class HeapManager {
        constructor(comparer) {
          this._heap = [];
          this.comparer = comparer;
        }

        get count() {
          return this._heap.length;
        }

        get items() {
          return this._heap;
        }

        addItem(item) {
          this._heap.push(item);

          this.bubbleUp(this._heap.length - 1);
        }

        removeRoot() {
          if (this.count === 0) throw new Error("The queue is empty.");
          const rootItem = this._heap[0];
          this.swap(0, this.count - 1);

          this._heap.pop();

          this.bubbleDown(0);
          return rootItem;
        }

        peekRoot() {
          if (this.count === 0) throw new Error("The queue is empty.");
          return this._heap[0];
        }

        bubbleUp(index) {
          while (index > 0) {
            const parentIndex = (index - 1) / 2 | 0;

            if (this.comparer(this._heap[index].priority, this._heap[parentIndex].priority) < 0) {
              this.swap(index, parentIndex);
              index = parentIndex;
            } else {
              break;
            }
          }
        }

        bubbleDown(index) {
          const lastIndex = this.count - 1;

          while (index < lastIndex) {
            const leftChild = 2 * index + 1 | 0;
            const rightChild = 2 * index + 2 | 0;
            let smallest = index;

            if (leftChild <= lastIndex && this.comparer(this._heap[leftChild].priority, this._heap[smallest].priority) < 0) {
              smallest = leftChild;
            }

            if (rightChild <= lastIndex && this.comparer(this._heap[rightChild].priority, this._heap[smallest].priority) < 0) {
              smallest = rightChild;
            }

            if (smallest !== index) {
              this.swap(index, smallest);
              index = smallest;
            } else {
              break;
            }
          }
        }

        swap(index1, index2) {
          const temp = this._heap[index1];
          this._heap[index1] = this._heap[index2];
          this._heap[index2] = temp;
        }

      };
      _Symbol$iterator = Symbol.iterator;

      _export("PriorityQueue", PriorityQueue = class PriorityQueue {
        constructor(comparer = defaultComparer) {
          this.heapManager = void 0;
          this.comparer = comparer;
          this.heapManager = new HeapManager(comparer);
        }

        get count() {
          return this.heapManager.count;
        }

        get comparerFunction() {
          return this.comparer;
        }

        clear() {
          this.heapManager = new HeapManager(this.comparer);
        }

        enqueue(element, priority) {
          const item = {
            element,
            priority
          };
          this.heapManager.addItem(item);
        }

        dequeue() {
          const dequeuedItem = this.heapManager.removeRoot();
          return [dequeuedItem.element, dequeuedItem.priority];
        }

        peek() {
          const item = this.heapManager.peekRoot();
          return [item.element, item.priority];
        }

        trimExcess() {
          this.heapManager.items.length = Math.ceil(this.heapManager.items.length * 0.9);
        }

        ensureCapacity(capacity) {
          if (capacity > this.heapManager.count) {
            this.heapManager.items.length = capacity;
          }
        }

        enqueueRange(elements, priority) {
          elements.forEach(element => this.enqueue(element, priority));
        }

        enqueueDequeue(element, priority) {
          if (this.count === 0 || this.comparer(priority, this.peek()[1]) < 0) {
            return element;
          }

          const dequeuedElement = this.dequeue()[0];
          this.enqueue(element, priority);
          return dequeuedElement;
        }

        tryDequeue() {
          return this.count === 0 ? null : this.dequeue();
        }

        tryPeek() {
          return this.count === 0 ? null : this.peek();
        }

        contains(element) {
          return this.heapManager.items.some(item => item.element === element);
        }

        containsWithPriority(element, priority) {
          return this.heapManager.items.some(item => item.element === element && this.comparer(item.priority, priority) === 0);
        }

        get unorderedItems() {
          return this.heapManager.items;
        }

        trimToSize() {
          this.heapManager.items.length = this.count;
        }

        isEmpty() {
          return this.count === 0;
        }

        shallowCopy() {
          const newQueue = new PriorityQueue(this.comparer);
          newQueue.heapManager = new HeapManager(this.comparer);
          newQueue.heapManager.items.push(...this.heapManager.items);
          return newQueue;
        }

        setCapacity(capacity) {
          if (capacity < this.count) {
            throw new Error("Capacity cannot be set to a value less than the current count.");
          }

          this.heapManager.items.length = capacity;
        }

        toArray() {
          return this.heapManager.items.map(item => [item.element, item.priority]);
        }

        [_Symbol$iterator]() {
          let index = 0;
          return {
            next: () => {
              if (index < this.heapManager.items.length) {
                return {
                  value: [this.heapManager.items[index].element, this.heapManager.items[index++].priority],
                  done: false
                };
              } else {
                return {
                  done: true,
                  value: undefined
                };
              }
            }
          };
        }

        static from(iterable, comparer) {
          const queue = new PriorityQueue(comparer);

          for (const [element, priority] of iterable) {
            queue.enqueue(element, priority);
          }

          return queue;
        }

        static fromArray(array, comparer) {
          return PriorityQueue.from(array, comparer);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63a7e2eeda829c9bad8c4555981358bf4db3854a.js.map