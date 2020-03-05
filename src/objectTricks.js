//iterate over an object

let username = {
  firstName: "mu",
  lastName: "ali"
};

Object.entries(username).forEach(([key, value]) => console.log(key, value));

//merge multiple objects

const user = {
  name: "",
  email: "",
  subscribed: true
};

const firstUser = {
  name: "jhon",
  email: "jhon@gmail.com"
};

// const  data = Object.assign(user, firstUser)
const data = { ...user, ...firstUser };
console.log(data);

//filter an object

const fruits = {
  red: "tomato",
  green: "avocato",
  orange: "orange"
};
function filterObj(object, prop) {
  let filteredObject = {};

  Object.keys(object)
    .filter(k => k !== prop)
    .map(key => (filteredObject[key] = object[key]));

  return filteredObject;
}

console.log(filterObj(fruits, "red"));
