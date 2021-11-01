import React from 'react';
import './WhyTravel.css';

const WhyTravel = () => {
    return (
        <div className='my-5 mx-5'>
            <div>
                <h1 className='text-center '>Resons to  Travel With us</h1>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?b=1&k=20&m=1292251389&s=170667a&w=0&h=oqgL9rLyvKe6ifecSng8QXWlzXOiNTTrewU92ecnmEc=" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We provde world class Service</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">We Have trusted Tour Agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://images.hindustantimes.com/img/2021/07/26/550x309/0b4446e2-e9f1-11eb-9a2b-f40b6f7ff9cb_1627279895460.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Lots of trusted agency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" className="images" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Losts of trusted agent</h5>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default WhyTravel;