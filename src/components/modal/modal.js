//core
import React from "react";

// styles
import {Button, Col, Modal} from "react-bootstrap";

export const CustomModal = ({show, handleClose, title, setTitle, description, setDescription, addNewFeed}) => {

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title> Add new feed </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col>
                <span>
                    Title
                </span>
                <input value={title} onChange={e => setTitle(e.target.value)} className="w-100" />
            </Col>
            <Col className="pt-2">
                <span>
                    Description
                </span>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-100"
                    rows="5"
                    style={{resize: "none"}}
                />
            </Col>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={addNewFeed}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}