var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,0,0,0,0,0,0,0,0,1,1,1,2,0,0,0,0,0,0,0,0,0,2,1],
    [1,2,2,0,0,0,2,2,1,1,0,1,1,1,0,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,1,1,1,2,2,1,1,0,0,1,1,0,1,1,1,1,2,1,1,1,1,2,1],
    [1,2,2,1,1,1,2,2,1,1,1,0,0,2,0,1,1,1,1,2,2,1,1,1,2,1],
    [1,2,2,1,3,2,2,2,3,0,2,1,1,1,1,1,1,1,1,1,3,1,1,1,2,1],
    [1,2,2,1,0,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1],
    [1,2,2,1,0,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,2,1],
    [1,2,2,1,0,2,2,2,1,1,1,1,2,1,1,1,1,1,1,1,0,1,1,1,2,1],
    [1,2,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,1,2,1],
    [1,2,2,1,1,1,1,2,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,2,1],
    [1,2,2,1,1,1,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,2,1],
    [1,2,2,1,1,1,1,2,1,1,1,1,1,2,2,1,1,0,1,1,1,1,0,1,2,1],
    [1,2,2,1,1,1,2,2,1,1,1,1,1,2,2,1,1,0,1,1,1,1,0,1,2,1],
    [1,2,2,1,1,1,0,3,1,1,1,1,1,2,2,1,1,0,1,1,1,1,0,1,2,1],
    [1,2,2,1,1,1,0,0,1,1,1,1,1,2,2,0,0,0,1,2,2,2,0,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0,1,2,1,1,1,1,2,1],
    [1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,0,1,2,1,1,1,1,2,1],
    [1,2,2,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var worldDict ={
    0: 'empty',
    1: 'brick',
    2: "coin",
    3: "cherry"
}

var pacman ={
    x: 1,
    y: 1,
}

var ghost ={
    x: 20,
    y: 9,
}

var ghost2={
    x: 12,
    y: 9,
}

var score = 0;

function displayWorld(){
    output = "";
    for(var row=0; row < world.length; row++){
        output += "<div class='row' style='height:20px'>"
        for(var x=0; x<world[row].length; x++){
            output += "<div class='"+worldDict[world[row][x]]+"'></div>"
        }
        output +="</div>"
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20 +'px';
    document.getElementById('pacman').style.top = pacman.y*20 +'px';
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayGhost(){
    document.getElementById('ghost').style.left = ghost.x*20 +'px';
    document.getElementById('ghost').style.top = ghost.y*20 +'px';
}
function displayGhost2(){
    document.getElementById('ghost2').style.left = ghost2.x*20 +'px';
    document.getElementById('ghost2').style.top = ghost2.y*20 +'px';
}


displayWorld();
displayPacman();
displayScore();
displayGhost();
displayGhost2();

document.onkeydown = function(e){
    if(e.keyCode==37){// LEFT
        if(world[pacman.y][pacman.x-1] !==1){
            document.getElementById('pacman').style.transform ="rotate(180deg)"
            pacman.x --;
        } 
        
    }
    if(e.keyCode == 39) { // RIGHT
        if(world[pacman.y][pacman.x+1] !==1){
        document.getElementById('pacman').style.transform ="rotate(360deg)"
        pacman.x ++;
        }
    }
    if(e.keyCode == 38) { // UP
        if(world[pacman.y-1][pacman.x]!==1){
            document.getElementById('pacman').style.transform ="rotate(-90deg)"
            pacman.y --;
        }
    }
    else if(e.keyCode == 40) { // DOWN
        if(world[pacman.y+1][pacman.x]!==1){
            document.getElementById('pacman').style.transform ="rotate(90deg)"
            pacman.y ++;
        }
    }
    if(world[pacman.y][pacman.x] == 2){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }
    if(world[pacman.y] == world[ghost.y] && world[pacman.x] == world[ghost.x] || world[pacman.y] == world[ghost2.y] && world[pacman.x] == world[ghost2.x] ){
        document.getElementById('pacman').style.backgroundImage= "url(explosion.gif)";
        alert('gameover!');
        displayWorld();
    }
    displayPacman();
}

function moveGhost(){
    if(pacman.x !== ghost.x && pacman.y !== ghost.y){
        if(pacman.y < ghost.y){
            if(world[ghost.y-1][ghost.x] !==1){
                ghost.y--;
                }
            else{
                if(world[ghost.y][ghost.x-1] !==1){
                    ghost.x--;
                }
                else if(world[ghost.y][ghost.x+1] !==1){
                    ghost.x++;
                }
            }
        }
        if(pacman.y > ghost.y){
            if(world[ghost.y+1][ghost.x] !==1){
                ghost.y++;
                }
            else{
                if(world[ghost.y][ghost.x-1] !==1){
                    ghost.x--;
                }
                else if(world[ghost.y][ghost.x+1] !==1){
                    ghost.x++;
                }
            }
        }
    }
    else if(pacman.y == ghost.y){
        if(pacman.x>ghost.x){
            if(world[ghost.y][ghost.x+1] !==1){
                ghost.x++;
            }
            else if(world[ghost.y+1][ghost.x-1]==1){
                
            }
        }
        if(pacman.x<ghost.x){
            if(world[ghost.y][ghost.x-1] !==1){
                ghost.x--;
            }
            else if(world[ghost.y][ghost.x-1]==1){
                if(world[ghost.y-1][ghost.x]==1){
                    ghost.y++;
                }
                else if(world[ghost.y+1][ghost.x]==1){
                    ghost.y--;
                }
            }
        }
    }
    else if(pacman.x==ghost.x){
        if(pacman.y>ghost.y){
            if(world[ghost.y+1][ghost.x] !==1){
                ghost.y++;
            }
            else if(world[ghost.y+1][ghost.x-1]==1){
                
            }
        }
        if(pacman.y<ghost.y){
            if(world[ghost.y-1][ghost.x] !==1){
                ghost.y--;
            }
            else if(world[ghost.y][ghost.x-1]==1){
                if(world[ghost.y][ghost.x-1]==1){
                    ghost.x++;
                }
                else if(world[ghost.y][ghost.x+1]==1){
                    ghost.x--;
                }
            }
        }
    }
    if(world[pacman.y] == world[ghost.y] && world[pacman.x] == world[ghost.x]){
        document.getElementById('pacman').style.backgroundImage= "url(explosion.gif)";
        alert('gameover!');
        displayWorld();
    }
        displayGhost();
}
function moveGhost2(){
    if(pacman.x !== ghost2.x && pacman.y !== ghost2.y){
        if(pacman.y < ghost2.y){
            if(world[ghost2.y-1][ghost2.x] !==1){
                ghost2.y--;
                }
            else{
                if(world[ghost2.y][ghost2.x-1] !==1){
                    ghost2.x--;
                }
                else if(world[ghost2.y][ghost2.x+1] !==1){
                    ghost2.x++;
                }
            }
        }
        if(pacman.y > ghost2.y){
            if(world[ghost2.y+1][ghost2.x] !==1){
                ghost2.y++;
                }
            else{
                if(world[ghost2.y][ghost2.x-1] !==1){
                    ghost2.x--;
                }
                else if(world[ghost2.y][ghost2.x+1] !==1){
                    ghost2.x++;
                }
            }
        }
    }
    else if(pacman.y == ghost2.y){
        if(pacman.x>ghost2.x){
            if(world[ghost2.y][ghost2.x+1] !==1){
                ghost2.x++;
            }
            else if(world[ghost2.y+1][ghost2.x-1]==1){
                
            }
        }
        if(pacman.x<ghost2.x){
            if(world[ghost2.y][ghost2.x-1] !==1){
                ghost2.x--;
            }
            else if(world[ghost2.y][ghost2.x-1]==1){
                if(world[ghost2.y-1][ghost2.x]==1){
                    ghost2.y++;
                }
                else if(world[ghost2.y+1][ghost2.x]==1){
                    ghost2.y--;
                }
            }
        }
    }
    else if(pacman.x==ghost2.x){
        if(pacman.y>ghost2.y){
            if(world[ghost2.y+1][ghost2.x] !==1){
                ghost2.y++;
            }
            else if(world[ghost2.y+1][ghost2.x-1]==1){
                
            }
        }
        if(pacman.y<ghost2.y){
            if(world[ghost2.y-1][ghost2.x] !==1){
                ghost2.y--;
            }
            else if(world[ghost2.y][ghost2.x-1]==1){
                if(world[ghost2.y][ghost2.x-1]==1){
                    ghost2.x++;
                }
                else if(world[ghost2.y][ghost2.x+1]==1){
                    ghost2.x--;
                }
            }
        }
    }
    if(world[pacman.y] == world[ghost2.y] && world[pacman.x] == world[ghost2.x] ){
        document.getElementById('pacman').style.backgroundImage= "url(explosion.gif)";
        alert('gameover!');
        displayWorld();
    }
        displayGhost2();
}

function gameLoop(){
    console.log("loop is running");
    moveGhost();
    displayGhost();
    moveGhost2();
    displayGhost2();
    displayPacman();
    displayScore();
    setTimeout(gameLoop, 700);
}

gameLoop();