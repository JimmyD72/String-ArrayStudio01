const input = require('readline-sync');
let str = "LaunchCode";
let newStr = str.slice(3, str.length);
let newString = newStr+str.slice(0,3);
console.log(newString);
let templit = str;
let templit2 = newString;
console.log(`Somehow, ${templit} got all mixed around and now looks like ${templit2}`);

let n = Number(input.question("How many letters would you like to displace?"));

if (n <= str.length) {
   let displaced = str.slice(3) + str.slice(0, n);
  console.log(`What it should look like is this "${str}"`);
  console.log(`Instead it looks like this "${displaced}"`);
}   else { 
  let displaced = str.slice(n) + str.slice(0, 3);
  console.log (`What it should look like is this "${str}" so...`);
  console.log (`..uh, yeah, we went ahead and only moved it 3 places because you tried  to move too many letters and this is what that looks like "${templit2}"`);
}

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.



//Use a template literal to print the original and modified string in a descriptive phrase.



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
