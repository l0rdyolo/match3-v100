System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Lazy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("Lazy", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff427OXhBdJMJBz+qoPDeyA", "Lazy", undefined);

      /**
       * Represents a lazy initialization and caching mechanism for objects of type `T`.
       * The object is initialized asynchronously using a factory function upon the first
       * request. It supports retry logic, lifecycle hooks, and error handling.
       * 
       * @typeParam T - The type of the lazily initialized object.
       * @typeParam Args - A tuple type representing the arguments passed to the factory 
       * function for initializing the object.
       */
      _export("Lazy", Lazy = class Lazy {
        /**
         * Constructs a Lazy object with specified factory, error handler, and maximum retry attempts.
         * 
         * @param factory - A factory function used to asynchronously create an instance of `T`.
         * @param errorHandler - A function called when the factory function throws an error, determining whether to retry.
         * @param maxRetries - The maximum number of retries for initializing `T` upon failure. Defaults to 3.
         */
        constructor(factory, errorHandler, maxRetries) {
          if (maxRetries === void 0) {
            maxRetries = 3;
          }

          this.instance = null;
          this.factory = void 0;
          this.errorHandler = void 0;
          this.isInitialized = false;
          this.retryCount = 0;
          this.maxRetries = void 0;
          this.initializeHooks = [];
          this.errorHooks = [];
          this.disposeHooks = [];
          this.factory = factory;
          this.errorHandler = errorHandler;
          this.maxRetries = maxRetries;
        }
        /**
         * Asynchronously returns the instance of type `T`, initializing it if not already done.
         * 
         * @param args - Arguments to pass to the factory function for creating the instance.
         * @returns A promise that resolves to the instance of type `T`.
         * @throws Throws an error if the object cannot be initialized after the maximum number of retries.
         */


        getValue() {
          var _arguments = arguments,
              _this = this;

          return _asyncToGenerator(function* () {
            if (!_this.isInitialized) {
              for (var _len = _arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _arguments[_key];
              }

              yield _this.tryInitialize(args);
            }

            return _this.instance;
          })();
        }
        /**
         * Attempts to initialize the instance using the provided arguments, with retry logic.
         * 
         * @param args - Arguments to pass to the factory function for creating the instance.
         */


        tryInitialize(args) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              _this2.instance = yield _this2.factory(...args);
              _this2.isInitialized = true;

              _this2.triggerHooks(_this2.initializeHooks);
            } catch (error) {
              _this2.triggerHooks(_this2.errorHooks, error);

              var shouldRetry = yield _this2.errorHandler(error, _this2.retryCount);

              if (shouldRetry && _this2.retryCount < _this2.maxRetries) {
                _this2.retryCount++;
                yield _this2.tryInitialize(args);
              } else {
                throw error;
              }
            }
          })();
        }
        /**
         * Invokes the provided lifecycle hooks with the specified arguments.
         * 
         * @param hooks - An array of hooks to be triggered.
         * @param args - Arguments to pass to each hook function.
         */


        triggerHooks(hooks) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          hooks.forEach(hook => hook(...args));
        }
        /**
         * Registers a hook to be called upon successful initialization of the instance.
         * 
         * @param hook - The hook function to register.
         */


        onInitialize(hook) {
          this.initializeHooks.push(hook);
        }
        /**
         * Registers a hook to be called when an error occurs during initialization.
         * 
         * @param hook - The hook function to register, receiving the error as an argument.
         */


        onError(hook) {
          this.errorHooks.push(hook);
        }
        /**
         * Registers a hook to be called when the instance is disposed.
         * 
         * @param hook - The hook function to register.
         */


        onDispose(hook) {
          this.disposeHooks.push(hook);
        }
        /**
         * Disposes the current instance, if any, and triggers disposal hooks.
         * Resets the instance state to allow re-initialization.
         */


        dispose() {
          if (this.instance && typeof this.instance.dispose === 'function') {
            this.instance.dispose();
          }

          this.instance = null;
          this.isInitialized = false;
          this.triggerHooks(this.disposeHooks);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53141b721bf0e262e3f73c8309ff98541a84b387.js.map