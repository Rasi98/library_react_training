import React, {useEffect, useState} from "react";
import {Button, Col, Image, Row} from "react-bootstrap";
import closeButton from "../assets/icons/closeButton.svg";
import {IAuthor} from "../views/author";

type EditAuthorProps={
    closeIsEditFormVisible: () => void;
    authorToUpdate: IAuthor | null;
    handleAuthorUpdate: (name:IAuthor) => void;
}
const EditAuthorForm: React.FC <EditAuthorProps>= (props) => {
    const [authorName,setAuthorName] = useState<string | null>(null);
    const [errorMsgVisible,setErrorMsgVisible] = useState(false);

    useEffect(() => {
        if (!props.authorToUpdate){
            return;
        }
        setAuthorName(props.authorToUpdate.name);
    },[props.authorToUpdate])

    const onEditClick= () => {
        if(!authorName){
            setErrorMsgVisible(true)
            return;
        }
            const authorToUpdate: IAuthor = {...props.authorToUpdate,name:authorName};
            props.handleAuthorUpdate(authorToUpdate);
            setAuthorName(null)
            props.closeIsEditFormVisible();
    }

    return(
        <div className={"CreateAuthor"}>
            <Row>
                <Col xs={10} className = {"title-col"}>
                    <h3 className={'title'}>
                        Edit Author
                    </h3>
                    <div className={"IconClass-close"}>
                        <Image src={closeButton} onClick={props.closeIsEditFormVisible}/>
                    </div>
                </Col>
            </Row>
            <div className="createAuthorInput">
                <label className={'input-label'} htmlFor="formGroupExampleInput">Name of Author</label>
                <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={authorName ? authorName : ''}
                    onChange={(e) => {setAuthorName(e.target.value)}}
                    onFocus={() =>setErrorMsgVisible(false)}
                />
                {errorMsgVisible && <label className={'errormsg'}>Author name field is required!</label>}
                <div className={"ButtonClass mt-4"}>
                    <Button onClick={onEditClick}>
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default EditAuthorForm;