import React,{useState} from "react";
import {Col, Row} from "react-bootstrap";
import Edit from '../assets/icons/edit.svg'
import Delete from '../assets/icons/trash-2.svg'
import {IAuthor} from "../views/author";
import DeleteConfirmation from "./DeleteConfirmation";

type authorProps = {
    num: number;
    authorName: IAuthor;
    DeleteAuthor:(index:number)=>void
}
const Author:React.FC<authorProps> = (props) => {

    const[isDeleteConfMsgVisible, setIsDeleteConfMsgVisible] = useState(false)

    return(
        <Row>
            <Col xs={9}>
                <label>{props.num}. {props.authorName.name}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-center'>
                <img className='icon me-2' src={Edit} alt={'editIcon'}/>
                <div>
                <img className='icon me-2' src={Delete} alt={'deleteIcon'} onClick={() => setIsDeleteConfMsgVisible(true)}/>
                {isDeleteConfMsgVisible &&
                    <DeleteConfirmation
                        num={props.num}
                        type={'author'}
                        DeleteAuthor={props.DeleteAuthor}
                        setIsDeleteConfMsgVisible={setIsDeleteConfMsgVisible}
                        isDeleteConfMsgVisible={isDeleteConfMsgVisible}
                    />}
                </div>

            </Col>
        </Row>
    );
}
export default Author;