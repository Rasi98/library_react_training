import React from "react";
import {Col} from "react-bootstrap";

const EmptyLabel: React.FC = () => {
    return(
        <Col xs={12} className='my-3'>
            <label className='empty-label'>No books listed here.</label>
        </Col>
    )
}

export default EmptyLabel;