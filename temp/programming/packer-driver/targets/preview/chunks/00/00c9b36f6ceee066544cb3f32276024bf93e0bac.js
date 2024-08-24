System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, createSingleton;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40e9fXec1hBHbPhS333wQSO", "Singleton", undefined);

      /**
       * `createSingleton` is a higher-order function that enforces a singleton pattern on a class.
       * Singleton pattern ensures that a class has only one instance and provides a global point 
       * of access to it.
       *
       * @template T - The type variable that extends from a newable (class) type. 
       * This means T should be a class (or a type that can be used with the `new` keyword).
       *
       * @param {T} Class - The class that needs to be enforced as a singleton.
       *
       * @returns {() => InstanceType<T>} - A function that when invoked, returns an instance of 
       * the class.
       * If an instance of the class already exists, it returns the existing instance, otherwise 
       * it creates a new instance.
       *
       * @example
       * class MyClass {}
       * const getMyClassInstance = createSingleton(MyClass);
       * const instance1 = getMyClassInstance();
       * const instance2 = getMyClassInstance();
       * console.log(instance1 === instance2); // true
       */
      _export("createSingleton", createSingleton = Class => {
        var instance;
        return () => {
          if (!instance) {
            instance = new Class();
          }

          return instance;
        };
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=00c9b36f6ceee066544cb3f32276024bf93e0bac.js.map