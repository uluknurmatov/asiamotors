import React from 'react';

const Contacts = () => {
    return (
        <div className='container'>
            <h2 className='wrapper_first__title'>Contact our staff</h2>
            <div className='guarantList'>
                <div>
            <h3 className='step_title'>We are here to
                support you.</h3>
            </div>
            <div>
                <h5>Contact our customer support staff for any help.</h5>
                <p className='txt'>Please write the “Item number” and detailed questions so that we can serve you better. We will make online trading more reliable and convenient for you.</p>
            </div>
            </div>
            <h3 className='wrapper_title'><span className='green'>01</span>Legal address</h3>
            <p className='txt'>Bishkek, mall Eurasia,Kievskaya,62</p>
            <h3 className='wrapper_title'><span className='green'>02</span>Email</h3>
            <p className='txt'>Asiamotors@gmail.com</p>
        </div>
    );
};

export default Contacts;