const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class compnent
class Show extends React.Component {
    render () {
       
        //since we deconstructed dont need to do {fruit.name}
        const {name, color, readyToEat, _id } = this.props.fruit

        return (
            //have to wrap in one parent element

            <DefaultLayout title ={`${name} details`} foodGroup = "Fruits">
                <div>
                    <h1>Show {`${name}`} Page</h1>
                        <p>The {name} is {color}</p>
                        <p>{readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</p>

                    <button>
                        <a href={`/fruits/${_id}/edit`}>Edit</a>
                    </button>


                    <form action ={`/fruits/${_id}?_method=DELETE`} method="POST">
                    {/* html forms don't accept any method other than POST or GET */}

                        <input type="submit" value="Delete" />
                    </form>

                    <nav>
                        <a href ='/fruits'>Back</a>
                    </nav>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;