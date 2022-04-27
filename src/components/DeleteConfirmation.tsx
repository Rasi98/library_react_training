import React, {useState} from "react"
import {Modal, Button} from "react-bootstrap";





export function DeleteConfirmation (props: any) {
    const [isDeleteConfShow, setDeleteConfShow] = useState(true)

    const handleDelete = () => {
        alert("Deleted") //Add delete function
        setDeleteConfShow(true)
    }
    const handleClose = () => setDeleteConfShow(false)


    return (

        <Modal show={isDeleteConfShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this {props.name}?</Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} onClick={handleClose}>
                    Close
                </Button>
                <Button variant={"danger"} onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>


    )

}



