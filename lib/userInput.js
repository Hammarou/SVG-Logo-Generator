const inquirer = require('inquirer');

// Use inquirer.default if necessary for compatibility
const prompt = inquirer.prompt || inquirer.default.prompt;

// Prompt the user for logo details
const promptUser = () => {
  return prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: (input) => input.length <= 3 || 'Text must be up to three characters long.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color for the text (e.g., color name or hex code):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for the logo:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color for the shape (e.g., color name or hex code):',
    },
  ]);
};

module.exports = promptUser;