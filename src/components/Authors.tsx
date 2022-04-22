import React from "react";
import {Row} from "react-bootstrap";

import AuthorsList from './AuthorsList'
import AuthorsTitle from './AuthorsTitle'
import AddAuthor from './AddAuthor'

const Authors:React.FC = () =>{
    return(
        <Row className={'author-section mx-3 my-2'}>
            <AuthorsTitle/>
            <AuthorsList/>
            <AddAuthor/>
        </Row>
    );
}

export default Authors;