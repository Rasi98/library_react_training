import React, {PropsWithChildren, useState} from "react";
import {Col, Row, Image} from "react-bootstrap";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash-2.svg";
import DeleteConfirmation from "../DeleteConfirmation";

type BookProps = {
    num: number
    bookName:string
    handleDeleteBook: (index:number) => void
    handleEditBook: () => void
    handleEditBookIndex: (index:number) => void
}
const Book: React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {
    const[isDeleteConfMsgVisible, setIsDeleteConfMsgVisible] = useState(false);
    const {num, bookName}=props;
    const onEditClick = (index:number) => {
        props.handleEditBook()
        props.handleEditBookIndex(index)
    }
    return(
        <Row>
            <Col xs={9}>
                <label className={'list-name'}>{num}. {bookName}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-center'>
                <Image className='icon me-3' src={edit} onClick={()=> onEditClick(num-1)}/>
                <Image className='icon me-3' src={trash} onClick={()=>setIsDeleteConfMsgVisible(true)}/>
                {isDeleteConfMsgVisible && (<DeleteConfirmation
                    num={props.num}
                    type={'book'}
                    isDeleteConfMsgVisible={isDeleteConfMsgVisible}
                    setIsDeleteConfMsgVisible={setIsDeleteConfMsgVisible}
                    handleDeleteBook={props.handleDeleteBook}/>)
                }
            </Col>
        </Row>
    )
}

export default Book;