//  Refer this video for more understanding : https://www.youtube.com/watch?v=mk7RpyHMUrU

let obj = {
  name: 'peter',
}

let user = obj
user.name = 'Bruce'
console.log('user', user)
console.log('obj', obj)
// whenever we copy an object to an another object there doesn't occur any data change, there occurs reference change

// One method mentioned below for shallow copy

let student = { 
    name: 'Sajitha'
}

let value = Object.assign({},student)
value.name = "Savitha"
console.log("Student is", student)
console.log("value is", value)


// Another method mentioned below for shallow copy

let school = { 
    class: 'V'
}

let value_class = {...school}
value_class.class = "X"
console.log("school is", school)
console.log("value_class is", value_class)

// Note: Shallow copyy affects only upto first level

let user_obj = {
    name: 'peter',
    address:{
        city:"Noida",
        state:"UP"
    }
  }
  
  let customer = {...user_obj}
  customer.address.city = 'Gurgaon',
  console.log('customer', customer)
  // Note: Shallow copyy affects only upto first level, so solution forthis problem is Deep copy

  let user_deepcopy = {
    name: 'peter',
    address:{
        city:"Noida",
        state:"UP"
    }
  }
  
  let customer_deepcopy = JSON.parse(JSON.stringify(user_deepcopy))
  customer_deepcopy.address.city = 'Gurgaon';
  console.log('customer_deepcopy', customer_deepcopy)
  console.log('user_deepcopy', user_deepcopy)