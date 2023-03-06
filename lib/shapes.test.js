const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
  test('should render a .svg file in the shape of a circle', () => {
    const shapeColor = 'brown';
    const text = 'POO';
    const textColor = 'yellow';
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="brown" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">POO</text>
        </svg>`;
    const circle = new Circle(shapeColor, text, textColor);
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
    test('should render a .svg file in the shape of a triangle', () => {
      const shapeColor = 'brown';
      const text = 'POO';
      const textColor = 'yellow';
      const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="brown" points="25,175 150,0 275,175" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="yellow">POO</text>
        </svg>`;
      const triangle = new Triangle(shapeColor, text, textColor);
      expect(triangle.render()).toEqual(expectedSVG);
    });
  });

  describe('Square', () => {
    test('should render a .svg file in the shape of a square', () => {
      const shapeColor = 'brown';
      const text = 'POO';
      const textColor = 'yellow';
      const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y = "0" width="150" height="150" fill="brown"/>
        <text x="125" y="90" font-size="60" text-anchor="middle" fill="yellow">POO</text>
        </svg>`;
      const square = new Square(shapeColor, text, textColor);
      expect(square.render()).toEqual(expectedSVG);
    });
  });  