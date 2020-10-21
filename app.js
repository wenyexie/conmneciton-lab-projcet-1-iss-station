var x = [];
var dx;
var vx = [];
var fx;
var y = [];
var dy;
var vy = [];
var fy;
var m = [];
var dt; 
var N;
var I;
var r;

function setup() {  
  createCanvas(1600, 400);
  N=1000;
  I=1;
  dt = 0.001;
  for (var i=0;i<N; i++){
  x[i] = random(1,200);
  x[0]=200;
  dx = 0;
  fx=0;
  vx[i] = random(-1,1);
  y[i] = random(1,200);
  y[0]=200;
  dy = 0;
  fy=0;
  vy[i] = random(-1,1);
  m[i] = random(5,20);
  m[0]=10;
  r=0;
  }
}

function draw() {
  
background(0,0,0,5);
// fill(0,0,255,255);
// text("Particle System under Gravitational Attraction",100,50);
// fill(255,0,0,255);
// text("Click to add new mass and follow dynamics",100,70);
// fill(0,255,0,255);
// text("Try to figure out what is going on in the code",100,90);
// text("Click Cosmos to see code and run code",100,110);
//Compute gravitational forces according to Newton
for (var i=0; i<I; i++) {
 fx=0;
 fy=0;
for (var j=0; j<I; j++) {
  dx = x[i]-x[j];
  dy = y[i]-y[j];
  r = pow(dx,2)+pow(dy,2);
  r =sqrt(r);
  fx = fx - m[i]*m[j]*1000000*dx/pow(r+10,3);
  fy = fy - m[i]*m[j]*1000000*dy/pow(r+10,3);
}
//update velocities
vx[i]=vx[i]+fx*dt/m[i];
vy[i]=vy[i]+fy*dt/m[i];
//reflect at walls
if(x[i] <= 0 || x[i] >= 400)
	vx[i] = -vx[i];
if(y[i] <= 0 || y[i] >= 400)
	vy[i] = -vy[i];
//update positiions
x[i]=x[i]+vx[i]*dt;
y[i]=y[i]+vy[i]*dt;
//fill((20*i) % 255 + 40,(40*i) % 255 + 40,(255-20*i) % 255 + 40);

fill(random(0,255),random(0,255),random(0,255),255);
noStroke();
//plot with certain trace
ellipse(x[i],y[i],m[i],m[i]);
}
}
//add celestial bodies
function mousePressed() {
  x[I]=mouseX;
  y[I]=mouseY;
  I=I+1
}
