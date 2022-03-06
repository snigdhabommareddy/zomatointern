import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    <Link to="/">
                        
                            <div class="card mb-5" style={{ width: '18rem' }}>
                                <img class="card-img-top" src={item.meal_image} alt="Card image cap" />
                                <div class="card-body">
                                    <span class="link"><h5 class="card-title">{item.mealtype}</h5></span>
                                    <p class="card-text text-secondary">{item.content}</p>
                                </div>
                            </div>
                        
                    </Link>
                )
            })
        }

    }

    return (
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay