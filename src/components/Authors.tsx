import React, {useState} from "react";
import {Row} from "react-bootstrap";

import CreateAuthor from './CreateAuthor';
import AuthorsList from './AuthorsList';
import AuthorsTitle from './AuthorsTitle';
import AddAuthor from './AddAuthor';
import EditAuthor from './EditAuthorForm';
import {IAuthor} from "../views/author";

type AuthorsProps= {
    handleAddAuthor: (author: IAuthor)=> void
    authors: IAuthor[] | null;
    handleDeleteAuthor: (index:number)=> void
    handleEditAuthorIndex: (index:number) => void
    authorToUpdate: IAuthor | null;
    handleAuthorUpdate: (name:IAuthor) => void;
}
const Authors: React.FC<AuthorsProps>= (props) => {
    const[isFormVisible,setIsFormVisible]= useState(false);
    const[isEditFormVisible,setIsEditFormVisible]= useState(false);


    const handleAddAuthorform= () => {
        setIsFormVisible(true);
        setIsEditFormVisible(false);
    }

    const handleCloseAuthorform= () => {
        setIsFormVisible(false);
    }

    const openIsEditFormVisible= () => {
        setIsEditFormVisible(true);
        setIsFormVisible(false);
    }
    const closeIsEditFormVisible= () => {
        setIsEditFormVisible(false);
    }


    return(
        <Row className={'author-section mt-4 mb-5 mx-lg-3 my-lg-2'}>
            <AuthorsTitle/>
            <AuthorsList
                allAuthors={props.authors}
                handleEditAuthorIndex={props.handleEditAuthorIndex}
                openIsEditFormVisible={openIsEditFormVisible}
                deleteAuthor={props.handleDeleteAuthor}/>
            <AddAuthor onAddAuthorClick={handleAddAuthorform}/>
            {isFormVisible &&
                <CreateAuthor
                    onCloseButtonClick={handleCloseAuthorform}
                    handleAddAuthor={props.handleAddAuthor}
                />}
            {isEditFormVisible &&
                <EditAuthor
                    closeIsEditFormVisible={closeIsEditFormVisible}
                    authorToUpdate={props.authorToUpdate}
                    handleAuthorUpdate={props.handleAuthorUpdate}
                />}
        </Row>
    );
}
export default Authors;