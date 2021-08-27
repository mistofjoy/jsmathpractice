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
    let angle = document.getElementById("triangle__angle");
    let sideB = document.getElementById("triangle__sideB");
    let triangleResults = document.getElementById("triangle__results");
    let eqtriangleIMG = document.getElementById("eqtriangleIMG");
    let istriangleIMG = document.getElementById("istriangleIMG");
    let estriangleIMG = document.getElementById("estriangleIMG");
    switch (triangleType) {
        case "--":
            base.style.display = "none";
            sideA.style.display = "none";
            angle.style.display = "none";
            sideB.style.display = "none";
            triangleResults.style.display = "none";
            eqtriangleIMG.display = "none";
            istriangleIMG.display = "none";
            estriangleIMG.display = "none";
            break;
        case "eq":
            base.style.display = "flex";
            sideA.style.display = "none";
            angle.style.display = "none";
            sideB.style.display = "none";
            triangleResults.style.display = "flex";
            eqtriangleIMG.style.display = "flex";
            istriangleIMG.style.display = "none";
            estriangleIMG.style.display = "none";
            break;
        case "is":
            base.style.display = "flex";
            sideA.style.display = "flex";
            angle.style.display = "none";
            sideB.style.display = "none";
            triangleResults.style.display = "flex";
            eqtriangleIMG.style.display = "none";
            istriangleIMG.style.display = "flex";
            estriangleIMG.style.display = "none";
            break;
        case "es":
            base.style.display = "flex";
            sideA.style.display = "flex";
            angle.style.display = "flex";
            sideB.style.display = "flex";
            triangleResults.style.display = "flex";
            eqtriangleIMG.style.display = "none";
            istriangleIMG.style.display = "none";
            estriangleIMG.style.display = "flex";
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


//Rectangle calculations
const rectangleCalc = (sideA, sideB) => {
    let area = sideA * sideB;
    let perimeter = (2 * sideA) + (2 * sideB);
    let areahtml = document.getElementById("rectangleArea");
    let perimeterhtml = document.getElementById("rectanglePerimeter");
    areahtml.innerHTML = `${area}`;
    perimeterhtml.innerHTML = `${perimeter}`;
}

//triangle calculations
const triangleCalc = (base, side, angle, sideB) => {
    let triangleType = document.getElementById("triangleType").value;
    let area, perimeter, height, radians;
    switch (triangleType) {
        case "eq":
            perimeter = base * 3;
            radians = 60 * (Math.PI/180);
            height = base * Math.sin(radians);
            area = base * height / 2;
            break;
        case "is":
            perimeter = base + (2 * side);
            height = Math.sqrt((side ** 2) - ((base / 2) ** 2));
            area = base * height / 2;
            break;
        case "es":
            perimeter = base + side + sideB;
            radians = angle * (Math.PI/180);
            height = side * Math.sin(radians);
            area = base * height / 2;
            break;
    }
    let areahtml = document.getElementById("triangleArea");
    let perimeterhtml = document.getElementById("trianglePerimeter");
    areahtml.innerHTML = `${area}`;
    perimeterhtml.innerHTML = `${perimeter}`;
}


//circle calculations
const circleCalc = (diameter) => {
    let area = Math.PI * ((diameter / 2) ** 2);
    let perimeter = Math.PI * diameter;
    let areahtml = document.getElementById("circleArea");
    let perimeterhtml = document.getElementById("circlePerimeter");
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

//rectangle
let rectangleA = document.getElementById("rectangleSideA");
let rectangleB = document.getElementById("rectangleSideB");

rectangleA.addEventListener("input", () => {
    let rectangleSideAString = document.getElementById("rectangleSideA").value;
    let rectangleSideA = parseFloat(rectangleSideAString);
    let rectangleSideBString = document.getElementById("rectangleSideB").value;
    let rectangleSideB = parseFloat(rectangleSideBString);
    rectangleCalc(rectangleSideA, rectangleSideB);
});

rectangleB.addEventListener("input", () => {
    let rectangleSideAString = document.getElementById("rectangleSideA").value;
    let rectangleSideA = parseFloat(rectangleSideAString);
    let rectangleSideBString = document.getElementById("rectangleSideB").value;
    let rectangleSideB = parseFloat(rectangleSideBString);
    rectangleCalc(rectangleSideA, rectangleSideB);
});

//triangle
let triangle = document.getElementById("triangleType");

triangle.addEventListener("input", () => {
    triangleSides();
});

let triangleA = document.getElementById("triangleBase");
let triangleB = document.getElementById("triangleSideA");
let triangleC = document.getElementById("triangleAngle");
let triangleD = document.getElementById("triangleSideB");

triangleA.addEventListener("input", () => {
    let triangleBaseString = document.getElementById("triangleBase").value;
    let triangleSideAString = document.getElementById("triangleSideA").value;
    let triangleAngleString = document.getElementById("triangleAngle").value;
    let triangleSideBString = document.getElementById("triangleSideB").value;
    let triangleBase = parseFloat(triangleBaseString);
    let triangleSideA = parseFloat(triangleSideAString);
    let triangleAngle = parseFloat(triangleAngleString);
    let triangleSideB = parseFloat(triangleSideBString);
    triangleCalc(triangleBase, triangleSideA, triangleAngle, triangleSideB);
});

triangleB.addEventListener("input", () => {
    let triangleBaseString = document.getElementById("triangleBase").value;
    let triangleSideAString = document.getElementById("triangleSideA").value;
    let triangleAngleString = document.getElementById("triangleAngle").value;
    let triangleSideBString = document.getElementById("triangleSideB").value;
    let triangleBase = parseFloat(triangleBaseString);
    let triangleSideA = parseFloat(triangleSideAString);
    let triangleAngle = parseFloat(triangleAngleString);
    let triangleSideB = parseFloat(triangleSideBString);
    triangleCalc(triangleBase, triangleSideA, triangleAngle, triangleSideB);
});

triangleC.addEventListener("input", () => {
    let triangleBaseString = document.getElementById("triangleBase").value;
    let triangleSideAString = document.getElementById("triangleSideA").value;
    let triangleAngleString = document.getElementById("triangleAngle").value;
    let triangleSideBString = document.getElementById("triangleSideB").value;
    let triangleBase = parseFloat(triangleBaseString);
    let triangleSideA = parseFloat(triangleSideAString);
    let triangleAngle = parseFloat(triangleAngleString);
    let triangleSideB = parseFloat(triangleSideBString);
    triangleCalc(triangleBase, triangleSideA, triangleAngle, triangleSideB);
});

triangleD.addEventListener("input", () => {
    let triangleBaseString = document.getElementById("triangleBase").value;
    let triangleSideAString = document.getElementById("triangleSideA").value;
    let triangleAngleString = document.getElementById("triangleAngle").value;
    let triangleSideBString = document.getElementById("triangleSideB").value;
    let triangleBase = parseFloat(triangleBaseString);
    let triangleSideA = parseFloat(triangleSideAString);
    let triangleAngle = parseFloat(triangleAngleString);
    let triangleSideB = parseFloat(triangleSideBString);
    triangleCalc(triangleBase, triangleSideA, triangleAngle, triangleSideB);
});

//circle
circle.addEventListener("input", () => {
    let circleDiameterString = document.getElementById("diameter").value;
    let circleDiameter = parseFloat(circleDiameterString);
    circleCalc(circleDiameter);
});