import React from 'react';
import './Buyers.css';
import Car from '../../assets/img/purchaseCar.png';
import Report from '../../assets/img/purchaseReport.png';
import Yes from '../../assets/img/icon.png';
import No from '../../assets/img/icon_no.png';

const Buyers = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>Must-know for buyers</h2>
            <h3 className='about_title_black'>What you should know before purchase</h3>
            <div className='buyers_blocks'>
                <div>
                    <img className='buyers_img'  src={Car} alt="" />
                </div>
                <div>
                    <h5>
                    Used cars are NOT IN PERFECT CONDITION</h5>
                    <p className='txt'>Used Vehicles are not in perfect condition. There can be wears, tears, minor or major problems. The exterior may be scratched, dented, rusted, and or have other defects that are not visible through photos.
Please note that the actual quality conditions may vary from what is stated and of the photos. Some parts may need to be fixed and replaced. Take extra caution in purchasing when the item is abnormally cheap.</p>
                </div>
            </div>
            <div className='buyers_blocks'>
                <div>
                    <img className='buyers_img'  src={Report} alt="" />
                </div>
                <div>
                    <h5>
All items are sold “AS-IS”</h5>
                    <p className='txt'>This means that items are sold in their current state, without any warranty or guarantee of future quality. Many items are sold without fix or repair to keep the price competitive. Autowini does not guarantee that the quality of the item accurately corresponds to the information stated by the seller. We recommend you to review information very seriously.</p>
                </div>
            </div>
            <hr></hr>
            <h3 className='wrapper_title'>What is guaranteed and what is not guaranteed</h3>
            <p className='txt'>We do not guarantee all information stated in this platform. Please check what is the guaranteed information and what is not guaranteed here.</p>
            <div className='guarantList'>
                <dl>
                    <dt>
                        <img src={Yes} alt="" />
                        Guaranteed Information
                    </dt>
                    <dd>VIN Number</dd>
                    <dd>Maker and Model</dd>
                    <dd>Engine Volume</dd>
                    <dd>Fuel Type</dd>
                    <dd>Drive Type (2WD/4WD)</dd>
                    <dd>Engine’s “Run & Drive”, “As-Is” status at
Seller’s Yard.</dd>
                </dl>
                <dl className='not_garant'>
                    <dt>
                    <img src={No} alt="" />
                    Not Guaranteed information
                    </dt>
                    <dd>Mileage (Odometer reading)</dd>
                    <dd>Body (Corrosions, Scratches, Oil Stains)</dd>
                    <dd>Exteriors (Scratches, Dents, Rusts, Broken Glasses, Paint problems, wheels, etc.)</dd>
                    <dd>Exterior damages during shipping</dd>
                    <dd>Interiors (Worn out, Torn seats, Scratches, Dirt)</dd>
                    <dd>Spare Tire / Spare Key</dd>
                    <dd>Detailed Condition of Vehicle.</dd>
                    <dd>Consumable Parts’ Condition</dd>
                </dl>
                </div>       
        </div>
    );
};

export default Buyers;