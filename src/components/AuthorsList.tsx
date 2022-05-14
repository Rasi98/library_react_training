import React from "react";
import {Col} from "react-bootstrap";
import Author from './Author';
import {IAuthor} from "../views/author";

type AuthorListProps= {
    allAuthors:IAuthor[]| null
    deleteAuthor: (index:number)=> void
}
const AuthorsList: React.FC<AuthorListProps>= (props)=> {
   const {allAuthors} = props

    const renderAuthors= () => {
        if(!allAuthors) {
            return;
        }
        return  allAuthors.map((author:IAuthor,index:number) =>
            <li className={'author py-2'} key={index}>
                <Author
                    deleteAuthor={props.deleteAuthor}
                    num={index+1}
                    authorName={author}/>
            </li>);
    }

    return(
        <Col xs={12} >
            {(!allAuthors || allAuthors.length===0) &&
                <label className={'no-author-msg pt-sm-3'}>No authors listed here.</label>}
            <ul className={'author-list mt-1 mt-sm-3'}>
                {renderAuthors()}
            </ul>
        </Col>
    );
}
export default AuthorsList;
