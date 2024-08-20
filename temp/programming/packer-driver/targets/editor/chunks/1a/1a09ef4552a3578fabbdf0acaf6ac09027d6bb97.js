System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AsyncLock, TaskSystem, _crd;

  function _reportPossibleCrUseOfAsyncLock(extras) {
    _reporterNs.report("AsyncLock", "./AsyncLock", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITask(extras) {
    _reporterNs.report("ITask", "./ITask", _context.meta, extras);
  }

  _export("TaskSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AsyncLock = _unresolved_2.AsyncLock;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57b45FcNbFGObO9QgCToAA3", "TaskSystem", undefined);

      _export("TaskSystem", TaskSystem = class TaskSystem {
        constructor() {
          this._lock = new (_crd && AsyncLock === void 0 ? (_reportPossibleCrUseOfAsyncLock({
            error: Error()
          }), AsyncLock) : AsyncLock)();
          this._taskQueue = [];
          this._cts = new AbortController();
          this.isCancelled = false;
        }

        get taskCount() {
          return this._taskQueue.length;
        }

        async addTaskAsync(task) {
          if (!task) throw new Error("Task is null");
          const release = await this._lock.acquire();

          try {
            this._taskQueue.push(task);

            if (this._taskQueue.length === 1) {
              await this.runTaskAsync();
            }
          } finally {
            release();
          }
        }

        async runTaskAsync() {
          while (this._taskQueue.length > 0) {
            const nextTask = this._taskQueue.shift();

            try {
              await nextTask.execute(this._cts);
            } catch (error) {
              if (this._cts.signal.aborted) {
                console.warn("Warning: Task was cancelled");
                break;
              }

              console.error(`Error while executing task: ${error}`);
              throw error;
            }
          }
        }

        cancelTasks() {
          this._cts.abort();

          this._taskQueue = [];
          this.isCancelled = true;
        }

        renewTaskSystem() {
          this.isCancelled = false;
          this._cts = new AbortController();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a09ef4552a3578fabbdf0acaf6ac09027d6bb97.js.map