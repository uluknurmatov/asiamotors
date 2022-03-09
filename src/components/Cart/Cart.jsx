import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { carContext } from '../../contexts/CarsContexts';
import "./Cart.css";


const Cart = () => {
    const { cart, getCart, changeCount, deleteFromCart } =
    useContext(carContext);

    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    },[]);

    return (
        <div className="cart__container">
            <span>Корзина</span>
            <div className="cart__items">
                {cart.cars.length > 0 ? (
                    cart.cars.map((elem) => (
                        <div key={elem.id} className="cart__element">
                            <Link to={`/details/${elem.id}`}>
                            <img
                                className="cart__image"
                                src={elem.images[0]}
                                alt="shoe-photo"
                            />
                            <span>{elem.make}</span>
                            <span>Модель: {elem.model}</span>
                            </Link>
                            <span>
                                Количество:
                                <input
                                    onChange={(event) =>
                                        changeCount(event.target.value, elem.id)
                                    }
                                    className="cart__shoes-count"
                                    value={elem.count}
                                    type="number"
                                />
                            </span>
                            <span>Цена: {elem.price}</span>
                            <span
                                onClick={() => deleteFromCart(elem.id)}
                                className="cart__delete-btn"
                            >
                                Удалить
                            </span>
                        </div>
                    ))
                ) : (
                    <span>Корзина пуста</span>
                )}
                <span className="cart__total-price">
                    Общая сумма: {cart.totalPrice} $
                </span>
                <div className="btn_buy">
                        <a href="https://forms.gle/bqK2ETis6tEZuKob8">
                        <button >BUY NOW</button>
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default Cart;