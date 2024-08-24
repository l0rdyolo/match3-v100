System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, director, Director, geometry, PhysicsSystem, Collider, _crd, ccclass, OnTriggerEnter, OnTriggerStay, OnTriggerExit;

  // helper
  function defineProperty(target, propertyKey, getter, setter) {
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
  /**
   * Decorator that ensures a property is never set to null or undefined.
   * 
   * @param target - The target object.
   * @param propertyKey - The name of the property.
   * @throws Will throw an error if the property is set to null or undefined.
   *
   * @example
   * class Player {
   *     @NotNull
   *     public name: string;
   *     
   *     constructor(name: string) {
   *         this.name = name;
   *     }
   * }
   * 
   * const player = new Player('John');
   * player.name = null; // Throws an error
   */


  function NotNull(target, propertyKey) {
    var value = target[propertyKey];

    var getter = () => value;

    var setter = newVal => {
      if (newVal === null || newVal === undefined) {
        throw new Error("Property " + propertyKey + " cannot be set to null or undefined");
      }

      value = newVal;
    };

    defineProperty(target, propertyKey, getter, setter);
  }
  /**
   * Decorator that enforces a numeric property to be within a specified range.
   * 
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @returns A property decorator function.
   * @throws Will throw an error if the property value is outside the specified range.
   *
   * @example
   * class GameSettings {
   *     @Range(1, 10)
   *     public difficulty: number;
   *     
   *     constructor(difficulty: number) {
   *         this.difficulty = difficulty;
   *     }
   * }
   * 
   * const settings = new GameSettings(5);
   * settings.difficulty = 11; // Throws an error
   */


  function Range(min, max) {
    return function (target, propertyKey) {
      var value = target[propertyKey];

      var getter = () => value;

      var setter = newValue => {
        if (newValue < min || newValue > max) {
          throw new Error("Property " + propertyKey + " must be between " + min + " and " + max + ".");
        }

        value = newValue;
      };

      defineProperty(target, propertyKey, getter, setter);
    };
  }
  /**
   * Decorator that provides a default value for a property.
   * 
   * @param defaultValue - The default value to be assigned.
   * @returns A property decorator function.
   *
   * @example
   * class Settings {
   *     @Default('Guest')
   *     public username: string;
   *     
   *     constructor(username?: string) {
   *         this.username = username;
   *     }
   * }
   * 
   * const settings = new Settings();
   * console.log(settings.username); // Outputs 'Guest'
   */


  function Default(defaultValue) {
    return function (target, propertyKey) {
      var value = target[propertyKey] || defaultValue;

      var getter = () => value;

      var setter = newValue => {
        value = newValue !== undefined ? newValue : defaultValue;
      };

      defineProperty(target, propertyKey, getter, setter);
    };
  }
  /**
   * Decorator that throttles a method, ensuring it is only called once within a specified delay.
   * 
   * @param delay - The delay in milliseconds.
   * @returns A method decorator function.
   *
   * @example
   * class Game {
   *     @Throttle(1000)
   *     public shoot() {
   *         console.log('Shoot!');
   *     }
   * }
   * 
   * const game = new Game();
   * game.shoot(); // 'Shoot!' is logged
   * game.shoot(); // Ignored if called within 1 second
   */


  function Throttle(delay) {
    return function (target, propertyKey, descriptor) {
      var originalMethod = descriptor.value;
      var lastCall = 0;

      descriptor.value = function () {
        var now = Date.now();
        if (now - lastCall < delay) return;
        lastCall = now;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return originalMethod.apply(this, args);
      };

      return descriptor;
    };
  }
  /**
   * Decorator that debounces a method, ensuring it is only called after a specified delay.
   * 
   * @param delay - The delay in milliseconds before the method is invoked.
   * @returns A method decorator function.
   *
   * @example
   * class Search {
   *     @Debounce(300)
   *     public performSearch(query: string) {
   *         console.log(`Searching for ${query}`);
   *     }
   * }
   * 
   * const searchInstance = new Search();
   * searchInstance.performSearch('test'); // The search will be performed after 300ms
   */


  function Debounce(delay) {
    return function (target, propertyKey, descriptor) {
      var originalMethod = descriptor.value;
      var timeoutId;

      descriptor.value = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => originalMethod.apply(this, args), delay);
      };

      return descriptor;
    };
  }
  /**
   * Decorator that validates a property value using a custom validator function.
   * 
   * @param validatorFn - A function that validates the property value.
   * @param errorMessage - The error message to be thrown if validation fails.
   * @returns A property decorator function.
   * @throws Will throw an error if the property value is invalid.
   *
   * @example
   * class User {
   *     @Validate((value) => typeof value === 'string' && value.length > 3, 'Username must be a string with more than 3 characters.')
   *     public username: string;
   *     
   *     constructor(username: string) {
   *         this.username = username;
   *     }
   * }
   * 
   * const user = new User('JohnDoe');
   * user.username = 'JD'; // Throws an error
   */


  function Validate(validatorFn, errorMessage) {
    return function (target, propertyKey) {
      var value = target[propertyKey];

      var getter = () => value;

      var setter = newValue => {
        if (!validatorFn(newValue)) {
          throw new Error(errorMessage);
        }

        value = newValue;
      };

      defineProperty(target, propertyKey, getter, setter);
    };
  }
  /**
   * Decorator that restricts a property value to a set of allowed values.
   * 
   * @param allowedValues - The allowed values for the property.
   * @returns A property decorator function.
   * @throws Will throw an error if the property value is not in the allowed values.
   *
   * @example
   * class Settings {
   *     @EnumProperty('easy', 'medium', 'hard')
   *     public difficulty: string;
   *     
   *     constructor(difficulty: string) {
   *         this.difficulty = difficulty;
   *     }
   * }
   * 
   * const settings = new Settings('medium');
   * settings.difficulty = 'extreme'; // Throws an error
   */


  function EnumProperty() {
    for (var _len3 = arguments.length, allowedValues = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      allowedValues[_key3] = arguments[_key3];
    }

    return function (target, propertyKey) {
      var value = target[propertyKey];

      var getter = () => value;

      var setter = newValue => {
        if (allowedValues.indexOf(newValue) === -1) {
          throw new Error("Property " + propertyKey + " must be one of: " + allowedValues.join(', '));
        }

        value = newValue;
      };

      defineProperty(target, propertyKey, getter, setter);
    };
  }

  function addTouchEventListeners(node, onTouchStart, onTouchEnd) {
    node.on(Node.EventType.TOUCH_START, onTouchStart, this);
    node.on(Node.EventType.TOUCH_END, onTouchEnd, this);
    node.on(Node.EventType.TOUCH_CANCEL, onTouchEnd, this);
  }

  function removeTouchEventListeners(node, onTouchStart, onTouchEnd) {
    node.off(Node.EventType.TOUCH_START, onTouchStart, this);
    node.off(Node.EventType.TOUCH_END, onTouchEnd, this);
    node.off(Node.EventType.TOUCH_CANCEL, onTouchEnd, this);
  }
  /**
   * Decorator for detecting a long press (touch holding) on a node.
   * The decorated method will be called if the touch holding duration exceeds the specified time.
   * 
   * @param duration - The duration in milliseconds that constitutes a long press.
   * @returns A property decorator function.
   *
   * @example
   * class MyComponent extends Component {
   *     @TouchHoldingDetection(1000)
   *     onLongPress(event: EventTouch) {
   *         console.log('Long press detected', event);
   *     }
   * }
   * 
   * const myComponent = new MyComponent();
   * // Add MyComponent to a node in Cocos Creator to use the long press detection
   */


  function TouchHoldingDetection(duration) {
    return function (target, propertyKey) {
      var timeoutId;

      var onTouchStart = event => {
        timeoutId = setTimeout(() => {
          if (typeof target[propertyKey] === 'function') {
            target[propertyKey].call(this, event);
          }
        }, duration);
      };

      var onTouchEnd = () => {
        clearTimeout(timeoutId);
      };

      var originalOnLoad = target.onLoad;

      target.onLoad = function () {
        if (originalOnLoad) {
          originalOnLoad.call(this);
        }

        addTouchEventListeners(this.node, onTouchStart, onTouchEnd);
      };

      var originalOnDestroy = target.onDestroy;

      target.onDestroy = function () {
        if (originalOnDestroy) {
          originalOnDestroy.call(this);
        }

        removeTouchEventListeners(this.node, onTouchStart, onTouchEnd);
      };
    };
  }
  /**
   * Decorator for executing a method when the scene is fully ready.
   * The decorated method will be called after the first frame is drawn.
   * 
   * @returns A property decorator function.
   *
   * @example
   * class GameController extends Component {
   *     @SceneReady()
   *     onSceneReady() {
   *         console.log('Scene is ready');
   *     }
   * }
   * 
   * const gameController = new GameController();
   * // Add GameController to a node in Cocos Creator to execute the method when the scene is ready
   */


  function SceneReady() {
    return function (target, propertyKey) {
      var originalOnLoad = target.onLoad;

      target.onLoad = function () {
        if (originalOnLoad) {
          originalOnLoad.call(this);
        }

        director.once(Director.EVENT_AFTER_DRAW, () => {
          if (typeof target[propertyKey] === 'function') {
            target[propertyKey].call(this);
          }
        });
      };
    };
  }
  /**
   * Decorator for emitting a custom event after executing a method.
   * The event will be emitted from the node associated with the component.
   * 
   * @param eventName - The name of the event to emit.
   * @returns A method decorator function.
   *
   * @example
   * class Player extends Component {
   *     @EmitEvent('playerScored')
   *     score(points: number) {
   *         console.log(`Player scored ${points} points`);
   *     }
   * }
   * 
   * const player = new Player();
   * player.score(10); // Emits 'playerScored' event with points
   */


  function EmitEvent(eventName) {
    return function (target, propertyKey, descriptor) {
      var originalMethod = descriptor.value;

      descriptor.value = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        var result = originalMethod.apply(this, args);
        this.node.emit(eventName, ...args);
        return result;
      };

      return descriptor;
    };
  }
  /**
   * Decorator for detecting raycast hits when a touch starts on the node.
   * 
   * The decorated method will log the name of the node hit by the raycast.
   * 
   * @returns A property decorator function.
   *
   * @example
   * class MyComponent extends Component {
   *     @RaycastDetection()
   *     onRaycastHit() {
   *         // Method to handle raycast hits
   *     }
   * }
   * 
   * const myComponent = new MyComponent();
   * // Add MyComponent to a node in Cocos Creator to enable raycast detection
   */


  function RaycastDetection() {
    return function (target, propertyKey) {
      var onTouchStart = function onTouchStart(event) {
        var ray = new geometry.Ray();
        PhysicsSystem.instance.raycastClosest(ray);
        var result = PhysicsSystem.instance.raycastClosestResult;

        if (result) {
          console.log("Raycast hit: " + result.collider.node.name);
        }
      };

      if (!target.onLoad) {
        target.onLoad = function () {
          this.node.on(Node.EventType.TOUCH_START, onTouchStart, this);
        };
      }

      if (!target.onDestroy) {
        target.onDestroy = function () {
          this.node.off(Node.EventType.TOUCH_START, onTouchStart, this);
        };
      }
    };
  }
  /**
   * Decorator for watching changes on a property and triggering a callback when the property value changes.
   * 
   * @param callback - The function to call when the property value changes.
   * @returns A property decorator function.
   *
   * @example
   * class Player {
   *     @WatchProperty((newValue, oldValue) => {
   *         console.log(`Player health changed from ${oldValue} to ${newValue}`);
   *     })
   *     public health: number;
   *     
   *     constructor(health: number) {
   *         this.health = health;
   *     }
   * }
   * 
   * const player = new Player(100);
   * player.health = 80; // Logs: Player health changed from 100 to 80
   */


  function WatchProperty(callback) {
    return function (target, propertyKey) {
      var value = target[propertyKey];

      var getter = () => value;

      var setter = newValue => {
        var oldValue = value;
        value = newValue;
        callback(newValue, oldValue);
      };

      defineProperty(target, propertyKey, getter, setter);
    };
  }
  /**
   * Utility function to create a trigger decorator that handles collider events.
   * 
   * @param onEnter - Function to call when the collider enters the trigger.
   * @param onExit - Function to call when the collider exits the trigger.
   * @returns A method decorator function.
   *
   * @example
   * class Enemy extends Component {
   *     @colliderTrigger(
   *         (collider) => console.log('Collider entered:', collider),
   *         (collider) => console.log('Collider exited:', collider)
   *     )
   *     onColliderTrigger(collider: Collider) {
   *         // Method to handle collider trigger events
   *     }
   * }
   * 
   * const enemy = new Enemy();
   * // Add Enemy to a node with a Collider component in Cocos Creator to enable collider trigger detection
   */


  function colliderTrigger(onEnter, onExit) {
    return function (target, propertyKey, descriptor) {
      var originalMethod = descriptor.value;
      var node = target.node;

      descriptor.value = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        if (node) {
          var _collider = node.getComponent(Collider);

          if (_collider) {
            _collider.on('onTriggerEnter', otherCollider => {
              if (onEnter) {
                onEnter(otherCollider);
              }

              originalMethod.call(this, otherCollider, ...args);
            });

            _collider.on('onTriggerExit', otherCollider => {
              if (onExit) {
                onExit(otherCollider);
              }
            });
          } else {
            console.warn("Collider component not found for trigger detection.");
          }
        } else {
          console.warn("Node reference not found for collider trigger.");
        }
      };

      return descriptor;
    };
  }

  /**
   * Utility function to create a trigger event decorator.
   * 
   * @param event - The trigger event to listen for.
   * @returns A method decorator function.
   *
   * @example
   * class Obstacle extends Component {
   *     @OnTriggerEnter()
   *     handleTriggerEnter(otherCollider: Collider) {
   *         console.log('Trigger entered by:', otherCollider.node.name);
   *     }
   *     
   *     @OnTriggerStay()
   *     handleTriggerStay(otherCollider: Collider) {
   *         console.log('Trigger stayed by:', otherCollider.node.name);
   *     }
   *     
   *     @OnTriggerExit()
   *     handleTriggerExit(otherCollider: Collider) {
   *         console.log('Trigger exited by:', otherCollider.node.name);
   *     }
   * }
   * 
   * const obstacle = new Obstacle();
   * // Add Obstacle to a node with a Collider component in Cocos Creator to handle trigger events
   */
  function createTriggerDecorator(event) {
    return function () {
      return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;

        descriptor.value = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          var node = this.node;

          if (!node) {
            console.warn("Node reference not found for collider trigger in " + String(propertyKey) + ".");
            return;
          }

          var collider = node.getComponent(Collider);

          if (!collider) {
            console.warn("Collider component not found for trigger detection in " + String(propertyKey) + ".");
            return;
          }

          collider.on(event, otherCollider => {
            originalMethod.call(this, otherCollider, ...args);
          });
        };

        return descriptor;
      };
    };
  }

  _export({
    NotNull: NotNull,
    Range: Range,
    Default: Default,
    Throttle: Throttle,
    Debounce: Debounce,
    Validate: Validate,
    EnumProperty: EnumProperty,
    TouchHoldingDetection: TouchHoldingDetection,
    SceneReady: SceneReady,
    EmitEvent: EmitEvent,
    RaycastDetection: RaycastDetection,
    WatchProperty: WatchProperty
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      director = _cc.director;
      Director = _cc.Director;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      Collider = _cc.Collider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90218kty8NByZ1UdEpwsXED", "decorators", undefined);

      __checkObsolete__(['_decorator', 'Node', 'EventTouch', 'director', 'Director', 'geometry', 'PhysicsSystem', 'PhysicsRayResult', 'Component', 'Collider']);

      ({
        ccclass
      } = _decorator);

      _export("OnTriggerEnter", OnTriggerEnter = createTriggerDecorator('onTriggerEnter'));

      _export("OnTriggerStay", OnTriggerStay = createTriggerDecorator('onTriggerStay'));

      _export("OnTriggerExit", OnTriggerExit = createTriggerDecorator('onTriggerExit'));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ba0bf23f08eccdbb6c61209af7cc7e21792793f.js.map