function gradeGenerator(marks){

//create a function that grades the marks
//checks if the input is not a number or if the marks are not between 0 to 100 prints invalid.
if(isNaN(marks) || marks < 0 || marks > 100){
        console.log("Invalid Input! Please Enter  number between 0 and 100");

        return;
    }
    let grade;
    if (marks >79){ grade = "A";}
    else if(marks <=79 && marks >= 60){grade = "B";}
    else if(marks <= 59 && marks >=49){grade = "C";}
    else if (marks < 49 && marks >=40){grade = "D";}
    else if (marks < 40){grade = "E";}
    console.log(`The Student's grade is: ${grade}`);
}
gradeGenerator();