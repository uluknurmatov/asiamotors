import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCars from './components/AddCars/AddCars';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import CarContextProvider from './contexts/CarsContexts';
import Footer from './components/Footer/Footer';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from './contexts/AuthContext';
import AddReviews from './components/AddReviews/AddReviews';
import ReviewContextProvider from './contexts/ReviewsContext';
import AboutList from './components/AboutList/AboutList';
import WhatMakes from './components/WhatMakes/WhatMakes';
import HowToBuy from './components/HowToBuy/HowToBuy';
import CarsList from './components/CarsList/CarsList';
import Cart from './components/Cart/Cart';
import Steps from './components/Steps/Steps';
import HowToPay from './components/HowToPay/HowToPay';
import Buyers from './components/Buyers/Buyers';
import Contacts from './components/Contacts/Contacts';
import ReviewList from './components/ReviewList/ReviewList';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <CarContextProvider>
                    <ReviewContextProvider>
                    <AuthContextProvider>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/add' element={<AddCars/>} />
                    <Route path='/login' element = {<SignIn/>} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path='/details/:id' element={<Details/>} />
                    <Route path='/addReview' element={<AddReviews/>} />
                    <Route path='/about'  element={<AboutList/>} />
                    <Route path='/number1' element={<WhatMakes/>} />
                    <Route path='/what-is-bis' element={<HowToBuy/>} />
                    <Route path='/cars' element={<CarsList/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/steps' element={<Steps/>} />
                    <Route path='/how-to-pay' element={<HowToPay/>}/>
                    <Route path='/buyers' element={<Buyers/>} /> 
                    <Route path='/contacts' element={<Contacts/>} />
                    <Route path='/reviews' element={<ReviewList/>} />
                </Routes>
                <Footer/>
                </AuthContextProvider>
                </ReviewContextProvider>
                </CarContextProvider>
            </BrowserRouter>
        </div>
    );
};

export default Routing;