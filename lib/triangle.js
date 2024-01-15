const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super();
        this.setColor(shapeColor);
        this.text = text || '';
        this.textColor = textColor;
    }
    //Renders the SVG
    render() {
        return `<svg version="1.1" width="305" height="205" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 0,200 300,200" fill="${this.color}"/>      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>      
      </svg>`
    }
}

module.exports = Triangle;