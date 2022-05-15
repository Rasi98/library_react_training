import React, {FormEvent, useEffect, useState} from "react";
import Select from "react-select";
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/icons/closeButton.svg";
import {IAuthor} from "../views/author";
import {IBook} from "../views/Books"
import NumberFormat from 'react-number-format';

type EditBooksProps = {
    onCloseButtonClick: ()=>void;
    authors: IAuthor[] | null;
    editBook: IBook | null;
    handleEditBook: (book:IBook) => void;
}

const EditBooksForm: React.FC<EditBooksProps> = (props) => {
    const [bookTitle, setBookTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [bookAuthor, setBookAuthor] = useState<string>('');
    const [errorMsgAuthorVisible,setErrorMsgAuthorVisible] = useState(false);
    const [errorMsgTitleVisible,setErrorMsgTitleVisible] = useState(false);
    const [errorMsgPriceVisible,setErrorMsgPriceVisible] = useState(false);
    const [defaultValue, setDefaultValue] = useState<{ label: string, value: string }>()

    useEffect(() => {
        if(!props.editBook){
            return;
        }
        setBookTitle(props.editBook.title)
        setPrice(props.editBook.price)
        setDefaultValue({
            label: props.editBook ? props.editBook.author : '',
            value: props.editBook ? props.editBook.author : ''
        })
    }, [props.editBook])

    const options = () => {
        const authors: {value:string,label:string}[] = [];
        if(props.authors) {
            props.authors.map((author: IAuthor) =>
                authors.push({value: author.name, label: author.name})
            )
        }
        return authors;
    }

    const customStyles = {
        control: (base: any) => ({
            ...base,
            height: '2.2em',
            minHeight: '2.2em',
            borderRadius:0,
            borderColor:'#969696'
        })
    };

    const onEditBook = (e:FormEvent) => {
        e.preventDefault();
        if(!bookTitle){
            setErrorMsgTitleVisible(true) ;
            return;
        }
        if(!bookAuthor){
            setErrorMsgAuthorVisible(true) ;
            return;
        }
        if(!price){
            setErrorMsgPriceVisible(true);
            return;
        }
        const bookToUpdate: IBook = {...props.editBook, title: bookTitle, price: price, author: bookAuthor}
        props.handleEditBook(bookToUpdate);
        props.onCloseButtonClick();
    }

    return (
        <div className={'createBooksSection'}>
            <Row>
                <Col className = {"title-col"}>
                    <h3 className={'title'}>
                        Edit Book
                    </h3>
                    <div className={"IconClass-close"}>
                        <Image src={closeButton} onClick={props.onCloseButtonClick}/>
                    </div>
                </Col>
            </Row>
            <form className= 'booksForm' onSubmit={onEditBook}>
                <label className='input-label'>Title of the book
                </label>
                <input
                    className='form-control'
                    type="text"
                    value={bookTitle ? bookTitle : ''}
                    onChange={(e) =>{setBookTitle(e.target.value)}}
                    onFocus={() =>setErrorMsgTitleVisible(false)}
                />
                {errorMsgTitleVisible && <label className={'errormsg '}>Title field is required!</label>}

                <label className='input-label pt-1 pt-sm-2 pt-lg-3'>Price
                </label>
                <NumberFormat
                    className='form-control'
                    value={price}
                    allowNegative={false}
                    displayType={'input'}
                    thousandSeparator={true}
                    prefix={'$'}
                    onValueChange={(values) => {
                        const { formattedValue } = values;
                        setPrice(formattedValue);
                    }}
                    onFocus={() => setErrorMsgPriceVisible(false)}
                />
                {errorMsgPriceVisible && <label className={'errormsg'}>Price field is required!</label>}
                <label className='input-label pt-1 pt-sm-2 pt-lg-3'>Author
                </label>
                <Select
                    {...props}
                    isClearable={true}
                    styles={customStyles}
                    options={options()}
                    defaultValue={defaultValue}
                    onChange={(event) => event ? setBookAuthor(event.value) : setBookAuthor('')}
                    onFocus={() =>setErrorMsgAuthorVisible(false)}/>
                {errorMsgAuthorVisible && <label className={'errormsg'}>Author field is required!</label>}
                <div className="button mt-4">
                    <Button type="submit" className={'submit-btn'}>Edit</Button>
                </div>
            </form>
        </div>
    )
}

export default EditBooksForm