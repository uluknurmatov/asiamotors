import React from 'react';
import './HowToBuy.css';
import BIS from '../../assets/img/Frame 6.png';
import Checking from '../../assets/img/checked-car.png';
import Invoice from '../../assets/img/invoice.png';
import Cash from '../../assets/img/cash-back.png';
import Check from '../../assets/img/car.png';
import Shipp from '../../assets/img/international-shipping.png';
import Document from '../../assets/img/file.png';
import Payment from '../../assets/img/refund.png';
import CheckingCar from '../../assets/img/checked.png';
import Cargo from '../../assets/img/cargo-ship.png';
import Tracking from '../../assets/img/tracking.png';
import Local from '../../assets/img/local-business.png';
import Guarantee from '../../assets/img/bg_guarantee.png';
import System1 from '../../assets/img/img_system1.png';
import System2 from '../../assets/img/img_system2.png';
import ImgShipping from '../../assets/img/img_shipping.png';
import BgShipping from '../../assets/img/bg_shipping.png';

const HowToBuy = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>Buy it Safely!</h2>
            <img className='Bis_img' src={BIS} alt="" />
            <h3 className='about_title_black'>“How can I buy an item at Autowini?” <br/>
                Our Answer is “Buy it Safely!”</h3>
                <p className='about__wrapper_content'>“Buy it Safely!” is AsiaMotors total transaction mediation service to give you the most safest and reliable <br/> vehicle-importing experience! AsiaMotors stands in the middle of buyer and seller and we do all the works <br/> that you need to buy the item confidently!</p>
            <h3 className='about_title_black'>How it works</h3>
            <p className='about__wrapper_content'>Just choose whatever you want and we will do the rest!</p>
            <div className='LHD_content'>
                <div>
                <img className='LHD_img' src={Checking} alt="" />
                <p className='How_text'>Item Checking</p>
                </div>
                <div>
                <img className='LHD_img' src={Invoice} alt="" />
                <p className='How_text'>Invoice Issuing</p>
                </div>
                <div>
                <img className='LHD_img' src={Cash} alt="" />
                <p className='How_text'>Money Transfer</p>
                </div>
                <div>
                <img className='LHD_img' src={Check} alt="" />
                <p className='How_text'>Quality Check <br/>
                at the Port</p>
                </div>
                <div>
                <img className='LHD_img' src={Shipp} alt="" />
                <p className='How_text'>Shipping</p>
                </div>
                <div>
                <img className='LHD_img' src={Document} alt="" />
                <p className='How_text'>Documents <br/> Handling</p>
                </div>
            </div>
            <h3 className='about_title_black'>& Full Customer Support in your language!</h3>
            <p className='about__wrapper_content'>Our staff can speak English, Spanish, Russian, French and Portuguese. <br/>Get the full support throughout the transaction!</p>
            <h3 className='about_title_black'>What’s the benefit?</h3>
            <div className='LHD_content'>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Payment} alt="" />
                    <dl className='dl_block'>
                        <dt>100% Payment <br/> Protection</dt>
                        <dd>Your money will be <br/> secured till the end of <br/> transaction!</dd>
                    </dl>
                </div>
            
                <div className='LHD_block'>
                    <img className='LHD_img' src={CheckingCar} alt="" />
                    <dl className='dl_block'>
                        <dt>Quality Check <br/> at the Port</dt>
                        <dd>Working condition will be <br/> checked before shipping.</dd>
                    </dl>
            </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Cargo} alt="" />
                    <dl className='dl_block'>
                        <dt>Professional <br/> Shipping Service</dt>
                        <dd>Your item will be <br/> delivered safely to your <br/> port.</dd>
                    </dl>
            </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Tracking} alt="" />
                    <dl className='dl_block'>
                        <dt>Order Tracking <br/> System</dt>
                        <dd>You can easily track and <br/> follow up your order.</dd>
                    </dl>
            </div>
                <div className='LHD_block'>
                    <img className='LHD_img' src={Local} alt="" />
                    <dl className='dl_block'>
                        <dt>Direct linking <br/> with local market</dt>
                        <dd>Without middle-man, you <br/> will get the lowest price <br/> in the world.</dd>
                    </dl>
            </div>
            </div>
            <h3 className='wrapper_title'> <span className='green'>01</span>100% Payment Protection Service</h3>
            <div className='flexing'>
                <img src={Guarantee} alt="" />
                <p className='about__wrapper_content' id='garant'>Don’t need to worry about losing money at all. AsiaMotors <br/> secures your money and hold till we ship your item. We <br/> guarantee a 100% refund if you do not receive the item!</p>
            </div>
            <hr></hr>
            <h3 className='wrapper_title'> <span className='green'>02</span>Quality Check at the Port</h3>
            <div className="flexing">
                <img src={System1} alt="" />
                <img src={System2} alt="" />
            </div>
            <p className='txt'>The vehicle’s basic information, chassis no., engine and transmission’s working status and major functions such as A/C, 4WD will be thoroughly checked before shipping. Only Vehicles that passed this inspection can be shipped onto the vessel.</p>
            <hr></hr>
            <h3 className='wrapper_title'> <span className='green'>03</span>Professional Shipping Service</h3>
            <div className="flexing">
                <img src={ImgShipping} alt="" />
                <img src={BgShipping} alt="" />
            </div>
            <p className='txt'>AsiaMotors professional shipping team will deal with the whole process including scheduling, booking, loading and handling all required documents.</p>
            <hr></hr>
        </div>
    );
};

export default HowToBuy;