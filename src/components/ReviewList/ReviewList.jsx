import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reviewContext } from '../../contexts/ReviewsContext';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewList.css';
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const ReviewList = (props) => {

    const {getReviews, reviewsData, paginationPages} = useContext(reviewContext);

    const navigate = useNavigate();

    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(window.location.search);
        return search.get("_page");
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(window.location.search);
        search.set("_page", page);
        navigate(`${window.location.pathname}?${search.toString()}`);
        setPage(page);
        getReviews(navigate);
    };

        useEffect(() => {
            getReviews(navigate);
            setPage(getPage(navigate))
        },[])
    useEffect(() => {
        getReviews(navigate)
    },[]);
    return (
        <div className='container'>
            <h2>Review</h2>
            <div className='reviewList'>
            {/* {ReviewsData.map((item) =>(
                <ReviewCard key={item.id} item={item} />
            ))} */}
            {reviewsData.map((item) => (
                <ReviewCard key={item.id} item={item} />
            ))}
            </div>
            <Grid container spacing={3}>
                <Pagination
                    page={+page}
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                />
            </Grid>
        </div>
    );
};

export default ReviewList;