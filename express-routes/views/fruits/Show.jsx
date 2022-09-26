const React = require('react')

// class compnent
class Show extends React.Component {
    render () {
       const fruit = this.props.fruit
        return (
            //have to wrap in one parent element
            <div>
                <h1>Show Page</h1>
                    <p>The {fruit.name} is {fruit.color}</p>
                    <p>{fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</p>
                <nav>
                    <a href ='/fruits'>Back</a>
                </nav>
            </div>
            
        );
    }
}
module.exports = Show;