## Korrila React Receipts
Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

- Make a Receipt component that renders the receipt's
    - person
    - order
        - main
        - protein
        - rice
        - sauce
        - drink
        - cost
 

- Render the toppings too. You'll need a couple more Receipt components so that you get a view like this (a little css provided for clarity, but not required)

### Conditionally Render the receipts if they have been paid or not
Right now, all the receipts are not paid ( `paid: false`)

Set up a ternary operator to display the receipt if it has not been paid.

Then go into the receipt data and change the value to true and check that the receipt will not display

## Hungry For More
Add a click event on the receipt that changes the value of paid from false to true. Once clicked the receipt should immediately disappear from the browser view