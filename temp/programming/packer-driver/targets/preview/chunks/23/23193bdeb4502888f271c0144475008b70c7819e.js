System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, SooLib;

  _export("SooLib", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1254ahGZMhGBre5+ZmLXfbE", "Node", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      (function (_SooLib) {
        function findAll(startNode, componentClass, name) {
          var results = [];

          function search(node) {
            if (!name || node.name === name) {
              var component = node.getComponent(componentClass);

              if (component) {
                results.push(component);
              }
            }

            node.children.forEach(childNode => {
              search(childNode);
            });
          }

          search(startNode);
          return results;
        }

        _SooLib.findAll = findAll;

        function find(startNode, componentClass, name) {
          function search(node) {
            if (!name || node.name === name) {
              var component = node.getComponent(componentClass);

              if (component) {
                return component;
              }
            }

            for (var childNode of node.children) {
              var result = search(childNode);

              if (result !== null) {
                return result;
              }
            }

            return null;
          }

          return search(startNode);
        }

        _SooLib.find = find;
      })(SooLib || _export("SooLib", SooLib = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23193bdeb4502888f271c0144475008b70c7819e.js.map