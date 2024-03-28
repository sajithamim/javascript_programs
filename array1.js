const people = [
  {
    id: 1,
    firstName: "John Doe",
    lastName: "Johnson",
    email: "john.doe@example.com",
    city: "New York",
    salary: 50000,
    dob: "1992-05-15",
    department: "Marketing"
  },
  {
    id: 2,
    firstName: "Jane Smith",
    lastName: "Johnson",
    email: "jane.smith@example.com",
    city: "Los Angeles",
    salary: 60000,
    dob: "1997-10-20",
    department: "Marketing"
  },
  {
    id: 3,
    firstName: "Michael Johnson",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    city: "Chicago",
    salary: 70000,
    dob: "1982-03-08",
    department: "Operations"
  },
];

// what is the average income of all the people in the array

const average = (people) => {
  return (
    people.reduce((accumulator, person) => accumulator + person.salary, 0) /
    people?.length
  );
};

console.log(average(people));

//  who are the people currently older than 30

console.log(
  "who are the people currently older than 30",
  people.filter(
    (person) =>
      new Date().getFullYear() - new Date(person.dob).getFullYear() > 20
  )
);

// Get a list of people's full name

console.log(
  "Get a list of people's full name ",
  people.map((person) => person?.firstName + " " + person?.lastName)
);
console.log(
  "Add a new object full name to the existing array ",
  people.map((person) => ({
    ...person,
    fullName: `${person?.firstName} ${person?.lastName}`,
  }))
);

// Sort Array

console.log(
  "sort array",
  people.sort((a, b) => new Date(b.dob) - new Date(a.dob))
);

// how many person in each department

console.log("Department Persons", people.reduce((accumulator, person) => ({ ...accumulator, [person.department]: accumulator[person.department] + 1 || 1}),{}))