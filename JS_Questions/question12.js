const now = new Date;
const year =  now.getFullYear();
const month = now.getMonth() + 1;
const date1 =  now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const format = `${year}-${month}-${date1} ${hours}:${minutes}`;

console.log(format);

const format1 = `${date1}-${month}-${year} ${hours}:${minutes}`;

console.log(format1);

const format2 = `${date1}/${month}/${year} ${hours}:${minutes}`;

console.log(format2);