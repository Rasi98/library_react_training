import React, { FormEvent, useState} from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/images/closeButton.svg";

type CreateAuthorProps = {
    onCloseButtonClick: ()=> void
    handleAddAuthor: (author: string) => void
}

const CreateAuthor: React.FC <CreateAuthorProps>= (props) => {

    const [authorName,setAuthorName] = useState<string>('');
    const [errormsgvisible,seterrormsgvisible] = useState(false)

    const handlesubmit = (e:FormEvent) => {
        e.preventDefault();
        if (!authorName){
            seterrormsgvisible(true)
        }
        props.handleAddAuthor(authorName)
        setAuthorName('')
    }

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
                            id="nameInput"
                            value={authorName}
                            onChange={(e) => {setAuthorName(e.target.value)}}
                            onFocus={() =>seterrormsgvisible(false)}
                        />
                        {errormsgvisible && <label className={'errormsg'}>This field is required!</label>}

                        <div className={"ButtonClass"}>
                            <Button onClick={handlesubmit}>
                                Create
                            </Button>
                        </div>
                    </div>
            </div>
        )
}

export default CreateAuthor