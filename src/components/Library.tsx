import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import AuthorsList from "./AuthorsList";

const Library: React.FC = () => {
    return (
<Container fluid={true}>
    <Row>
        <Col xs={12}>
            <Welcome />
        </Col>
    </Row>
    <Row>
        <Col>
            {/*Book List component*/}
        </Col>
        <Col>
            <AuthorsList/>
        </Col>
    </Row>
</Container>
    )
}

export default Library;