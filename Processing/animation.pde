color red = color (255, 0, 0);
color yellow = color(240,224,70);
color black = color (0);

float speed = 0.1;
int num_image = 0;
String name;

Boing ball;

Head smiley;

Fly my_fly;
int r1 = 100;
int r2 = 30;

void setup() {
  size(400, 400);
  ball = new Boing(3, 2, 0, 100, 100, red); 
  smiley = new Head(5, 1, 0, 150, 150, yellow);
  my_fly = new Fly(7, 5, 0, 10, 20, black, r1, r2);
}

void draw() {
  translate(width/2, height/2);
  background(230);
  
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


void mousePressed() {
  name = "image" + num_image + ".jpg";
  save(name);
  //saveFrame("image-###.jpg");
  num_image++;
}
