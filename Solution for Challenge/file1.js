function gradeGenerator() {
    // Prompt user for input
    let marks = prompt("Enter student marks (0-100):");

    // Convert input to a number
    marks = Number(marks);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid Input! Please enter a number between 0 and 100.");
        return;
    }

    // Determine grade
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log(`The Student's grade is: ${grade}`);
}

// Call the function
gradeGenerator();
