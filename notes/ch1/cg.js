define(["vector"], function(vec) {
  var mod = {};
  mod.detSide = function(o, t, p){
    // Cross product.
    return ((t.x - o.x)*(p.y - o.y) - (t.y - o.y)*(p.x - o.x));
    // If colinear, returns 0,
    // If the line is horizontal it returns 0?
    // If > 0, then left.
    // If < 0, then right.
  };
  return mod;
});
