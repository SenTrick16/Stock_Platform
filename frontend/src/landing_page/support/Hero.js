import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id="supportHero">
            <div className=' p-5 mt-5 'id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className=' row p-5 m-3'>
                <div className=' col-1 '></div>
            <div className=' col-5 p-3 '>
                <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket</h1><br />
                <input placeholder="Eg. how do I activate F&O"></input><br />
                <br />
                <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;
                <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;
                <a href="">Intraday margins</a>&nbsp;&nbsp;&nbsp;
                <a href="">Kite user manual</a>
            </div>
            <div className=' col-6 p-3'>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li>
                        <a href="">Current Takeovers and Delisting</a>
                    </li>
                    <li>
                        <a href="" >Latest Intraday leverages - MIS & CO</a>
                    </li>
                </ol>
                
            </div>
            </div>

        </div>
     );
}

export default Hero;