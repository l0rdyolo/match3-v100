System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, CCInteger, CCFloat, BaseJoystick, JoystickObservable, Range, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, FollowJoystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseJoystick(extras) {
    _reporterNs.report("BaseJoystick", "./BaseJoystick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObservable(extras) {
    _reporterNs.report("IObservable", "../Runtime/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIObserver(extras) {
    _reporterNs.report("IObserver", "../Runtime/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickEvent(extras) {
    _reporterNs.report("JoystickEvent", "./JoystickObservable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickObservable(extras) {
    _reporterNs.report("JoystickObservable", "./JoystickObservable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRange(extras) {
    _reporterNs.report("Range", "../Runtime/decorators", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      BaseJoystick = _unresolved_2.BaseJoystick;
    }, function (_unresolved_3) {
      JoystickObservable = _unresolved_3.JoystickObservable;
    }, function (_unresolved_4) {
      Range = _unresolved_4.Range;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "506e5RTSfBIIJ5M+5Is9AAv", "FollowJoystick", undefined);

      __checkObsolete__(['_decorator', 'Node', 'EventTouch', 'Vec3', 'UITransform', 'CCInteger', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FollowJoystick", FollowJoystick = (_dec = ccclass("FollowJoystick"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(CCInteger), _dec5 = property(CCFloat), _dec6 = (_crd && Range === void 0 ? (_reportPossibleCrUseOfRange({
        error: Error()
      }), Range) : Range)(0.01, 0.25), _dec(_class = (_class2 = (_class3 = class FollowJoystick extends (_crd && BaseJoystick === void 0 ? (_reportPossibleCrUseOfBaseJoystick({
        error: Error()
      }), BaseJoystick) : BaseJoystick) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stick", _descriptor, this);

          _initializerDefineProperty(this, "ring", _descriptor2, this);

          this.joystickObservable = new (_crd && JoystickObservable === void 0 ? (_reportPossibleCrUseOfJoystickObservable({
            error: Error()
          }), JoystickObservable) : JoystickObservable)();

          _initializerDefineProperty(this, "followThreshold", _descriptor3, this);

          _initializerDefineProperty(this, "lerpSpeed", _descriptor4, this);
        }

        onTouchStart(event) {
          if (!FollowJoystick.canTouch) return;

          if (this.touchId === null) {
            const touch = event.touch;
            this.touchId = touch.getID();
            let touchPos = this.canvasResolver.resolvePosition(event);
            this.touchStartPos.set(touchPos);
            this.ring.setPosition(this.touchStartPos);
            this.stick.setPosition(this.touchStartPos);
            this.stickStartPos.set(this.stick.getPosition());
            this.updateStickPosition(event);
            this.joystickObservable.notifyStart(this.getDirection(), {
              ring: this.ring,
              stick: this.stick
            });
          }
        }

        onTouchMove(event) {
          if (!FollowJoystick.canTouch) return;

          if (this.touchId !== null && event.touch.getID() === this.touchId) {
            this.updateStickPosition(event);
            this.followFinger(event);
          }
        }

        onTouchEnd(event) {
          if (!FollowJoystick.canTouch) return;

          if (event.touch.getID() === this.touchId) {
            this.touchId = null;
            this.direction.set(new Vec3(0, 0, 0));
            this.joystickObservable.notifyEnd(this.getDirection(), {
              ring: this.ring,
              stick: this.stick
            });
          }
        }

        getDirection() {
          return this.direction;
        }

        followFinger(event) {
          let touchPos = this.canvasResolver.resolvePosition(event);
          const distance = Vec3.distance(this.touchStartPos, touchPos);

          if (distance > this.radius + this.followThreshold) {
            const newPos = new Vec3();
            Vec3.lerp(newPos, this.ring.getPosition(), touchPos, this.lerpSpeed);
            const calculateStickPosition = Vec3.subtract(new Vec3(), this.stick.position, this.ring.position);
            this.ring.setPosition(newPos);
            this.stick.setPosition(Vec3.add(new Vec3(), newPos, calculateStickPosition));
            this.touchStartPos.set(newPos);
          }
        } ///< Observable events


        subscribe(observer) {
          this.joystickObservable.subscribe(observer);
        }

        next(value) {
          this.joystickObservable.next(value);
        }

        complete() {
          this.joystickObservable.complete();
        }

        error(error) {
          this.joystickObservable.error(error);
        }

      }, _class3.canTouch = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ring", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "followThreshold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 25;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lerpSpeed", [_dec5, _dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=711066d080b8641e8900929075c90f31445a0f64.js.map