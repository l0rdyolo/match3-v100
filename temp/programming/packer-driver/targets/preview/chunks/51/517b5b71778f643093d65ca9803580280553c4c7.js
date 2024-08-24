System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Observable, JoystickObservable, _crd;

  function _reportPossibleCrUseOfObservable(extras) {
    _reporterNs.report("Observable", "../Runtime/Observer", _context.meta, extras);
  }

  _export("JoystickObservable", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Observable = _unresolved_2.Observable;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dabf48yVIdLFYGTYps6lHfO", "JoystickObservable", undefined);

      __checkObsolete__(['Vec3', 'Node']);

      _export("JoystickObservable", JoystickObservable = class JoystickObservable extends (_crd && Observable === void 0 ? (_reportPossibleCrUseOfObservable({
        error: Error()
      }), Observable) : Observable) {
        notifyStart(direction, parts) {
          this.next({
            type: "start",
            direction,
            parts
          });
        }

        notifyEnd(direction, parts) {
          this.next({
            type: "end",
            direction,
            parts
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=517b5b71778f643093d65ca9803580280553c4c7.js.map