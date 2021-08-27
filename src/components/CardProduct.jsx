import React, { useState, useEffect } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardProduct = ({ type }) => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        productInfo(type)
            .then(img => setProduct(img))
    }, [type])

    const productInfo = async (category) => {
        const url = `http://localhost:3004/${category}`
        const resp = await fetch(url)
        const data = await resp.json()
        return data
    }

    //console.log(product);
    return (
        <div>
            <Row className="justify-content-center align-items-center">
                {
                    product.map(ele => (
                        <Col lg={4} md={12} className='mt-4 mx-4' key={ele.id}>
                            <Link to={{ pathname: `/${ele.name}`, state: { ele: ele } }} className="text-dark" style={{ textDecoration: 'none' }}>
                                <Card>
                                    <Card.Img variant='top' src={ele.image} className='img-fluid img-card' />
                                    <Card.Body>
                                        <Card.Title className="text-center">{ele.name}</Card.Title>
                                        <Card.Text className="text-center">{ele.price}$</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
