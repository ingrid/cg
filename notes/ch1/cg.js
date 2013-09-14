define(["sprite", "vector"], function(Sprite, Vector) {
  var mod = {};
  mod.detSide = function(o, t, p){
    // Cross product.
    return ((t.x - o.x)*(p.y - o.y) - (t.y - o.y)*(p.x - o.x));
    // If colinear, returns 0,
    // If the line is horizontal it returns 0?
    // If > 0, then left?
    // If < 0, then right?
  };

  var ps = 5;

  var can = document.createElement("canvas");
  can.width = ps;
  can.height = ps;
  var con = can.getContext("2d");
  con.fillStyle = "#000";
  con.fillRect(0, 0, ps, ps);

  var hps = Math.floor(ps/2);

  mod.point = function(x, y, color){
    if (color === "undefined"){
      // Not needed actually.
      color = "#000";
    } else {
      var can = document.createElement("canvas");
      can.width = ps;
      can.height = ps;
      var con = can.getContext("2d");
      con.fillStyle = color;
      con.fillRect(0, 0, ps, ps);
    }
    Sprite.call(this, x - hps, y - hps);
    this.image = can;
    this.width = can.width;
    this.height = can.height;
  };

  mod.point.prototype = new Sprite(0, 0);

  mod.line = function(ox, oy, tx, ty){
    var x = Math.min(ox, tx);
    var y = Math.min(oy, ty);

    var w = Math.max(Math.abs(ox - tx), 1);
    var h = Math.max(Math.abs(oy - ty), 1);

    Sprite.call(this, x, y);

    var can = document.createElement("canvas");
    can.width = w;
    can.height = h;
    var con = can.getContext("2d");
    con.fillStyle = "#000";
    con.beginPath();

    con.moveTo(ox - x, oy - y);
    con.lineTo(tx - x, ty - y);
    con.stroke();

    this.image = can;
    this.width = w;
    this.height = h;

    this.end = new mod.point(tx, ty, "#000");
    this.add(this.end);
  };

  mod.line.prototype = new Sprite(0, 0);

  return mod;
});
