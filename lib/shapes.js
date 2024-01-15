class Shape {

    //A Class with a constructor defining color and color value.
    constructor() {
        this.color = '';
    }
    setColor(color){
        this.color=color;
    }
}
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="150,0 0,200 300,200" fill="${this.color}">`
            
        }
    };
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" fill="${this.color}">`
        }
    };
    class Square extends Shape{
        render(){
            return `<rect x="0" y="0" width="100%" height="100%" fill="${this.color}">`
        }
    };

module.exports = {Triangle, Circle,Square}


// SOURCES CITED: 10-OOP/01-Activities/06-Stu_Classes/Solved/index.js
// 10-OOP/01-Activities/28-Stu_Mini-Project/Develop/lib/cli.js
// /10-OOP/02-Challenge/README.md
// 10-OOP/01-Activities/22-Stu_Promise-Chain/Solved/lib/blogPost.js - for render()

    // constructor(text, textColor, shapeColor) {
    //     this.text = text;
    //     this.textColor = textColor;
    //     this.shapeColor = shapeColor;
    // }


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