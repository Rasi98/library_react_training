import React, {PropsWithChildren, useState} from "react";
import {Col, Row, Image} from "react-bootstrap";
import edit from "../../assets/images/edit.jpg";
import trash from "../../assets/images/trash.jpg";
import {DeleteConfirmation} from "../DeleteConfirmation";


type BookProps = {
    num: number
    bookName:string
}

const Book: React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {

    const[isDeleteConfMsgVisible, setIsDeleteConfMsgVisible] = useState(false)
    const handleDeleteButton = () => setIsDeleteConfMsgVisible(true);

    const {num, bookName}=props;

    return(
        <Row>
            <Col xs={9}>
                <label>{num}. {bookName}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-center'>
                <Image className='icon me-2' src={edit}/>
                <Image className='icon me-2' src={trash} onClick={handleDeleteButton}/>
                {isDeleteConfMsgVisible && <DeleteConfirmation name={"book"}/>}
            </Col>
        </Row>
    )
}

export default Book;