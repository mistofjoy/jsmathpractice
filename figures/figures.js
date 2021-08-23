//Menu de figuras
const typeOfFigure = () => {
    let figValue = document.getElementById("figure").value;
    let squarefig = document.getElementById("square");
    let rectanglefig = document.getElementById("rectangle");
    let trianglefig = document.getElementById("triangle");
    let circlefig = document.getElementById("circle");
    switch (figValue) {
        case "--":
            squarefig.style.display = "none";
            rectanglefig.style.display = "none";
            trianglefig.style.display = "none";
            circlefig.style.display = "none";
            break;
        case "square":
            squarefig.style.display = "flex";
            rectanglefig.style.display = "none";
            trianglefig.style.display = "none";
            circlefig.style.display = "none";
            break;
        case "rectangle":
            squarefig.style.display = "none";
            rectanglefig.style.display = "flex";
            trianglefig.style.display = "none";
            circlefig.style.display = "none";
            break;
        case "triangle":
            squarefig.style.display = "none";
            rectanglefig.style.display = "none";
            trianglefig.style.display = "flex";
            circlefig.style.display = "none";
            break;
        case "circle":
            squarefig.style.display = "none";
            rectanglefig.style.display = "none";
            trianglefig.style.display = "none";
            circlefig.style.display = "flex";
            break;
    }
}

//menu del triangulo
const triangleSides = () => {
    let triangleType = document.getElementById("triangleType").value;
    let base = document.getElementById("triangle__base");
    let sideA = document.getElementById("triangle__sideA");
    let sideB = document.getElementById("triangle__sideB");
    switch (triangleType) {
        case "--":
            base.style.display = "none";
            sideA.style.display = "none";
            sideB.style.display = "none";
            break;
        case "eq":
            base.style.display = "flex";
            sideA.style.display = "none";
            sideB.style.display = "none";
            break;
        case "is":
            base.style.display = "flex";
            sideA.style.display = "flex";
            sideB.style.display = "none";
            break;
        case "es":
            base.style.display = "flex";
            sideA.style.display = "flex";
            sideB.style.display = "flex";
            break;
    }
}


//Square calculations
const squareCalc = (side) => {
    let area = side ** 2;
    let perimeter = side * 4;
    let areahtml = document.getElementById("squareArea");
    let perimeterhtml = document.getElementById("squarePerimeter");
    areahtml.innerHTML = `${area}`;
    perimeterhtml.innerHTML = `${perimeter}`;
}


//EVENT TRIGGERS
//figure
let figure = document.getElementById("figure");

figure.addEventListener("input", () => {
    typeOfFigure();
});

//square
let square = document.getElementById("squareSide");

square.addEventListener("input", () => {
    let squareSideString = document.getElementById("squareSide").value;
    let squareSide = parseFloat(squareSideString);
    squareCalc(squareSide);
});

//triangle
let triangle = document.getElementById("triangleType");

triangle.addEventListener("input", () => {
    triangleSides();
});