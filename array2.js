const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: true, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
    { orderId: '234', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered
console.log("Problem 1:", orders.filter((item) => item?.orderId === '234' && !item?.delivered))

// 2) Create a new property on each order with the total price of items ordered.
console.log("Problem 2:", orders.map((item) => ({...item, totalPrice: item?.items.reduce((acc, product) => acc + product.price, 0)})))

// 3) Have all the orders been delivered?
console.log("Problem 3:",orders?.every(order => order.delivered))

// 4) Has the customer with ID '123' made any orders?
console.log("Problem 4:", orders.some(e => e.orderId == '123'))

// 5) Have any products with an id of 123 been sold?

console.log("Problem 5,", orders.some(e => e.items.find(i => i.productId == '123')))


