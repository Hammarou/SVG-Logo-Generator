const { Circle, Triangle, Square } = require('./shapes.js');

// Function to generate the SVG content based on user input
const generateSVG = ({ text, textColor, shape, shapeColor }) => {
    let shapeObj = null;
    let textX = 150;
    let textY = 120;
    let fontSize = 70;
    
    // Create the shape based on user selection
    switch (shape) {
      case 'Circle':
        shapeObj = new Circle();
        break;
      case 'Triangle':
        shapeObj = new Triangle();
        textY = 150;
        fontSize = 60;
        break;
      case 'Square':
        shapeObj = new Square();
        break;
    }

    shapeObj.setColor(shapeColor);
  
    // Return the complete SVG string
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeObj.render()}
        <text x="${textX}" y="${textY}" font-size="${fontSize}" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
};

module.exports = generateSVG;