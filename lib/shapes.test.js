const {circle, square, triangle} = require("./shapes")

describe('circle', () => {
    test("will this render the shape element", () => {
    const shape = new circle();
    var color=('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="200" cy="200" r="180" fill="red"/>`);
});

describe('Square', () => {
    test("will this render the shape element", () => {
    const shape = new Square();
    var color =('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="20" width="200" fill="green">`);
    });
});
describe('Triangle', () => {
    test("will this render the shape element", () => {
    const shape = new Triangle();
    var color =('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue">`);
    });
})})
