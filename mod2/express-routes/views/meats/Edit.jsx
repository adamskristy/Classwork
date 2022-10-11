const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { meat } = this.props

        return (
            <DefaultLayout title="edit a meat" foodGroup="Meats">
                <h1>Edit Page</h1>
                <form action={`/meats/${meat._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={meat.name} />

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" defaultValue={meat.type} />

                    <input type="submit" value="Edit Meat"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit