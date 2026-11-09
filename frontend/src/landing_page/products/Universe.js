import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row '>
                <h1 className="text-center mt-5">The Zerodha Universe</h1>
                <p className="text-center mt-3">Extend your trading and investment experience even further with our partner platform.</p>
            </div>
            <div className='row text-center'>
                <div className='col-4  p-5'>
                    <img src='images/smallcaseLogo.png' style={{width: '60%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2">Thematic investment platform</p>
                </div>
                <div className='col-4  p-5'>
                    <img src='images/streakLogo.png' style={{width: '60%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2">Algo & Strategy platform</p>
                </div>
                <div className='col-4  p-5'>
                    <img src='images/sensibullLogo.svg' style={{width: '60%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2">Options trading platform</p>
                </div>
                <div className='col-4  p-5'>
                    <img src='images/zerodhaFundhouse.png' style={{width: '60%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2">Asset management</p>

                </div>
                <div className='col-4  p-5'>
                    <img src='images/goldenpiLogo.png' style={{width: '60%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2">Bonds trading platfrorm</p>
                </div>
                <div className='col-4  p-5'>
                    <img src='images/dittoLogo.png' style={{width: '40%', height: 'auto'}} />
                    <p className="text-muted text-small mt-2 "> Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%", margin: '0 auto'}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;