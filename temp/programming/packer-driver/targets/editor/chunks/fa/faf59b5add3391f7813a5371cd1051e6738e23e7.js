System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, createSingleton, UUIDGenerator, _crd, padStart, uuid;

  function _reportPossibleCrUseOfcreateSingleton(extras) {
    _reporterNs.report("createSingleton", "./Singleton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      createSingleton = _unresolved_2.createSingleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31a288MevtHyrMLktIWnRcJ", "UUIDGenerator", undefined);

      padStart = (str, targetLength, padString) => {
        while (str.length < targetLength) {
          str = padString + str;
        }

        return str;
      };

      UUIDGenerator = class UUIDGenerator {
        generate() {
          if (window.crypto.randomUUID) return window.crypto.randomUUID();
          return this.formatUUID(window.crypto.getRandomValues(new Uint8Array(16)));
        }

        formatUUID(randomBytes) {
          return [this.reduceUUID(randomBytes, 0, 4), this.reduceUUID(randomBytes, 4, 6), this.reduceUUID(randomBytes, 6, 8), this.reduceUUID(randomBytes, 8, 10), this.reduceUUID(randomBytes, 10, 16)].join('-');
        }

        reduceUUID(bytes, start, end) {
          return bytes.slice(start, end).reduce((acc, byte, index) => acc + this.formatUUIDPart(byte, start + index), '');
        }

        formatUUIDPart(byte, index) {
          const hex = padStart(byte.toString(16), 2, '0');

          switch (index) {
            case 6:
              return padStart((4 << 4 | byte & 0x0f).toString(16), 2, '0');

            case 8:
              return padStart((0x80 | byte & 0x3f).toString(16), 2, '0');

            default:
              return hex;
          }
        }

      };
      UUIDGenerator.getInstance = (_crd && createSingleton === void 0 ? (_reportPossibleCrUseOfcreateSingleton({
        error: Error()
      }), createSingleton) : createSingleton)(UUIDGenerator);

      _export("uuid", uuid = () => UUIDGenerator.getInstance().generate());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=faf59b5add3391f7813a5371cd1051e6738e23e7.js.map