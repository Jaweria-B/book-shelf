import Carousel from "../carousel/carousel";

import carouselItems from './carouselItems'; // Assuming carouselItems.js is in the same directory

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
                            <Carousel carouselItems={carouselItems} />
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