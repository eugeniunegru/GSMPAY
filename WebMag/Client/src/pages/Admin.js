import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import ModalBrand from "../components/modals/ModalBrand";
import ModalType from "../components/modals/ModalType";
import ModalDevice from "../components/modals/ModalDevice";

const Admin = () => {
    const [brandVisible,setBrandVisible]=useState(false)
    const [typeVisible,setTypeVisible]=useState(false)
    const [deviceVisible,setDeviceVisible]=useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button className="mt-3 p-2" variant="outline-dark" onClick={()=>setTypeVisible(true)}>Adauga tip</Button>
            <Button className="mt-3 p-2" variant="outline-dark" onClick={()=>setBrandVisible(true)}>Adauga brand</Button>
            <Button className="mt-3 p-2" variant="outline-dark" onClick={()=>setDeviceVisible(true)}>Adauga dispozitiv</Button>
            <ModalBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
            <ModalType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <ModalDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;