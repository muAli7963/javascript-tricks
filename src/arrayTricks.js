//Remove items from array
let ints = [4, 5, 6, 7, 8, 9];

function removeItems(arr, fn) {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1);

    return el;
  });
}

const result = removeItems(ints, num => num > 4);
console.log(result);
console.log(ints);

//find indices
const persons = ["mu", "ali", "mu", "shohs", "ali", "izeko"];

function findIndices(arr, value) {
  let indices = [];

  arr.forEach((el, i) => el === value && indices.push(i));
  return indices;
}

const res = findIndices(persons, "ali");
console.log(res);

//get unique values from array
const girls = ["hana", "laila", "fareda", "hana", "sama", "fareda"];

let newGirls = girls.filter((name, index, array) =>
  array.indexOf(name) === index ? name : ""
);
console.log(newGirls);

//or using set

let set = [...new Set(girls)];
console.log(set);

//find difference and shared values between two arrays
const arr1 = ["ami", "jhon", "fred", "fred"];
const arr2 = ["ami", "jhon", "dalia"];

const shared = arr1.filter(el => arr2.includes(el));
console.log(shared);

const diff = [...new Set(arr1)].filter(el => !arr2.includes(el));
console.log(diff);

//array remove nth of item

let arrayNthItem = (arr, num) => arr.slice(num - 1, num)[0];
console.log(arrayNthItem([12, 45, 78, 96, 52], 4));

//array offest
function arrayOffest(arr, offest) {
  return [...arr.slice(offest), ...arr.slice(0, offest)];
}

console.log(arrayOffest([12, 32, 69, 12, 474, 12], 2));
