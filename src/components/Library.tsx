import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import Authors from './Authors'

const Library: React.FC = () => {
    return (
<Container fluid={true}>
    <Row>
        <Col xs={12}>
            <Welcome />
        </Col>
    </Row>
    <Row>
        <Col xs={6}>
            {/*Book List component*/}
        </Col>
        <Col xs={6}>
            <Authors/>
        </Col>
    </Row>
</Container>
    )
}

export default Library;