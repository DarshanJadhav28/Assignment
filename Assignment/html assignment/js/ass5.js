var cir=document.querySelector('canvas').getContext('2d');

cir.fillStyle="yellow";


cir.beginPath();
cir.arc(75,75,50,0,Math.PI*2,true);
cir.fill();
cir.moveTo(110,75);
cir.arc(75,75,35,0,Math.PI,false);
cir.moveTo(65,65);
cir.strokeStyle="black";
cir.stroke();
cir.closePath();
cir.beginPath();
cir.fillStyle="black";
cir.arc(65,70,5,0,Math.PI * 2,true);
cir.fill();
cir.moveTo(95,65);
cir.arc(90,65,5,0,Math.PI*2,true);
cir.fill();
cir.stroke();
cir.closePath();