import React from 'react';

function Brokerage() {
    return ( 
        
        <div className='container'>
            <hr />
            <div className='row p-5 mt-5 '>
                <div className='col-8 p-4 '>
                    <a href="" style={{ textDecoration: 'none' }}><h3 className="fs-5 text-center">Brokerage calculator</h3></a>
                    <div>
                        <ul className="text-muted p-5">
                            <li style={{marginBottom: '10px'}}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50+ GST per order.</li>
                            
                            <li style={{marginBottom: '10px'}}>Digital contract notes will be sent via e-mail.</li>
                            <li style={{marginBottom: '10px'}}>
                                Physical copies of contract notes, if required, shall be charged ₹ 20 per contract note. Courier charges apply. 
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                For NRI account (non-PIS), 0.5% or ₹ 100 per executed order for equity (whichever is lower).
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                For NRI account (PIS), 0.5% or ₹ 200 per executed order for quity (whichever is lower).
                            </li>
                            <li style={{marginBottom: '10px'}}>
                                If the account in debit balance, any order placed will be charged ₹ 40 per executed order instead of ₹ 20 per executed order.
                            </li>
                        </ul>
                    </div>

                    
                </div>
                <div className='col-4 p-4 text-center'>
                    <a href="" style={{ textDecoration: 'none' }}><h3 className="fs-5">List of charges</h3></a>
                    
                </div>
                
            </div>
        </div>
     );
}

export default Brokerage;