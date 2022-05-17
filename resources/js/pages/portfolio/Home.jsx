import Carousel from "../../components/portfolio/carousel/Carousel";
import Footer from "../../components/portfolio/footer/Footer";
import Navbar from "../../components/portfolio/navbar/Navbar";
import Projetos from "../../components/portfolio/projetos/Projetos";

const Home = (props) => {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <Projetos/>
            <Footer/>
        </>

    );
};
export default Home;
