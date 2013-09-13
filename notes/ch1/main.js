require.config({
  baseUrl:"../../jam/",
});

require(["jam", "../lib/sylvester", "cg.js"], function(jam, syl, cg) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(320, 240, document.body, 2);
	var scene = g.root.scene;

    var p = [];
    var s;
	scene.on("update", function(dt) {
      if (p.length > 2){
        s = cg.detSide(p.pop(), p.pop(), p.pop());
        if (s > 0){
          console.log("LEFT");
        } else if (s < 0){
          console.log("RIGHT");
        } else if (s === 0){
          console.log("COLINE");
        } else {
          console.log("Panic.");
        }
      }
	  if(jam.Input.justPressed("MOUSE_LEFT")){
        p.push(jam.Input.mouse);
        console.log(s);
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
