// Game Engines 20.06.2025

let KEY_SPACE = false;// 32
let KEY_UP  = false;// 38
let KEY_DOWN = false;// 40
let canvas;
let ctx; 
let backgroundImage = new Image();





let rocket ={
    x: 50,
    y: 200,
    width: 150,
    height:100,
    src:"./img/rocket.png"
};

let ufos =[];

let shots =[];

function startGame(){
    canvas  = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    loadImges();
    setInterval(update, 1000 / 25);
    setInterval(createUfos, 5000);
    setInterval(checkForCollion, 1000 / 25);
    setInterval(updateShot, 1000 / 10  );
    draw();

}
function updateShot(){
if (KEY_SPACE) {
                let shot = {
                    x: rocket.x + 150 ,
                    y: rocket.y + 45 ,
                    width: 25   ,
                    height: 8 ,
                    src: 'img/shot.png',
                    img: new Image()
                };
                shot.img.src = shot.src; 

                shots.push(shot);
            }
        }

    //cal

    function checkForCollion(){
        ufos.forEach(function(ufo){
            if (rocket.x + rocket.width > ufo.x && 
                rocket.y + rocket.height > ufo.y && 
                rocket.x < ufo.x && 
                rocket.y < ufo.y + ufo.height
            ){
                rocket.img.src="./img/boom.png";
                console.log("collion!!!");
                ufos = ufos.filter(u => u != ufo);
                 setTimeout(() =>{
                    location.reload();
                 }, 1000)
            }
   
    shots.forEach(function(shot){
            if (shot.x + shot.width > ufo.x && 
                shot.y + shot.height > ufo.y && 
                shot.x < ufo.x && 
                shot.y < ufo.y + ufo.height
            ){
                ufo.hit = true;
                ufo.img.src="./img/boom.png";
                console.log("collion!!!");
               setTimeout(() => {
                            ufos = ufos.filter(u => u != ufo);
                        }, 2000);
                    }
                
            
    });
     });
    }


function createUfos(){
let ufo ={
    x: 1300,
    y: Math.random() * 500    ,
    width: 120,
    height:60,
    src:"./img/ofu.png",
    img: new Image()
};
ufo.img.src = ufo.src;
 ufos.push(ufo);   
}

function update(){
if(KEY_UP){
rocket.y -= 4; 

}

if(KEY_DOWN){
rocket.y += 4;

}
 ufos.forEach(function(ufo) {
                if (!ufo.hit) {
                    ufo.x -= 5;
                }
            });


shots.forEach(function(shot) {
                shot.x += 50;
            });
        
        }
function loadImges(){

    backgroundImage.src= "./img/background.png";
    rocket.img = new Image();
    rocket.img.src = rocket.src;




}

function draw(){
    ctx.drawImage(backgroundImage,0,0);
    ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height);
    
    ufos.forEach(function(ufo){
        ctx.drawImage(ufo.img, ufo.x, ufo.y, ufo.width, ufo.height);
    });

    shots.forEach(function(shot){
        ctx.drawImage(shot.img, shot.x, shot.y, shot.width, shot.height );
    });

    requestAnimationFrame(draw);
}



document.onkeydown = function(e){

    if(e.keyCode == 32){ // Nach unten getrückt
        KEY_SPACE = true; 


    };

    if(e.keyCode == 38){ // Nach unten getrückt
        KEY_UP = true;


    };

    if(e.keyCode == 40){ // Nach unten getrückt
        KEY_DOWN = true;


    };
}

document.onkeyup = function(e){

    if(e.keyCode == 32){ // Nach oben losgelassen
        KEY_SPACE = false;


    };

    if(e.keyCode == 38){  // Nach oben losgelassen
        KEY_UP = false;


    };

    if(e.keyCode == 40){  // Nach oben losgelassen
        KEY_DOWN = false;


    };

}

