System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DisplayItem, _crd;

  _export("DisplayItem", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82331zl7OlM8qhGsHHVPu2/", "DisplayItem", undefined);

      _export("DisplayItem", DisplayItem = class DisplayItem {
        constructor(priority) {
          this.priority = void 0;
          this.onDisplay = [];
          this.onClosed = [];
          this.priority = priority;
        }

        show() {
          this.onDisplay.forEach(event => event(this));
        }

        hide() {
          this.onClosed.forEach(event => event(this));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d62c4d6d9ba8dc040d3e5be473604d667634500.js.map