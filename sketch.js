const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    log6 = new Log(230,180,80, PI/2);
    chain = new Chain(bird.body,log6.body);
}

function draw(){
    background(0);
    fill ("white");
    textSize (30);
    text("SCORE:"+score,500,50);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    log1.score();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    pig3.display();
    pig3.score();
    log3.display();
    log3.score();

    box5.display();
    box5.score();
    log4.display();
    log4.score();
    log5.display();
    log5.score();

    bird.display();
    platform.display();
    log6.display();
    chain.display();  

    
}
