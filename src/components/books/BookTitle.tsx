import React from "react";
import {Col} from "react-bootstrap";

const BookTitle:React.FC = () => {
    return (
            <Col xs={12} className={'book-title'}>
                <h2 className='pb-1 pb-sm-2'>Books</h2>
            </Col>
    )
}

export default BookTitle;