import React, { FormEvent, useState} from "react";
//import Select from "react-select";
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/images/closeButton.svg";
import {IAuthor} from "../views/author";

type CreateBooksProps={
    onCloseButtonClick: ()=>void
    handleAddBooks: (book: string, isbn: string, author: string) => void
    authors: IAuthor[] | null;
}

const CreateBooksForm: React.FC<CreateBooksProps> = (props) => {
    const [bookTitle, setBookTitle] = useState<string>('');
    const [isbn, setIsbn] = useState<string>('');
    const [bookAuthor, setBookAuthor] = useState<string>('');
    const [errormsgvisible,seterrormsgvisible] = useState(false);

    const handlesubmit = (e:FormEvent) => {
        e.preventDefault();
        if (!bookTitle || !isbn || !bookAuthor) {
            seterrormsgvisible(true)
        }
        props.handleAddBooks(bookTitle, isbn, bookAuthor)
        setBookTitle('')
        setIsbn('')
    }

    return (
        <div className={'createBooksSection'}>
            <Row>
                <Col className = {"title-col"} xs={10}>
                    <h3 className={'title'}>
                        Create Book
                    </h3>
                    <div className={"IconClass-close"}>
                        <Image src={closeButton} onClick={props.onCloseButtonClick}/>
                    </div>
                </Col>
            </Row>
            <form className= 'booksForm'>
                <label className='input-label'>Title of the book
                </label>
                <input
                    className='form-control'
                    type="text"
                    value={bookTitle}
                    onChange={(e) => {setBookTitle(e.target.value)}}
                    onFocus={() =>seterrormsgvisible(false)}
                />

                <label className='input-label'>ISBN
                </label>
                <input
                    className='form-control'
                    type="text"
                    value={isbn}
                    onChange={(e) => {setIsbn(e.target.value)}}
                    onFocus={() =>seterrormsgvisible(false)}
                />

                <label className='input-label'>Author of the book
                </label>
                <select
                        className='form-control'
                        id={'dropdown'}
                        onChange={(e) => {setBookAuthor(e.target.value)}}
                        onFocus={() =>seterrormsgvisible(false)}
                >
                    <option value='' disabled selected hidden>{props.authors ? 'Choose here...' : 'No Authors'}</option>
                    {props.authors ? props.authors.map((author:IAuthor) =>
                        <option value={author.name}>{author.name}</option>):
                        <option value='' disabled> No Authors </option>}
                </select>
                {errormsgvisible && <label className={'errormsg'}>All fields are required!</label>}
                <div className="button">
                    <Button type="submit" className={'submit-btn'} onClick={handlesubmit}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateBooksForm