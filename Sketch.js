const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plataforma, solo1;
var caixa1, caixa2, caixa3, caixa4, caixa5;
var porco1, porco2;
var tronco1, tronco2, tronco3, tronco4;
var bird1, estilingue;
var dia;
var estadoJogo = "estilingue"
var bg, bgImg
var Points = 0
var restart




function preload() {
  dia = loadImage("sprites/bg.png");
  getTime();
  
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  plataforma = new Solo(150, 305, 300, 170);
  solo1 = new Solo(width / 2, height, width, 20);

  //primeira camada
  caixa1 = new Caixa(700, 320, 70, 70);
  caixa2 = new Caixa(920, 320, 70, 70);
  porco1 = new Porco(810, 320);
  tronco1 = new Tronco(810, 260, 300, PI / 2);

  //segunda camada
  caixa3 = new Caixa(700, 240, 70, 70);
  caixa4 = new Caixa(920, 240, 70, 70);
  porco2 = new Porco(810, 240);
  tronco2 = new Tronco(810, 180, 300, PI / 2);

  //terceira camada
  caixa5 = new Caixa(810, 160, 70, 70);
  tronco3 = new Tronco(760, 120, 160, PI / 4);
  tronco4 = new Tronco(880, 120, 160, -PI / 4);

  bird1 = new Passaro(207, 45);
  estilingue = new Estilingue(bird1.body, { x: 207, y: 45 });

  Engine.run(engine);

  restart = createImg("sprites/menu_refresh.png");
  restart.position(20,20)
  restart.mouseClicked(kill);

}

function draw() {
  if (bgImg) {
    background(bgImg);
  } else {
    background(dia);
  }
  
  push()
  noStroke()
  textSize(35)
  fill(255, 255, 0)
  text("PONTOS: " + Points, 850, 30)
  pop()
  plataforma.display();
  solo1.display();

  caixa1.display();
  caixa2.display();
  porco1.display();
  tronco1.display();

  caixa3.display();
  caixa4.display();
  porco2.display();
  tronco2.display();

  caixa5.display();
  tronco3.display();
  tronco4.display();

  estilingue.display();
  bird1.display();
  porco1.pontos();
  porco2.pontos();
  
}
function mouseDragged() {
  if (estadoJogo === "estilingue") {
    Matter.Body.setPosition(bird1.body, { x: mouseX, y: mouseY });
  }



}
function mouseReleased() {
  estadoJogo = "lancado"
  estilingue.launch();

}
function keyPressed() {
  if (keyCode === 32 && bird1.body.speed <3||bird1.body.position.x > 1200&& keyCode === 32) {
    Matter.Body.setPosition(bird1.body,{x:207,y:45})
    estilingue.ligar();
    estadoJogo = "estilingue"
    bird1.tragetory=[]
    
  }

}
async function getTime() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_paulo")
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13)
  if (hour > 6 && hour < 18) {
    bg = "sprites/bg.png"
  } else {
    bg = "sprites/bg2.jpg"
  }
  bgImg = loadImage(bg)
  console.log(bgImg)

}

function kill(){
  document.location.reload(true)


}



