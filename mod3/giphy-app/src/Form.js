function Form({getGiphy}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        getGiphy()
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Get gif" />
            </form>
        </div>
     );
}

export default Form;