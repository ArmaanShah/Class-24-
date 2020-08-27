const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log,log2,box2,box3,box4,box5,pig2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,380,50,50);
    box2 = new Box(1100,380,50,50);
    box3 = new Box(1100,335,50,50);
    box4 = new Box(900,335,50,50);
    box5 = new Box(1000,270,50,50);


    ground = new Ground(600,390,1200,20)
    pig= new Pig (1000,380);
    log= new Log (1000,355,250,PI/2);
    log2= new Log (1000,305,250,PI/2);
    log3= new Log (1050,220,150,-PI/4);//right
    log4= new Log (950,220,150,PI/4);//left

    bird= new Bird (200,100);


    pig2= new Pig (1000,335)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();

    
}