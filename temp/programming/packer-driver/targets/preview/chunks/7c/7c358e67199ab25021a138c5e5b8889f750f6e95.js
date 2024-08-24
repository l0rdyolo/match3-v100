System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Detector, BrowserDetector, _crd;

  function _reportPossibleCrUseOfDetector(extras) {
    _reporterNs.report("Detector", "./Detector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBrowser(extras) {
    _reporterNs.report("Browser", "./types", _context.meta, extras);
  }

  _export("BrowserDetector", void 0);

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

      _cclegacy._RF.push({}, "13584HsOqBAXKZK5HfpmjZK", "BrowserDetector", undefined);

      /**
       * `BrowserDetector` extends `Detector` to identify the browser type from the
       * user agent string. It uses predefined regular expressions to match against
       * the user agent, supporting popular browsers such as Chrome, Firefox, Safari,
       * Opera, and Edge.
       *
       * Usage example:
       * ```
       * const detector = new BrowserDetector();
       * console.log(detector.detect()); // Outputs the detected browser name or
       * 'Unknown' if not detected.
       * ```
       *
       * @extends Detector<Browser>
       */
      _export("BrowserDetector", BrowserDetector = class BrowserDetector extends (_crd && Detector === void 0 ? (_reportPossibleCrUseOfDetector({
        error: Error()
      }), Detector) : Detector) {
        constructor() {
          super(...arguments);
          this.browserRules = [{
            regex: /chrome|chromium|crios/i,
            browser: 'Chrome'
          }, {
            regex: /firefox|fxios/i,
            browser: 'Firefox'
          }, {
            regex: /safari/i,
            browser: 'Safari'
          }, {
            regex: /opr\//i,
            browser: 'Opera'
          }, {
            regex: /edg/i,
            browser: 'Edge'
          }];
        }

        /**
         * Detects the browser by matching the `userAgent` string against the
         * `browserRules`.
         * @returns {Browser} The name of the detected browser, or 'Unknown' if no match
         * is found.
         */
        detect() {
          var detectedBrowser = this.browserRules.find(rule => rule.regex.test(this.userAgent));
          return detectedBrowser ? detectedBrowser.browser : 'Unknown';
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c358e67199ab25021a138c5e5b8889f750f6e95.js.map