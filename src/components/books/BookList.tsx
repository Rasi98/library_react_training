import React from "react";
import {Col} from "react-bootstrap";
import Book from "./Book";
import {IBook} from "../../views/Books";

type BookListProps = {
    allBooks:IBook[]| null;
    handleDeleteBook: (index:number) => void;
    handleEditBook: () => void;
    handleEditBookIndex: (index:number) => void;
}

const BookList:React.FC <BookListProps> = (props) => {
    const {allBooks} = props;
    const renderBooks = () => {
        if(!allBooks){
            return;
        }
        return allBooks.map((book:IBook, index:number)=>
            <li className='book py-2' key={index}>
                <Book num={index+1} handleDeleteBook={props.handleDeleteBook} bookName={book.title}
                      handleEditBook = {props.handleEditBook} handleEditBookIndex = {props.handleEditBookIndex}
                />
            </li>
        );
    }
    return(
        <Col xs={12}>
            {(!allBooks || allBooks.length===0) && <label className='empty-label pt-3'>No books listed here.</label>}
            <ul className='list-unstyled mt-3 pl-0'>
                {renderBooks()}
            </ul>
        </Col>
    )
}

export default BookList;