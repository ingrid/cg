require.config({
  baseUrl:"../../jam/",
});

require(["jam", "../lib/sylvester", "cg.js"], function(jam, syl, cg) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(640, 480, document.body);
	var scene = g.root.scene;

    var p = [];
    var s;

    var txt = new jam.Text(20, 20);
    txt.font = "20pt monospace";
    txt.color = "#000";
    txt.text = 'hi';
    scene.add(txt);

	scene.on("update", function(dt) {
      txt.text = jam.Input.mouse;
      if (p.length > 2){
        var poi = p.pop();
        var t = p.pop();
        var o = p.pop();
        s = cg.detSide(o, t, poi);
        var l = new cg.line(o.x, o.y, t.x, t.y);
        scene.add(l);
        scene.add(l.end);
        if (s < 0){
          console.log("LEFT");
        } else if (s > 0){
          console.log("RIGHT");
        } else if (s === 0){
          console.log("COLINE");
        } else {
          console.log("Panic.");
        }
      }
	  if(jam.Input.justPressed("MOUSE_LEFT")){
        p.push(jam.Input.mouse);
        var point = new cg.point(jam.Input.mouse.x, jam.Input.mouse.y, "red");
        scene.add(point);
      }
    });

    /** /
    console.log(cg.detSide({x : 1, y : 1}, {x : 1, y : 1}, {x : 1, y : 1}));
    console.log(cg.detSide({x : 1, y : 1}, {x : 1, y : 2}, {x : 2, y : 2}));
    console.log(cg.detSide({x : 1, y : 1}, {x : 1, y : 2}, {x : -900, y : 2}));
    console.log(cg.detSide({x : 1, y : 1}, {x : 1, y : 1}, {x : 1, y : 1}));
    console.log(cg.detSide({x : 1, y : 1}, {x : 1, y : 1}, {x : 1, y : 1}));
    /**/

	g.run();
  };

  var preload = function() {
    // Preload your assets here.
	jam.showPreloader(main);
  };

  preload();
});
