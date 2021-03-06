import React from 'react'
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { startLogout } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux'

export const NavbarEcommerce = () => {
    const { cartShopping } = useSelector(state => state.cartShopping)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <>
            <Navbar expand="lg" className="p-0">
                <Container className="p-0">
                    <Navbar.Brand >
                        <Image src="https://i.ibb.co/Pw9kgvt/logo.jpg" alt="logo" className="logo" roundedCircle />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <Link className="nav-link fs-5 text " to="/">Inicio</Link>
                            <Link className="nav-link fs-5 text" to={{ pathname: `/Product`, state: { ele: "tenis" } }}>Productos</Link>
                            <h1
                                className="nav-link fs-5 text"
                                onClick={handleLogout}>
                                Cerrar Sesión
                            </h1>
                        </Nav>
                        <Nav>
                            <Button type="button" className="btn btn-dark">
                                <Link className="nav-link text-white" to="/Cart">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span className="badge bg-danger mx-2">{cartShopping.length}</span>
                                </Link>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
