const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');
inquirer.prompt([
    {
        type: 'list',
        name: 'chooseShape',
        choices: ['Triangle', 'Circle', 'Square'],
        message: 'Choose shape for logo:',
    },
    {
        type: 'input',
        name: 'objColor',
        message: 'Pick a color for your object to be.',
    },
    {
        type: 'input',
        name: 'text',
        message: 'Select 3 letters for your logo',
    },
    {
        type: 'input',
        name: 'letterColor',
        message: 'Pick a color for your letters to be.',
    },
])
.then(({ chooseShape, objColor, text, letterColor}) => {
let shape;
switch (chooseShape) {
    case "Triangle":
        shape = new Triangle();
        break;
    case "Circle":
        shape = new Circle();
        break;
    case "Square":
        shape = new Square();
        break;
}
shape.setColor(objColor);

let svg = 
`<svg version="1.1" width="305" height="205" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="150" y="125" font-size="55" text-anchor="middle" fill="${letterColor}">${text}</text>      
</svg>`;

return fs.writeFile('logo.svg', svg, (err) => {
    if (err) { console.log(err);
    } else {
        console.log('successful logo generation');
    }
        });
});



// const Shapes = require('./shapes.js');

// class Circle extends Shapes {
//     constructor(text, textColor, shapeColor) {
//         super(text, textColor, shapeColor);
//     }
//     //Renders the SVG
//     render() {
//         return 
//         <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />      
//     }
// }

// module.exports = Circle;

//     this.tasks.push({ text, priority });
//     if (confirmAddTask) {
//       return this.addTask();
// //Require the CLI class
// const CLI = require('./lib/cli.js');

// //Create a new CLI object
// const cli = new CLI();

// //Run the run method
// cli.run();

// SOURCE: 10-OOP/01-Activities/28-Stu_Mini-Project/Develop/lib/cli.js