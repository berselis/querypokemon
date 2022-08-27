import React from 'react'

const Home = ({handleSubmit}) => {
    return (
        <div className='main'>
            <h2><strong>Home</strong></h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text"/>
                <button type='submit'>OK</button>

            </form>



        </div>
    )
}

export default Home