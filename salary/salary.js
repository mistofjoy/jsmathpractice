//data
let monthlyIncomeFixedHTML = document.getElementById("monthlyInFixed");
let monthlyIncomeVariedHTML = document.getElementById("monthlyInVaried");
let monthlyExpenseFixedHTML = document.getElementById("monthlyOutFixed");
let monthlyExpenseVariedHTML = document.getElementById("monthlyOutVaried");
let monthlyDebtHTML = document.getElementById("monthlyDebt");

let yearlyIncomeFixedHTML = document.getElementById("yearlyInFixed");
let yearlyIncomeVariedHTML = document.getElementById("yearlyInVaried");
let yearlyExpenseFixedHTML = document.getElementById("yearlyOutFixed");
let yearlyExpenseVariedHTML = document.getElementById("yearlyOutVaried");
let yearlyDebtHTML = document.getElementById("yearlyDebt");

let useBonusHTML = document.getElementById("useBonus");

//results
let incomeHTML = document.getElementById("totalIncome");
let expensesHTML = document.getElementById("totalExpenses");
let debtHTML = document.getElementById("totalDebt");
let usefulTotalHTML = document.getElementById("remainingIncomeTotal");
let usefulPercentHTML = document.getElementById("remainingIncome%");

let savingsHTML = document.getElementById("savings");
let bonusHTML = document.getElementById("bonus");

//Calculations
const calculate = () => {
    let 
        monthlyIncomeFixed,
        monthlyIncomeVaried,
        monthlyExpenseFixed,
        monthlyExpenseVaried,
        monthlyDebt,
        yearlyIncomeFixed,
        yearlyIncomeVaried,
        yearlyExpenseFixed,
        yearlyExpenseVaried,
        yearlyDebt;
    (monthlyIncomeFixedHTML.value === '') 
        ? monthlyIncomeFixed = 0
        : monthlyIncomeFixed = parseFloat(monthlyIncomeFixedHTML.value);
    (monthlyIncomeVariedHTML.value === '')
        ? monthlyIncomeVaried = 0
        : monthlyIncomeVaried = parseFloat(monthlyIncomeVariedHTML.value);
    (monthlyExpenseFixedHTML.value === '')
        ? monthlyExpenseFixed = 0
        : monthlyExpenseFixed = parseFloat(monthlyExpenseFixedHTML.value);
    (monthlyExpenseVariedHTML.value === '')
        ? monthlyExpenseVaried = 0
        : monthlyExpenseVaried = parseFloat(monthlyExpenseVariedHTML.value);
    (monthlyDebtHTML.value === '')
        ? monthlyDebt = 0
        : monthlyDebt = parseFloat(monthlyDebtHTML.value);
    (yearlyIncomeFixedHTML.value === '') 
        ? yearlyIncomeFixed = 0
        : yearlyIncomeFixed = parseFloat(yearlyIncomeFixedHTML.value);
    (yearlyIncomeVariedHTML.value === '')
        ? yearlyIncomeVaried = 0
        : yearlyIncomeVaried = parseFloat(yearlyIncomeVariedHTML.value);
    (yearlyExpenseFixedHTML.value === '')
        ? yearlyExpenseFixed = 0
        : yearlyExpenseFixed = parseFloat(yearlyExpenseFixedHTML.value);
    (yearlyExpenseVariedHTML.value === '')
        ? yearlyExpenseVaried = 0
        : yearlyExpenseVaried = parseFloat(yearlyExpenseVariedHTML.value);
    (yearlyDebtHTML.value === '')
        ? yearlyDebt = 0
        : yearlyDebt = parseFloat(yearlyDebtHTML.value);

    let income = (monthlyIncomeFixed * 12) + (monthlyIncomeVaried * 12) + yearlyIncomeFixed + yearlyIncomeVaried;
    let expenses = (monthlyExpenseFixed * 12) + (monthlyExpenseVaried * 12) + yearlyExpenseFixed + yearlyExpenseVaried;
    let debt = (monthlyDebt * 12) + yearlyDebt;
    let usefulTotal = income - expenses - debt;
    let usefulPercent = (usefulTotal / income) * 100;

    incomeHTML.innerHTML = income.toFixed(2);
    expensesHTML.innerHTML = expenses.toFixed(2);
    debtHTML.innerHTML = debt.toFixed(2);
    usefulTotalHTML.innerHTML = usefulTotal.toFixed(2);
    usefulPercentHTML.innerHTML = usefulPercent.toFixed(2);

    if (useBonusHTML.value == "true") {
        let yearlySavings = yearlyIncomeFixed + yearlyIncomeVaried - yearlyExpenseFixed - yearlyExpenseVaried - yearlyDebt;
        let monthlySavings = monthlyIncomeFixed + monthlyIncomeVaried - monthlyExpenseFixed - monthlyExpenseVaried - monthlyDebt;
        if (yearlySavings >= 0) {
            savingsHTML.innerHTML = monthlySavings.toFixed(2);
            bonusHTML.innerHTML = yearlySavings.toFixed(2);
        }
        else {
            let realSavings = ((monthlySavings * 12) + yearlySavings) / 12;
            savingsHTML.innerHTML = realSavings.toFixed(2);
            bonusHTML.innerHTML = 0;
        }
    }
    else {
        let monthlySavings = monthlyIncomeFixed + monthlyIncomeVaried - monthlyExpenseFixed - monthlyExpenseVaried - monthlyDebt;
        let available = (monthlySavings * 12) - yearlyExpenseFixed - yearlyExpenseVaried - yearlyDebt;
        let yearlySavings = yearlyIncomeFixed + yearlyIncomeVaried;
        if (available >= 0) {
            savingsHTML.innerHTML = (available / 12).toFixed(2);
            bonusHTML.innerHTML = yearlySavings.toFixed(2);
        }
        else {
            let realAvailable = yearlySavings + available;
            savingsHTML.innerHTML = 0;
            bonusHTML.innerHTML = realAvailable.toFixed(2);
        }
    }
}

document.addEventListener("input", calculate);
