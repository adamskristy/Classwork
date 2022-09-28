const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render () {

    
        const { meat } = this.props;
        //<DefaultLayout title = {${meats.name} details} foodGroup ="meat" >
        

        return ( 
            <DefaultLayout title ="All Meat" foodGroup="meats">
                <div>
                    <h1>Meats Index Page</h1>
                    
                    <ul id ="meats-index">
                        {meat.map((meats)=> {
                            return (
                                <li key = {meat._id}>
                                    The <a href={`/meats/${i}`}> {meats.name}</a> is {meats.type}
                                </li>
                            )
                        })}
                    </ul>
                    <nav>
                        <a href ='/meats/new'>Create a new meat</a>
                    </nav>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;