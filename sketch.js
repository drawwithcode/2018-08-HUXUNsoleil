
var myCuteBall;
var Ms;
var My;
var balls = [];
var colors = [
  '#D0104C',
  '#DB4D6D',
  '#EEA9A9',
  '#AB3B3A',
  '#E83015',
  '#F17C67',
  '##FCFAF2',
  '#FFFFFB',
  '#F596AA'
];
var value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
   frameRate(60);

  // by defaults equals to 30
  setShakeThreshold(10);
  frameRate(12);
}
function Ball(_x, _y) {
  this.size = 10;
  this.x = _x;
  this.y = _y;
  this.color =  color(random(colors));
  this.speed1 = 2;
  this.speed1 = 1;
  // Methods
  var yDir = 1;
  var xDir = 1;

  this.move = function() {
      this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }
  this.display = function() {
     fill(this.color);
      noStroke();
     ellipse(this.x, this.y, this.size);
   }

 }

function draw() {
  background(value);

  for (var j = 0; j < value; j++) {

    balls[j].move();
    balls[j].display();

  }
}

function deviceShaken() {
  value = value + 1;

     for (var i = 0; i < value; i++) {

       var myBall = new Ball(windowWidth/2, windowHeight/2, 10);
       myBall.speed1 = random(-1, 1);
       myBall.speed2 = random(-1, 1);
       balls.push(myBall);
     }
  if (value > 255) {
    value = 0;
  }
}
