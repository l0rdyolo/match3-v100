System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, warn, Node, director, isValid, Lazy, _dec, _dec2, _class, _class2, _crd, disallowMultiple, ccclass, Singleton;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function findObjectsOfType(_x3) {
    return _findObjectsOfType.apply(this, arguments);
  }

  function _findObjectsOfType() {
    _findObjectsOfType = _asyncToGenerator(function* (c) {
      return director.getScene().getComponentsInChildren(c);
    });
    return _findObjectsOfType.apply(this, arguments);
  }

  function findObjectsOfTypeAll(_x4) {
    return _findObjectsOfTypeAll.apply(this, arguments);
  }

  function _findObjectsOfTypeAll() {
    _findObjectsOfTypeAll = _asyncToGenerator(function* (c) {
      var allComponents = [];
      var allNodes = director.getScene().children;

      for (var node of allNodes) {
        var components = node.getComponents(c);
        allComponents.push(...components);
      }

      return allComponents;
    });
    return _findObjectsOfTypeAll.apply(this, arguments);
  }

  function _reportPossibleCrUseOfLazy(extras) {
    _reporterNs.report("Lazy", "./Lazy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      warn = _cc.warn;
      Node = _cc.Node;
      director = _cc.director;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      Lazy = _unresolved_2.Lazy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9187daIxM1OCbMESq2O+ls8", "Singleton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'warn', 'Node', 'director', 'isValid']);

      ({
        disallowMultiple,
        ccclass
      } = _decorator);
      /**
       * A base class for creating singleton components.
       *
       * This class is used to ensure that only one instance of the component exists
       * in the scene. It uses lazy initialization to create the instance only when it
       * is needed.
       *
       * @template T The type of the singleton component.
       *
       * @example
       * ```typescript
       * import { Singleton } from './Singleton';
       *
       * @ccclass
       * export class MySingleton extends Singleton<MySingleton> {
       *     protected awakeSingleton() {
       *         console.log('Singleton awake');
       *     }
       * }
       * ```
       */

      _export("Singleton", Singleton = (_dec = ccclass('Singleton'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = (_class2 = class Singleton extends Component {
        /**
         * Retrieves the singleton instance of the component.
         * If the instance does not exist, it creates a new instance and adds it to the
         * scene. If multiple instances of the component are found, it handles them
         * based on the specified options.
         *
         * @returns A Promise that resolves to the singleton instance of the component.
         *
         * @remarks
         * This method is used to ensure that only one instance of the component exists
         * in the scene. It uses lazy initialization to create the instance only when it
         * is needed.
         *
         * @example
         * ```typescript
         * // Get the singleton instance of the component
         * const instance = await ExampleSingleton.getInstance();
         *
         * // Use the instance
         * instance.doSomething();
         * ```
         */
        static getInstance() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (!_this._lazyInstance) {
              _this._lazyInstance = new (_crd && Lazy === void 0 ? (_reportPossibleCrUseOfLazy({
                error: Error()
              }), Lazy) : Lazy)( /*#__PURE__*/_asyncToGenerator(function* () {
                var instances = _this._findInactive ? yield findObjectsOfTypeAll(_this) : yield findObjectsOfType(_this);

                if (instances.length === 0) {
                  var singletonNode = new Node(_this.name + " [Singleton]");
                  var instance = singletonNode.addComponent(_this);
                  director.getScene().addChild(singletonNode);

                  if (_this._persist) {
                    director.addPersistRootNode(instance.node);
                  }

                  warn("[Singleton] An instance of '" + _this.name + "' is needed in the scene, so '" + singletonNode.name + "' was created" + (_this._persist ? " with DontDestroyOnLoad." : "."));
                  return instance;
                }

                if (instances.length > 1) {
                  warn("[Singleton] " + instances.length + " instances of '" + _this.name + "' found!");

                  if (_this._destroyOthers) {
                    instances.slice(1).forEach(extra => {
                      warn("[Singleton] Deleting extra '" + _this.name + "' instance attached to '" + extra.node.name + "'");
                      extra.node.destroy();
                    });
                  }

                  if (_this._persist) {
                    director.addPersistRootNode(instances[0].node);
                  }
                }

                return instances[0];
              }), /*#__PURE__*/_asyncToGenerator(function* (error, retryCount) {
                warn("[Singleton] Error occurred while creating instance: " + error + ". Retry count: " + retryCount);
                return retryCount < 3;
              }));
            }

            return _this._lazyInstance.getValue();
          })();
        }

        static set persist(value) {
          this._persist = value;
        }

        static set destroyOthers(value) {
          this._destroyOthers = value;
        }

        static set findInactive(value) {
          this._findInactive = value;
        }

        static set lazy(value) {
          this._lazy = value;
        }

        onLoad() {
          if (!Singleton._lazy) {
            this.initialize();
          }
        }

        initialize() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var instance = yield Singleton.getInstance();

            if (instance !== _this2 && Singleton._destroyOthers) {
              warn("[Singleton] Deleting extra '" + _this2.constructor.name + "' instance attached to '" + _this2.node.name + "'");

              _this2.node.destroy();
            } else {
              _this2.awakeSingleton();

              if (Singleton._persist) {
                director.addPersistRootNode(_this2.node);
              }
            }
          })();
        }

        onDestroy() {
          if (this.applicationIsQuitting()) {
            Singleton._lazyInstance.dispose();

            Singleton._lazyInstance = null;
          }
        }

        applicationIsQuitting() {
          return director.isPaused() || !isValid(this.node);
        }

      }, _class2._lazyInstance = void 0, _class2._destroyOthers = true, _class2._persist = true, _class2._findInactive = false, _class2._lazy = true, _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=379e7c5faf0c5886d4e21ec2880b4eb6a7a5fda6.js.map