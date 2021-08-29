//coupon A visibility
const couponAVisibility = () => {
    let couponA = document.getElementById("couponA");
    if(coupon.value) {
        couponA.style.display = "flex";
    }
}

let coupon = document.getElementById("coupon");
coupon.addEventListener("input", () => {
    couponAVisibility();
});

//coupon B visibility
const couponBVisibility = () => {
    let couponB = document.getElementById("couponB");
    if(couponTypeA.value != "--") {
        if(couponValueA.value) {
            couponB.style.display = "flex";
        }
    }
}

let couponValueA = document.getElementById("couponValueA"); 
let couponTypeA = document.getElementById("couponTypeA"); 

couponValueA.addEventListener("input", () => {
    couponBVisibility();
    countdiscount();
});

couponTypeA.addEventListener("input", () => {
    couponBVisibility();
    countdiscount();
});


//coupon C visibility
const couponCVisibility = () => {
    let couponC = document.getElementById("couponC");
    if(couponTypeB.value != "--") {
        if(couponValueB.value) {
            couponC.style.display = "flex";
        }
    }
}

let couponValueB = document.getElementById("couponValueB"); 
let couponTypeB = document.getElementById("couponTypeB"); 

couponValueB.addEventListener("input", () => {
    couponCVisibility();
    countdiscount();
});

couponTypeB.addEventListener("input", () => {
    couponCVisibility();
    countdiscount();
});


//Precio original
const price = document.getElementById("price");
price.addEventListener("input", () => {
    const originalPrice = document.getElementById("originalPrice");
    originalPrice.innerHTML = `${price.value}`;
    countdiscount();
});

//Descuento
const discounthtml = document.getElementById("discount");
let couponValueC = document.getElementById("couponValueC"); 
let couponTypeC = document.getElementById("couponTypeC"); 

const countdiscount = () => {
    let disA, disB, disC;
    disA = () => {
        if(couponTypeA.value == "percentage") {
            return price.value * (couponValueA.value / 100);
        }
        else if (couponTypeA.value == "base") {
            return couponValueA.value;
        }
        else return 0;
    }
    disB = () => {
        if(couponTypeB.value == "percentage") {
            return price.value * (couponValueB.value / 100);
        }
        else if (couponTypeB.value == "base") {
            return couponValueB.value;
        }
        else return 0;
    }
    disC = () => {
        if(couponTypeC.value == "percentage") {
            return price.value * (couponValueC.value / 100);
        }
        else if (couponTypeC.value == "base") {
            return couponValueC.value;
        }
        else return 0;
    }
    let discount = price.value - (price.value * (discounthtml.value / 100)) - disA() - disB() - disC();
    const finalPrice = document.getElementById("finalPrice");
    finalPrice.innerHTML = `${discount}`;
    const savinghtml = document.getElementById("saving");
    let saving = price.value - discount;
    savinghtml.innerHTML = `${saving}`;
}

//Triggers

discounthtml.addEventListener("input",countdiscount);
couponValueC.addEventListener("input",countdiscount);
couponTypeC.addEventListener("input",countdiscount);