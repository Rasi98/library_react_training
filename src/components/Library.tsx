import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Welcome from "./Welcome";

const Library: React.FC = () => {
    return (
<Container fluid={true}>
    <Row>
        <Col xs={12}>
            <Welcome />
        </Col>
    </Row>
</Container>
    )
}

export default Library;