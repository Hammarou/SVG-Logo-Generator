// Import required packages
const promptUser = require('./lib/userInput.js');
const generateSVG = require('./lib/svg.js');
const { ensureExamplesDir, writeSVGToFile } = require('./lib/fileUtils.js');


// Main function to run the application
const run = async () => {
  try {
    const answers = await promptUser();
    const svgContent = generateSVG(answers);
    ensureExamplesDir();
    writeSVGToFile('examples/logo.svg', svgContent);
  } catch (err) {
    console.error('Error:', err);
  }
};

// Ensure the script runs when executed directly
if (require.main === module) {
    run();
}