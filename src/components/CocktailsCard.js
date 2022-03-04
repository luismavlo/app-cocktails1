import axios from 'axios'
import React, { useState } from 'react'

const CocktailsCard = () => {

    const [{
        strDrink, strDrinkThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3
    }, setCocktail] = useState({});

    
    const handleNext = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(resp => setCocktail(resp.data.drinks[0]));
    }

    return (
        <article className='cocktailsCard__card'>
            {
                strDrink === undefined
                    ? (<img src='https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg' />)
                    : (
                        <>
                            <h1>{strDrink}</h1>
                            <img src={strDrinkThumb} alt="" />
                            <div>
                                <p>{strInstructions}</p>
                                <h2>Ingredientes</h2>
                                <ul>
                                    <li>{strIngredient1}</li>
                                    <li>{strIngredient2}</li>
                                    <li>{strIngredient3 || 'No existe este ingrediente...'}</li>
                                </ul>
                            </div>
                        </>
                    )
            }
            <button className='btn btn-primary btn-block' onClick={handleNext}>
                Next
            </button>
        </article>
    )
}

export default CocktailsCard



