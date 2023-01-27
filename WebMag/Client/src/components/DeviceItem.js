import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate=useNavigate()
    return (
        <Col md={3} onClick={()=>navigate(DEVICE_ROUTE+'/'+device.id)}>
            <Card
                style={{width:150, cursor:"pointer"}}
                border={"light"}
            >
                <Image src={process.env.REACT_APP_API_URL + device.img} width={150} height={150}/>

                    <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                        <div className="w-auto">Samsung...</div>

                        <div className="d-flex align-items-center">
                            <div className="px-2 w-auto">{device.rating}</div>
                            <Image src={star} height={15} width={15} className="w-auto"/>
                        </div>
                    </div>
                    <div>{device.name}</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;