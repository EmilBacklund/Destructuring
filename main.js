const person = {
  firstName: 'Emil',
  lastName: 'Backlund',
  isAdmin: false,
  address: {
    street: 'Bentsebrugata',
    streetNumber: 17,
    zipCode: 0476,
    city: 'Oslo',
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
  address: { street, streetNumber, zipCode, city },
}) {
  console.log(
    'Hello',
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

console.log('x', x, 'y', y);

// descructuring with Hesh

// descruct objects

// const {} = objectName;

// Example 2

const person2 = {
  firstName: 'Emil',
  lastName: 'Backlund',
  country: 'Sweden',
};

// const firstName2 = person2.firstName;
// const lastName2 = person2.lastName;
// const country = person2.country;

// const { firstName2, lastName2, country } = person2;

// const greeting = `Hello I am ${firstName2} ${lastName2} and I am from ${country}`;
// console.log(greeting);

function greetUsers(userObject) {
  const { firstName, lastName } = userObject;
  console.log(`Hello ${firstName} ${lastName}`);
}

greetUsers(person2);

const user = {
  firstName: 'Björn',
  lastName: 'Eriksson',
  age: '31',
  country: 'Sweden',
};

greetUsers(user);

function greetUser2({ firstName, country }) {
  console.log(`${firstName} ${country}`);
}

greetUser2(user);

// Destructing in arrays

const people = [
  {
    name: 'Emil',
    age: '30',
    score: 10,
  },
  {
    name: 'Sander',
    age: '28',
    score: 6,
  },
  {
    name: 'Mike',
    age: '28',
    score: 4,
  },
  {
    name: 'Nils',
    age: '14',
    score: 1,
  },
];

const winners = people.filter((currentItem) => {
  if (currentItem.score >= 5) {
    return true;
  }
});

const winners2 = people.filter(({ score }) => {
  if (score >= 5) {
    return true;
  }
});

console.log(winners);
console.log(winners2);

// const [value1, value2] = arrayName;

const streetNumbers = [14, 23, 87, 222];

const [xx, yy] = streetNumbers;

console.log(xx + yy);

const myNames = [
  {
    name: 'Bert',
  },
  {
    name: 'Gudrun',
  },
  {
    name: 'Roger',
  },
  {
    name: 'Gunnar',
  },
];

const [bert, , roger, ...all] = myNames;

console.log(bert, roger);
console.log(...all);

const myCat = {
  name: 'Jackie',
  age: 10,
  typerrr: 'Norsk skogskatt',
};

const { name, age, typerrr: breed } = myCat;

console.log(name, age, breed);
