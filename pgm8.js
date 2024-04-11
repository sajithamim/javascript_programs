// Splice method examples

const vehicles = ['car', 'Bike', 'Bus', 'Truck']
// console.log("vehicles.splice(1)", vehicles.splice(1))
vehicles.splice(1, 1)

console.log("Remove 1 ele", vehicles) 

// Insert an element

vehicles.splice(1,0,"cycles", "SUV")
console.log("Insert 1 ele", vehicles)

// Replace an element

const fruits = ["orange", "Apple", "Grapes"]
fruits.splice(1,1,"Kiwi", "Pineapple")
console.log("Replace and add 1 ele", fruits)