import React, {useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/images/closeButton.svg";

type CreateAuthorProps = {
    onCloseButtonClick: ()=> void
}

const CreateAuthor: React.FC <CreateAuthorProps>= (props) => {

    const [authorName,setAuthorName] = useState<string>();


        return (
            <div className={"CreateAuthor"}>

                <Row>
                    <Col xs={10}>
                        <h4 className={'title'}>
                            Create Author
                        </h4>
                    </Col>
                    <Col xs={2}>
                        <div className={"IconClass"}>
                            <Image src={closeButton} onClick={props.onCloseButtonClick}/>
                        </div>
                    </Col>
                </Row>


                <div className="createAuthorInput">
                    <label className={'input-label'} htmlFor="formGroupExampleInput">Name of Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        value={authorName}
                        onChange={(e) => {setAuthorName(e.target.value)}}
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

export default CreateAuthor