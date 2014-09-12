function draw_0502(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	context.fillStyle = "red";
	context.strokeStyle = "blue";
	context.lineWidth = 1;
	context.fillRect(50, 50, 100, 100);
	context.strokeRect(50, 50, 100, 100);
}

function draw_0503(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	var n = 0;
	for(var i=0; i<10; i++)
	{
		context.beginPath();
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.closePath();
		context.fillStyle = "rgba(255, 0, 0, 0.25)";
		context.fill();
	}
}

function draw_0504(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	var n = 0;
	for(var i=0; i<10; i++)
	{
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.fillStyle = "rgba(255, 0, 0, 0.25)";
		context.fill();
	}
}

function draw_0505(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.fillStyle = "rgb(100, 255, 100)";
	context.strokeStyle = "rgb(0, 0, 100)";
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI/15*11;
	for(var i=0; i<30; i++)
	{
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s, dy+y*s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}

function draw_0506(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.globalCompositeOperation = "and";
	context.fillStyle = "rgb(100, 255, 100)";
	context.strokeStyle = "rgb(0, 0, 100)";
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI/15*11;
	for(var i=0; i<30; i++)
	{
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.bezierCurveTo(dx+x*s, dy+y*s-100, dx+x*s+100, dy+y*s, dx+x*s, dy+y*s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}

function draw_0507(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	var gl = context.createLinearGradient(0, 0, 0, 300);
	gl.addColorStop(0, "rgb(255, 255, 0)");
	gl.addColorStop(1, "rgb(0, 255, 255)");
	context.fillStyle = gl;
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var g2 = context.createLinearGradient(0, 0, 300, 0);
	g2.addColorStop(0, "rgba(0, 0, 255, 0.5)");
	g2.addColorStop(1, "rgba(255, 0, 0, 0.5)");
	for (var i=0; i<10; i++) 
	{
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
	}
}

function draw_0508(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	var gl = context.createRadialGradient(400, 0, 0, 400, 0, 400);
	gl.addColorStop(0.1, "rgb(255, 255, 0)");
	gl.addColorStop(0.3, "rgb(255, 0, 255)");
	gl.addColorStop(1, "rgb(0, 255, 255)");
	context.fillStyle = gl;
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var g2 = context.createRadialGradient(250, 250, 0, 250, 250, 300);
	g2.addColorStop(0.1, "rgba(255, 0, 0, 0.5)");
	g2.addColorStop(0.7, "rgba(255, 255, 0, 0.5)");
	g2.addColorStop(1, "rgba(0, 0, 255, 0.5)");
	for (var i=0; i<10; i++) 
	{
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
	}
}

function draw_0509(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	var n = 0;
	context.translate(200, 50);
	context.fillStyle = "rgba(255, 0, 0, 0.25)";
	for(var i=0; i<50; i++)
	{
		context.translate(25, 25);
		context.scale(0.95, 0.95);
		context.rotate(Math.PI / 10);
		context.fillRect(0, 0, 100, 50);
	}
}

function draw_0510(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	context.translate(200, 50);
	for(var i=0; i<50; i++)
	{
		context.translate(25, 25);
		context.scale(0.95, 0.95);
		context.rotate(Math.PI / 10);
		create5Star(context);
		context.fill();
	}
}
function create5Star(context)
{
	var n =0;
	var dx = 100;
	var dy = 0;
	var s = 50;
	
	context.beginPath();
	context.fillStyle = "rgba(255, 0, 0, 0.5)";
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5*4;
	for(var i=0; i<5; i++)
	{
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		context.lineTo(dx+x*s, dy+y*s);
	}
	context.closePath();
}

function draw_0511(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	var colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
	context.lineWidth = 10;
	context.transform(1, 0, 0, 1, 100, 0);
	for(var i=0; i<colors.length; i++)
	{
		context.transform(1, 0, 0, 1, 0, 10);
		context.strokeStyle = colors[i];
		context.beginPath();
		context.arc(50, 100, 100, 0, Math.PI, true);
		context.stroke();
	}
}

function draw_0512(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext("2d");
	
	context.strokeStyle = "red";
	context.strokeRect(30, 10, 60, 20);
	
	var rad = 45 * Math.PI / 180;
	context.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0);
	context.strokeStyle = "blue";
	context.strokeRect(30, 10, 60, 20);
	
	context.setTransform(2.5, 0, 0, 2.5, 0, 0);
	context.strokeStyle = "green";
	context.strokeRect(30, 10, 60, 20);
	
	context.setTransform(1, 0, 0, 1, 40, 80);
	context.strokeStyle = "gray";
	context.strokeRect(30, 10, 60, 20);
}

function draw_0513(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	var context = canvas.getContext("2d");
	
	var oprtns = new Array(
		"source-atop",
		"source-in",
		"source-out",
		"source-over",
		"destination-atop",
		"destination-in",
		"destination-out",
		"destination-over",
		"lighter",
		"copy",
		"xor"
	);
	
	i=8;
	
	context.fillStyle = "blue";
	context.fillRect(10, 10, 60, 60);
	context.globalCompositeOperation = oprtns[i];
	context.beginPath();
	context.fillStyle = "red";
	context.arc(60, 60, 30, 0, Math.PI*2, false);
	context.fill();
	
	context.fillStyle = "black";
	context.font = "15px Arial";
	context.fillText(oprtns[i], 10, 110);
}

function draw_0514(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowColor = "rgba(100, 100, 100, 0.5)";
	context.shadowBlur = 7.5;
	context.translate(0, 50);
	for(var i=0; i<3; i++)
	{
		context.translate(50, 50);
		create5Star(context);
		context.fill();
	}
}

function draw_0515(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		for(var i=0; i<7; i++)
			context.drawImage(image, i*50, i*25, 100, 100);
	}
}

function draw_0516(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		context.drawImage(image, 0, 0, 100, 100);
		context.drawImage(image, 64, 0, 176, 210, 110, 0, 100, 100);
	}
}

function draw_0517(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		var scale = 5;
		var n1 = image.width/scale;
		var n2 = image.height/scale;
		var n3 = canvas.width/n1;
		var n4 = canvas.height/n2;
		for(var i=0; i<n3; i++)
			for(var j=0; j<n4; j++)
				context.drawImage(image, i*n1, j*n2, n1, n2);
	}
}

function draw_0518(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		var ptrn = context.createPattern(image, "repeat");
		context.fillStyle = ptrn;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
}

function draw_0519(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	var gr = context.createLinearGradient(0, 400, 300, 0);
	gr.addColorStop(0, "rgb(255, 255, 0)");
	gr.addColorStop(1, "rgb(0, 255, 255)");
	context.fillStyle = gr;
	context.fillRect(0, 0, 400, 300);
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		create5StarClip(context);
		context.drawImage(image, -50, -150, 300, 300);
	}
}
function create5StarClip(context)
{
	var n =0;
	var dx = 100;
	var dy = 0;
	var s = 150;
	
	context.beginPath();
	context.translate(100, 150);
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5*4;
	for(var i=0; i<5; i++)
	{
		var x = Math.sin(i*dig);
		var y = Math.cos(i*dig);
		context.lineTo(dx+x*s, dy+y*s);
	}
	context.clip();
}

function draw_0521(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	
	image = new Image();
	image.src = "../img/zzy.jpg";
	image.onload = function()
	{
		context.drawImage(image, 0, 0);
		var imagedata = context.getImageData(0, 0, image.width, image.height);
		for(var i=0, n=imagedata.data.length; i<n; i+=4)
		{
			imagedata.data[i] = 255 - imagedata.data[i];
			imagedata.data[i+1] = 255 - imagedata.data[i+1];
			imagedata.data[i+2] = 255 - imagedata.data[i+2];
		}
		context.putImageData(imagedata, 0, 0);
	}
}

function draw_0522(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	
	context.fillStyle = "#00f";
	context.font = "italic 30px sans-serif";
	context.textBaseline = "top";
	context.fillText("示例文字", 0, 0);
	context.font = "bold 30px sans--serif";
	context.strokeText("示例文字", 0, 50);
}

function draw_0523(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	
	context.font = "italic 20px sans-serif";
	var txt = "字符串的宽度为";
	var tm1 = context.measureText(txt);
	context.fillText(txt, 10, 30);
	context.fillText(tm1.width, tm1.width+10, 30);
	context.font = "bold 30px sans--serif";
	var tm2 = context.measureText(txt);
	context.fillText(txt, 10, 70);
	context.fillText(tm2.width, tm2.width+10, 70);
}

function draw_0524(id)
{
	var canvas = document.getElementById(id);
	if(canvas == null)
		return false;
	
	var context = canvas.getContext("2d");
	context.fillStyle = "rgb(0, 0, 255)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "rgb(255, 255, 0)";
	context.fillRect(10, 20, 50, 50);
	window.location = canvas.toDataURL("image/jpeg");
}

var globalId;
var i = 0;
function draw_0526(id)
{
	globalId = id;
	setInterval(Composite, 1000);
}
function Composite()
{
	var canvas = document.getElementById(globalId);
	if(canvas == null)
		return false;
	var context = canvas.getContext("2d");
	
	var oprtns = new Array(
		"source-atop",
		"source-in",
		"source-out",
		"source-over",
		"destination-atop",
		"destination-in",
		"destination-out",
		"destination-over",
		"lighter",
		"copy",
		"xor"
	);
	if(i>10) i=0;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();
	
	context.fillStyle = "blue";
	context.fillRect(10, 10, 60, 60);
	context.globalCompositeOperation = oprtns[i];
	context.beginPath();
	context.fillStyle = "red";
	context.arc(60, 60, 30, 0, Math.PI*2, false);
	context.fill();
	
//	context.fillStyle = "black";
//	context.font = "15px Arial";
//	context.fillText(oprtns[i], 10, 110);
	
	context.restore();
	i++;
}