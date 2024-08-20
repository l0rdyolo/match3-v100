System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AsyncLock, _crd;

  _export("AsyncLock", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18b58Ig2g9OCaM8q3VRdfUU", "AsyncLock", undefined);

      _export("AsyncLock", AsyncLock = class AsyncLock {
        constructor() {
          this._queue = [];
          this._locked = false;
        }

        acquire() {
          const unlock = () => {
            this._locked = false;

            const next = this._queue.shift();

            if (next) {
              next();
            }
          };

          return new Promise(resolve => {
            const tryLock = () => {
              if (!this._locked) {
                this._locked = true;
                resolve(unlock);
              } else {
                this._queue.push(tryLock);
              }
            };

            tryLock();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=753d872791234fa7a7b074d14508978ceb793316.js.map