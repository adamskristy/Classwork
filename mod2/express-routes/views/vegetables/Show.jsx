const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Show extends React.Component {
    render () {

        const { vegetables } = this.props;

        return (
            <DefaultLayout title ={`${vegetables.name} details`} foodGroup = "Vegetables">

                <h1>Show {`${vegetables.name}`} Page</h1>
                    <p>The {vegetables.name} is {vegetables.color}</p>

                <button>
                    <a href={`/vegetables/${vegetables._id}/edit`}>Edit</a>
                </button>

                <form action ={`/vegetables/${vegetables._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>
                
                <nav>
                    <a href ='/vegetables'>Back</a>
                </nav>
            </DefaultLayout>
            
        );
    }
}
module.exports = Show;