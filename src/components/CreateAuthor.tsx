import React, { FormEvent, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/icons/closeButton.svg";
import {IAuthor} from "../views/author";

type CreateAuthorProps = {
    onCloseButtonClick: () => void
    handleAddAuthor: (author: IAuthor) => void
}

const CreateAuthor: React.FC <CreateAuthorProps>= (props) => {

    const [authorName,setAuthorName] = useState<IAuthor | null>(null);
    const [errorMsgVisible,setErrorMsgVisible] = useState(false);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if (authorName===null){
            setErrorMsgVisible(true)
            return;
        }
        props.handleAddAuthor(authorName);
        setAuthorName(null);
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
                            value={authorName ? authorName.name : ''}
                            onChange={(e) => {setAuthorName({name:e.target.value})}}
                            onFocus={() =>setErrorMsgVisible(false)}
                        />
                        {errorMsgVisible && <label className={'errormsg'}>Author name field is required!</label>}

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