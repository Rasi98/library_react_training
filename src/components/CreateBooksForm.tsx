import React, { FormEvent, useState} from "react";
import Select from "react-select";
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/icons/closeButton.svg";
import {IAuthor} from "../views/author";
import NumberFormat from 'react-number-format';


type CreateBooksProps = {
    onCloseButtonClick: ()=>void;
    handleAddBooks: (book: string, price: string, author: string) => void;
    authors: IAuthor[] | null;
}

const CreateBooksForm: React.FC<CreateBooksProps> = (props) => {
    const [bookTitle, setBookTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [bookAuthor, setBookAuthor] = useState<string>('');
    const [errorMsgAuthorVisible,setErrorMsgAuthorVisible] = useState(false);
    const [errorMsgTitleVisible,setErrorMsgTitleVisible] = useState(false);
    const [errorMsgPriceVisible,setErrorMsgPriceVisible] = useState(false);

    const options = () => {
        const authors: {value:string,label:string}[] = [];
        if(props.authors) {
            props.authors.map((author: IAuthor) =>
                authors.push({value: author.name, label: author.name})
            )
        }
        return authors;
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if (!bookAuthor) {
            setErrorMsgAuthorVisible(true);
        }
        if (!price) {
            setErrorMsgPriceVisible(true)
        }
        if (!bookTitle) {
            setErrorMsgTitleVisible(true)
        }
        props.handleAddBooks(bookTitle,price, bookAuthor);
        setBookTitle('');
        setPrice('')
    }

    return (
        <div className={'createBooksSection'}>
            <Row>
                <Col className = {"title-col"}>
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
                    value={bookTitle ? bookTitle : ''}
                    onChange={(e) =>{setBookTitle(e.target.value)}}
                    onFocus={() =>setErrorMsgTitleVisible(false)}
                />
                {errorMsgTitleVisible && <label className={'errormsg'}>Title field is required!</label>}

                <label className='input-label'>Price
                </label>
                <NumberFormat
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

                <label className='input-label'>Author of the book
                </label>
                <Select options={options()}
                        onChange={(event) => event ? setBookAuthor(event.value) : setBookAuthor('')}
                        onFocus={() =>setErrorMsgAuthorVisible(false)}/>
                {errorMsgAuthorVisible && <label className={'errormsg'}>Author field is required!</label>}
                <div className="button mt-3">
                    <Button type="submit" className={'submit-btn'} onClick={handleSubmit}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateBooksForm