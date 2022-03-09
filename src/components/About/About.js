import React from 'react';
import './About.css'
import Block1 from '../../assets/img/block1.png'
import Block2 from '../../assets/img/block2.png'
import Block3 from '../../assets/img/block3.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
        <div className='container'>
            <h3>About AsiaMotors</h3>
            <p className='about_content'>AsiaMotors is a wholesale marketplace for professional automobile traders who want to buy cars <br/> from reliable sellers in South Korea. We guarantee the most secure online buying, shipping service <br/> and the lowest price to help you buy confidently from S.Korea</p>
            <div className='about_blocks'>
                <Link to='/about'>
                <div className='about_block'>
                    <img src={Block1} />
                    <p>What is AsiaMotors?</p>
                </div>
                </Link>
                <Link to='/number1'>
                <div className='about_block'>
                <img src={Block2} />
                    <p>What Makes Us №1?</p>
                </div>
                </Link>
                <Link to='/what-is-bis'>
                <div className='about_block'>
                <img src={Block3} />
                    <p>How to Buy at AsiaMotors?</p>
                </div>
                </Link>
            </div>
        </div>
        </div>
        
    );
};

export default About;