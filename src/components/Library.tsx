import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import Authors from './Authors'
import Books from "./books/Books";



const Library: React.FC = () => {

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome />
                </Col>
            </Row>
            <Row className={'d-flex flex-wrap-wrap'}>
                <Col>
                    <Books />
                </Col>
                <Col>
                    <Authors/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;