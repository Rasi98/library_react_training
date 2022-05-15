import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Swal from 'sweetalert2'

import Welcome from "./Welcome";
import Authors from './Authors'
import Books from "./books/Books";
import Footer from "./Footer"
import {IAuthor} from "../views/author";

const Library: React.FC = () => {
    const[authors,setAuthors]=useState<IAuthor[] | null>(null);
    const[editAuthorIndex,setEditAuthorIndex] = useState<number | null>(null);
    const [authorToUpdate,setAuthorToUpdate] = useState<IAuthor | null>(null);

    const handleEditAuthorIndex= (index:number) => {
        setEditAuthorIndex(index);
        console.log(index)
    }

    const handleAuthorUpdate= (author:IAuthor) => {
        if (!authors || !editAuthorIndex){
            return;
        }
        const authorList: IAuthor[] = authors.slice();
        authorList.splice(editAuthorIndex,1,author);
        setAuthors(authorList);
    }

    useEffect(() => {
        if (!editAuthorIndex || !authors){
            return;
        }
        const authorToUpdate: IAuthor = authors[editAuthorIndex];
        setAuthorToUpdate(authorToUpdate);
    },[editAuthorIndex])

    const handleAddAuthor= (author: string) => {
        if(!author){
            return
        }
        const newauthor= {
            name:author
        }
        const newauthors: IAuthor[] = authors ? authors.slice() : [];
        newauthors.push(newauthor);
        setAuthors(newauthors);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Author added!',
            showConfirmButton: false,
            timer: 1200
        })
    }

    const handleDeleteAuthor= (index:number) => {
        if(!authors) {
            return;
        }
        const newauthorlist: IAuthor[] = authors.slice();
        newauthorlist.splice(index,1);
        setAuthors(newauthorlist);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Author deleted!',
            showConfirmButton: false,
            timer: 1200
        })
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
                    <Authors handleAddAuthor = {handleAddAuthor}
                             authors = {authors}
                             handleEditAuthorIndex={handleEditAuthorIndex}
                             handleDeleteAuthor={handleDeleteAuthor}
                             authorToUpdate={authorToUpdate}
                             handleAuthorUpdate={handleAuthorUpdate}
                    />
                </Col>
            </Row>
            <Row>
                <div className={"footer-comp"}>
                    < Footer />
                </div>
            </Row>

        </Container>
    )
}
export default Library;