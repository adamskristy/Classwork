const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        let { fruit } = this.props

        return (
            <DefaultLayout title="Edit A Fruit">
                <h1>Edit Route (View)</h1>
                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={fruit.name}/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" name="color" id="color" defaultValue={fruit.color}/>

                    <label htmlFor="readyToEat">Ready To Eat:</label>
                    <input type="checkbox" name="readyToEat" id="readyToEat" defaultChecked={fruit.readyToEat} />

                    <input type="submit" value="Edit" />
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = Edit;