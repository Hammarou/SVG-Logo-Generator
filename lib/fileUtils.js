const fs = require('fs');

// Function to ensure that examples directory exists
const ensureExamplesDir = () => {
  if (!fs.existsSync('examples')) {
      fs.mkdirSync('examples');
  }
};

// Function to write the SVG content to a file
const writeSVGToFile = (path, svgContent) => {
    fs.writeFile(path, svgContent, (err) => {
        if (err) {
        console.error('Error writing the SVG file:', err);
        } else {
        console.log('Generated logo.svg');
        }
    });
};

module.exports = { ensureExamplesDir, writeSVGToFile };