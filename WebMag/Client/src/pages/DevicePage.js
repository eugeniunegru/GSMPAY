import React, { useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.png'
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceApi";
const bg="url("+star+") no-repeat center center"
const DevicePage = () => {
    const [device,setDevice]=useState({info:[]})
    const {id}=useParams()
    useEffect(()=>{
            fetchOneDevice(id).then(data=>{console.log(data);setDevice(data)})

    },[])
    console.log(device)
    return (
        <Container>
            <Row className="">
                <Col md={4} >
                    <Card className="mt-3 w-auto">
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} className=" mx-auto"/>
                    </Card>
                </Col>
                <Col md={4} className="d-flex flex-column w-auto mt-3">
                        <h2 className="mx-auto">{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{background:bg,width:260,height:260,backgroundSize:'cover',fontSize:64}}
                        >
                            {device.rating}
                        </div>

                </Col>

                <Col md={4} >
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around w-auto mt-3"
                        style={{width:300,height:300,fontSize:32,border:'5px solid lightgray'}}
                    >
                        <h3>De la: {device.price} lei</h3>
                        <Button variant="outline-dark" style={{fontSize:28}}>Adauga in cos</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Specificatii</h1>
                {device.info.map((info,index)=>
                    <Row key={info.id} style={{background:index%2===0?'lightgray':'transparent',padding:10}}>
                        {info.name}: {info.description}
                    </Row>

                )}
            </Row>
        </Container>
    );
};

export default DevicePage;