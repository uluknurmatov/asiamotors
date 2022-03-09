import React, { useContext, useState } from 'react';
import './Header.css';
import Shopping from '../../assets/img/shopping.png';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import Navbar from '../Navbar/Navbar';
import { carContext } from '../../contexts/CarsContexts';
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge"


const Header = ({ }) => {
    const {currentUser, logoutUser} = useContext(authContext);
    const navigate = useNavigate();

    const {getCars, cartLength} = useContext(carContext);

    const [searchValue, setSearcValue] = useState(getSearchValue());

    const handleValue = (e) => {
        const search = new URLSearchParams(window.location.search);
        search.set("q", e.target.value);
        navigate(`${window.location.pathname}?${search.toString()}`);
        setSearcValue(e.target.value);
        getCars(navigate);
    };
    function getSearchValue() {
        const search = new URLSearchParams(window.location.search);
        return search.get("q");
    }
    return (
        <header>
           <div className='container'>
               <div className="navbar">
                   <Link to={'/'}>
                   <div className="logo">
                       <h1>Asia<span class="colortext">Motors</span></h1>
                   </div>
                   </Link>
                   <div className='center'>
                   <div className="search">
                   <form class="form-wrapper cf">
                       <input value={searchValue} onChange={handleValue}   type="text" placeholder='Search' required 
                       />
                       <button   type="submit">Search</button>
                       </form>
                   </div>
                   </div>
                   <Link to="/cart" style={{ color: "inherit" }}>
                            <IconButton
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge
                                    badgeContent={cartLength}
                                    color="secondary"
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                       {/* <button className='signIn'>Sign In</button>
                       <button className='signUp'>Sign Up</button> */}
                        {currentUser ? (
                            <div className='sign'>
                            <button onClick={logoutUser} className='signIn'>Sign Out</button> 
                            </div>
                            ) : (
                                <div className="sign">
                                <Link to='/login'>
                                <button onClick={() => navigate("/login")} className='signIn'>Sign In</button>
                                </Link>
                                <Link to='/register'>
                                <button className='signUp' onClick={() => navigate("/register")}>Sign Up</button>
                                </Link>
                   </div>
                            )}
               </div>
               </div> 
                <hr></hr>
                <Navbar/>
        </header>
        
    );
};

export default Header;