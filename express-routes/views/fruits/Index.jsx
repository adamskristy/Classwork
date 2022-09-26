const React = require('react')

class Index extends React.Component {
    render () {

        // Object Destructuring
        const { fruits } = this.props;
        //alternative to const fruits = this.props.fruit

        //map method
        // loops over data
        //manipulates data at each index
        //returns new array with new data

        ////how to render a list of data onto page

        return ( // have to return a single parent element, cannot give siblings, wrap in one parent element
            <div>
                <h1>Fruits Index Page</h1>
                
                <ul>
                    {fruits.map((fruit, i)=> {
                        return (
                            <li key = {i}>
                                The <a href={`/fruits/${i}`}> {fruit.name}</a> is {fruit.color}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ='/fruits/new'>Create a new fruit</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;