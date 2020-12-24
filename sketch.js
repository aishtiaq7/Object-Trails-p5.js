class Particle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 25;

        this.gravity = 0.1;
        this.fac = random(0.3,1); //velocity reduction per bounce: 1 is no reduction

 
        this.maxSpeed = random(-4,4);
        this.speedX = this.maxSpeed;
        this.speedY = 0;

        //colors
        this.colorR = random(0,255);
        this.colorG = random(0,255);
        this.colorB = random(0,255);
    }

    update(){

        // x - boundaries
        if (this.x>= width){
            this.speedX *= -1;
            this.x = width;
        } else if( this.x <=0){
            this.speedX *= -1;
            this.x = 0;
        } 

        // y - boundaries
        if ((this.y) >= height){
            this.speedY *= -this.fac;
            // this.speedY *= -1;

            this.y = height;
        } else if( this.y <=0){
            this.speedY *= -1;
            this.y = 0;
        } 
        

        //updating position:
        this.x += this.speedX;

        this.speedY += this.gravity;
        this.y += this.speedY;
    }

    show(){

        fill(this.colorR,this.colorG,this.colorB);
        ellipse(this.x,this.y,this.r,this.r);
    }
}
// ******************************************************

var particles =[]; 
function setup() {
    createCanvas(400, 400);

    particles.push(new Particle(30, 100));
}

function draw() {
    background(0, 0, 0);
    
    if(mouseIsPressed){
        particles.push(new Particle(mouseX, mouseY));
    }
    
    particles.forEach(particle =>{
        particle.update();
        particle.show();
    })


}