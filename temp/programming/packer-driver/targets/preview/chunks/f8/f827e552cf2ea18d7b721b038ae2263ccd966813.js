System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, UITransform, Component, Canvas, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CanvasResolver;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      Component = _cc.Component;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7664cntVh5FOo5dXZI3R2V/", "CanvasResolver", undefined);

      __checkObsolete__(['_decorator', 'Node', 'EventTouch', 'Vec3', 'UITransform', 'Component', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CanvasResolver", CanvasResolver = (_dec = ccclass("CanvasResolver"), _dec2 = property(Canvas), _dec(_class = (_class2 = class CanvasResolver extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canvas", _descriptor, this);

          this.canvasTransform = void 0;
          this.position = new Vec3();
          this.halfCanvasWidth = 0;
          this.halfCanvasHeight = 0;
        }

        onLoad() {
          var _this$canvas, _this$canvas2;

          this.canvasTransform = (_this$canvas = this.canvas) == null ? void 0 : _this$canvas.getComponent(UITransform);
          this.updateCanvasSize();
          (_this$canvas2 = this.canvas) == null ? void 0 : _this$canvas2.node.on(Node.EventType.SIZE_CHANGED, this.updateCanvasSize, this);
        }

        onDestroy() {
          var _this$canvas3;

          (_this$canvas3 = this.canvas) == null ? void 0 : _this$canvas3.node.off(Node.EventType.SIZE_CHANGED, this.updateCanvasSize, this);
        }

        updateCanvasSize() {
          var _this$canvasTransform, _this$canvasTransform2;

          this.halfCanvasWidth = ((_this$canvasTransform = this.canvasTransform) == null ? void 0 : _this$canvasTransform.width) / 2 || 0;
          this.halfCanvasHeight = ((_this$canvasTransform2 = this.canvasTransform) == null ? void 0 : _this$canvasTransform2.height) / 2 || 0;
        }

        resolvePosition(event) {
          var location = event.touch.getUILocation();
          var x = location.x - this.halfCanvasWidth;
          var y = location.y - this.halfCanvasHeight;
          this.position.set(x, y, 0);
          return this.position;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f827e552cf2ea18d7b721b038ae2263ccd966813.js.map