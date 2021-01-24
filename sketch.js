const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine,myWorld;
var particle = [];
var plinko1 = [];
var division1 = [];
var ground;

function setup(){
    createCanvas(480,700);

    ellipseMode(RADIUS);
    rectMode(CENTER);
    
    myEngine = Engine.create();
    myWorld = myEngine.world;

   // particle = new Particles(240,10,6);

    for (var i = 30; i<480; i = i + 30){
        for(var j = 50; j< 350; j = j +50){
            plinko1.push(new plinko(i,j,6));
        }
    }

    for(var j = 0; j< 480; j = j +80){
        division1.push(new divisions(j,600,5,200));
    }

    ground = new divisions(240,697,480,5);

}

function draw(){
    background(0);

    Engine.update(myEngine);

    if(frameCount%60 === 0){
       particle.push(new Particles(random(200,300),10,6));
    }

    for (var i = 0; i<particle.length; i = i + 1){
        particle[i].display();
}      

    //particle.display();

    for (var i = 0; i<plinko1.length; i = i + 1){
            plinko1[i].display();
    }

    for (var i = 0; i<division1.length; i = i + 1){
        division1[i].display();
    }

    ground.display();
    
}