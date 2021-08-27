import React, { useState, useEffect } from 'react'
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios";

export const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3004/category`).then((res) => {
            const data = res.data;
            setCategories(data);
        });
    }, []);

    return (
        <div>
            <Row className="justify-content-center align-items-center">
                {
                    categories.map(ele => (
                        <Col lg={4} md={12} className='mt-4 mx-4' key={ele.id}>
                            <Link to={{ pathname: `/Product`, state: { ele: ele.name } }} className="text-dark" style={{ textDecoration: 'none' }}>
                                <Card>
                                    <Card.Img variant='top' src={ele.image} className='img-fluid img-card' />
                                    <Card.Body>
                                        <Card.Title className="text-center">{ele.name}</Card.Title>
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
