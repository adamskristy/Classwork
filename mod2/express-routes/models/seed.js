//Starter data to refresh documents in our database
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },

];

const meat = [
    {
        name: 'hamburger',
        type: 'rare'
    },
    {
        name: 'bacon',
        type: 'crispy',
    },
    {
        name: 'chicken',
        type: 'wing',
    }
];

const vegetables = [
    {
        name: 'broccoli',
        color: 'green',
    },
    {
        name: 'kale',
        color: 'green',
    },
    {
        name: 'corn',
        color: 'yellow',
    }
];

module.exports = {
    fruits, 
    meat, 
    vegetables
}