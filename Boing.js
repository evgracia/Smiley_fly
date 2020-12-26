class Boing {
  
  constructor(h_boing, s_boing, t0, h_ball, w_ball, color_ball) {
    this.h_boing = h_boing;
    this.s_boing = s_boing;
    this.boing =  h_boing * sin(s_boing * t0);
    this.t = t0;
    this.w_ball = w_ball;
    this.h_ball = h_ball;
    this.color_ball = color_ball;
    this.mouseY_pos = max(0, min (mouseY, height));
    this.mouseX_pos = max(0, min (mouseX, width));
  }
  
  update(speed) {
    this.boing = this.h_boing * sin(this.s_boing * this.t); 
    this.t += speed;
    this.mouseY_pos = max(0, min (mouseY, height));
    this.mouseX_pos = max(0, min (mouseX, width));
  }
  
  display() {
    noStroke();
    fill(this.color_ball);
    ellipse(0, 0 + this.boing, this.w_ball, this.h_ball);
  }
}