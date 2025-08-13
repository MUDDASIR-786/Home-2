// ==========================
// Task 1 – Student Test Score
// ==========================
let t1 = 85;
let t2 = 90;
let t3 = 78;

let totalTest = t1 + t2 + t3;
let markAverage = totalTest / 3;
let marksLeft = 300 - totalTest;
let bonusMarks = totalTest + 1;
let penaltyAverage = markAverage - 1;
let isEvenOrOdd = totalTest % 2;

document.write("<b>Task 1 – Student Test Score</b><br>");
document.write("Total Marks: " + totalTest + "<br>");
document.write("Average: " + markAverage + "<br>");
document.write("Marks left for perfect score: " + marksLeft + "<br>");
document.write("Total with Bonus: " + bonusMarks + "<br>");
document.write("Average after Penalty: " + penaltyAverage + "<br>");
document.write("Even(0) or Odd(1): " + isEvenOrOdd + "<br><br>");

console.log("Total Marks:", totalTest);
console.log("Average:", markAverage);
console.log("Marks Left:", marksLeft);
console.log("Bonus Total:", bonusMarks);
console.log("Penalty Average:", penaltyAverage);
console.log("Even or Odd:", isEvenOrOdd);


// ==========================
// Task 2 – Mango Sharing
// ==========================
let mangoes = 25;
let givenToSister = 5;
let remainingMangoes = mangoes - givenToSister;
let perFriend = Math.floor(remainingMangoes / 4);
let leftOver = remainingMangoes % 4;
let totalWithExtra = mangoes + 2;
let friend1Share = perFriend + 1;
let friend2Share = perFriend - 1;

document.write("<b>Task 2 – Mango Sharing</b><br>");
document.write("Per Friend: " + perFriend + "<br>");
document.write("Left Over: " + leftOver + "<br>");
document.write("Total with Extra Mangoes: " + totalWithExtra + "<br>");
document.write("Friend 1 Share after Increment: " + friend1Share + "<br>");
document.write("Friend 2 Share after Decrement: " + friend2Share + "<br><br>");

console.log("Per Friend:", perFriend);
console.log("Left Over:", leftOver);
console.log("Total with Extra:", totalWithExtra);
console.log("Friend 1 Share:", friend1Share);
console.log("Friend 2 Share:", friend2Share);


// ==========================
// Task 3 – num1 & num2 Operations
// ==========================
let num1 = 10;
let num2 = 3;

let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

num1++;
num2--;

document.write("<b>Task 3 – num1 & num2 Operations</b><br>");
document.write("Addition: " + add + "<br>");
document.write("Subtraction: " + sub + "<br>");
document.write("Multiplication: " + mul + "<br>");
document.write("Division: " + div + "<br>");
document.write("Modulus: " + mod + "<br>");
document.write("num1 after Increment: " + num1 + "<br>");
document.write("num2 after Decrement: " + num2 + "<br><br>");

console.log("Addition:", add);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);
console.log("Modulus:", mod);
console.log("num1 Incremented:", num1);
console.log("num2 Decremented:", num2);


// ==========================
// Task 4 – Shopping Bill
// ==========================
let shirtPrice = 20;
let jeansPrice = 40;
let totalShirts = 2;
let totalJeans = 1;
let discount = 10;

let totalCostBefore = (shirtPrice * totalShirts) + (jeansPrice * totalJeans);
let finalPrice = totalCostBefore - discount;
let totalItems = totalShirts + totalJeans;
let avgItemCost = totalCostBefore / totalItems;
let isItemsEven = totalItems % 2;
discount++;
totalItems--;

document.write("<b>Task 4 – Shopping Bill</b><br>");
document.write("Total Cost Before Discount: " + totalCostBefore + "<br>");
document.write("Final Price After Discount: " + finalPrice + "<br>");
document.write("Average Item Cost: " + avgItemCost + "<br>");
document.write("Items Even(0) or Odd(1): " + isItemsEven + "<br>");
document.write("Discount after Increment: " + discount + "<br>");
document.write("Items after Decrement: " + totalItems + "<br><br>");

console.log("Total Cost Before:", totalCostBefore);
console.log("Final Price:", finalPrice);
console.log("Average Item Cost:", avgItemCost);
console.log("Items Even or Odd:", isItemsEven);
console.log("Discount Incremented:", discount);
console.log("Items after Decrement:", totalItems);


// ==========================
// Task 5 – Player Scores
// ==========================
let playerA = 12;
let playerB = 15;

let totalTeamScore = playerA + playerB;
let scoreDifference = playerB - playerA;
let powerScore = playerA * playerB;
let scoreRatio = playerB / playerA;
let isAEven = playerA % 2;
playerA++;
playerB--;

document.write("<b>Task 5 – Player Scores</b><br>");
document.write("Total Team Score: " + totalTeamScore + "<br>");
document.write("Score Difference (B - A): " + scoreDifference + "<br>");
document.write("Power Score: " + powerScore + "<br>");
document.write("Score Ratio (B / A): " + scoreRatio + "<br>");
document.write("A's Score Even(0) or Odd(1): " + isAEven + "<br>");
document.write("A's Score after Increment: " + playerA + "<br>");
document.write("B's Score after Decrement: " + playerB + "<br><br>");

console.log("Total Team Score:", totalTeamScore);
console.log("Score Difference:", scoreDifference);
console.log("Power Score:", powerScore);
console.log("Score Ratio:", scoreRatio);
console.log("A Even or Odd:", isAEven);
console.log("A after Increment:", playerA);
console.log("B after Decrement:", playerB);
