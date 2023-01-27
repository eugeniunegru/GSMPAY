import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {createBrand} from "../../http/deviceApi";

const ModalBrand = ({show, onHide}) => {
    const [value,setValue]=useState('')
    const addBrand=()=>{
        createBrand({name:value}).then(data=> {
            setValue('')
            onHide()
        })
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
                    Adaugare brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Introduceti datele necesare</h4>
                <Form>
                    <Form.Control
                        placeholder="Denumire"
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addBrand} variant="outline-dark">Adauga</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalBrand;