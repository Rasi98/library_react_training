import React from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";

const Books: React.FC = () => {
    return(
        <Row className='book-section'>
            <BookTitle />
            <BookList/>
            <AddBook/>
            <BookForm/>
        </Row>
    )
};

export default Books;