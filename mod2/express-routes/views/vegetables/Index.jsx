const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component {
    render () {

        
        const { vegetables } = this.props;
    

        return ( 
            <DefaultLayout title="All Veggies" foodGroup="Vegetables">
                <h1>Vegetables Index Page</h1>
                
                <ul id="vegetables-index">
                    {vegetables?.map((vegetables)=> {
                        return (
                            <li key = {vegetables._id}>
                                The <a href={`/vegetables/${vegetables._id}`}> {vegetables.name}</a> is {vegetables.color}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ='/vegetables/new'>Create a new vegetable</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;