const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');  //adding meat in begining of array

console.log(shoppingCart);

shoppingCart.push('Sugar');   //adding sugar in end of array


console.log(shoppingCart);


shoppingCart.splice(4,1);   // remove  the honey from array


console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);