import React from 'react';
import './Steps.css';
import Booking from '../../assets/img/booking.png';
import Payment from '../../assets/img/payment-method.png';
import Ship from '../../assets/img/cargo-ship.png';
import Car from '../../assets/img/car (2).png'; 
import Screen from '../../assets/img/Frame 8.png';
import Screen1 from '../../assets/img/screen.png';
import Staff from '../../assets/img/pp.jfif';
import Ship_inf from '../../assets/img/img_stepShip.png';
import Vehicle from '../../assets/img/img_stepShipment2.png';
import Vehicle2 from '../../assets/img/img_stepShipment3.png';
import Receive from '../../assets/img/img_stepReceive2.png';

const Steps = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>Steps</h2>
            <h3 className='about_title_black'>Buying a vehicle at AsiaMotors has never been easier! <br/>
            Just choose what you want and follow the simple steps below.</h3>
            <div className="step_content">
                <div>
                    <p className='step_text'>STEP <span className='green'>1</span> </p>
                    <img className='LHD_img' src={Booking} alt="" />
                    <p className='step_text'>Booking</p>
                </div>
                <div>
                    <p className='step_text'>STEP <span className='green'>2</span> </p>
                    <img className='LHD_img' src={Payment} alt="" />
                    <p className='step_text'>Payment</p>
                </div>
                <div>
                    <p className='step_text'>STEP <span className='green'>3</span> </p>
                    <img className='LHD_img' src={Ship} alt="" />
                    <p className='step_text'>Shipping</p>
                </div>
                <div>
                    <p className='step_text'>STEP <span className='green'>4</span> </p>
                    <img className='LHD_img' src={Car} alt="" />
                    <p className='step_text'>Receive it!</p>
                </div>
            </div>
            <div className='step_center'>
                <img className='LHD_img' src={Booking} alt="" />
                <p className='step_text'>STEP <span className='green'>1</span> </p>
                <h2 className='step_title'>Booking</h2>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>01</span>Check the quotation</h4>
                <p className='txt'>Find out the notes and information you need to know before requesting a booking by clicking on the Quotation on the items page.</p>
                </div>
                <div className='step_right'>
                    <img src={Screen} alt="" />
                </div>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>02</span>Request a booking</h4>
                <p className='txt'>You can make a booking request, after checking  the quotation and notice. Write the correct  information in order to make a request. You can continue unfinished request in "My Wini → My Booking"</p>
                </div>
                <div className='step_right'>
                    <img src={Screen1} alt="" />
                </div>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>03</span>AsiaMotors staff will contact you</h4>
                <p className='txt'>After checking the information you provided, click on Submit Request. We will process your request and the vehicle's state and contact you within 1 business day in order to make a booking</p>
                </div>
                <div className='step_right'>
                    <img src={Staff} alt="" />
                </div>
            </div>
            <div className='step_center'>
                <img className='LHD_img' src={Payment} alt="" />
                <p className='step_text'>STEP <span className='green'>2</span> </p>
                <h2 className='step_title'>Payment</h2>
                <div className='step_blocks'>
                <div className='step_right'>
                    <img src={Staff} alt="" />
                </div>
                <div>
                <h4><span className='green'>01</span>AsiaMotors staff will contact you about payment</h4>
                <p className='txt'>After checking the information you provided, click on Submit Request. We will process your request and the vehicle's state and contact you within 1 business day in order to make a booking</p>
            </div>
                </div>

                <div className='step_center'>
                <img className='LHD_img' src={Ship} alt="" />
                <p className='step_text'>STEP <span className='green'>3</span> </p>
                <h2 className='step_title'>Shipping</h2>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>01</span>Check Shipping Schedule</h4>
                <p className='txt'>After the payment is finished, AsiaMotors shipping team will book on the fastest vessel schedule available. Once scheduled, shipping information will be updated at “My Wini → My Order” page. You can also get the alarm via AsiaMotors app application.</p>
                </div>
                <div className='step_right'>
                    <img src={Ship_inf} alt="" />
                </div>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>02</span>Quality Check at the Port</h4>
                <p className='txt'>Your vehicle will be moved from the Seller’s yard to Autowini’s port yard and undergo a thorough Q.C process. Autowini’s Q.C team will check your vehicle information really matches what’s stated in the system and the vehicle is in working status. <br/> If the vehicle does not pass our Q.C test, it cannot be shipped and it will be returned to the Seller.Only the vehicles which are in “Run & Drive” conditions will be shipped on the vessel.</p>
                </div>
                <div className='step_right'>
                    <img src={Vehicle} alt="" />
                </div>
            </div>
            <div className='step_blocks'>
                <div>
                <h4><span className='green'>03</span>Load your vehicle into a Vessel or a Container</h4>
                <p className='txt'>Your vehicle will be loaded into a Ro-Ro Vessel or a Container. Usually 3-4 vehicles are put together into a container and fixed with ropes and bars inside. This work is called ‘Shoring work’ and you can download your vehicle’s container shoring photos after a few days of loading.</p>
                </div>
                <div className='step_right'>
                    <img src={Vehicle2} alt="" />
                </div>
            </div>
            <div className='step_center'>
                <img className='LHD_img' src={Car} alt="" />
                <p className='step_text'>STEP <span className='green'>4</span> </p>
                <h2 className='step_title'>Receive it!</h2>
                <div className='step_blocks'>
                <div className='step_right'>
                    <img src={Receive} alt="" />
                </div>
                <div>
                <h4><span className='green'>01</span>Load your vehicle into a Vessel or a Container</h4>
                <p className='txt'>Your vehicle will be loaded into a Ro-Ro Vessel or a Container. Usually 3-4 vehicles are put together into a container and fixed with ropes and bars inside. This work is called ‘Shoring work’ and you can download your vehicle’s container shoring photos after a few days of loading.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Steps;