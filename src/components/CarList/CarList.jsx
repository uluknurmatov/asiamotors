import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { carContext } from '../../contexts/CarsContexts';
import CarCard from '../CarCard/CarCard';
import Sidebar from '../CarsList/Sidebar';
import './CarList.css';
import Right from '../../assets/img/next.png';

const CarList = () => {
    const {getCars, carsData} = useContext(carContext)

    const navigate = useNavigate();

    useEffect(() =>{
        getCars(navigate)
    },[])

    
    return (
        <div className='container'>
            <div className='welcome_flex'>
            <h2 className='title_list'>Today`s Recomendation</h2>
            <Link to={'/cars'}>
            <div className='item_flex'>
                <p className='welcome_item_txt'>All Items</p>
                <img src={Right} alt="" />
                </div>
                </Link>
            </div>
            <div className="list">
                {carsData.map((item) =>(
                    <CarCard key={item.id} item={item} />
                ))}
            </div>
            
        </div>
    );
};

export default CarList;