const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render () {

    
        const { meat } = this.props;
        
        

        return ( 
            <DefaultLayout title="All Meats" foodGroup="meats" >
                    <h1>Meats Index Page</h1>
                    <ul id ="meats-index">
                        {meat.map((meat)=> {
                            return (
                                <li key = {meat._id}>
                                    The <a href={`/meats/${meat._id}`}> {meat.name}</a> is {meat.type}
                                </li>
                            )
                        })}
                    </ul>
                    <nav>
                        <a href ='/meats/new'>Create a new meat</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;