const grid = document.querySelector('.grid');
const blockWidth = 100;//based on css .block width/height
const blockHeight = 20;//based on css .block width/height

//Construct block

class Block {
    constructor(xAxis, yAxis) { //bottom left of block 
        this.bottomLeft =  [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
}
}


//Draw my block
function addBlock() {
const block = document.createElement('div');
block.classList.add('block');//give block of classlist block
block.style.left = '100px';
block.style.bottom = '50px';
grid.appendChild(block)//put style of block onto grid
}

addBlock();
