import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import logo from '../assets/icons/plus.svg'

type AuthorsProps = {
    onAddAuthorClick: ()=> void
}

const AddAuthor:React.FC<AuthorsProps> = (props) => {
    return(
        <Container>
            <Row>
                <Col className={'d-flex align-items-center justify-content-start'}>
                    <img className={'add-author-icon add'} src={logo} alt={'Add logo'} onClick={props.onAddAuthorClick}/>
                    <label className={'add-author px-1'} onClick={props.onAddAuthorClick}>Add Author</label>
                </Col>
            </Row>
        </Container>
    );
}

export default AddAuthor;