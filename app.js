// //Q1

let info = [];

let name = prompt("Enter your name");

info.push(name);

let gender;

while (true) {
  gender = prompt("Enter gender");
  if (gender.toLowerCase() === "male" || gender.toLowerCase() === "female") {
    info.push(gender);
    break;
  } else {
    alert("try again!");
  }
}

if (gender.toLowerCase() == "male") {
  alert(`hello mr.${name}`);
} else if (gender.toLowerCase() == "female") {
  alert(`hello ms.${name}`);
} else {
  alert("hello there !");
}

let order = prompt("do you want shawarma, zinger, burger?");

if (order.toLowerCase() == "shawarma") {
  alert("preparing shawarma ...");
  info.push(order);
} else if (order.toLowerCase() == "zinger") {
  alert("preparing zinger ...");
  info.push(order);
} else if (order.toLowerCase() == "burger") {
  alert("preparing burger ...");
  info.push(order);
} else {
  alert("incorrect input, try again!");
}
console.log(info);



// //Q2
// let num = prompt("Enter your number from 0 to 10:");
// switch (Number(num)) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("FOUR");
//     break;
//   case 5:
//     console.log("FIVE");
//     break;
//   case 6:
//     console.log("SIX");
//     break;
//   case 7:
//     console.log("SEVEN");
//     break;
//   case 8:
//     console.log("EIGHT");
//     break;
//   case 9:
//     console.log("NINE");
//     break;
//   default:
//     console.log("PLEASE TRY AGAIN");
// }

// task two
//Q1
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

// //Q2
// let number;

// while (true) {
//   number = prompt("Please enter a number between 0 and 100:");

//   if (number >= 0 && number <= 100) {
//     break;
//   } else {
//     alert("Invalid input. Please enter a number between 0 and 100.");
//   }
// }

// alert(`Thank you! You entered a valid number: ${number}`);

// //Q3

// let number2 = parseInt(prompt("Please enter an integer:"));

// alert(
//   `The sum of integers from 0 to ${number2} is: ${
//     (number2 * (number2 + 1)) / 2
//   }`
// );
