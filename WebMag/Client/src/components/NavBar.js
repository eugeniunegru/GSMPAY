import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const navigate=useNavigate();
    const {user}=useContext(Context)

    const logOut=()=>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(SHOP_ROUTE)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">GSMPAY</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                        {user.IsAuth?
                            <Nav
                                className="position-absolute top-50 end-0 translate-middle ml-auto "
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Button className="me-1"
                                        variant="outline-success"
                                        onClick={() => navigate(BASKET_ROUTE+'/'+user.User.id)
                                        }>Cos</Button>
                                <Button className="me-1"
                                        variant="outline-success"
                                        onClick={() => navigate(ADMIN_ROUTE)
                                        }>Panou Admin</Button>
                                <Button variant="outline-success"
                                        onClick={logOut}
                                >Ieșire</Button>
                            </Nav>
                        :
                            <Nav
                            className="position-absolute top-50 end-0 translate-middle ml-auto "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                                <Button variant="outline-success"
                                        onClick={()=>{
                                            navigate(LOGIN_ROUTE)
                                        }}>Conectare</Button>
                            </Nav>
                        }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
})

export default NavBar;