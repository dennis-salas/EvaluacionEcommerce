import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useForm } from '../hook/useForm'

export const DetailProduct = (props) => {

    const { ele } = props.location.state;

    //const [cartShopping, setCartShopping] = useState([])

    const [formValues, handleInputChange] = useForm({
        cantidad: ''
    });

    const { cantidad } = formValues;

    const addProduct = (ele) => {
        console.log(ele)
    };

    return (
        <div>
            <Card className="m-4">
                <Row className="justify-content-md-center align-items-center">
                    <Col lg={8} md={12}>
                        <Card.Img variant="top" src={ele.image} fluid="true" className="img-detail" />
                    </Col>
                    <Col lg={4} md={12}>
                        <Card.Body>
                            <Card.Title><h1>{ele.name}</h1></Card.Title>
                            <Card.Text><p>${ele.price}</p></Card.Text>
                            <div className="justify-content-md-center align-items-center">
                                <input
                                    type="number"
                                    name="cantidad"
                                    value={cantidad}
                                    placeholder="0"
                                    onChange={handleInputChange}
                                    required
                                    style={{ width: "50px" }}
                                />
                                <Button
                                    type="button"
                                    className="btn mx-2"
                                    onClick={() => addProduct(ele)}
                                >
                                    Comprar
                                </Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
