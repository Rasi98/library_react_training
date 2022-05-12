import React from "react";
import {Col} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../views/Books";

type bookListProps = {
    allBooks:IBook[]| null
    handleDeleteBook: (index:number) => void
}

const BookList:React.FC <bookListProps> = (props) => {

    const {allBooks} = props

    const renderBooks = () => {
        if(!allBooks){
            return;
        }
        return allBooks.map((book:IBook, index:number)=>
            <li className='book py-2' key={index}><Book num={index+1} handleDeleteBook={props.handleDeleteBook} bookName={book.title}/></li>);
    }

    return(
        <Col xs={12}>
            {(!allBooks || allBooks.length===0) &&
                <label className='empty-label pt-sm-3'>No books listed here.</label>}

            <ul className='book-name list-unstyled mt-1 mt-sm-3'>
                {renderBooks()}
            </ul>
        </Col>
    )
}

export default BookList;