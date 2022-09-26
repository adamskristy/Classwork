const React = require('react')

class Index extends React.Component {
    render () {

        // Object Destructuring
        const { vegetables } = this.props;
    

        return ( // have to return a single parent element, cannot give siblings, wrap in one parent element
            <div>
                <h1>Vegetables Index Page</h1>
                
                <ul>
                    {vegetables.map((vegetables, i)=> {
                        return (
                            <li key = {i}>
                                The <a href={`/vegetables/${i}`}> {vegetables.name}</a> is {vegetables.color}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href ='/vegetables/new'>Create a new vegetable</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;