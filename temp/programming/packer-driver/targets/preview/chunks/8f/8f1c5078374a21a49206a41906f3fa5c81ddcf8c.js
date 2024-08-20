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
          var unlock = () => {
            this._locked = false;

            var next = this._queue.shift();

            if (next) {
              next();
            }
          };

          return new Promise(resolve => {
            var tryLock = () => {
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
//# sourceMappingURL=8f1c5078374a21a49206a41906f3fa5c81ddcf8c.js.map