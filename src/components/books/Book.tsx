import React, {PropsWithChildren} from "react";
import {Col, Row, Image} from "react-bootstrap";
import edit from "../../assets/images/edit.jpg";
import trash from "../../assets/images/trash.jpg";


type BookProps = {
    num: number
    bookName:string
}

const Book: React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {

    const {num, bookName}=props;

    return(
        <Row>
            <Col xs={9}>
                <label>{num}. {bookName}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-end'>
                <Image className='me-3' src={edit}/>
                <Image className='me-3' src={trash}/>
            </Col>
        </Row>
    )
}

export default Book;