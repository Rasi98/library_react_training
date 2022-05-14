import React,{useState} from "react";
import {Col, Row,Image} from "react-bootstrap";
import Edit from '../assets/icons/edit.svg'
import Delete from '../assets/icons/trash-2.svg'
import {IAuthor} from "../views/author";
import DeleteConfirmation from "./DeleteConfirmation";

type AuthorProps= {
    num: number;
    authorName: IAuthor;
    deleteAuthor:(index:number)=> void
    openIsEditFormVisible: () => void
    handleEditAuthorIndex: (index:number) => void
}
const Author: React.FC<AuthorProps>= (props) => {
    const[isDeleteConfMsgVisible, setIsDeleteConfMsgVisible] = useState(false);

    const onEditClick= (idx:number) => {
        props.openIsEditFormVisible();
        props.handleEditAuthorIndex(idx);
    }

    return(
        <Row>
            <Col xs={9}>
                <label className={'list-name'}>{props.num+1}. {props.authorName.name}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-center'>
                <Image className='icon me-3' src={Edit} alt={'editIcon'}
                onClick={() => onEditClick(props.num)}/>
                <Image className='icon me-3' src={Delete} alt={'deleteIcon'}
                     onClick={() => setIsDeleteConfMsgVisible(true)}/>
                {isDeleteConfMsgVisible &&
                    <DeleteConfirmation
                        num={props.num}
                        type={'author'}
                        DeleteAuthor={props.deleteAuthor}
                        setIsDeleteConfMsgVisible={setIsDeleteConfMsgVisible}
                        isDeleteConfMsgVisible={isDeleteConfMsgVisible}
                    />}
            </Col>
        </Row>
    );
}
export default Author;