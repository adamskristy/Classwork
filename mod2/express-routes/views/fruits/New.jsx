const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title="create a new fruit" foodGroup="Fruits">
                <div>
                    <h1>New Fruit Page</h1>
                    <form action ='/fruits' method ="POST">
                        
                        <label htmlFor="name">Name:</label>
                        <input type="text" id ="name" name="name"/>

                        <label htmlFor="color">Color:</label>
                        <input type="text" id ="color" name="color"/>

                        <label htmlFor="readyToEat">Is Ready To Eat:</label>
                        <input type="checkbox" id ="readyToEat" name="readyToEat"/>

                        <input type="submit" value="Create meat"/>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New;