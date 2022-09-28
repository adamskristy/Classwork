const React = require('react')

const DefaultLayout = require ('../layouts/DefaultLayout')

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
            <DefaultLayout title="All Fruit" foodGroup="fruits">
                {/* title and foodgroup are passed as props since they are attributes of DefaultLayout */}
                    <div>
                        <h1>Fruits Index Page</h1>
                        
                        <ul id="fruits-index">
                            {fruits.map((fruit)=> {
                                return (
                                    <li key = {fruit._id}>
                                        The <a href={`/fruits/${fruit._id}`}> {fruit.name}</a> is {fruit.color}
                                    </li>
                                )
                            })}
                        </ul>
                        <nav>
                            <a href ='/fruits/new'>Create a new fruit</a>
                        </nav>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;