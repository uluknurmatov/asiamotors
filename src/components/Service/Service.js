import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { reviewContext } from '../../contexts/ReviewsContext';
import './Service.css';
import Right from '../../assets/img/right.png';

const Service = () => {
    const {getReviews, reviewsData} = useContext(reviewContext);

    const navigate = useNavigate();

    useEffect(() => {
        getReviews(navigate)
    },[])

    return (
        <div className='service'> 
            <div className='container'>
                <div className='service_container'>
                <h2 className='service_title'><span class="colortext">11.520 vehicles </span> shipped with <br/> with AsiaMotor`s professional Services</h2>
                <Link to={'/reviews'}>
                <div className='service_more'>
                <p >See More</p>
                <img src={Right} />
                </div>
                </Link>
                    <div className='list'>
                        {reviewsData.map((item) =>(
                            <div className='review_block'>
                                <img className='review_img' src={item.img} />
                                <p className='review_title'>{item.title}</p>
                                <p className='review_country'>{item.country}</p>
                            </div>
                        ))}
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Service;