const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class compnent
class Show extends React.Component {
    render () {

        const {name, type} = this.props.meat
    //    const meat = this.props.meat
        return (
            //have to wrap in one parent element
            <DefaultLayout title ={`${name} details`} foodGroup = "meats">
                <div>
                    <h1>Show Page</h1>
                        <p>The {name} is {type}</p>
                    <nav>
                        <a href ='/meats'>Back</a>
                    </nav>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;