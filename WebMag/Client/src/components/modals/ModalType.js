import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceApi";

const ModalType = ({show, onHide}) => {
    const [value,setValue]=useState('')
    const addType=()=>{
        createType({name:value}).then(data=> {
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
                    Adaugare tip
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
                <Button onClick={addType} variant="outline-dark">Adauga</Button>
                <Button onClick={onHide} variant="outline-dark">Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalType;