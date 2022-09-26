const React = require('react')

// class compnent
class Show extends React.Component {
    render () {
       const meat = this.props.meat
        return (
            //have to wrap in one parent element
            <div>
                <h1>Show Page</h1>
                    <p>The {meat.name} is {meat.type}</p>
                    {/* <p>{fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</p> */}
                <nav>
                    <a href ='/meats'>Back</a>
                </nav>
            </div>
            
        );
    }
}
module.exports = Show;