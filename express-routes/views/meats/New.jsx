const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title="create a new fmeat" foodGroup="meats">
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
            </DefaultLayout>
        )
    }
}

module.exports = New;