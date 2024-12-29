// //Q1
let userName = prompt("Enter your Name please :");
let Gender;

while (true) {
    Gender = prompt("Enter Your Gender please:");
    if (Gender === "male" || Gender === "female") {
        break;
    } else {
        alert("Invalid input. Please enter 'male' or 'female'.");
    }
}

if (Gender === "male") {
    alert(`Welcome, Mr. ${userName}!`);
} else if (Gender === "female") {
    alert(`Welcome, Ms. ${userName}!`);
}
let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");
alert(`Your ${orderChoice} is being prepared.`);



// //Q2
let num = prompt("Enter your number from 0 to 10:");
switch (Number(num)) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
}


// task two
//Q1
for (let i = 0; i <= 5; i++) {
    alert(i);
}

//Q2
let number;

while (true) {
    number = prompt("Please enter a number between 0 and 100:");

    if (number >= 0 && number <= 100) {
        break;
    } else {
        alert("Invalid input. Please enter a number between 0 and 100.");
    }
}


alert(`Thank you! You entered a valid number: ${number}`);

//Q3

let number2 = parseInt(prompt("Please enter an integer:"));

let sum = 0;


for (let i = 0; i <= number2; i++) {
  sum += i;
}

alert(`The sum of integers from 0 to ${number2} is: ${sum}`);



