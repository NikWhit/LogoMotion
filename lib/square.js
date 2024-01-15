const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super();
        this.setColor(shapeColor);
        this.text = text || '';
        this.textColor = textColor;
    }
    //Renders the SVG
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="20" width="180" height="180" stroke="black" fill="${this.color}"/>  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>      
      </svg>`
    }
}

module.exports = Square;