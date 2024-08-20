System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, geometry, Vec3, _crd, defaultDimensions, isObjectVisible;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      geometry = _cc.geometry;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c796yGjuBAa4/Xh94j2nt5", "geometry", undefined);

      __checkObsolete__(['geometry', 'renderer', 'Node', 'Vec3']);

      defaultDimensions = new Vec3(1, 1, 1);

      _export("isObjectVisible", isObjectVisible = ({
        camera,
        object,
        dimensions = defaultDimensions
      }) => {
        const {
          worldPosition: {
            x,
            y,
            z
          }
        } = object;
        const {
          x: dx,
          y: dy,
          z: dz
        } = dimensions;
        const aabb = new geometry.AABB(x, y, z, dx, dy, dz);
        return !!geometry.intersect.aabbFrustumCompletelyInside(aabb, camera.frustum);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed7ac6034937f4ad087b8bbefdf1770df1a144a1.js.map