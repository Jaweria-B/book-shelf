

const Showcase = () => {
    return (
        <div>
            <section class="hero">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-5 col-12 m-auto">
                            <div class="heroText">

                                <h1 class="text-white mb-lg-5 mb-3">Bookish Haven</h1>

                                <div class="c-reviews my-3 d-flex flex-wrap align-items-center">
                                    <p class="text-white w-300"><strong>From Page to Pavement:</strong> Your Nearby Book Marketplace.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-7 col-12">
                            <div id="carouselExampleCaptions" class="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="carousel-image-wrap">
                                            <img src={require("../../assets/images/slide/books-1204029_1280.jpg")} class="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div class="carousel-caption">
                                            {/* <span class="text-white">
                                                <i class="bi-geo-alt me-2"></i>
                                                Manhattan, New York
                                            </span> */}

                                            <h4 class="hero-text">"Open a book, unlock a universe."</h4>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="carousel-image-wrap">
                                            <img src={require("../../assets/images/slide/tea-time-3240766_1280.jpg")} class="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div class="carousel-caption">
                                            <div class="d-flex align-items-center">
                                                <h4 class="hero-text">"Words weave wonders."</h4>

                                                {/* <span class="price-tag ms-4"><small>$</small>26.50</span> */}
                                            </div>

                                            {/* <div class="d-flex flex-wrap align-items-center">
                                            

                                                <div class="reviews-stars">
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star reviews-icon"></i>
                                                    <i class="bi-star reviews-icon"></i>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="carousel-image-wrap">
                                            <img src={require("../../assets/images/slide/woman-6318447_1280.jpg")} class="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div class="carousel-caption">
                                            <div class="d-flex align-items-center">
                                                <h4 class="hero-text">"Explore. Dream. Discover. In every page."</h4>

                                                {/* <span class="price-tag ms-4"><small>$</small>18.25</span> */}
                                            </div>

                                            {/* <div class="d-flex flex-wrap align-items-center">
                                                <h5 class="reviews-text mb-0 me-3">4.2/5</h5>

                                                <div class="reviews-stars">
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star reviews-icon"></i>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="carousel-image-wrap">
                                            <img src={require("../../assets/images/slide/books-1617327_1280.jpg")} class="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div class="carousel-caption">
                                            <div class="d-flex align-items-center">
                                                <h4 class="hero-text">"Dive into books, emerge inspired."</h4>

                                                {/* <span class="price-tag ms-4"><small>$</small>18.25</span> */}
                                            </div>

                                            {/* <div class="d-flex flex-wrap align-items-center">
                                                <h5 class="reviews-text mb-0 me-3">4.2/5</h5>

                                                <div class="reviews-stars">
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star-fill reviews-icon"></i>
                                                    <i class="bi-star reviews-icon"></i>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>

                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="video-wrap">
                    <video muted loop={true}  autoPlay={true} class="custom-video" poster="">
                        <source src={require("../../assets/video/woman_reading_inside_a_library (2160p).mp4")} type="video/mp4" />
                        	Your browser does not support the video tag.
                    	</video>
                </div>

                <div class="overlay"></div>
            </section>
        </div>
    );
}

export default Showcase;