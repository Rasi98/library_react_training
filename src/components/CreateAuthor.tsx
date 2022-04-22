import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/images/closeButton.svg";

class CreateAuthor extends React.Component {

    test() {
        console.log("Button")
    }
    // @ts-ignore
    render() {
        return (

            <div className={"CreateAuthor"}>

                <Row>
                    <Col>
                        <h4>
                            Create Author
                        </h4>
                    </Col>
                    <Col>
                        <div className={"IconClass"} onClick={this.test}>

                            <Image src={closeButton}/>
                        </div>


                    </Col>
                </Row>


                <div className="createAuthorInput">
                    <label htmlFor="formGroupExampleInput">Name of Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                    />

                    <div className={"ButtonClass"}>
                        <Button>
                            Create
                        </Button>
                    </div>
                </div>
            </div>
        )

    }
}

export default CreateAuthor