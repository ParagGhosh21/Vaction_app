import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='mb-5'>

            <div className='text-center m-5'>
                <h1>About traveling</h1>
            </div>

            <div className='row'>
                <div className="col-md-6 m-auto">
                    <div className=" m-5 w-75 ">
                        <h1 className="card-title">Our mission</h1>
                        <p className="card-text">At Click we wanted a mission statement that not only reflected exactly what it is we are trying to do, but also one that our staff could live and breathe every day. We’re here to reduce the cost and complexity of business travel for everyone involved. Pretty simple. But it perfectly describes what we exist to do and provides clear focus for of our staff to in everything they do each day – from the the continual improvements that our product engineers make to your booking experience, to the outstanding customer support that reflects precisely why 98% of our customers, stay with with us.</p>
                        <div>
                            <button className='btn btn-warning px-5 text-white'>Find More</button>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 text-center ">
                    <img className='about-img  p-2 ' src="https://img.freepik.com/free-vector/travel-by-airplane-world-travel-planning-summer-vacations-tourism-vacation-theme_24797-1005.jpg?size=626&ext=jpg" alt="..." />
                </div>


            </div>
            <div>
                <div className=' my-5'>
                    <h4 className='text-center  opacity-50'>Blogs</h4>
                    <h1 className='text-center'>Famous Blogers</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mx-5">
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3af5cd120681961.Y3JvcCwxMDgwLDg0NCwwLDkz.png" className="review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> nadir on the go </h5>
                                <h5 className="card-title text-center opacity-75">I visited the border town of Dogubeyazit in Turkey, the historic last stop in the Ottoman empire on the way to Persia. From hilltop palaces to the acclaimed Ark of Prophet Noah, this place had a lot to offer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://blume.vc/wp-content/uploads/2019/04/small-Copy-of-_MG_0928Kart-630x370.jpg" className=" review-img rounded-circle" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b>Karthik Reddy </h5>
                                <h5 className="card-title text-center opacity-75">Thank you again for all of your help planning our trip to Germany and Austria! We are still talking about how it truly was a trip of a lifetime. I was worried about planning a trip for ages 9 to 78, but you took the stress away and helped create a wonderful travel experience. </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card box shadow-lg pb-3 mb-5 bg-body card-border">
                            <img src="https://pbs.twimg.com/profile_images/1095349501399834626/gnO5UIRx.jpg" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center "><b>Name :</b> Anuradha Goyal </h5>
                                <h5 className="card-title text-center opacity-75">Awesome trip to Greece!! Kelly Shea did a fantastic job planning our trip to Greece! I was recommended to Kelly by a friend who had Kelly plan a trip several years back. Kelly specializes in Greece and has many years of experience visiting as well as living there herself</h5>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>



    );
};

export default AboutUs;
