import React from "react";
import {Col, Image} from "react-bootstrap";
import plus from "../../assets/images/plus.jpg";

const AddBook: React.FC = () => {
    return(
        <Col className='add-book d-flex align-items-center'>
            <Image src={plus}/>
            <i className='feather-plus me-1' />
            <label>Add Book</label>
        </Col>
    )
}

export default AddBook;