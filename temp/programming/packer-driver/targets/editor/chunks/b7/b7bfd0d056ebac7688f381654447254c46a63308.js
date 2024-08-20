System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _class, _class2, _crd, ccclass, property, disallowMultiple, SingletonComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f002fohe99NPakSXIkRx1Tj", "Singleton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property,
        disallowMultiple
      } = _decorator);

      _export("SingletonComponent", SingletonComponent = disallowMultiple(_class = (_class2 = class SingletonComponent extends Component {
        onLoad() {
          const instance = SingletonComponent.instances.get(this.constructor);

          if (!instance) {
            SingletonComponent.instances.set(this.constructor, this);
            director.addPersistRootNode(this.node);
          } else if (instance !== this) {
            // this.destroy();
            console.warn(`Another instance of ${this.constructor.name} was attempted to be created and was destroyed.`);
            return;
          }
        }

        static getInstance() {
          let instance = SingletonComponent.instances.get(this);

          if (!instance) {
            instance = new this();
            SingletonComponent.instances.set(this, instance);
          }

          return instance;
        }

      }, _class2.instances = new Map(), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7bfd0d056ebac7688f381654447254c46a63308.js.map