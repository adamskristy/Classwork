// Array methods


const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]
  

////////////////////
/// FILTER
////////////////////

//takes single function which has param of item, which represents each item in the array
const filteredItems = items.filter((item) => {
    //return a true or false statement of what we want to include in the array
    return item.price <= 100
})
  
console.log(filteredItems)
console.log(items) //original array is still intact


////////////////////
/// MAP
////////////////////

//takes one array and converts to a new array so all items are different
//useful when want to tak object and grab specific data from it
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)
console.log(items)
