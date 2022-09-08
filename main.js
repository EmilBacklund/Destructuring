const person = {
  firstName: "Emil",
  lastName: "Backlund",
  isAdmin: false,
  adress: {
    street: "Bentsebrugata",
    streetNumber: 17,
    zipCode: 0476,
    city: "Oslo",
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const isAdmin = person.isAdmin;

const { firstName: yourFirstName, lastName, isAdmin } = person;

console.log(yourFirstName, lastName, isAdmin);

/* ----- */

function greetPerson({
  firstName: theirName,
  lastName,
  adress: { street, streetNumber, zipCode, city },
}) {
  console.log(
    "Hello",
    theirName,
    lastName,
    street,
    streetNumber,
    zipCode,
    city
  );
}

greetPerson(person);

// Destructuring arrays

const myArray = [230, 59, 390, 348, 1239, 1231, 553, 2366, 1230];

console.log(myArray[2]);

const [firstValue, , thirdValue, ...others] = myArray;

console.log(firstValue, thirdValue, others);

/* ---- */

const coords = [49, 20];

// const x = coords[0];
// const y = coords[1];
// this is easier to write:
const [x, y] = coords;

console.log("x", x, "y", y);
