window.onload = function(){

	var canvas = document.getElementById('myMaze')
		ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight * (3/4);
	var ox = canvas.width/2;
	var oy = canvas.height/2;
	var lim = 20;

	ctx.fillStyle = "#1c1d25";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	particles = [];

	var Particle = function()
	{
		this.x = ox;
		this.y = oy;
		this.angle;
		this.incang = 2;
		this.radius = 10;
		this.incrad = 2;
		this.colour;
		this.active = true;
	}
	Particle.prototype.update = function()
	{
		var mov = Math.random();
		
		if( mov < 0.1 )
		{
			//this.radius = this.radius + this.incrad;
			this.incrad = 2;
			this.incang = 0;
		}
		else if( mov < 0.2 )
		{
			//this.angle = this.angle + this.incang;
			this.incrad = 0;
			this.incang = 2;
		}
		else if( mov <  0.3 )
		{
			//this.angle = this.angle - this.incang;
			this.incrad = 0;
			this.incang = -2;
		}
		
		this.angle = this.angle + this.incang;
		this.radius = this.radius + this.incrad;

		var angle = (Math.PI/180) * this.angle;
		var ax = this.radius * Math.cos(angle);
		var ay = this.radius * Math.sin(angle);

		ctx.beginPath();
		ctx.strokeStyle = this.colour;
		//console.log(this.colour);
		ctx.lineWidth = 1.5;
		ctx.moveTo( this.x, this.y );
		ctx.lineTo( ax + ox, ay + oy );
		//ctx.quadraticCurveTo( ax + ox, ay + oy ,ax + ox, ay + oy );
		ctx.stroke();
		ctx.closePath();

		this.x = ax + ox;
		this.y = ay + oy;
	}

	var init = function()
	{
		for( i = 0; i < lim; i++ )
		{
			particles[i] = new Particle();
			particles[i].angle = i*20;
			if(Math.random() < 0.5)
			{
				//particles[i].colour = "#00ff00";
				particles[i].colour = "#cccccc";
			}
			else
			{
				particles[i].colour = "#cccccc";
			}
		}
	}

	var animate = function()
	{
		for( i = 0; i < lim; i++ )
		{
			if( particles[i].x > canvas.width || particles[i].y > canvas.height )
			{
				particles[i].active = false;
			}
			else
			{
				particles[i].update();
			}
		}

		requestAnimationFrame(animate);
	}
	init();
	animate();
    
	function resizeHandler(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * (3/4);
        ox = canvas.width/2;
        oy = canvas.height/2;
        lim = 20;
        particles = [];
        ctx.fillStyle = "#1c1d25";
        ctx.fillRect(0,0,canvas.width,canvas.height);   
        init();
        animate();        
	}

	window.addEventListener('resize', function() {
		resizeHandler();
	}, false);        

}
