import React, {useState} from "react";
import {Col} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../types/LibraryTypes";

const BookList:React.FC = () => {
    const initBooks: IBook[] = [
        {name: 'Harry Potter'},
        {name: 'Lolita'},
        {name: 'Jane eyre'}
    ];

    const [books]= useState(initBooks);

    const renderBooks = () => {
        return books.map((book:IBook, index:number)=>
            <li className='book py-2' key={index}><Book num={index+1} bookName={book.name}/></li>);
    }

    return(
        <Col xs={12}>
            {books.length===0 && <label className='empty-label py-2'>No books listed here.</label>}

            <ul className='list-unstyled pt-2 pl-0'>
                {renderBooks()}
            </ul>
        </Col>
    )
}

export default BookList;