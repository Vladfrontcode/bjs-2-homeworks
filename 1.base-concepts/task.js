"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
    
  if (discriminant < 0) {
      return [];
  } else if (discriminant === 0) {
      arr = -b / (2 * a);
      return [arr];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);    
    return [root1, root2];
  }  
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const n = countMonths;
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** n) - 1)));
  const totalAmount = monthlyPayment * n;
  return parseFloat(totalAmount.toFixed(2));
}