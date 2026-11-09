import React from 'react';

function Hero() {
    return ( 
        <div className='container  p-5 text-center'>
            <div className='row'>
                <div className=' p-5 mb-5'> 
                    <h1>Pricing</h1>
                    <p className='mt-3'>Free equity investments and flat ₹ 20 traday and F&O trades</p>
                </div>
                
                <div className='col-12 col-md-4 p-5'>
                    <img src='/images/pricing0.svg' alt='hero' width='200px' />
                    <h1 className='mt-3'>Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investment (NSE, BSE), are absolutely free - ₹ 0 brokerage. </p>
                </div>
                <div className='col-12 col-md-4 p-5'>
                    <img src='/images/intradayTrades.svg' alt='hero' width='200px' />
                    <h1 className='mt-3'>Intraday and F&O trades</h1>
                    <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-12 col-md-4 p-5'>
                    <img src='/images/pricingMF.svg' alt='hero' width='200px' />
                    <h1 className='mt-3'>Free direct MF</h1>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

        </div>
     );
}

export default Hero;