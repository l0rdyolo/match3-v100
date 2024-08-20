System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SingletonComponent, PriorityQueue, _decorator, _class, _crd, ccclass, UIManager;

  function _reportPossibleCrUseOfSingletonComponent(extras) {
    _reporterNs.report("SingletonComponent", "../Legacy/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPriorityQueue(extras) {
    _reporterNs.report("PriorityQueue", "../Util/PriorityQueue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIDisplayItem(extras) {
    _reporterNs.report("IDisplayItem", "./DisplayItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SingletonComponent = _unresolved_2.SingletonComponent;
    }, function (_unresolved_3) {
      PriorityQueue = _unresolved_3.PriorityQueue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8975f5yyE9FPr97Uag9lk2k", "UIManager", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("UIManager", UIManager = ccclass(_class = class UIManager extends (_crd && SingletonComponent === void 0 ? (_reportPossibleCrUseOfSingletonComponent({
        error: Error()
      }), SingletonComponent) : SingletonComponent) {
        constructor() {
          super(...arguments);
          this.displayItems = new (_crd && PriorityQueue === void 0 ? (_reportPossibleCrUseOfPriorityQueue({
            error: Error()
          }), PriorityQueue) : PriorityQueue)((x, y) => y - x);
        }

        show(item) {
          if (!item || this.displayItems.contains(item)) {
            console.warn(!item ? "Pop-up object is null or empty!" : "Pop-up object is already open!");
            return;
          }

          if (this.displayItems.count > 0) {
            this.displayItems.peek()[0].hide();
          }

          this.displayItems.enqueue(item, item.priority);
          this.displayItems.peek()[0].show();
          console.log("Pop-up object is shown!", this.displayItems.peek()[0]);
        }

        hidePopUp() {
          if (this.tryGetTopDisplayItem(displayItem => {
            this.displayItems.dequeue();
            displayItem.hide();
            this.showTopDisplayItem();
          })) {
            console.warn("No pop-up object is open!");
          }
        }

        showTopDisplayItem() {
          this.tryGetTopDisplayItem(displayItem => displayItem.show());
        }

        tryGetTopDisplayItem(callback) {
          var displayItem = this.displayItems.count > 0 ? this.displayItems.peek()[0] : null;

          if (displayItem) {
            callback(displayItem);
            return true;
          }

          return false;
        }

        clearAllPopUps() {
          while (this.displayItems.count > 0) {
            var displayItem = this.displayItems.dequeue()[0];
            displayItem.hide();
          }
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a5ff01d2c45e30a22bd9d06a94d0148e40276a.js.map