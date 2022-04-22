import React from "react";
import {Col} from "react-bootstrap";


const AuthorsList: React.FC = () => {
    return(
        <Col xs={12} >
            <label className={'no-author-msg pb-2'}>No authors listed here.</label>
            <ul className={'author-list'}>
                <li className={'author py-1'}>1. Author 1</li>
                <li className={'author py-1'}>2. Author 2</li>
                <li className={'author py-1'}>3. Author 3</li>
            </ul>
        </Col>
    );
}

export default AuthorsList;
