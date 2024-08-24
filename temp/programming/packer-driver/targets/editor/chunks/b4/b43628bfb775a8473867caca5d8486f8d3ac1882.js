System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BrowserDetector, DeviceUtils, OSDetector, PlatformDetector, VersionDetector, DeviceDetector, _crd;

  function _reportPossibleCrUseOfBrowserDetector(extras) {
    _reporterNs.report("BrowserDetector", "./BrowserDetector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeviceInfo(extras) {
    _reporterNs.report("DeviceInfo", "./DeviceInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeviceUtils(extras) {
    _reporterNs.report("DeviceUtils", "./Deviceutils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOSDetector(extras) {
    _reporterNs.report("OSDetector", "./OSDetector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatformDetector(extras) {
    _reporterNs.report("PlatformDetector", "./PlatformDetector", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVersionDetector(extras) {
    _reporterNs.report("VersionDetector", "./VersionDetector", _context.meta, extras);
  }

  _export("DeviceDetector", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BrowserDetector = _unresolved_2.BrowserDetector;
    }, function (_unresolved_3) {
      DeviceUtils = _unresolved_3.DeviceUtils;
    }, function (_unresolved_4) {
      OSDetector = _unresolved_4.OSDetector;
    }, function (_unresolved_5) {
      PlatformDetector = _unresolved_5.PlatformDetector;
    }, function (_unresolved_6) {
      VersionDetector = _unresolved_6.VersionDetector;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa317hsEWNErZrUusfeHHDW", "DeviceDetector", undefined);

      /**
       * `DeviceDetector` class provides device information based on the user agent.
       */
      _export("DeviceDetector", DeviceDetector = class DeviceDetector {
        /**
         * User agent string.
         */

        /**
         * Constructs a `DeviceDetector` instance.
         */
        constructor() {
          this.userAgent = void 0;

          this.detect = async () => await this.gatherDeviceInfo();

          this.userAgent = navigator.userAgent || navigator.vendor || window.opera;
        }
        /**
         * Gathers device information.
         * @returns A promise that resolves to a `DeviceInfo` object.
         */


        async gatherDeviceInfo() {
          const detectors = [{
            key: 'os',
            detector: new (_crd && OSDetector === void 0 ? (_reportPossibleCrUseOfOSDetector({
              error: Error()
            }), OSDetector) : OSDetector)(this.userAgent)
          }, {
            key: 'browser',
            detector: new (_crd && BrowserDetector === void 0 ? (_reportPossibleCrUseOfBrowserDetector({
              error: Error()
            }), BrowserDetector) : BrowserDetector)(this.userAgent)
          }, {
            key: 'version',
            detector: new (_crd && VersionDetector === void 0 ? (_reportPossibleCrUseOfVersionDetector({
              error: Error()
            }), VersionDetector) : VersionDetector)(this.userAgent)
          }, {
            key: 'platform',
            detector: new (_crd && PlatformDetector === void 0 ? (_reportPossibleCrUseOfPlatformDetector({
              error: Error()
            }), PlatformDetector) : PlatformDetector)(this.userAgent)
          }];
          const staticInfoKeys = [{
            key: 'mobile',
            method: 'isMobile'
          }, {
            key: 'screenSize',
            method: 'getScreenSize'
          }, {
            key: 'orientation',
            method: 'getOrientation'
          }, {
            key: 'touchSupported',
            method: 'isTouchSupported'
          }, {
            key: 'language',
            method: 'getLanguage'
          }, {
            key: 'onlineStatus',
            method: 'getOnlineStatus'
          }];
          const detectedInfo = detectors.reduce((info, {
            key,
            detector
          }) => {
            info[key] = detector.detect();
            return info;
          }, {});
          const staticInfo = staticInfoKeys.reduce((info, {
            key,
            method
          }) => {
            if (key === 'mobile') {
              info[key] = (_crd && DeviceUtils === void 0 ? (_reportPossibleCrUseOfDeviceUtils({
                error: Error()
              }), DeviceUtils) : DeviceUtils)[method](this.userAgent);
            } else {
              info[key] = (_crd && DeviceUtils === void 0 ? (_reportPossibleCrUseOfDeviceUtils({
                error: Error()
              }), DeviceUtils) : DeviceUtils)[method]();
            }

            return info;
          }, {});
          return { ...detectedInfo,
            ...staticInfo
          };
        }
        /**
         * Detects device information.
         * @returns A promise that resolves to a `DeviceInfo` object.
         */


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b43628bfb775a8473867caca5d8486f8d3ac1882.js.map