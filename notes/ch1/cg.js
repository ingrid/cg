define(["sprite", "vector"], function(Sprite, Vector) {
  var mod = {};
  mod.detSide = function(o, t, p){
    // Cross product.
    return ((t.x - o.x)*(p.y - o.y) - (t.y - o.y)*(p.x - o.x));
    // If colinear, returns 0,
    // If the line is horizontal it returns 0?
    // If > 0, then left.
    // If < 0, then right.
  };

  var can = document.createElement("canvas");
  can.width = 1;
  can.height = 1;
  var con = can.getContext("2d");
  con.fillStyle = "#000";
  con.fillRect(0, 0, 1, 2);

  mod.point = function(x, y){
      Sprite.call(this, x, y);
      this.image = can;
      this.width = can.width;
      this.height = can.height;
  };

  mod.point.prototype = new Sprite(0, 0);

  mod.line = function(ox, oy, tx, ty){
      Sprite.call(this, x, y);
  };

  mod.line.prototype = new Sprite(0, 0);

  return mod;
});
