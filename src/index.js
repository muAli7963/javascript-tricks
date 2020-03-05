import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
