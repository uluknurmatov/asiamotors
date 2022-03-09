import React, { useContext } from 'react';
import './CarListCard.css';
import Security from '../../assets/img/security 1.png';
import { Link } from 'react-router-dom';
import { carContext } from '../../contexts/CarsContexts';

const CarListCard = ({item}) => {
    const { addToCart, checkShoeInCart} = useContext(carContext);
    return (
        
        <div>
            <div className='cardList_block'>
            <hr></hr>
            <Link to={`/details/${item.id}`}>
            <div className='cardList_wrapper'>
                <div className='cardList_img'>
                    <img src={item.images[0]} alt="" />
                </div>
                <div className='cardList_name'>
                    <h5>{item.make} {item.model}</h5>
                    <div className='cardList_block__wrapper'>
                        <div className='cardlist_block_left'>
                    <p>{item.volume}/ {item.fuel}</p>
                    <p>{item.transmission}</p>
                    <p>{item.vehicle}</p>
                    </div>
                    <div>
                        <p>{item.drive}</p>
                        <p>{item.color}</p>
                    </div>
                    </div>
                </div>
                <div className='cardList_res'>
                    <div className='cardList_block__wrapper'>
                        <p className='cardlist_block_left'>{item.year}</p>
                        <p>{item.mileage} km</p>
                    </div>
                    <div className='cardList_block__wrapper' >
                        <img  src={Security} alt="" />
                        <p id='seller'>Super Seller</p>
                    </div>
                </div>
            </div>
                <div className='cardList_btn'>
                    <button>USD {item.price}</button>
                </div>
            </Link>
            </div>
            <hr></hr>
        </div>
    );
};

export default CarListCard;