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
const average = people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0)/people?.length

console.log("what is the average income of all the people in the array",average);

//  who are the people currently older than 35
console.log("Greater 35", people.filter(person => new Date().getFullYear() - new Date(person.dob).getFullYear() > 35))

// Get a list of people's full name

console.log("List", people.map(item => item?.firstName + " " + item.lastName))

// Add a new object full name to the existing array 

console.log("new obj added", people.map((item) => ({...item, fullName:  item?.firstName + " " + item.lastName})))

// Sort Array

console.log("Sort", people.sort((a,b) => new Date(b.dob) - new Date(a.dob)))

// how many person in each department

console.log("Count of persons in each dept", people.reduce((accumulator, person) => ({...accumulator,[person.department]: accumulator[person.department] + 1 || 1}), {}))
console.log("Dept count", people.reduce((accumulator, person) =>({...accumulator, [person.department]: accumulator[person.department] + 1 || 1}), {}  ))