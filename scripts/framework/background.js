
function Background(descr) {
    this.setup(descr);
}

Background.prototype = new Entity(true);
Background.prototype.backY = 0;
Background.prototype.backVelY = 2;

Background.prototype.update = function (du) {
    //Þessi lina lætur skjainn færast a akveðnum hraða, a eftir að 
    //implementa þetta svo það virki fyrir bakrunninn.
    this.backY = (this.backY+this.backVelY*du) % g_canvas.height;

};

Background.prototype.render = function (ctx) {

	g_OffSet += g_viewY;
	ctx.save();

    var pattern = ctx.createPattern(g_images.backgroundImage, "repeat");
    ctx.fillStyle = pattern;
	//Background
    ctx.fillRect(BRICKFIELD_GUTTER, 0, ctx.canvas.width - BRICKFIELD_GUTTER, ctx.canvas.height);
    pattern = ctx.createPattern(g_images.wallImage, "repeat");
    ctx.fillStyle = pattern;
	//Left Wall
    ctx.fillRect(0, 0, BRICKFIELD_GUTTER, ctx.canvas.height);
	//Right Wall
    ctx.fillRect(ctx.canvas.width - BRICKFIELD_GUTTER, 0, BRICKFIELD_GUTTER, ctx.canvas.height);
	ctx.restore();
};
