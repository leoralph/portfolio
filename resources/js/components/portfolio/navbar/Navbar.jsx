import { Container, Nav, Navbar as Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const MainNavbar = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Collapse className="w-100 order-2 order-lg-0">
                    <Nav className="fs-5 mr-auto">
                        <Nav.Item>
                            <Link to={'/projetos'} className="nav-link">Projetos</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/contato'} className="nav-link">Contato</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div className="mx-lg-auto">
                    <Link className="navbar-brand mx-lg-auto fs-1" style={{fontFamily: ['Akshar', 'sans-serif'], fontWeight: 300}} to={'/'}>LeoRalph</Link>
                </div>
                <div className="ms-auto">
                    <Navbar.Toggle className=""/>
                </div>
                <Navbar.Collapse className="w-100 order-3 order-lg-3">
                    <Nav className="ms-auto d-flex fs-3">
                        <Nav.Item>
                            <Link to={'/github'} className="nav-link me-1"><i className="bi-github"></i></Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={'/linkedin'} className="nav-link"><i className="bi-linkedin"></i></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default MainNavbar;