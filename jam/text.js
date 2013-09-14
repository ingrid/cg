define(["sprite", "util"], function(Sprite, Util) {
  var text = function(x, y) {
	Sprite.call(this, x, y);
	this.text = "";
	this.font = "";
	this.color = ""

    /** /
	this.render = function(context, camera){
	  context.font = this.font;
	  context.fillStyle = this.color;
	  context.fillText(this.text,
			           this.x - camera.scroll.x * this.parallax.x,
			           this.y - camera.scroll.y * this.parallax.y);
	};
    /**/
	this.render = function(context){
	  context.font = this.font;
	  context.fillStyle = this.color;
	  context.fillText(this.text,
			           this.x,
			           this.y);
    };
  };

  text.prototype = new Sprite(0, 0);

  return text;
});
