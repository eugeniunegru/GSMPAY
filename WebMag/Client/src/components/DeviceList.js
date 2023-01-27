import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(()=>{
    const {device}=useContext(Context)
    return (
        <Row className="d-flex mt-3">
            {
                device.Devices.map(dev=>
                    <DeviceItem key={dev.id} device={dev}/>
                )
            }
        </Row>
    );
});

export default DeviceList;