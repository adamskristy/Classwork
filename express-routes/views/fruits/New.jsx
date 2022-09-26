const React = require('react')

class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New Fruit Page</h1>
                <form action ='/fruits' method ="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id ="name" name="name"/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id ="color" name="color"/>

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id ="readyToEat" name="readyToEat"/>

                    <input type="submit" name="" value="Create Fruit"/>
                </form>
            </div>
        )
    }
}

module.exports = New;