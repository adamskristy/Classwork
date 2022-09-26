const React = require('react')

class New extends React.Component {
    render () {
        return (
            <div>
                <h1>New Meat Page</h1>
                <form action ='/meats' method ="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id ="name" name="name"/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id ="type" name="type"/>

                    <input type="submit" name="" value="Create Meat"/>
                </form>
            </div>
        )
    }
}

module.exports = New;