window.onload = function(){
	var canvas = document.getElementById("myParticleGround"),
	ctx = canvas.getContext('2d'),
	particle = [],
	radius = 3,
	line = 0.5,
	particleNum = 0,
	density = 10000,
	proximity = 100,
	mouseX = 0,
	mouseY = 0,
	prevX = 0,
	prevY = 0,
	flag = 0;

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	ctx.fillStyle = "#16a085";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	function clearCanvas(){
		ctx.fillStyle = "#16a085";
		ctx.fillRect(0,0,canvas.width,canvas.height);		
	}

	function particleDef(){
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.xv = Math.random() - 0.5;
		this.xy = Math.random() - 0.5;	
	}


	function createParticle(num){
		for (var i = num ; i < (canvas.width*canvas.height)/density; i++) {
			particle[i] = new particleDef();
		}
		particleNum = i;
		console.log(particleNum);
	}

	function updatePosition(i){
		if((i.x + radius) >= canvas.width  || (i.x - radius) < 0 ){
			i.xv *= -1;
		}
		if((i.y + radius) >= canvas.height  || (i.y - radius) < 0 ){
			i.xy *= -1;
		}		
		i.x += i.xv;
		i.y += i.xy;
	}

	function drawParticle(){
		for (var i = 0; i < particleNum; i++) {
			ctx.beginPath();
			ctx.fillStyle = "#5cbdaa";
			ctx.arc(particle[i].x, particle[i].y, radius, 0, Math.PI*2,true);
			ctx.fill();
			ctx.closePath();
			updatePosition(particle[i]);
		}
	}

	function getDistance(i,j){
		return (Math.sqrt( Math.pow((i.x - j.x),2) + Math.pow((i.y - j.y),2) ));
	}

	function drawLine(){
		for (var i = 0; i < particleNum; i++) {
			for (var j = 0; j < particleNum; j++) {
				var distance = getDistance(particle[i], particle[j]);
				if( distance < proximity){
					ctx.beginPath();
					ctx.strokeStyle = "#5cbdaa";
					ctx.lineWidth = line;
					// ctx.globalAlpha = (proximity - distance)/proximity;
					ctx.moveTo(particle[i].x, particle[i].y);
					ctx.lineTo(particle[j].x, particle[j].y);
					ctx.stroke();
					ctx.closePath();
				}
			}
		}
	}

	function particleGround(){
		clearCanvas();
		drawParticle();
		drawLine();
		requestAnimationFrame(particleGround);
	}

	function resizeHandler(){
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;		
		console.log(particle.length + " " + particleNum);
		for (var i = particle.length - 1; i >= 0; i--) {
			if(particle[i].x > canvas.width || particle[i].y > canvas.height){
				particle.splice(i,1);				
				console.log("Removing");
			}
		}
		console.log("New Length" + particle.length);
		particleNum = particle.length;
		if(particleNum < (canvas.width * canvas.height)/density){
			createParticle(particleNum);
		}
		else{
			console.log("Present particle " + particleNum +" And should be " + (canvas.width * canvas.height)/density);
			particle.splice(particleNum);
			console.log("Removing Extra");
		}
	}

	window.addEventListener('resize', function() {
		resizeHandler();
	}, false);


		function moveAhead(i){
				i.x += (mouseX - prevX);
				i.y += (mouseY - prevY);			
		}

	document.addEventListener('mousemove', function(e) {
		mouseX = (e.pageX * 20) / canvas.width;
		mouseY = (e.pageY * 20) / canvas.height;

		if(flag == 0){
			prevX = mouseX;
			prevY = mouseY;
			flag = 1;
		}

		console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

		for (var i = 0; i < particle.length; i++) {
			if(i%2){
				particle[i].x += ((mouseX - prevX) + (mouseX - prevX)) * 3;
				particle[i].y += ((mouseY - prevY) + (mouseX - prevX)) * 3;
			}
			else{
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));
				// window.requestAnimationFrame(moveAhead(particle[i]));																				
				particle[i].x += ((mouseX - prevX) + (mouseX - prevX) + (mouseX - prevX)+ (mouseX - prevX)+ (mouseX - prevX)) * 3;
				particle[i].y += ((mouseY - prevY) + (mouseY - prevY) + (mouseY - prevY)+ (mouseY - prevY)+ (mouseY - prevY)) * 3;
			}
		}
		prevX = mouseX;
		prevY = mouseY;
	}, false);	

	createParticle(0);
	particleGround();
}
