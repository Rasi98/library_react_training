import React, {useState} from "react";
import {Row} from "react-bootstrap";

import CreateAuthor from './CreateAuthor';
import AuthorsList from './AuthorsList';
import AuthorsTitle from './AuthorsTitle';
import AddAuthor from './AddAuthor';
import {IAuthor} from "../views/author";

type authorsProps= {
    AuthorsList: IAuthor[]
}

const Authors:React.FC <authorsProps>= (props) =>{
    const[isFormVisible,setisFormVisible]=useState(false)


    const handleAddAuthor = () => {
      setisFormVisible(true);
    }
    const handleCloseAuthor = () => {
        setisFormVisible(false);
    }
    
    return(
        <Row className={'author-section mx-3 my-2'}>
            <AuthorsTitle/>
            <AuthorsList authors={props.AuthorsList}/>
            <AddAuthor onAddAuthorClick={handleAddAuthor}/>
            {isFormVisible &&
                <CreateAuthor
                    onCloseButtonClick={handleCloseAuthor}
                />}
        </Row>
    );
}

export default Authors;