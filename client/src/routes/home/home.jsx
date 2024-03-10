import BackgroundImg from "../../components/bg-image/bg-image";
import Directory from "../../components/directory/directory";
import Footer from "../../components/footer/footer";
import Showcase from "../../components/showcase/showcase";


const Home = () => {
    return (
        <div>
            <Showcase />
            <Directory />
            <BackgroundImg />
            <Footer />
        </div>
    );
}

export default Home;