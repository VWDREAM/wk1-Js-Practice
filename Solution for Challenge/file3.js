// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`);

    // NSSF Deduction Calculation
    const tier1 = 8000;
    const tier2 = 72000;

    const nssfTier1 = Math.min(0.06 * tier1, grossSalary * 0.06);
    const nssfTier2 = grossSalary > tier1 ? Math.min(0.06 * (grossSalary - tier1), 0.06 * (tier2 - tier1)) : 0;

    const nssfDeduction = nssfTier1 + nssfTier2;
    console.log(`NSSF Deduction: ${nssfDeduction}`);

    // Correct NHIF Deduction Based on Tiered Structure
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700; // For gross salary 100,000 and above
    }
    const nhifDeduction = calculateNHIF(grossSalary);
    console.log(`NHIF Deduction: ${nhifDeduction}`);

    // Housing Levy Calculation (Correct)
    const housingLevy = grossSalary * 0.015;
    console.log(`Housing Levy: ${housingLevy}`);

    // Taxable Income should exclude only NSSF
    let taxableIncome = grossSalary - nssfDeduction;
    console.log(`Taxable Income: ${taxableIncome}`);

    // PAYE Calculation (Updated Brackets)
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

    // Deduct Personal Relief (Ksh 2,400)
    paye = Math.max(0, paye - 2400);
    console.log(`PAYE After Relief: ${paye}`);

    // Calculate Net Salary
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

// Example Test Case
const salaryDetails = calculateNetSalary(50000, 10000);
console.log(salaryDetails);
