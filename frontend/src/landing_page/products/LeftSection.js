import React from "react";

function LeftSection(
  {imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,}
) {
  return (
  <div className='container'>
    <div className='row '>
        <div className='col-6 p-5 text-center '>
            <img src={imageURL}  />
        </div>
        <div className='col-6 p-5'>
            <h1 style={{}}>{productName}</h1>
            <p className="text-muted p-3"  >{productDescription}</p>
            <div className='p-3'>
                <a href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{margin: '0 50px'}}>Learn More<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className=" p-3">
                <a href={googlePlay}><img src='/images/googlePlayBadge.svg' alt='Google Play' /></a>
                <a href={appStore}><img src='/images/appStoreBadge.svg' alt='App Store' style={{margin: '0 15px'}} /></a>
            </div>
            
        </div>
        
    </div>
  </div>
  );
}

export default LeftSection;
