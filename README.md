# SVG Logo Generator

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Directory Structure](#directory-structure)
- [Project Structure Details](#project-structure-details)
- [Example](#example)
- [Application Screenshots](#application-screenshots)
- [GitHub Deployment Location (HTTPS)](#github-deployment-location-https)
- [GitHub Repository Location](#github-repository-location)
- [Credits](#credits)
- [Contributions](#contributions)
- [License](#license)


## Description

-Greetings!

The **SVG Logo Generator** is a Node.js command-line application that helps you create simple and customizable SVG logos. The program prompts the user for details such as the shape, colors, and text of the logo, and then generates an SVG file accordingly. This project is designed to provide an easy and fun way to learn about Node.js, SVG, and object-oriented programming.


## Features

- User is prompted to choose a logo shape (Circle, Triangle, or Square).
- Users can enter up to three characters of text to display in the logo.
- Choose text and shape colors.
- Generates the SVG logo and saves it in an `examples/` directory.

## Technologies Used
- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Inquirer.js**: A popular npm package for handling user input via the command line.
- **Jest**: Testing framework to ensure the functionality of the logo generation process.


## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone git@github.com:Hammarou/SVG-Logo-Generator.git
   ```

2. Navigate to the project directory:
   ```sh
   cd svg_logo_generator
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage
1. To generate a logo, run the command:
   ```sh
   npm start
   ```

   You will be prompted to enter the following details:
   - Up to three characters of text for the logo.
   - Color for the text (name or hex code).
   - Shape of the logo (Circle, Triangle, or Square).
   - Color for the shape (name or hex code).

2. After answering the prompts, the generated SVG logo will be saved to the `examples/` directory with the name `logo.svg`.

3. You can view the logo by opening the `examples/logo.svg` file in a web browser or any program that supports SVG files.


## Running Tests

The project uses Jest to test the functionality of the SVG generator.

To run the tests, use the command:
```sh
npm test
```

The tests verify that the generated SVG content contains the appropriate tags and attributes for the shapes and colors specified.


## Directory Structure

The directory structure of the project is as follows:
```
svg_logo_generator/
├── examples/              // Contains example SVG files generated by the application
├── lib/                   // Contains classes for shapes
│   ├── shapes.js          // Exports 'Circle', 'Triangle', and 'Square' classes
│   └── shapes.test.js     // Jest tests for the shapes
├── index.js               // Main file that runs the application
├── package.json           // Project configuration file
└── README.md              // Project documentation
```


## Project Structure Details

- **index.js**: This is the main entry point of the application. It prompts users for input, generates the SVG based on the response, and writes the SVG file to the `examples/` directory.
- **lib/shapes.js**: This file contains the classes (`Circle`, `Triangle`, `Square`) which encapsulate the logic for rendering different shapes as SVG elements.
- **lib/shapes.test.js**: Jest unit tests for the `shapes.js` classes.
- **examples/**: Stores the generated SVG logo files for reference or use.


## Example

Here is an example of the prompts you might see and the resulting output:

- **Prompt**: Enter up to three characters for your logo:
  - `ABC`
- **Prompt**: Enter a color for the text (e.g., color name or hex code):
  - `#ff5733`
- **Prompt**: Choose a shape for the logo (Circle, Triangle, or Square):
  - `Circle`
- **Prompt**: Enter a color for the shape (e.g., color name or hex code):
  - `blue`

The above input will generate an SVG file called `logo.svg` inside the `examples/` folder with the specified shape, colors, and text.


## Application Screenshots

### Test Application

![](/images/screenshot1_test.png "First screenshot")
![](/images/screenshot2_test.png "Second screenshot")


### Run Application

![](/images/screenshot1.png "First screenshot")
![](/images/screenshot2.png "Second screenshot")
![](/images/screenshot3.png "Third screenshot")
![](/images/screenshot4.png "Fourth screenshot")


## GitHub Deployment Location (HTTPS)

N/A

* Note: The **SVG Logo Generator** is a node.js command line interface (CLI) application. Therefore, it cannot be hosted through an internet browser. 

## GitHub Repository Location

https://github.com/Hammarou/SVG-Logo-Generator

## Credits

N/A

## Contribution

Feel free to fork this project, submit issues, or make pull requests if you have suggestions or improvements. Contributions are welcome!


## License

This project is licensed under the [MIT](LICENSE) license.