let speed = 0.1;
let num_image = 0;
let name;

let ball;

let smiley;

let my_fly;
let r1 = 100;
let r2 = 30;


function setup() {

  createCanvas(400, 400);
  let red = color (255, 0, 0);
  let yellow = color(240,224,70);
  let black = color (0);
  
  // ball = new Boing(3, 2, 0, 150, 150, red); 
  smiley = new Head(5, 1, 0, 150, 150, yellow);
  my_fly = new Fly(7, 5, 0, 10, 20, black, r1, r2);
}

function draw() {
  background(230);
  translate(width/2, height/2);

  
  //ball.update(speed);
  //ball.display();
  
  smiley.update(speed);
  smiley.display_head();
  
  translate(0, -130);
  
  my_fly.update(speed);
  my_fly.display_fly();
  
  translate(0, 300);
  
  
  
  rectMode(CENTER);
  fill(199,157,215);
  rect(0, 0, width, height/4);
  
  smiley.head_shadow(0);
  my_fly.fly_shadow(0);
}