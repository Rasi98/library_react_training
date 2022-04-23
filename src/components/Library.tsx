import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import AuthorsList from "./AuthorsList";
import CreateBooksForm from "./CreateBooksForm";
import CreateAuthor from "./CreateAuthor";
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
        <Col>
            <Books />
        </Col>
        <Col>
            <AuthorsList/>
        </Col>
    </Row>
    <Row>
        <Col>
            <CreateBooksForm/>
        </Col>
        <Col>
            <CreateAuthor/>
        </Col>
    </Row>
</Container>
    )
}

export default Library;