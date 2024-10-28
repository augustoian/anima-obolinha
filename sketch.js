let cleber;
let joaquim;
let andaX;
let andaY;
let aleatorio1;
let rato;
  
function setup(){
  
  aleatorioE = color(random(0,255),random(0,255), random(0,255))
  
  createCanvas(800, 800)
  background(aleatorioE)
  andaX = [random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800)];
  andaY =[random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800), random(800)];

}

function draw() {
  fill(random(0,255),random(0,255),random(0,255))
  for(let contador in andaX){
    circle(andaX[contador] , andaY[contador] , random(50));
    andaX[contador]+= random(-20, 20);
    andaY[contador]+= random(-20, 20);
    
    if (andaX [contador] >= 800) {
      andaX[contador] = random(800)
      andaY[contador] = 0
      cor = color(random(0,255), random(0,255), random(0,255), random(0,255))
    }
    
  }
}