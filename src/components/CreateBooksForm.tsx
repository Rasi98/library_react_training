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
    const [errorMsgVisible,setErrorMsgVisible] = useState(false);

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
        if (!bookTitle || !price || !bookAuthor) {
            setErrorMsgVisible(true);
        }
        props.handleAddBooks(bookTitle,price, bookAuthor);
        setBookTitle('');
        setPrice('')
        setBookAuthor('')

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
                    onFocus={() =>setErrorMsgVisible(false)}
                />

                <label className='input-label'>Price
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
                />
                <label className='input-label'>Author
                </label>
                <Select
                    isClearable={true}
                    styles={customStyles}
                    options={options()}
                    onChange={(event) => event ? setBookAuthor(event.value) : setBookAuthor('')}
                    onFocus={() =>setErrorMsgVisible(false)}/>
                {errorMsgVisible && <label className={'errormsg'}>All fields are required!</label>}
                <div className="button mt-4">
                    <Button type="submit" className={'submit-btn'} onClick={handleSubmit}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateBooksForm