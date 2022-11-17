console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//----------------------------------Excercise 1----------------------------------//
let favNum = 18;

let guess = window.prompt(
  "Can you guess my favorite number?? Enter your guess here: "
);
console.log(guess);
guessNum = parseInt(guess);
console.log(guessNum);

// Checks the input to see if there is also any non-number characters //
console.log(guess == guessNum);
let actualNum = guess == guessNum;

// If there is any non-numbers in the input, it logs the error //
if (isNaN(guessNum) || actualNum == false) {
  console.log("That is not a valid input. Please input a number.");
} else {
  if (guessNum < favNum) {
    console.log("Sorry, too low.");
  } else if (guessNum > favNum) {
    console.log("Sorry, your guess was too high.");
  } else if (guessNum == favNum) {
    console.log("Congratulations, you made the correct guess!!");
  }
}

//----------------------------------Excercise 2----------------------------------//

let birthMonth = window.prompt("What is your birth month?");

// Changes the string characters to all lowercase to make the switch cases easier to write //
birthMonth = birthMonth.toLowerCase();

switch (birthMonth) {
  case "january":
    console.log("You were born in the winter!");
    break;

  case "february":
    console.log("You were born in the winter!");
    break;

  case "march":
    console.log("You were born in the spring!");
    break;

  case "april":
    console.log("You were born in the spring!");
    break;

  case "may":
    console.log("You were born in the spring!");
    break;

  case "june":
    console.log("You were born in the summer!");
    break;

  case "july":
    console.log("You were born in the summer!");
    break;

  case "august":
    console.log("You were born in the summer!");
    break;

  case "september":
    console.log("You were born in the fall!");
    break;

  case "october":
    console.log("You were born in the fall!");
    break;

  case "november":
    console.log("You were born in the fall!");
    break;

  case "december":
    console.log("You were born in the winter!");
    break;

  default:
    console.log("That is not a month...");
    break;
}

//----------------------------------Excercise 3----------------------------------//

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;

  case "02":
    type = "T-Shirt";
    break;

  case "03":
    type = "Long Sleeve";
    break;

  case "04":
    type = "Sweat Shirt";
    break;

  default:
    type = "Other";
    break;
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;

  case "Bu":
    color = "Blue";
    break;

  case "RD":
    color = "Red";
    break;

  case "PU":
    color = "Purple";
    break;

  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;

  case "M":
    size = "Medium";
    break;

  case "L":
    size = "Large";
    break;

  case "XL":
    size = "Extra Large";
    break;

  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);
