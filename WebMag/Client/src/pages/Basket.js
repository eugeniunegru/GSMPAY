import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {fetchBasket} from "../http/deviceApi";
import {Context} from "../index";
const Basket = observer(() => {
    const {user,device}=useContext(Context)
    useEffect(()=>{
        fetchBasket(user.User.id).then(data=>device.setBasket(data))
    },[])

    const removeDevice=(number)=>{
        device.setBasket(device.Basket.filter(i=>i.id!==number))
    }
    return (
        <Container>
            {device.Basket.map(item=>
                    <Card key={item.id} className="mt-2">
                        <Row>
                            <Col md={4}>
                                <Image src={process.env.REACT_APP_API_URL + item.device.img} width={100} height={100}/>
                            </Col>
                            <Col md={4}>
                                <h1 className="mt-1">{item.device.name}</h1>
                                <h3 className="mt-3 text-info">Pret: {item.device.price}</h3>
                            </Col>
                            <Col md={4}>
                                    <Button
                                        variant="outline-danger"
                                        className="position-relative top-50 start-50 translate-middle"
                                        onClick={()=>removeDevice(item.id)}
                                    >Renunta</Button>
                            </Col>
                        </Row>
                    </Card>
                )

            }
        </Container>
    );
});

export default Basket;