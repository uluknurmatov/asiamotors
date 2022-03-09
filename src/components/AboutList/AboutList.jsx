import React from 'react';
import './AboutList.css';
import BG from '../../assets/img/bg1.png';
import Buyers from '../../assets/img/exchange.png';
import Regist from '../../assets/img/countries.png';
import Countries from '../../assets/img/visited-countries.png';
import Safe from '../../assets/img/shield.png';
import Earth from '../../assets/img/earth.png';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';

const AboutList = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>About AsiaMotors</h2>
            <div className='about_section'>
                
            <img className='about_img' src={BG} alt="" />
            
            <div className='about_section_left'>
            <h3 className='wrapper_title'>Welcome to AsiaMotors</h3>
            <p className='content_text' >Korea's No.1 Automobile Trading Platform</p>
            </div>
            </div>
            <h3 className='about_title_black'>Are you an auto trader? <br/>
This is the place you’ve been looking for!</h3>
<p className='about__wrapper_content'>AsiaMotors is a wholesale marketplace for professional automobile traders who want to buy cars, trucks, buses, heavy <br/> machinery, and spare parts from reliable sellers in South Korea. By linking you directly with certified local sellers, we always <br/> offer the safest online buying service and the lowest price to help you buy the product confidently from S.Korea. </p>
        <div className='about_section'>
            <div className='about_wrapper__block'>
                <img src={Buyers} alt="" />
                <p className='about_statis'>+50,000</p>
                <p>Registered Buyers</p>
            </div>
            <div className='about_wrapper__block'>
                <img src={Regist} alt="" />
                <p className='about_statis'>+240</p>
                <p>Registered Buyers</p>
            </div>
            <div className='about_wrapper__block'>
                <img src={Countries} alt="" />
                <p className='about_statis'>+108</p>
                <p>Registered Buyers</p>
            </div>
        </div>
        <div className='about_wrapper__blocks'>
            <div className='worry_left'>
                <h3 className='wrapper_title'>Don’t worry. It’s easy & safe.</h3>
                <p className='content_text'>With our online transaction mediation service, called B.I.S (Buy it Safely!), you <br/> will find any vehicles that may match what you are searching for and purchase <br/> it easier, safer, and even cheaper! For this, we guarantee you multi-language <br/> supports, favorable prices, 100% payment protection until your transaction <br/> and shipment are complete.</p>
            </div>
            <div className='worry_right'>
                <img className='about_icons' src={Safe} />
            </div>
        </div>
        <div className='about_wrapper__blocks'>
            <div className='customer_left'>
                <img className='about_icons' src={Earth} alt="" />
            </div>
            <div className='customer_right'>
                <h3 className='wrapper_title'>Approved credibility with customers <br/> from 100 countries</h3>
                <p className='content_text'>We became the most popular destination for worldwide buyers to purchase <br/>  Korean left hand drive vehicles online. Along with our success at <br/> AsiaMotors.com, we work closely with over 350,000 registered members from <br/> 240 countries on our platform selling vehicles to more than 100 countries in <br/> the wolrd.</p>
            </div>
        </div>
        <div className='expert'>
            <h3 className='wrapper_title'>Get help from the auto expert.</h3>
            <p className='content_text'>Since our foundation in 2010, Autowini has been growing so fast as one of the most leading market drivers in the industry. Our <br/> executives have been in the automobile field for the past 15 years serving various positions, therefore, we have a strong <br/> understanding of its history and the right innovation method for your amazing buying experience. Be with us, you will enjoy this fast <br/> growing marketplace expanding everyday. Use Autowini and explore fantastic business opportunities!</p>
            <div className='expert_images'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
        </div> 
    );
};

export default AboutList;