System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Detector, _crd;

  _export("Detector", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e1b8nLqlJAh4zhfiKRMhlB", "Detector", undefined);

      /**
       * The `Detector` class serves as a base for all detection classes.
       * It provides a structure for detecting various properties based on a user
       * agent string.
       *
       * @typeparam T - The type of the detection result.
       */
      _export("Detector", Detector = class Detector {
        /**
         * The user agent string used for detection.
         */

        /**
         * Constructs a new `Detector` instance.
         *
         * @param userAgent - The user agent string to be used for detection.
         */
        constructor(userAgent) {
          this.userAgent = void 0;
          this.userAgent = userAgent;
        }
        /**
         * Abstract method to be implemented by subclasses for specific detection logic.
         *
         * @returns The detection result of type `T`.
         */


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1b82ee37486eed3417e715e4a56b0faf917178e.js.map