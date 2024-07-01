// variáveis da bolinha
let xBolinha= 300;
let yBolinha= 200;
let diametro= 30;
let raio = diametro / 2;

// variáveis da velocidade
let velocidadexBolinha =6;
let velocidadeyBolinha =6;

//variáveis da MinhaRaquete
let xMinhaRaquete = 20;
let yMinhaRaquete = 150;
let larguraMinhaRaquete =10;
let alturaMinhaRaquete = 100;

// Função da dimenção do fundo
function setup() {
  createCanvas(600, 400);
}

// Função desenhar
function draw() {
  background(0);
bolinha ()
  MinhaRaquete();
}

// Função da bolinha 
function bolinha () { 
circle (xBolinha, yBolinha, diametro)
 xBolinha += velocidadexBolinha;
 yBolinha += velocidadeyBolinha; 
if (xBolinha + raio > width || xBolinha - raio < 0){ 
  velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){ 
  velocidadeyBolinha *= -1;
  }
}

//Função da Raquete
 function MinhaRaquete(){
   rect(xMinhaRaquete, yMinhaRaquete, larguraMinhaRaquete, alturaMinhaRaquete );
   if(keyIsDown(UP_ARROW)){
     yMinhaRaquete-= 10
   }
   if(keyIsDown(DOWN_ARROW)){
     yMinhaRaquete+= 10
   }
 }