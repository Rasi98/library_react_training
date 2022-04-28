import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/icons/plus.svg";

type BooksProps = {
    onAddBookClick: ()=> void
}

const AddBook: React.FC<BooksProps> = (props) => {
    return(
        <Container>
            <Row>
                <Col className={'d-flex align-items-center justify-content-start'}>
                    <img className={'add'} src={logo} alt={'Add logo'}/>
                    <label className={'add-book px-1'} onClick={props.onAddBookClick}>Add Book</label>
                </Col>
            </Row>
        </Container>
    )
}

export default AddBook;