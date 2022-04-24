import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import Authors from './Authors'
import Books from "./books/Books";
import {IAuthor} from "../views/author";



const Library: React.FC = () => {
    const authorlist: IAuthor[] = [{name:'lakshan'},{name:'semini'},{name:'sahani'},{name:'Thevindu'}];
    const[authors,setAuthors]=useState(authorlist)

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
                    <Authors AuthorsList={authors}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;