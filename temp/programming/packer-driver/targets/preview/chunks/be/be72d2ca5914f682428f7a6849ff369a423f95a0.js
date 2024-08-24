System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Observer, Observable, Subject, ReplaySubject, BehaviorSubject, AsyncSubject, ThrottleOperator, _crd;

  function makeSubscription(observable, onNext, onComplete, onError) {
    if (onComplete === void 0) {
      onComplete = () => {};
    }

    if (onError === void 0) {
      onError = () => {};
    }

    var observer = new Observer(onNext, onComplete, onError);
    observable.subscribe(observer);
    return observer;
  }

  _export("makeSubscription", makeSubscription);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ac78MPERlPWbF26W1pHKjR", "Observer", undefined);

      _export("Observer", Observer = class Observer {
        constructor(onNextCallback, onCompleteCallback, onErrorCallback) {
          if (onCompleteCallback === void 0) {
            onCompleteCallback = () => {};
          }

          if (onErrorCallback === void 0) {
            onErrorCallback = () => {};
          }

          this.onNextCallback = onNextCallback;
          this.onCompleteCallback = onCompleteCallback;
          this.onErrorCallback = onErrorCallback;
        }

        onNext(value) {
          this.onNextCallback(value);
        }

        onComplete() {
          this.onCompleteCallback();
        }

        onError(error) {
          this.onErrorCallback(error);
        }

      });

      _export("Observable", Observable = class Observable {
        constructor() {
          this.observers = new Set();
        }

        subscribe(observer) {
          this.observers.add(observer);
        }

        next(value) {
          this.observers.forEach(observer => observer.onNext(value));
        }

        complete() {
          this.observers.forEach(observer => observer.onComplete());
          this.observers.clear();
        }

        error(error) {
          this.observers.forEach(observer => observer.onError(error));
          this.observers.clear();
        }

        map(transform) {
          var mappedObservable = new Observable();
          this.subscribe(new Observer(value => mappedObservable.next(transform(value)), () => mappedObservable.complete(), error => mappedObservable.error(error)));
          return mappedObservable;
        }

        filter(predicate) {
          var filteredObservable = new Observable();
          this.subscribe(new Observer(value => predicate(value) && filteredObservable.next(value), () => filteredObservable.complete(), error => filteredObservable.error(error)));
          return filteredObservable;
        }

        debounce(interval) {
          var debouncedObservable = new Observable();
          var lastEmitTime = 0;
          var timeoutId = null;
          this.subscribe(new Observer(value => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              var now = Date.now();

              if (now - lastEmitTime >= interval) {
                lastEmitTime = now;
                debouncedObservable.next(value);
              }
            }, interval);
          }, () => debouncedObservable.complete(), error => debouncedObservable.error(error)));
          return debouncedObservable;
        }

        throttle(interval) {
          var throttledObservable = new Observable();
          var lastEmitTime = 0;
          this.subscribe(new Observer(value => {
            var now = Date.now();

            if (now - lastEmitTime >= interval) {
              lastEmitTime = now;
              throttledObservable.next(value);
            }
          }, () => throttledObservable.complete(), error => throttledObservable.error(error)));
          return throttledObservable;
        }

        flatMap(transform) {
          var flatMappedObservable = new Observable();
          this.subscribe(new Observer(value => {
            var innerObservable = transform(value);
            innerObservable.subscribe(new Observer(innerValue => flatMappedObservable.next(innerValue), () => flatMappedObservable.complete(), error => flatMappedObservable.error(error)));
          }, () => flatMappedObservable.complete(), error => flatMappedObservable.error(error)));
          return flatMappedObservable;
        }

      });

      _export("Subject", Subject = class Subject extends Observable {
        onNext(value) {
          this.next(value);
        }

        onComplete() {
          this.complete();
        }

        onError(error) {
          this.error(error);
        }

      });

      _export("ReplaySubject", ReplaySubject = class ReplaySubject extends Subject {
        constructor() {
          super(...arguments);
          this.values = [];
        }

        onNext(value) {
          this.values.push(value);
          super.onNext(value);
        }

        subscribe(observer) {
          this.values.forEach(value => observer.onNext(value));
          super.subscribe(observer);
        }

      });

      _export("BehaviorSubject", BehaviorSubject = class BehaviorSubject extends Subject {
        constructor(value) {
          super();
          this.value = value;
        }

        onNext(value) {
          this.value = value;
          super.onNext(value);
        }

        subscribe(observer) {
          observer.onNext(this.value);
          super.subscribe(observer);
        }

      });

      _export("AsyncSubject", AsyncSubject = class AsyncSubject extends Subject {
        constructor() {
          super(...arguments);
          this.value = void 0;
        }

        onNext(value) {
          this.value = value;
        }

        onComplete() {
          if (this.value !== undefined) {
            super.onNext(this.value);
          }

          super.onComplete();
        }

      });

      _export("ThrottleOperator", ThrottleOperator = class ThrottleOperator extends Observable {
        constructor(source, interval) {
          super();
          this.lastEmitTime = Date.now();
          this.interval = interval;
          source.subscribe(new Observer(value => {
            var now = Date.now();

            if (now - this.lastEmitTime >= this.interval) {
              this.lastEmitTime = now;
              this.next(value);
            }
          }, () => this.complete(), error => this.error(error)));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be72d2ca5914f682428f7a6849ff369a423f95a0.js.map