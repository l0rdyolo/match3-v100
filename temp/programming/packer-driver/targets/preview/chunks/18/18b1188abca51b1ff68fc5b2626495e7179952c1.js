System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ExistEventException, NotExistEventException, _crd;

  _export({
    ExistEventException: void 0,
    NotExistEventException: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a69d1C8c8lHVKXwXI37gDHD", "ExistEventException", undefined);

      _export("ExistEventException", ExistEventException = class ExistEventException extends Error {
        constructor(message) {
          super(message);
          this.name = 'ExistEventException';
        }

      });

      _export("NotExistEventException", NotExistEventException = class NotExistEventException extends ExistEventException {
        constructor(message) {
          super(message);
          this.name = 'NotExistEventException';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18b1188abca51b1ff68fc5b2626495e7179952c1.js.map