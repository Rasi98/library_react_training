import React, {useState} from "react";
import {Row} from "react-bootstrap";

import CreateAuthor from './CreateAuthor';
import AuthorsList from './AuthorsList';
import AuthorsTitle from './AuthorsTitle';
import AddAuthor from './AddAuthor';
import {IAuthor} from "../views/author";


const Authors:React.FC = () =>{
    const[isFormVisible,setisFormVisible]=useState(false)
    const[authors,setauthors]=useState<IAuthor[] | null>(null)


    const handleAddAuthorform = () => {
      setisFormVisible(true);
    }

    const handleCloseAuthorform = () => {
        setisFormVisible(false);
    }

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

    
    return(
        <Row className={'author-section mx-3 my-2'}>
            <AuthorsTitle/>
            <AuthorsList allauthors={authors}/>
            <AddAuthor onAddAuthorClick={handleAddAuthorform}/>
            {isFormVisible &&
                <CreateAuthor
                    onCloseButtonClick={handleCloseAuthorform}
                    handleAddAuthor={handleAddAuthor}
                />}
        </Row>
    );
}

export default Authors;