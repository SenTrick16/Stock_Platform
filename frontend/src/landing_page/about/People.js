import React from 'react';

function People() {
    return ( 
        <div className='container '>
            <div className='row ' >
                <h1 className='p-5 text-center '>People</h1>
                
                <div className='col-1'></div>
                <div className='col-5 text-center text-muted'>
                    <img src='images/nithinKamath.jpg' alt="Nithin Kamath" style={{borderRadius:"100%", width:"60%"}} />
                    <h4 className='mt-5 text-muted'>
                        Nithin kamath
                    </h4>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className='col-5 text-muted'style={{fontSize: "18px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome<br />the hurdles he faced during his decade-long stint as a trader.<br /> Today, Zerodha has changed the landscape of the Indian broking<br /> industry.  </p>
                    <p>He is a member of the SEBI Secondary Market Advisory<br /> Committee (SMAC) and the Market Data Advisory Committee<br /> (MDAC)</p>
                    <p>Playing basketball in his zen.</p>
                    <p>Connect on <a href="https://twitter.com" style={{textDecoration: "none"}}>Homepage</a>/ <a href="https://twitter.com" style={{textDecoration: "none"}}>Trading Q&A</a>/ <a href="https://twitter.com" style={{textDecoration: "none"}}>Twitter</a>.</p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default People;