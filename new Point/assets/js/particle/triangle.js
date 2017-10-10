window.onload = function(){

	var canvas = document.getElementById("myTriangle"),
	ctx = canvas.getContext("2d"),
//	colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'],
	colors = ['255,255,255', '255,255,255', '255,255,255', '255,255,255', '255,255,255'],
	triangles = [],
	spaceIn = 100 ;


	canvas.height = window.innerHeight;
//	canvas.height = 100;
	canvas.width = window.innerWidth;
//	canvas.width = 100;

//	 ctx.fillStyle = "#16a085";
	 ctx.fillStyle = "#1c1d25";
	 ctx.fillRect(0,0,canvas.width,canvas.height);

	function clearCanvas(){
//		ctx.fillStyle = "#16a085";
		ctx.fillStyle = "#1c1d25";
		ctx.fillRect(0,0,canvas.width,canvas.height);		
	}

	function triangleDef(){
        var _this = this;        
        
        (function(){
            _this.coords = [{},{},{}];
            _this.pos = {};
            init();
        })();

		function init(){
			_this.pos.x = window.innerWidth * 0.5;
			_this.pos.y = window.innerHeight * 0.5 - 20; 
			_this.coords[0].x = -10 + Math.random() * 40;
			_this.coords[0].y = -10 + Math.random() * 40;
			_this.coords[1].x = -10 + Math.random() * 40;
			_this.coords[1].y = -10 + Math.random() * 40;
			_this.coords[2].x = -10 + Math.random() * 40;
			_this.coords[2].y = -10 + Math.random() * 40;															
			_this.triColor = colors[Math.floor(Math.random()* colors.length)];
			_this.alpha = 0.8;
		}
	

		this.drawTriangle = function(){
            if(_this.alpha >= 0.005) 
            	_this.alpha -= 0.005;
            else 
            	_this.alpha = 0;
			ctx.beginPath();
			ctx.moveTo(_this.coords[0].x + _this.pos.x, _this.coords[0].y + _this.pos.y);
			ctx.lineTo(_this.coords[1].x + _this.pos.x, _this.coords[1].y + _this.pos.y);
			ctx.lineTo(_this.coords[2].x + _this.pos.x, _this.coords[2].y + _this.pos.y);					
			ctx.closePath();
            ctx.fillStyle = 'rgba('+_this.triColor+','+ _this.alpha+')';
			ctx.fill();			
		}

		this.init = init;
	}


	function moveTriangle(tri){
        var t = Math.random()*(2*Math.PI);
        var x = (300+Math.random()*100)*Math.cos(t) + window.innerWidth * 0.5;
        var y = (300+Math.random()*100)*Math.sin(t) + window.innerHeight * 0.5 - 20;
        var time = 4+3*Math.random();	 
 
        TweenLite.to(tri.pos, time, {x: x,
            y: y, ease:Circ.easeOut,
            onComplete: function() {
                tri.init();
                // tri.drawTriangle();
                moveTriangle(tri);
       		 }
    	}); 
	}


	function createTriangle(){
		for (var i = 0; i < 480; i++) {		
			addTriangle(i*10);			
		}	
	}	
    function addTriangle(delay) {
         setTimeout(function() {
			var triangleObj = new triangleDef();
			triangles.push(triangleObj);
			 triangleObj.drawTriangle();
            moveTriangle(triangleObj);
             triangleObj.drawTriangle();
         }, delay);
    }

    function initAnimation() {
        animate();
    }

    function animate() {
//        console.log("animate");
//	 ctx.fillStyle = "#16a085";
	 ctx.fillStyle = "#1c1d25";
	 ctx.fillRect(0,0,canvas.width,canvas.height);
        // clearCanvas();
        for(var i in triangles) {
            triangles[i].drawTriangle();        
        }
        requestAnimationFrame(animate);
    }	


    createTriangle();
    initAnimation();   
    
    
	function resizeHandler(){
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;		
	}

	window.addEventListener('resize', function() {
		resizeHandler();
	}, false);    
}
