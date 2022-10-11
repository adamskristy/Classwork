const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class compnent
class Show extends React.Component {
    render () {

        const { meat } = this.props;
    
        return (
            //have to wrap in one parent element
            <DefaultLayout title ={`${meat.name} details`} foodGroup = "Meats">
                    <h1>Show {`${meat.name}`} Page</h1>
                        <p>The {meat.name} is {meat.type}</p>

                    <button>
                        <a href={`/meats/${meat._id}/edit`}>Edit</a>
                    </button>

                    <form action={`/meats/${meat._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>

                    <nav>
                        <a href ='/meats'>Back</a>
                    </nav>
            </DefaultLayout>
        );
    }
}
module.exports = Show;