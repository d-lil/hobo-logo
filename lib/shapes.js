
class Shapes {
    constructor(shapeColor, text, textColor, shape) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }
}

class Circle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    } 
    render() {
        return (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
}}



class Triangle extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }
    render() {
        return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.shapeColor}" points="25,175 150,0 275,175" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    }
}

class Square extends Shapes {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    } 
    render(){
        return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y = "0" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="125" y="90" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    }
};

module.exports = { Circle, Triangle, Square }