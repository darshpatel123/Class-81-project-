canvas= document.getElementById("m_can");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth = 5;
ctx.arc(300,300,60,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth = 5;
ctx.arc(430,300,60,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth = 5;
ctx.arc(560,300,60,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth = 5;
ctx.arc(500,370,60,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth = 5;
ctx.arc(364,370,60,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="grey";
ctx.lineWidth = 3;
ctx.rect(150,143,600,400);
ctx.stroke();