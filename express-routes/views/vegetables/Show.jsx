const React = require('react')

// class component
class Show extends React.Component {
    render () {
       const vegetables = this.props.vegetables
        return (
            //have to wrap in one parent element
            <div>
                <h1>Show Vegetables Page</h1>
                    <p>The {vegetables.name} is {vegetables.color}</p>
                <nav>
                    <a href ='/vegetables'>Back</a>
                </nav>
            </div>
            
        );
    }
}
module.exports = Show;