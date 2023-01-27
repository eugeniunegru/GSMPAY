import React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device}=useContext(Context)
    return (
        <Row className="d-flex">
            {
                device.Brands.map(brand=>
                <Card key={brand.id}
                      style={{cursor:"pointer"}}
                      className="p-3 w-auto"
                      onClick={()=>device.setSelectedBrand(brand)}
                      border={brand.id===device.SelectedBrand.id? "danger" : "light"}
                >
                    {brand.name}
                </Card>
                )
            }
        </Row>
    );
})

export default BrandBar;