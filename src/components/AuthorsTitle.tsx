import React from "react";
import {Col} from "react-bootstrap";

const AuthorsTitle:React.FC = () => {
    return(
        <Col xs={12} className={'author-title'}>
         <h2 className={'pb-2'}>Authors</h2>
        </Col>
    );
}

export default AuthorsTitle;