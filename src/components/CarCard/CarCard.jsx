import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css'

const CarCard = ({item}) => {
    return (
        <div className='block'>
            <Link to={`/details/${item.id}`}>
            <div className='card'>
                <div className='card_img'>
                    <img src={item.images[0]} alt="" />
                </div>
                <div className='card_name'>
                    <p className='model_car'>{item.make} {item.model}</p>
                    <p>{item.fuel}/ {item.transmission}/ {item.vehicle}</p>
                </div>
                <div className="card_price">
                    <p>USD {item.price}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CarCard;