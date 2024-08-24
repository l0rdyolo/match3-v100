System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, removeNullandUndefined;

  function flatten(arr, depth) {
    if (depth === void 0) {
      depth = 1;
    }

    var flat = (input, lvl) => input.reduce((acc, item) => {
      var value = Array.isArray(item) && lvl > 0 ? flat(item, lvl - 1) : item;
      return acc.concat(value);
    }, []);

    return flat(arr, depth);
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
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
//# sourceMappingURL=39f12c97540e12b8c42ba720aec2bbf9c30d2806.js.map