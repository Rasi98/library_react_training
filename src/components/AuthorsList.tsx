import React, {useState} from "react";
import {Col} from "react-bootstrap";
import Author from './Author';
import {IAuthor} from "../views/author";


const AuthorsList: React.FC = () => {
    const authorset:IAuthor[] = [
        {name:'Lakshan'},
        {name:'Sahani'},
        {name:'Thevindu'},
        {name:'Sewmini'}
    ];

    const[authors]=useState(authorset);

    const AuthorItem = authors.map((author:IAuthor,index:number) =>
        <li className={'author py-2'} key={index}><Author num={index+1} authorName={author.name}/></li>);

    return(
        <Col xs={12} >
            {authors.length===0 && <label className={'no-author-msg py-2'}>No authors listed here.</label>}
            <ul className={'author-list pt-2'}>
                {AuthorItem}
            </ul>
        </Col>
    );
}

export default AuthorsList;
