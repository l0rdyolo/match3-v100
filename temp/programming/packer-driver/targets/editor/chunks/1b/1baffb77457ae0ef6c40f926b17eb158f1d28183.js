System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, removeNullandUndefined;

  function flatten(arr, depth = 1) {
    const flat = (input, lvl) => input.reduce((acc, item) => {
      const value = Array.isArray(item) && lvl > 0 ? flat(item, lvl - 1) : item;
      return acc.concat(value);
    }, []);

    return flat(arr, depth);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function deepClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function unique(arr) {
    return Array.from(new Set(arr));
  }

  _export({
    flatten: flatten,
    shuffle: shuffle,
    deepClone: deepClone,
    unique: unique
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46482gINMVHu7rqxNTcis6q", "Array", undefined);

      _export("removeNullandUndefined", removeNullandUndefined = arr => {
        return arr.filter(item => item !== null && item !== undefined);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1baffb77457ae0ef6c40f926b17eb158f1d28183.js.map