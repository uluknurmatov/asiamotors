import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { carContext } from '../../contexts/CarsContexts';
import './Details.css';
import Top from '../../assets/img/top.png';
import Seat from '../../assets/img/seat.png';
import ABS from '../../assets/img/A.png';
import Camera from '../../assets/img/eye.png';
import Like from '../../assets/img/like.png';
import Basket from '../../assets/img/shopping.png';

const Details = ({item}) => {
    const {getCarDetails, carDetails, addToCart, checkShoeInCart, deleteCar} = useContext(carContext);
    const [detailsImage, setDetailsImage] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    

    useEffect(() => {
        getCarDetails(id);
        if(carDetails.images) {
            setDetailsImage(carDetails.images[0])
        }
    },[]);

    function switchImage(index) {
        setDetailsImage(carDetails.images[index]);
    }
    console.log(carDetails)
    
    return (
        <div className='container'>
            <div className="grades">
            {carDetails.sunroof ==="Sunroof" ? (
                <div className='grade'>
                    <div className='det_icons'>
                    <div className='det_true'>
                        <p>Sunroof</p>
                        <img className='det_icons' src={Top} alt="" />
                    </div>
                    </div>
                </div>
                ) : (
                // <div className='det_icons'>
                //     <div className='det_false'>
                //         <p>No Sunroof</p>
                //         <img className='det_icons' src={Top} alt="" />
                //     </div>
                //     </div>
                <div></div>
                    ) }

                {carDetails.seat === "Leather Seat" ? (
                
                    <div className='grade'>
                         <div className='det_icons'>
                    <div className='det_true'>
                        <p>Leather Seat</p>
                        <img className='det_icons' src={Seat} alt="" />
                    </div>
                    </div>
                    </div>
                    ) : (
                    <div></div>
                    ) }

                {carDetails.ABS === "ABS" ? (
                
                    <div className='grade'>
                         <div className='det_icons'>
                    <div className='det_true'>
                        <p>ABS</p>
                        <img className='det_icons' src={ABS} alt="" />
                    </div>
                    </div>
                    </div>
                    ) : (
                    <div></div>
                    ) }

                {carDetails.camera === "Camera" ? (
                
                    <div className='grade'>
                         <div className='det_icons'>
                    <div className='det_true'>
                        <p>Camera</p>
                        <img className='det_icons' src={Camera} alt="" />
                    </div>
                    </div>
                    </div>
                    ) : (
                    <div></div>
                    ) }

                {carDetails.accident === "No Accident" ? (
                
                    <div className='grade'>
                         <div className='det_icons'>
                    <div className='det_true'>
                        <p>No Accident</p>
                        <img className='det_icons' src={Like} alt="" />
                    </div>
                    </div>
                    </div>
                    ) : (
                    <div></div>
                    ) }
                    
                    </div>
                <div className='det_title_welcome'>
                <h2 className='det_title'>{carDetails.year} {carDetails.make} {carDetails.model} {carDetails.fuel}/ {carDetails.transmission}</h2>
                <h2 className='det_title'>USD {carDetails.price}</h2>
                </div>
            <div className="det_wrapper">
                <div className="det_welcome">
                    <div className='image'>
                        <img className='image_img' src={detailsImage} alt="" />
                    </div>
                    <div className="det_images">
                    {carDetails.images ?.map((elem, index) => (
                            <img 
                            onClick={() => switchImage(index)}
                             key = {elem.id} 
                             className='det_img' 
                             src={elem} />
                        ))}
                    </div>
                    <div className='det_btn'>
                        <Link to={'cars'}>
                        <button onClick={() => deleteCar(carDetails.id) }>Delete</button>
                        </Link>
                        <button>Update</button>
                        </div>
                </div>
                    <div className="det_right">
                    <table>
  <tbody>
    <tr>
        <td className='propert'>Condition</td>
        <td className='val'>{carDetails.condition}</td>
        <td className='propert'>Vehicle Type</td>
        <td className='val'>{carDetails.vehicle}</td>
    </tr>
    <tr>
        <td className='propert'>Make</td>
        <td className='val'>{carDetails.make}</td>
        <td className='propert'>Model Year</td>
        <td className='val'>{carDetails.year}</td>
    </tr>
    <tr> 
        <td className='propert'>Model</td>
        <td className='val'>{carDetails.model}</td>
        <td className='propert'>Class/Grade</td>
        <td className='val'>{carDetails.fuel}/{carDetails.transmission}</td>               
    </tr>
    <tr>
        <td className='propert'>Engine Volume</td>
        <td className='val'>{carDetails.volume}</td>
        <td className='propert'>Steering</td>
        <td className='val'>{carDetails.steering}</td>
    </tr>                   
    <tr>
        <td className='propert'>Transmission</td>
        <td className='val'>{carDetails.transmission}</td>
        <td className='propert'>Fuel Type</td>
        <td className='val'>{carDetails.fuel}</td>
    </tr>                   
    <tr>
        <td className='propert'>Exterior Color</td>
        <td className='val'>{carDetails.color}</td>
        <td className='propert'>Drive Type</td>
        <td className='val'>{carDetails.drive}</td>
    </tr>                   
  </tbody>
</table>
                <div className='det_price'>
                    <h4 className='price_1'>Total Price</h4>
                    <h2 className='price_2'>USD {carDetails.price}</h2>
                    </div>   
                    <hr></hr>
                    <div className='btn_buy' >
                        <button onClick={() => addToCart(carDetails)} id='btn_cart'>ADD TO CART</button>
                        </div>
                    <div className="btn_buy">
                        <a href="https://forms.gle/bqK2ETis6tEZuKob8">
                        <button >BUY NOW</button>
                        </a>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Details;