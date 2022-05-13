import React, {useState} from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import CreateBookForm from '../CreateBooksForm';
import {IBook} from "../../views/Books"
import {IAuthor} from "../../views/author";

type BooksProps = {
    authors: IAuthor[] | null;
}

const Books: React.FC<BooksProps>= (props) => {
    const[isFormVisible,setIsFormVisible]= useState(false);
    const[books,setBooks]= useState<IBook[] | null>(null);

    const handleAddBookForm = () => {
        setIsFormVisible(true);
    }
    const handleCloseBook = () => {
        setIsFormVisible(false);
    }

    const handleAddBook= (book: string, isbn: string, author: string) => {
        if (!book || !isbn || !author){
            return;
        }
        const newBook= {
            title:book,
            isbn: isbn,
            author: author
        }
        const newBooks: IBook[] = books ? books.slice() : [];
        newBooks.push(newBook);
        setBooks(newBooks);
    }

    const handleDeleteBook = (index:number) => {
        if(!books){
            return;
        }
        const newbooklist: IBook[] = books.slice();
        newbooklist.splice(index,1);
        setBooks(newbooklist);
    }
    return(
        <Row className='book-section mt-4 mb-5 mx-lg-3 my-lg-2'>
            <BookTitle />
            <BookList allBooks={books} handleDeleteBook={handleDeleteBook}/>
            <AddBook onAddBookClick={handleAddBookForm}/>
            {isFormVisible && <CreateBookForm onCloseButtonClick={handleCloseBook}
                                              handleAddBooks={handleAddBook}
                                              authors = {props.authors}
            />}

        </Row>
    )
};

export default Books;