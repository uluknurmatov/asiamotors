import React, { useContext, useState } from 'react';
import { reviewContext } from '../../contexts/ReviewsContext';


const AddReviews = () => {
    const [review, setReview] = useState({
        country:"",
        title:"",
        description:"",
        img:""
    })

    const {postNewReview} = useContext(reviewContext)
    

    const handleValues = (e) => {
        let newReview = {
            ...review,
        [e.target.name]: e.target.value,
        };
        setReview(newReview)
    };

    const handleClick = () => {
        postNewReview(review);
        setReview({
            country:"",
            title:"",
            description:"",
            img:""
        })
    }
    return (
        <div className='container'>
            <div className="wrapper">
                <div className="add_box">
                <h3>Country</h3>
        <input
          className="inp-add"
          value={review.country}
          name="country"
          onChange={handleValues}
          type="text"
          placeholder="Country"
        />
                </div>

                <div className="add_box">
                <h3>Title</h3>
        <input
          className="inp-add"
          value={review.title}
          name="title"
          onChange={handleValues}
          type="text"
          placeholder="Title"
        />
                </div>

                <div className="add_box">
                <h3>Description</h3>
        <input
          className="inp-add"
          value={review.description}
          name="description"
          onChange={handleValues}
          type="text"
          placeholder="Description"
        />
                </div>

                <div className="add_box">
                <h3>Image</h3>
        <input
          className="inp-add"
          value={review.img}
          name="img"
          onChange={handleValues}
          type="text"
          placeholder="Image"
        />
                </div>
            </div>
            <button onClick={handleClick}>Save</button>
        </div>
    );
};

export default AddReviews;