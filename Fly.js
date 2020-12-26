class Fly extends Boing {
  
  constructor(h_boing, s_boing, t, h_ball, w_ball, color_ball, r1, r2) {
    super(h_boing, s_boing, t, h_ball, w_ball, color_ball);
    this.r1 = r1;
    this.r2 = r2;
  }
  
  display_fly() {
    fill(this.color_ball);
    ellipse(this.r1*cos(this.t), this.r2*sin(this.t)+ this.boing, this.w_ball, this.h_ball); 
  }
  
  fly_shadow(shadow_height) {
    translate(0, shadow_height);
    fill(77,27,123);
    ellipse((this.r1+0.7*this.boing)*cos(this.t), (this.r2+0.7*this.boing)*sin(this.t), this.w_ball*0.7, this.h_ball*0.7);
    translate(0, -shadow_height);
  }
  
}