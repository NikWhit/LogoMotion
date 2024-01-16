const {Triangle, Circle, Square} = require("./shapes")

describe('triangle', () => {
    test("to render object element", () => {
    const shape = new Triangle();
    const color =('#02CCFE')
    shape.setColor(color);
    expect(shape.render()).toMatch(/<polygon points="150,0 0,200 300,200" fill="#02CCFE">/);
    });
});
describe('circle', () => {
    test("to render object element", () => {
    const shape = new Circle();
    const color=('#560319')
    shape.setColor(color);
    expect(shape.render()).toMatch(/<circle cx="50%" cy="50%" r="100" fill="#560319">/);
});
});
describe('square', () => {
    test("to render object element", () => {
    const shape = new Square();
    const color =('#006400')
    shape.setColor(color);
    expect(shape.render()).toMatch(/<rect x="0" y="0" width="100%" height="100%" fill="#006400">/);
    });
});


// SOURCES CITED:
// 10-OOP/01-Activities/13-Ins_Failing-Test/test/arithmetic.test.js