import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

class CreateAuthor extends React.Component {

    render () {
        return (
            <div className={"CreateAuthor"}>

                <Row>
                    <Col>
                        <h4>
                            Create Author
                        </h4>
                    </Col>
                    <Col>
                        <div className={"IconClass"}>
                            a
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

            <div className={"ButtonClass"} >
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