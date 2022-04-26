import React from "react";
import {Col} from "react-bootstrap";
import Author from './Author';
import {IAuthor} from "../views/author";

type authorListProps = {
    allauthors:IAuthor[]| null
    DeleteAuthor: (index:number) => void
}

const AuthorsList: React.FC <authorListProps> = (props) => {

   const {allauthors} = props

    const renderAuthors = () => {
        if(!allauthors){
            return;
        }
        return  allauthors.map((author:IAuthor,index:number) =>
            <li className={'author py-2'} key={index}><Author DeleteAuthor={props.DeleteAuthor} num={index+1} authorName={author}/></li>);
    }


    return(
        <Col xs={12} >
            {(!allauthors || allauthors.length===0) && <label className={'no-author-msg py-2'}>No authors listed here.</label>}
            <ul className={'author-list pt-2'}>
                {renderAuthors()}
            </ul>
        </Col>
    );
}

export default AuthorsList;
