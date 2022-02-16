const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score'); 
const blockWidth = 100;//based on css .block width/height
const blockHeight = 20;//based on css .block width/height
const ballDiameter = 20; //assigned in css
const boardWidth = 560;
const boardHeight = 300; //set in css
let timerId
let xDirection = -2;
let yDirection = 2;

const userStart = [230, 10];//assign start position of user bar
let currentPosition = userStart;

const ballStart = [270,40];//assign start position of ball
let ballCurrentPosition = ballStart;

//Construct block

class Block {
    constructor(xAxis, yAxis) { //bottom left of block 
        this.bottomLeft =  [xAxis, yAxis];//blocks anchor point
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//All blocks

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
  ]

//Draw my block

function addBlocks() {
for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div');
    block.classList.add('block');//give block of classlist block
    block.style.left = blocks[i].bottomLeft[0] + 'px'; //get x-axis & assign to left at index 0 position
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block)//put style of block onto grid
    console.log(blocks[i].bottomLeft);
        }
}
addBlocks();

//Draw my ball

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

//Add user

const user = document.createElement('div')
user.classList.add('user');
drawUser()
grid.appendChild(user)

//Draw user

function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px' // go into current position, get 2nd value & add px
}

//Move user
function moveUser(e) {
    switch(e.key) { //listen for arrow R+L
        case 'ArrowLeft': //take away from x-axis current position
            if(currentPosition[0] > 0) { //if statement to prevent platform from going offscreen. 0 is the left border start point
                 currentPosition[0] -= 10 //take away 10 from value on each keydown left evemt
                user.style.left = currentPosition[0] + 'px' //reassign value
                 drawUser();
            }
            break;

            case 'ArrowRight':
                if(currentPosition[0] < boardWidth - blockWidth) {
                    currentPosition[0] += 10;
                    drawUser();
                }
            break;
    }
}

document.addEventListener('keydown', moveUser);

//Create ball

const ball = document.createElement('div');
ball.classList.add('ball');//create class of ball in JS and style it in css
ball.style.left = ballCurrentPosition[0] + 'px';
ball.style.bottom = ballCurrentPosition[1] + 'px';
grid.appendChild(ball);//put child, ball, into parent, grid
drawBall()

//Move ball

function moveBall() {
    ballCurrentPosition[0] += xDirection //make it move along x-axis by 2, store value in let statement above
    ballCurrentPosition[1] += yDirection //make it move along y-axis
    drawBall()
    checkForCollisions() //ever 30m/s, check for collisions
}

//Make ball change direction when it hits walls of the grid
timerId = setInterval(moveBall, 30);

// check for collisions
function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++){
        if
        (
          (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
          ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
        )//if ball's x axis is larger than blocks, check bottom left's x-axis 
        {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block') //get all blocks, go to wherever [i] is as we are looping. Remove the block we hit
            blocks.splice(i, 1); //removing class is different from removing from array we have it in
            changeDirection(); //after removing a block
        }
    }


    //check for wall collisions
    if(ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
    ballCurrentPosition[0] <= 0 
    ) {//account for ball width by subtracting diameter. if smaller than means ball is off the grid 
        changeDirection()
    }

//check for game over

if(ballCurrentPosition[1] <= 0) //[1] refers to y axis 
    { clearInterval(timerId)
       scoreDisplay.innerHTML = 'You Lose!'
       document.removeEventListener('keydown', moveUser)
    }
}

function changeDirection() {
    if(xDirection === 2 && yDirection === 2) {//on collision
        yDirection = -2 // - to move in opp. direction
        return
    }

    if(xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return
    }

    if (xDirection === -2 && yDirection === -2){
    yDirection = 2;
    return;
    }

    if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
    }
}




