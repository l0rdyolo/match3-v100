System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Lazy, _crd;

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
        constructor(factory, errorHandler, maxRetries = 3) {
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


        async getValue(...args) {
          if (!this.isInitialized) {
            await this.tryInitialize(args);
          }

          return this.instance;
        }
        /**
         * Attempts to initialize the instance using the provided arguments, with retry logic.
         * 
         * @param args - Arguments to pass to the factory function for creating the instance.
         */


        async tryInitialize(args) {
          try {
            this.instance = await this.factory(...args);
            this.isInitialized = true;
            this.triggerHooks(this.initializeHooks);
          } catch (error) {
            this.triggerHooks(this.errorHooks, error);
            const shouldRetry = await this.errorHandler(error, this.retryCount);

            if (shouldRetry && this.retryCount < this.maxRetries) {
              this.retryCount++;
              await this.tryInitialize(args);
            } else {
              throw error;
            }
          }
        }
        /**
         * Invokes the provided lifecycle hooks with the specified arguments.
         * 
         * @param hooks - An array of hooks to be triggered.
         * @param args - Arguments to pass to each hook function.
         */


        triggerHooks(hooks, ...args) {
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
//# sourceMappingURL=41408d8c6686417a7ea1111da4b63fe82e7eb09c.js.map