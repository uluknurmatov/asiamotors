export const AUTH_API = "http://35.223.58.241:5000";
// export const DB_JSON = "http://localhost:8000/user/";
export const JSON_API = "http://localhost:8000/car";

export function countPrice(array) {
    return array.reduce((sum, elem) => {
        return sum + parseInt(elem.subPrice);
    }, 0);
}
export function getCountProductInCart() {
    let cart = JSON.parse(localStorage.getItem("AsiaMotors"));
    return cart ? cart.cars.length : 0;
}

