const input = 3;
let output = '';

for (let row = 1; row <= input; row++) {
  for (let column = 1; column <= input; column++) {
    output = output + '*';
  }
  console.log(output);
}