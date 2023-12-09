import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Delete() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleButtonClick = (action) => {
        if (action === 'delete') {
            setShowDeleteModal(true);
        }
    };
    const handleDeleteConfirmed = () => {
        setShowDeleteModal(false);
    };

    return (
        <>
            <Button variant="outline-secondary" onClick={() => handleButtonClick('delete')}>
                Delete
            </Button>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirmed}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};