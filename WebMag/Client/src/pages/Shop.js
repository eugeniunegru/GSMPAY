import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrand, fetchType,fetchDevices} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device}=useContext(Context)
    useEffect(()=>{
        fetchType().then(data=>device.setTypes(data))
        fetchBrand().then(data=>device.setBrands(data))
    },[])

    useEffect(()=>{
        fetchDevices(device.SelectedType.id,device.SelectedBrand.id,device.page,2).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },[device.page,device.SelectedBrand,device.SelectedType])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;