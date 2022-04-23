import React from "react";
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/images/closeButton.svg";

type CreateBooksProps={
    onCloseButtonClick: ()=>void
}

const CreateBooksForm: React.FC<CreateBooksProps> = (props) => {
    // const [bookTitle, setBookTitle] = useState("");
    // const [isbn, setIsbn]
    // const [bookAuthor, setBookAuthor] = useState("");

    return (
        <div className={'createBooksSection'}>
            <Row>
                <Col>
                    <h4 className={'title'}>
                        Create Book
                    </h4>
                </Col>
                <Col>
                    <div className={"IconClass"}>
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
                    // value={bookTitle}
                />

                <label className='input-label'>ISBN
                </label>
                <input
                    className='form-control'
                    type="text"
                    // value={isbn}
                />

                <label className='input-label'>Author of the book
                </label>
                <select className='form-control'
                        name="cars"
                        // value={bookAuthor}
                >
                    <option value='' disabled selected hidden> </option>
                    <option value="Author1">Author1</option>
                    <option value="Author2">Author2</option>
                    <option value="Author3">Author3</option>
                    <option value="Author4">Author4</option>
                </select>
                <div className="button">
                    <Button type="submit" className={'submit-btn'}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateBooksForm;