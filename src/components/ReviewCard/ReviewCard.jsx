import React from 'react';

const ReviewCard = ({item}) => {
    return (
        
            <div className='reviews_block'>
                <img src={item.img} alt="" />
                <h5 className='rev_title'>{item.title}</h5>
                <p>{item.country}</p>
            </div>
        
    );
};

export default ReviewCard;