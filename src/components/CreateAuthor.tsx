import React, { FormEvent, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/icons/closeButton.svg";

type CreateAuthorProps = {
    onCloseButtonClick: () => void
    handleAddAuthor: (author: string) => void
}

const CreateAuthor: React.FC <CreateAuthorProps>= (props) => {

    const [authorName,setAuthorName] = useState<string>('');
    const [errorMsgVisible,setErrorMsgVisible] = useState(false);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if (!authorName){
            setErrorMsgVisible(true);
        }
        props.handleAddAuthor(authorName);
        setAuthorName('');
    }

        return (
            <div className={"CreateAuthor"}>

                <Row>
                    <Col xs={10} className = {"title-col"}>
                        <h3 className={'title'}>
                            Create Author
                        </h3>
                        <div className={"IconClass-close"}>
                            <Image src={closeButton} onClick={props.onCloseButtonClick}/>
                        </div>
                    </Col>
                </Row>

                    <div className="createAuthorInput">
                        <label className={'input-label'} htmlFor="formGroupExampleInput">Name of Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            value={authorName}
                            onChange={(e) => {setAuthorName(e.target.value)}}
                            onFocus={() =>setErrorMsgVisible(false)}
                        />
                        {errorMsgVisible && <label className={'errormsg'}>This field is required!</label>}

                        <div className={"ButtonClass mt-4"}>
                            <Button onClick={handleSubmit}>
                                Create
                            </Button>
                        </div>
                    </div>
            </div>
        )
}

export default CreateAuthor