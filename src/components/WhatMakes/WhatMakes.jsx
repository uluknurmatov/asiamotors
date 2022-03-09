import React from 'react';
import './WhatMakes.css';
import Brand from '../../assets/img/img_brand.png';
import Car from '../../assets/img/carBrand.png';
import Refund from '../../assets/img/refund.png';
import Price from '../../assets/img/best-price.png';
import Condition from '../../assets/img/condition.png';
import Shipping from '../../assets/img/cargo-ship.png';
import Consult from '../../assets/img/img_service1.png';
import Safe from '../../assets/img/secure-payment.png';
import Payment from '../../assets/img/img_service2.png';
import Ship from '../../assets/img/img_service3.png';
import Control from '../../assets/img/img_service4.png';


const WhatMakes = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>What Makes Us No.1 ?</h2>
            <h3 className='wrapper_title'>1. The Cheapest Way to Buy Used Cars & Parts from South Korea.</h3>
            <p className='content_text'>Why pay more for the same? Unlike other dealers in your country, we connect you with certified sellers directly, without a <br/> middle-man for the lowest price ever.</p>
            <h3 className='wrapper_title'>2. The Original LHD Cars Manufactured in South Korea</h3>
            <div className='LHD_content_cars'>
                <div>
                <p className='content_text'>AsiaMotors source original left hand drive vehicles and parts from South Korea. (e.g. Hyundai & Kia)</p>
                <p className='brand_LHD'>Originality of Left-hand drive</p>
                <img src={Brand} alt="" />
                </div>
                <div>
                    <img className='img_LHD' src={Car} alt="" />
                </div>
            </div>
            <h3 className='wrapper_title'>3. Secure Trade Guarantees</h3>
            <p className='content_text'>Are you worried about losing your money when buying a car online? Why not take the lowest-risk option by joining AsiaMotors? <br/> The moment you become our customer, you’ll automatically be covered by these guarantees below.</p>
            <div className='LHD_content'>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Refund} alt="" />
                    <dl className='dl_block'>
                        <dt>100% Refund</dt>
                        <dd>We offer a 100% money <br/> back guarantee in case you <br/> don't receive your item.</dd>
                    </dl>
                </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Price} alt="" />
                    <dl className='dl_block'>
                        <dt>Price</dt>
                        <dd>We guarantee the best <br/> prices because we source <br/> from local sellers directly.</dd>
                    </dl>
                </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Condition} alt="" />
                    <dl className='dl_block'>
                        <dt>Condition</dt>
                        <dd>Even though you buy online, <br/> you can clearly see what <br/> you are buying.</dd>
                    </dl>
                </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Shipping} alt="" />
                    <dl className='dl_block'>
                        <dt>Shipping</dt>
                        <dd>We deliver our items on <br/> time with an all-in-one order <br/> tracking system.</dd>
                    </dl>
                </div>
            </div>
            <div className='LHD_btn'>
                <button>Go to see "How to Buy"</button>
            </div>
            <h3 className='wrapper_title'>4. All-in-one Service for Overseas Buyers, Buy it Safely!</h3>
            <div className='LHD_content_cars'>
                <img className='safe_img' src={Safe} alt="" />
                <p className='content_text'>Do B.I.S(Buy it Safely!). Autowini provides professional online mediation service covering the whole process you <br/> need to check when buying cars online from order, document handling, shipping, quality control, tracking, to after <br/>sales follow up.</p>
            </div>
            <div className='LHD_content'>
                <div className='LHD_block'>
                    <img src={Consult} alt="" />
                    <div className='LHD_content_cars'>
                        <span>01</span>
                        <dl className='dl_num'>
                            <dt>End-To-End Online Consultation</dt>
                            <dd>Our multi-language staffs(English, Spanish, French, Russian and others) will make your online trading easier than ever.</dd>
                        </dl>
                    </div>
                </div>
                <div className='LHD_block'>
                    <img src={Payment} alt="" />
                    <div className='LHD_content_cars'>
                        <span>02</span>
                        <dl className='dl_num'>
                            <dt>100% Payment Protection Service</dt>
                            <dd>AsiaMotors holds your money until your transaction and shipment are complete. It’s 100% refundable if you do not receive the cars!</dd>
                        </dl>
                    </div>
                </div>
                <div className='LHD_block'>
                    <img src={Ship} alt="" />
                    <div className='LHD_content_cars'>
                        <span>03</span>
                        <dl className='dl_num'>
                            <dt>Professional Shipping Service</dt>
                            <dd>Do you need help transporting a car overseas? Our professional shipping team will deal with the whole auto shipping process including booking, scheduling, and handling all documents required.</dd>
                        </dl>
                    </div>
                </div>
                <div className='LHD_block'>
                    <img src={Control} alt="" />
                    <div className='LHD_content_cars'>
                        <span>04</span>
                        <dl className='dl_num'>
                            <dt>Quality Control System</dt>
                            <dd>Once the sellers carry their vehicles to our car yard in Incheon Port, we check the car's basic information and working condition. before shipping. Only Vehicles that passed this inspection can be shipped onto the vessel.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatMakes;