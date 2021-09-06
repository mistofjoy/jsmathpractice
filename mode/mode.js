//Vanishing labels
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");
let label5 = document.getElementById("label5");
let label6 = document.getElementById("label6");
let label7 = document.getElementById("label7");
let label8 = document.getElementById("label8");
let label9 = document.getElementById("label9");
let label10 = document.getElementById("label10");
let label11 = document.getElementById("label11");
let label12 = document.getElementById("label12");
let label13 = document.getElementById("label13");
let label14 = document.getElementById("label14");
let label15 = document.getElementById("label15");

label1.style.display = "flex";

//Data from the html
let data1 = document.getElementById("data1");
let data2 = document.getElementById("data2");
let data3 = document.getElementById("data3");
let data4 = document.getElementById("data4");
let data5 = document.getElementById("data5");
let data6 = document.getElementById("data6");
let data7 = document.getElementById("data7");
let data8 = document.getElementById("data8");
let data9 = document.getElementById("data9");
let data10 = document.getElementById("data10");
let data11 = document.getElementById("data11");
let data12 = document.getElementById("data12");
let data13 = document.getElementById("data13");
let data14 = document.getElementById("data14");
let data15 = document.getElementById("data15");

let data = [];

//the labels appear
data1.addEventListener("input", () => {
    if (data1.value != '') {
        label2.style.display = "flex";
        data[0] = parseFloat(data1.value);
    } 
    else {
        data[0] = 0;
    }
})

data2.addEventListener("input", () => {
    if (data2.value != '') {
        label3.style.display = "flex";
        data[1] = parseFloat(data2.value);
    } 
    else {
        data[1] = 0;
    }
})

data3.addEventListener("input", () => {
    if (data3.value != '') {
        label4.style.display = "flex";
        data[2] = parseFloat(data3.value);
    } 
    else {
        data[2] = 0;
    }
})

data4.addEventListener("input", () => {
    if (data4.value != '') {
        label5.style.display = "flex";
        data[3] = parseFloat(data4.value);
    } 
    else {
        data[3] = 0;
    }
})

data5.addEventListener("input", () => {
    if (data5.value != '') {
        label6.style.display = "flex";
        data[4] = parseFloat(data5.value);
    } 
    else {
        data[4] = 0;
    }
})

data6.addEventListener("input", () => {
    if (data6.value != '') {
        label7.style.display = "flex";
        data[5] = parseFloat(data6.value);
    } 
    else {
        data[5] = 0;
    }
})

data7.addEventListener("input", () => {
    if (data7.value != '') {
        label8.style.display = "flex";
        data[6] = parseFloat(data7.value);
    } 
    else {
        data[6] = 0;
    }
})

data8.addEventListener("input", () => {
    if (data8.value != '') {
        label9.style.display = "flex";
        data[7] = parseFloat(data8.value);
    } 
    else {
        data[7] = 0;
    }
})

data9.addEventListener("input", () => {
    if (data9.value != '') {
        label10.style.display = "flex";
        data[8] = parseFloat(data9.value);
    } 
    else {
        data[8] = 0;
    }
})

data10.addEventListener("input", () => {
    if (data10.value != '') {
        label11.style.display = "flex";
        data[9] = parseFloat(data10.value);
    } 
    else {
        data[9] = 0;
    }
})

data11.addEventListener("input", () => {
    if (data11.value != '') {
        label12.style.display = "flex";
        data[10] = parseFloat(data11.value);
    } 
    else {
        data[10] = 0;
    }
})

data12.addEventListener("input", () => {
    if (data12.value != '') {
        label13.style.display = "flex";
        data[11] = parseFloat(data12.value);
    } 
    else {
        data[11] = 0;
    }
})

data13.addEventListener("input", () => {
    if (data13.value != '') {
        label14.style.display = "flex";
        data[12] = parseFloat(data13.value);
    } 
    else {
        data[12] = 0;
    }
})

data14.addEventListener("input", () => {
    if (data14.value != '') {
        label15.style.display = "flex";
        data[13] = parseFloat(data14.value);
    } 
    else {
        data[13] = 0;
    }
})

data15.addEventListener("input", () => {
    if (data15.value != '') {
        data[14] = parseFloat(data15.value);
    } 
    else {
        data[14] = 0;
    }
})

//calculos
let button = document.getElementById("calculate");
let mediaResult = document.getElementById("media");
let medianResult = document.getElementById("median");
let modeResult = document.getElementById("mode");

const media = () => {
    let mediaCount = 0;
    for (let i of data) {
        mediaCount += i;
    }
    let mediaFinal = mediaCount / data.length;
    mediaResult.innerHTML = `${mediaFinal}`;
}

const median = () => {
    let i = Math.ceil(data.length / 2) - 1;
    let medianFinal;
    if (data.length % 2 == 0) {
        medianFinal = (data[i] + data[i + 1]) / 2;
    }
    else {
        medianFinal = data[i];
    }
    medianResult.innerHTML = `${medianFinal}`;
}

const mode = () => {
    let object = {};
    data.map((element) => {
        if (object[element]) {
            object[element] += 1;
        }
        else {
            object[element] = 1;
        }
    })
    const array = Object.entries(object).sort((entryA, entryB) => {
        return entryA[1] - entryB[1];
    });
    let modeInter = array[array.length - 1];
    let modeFinal = modeInter[0];
    modeResult.innerHTML = modeFinal;
}

button.addEventListener("click", () => {
    media();
    median();
    mode();
})