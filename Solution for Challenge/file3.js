//define function
function calculateNetSalary(basicSalary, benefits){
    //gross salary is
    let grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`);

//nssf
const tier1 = 8000;
const tier2 = 72000;

const nssfTier1 = Math.min(0.06 * tier1, grossSalary * 0.06);
const nssfTier2 = grossSalary > tier1 ? Math.min(0.06 * (grossSalary - tier1), 0.06 * (tier2 - tier1)) : 0;

const nssfDeduction = nssfTier1 + nssfTier2;
console.log(`NSSF Deduction: ${nssfDeduction}`);

//nhif
const nhifDeduction = grossSalary * 0.0275;
console.log(`NHIF Deduction: ${nhifDeduction}`);
//taxable income
let taxableIncome = grossSalary - nssfDeduction - nhifDeduction;
console.log(`Taxable Income: ${taxableIncome}`);
let paye = 0;

if (taxableIncome > 800000) {
    paye += (taxableIncome - 800000) * 0.35;
    taxableIncome = 800000;
}
if (taxableIncome > 500000) {
    paye += (taxableIncome - 500000) * 0.325;
    taxableIncome = 500000;
}
if (taxableIncome > 32333) {
    paye += (taxableIncome - 32333) * 0.30;
    taxableIncome = 32333;
}
if (taxableIncome > 24000) {
    paye += (taxableIncome - 24000) * 0.25;
    taxableIncome = 24000;
}
if (taxableIncome > 0) {
    paye += taxableIncome * 0.10;
}

console.log(`PAYE Before Relief: ${paye}`);
paye = Math.max(0, paye - 2400);
const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye);
console.log(`Net Salary: ${netSalary}`);
return {
    grossSalary,
    nssfDeduction,
    nhifDeduction,
    paye,
    netSalary
};
}
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);