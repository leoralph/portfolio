import { useEffect, useState } from "react"
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import { api } from "../../../utils/api"

const Projetos = () => {
    const [projetos, setProjetos] = useState([])

    useEffect(() => {
        const reqProjetos = api.get('/projetos');
        reqProjetos
            .then(resp => setProjetos(resp.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid className="bg-light py-3">
            <Container>
                <Row className="jutify-content-center gy-3">
                    {projetos.map((projeto, id) => 
                        <Col key={id} xs="12" md="6" lg="3">
                            <Card className="h-100">
                                <Card.Header className="bg-primary text-light" style={{height: "4rem"}}>
                                    <div className="d-flex align-items-center">
                                        <h5>{projeto.nome}</h5>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{projeto.descricao}</Card.Text>
                                </Card.Body>
                                <ListGroup variant="flush">
                                    {projeto.tecnologias.map(tecnologia => 
                                        <ListGroup.Item>{tecnologia}</ListGroup.Item>
                                    )}
                                </ListGroup>
                                <Card.Footer className="d-grid py-3">
                                    <a href={projeto.repositorio} target="_blank" className="btn btn-primary">Repositório <i className="bi-github"></i></a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </Container>
    )
}
export default Projetos