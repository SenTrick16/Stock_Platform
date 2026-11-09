import React from 'react';

function Hero() {
    return ( 
    <div className='cointainer p-5 mt-3'>
        <div className='row text-center mb-5 p-5'>
            <h1>We pioneered the discount broking model in India.<br />Now, we are breaking ground with our technology.</h1>
        </div>
        <hr />
        <div className='row mt-5 >'>
            <div className='col-1'>

            </div>
            <div className='col-5 p-5 mt-5  text-muted' style={{fontSize: "20px"}}>
                <p>
                    We kick-started operations on 15th of August, 2010<br /> with the goal of breaking all barriers that traders and<br /> investors face in India in terms of cost, support, and<br /> technology. We named the company Zerodha, a<br /> combination of Zero and "Rodha", the sanskrit word for<br /> barrier.
                </p>
                <p>
                    Today, our disruptive  pricing  model and in-house<br /> technology have made us the biggest stock broker in<br /> India.
                </p>
                <p>
                    Over 1+ Crore clients place millions of orders every day<br /> through our powerful ecosystem of investment<br /> platform, contributing over 15% of all Indian retail<br /> trading volumes.
                </p>

            </div>
            <div className='col-5 p-5 mt-5   text-muted text'style={{fontSize: "20px"}}>
                <p>
                    In addition, we run a number of popu;lar open online<br /> educational and community initiatives to empower retail<br /> traders and investors.
                </p>
                <p>
                    <a href="https://www.rainmatter.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>Rainmatter</a>, our fintech fund and incubator, has invested<br /> in several fintech startups with the goal of growing the<br /> Indian capital markets.
                </p>
                <p>
                    And yet, we are always up to something new every day.<br /> Catch up on the latest updates on our blog or see what<br /> the media is saying about us.
                </p>
            </div>
            <div className='col-1 mb-5'>
            </div>

        </div>
        <hr />
    </div> 
    
    );
}

export default Hero;