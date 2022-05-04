import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

import Welcome from "./Welcome";
import Authors from './Authors'
import Books from "./books/Books";
import {IAuthor} from "../views/author";



const Library: React.FC = () => {
    const[authors,setauthors]=useState<IAuthor[] | null>(null);

    const handleAddAuthor = (author: string) => {
        if (!author){
            return;
        }
        const newauthor={
            name:author
        }
        const newauthors: IAuthor[] = authors ? authors.slice() : []
        newauthors.push(newauthor)
        setauthors(newauthors)
    }

    const handleDeleteAuthor = (index:number) => {
        if(!authors){
            return
        }
        const newauthorlist: IAuthor[] = authors.slice();
        newauthorlist.splice(index,1);
        setauthors(newauthorlist);
    }

    return (
        <Container  fluid={true}>
            <Row>
                <Col xs={12}>
                    <Welcome />
                </Col>
            </Row>
            <Row className={'layout'}>
                <Col>
                    <Books authors = {authors}/>
                </Col>
                <Col>
                    <Authors handleAddAuthor = {handleAddAuthor} authors = {authors}
                             handleDeleteAuthor={handleDeleteAuthor}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;