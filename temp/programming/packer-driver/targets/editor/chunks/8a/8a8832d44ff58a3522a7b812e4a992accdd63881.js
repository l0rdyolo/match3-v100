System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Detector, VersionDetector, _crd;

  function _reportPossibleCrUseOfDetector(extras) {
    _reporterNs.report("Detector", "./Detector", _context.meta, extras);
  }

  _export("VersionDetector", void 0);

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

      _cclegacy._RF.push({}, "6f28dur9edNLauNBYBXhuEB", "VersionDetector", undefined);

      /**
       * Specializes in detecting browser version from the user agent string.
       * Inherits from `Detector` with a string type specialization, indicating
       * the type of detection result it produces.
       *
       * Example usage:
       * ```typescript
       * const versionDetector = new VersionDetector();
       * versionDetector.userAgent = navigator.userAgent;
       * console.log(versionDetector.detect()); // Outputs: 'Chrome.89.0'
       * ```
       */
      _export("VersionDetector", VersionDetector = class VersionDetector extends (_crd && Detector === void 0 ? (_reportPossibleCrUseOfDetector({
        error: Error()
      }), Detector) : Detector) {
        /**
         * Constructs a regular expression to match browser version patterns.
         * Supports major browsers like Chrome, Firefox, Safari, Opera (as 'opr'),
         * and Edge (as 'edg'). The regex is designed to capture both the
         * 'version/X.Y' format and the 'browserName X.Y' format.
         *
         * @returns {RegExp} The regex for matching browser version strings.
         * @private
         */
        getVersionRegex() {
          const browserRegexParts = ['chrome', 'firefox', 'safari', 'opr', 'edg'].join('|');
          return new RegExp(`(version)/(\\d+).(\\d+)|(${browserRegexParts})[ \\/](\\d+).(\\d+)`, 'i');
        }
        /**
         * Detects the browser version from the user agent string. If the user agent
         * is not set or a version cannot be determined, returns 'Unknown'.
         *
         * The detection process involves executing a regex constructed by
         * `getVersionRegex` against the `userAgent` property. It extracts the version
         * number that matches first and formats it in a 'browserName.version' string.
         *
         * @returns {string} The detected version in 'browserName.version' format or
         * 'Unknown'.
         * @public
         */


        detect() {
          if (!this.userAgent) return 'Unknown';
          const versionRegex = this.getVersionRegex();
          const match = versionRegex.exec(this.userAgent);
          return match ? match.slice(1).find(m => m !== undefined).replace('/', '.') : 'Unknown';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a8832d44ff58a3522a7b812e4a992accdd63881.js.map