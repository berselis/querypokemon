import React from 'react'

const PokePaginations = ({ cardPerPage, totalCards, paginate }) => {
    const pageNumbers = [];
    for (let x = 2; x <= Math.ceil(totalCards / cardPerPage); x++) {
        pageNumbers.push(x)
    }
    if (totalCards <= 0) {
        return (
            <section className='col-md-12 col-sm-12 col-xs-12'>
                <div className='paginations'></div>
            </section>
        )
    }

    return (
        <section className='col-md-12 col-sm-12 col-xs-12'>
            <div className='paginations'>
                <ul className='list-paginations'>
                    <li onClick={paginate} key={1} className='num active'>1</li>
                    {
                        pageNumbers.map(num => <li onClick={paginate} key={num} className='num'>{num}</li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default PokePaginations