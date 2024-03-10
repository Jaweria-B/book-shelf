import backgroundImage from "../../assets/images/BgImage/library-1147815_1280.jpg";

const BackgroundImg = () => {
    return (
        <div>
            <section className="BgImage" style={{ backgroundImage: `url(${backgroundImage})` }}></section>
        </div>
    );
}

export default BackgroundImg;
