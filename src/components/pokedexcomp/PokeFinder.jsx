import React from 'react'

const PokeFinder = ({handleSubmit, types}) => {
    return (
        <section className='layout-pokedex'>
            <div className='form-finder'>
                <h4><i><strong>Welcome!!</strong></i><span>, here you can find your favorite pokemon!!</span></h4>
                <form onSubmit={handleSubmit} className='input-group'>
                    <div className="hstack gap-1 col-md-12">
                        <input id='pokename' type="text" className='form-control form-control-lg text-danger' placeholder='pokemon name' />
                        <div className="vr"></div>
                        <button type='submit' className='btn btn-danger btn-lg'>Search</button>
                        <div className="vr"></div>
                        <select className="form-select form-select-lg text-danger">
                            <option value={''}>-Pokemon type-</option>
                            {
                                types?.map(ty => {
                                    return <option key={ty} value={ty}>{ty}</option>
                                })
                            }
                        </select>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PokeFinder