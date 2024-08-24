System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, FollowJoystick, Observer, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, JoytickEventHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFollowJoystick(extras) {
    _reporterNs.report("FollowJoystick", "./FollowJoystick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../Runtime/Observer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickEvent(extras) {
    _reporterNs.report("JoystickEvent", "./JoystickObservable", _context.meta, extras);
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
    }, function (_unresolved_2) {
      FollowJoystick = _unresolved_2.FollowJoystick;
    }, function (_unresolved_3) {
      Observer = _unresolved_3.Observer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09fdfu43LpEkYPhc+dMcRpr", "JoytickEventHandler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoytickEventHandler", JoytickEventHandler = (_dec = ccclass('JoytickEventHandler'), _dec2 = property(_crd && FollowJoystick === void 0 ? (_reportPossibleCrUseOfFollowJoystick({
        error: Error()
      }), FollowJoystick) : FollowJoystick), _dec(_class = (_class2 = class JoytickEventHandler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "joystick", _descriptor, this);

          this.josytickObserver = void 0;
        }

        onLoad() {
          this.josytickObserver = new (_crd && Observer === void 0 ? (_reportPossibleCrUseOfObserver({
            error: Error()
          }), Observer) : Observer)(event => {
            if (event.type === 'start') {
              this.showJosytickParts(event.parts.ring, event.parts.stick);
            } else if (event.type === 'end') {
              this.hideJosytickParts(event.parts.ring, event.parts.stick);
            }
          });
          this.joystick.subscribe(this.josytickObserver);
        }

        showJosytickParts(ring, stick) {
          ring.active = true;
          stick.active = true;
        }

        hideJosytickParts(ring, stick) {
          ring.active = false;
          stick.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joystick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=381518241fd81c204ff58d4058503fd60929a7ce.js.map