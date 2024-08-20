System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Detector, OSDetector, _crd;

  function _reportPossibleCrUseOfDetector(extras) {
    _reporterNs.report("Detector", "./Detector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOS(extras) {
    _reporterNs.report("OS", "./types", _context.meta, extras);
  }

  _export("OSDetector", void 0);

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

      _cclegacy._RF.push({}, "20ab1kW0ANPJacpRMxhWbVk", "OSDetector", undefined);

      /**
       * Extends the `Detector` class to implement OS detection based on user agent
       * strings. Utilizes a set of predefined rules (`osRules`) to identify the OS
       * from the browser's user agent.
       *
       * Example usage:
       * ```
       * const osDetector = new OSDetector();
       * console.log(osDetector.detect()); // Outputs detected OS
       * ```
       */
      _export("OSDetector", OSDetector = class OSDetector extends (_crd && Detector === void 0 ? (_reportPossibleCrUseOfDetector({
        error: Error()
      }), Detector) : Detector) {
        constructor() {
          super(...arguments);
          this.osRules = [{
            regex: /Win(dows )?NT/,
            os: 'Windows'
          }, {
            regex: /Mac OS X/,
            os: 'macOS'
          }, {
            regex: /Linux/,
            os: 'Linux'
          }, {
            regex: /iPad|iPhone|iPod/,
            os: 'IOS',
            additionalCheck: () => !window.MSStream
          }, {
            regex: /android/i,
            os: 'Android'
          }];
        }

        /**
         * Iterates through `osRules` to find a matching rule for the current
         * browser's user agent. If an `additionalCheck` is defined for a rule, it
         * must also pass for the OS to be considered detected.
         * @returns {OS} The detected OS or 'Unknown' if no match is found.
         */
        detect() {
          for (var rule of this.osRules) {
            if (rule.regex.test(this.userAgent)) {
              if (rule.additionalCheck === undefined || rule.additionalCheck()) {
                return rule.os;
              }
            }
          }

          return 'Unknown';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1bbeacd983e82a52617ab9f3becdae0e86f2c289.js.map