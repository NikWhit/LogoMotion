class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

module.exports = Shapes;
// class shape {
//     constructor() {
//         this.color = "";
//     }
//     setColor(color) {
//         this.color = color;
//     }
// }
// class square extends shape{
//     render(){
//         return`<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>`
//     }
// }
// class triangle extends shape{
//     render(){
//         return`<polygon points="0, 200 100, 0 200, 200" fill="${this.color}"/>`
//     }
// }
// class circle extends shape{
//     render(){
//         return`<circle cx="200" cy="200" r="180" fill="${this.color} />`
//     }
// }
// module.exports = {circle, square, triangle}