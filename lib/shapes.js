// lib/shapes.js

class Shape {
  constructor() {
    this.shapeColor = '';
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    return ``;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="60" y="10" width="180" height="180" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
