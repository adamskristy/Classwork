const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const { vegetables } = this.props;

        return (
            <DefaultLayout title="edit a vegetable" foodGroup="Vegetables">
                <h1>Edit Page</h1>
                <form action={`/vegetables/${vegetables._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={vegetables.name} />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={vegetables.color} />

                    <input type="submit" value="Edit vegetable"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit