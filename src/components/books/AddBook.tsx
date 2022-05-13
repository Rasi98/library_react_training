import React from "react";
import {Col, Row} from "react-bootstrap";
import logo from "../../assets/icons/plus.svg";

type BooksProps = {
    onAddBookClick: () => void;
}

const AddBook: React.FC<BooksProps> = (props) => {
    return(
            <Row>
                <Col className={'d-flex align-items-center justify-content-start'}>
                    <img className={'add-book-icon add'} src={logo} onClick={props.onAddBookClick} alt={'Add logo'}/>
                    <label className={'add-book px-1'} onClick={props.onAddBookClick}>Add Book</label>
                </Col>
            </Row>
    )
}

export default AddBook;