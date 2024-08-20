System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  function _reportPossibleCrUseOfScreenSize(extras) {
    _reporterNs.report("ScreenSize", "./ScreenSize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBrowser(extras) {
    _reporterNs.report("Browser", "./types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOS(extras) {
    _reporterNs.report("OS", "./types", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./types", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf76eiND1FNVrnsqwY9i9Gg", "DeviceInfo", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bfaea73ae8c06be319a9a03291545f6a25748f3b.js.map