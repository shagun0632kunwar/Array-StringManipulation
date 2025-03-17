// Reversing string without using .reverse()
let stringName = "Shagun";
let arr = [];
for (let j = stringName.length; j >= 0; j--) {
  arr.push(stringName[j]);
}
console.log("Hi");
console.log(arr.join(""));
