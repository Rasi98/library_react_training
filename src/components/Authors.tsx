import React, {useState} from "react";
import {Row} from "react-bootstrap";

import CreateAuthor from './CreateAuthor';
import AuthorsList from './AuthorsList';
import AuthorsTitle from './AuthorsTitle';
import AddAuthor from './AddAuthor';
import {IAuthor} from "../views/author";

type authorsProps = {
    handleAddAuthor: (author: string) => void
    authors: IAuthor[] | null;
    handleDeleteAuthor: (index:number) => void
}

const Authors:React.FC<authorsProps> = (props) =>{
    const[isFormVisible,setisFormVisible]=useState(false)

    const handleAddAuthorform = () => {
      setisFormVisible(true);
    }

    const handleCloseAuthorform = () => {
        setisFormVisible(false);
    }

    return(
        <Row className={'author-section mx-3 my-2'}>
            <AuthorsTitle/>
            <AuthorsList allauthors={props.authors} DeleteAuthor={props.handleDeleteAuthor}/>
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