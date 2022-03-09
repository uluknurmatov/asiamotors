import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './CarsList.css'
import { carContext } from '../../contexts/CarsContexts';
import { useNavigate } from 'react-router-dom';
import CarListCard from '../CarListCard/CarListCard';
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const CarsList = (props) => {

    const {getCarsAll, carsData, paginationPages} = useContext(carContext);
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
        getCarsAll(navigate);
    };

        useEffect(() => {
            getCarsAll(navigate);
            setPage(getPage(navigate))
        },[])


    return (
        <div className='container'>
            <div className='carList'>
            <Sidebar {...props}/>
            
               <div className='cardList'>
               <h2 className='wrapper_first__title'>Search Cars</h2>
            <h4 id='card' className='wrapper_title'>Search Result</h4>
                    {carsData.map((item) => (
                        <CarListCard key = {item.id} item={item} />
                    ))}
           <Grid container spacing={3}>
                <Pagination
                    page={+page}
                    onChange={handlePage}
                    count={paginationPages}
                    color="primary"
                />
            </Grid>
           </div>
            </div>
        </div>
    );
};

export default CarsList;