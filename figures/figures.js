//Menu de figuras
const typeOfFigure = () => {
    let figure = document.getElementById("figure").value;
    let square = document.getElementById("square");
    let rectangle = document.getElementById("rectangle");
    let triangle = document.getElementById("triangle");
    let circle = document.getElementById("circle");
    switch (figure) {
        case "--":
            square.style.display = "none";
            rectangle.style.display = "none";
            triangle.style.display = "none";
            circle.style.display = "none";
            break;
        case "square":
            square.style.display = "flex";
            rectangle.style.display = "none";
            triangle.style.display = "none";
            circle.style.display = "none";
            break;
        case "rectangle":
            square.style.display = "none";
            rectangle.style.display = "flex";
            triangle.style.display = "none";
            circle.style.display = "none";
            break;
        case "triangle":
            square.style.display = "none";
            rectangle.style.display = "none";
            triangle.style.display = "flex";
            circle.style.display = "none";
            break;
        case "circle":
            square.style.display = "none";
            rectangle.style.display = "none";
            triangle.style.display = "none";
            circle.style.display = "flex";
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


//Event trigger
document.addEventListener("input", () => {
    typeOfFigure();
    triangleSides();
});