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
    {
        id: 1,
        firstName: "Samuel",
        lastName: "Johnson",
        email: "samuel.doe@example.com",
        city: "US",
        salary: 50000,
        dob: "1992-05-15",
        department: "Finance"
      },
  ];
  

//   Find out ther person who has salary 50000

const find_fifty_salary = people.find(item => item.salary === 50000)
console.log("Find out ther person who has salary 50000", find_fifty_salary)

//   Filter out all persons who has salary 50000

const filter_fifty_salary = people.filter(item => item.salary === 50000)
console.log("Filter out all persons who has salary 50000", filter_fifty_salary)