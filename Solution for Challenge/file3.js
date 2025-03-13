//define function
function calculateNetSalary(basicSalary, benefits){
    //gross salary is
    let grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`);

//nssf has two calculations, tier1 limit is upto a gross salary of 8000 and tier 2 upto 72000
const tier1 = 8000;
const tier2 = 72000;

const nssfTier1 = Math.min(0.06 * tier1, grossSalary * 0.06);
const nssfTier2 = grossSalary > tier1 ? Math.min(0.06 * (grossSalary - tier1), 0.06 * (tier2 - tier1)) : 0;

const nssfDeduction = nssfTier1 + nssfTier2;
console.log(`NSSF Deduction: ${nssfDeduction}`);

//nhif is 2.75% of grosssalary
const nhifDeduction = grossSalary * 0.0275;
console.log(`NHIF Deduction: ${nhifDeduction}`);

//housingLevy which is 1.5% of gross salary
const housingLevy = grossSalary * 0.015;
console.log(`Housing Levy: ${housingLevy}`);

//taxable income since the deductions (nssf and nhif) are not taxable
let taxableIncome = grossSalary - nssfDeduction - nhifDeduction - housingLevy;
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
const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye + housingLevy);
console.log(`Net Salary: ${netSalary}`);
return {
    grossSalary,
    nssfDeduction,
    nhifDeduction,
    paye,
    housingLevy,
    netSalary
};
}
const salaryDetails = calculateNetSalary(50000, 10000);
console.log(salaryDetails);