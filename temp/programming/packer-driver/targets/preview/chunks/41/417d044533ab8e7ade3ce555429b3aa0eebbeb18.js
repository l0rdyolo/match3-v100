System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, SingletonComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "418c8F50P5FlZIJT0POYsbg", "SingeltonComponent", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);

      _export("SingletonComponent", SingletonComponent = (_dec = ccclass('SingletonComponent'), _dec(_class = (_class2 = class SingletonComponent extends Component {
        static get Instance() {
          if (!this._instance) {
            this._instance = new SingletonComponent();
          }

          return this._instance;
        }

        onLoad() {
          if (SingletonComponent._instance === null) {
            SingletonComponent._instance = this;
          } else {
            this.destroy();
          }
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=417d044533ab8e7ade3ce555429b3aa0eebbeb18.js.map