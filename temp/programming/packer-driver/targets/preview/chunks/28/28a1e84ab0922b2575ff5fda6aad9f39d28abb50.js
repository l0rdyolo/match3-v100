System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AsyncLock, TaskSystem, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        addTaskAsync(task) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!task) throw new Error("Task is null");
            var release = yield _this._lock.acquire();

            try {
              _this._taskQueue.push(task);

              if (_this._taskQueue.length === 1) {
                yield _this.runTaskAsync();
              }
            } finally {
              release();
            }
          })();
        }

        runTaskAsync() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            while (_this2._taskQueue.length > 0) {
              var nextTask = _this2._taskQueue.shift();

              try {
                yield nextTask.execute(_this2._cts);
              } catch (error) {
                if (_this2._cts.signal.aborted) {
                  console.warn("Warning: Task was cancelled");
                  break;
                }

                console.error("Error while executing task: " + error);
                throw error;
              }
            }
          })();
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
//# sourceMappingURL=28a1e84ab0922b2575ff5fda6aad9f39d28abb50.js.map