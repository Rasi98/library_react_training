import React from "react";
import {Col, Row, Image} from "react-bootstrap";
import library from "../assets/images/library.jpg";

const Welcome: React.FC = () => {
    return(
        <Row className='welcome'>
            <Col xs={12} className='my-2'>
                <h1 className='text-center'>My Library</h1>
            </Col>
            <Col xs={12} className='px-0'>
                <Image alt={'Library Image'} src={library} />
            </Col>
            <Col xs={12} className='text-end pt-2'>
                <span className='photo-credits'>
                Photo by{" "}
                <a href="https://unsplash.com/
                @annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Hunko</a> on{" "}
                <a href="https://unsplash.com/
                @annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </span>
            </Col>
        </Row>
    )
}

export default Welcome;