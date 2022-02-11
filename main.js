const grid = document.querySelector('.grid');
const blockWidth = 100;//based on css .block width/height
const blockHeight = 20;//based on css .block width/height

//Construct block

class Block {
    constructor(xAxis, yAxis) { //bottom left of block 
        this.bottomLeft =  [xAxis, yAxis];//blocks anchor point
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

//All blocks

const blocks = [
    new Block(10, 270);
]

//Draw my block

for (let i = 0; i < blocks.length; i++) {
    function addBlocks() {
const block = document.createElement('div');
block.classList.add('block');//give block of classlist block
block.style.left = blocks[i].bottomLeft[0]; //get x-axis & assign to left at index 0 position
block.style.bottom = '50px';
grid.appendChild(block)//put style of block onto grid
    }
}

addBlocks();
