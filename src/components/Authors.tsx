import React, {useState} from "react";
import {Row} from "react-bootstrap";

import CreateAuthor from './CreateAuthor';
import AuthorsList from './AuthorsList';
import AuthorsTitle from './AuthorsTitle';
import AddAuthor from './AddAuthor';
import {IAuthor} from "../views/author";

type AuthorsProps= {
    handleAddAuthor: (author: string)=> void
    authors: IAuthor[] | null;
    handleDeleteAuthor: (index:number)=> void
}
const Authors: React.FC<AuthorsProps>= (props) => {
    const[isFormVisible,setIsFormVisible]= useState(false);

    const handleAddAuthorform= () => {
        setIsFormVisible(true);
    }

    const handleCloseAuthorform= () => {
        setIsFormVisible(false);
    }

    return(
        <Row className={'author-section mt-4 mb-5 mx-lg-3 my-lg-2'}>
            <AuthorsTitle/>
            <AuthorsList
                allAuthors={props.authors}
                deleteAuthor={props.handleDeleteAuthor}/>
            <AddAuthor onAddAuthorClick={handleAddAuthorform}/>
            {isFormVisible &&
                <CreateAuthor
                    onCloseButtonClick={handleCloseAuthorform}
                    handleAddAuthor={props.handleAddAuthor}
                />}
        </Row>
    );
}
export default Authors;