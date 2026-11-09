import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore,}) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-6 p-5  '>
                    <h1 >{productName}</h1>
                    <p className="text-muted p-3">{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{margin: '0 50px'}}>Learn More<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-6 p-5 text-center '>
                    <img src={imageURL} style={{width: '100%', height: 'auto'}} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;
