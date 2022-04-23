import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Welcome from "./Welcome";
import Books from "./books/Books";

const Library: React.FC = () => {
    return (
<Container fluid={true}>
    <Row>
        <Col xs={12}>
            <Welcome />
        </Col>
    </Row>
    <Row>
        <Col xs={6} className='ps-5'>
            <Books />
        </Col>
        <Col xs={6} className='ps-5'>Authors</Col>
    </Row>
</Container>
    )
}

export default Library;