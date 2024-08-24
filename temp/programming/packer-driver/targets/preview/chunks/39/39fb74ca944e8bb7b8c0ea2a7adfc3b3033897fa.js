System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DeviceUtils, _crd;

  function _reportPossibleCrUseOfScreenSize(extras) {
    _reporterNs.report("ScreenSize", "./ScreenSize", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./types", _context.meta, extras);
  }

  _export("DeviceUtils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59cc3ssGW1H7arRIAd3Vp7X", "Deviceutils", undefined);

      /**
       * `DeviceUtils` provides utility methods for device information.
       */
      _export("DeviceUtils", DeviceUtils = class DeviceUtils {
        /**
         * Checks if the device is mobile.
         * @param userAgent - The user agent string.
         * @returns `true` if mobile, otherwise `false`.
         */
        static isMobile(userAgent) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        }
        /**
         * Gets the screen size.
         * @returns The screen size.
         */


        static getScreenSize() {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
        /**
         * Gets the device orientation.
         * @returns The device orientation.
         */


        static getOrientation() {
          return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
        }
        /**
         * Checks if touch is supported.
         * @returns `true` if touch is supported, otherwise `false`.
         */


        static isTouchSupported() {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
        /**
         * Gets the device language.
         * @returns The device language.
         */


        static getLanguage() {
          return navigator.language;
        }
        /**
         * Checks the online status.
         * @returns `true` if online, otherwise `false`.
         */


        static getOnlineStatus() {
          return navigator.onLine;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39fb74ca944e8bb7b8c0ea2a7adfc3b3033897fa.js.map