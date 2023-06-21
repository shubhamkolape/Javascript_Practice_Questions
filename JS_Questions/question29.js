const filename = "index.html";

const part = filename.split('.');

console.log(part);

const extension = part[part.length - 1 ];

console.log(`The extension of ${filename} is ${extension}`);