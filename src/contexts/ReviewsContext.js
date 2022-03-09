import React, { useReducer } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const reviewContext = React.createContext();

const INIT_STATE = {
    reviewsData: [],
    paginationPages: 1,
};

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_REVIEWS":
            return {...state, 
                reviewsData: action.payload.data,
                 paginationPages: Math.ceil(
                     action.payload.headers["x-total-count"] / 6
                 )
            };
        default: return state;
    }
}

const ReviewContextProvider = ({ children}) => {
    let navigate = useNavigate()
    function postNewReview(review){
        axios.post("http://localhost:8000/review", review)
    }


async function getReviews(){
    const search = new URLSearchParams(window.location.search);
    search.set("_limit", 6);
    navigate(`${window.location.pathname}?${search.toString()}`);

       let res = await axios.get(`http://localhost:8000/review/${window.location.search}`);
       dispatch({
           type: "GET_REVIEWS",
           payload:res,
       })
}

const [state, dispatch] = useReducer(reducer, INIT_STATE)

return (
    <reviewContext.Provider value={{
        reviewsData: state.reviewsData,
        postNewReview,
        getReviews
    }}>
        {children}
    </reviewContext.Provider>
)
}
export default ReviewContextProvider