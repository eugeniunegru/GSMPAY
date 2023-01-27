import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, NavLink, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {Context} from "../index";

const Auth = () => {
    const {user}=useContext(Context)
    const location=useLocation()
    const navigate=useNavigate()
    const isLogin=location.pathname===LOGIN_ROUTE
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const click=async ()=>{
        try{
            let data;
            if(isLogin){
                data=await login(email,password)
            }else {
                data=await registration(email,password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)

        }catch (e) {
            console.log(e.response.data.message)
        }
    }

    return (
        <Container className="position-absolute top-50 start-50 translate-middle">
            <Card style={{width:600}} className="p-5  mx-auto">
                <Form className="d-flex flex-column">
                    <h2 className="m-auto">{isLogin? "Conectare" : "Inregistrare"}</h2>
                    <Form.Control
                        placeholder="Introduce-ti email-ul"
                        type="email"
                        className="mt-3"
                        value={email}
                        onChange={e=>{setEmail(e.target.value)}}
                    />
                    <Form.Control
                        type="password"
                        placeholder="Introduce-ti parola"
                        className="mt-3"
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                       <Row className="justify-content-between mt-3">

                               {isLogin ?
                                   <div className="w-auto d-flex flex-row">Nu aveti cont?
                                   <NavLink to={REGISTRATION_ROUTE}
                                            className="text-primary  ps-3">Inregistrati-va</NavLink>
                                   </div>
                               :
                                   <div className="w-auto d-flex flex-row">Aveti cont?
                                        <NavLink to={LOGIN_ROUTE}
                                            className="text-primary  ps-3" active="true">Conectati-va</NavLink>
                                   </div>
                               }

                               <Button
                               className="w-auto px-3"
                               variant={"outline-success"}
                               onClick={click}
                               >
                                   {isLogin? "Intra" : "Creare cont"}
                               </Button>
                       </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;