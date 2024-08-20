System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, UITransform, Vec3, CanvasResolver, TouchEvents, BaseJoystick, _crd;

  function _reportPossibleCrUseOfIJoystick(extras) {
    _reporterNs.report("IJoystick", "./IJoystick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCanvasResolver(extras) {
    _reporterNs.report("CanvasResolver", "./CanvasResolver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTouchEvents(extras) {
    _reporterNs.report("TouchEvents", "./TouchEvents", _context.meta, extras);
  }

  _export("BaseJoystick", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CanvasResolver = _unresolved_2.CanvasResolver;
    }, function (_unresolved_3) {
      TouchEvents = _unresolved_3.TouchEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "439cfHkxitHlbOOL1yhw0kF", "BaseJoystick", undefined);

      __checkObsolete__(['Component', 'EventTouch', 'Node', 'UITransform', 'Vec3']);

      _export("BaseJoystick", BaseJoystick = class BaseJoystick extends Component {
        constructor() {
          super(...arguments);
          this.stick = void 0;
          this.ring = void 0;
          this.touchStartPos = new Vec3();
          this.stickStartPos = new Vec3();
          this.touchId = null;
          this.radius = 0;
          this.direction = new Vec3();
          this.isDynamic = true;
          this.touchEvents = void 0;
          this.canvasResolver = void 0;
        }

        onLoad() {
          this.radius = this.ring.getComponent(UITransform).width / 2;
          this.canvasResolver = this.node.getComponent(_crd && CanvasResolver === void 0 ? (_reportPossibleCrUseOfCanvasResolver({
            error: Error()
          }), CanvasResolver) : CanvasResolver);

          if (!this.canvasResolver) {
            this.canvasResolver = this.node.addComponent(_crd && CanvasResolver === void 0 ? (_reportPossibleCrUseOfCanvasResolver({
              error: Error()
            }), CanvasResolver) : CanvasResolver);
          }

          this.touchEvents = new (_crd && TouchEvents === void 0 ? (_reportPossibleCrUseOfTouchEvents({
            error: Error()
          }), TouchEvents) : TouchEvents)(this.node);
          this.touchEvents.register([[Node.EventType.TOUCH_START, this.onTouchStart.bind(this)], [Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this)], [Node.EventType.TOUCH_END, this.onTouchEnd.bind(this)], [Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this)]]);
        }

        onDestroy() {
          this.touchEvents.unregisterAll();
        }

        updateStickPosition(event) {
          var touchPos = this.canvasResolver.resolvePosition(event);
          var delta = Vec3.subtract(new Vec3(), touchPos, this.touchStartPos);
          var distance = delta.length();
          var radius = this.radius;

          if (distance > radius) {
            delta = delta.normalize().multiplyScalar(radius);
          }

          var newPos = Vec3.add(new Vec3(), this.touchStartPos, delta);
          this.stick.setPosition(newPos);
          this.direction.set(delta.x / radius, delta.y / radius, 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed74b03b8de8fc5981f8a590c34f69b308fd5781.js.map