class Head extends Boing {
  

  constructor(h_boing, s_boing, t, h_ball, w_ball, color_ball) {
    super(h_boing, s_boing, t, h_ball, w_ball, color_ball);
  }
 
  display_eyes() {
     fill(0); 
     this.ojoX = map(this.mouseX_pos, 0, width, -this.w_ball/9, this.w_ball/9);
     this.ojoY = map(this.mouseY_pos, 0, height, -this.h_ball/9, this.h_ball/9);
     translate(-this.w_ball/4, -this.h_ball/4);
     ellipse(this.ojoX, this.ojoY+this.boing, this.w_ball/9, (this.h_ball/10) *(1 +float(this.mouseY_pos/height))); 
     translate(this.w_ball/4, this.h_ball/4);
     translate(this.w_ball/4, -this.h_ball/4);
     ellipse(this.ojoX, this.ojoY+this.boing, this.w_ball/9, (this.h_ball/10) * (1 +float(this.mouseY_pos/height))); 
     translate(-this.w_ball/4, this.h_ball/4);
  }
  
  display_mouth() {
    this.ojoX = map(this.mouseX_pos, 0, width, -this.w_ball/9, this.w_ball/9);
    this.ojoY = map(this.mouseY_pos, 0, height, -this.h_ball/9, this.h_ball/9);
    translate(0, -this.h_ball/7);
    arc(1.3 * this.ojoX, this.ojoY + this.boing, 15, 10*(1 +float(this.mouseY_pos)/height), 
      radians(180),radians(360));
    translate(0, this.h_ball/7);
  }
  
  display_head() {
    this.display();
    this.display_eyes();
    this.display_mouth();
  }
  
  head_shadow(shadow_height) {
    translate(0, shadow_height);
    fill(77,27,123);
    ellipse(0, 0, this.w_ball*0.75 + this.boing, this.h_ball/8 + this.boing *0.3);
    translate(0, -shadow_height);
  }

}