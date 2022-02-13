const grid = document.querySelector('.grid');
const blockWidth = 100;//based on css .block width/height
const blockHeight = 20;//based on css .block width/height

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
grid.appendChild(user)
