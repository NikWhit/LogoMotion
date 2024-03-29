const Shape = require('./shapes.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super();
        this.setColor(shapeColor);
        this.text = text || '';
        this.textColor = textColor;
    }
    //Renders the SVG
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" fill="${this.color}">   
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>      
      </svg>`
    }
}

module.exports = Circle;