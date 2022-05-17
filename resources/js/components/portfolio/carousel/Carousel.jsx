import { Carousel } from "react-bootstrap"

const AppCarousel = () => {
    const divStyle = {
        height: "24rem",
        backgroundColor: "#315E61",
        backgroundImage: "./leonardo.jpg"
    }

    return (
        <Carousel>
            <Carousel.Item>
                <div className="text-end w-100" style={divStyle}>
                    <img src="./leonardo.jpg" alt="" height={"100%"} />
                </div>
                <Carousel.Caption>
                    <h3>Meu nome é Leonardo Ralph</h3>
                    <p>Atuo como desenvolvedor web fullstack, desenvolvi este site para realiza a apresentação dos meus projetos e experiências.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="w-100" style={divStyle}></div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default AppCarousel