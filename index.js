// Const's with requires
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes")

// inquirer prompt

    // text (up to 3 characters)

    // text color (keyword or hex)
        // list with specific colors to make this easier on yourself lol

    // shape (tri, cir, sq)

    // shape color (keyword or hex)
        // list with specific colors to make this easier on yourself lol

    // .then pop this junk into one of the shapes classes probably with some sort of conditional for which one it goes into

// some sort of fs.writeFile to write the svg

const questions = () => {
    return inquirer.prompt([  
        {
            type: "input",
            name: "text",
            message: "Please enter (up to) 3 letters, numbers, symbols, or a combination of each for your logo. Make sure you use exact capitalization and order you would like them to appear on the logo."
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like your text to be in? Be specific and accurate in your color name spelling. You may use a hexadecimal number if you would like as well, but please enter the # symbol at the start of the hex code. If you are uncertain on color name or hexadecimal codes, please visit https://htmlcolorcodes.com before entering."
        },
        {
            type: "list",
            name: "shape",
            message: "What shape would you like your logo to be?",
            choices: ["Circle", "Triangle", "Square"]
            },
        {
            type: "input",
            name: "shapeColor",
            message: "What What color would you like your shape to be?Keep in mind the color selected for the text color. Same rules as font text. Please use correct spelling, and you may use a hexadecimal number if you enter the # symbol at the start of the hex code. If you are uncertain on color name or hexadecimal codes, please visit https://htmlcolorcodes.com before entering."
        }
])};

function generateLogo({ text, textColor, shape, shapeColor}) {
    let shapeSVG;
    switch (shape) {
        case "Circle":
            shapeSVG = new Circle(text, textColor, shapeColor);
            break;
        case "Triangle":
            shapeSVG = new Triangle(text, textColor, shapeColor);
            break;
        case "Square":
            shapeSVG = new Square(text, textColor, shapeColor);
            break;
        default: 
            console.log("I don't know how you got here since it was a list, but please select a shape")
    }
    writeFile("logo.svg", shapeSVG.render())
}

const init = () => {
    questions()
    .then((answers) => generateLogo(answers))
    .then(() => console.log("Generated logo.svg"))
    .catch((err) => console.error(err))
    };

init();
// the end