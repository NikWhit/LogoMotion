const inquirer = require ("inquirer");
const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const {Triangle, Circle, Square} = require("./lib/shapes.js")


class svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
render(){
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
}
setTextElement(text,color){
this.textElement= `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
}
setShapeElement(shape){
    this.shapeElement = shape.render()
}
}
//INPUTS
inquirer.createPromptModule(

// const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter 3 Letters.",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT: Enter a color keyword.",
    },
    {
        type: "input",
        name: "shape",
        message: "Shape Color: Enter a color keyword.",
    },
    {
        type: "list",
        name: "shape",
        message: "circle, square, or triangle?",
        choices: ["circle", "square", "triangle"],
    },
);
function writeToFile(fileName, data) {
    console.log("Writing [" + data + " ] to file [" + fileName +"]")
    fileSystem.writeFile(fileName, data, function (err){
        if (err) {
            return console.log(err);
        }
        console.log("Nice Job!");
    });
}

async function init() {
    console.log("Commencing Init");
    var svgString = "";
    var svg_file = "logo.svg";
    //prompts for criteria
// const answers = inquirer.createPromptModule(questions);
var user_text = "";
// if (answers.text.length > 0 && answers.text.length < 4) {
//     user_text = answers.text;
// } else {
//     console.log("Please use 1-3 characters only");
//     return;
// }
console.log('User Text: [' + user_text + "]");

//font color
user_font_color = answer ("text_color");

console.log("font color: [" + user_font_color + "]");
//shape color
user_shape_color = answer.shape;
console.log("Shape Color: [" + user_shape_color + "]");
//shape
user_shape = answer['pixel-image'];
console.log("user shape = [" + user_shape + "]");


let user_shape;
	if (user_shape === "Square" || user_shape === "square") {
		user_shape = new Square();
		console.log("Square shape");
	}
	else if (user_shape === "Circle" || user_shape === "circle") {
		user_shape = new Circle();
		console.log("Circle shape");
	}
	else if (user_shape === "Triangle" || user_shape === "triangle") {
		user_shape = new Triangle();
		console.log("Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color);

    var svg = svg();
	svg.setTextElement(user_text, user_font_color);
	svg.setShapeElement(user_shape);
	svgString = svg.render();

    //Print
	console.log("Displaying shape:\n\n" + svgString);
    console.log("shape is shaping up!");
    console.log("writing it to the file for you to view");
    writeToFile(svg_file, svgString);
}
init()
