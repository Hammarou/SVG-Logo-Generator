// lib/shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  it('Circle should render correctly', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="90" fill="red" />');
  });

  it('Triangle should render correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  it('Square should render correctly', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe('<rect x="60" y="10" width="180" height="180" fill="green" />');
  });
});
