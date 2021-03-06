import React, {useState} from "react";
import {Row} from "react-bootstrap";
import BookTitle from "./BookTitle";
import BookList from "./BookList";
import AddBook from "./AddBook";
import CreateBookForm from '../CreateBooksForm';
import {IBook} from "../../views/Books"
import {IAuthor} from "../../views/author";
import Swal from "sweetalert2";

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
    const handleAddBook= (book: string, price: string, author: string) => {
        if (!book || !price || !author){
            return;
        }
        const newBook= {
            title:book,
            price: price,
            author: author
        }
        console.log(newBook);
        const newBooks: IBook[] = books ? books.slice() : [];
        newBooks.push(newBook);
        setBooks(newBooks);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Book added!',
            showConfirmButton: false,
            timer: 1200
        })
    }
    const handleDeleteBook = (index:number) => {
        if(!books){
            return;
        }
        const newbooklist: IBook[] = books.slice();
        newbooklist.splice(index,1);
        setBooks(newbooklist);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Book deleted!',
            showConfirmButton: false,
            timer: 1200
        })
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