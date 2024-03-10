import React from 'react';

const uniqueStores = [
    // Array of unique store names
];

const StoreDirectory = () => {
    return (
        <section className="news section-padding">
            <div className="container">
                <div className="row">
                    {uniqueStores.map((store, index) => (
                        <div key={index} className="col-lg-4 col-md-4 col-12">
                            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                                {/* Replace the image src with the actual image for each store */}
                                <img src={`images/stores/${store}.jpg`} className="img-fluid news-image" alt={store} />
                                <div className="news-text-info">
                                    <h5 className="news-title mt-2">{store}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StoreDirectory;
