const grid = document.querySelector('.grid');
const blockWidth = 100;//based on css .block width/height
const blockHeight = 20;//based on css .block width/height
const boardWidth = 560;
const userStart = [230, 10]
let currentPosition = userStart

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

document.addEventListener('keydown', moveUser)
