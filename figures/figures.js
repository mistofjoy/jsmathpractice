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

document.addEventListener("input", () => {
    typeOfFigure();
});