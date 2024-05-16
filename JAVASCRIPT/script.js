const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return character + name;

// console.log(test); // This line will cause an error because 'test' is not defined outside the function's local scope

const call = padRow("CamperChan");
console.log(call);

// Rest of the code...
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);