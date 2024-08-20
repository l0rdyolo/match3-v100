System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BrowserDetector, DeviceUtils, OSDetector, PlatformDetector, VersionDetector, DeviceDetector, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var _this = this;

          this.userAgent = void 0;
          this.detect = /*#__PURE__*/_asyncToGenerator(function* () {
            return yield _this.gatherDeviceInfo();
          });
          this.userAgent = navigator.userAgent || navigator.vendor || window.opera;
        }
        /**
         * Gathers device information.
         * @returns A promise that resolves to a `DeviceInfo` object.
         */


        gatherDeviceInfo() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var detectors = [{
              key: 'os',
              detector: new (_crd && OSDetector === void 0 ? (_reportPossibleCrUseOfOSDetector({
                error: Error()
              }), OSDetector) : OSDetector)(_this2.userAgent)
            }, {
              key: 'browser',
              detector: new (_crd && BrowserDetector === void 0 ? (_reportPossibleCrUseOfBrowserDetector({
                error: Error()
              }), BrowserDetector) : BrowserDetector)(_this2.userAgent)
            }, {
              key: 'version',
              detector: new (_crd && VersionDetector === void 0 ? (_reportPossibleCrUseOfVersionDetector({
                error: Error()
              }), VersionDetector) : VersionDetector)(_this2.userAgent)
            }, {
              key: 'platform',
              detector: new (_crd && PlatformDetector === void 0 ? (_reportPossibleCrUseOfPlatformDetector({
                error: Error()
              }), PlatformDetector) : PlatformDetector)(_this2.userAgent)
            }];
            var staticInfoKeys = [{
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
            var detectedInfo = detectors.reduce((info, _ref2) => {
              var {
                key,
                detector
              } = _ref2;
              info[key] = detector.detect();
              return info;
            }, {});
            var staticInfo = staticInfoKeys.reduce((info, _ref3) => {
              var {
                key,
                method
              } = _ref3;

              if (key === 'mobile') {
                info[key] = (_crd && DeviceUtils === void 0 ? (_reportPossibleCrUseOfDeviceUtils({
                  error: Error()
                }), DeviceUtils) : DeviceUtils)[method](_this2.userAgent);
              } else {
                info[key] = (_crd && DeviceUtils === void 0 ? (_reportPossibleCrUseOfDeviceUtils({
                  error: Error()
                }), DeviceUtils) : DeviceUtils)[method]();
              }

              return info;
            }, {});
            return _extends({}, detectedInfo, staticInfo);
          })();
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
//# sourceMappingURL=657b62703a71ef3dac930e13111abf09ffc72115.js.map