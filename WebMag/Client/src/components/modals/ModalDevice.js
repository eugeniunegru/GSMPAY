import React, {useEffect,useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Context} from "../../index";
import DropdownItem from "react-bootstrap/DropdownItem";
import {createDevice, fetchBrand, fetchType} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const ModalDevice = observer(({show, onHide}) => {
    const [info,setInfo]=useState([])
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [file,setFile]=useState(null)
    const {device}=useContext(Context)

    useEffect(()=>{
        fetchType().then(data=>device.setTypes(data))
        fetchBrand().then(data=>device.setBrands(data))
    },[device])
    const selectFile=e=>{
        setFile(e.target.files[0])
    }
    const addInfo=()=>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const removeInfo=(number)=>{
        setInfo(info.filter(i=>i.number!==number))
    }
    const changeInfo=(key,value,number)=>{
        setInfo(info.map(i=>i.number===number?{...i,[key]:value}:i))
    }
    const addDevice=()=>{
        const formData=new FormData()
        formData.append('name',name)
        formData.append('price',price.toString())
        formData.append('img',file)
        formData.append('brandId',device.SelectedBrand.id)
        formData.append('typeId',device.SelectedType.id)
        formData.append('info',JSON.stringify(info))
        // for(const value of formData.values()){
        //     console.log(value)
        // }
        createDevice(formData).then(data=>onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Adauga dispozitiv
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Introduce-ti datele necessare</h4>
                <Form>
                    <Form.Control
                        className="my-3"
                        placeholder="Denumire"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                    <Form.Control
                        className="my-3"
                        type="number"
                        placeholder="Pret"
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className="my-3"
                        type="file"
                        placeholder="file.jpg/.png/.jpeg"
                        onChange={selectFile}
                    />
                    <Dropdown className="my-3">
                        <DropdownToggle>{device.SelectedType.name || 'Alegeti tipul'}</DropdownToggle>
                        <DropdownMenu>
                            {device.Types.map(type=>
                                <DropdownItem
                                    key={type.id}
                                    onClick={()=>device.setSelectedType(type)}
                                >{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="my-3">
                        <DropdownToggle>{device.SelectedBrand.name || 'Alegeti brandul'}</DropdownToggle>
                        <DropdownMenu>
                            {device.Brands.map(brand=>
                                <DropdownItem
                                    key={brand.id}
                                    onClick={()=>device.setSelectedBrand(brand)}
                                >{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Button
                        variant="outline-success"
                        onClick={addInfo}
                    >Adauga specificatie noua</Button>
                    {
                        info.map(i=>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        placeholder="Denumire"
                                        onChange={e=>changeInfo('title',e.target.value,i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        placeholder="Descriere"
                                        onChange={e=>changeInfo('description',e.target.value,i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant={"outline-danger"}
                                        onClick={()=>removeInfo(i.number)}
                                    >Delete</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addDevice} variant="outline-dark">Adauga</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDevice;