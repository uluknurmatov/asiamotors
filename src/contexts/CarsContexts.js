import React, { useReducer } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { countPrice,getCountProductInCart} from "../helpers/Constants";

export const carContext = React.createContext();

const INIT_STATE = {
    carsData: [],
    carDetails:{},
    paginationPages: 1,
    cart: {
        cars: [],
        totalPrice: 0,
    },
    cartLength: getCountProductInCart(),
};

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_CARS":
            return {...state,
                    carsData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 6
                )
            };
        case "GET_CARS_ALL":
            return {...state,
                    carsData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 10
                )
            };
        case "GET_CARS_DETAILS":
            return {...state, carDetails: action.payload};
            case "GET_CART":
                return { ...state, cart: action.payload };
            case "GET_CART":
                return { ...state, cart: action.payload };
                case "CHANGE_CART_COUNT":
                    return { ...state, cartLength: action.payload };
                default: return {...state} ;
    }
}

const CarContextProvider = ({ children }) => {
    let navigate = useNavigate()
   function postNewCar(car) {
       axios.post("http://localhost:8000/cars", car);
   }

   async function getCars(){

    const search = new URLSearchParams(window.location.search);
    search.set("_limit", 6);
    navigate(`${window.location.pathname}?${search.toString()}`);

       let res = await axios.get(`http://localhost:8000/cars/${window.location.search}`);
       dispatch({
           type: "GET_CARS",
           payload:res,
       })
   }
   async function getCarsAll(){

    const search = new URLSearchParams(window.location.search);
    search.set("_limit", 10);
    navigate(`${window.location.pathname}?${search.toString()}`);

       let res = await axios.get(`http://localhost:8000/cars/${window.location.search}`);
       dispatch({
           type: "GET_CARS_ALL",
           payload:res,
       })
   }

   async function getCarDetails(id){
       let {data} = await axios.get(`http://localhost:8000/cars/${id}`);
       dispatch({
           type:"GET_CARS_DETAILS",
           payload: data,
       });
   }


   async function deleteCar(id){
        await axios.delete(`http://localhost:8000/cars/${id}`);
        let res = await axios.get(`http://localhost:8000/cars`);
        dispatch({
            type: "GET_CARS",
            payload: res,
        });
   }

   function addToCart(item) {
    item.count = 1;
    item.subPrice = item.price;
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    if (!cart) {
        cart = {
            cars: [],
            totalPrice: 0,
        };
    }
    let isAddedToCart = cart.cars.filter((elem) => elem.id === item.id);
    if (isAddedToCart.length > 0) {
        cart.cars = cart.cars.filter((elem) => elem.id !== item.id);
    } else {
        cart.cars.push(item);
    }
    cart.totalPrice = countPrice(cart.cars);
    localStorage.setItem("AsiaMotors", JSON.stringify(cart));

    dispatch({
        type: "CHANGE_CART_COUNT",
        payload: cart.cars.length,
    });
    getCart();
}


function getCart() {
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    if (!cart) {
        cart = {
            cars: [],
            totalPrice: 0,
        };
    }
    dispatch({
        type: "GET_CART",
        payload: cart,
    });
}
function checkShoeInCart(id) {
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    if (!cart) {
        cart = {
            cars: [],
            totalPrice: 0,
        };
    }
    let isInCart = cart.cars.filter((elem) => elem.id === id);
    return isInCart.length > 0 ? true : false;
}

function changeCount(count, id) {
    if (count < 1) return;
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    cart.cars = cart.cars.map((elem) => {
        if (elem.id == id) {
            elem.count = count;
            elem.subPrice = elem.price * count;
        }
        return elem;
    });
    cart.totalPrice = countPrice(cart.cars);
    localStorage.setItem("AsiaMotors", JSON.stringify(cart));
    getCart();
}
function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    cart.cars = cart.cars.filter((elem) => elem.id != id);
    cart.totalPrice = countPrice(cart.cars);
    localStorage.setItem("AsiaMotors", JSON.stringify(cart));
      dispatch({
        type: "CHANGE_CART_COUNT",
        payload: cart.cars.length,
    });
    getCart();
}
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return (
        <carContext.Provider value={{
            carsData: state.carsData,
            carDetails: state. carDetails,
            cart: state.cart,
            cartLength: state.cartLength,
            paginationPages: state.paginationPages,
            postNewCar,
            getCars,
            getCarDetails,
            getCart,
            addToCart,
            checkShoeInCart,
            changeCount,
            deleteFromCart,
            getCarsAll,
            deleteCar
        }}>
            {children}
        </carContext.Provider>
    )
}
export default CarContextProvider;