System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Detector, PlatformDetector, _crd;

  function _reportPossibleCrUseOfDetector(extras) {
    _reporterNs.report("Detector", "./Detector", _context.meta, extras);
  }

  _export("PlatformDetector", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Detector = _unresolved_2.Detector;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a08e6o+uOFFVoqMlbVWMfqX", "PlatformDetector", undefined);

      /**
       * `PlatformDetector` extends the generic `Detector` class to specifically
       * detect the platform on which the current web application is running. It
       * leverages the `navigator.platform` property of the Web API to determine the
       * platform information.
       *
       * @extends {Detector<string>} - Denotes that `PlatformDetector` is a
       * specialized form of `Detector` with a string type parameter, indicating the
       * type of detection it performs.
       *
       * @example
       * ```typescript
       * const platformDetector = new PlatformDetector();
       * console.log(platformDetector.detect()); // Outputs the platform, e.g.,
       * "Win32", "Linux", etc.
       * ```
       */
      _export("PlatformDetector", PlatformDetector = class PlatformDetector extends (_crd && Detector === void 0 ? (_reportPossibleCrUseOfDetector({
        error: Error()
      }), Detector) : Detector) {
        /**
         * Detects and returns the platform of the user's device.
         *
         * @returns {string} - The platform identifier (e.g., "Win32", "Linux").
         */
        detect() {
          return navigator.platform;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d233b424f8b4058a8cda48af00ecfe9ae6af036b.js.map