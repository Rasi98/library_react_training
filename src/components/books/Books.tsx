import React, {useState} from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import CreateBookFrom from '../CreateBooksForm';

const Books: React.FC = () => {
    const[isFormVisible,setisFormVisible]=useState(false)

    const handleAddBook = () => {
        setisFormVisible(true);
    }
    const handleCloseBook = () => {
        setisFormVisible(false);
    }

    return(
        <Row className='book-section mx-3 my-2'>
            <BookTitle />
            <BookList/>
            <AddBook onAddBookClick={handleAddBook}/>
            {isFormVisible && <CreateBookFrom onCloseButtonClick={handleCloseBook}/>}

        </Row>
    )
};

export default Books;