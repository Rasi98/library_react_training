import React from "react"
import {Modal, Button} from "react-bootstrap";

type DeleteconfProps = {
    num: number
    DeleteAuthor?: (index:number) => void
    setIsDeleteConfMsgVisible: (visible:boolean) => void
    isDeleteConfMsgVisible: boolean
    handleDeleteBook?: (index:number) => void
    type: string
}

const DeleteConfirmation:React.FC<DeleteconfProps> = (props) => {

    const handleDelete = (index:number) => {
        if(props.type==='author') {
            if (!props.DeleteAuthor) {
                return
            }
            props.DeleteAuthor(index - 1)
            props.setIsDeleteConfMsgVisible(false)
        }
        else if(props.type==='book'){
            if(!props.handleDeleteBook){
                return;
            }
            props.handleDeleteBook(index-1)
            props.setIsDeleteConfMsgVisible(false)
        }
    }



    return (

        <Modal show={props.isDeleteConfMsgVisible} onHide={() => props.setIsDeleteConfMsgVisible(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete this?</Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} onClick={() => props.setIsDeleteConfMsgVisible(false)}>
                    Close
                </Button>
                <Button variant={"danger"} onClick={()=>handleDelete(props.num)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>


    )

}

export default DeleteConfirmation;


