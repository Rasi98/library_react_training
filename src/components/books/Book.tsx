import React, {PropsWithChildren, useState} from "react";
import {Col, Row, Image} from "react-bootstrap";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash-2.svg";
import DeleteConfirmation from "../DeleteConfirmation";


type BookProps = {
    num: number
    bookName:string
    handleDeleteBook: (index:number) => void
}

const Book: React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {

    const[isDeleteConfMsgVisible, setIsDeleteConfMsgVisible] = useState(false)

    const {num, bookName}=props;

    return(
        <Row>
            <Col xs={9}>
                <label className={'list-name'}>{num}. {bookName}</label>
            </Col>
            <Col xs={3} className='d-flex justify-content-end align-items-center'>
                <Image className='icon me-3' src={edit}/>
                <Image className='icon me-3' src={trash} onClick={()=>setIsDeleteConfMsgVisible(true)}/>
                {isDeleteConfMsgVisible && <DeleteConfirmation
                    num={props.num}
                    type={'book'}
                    isDeleteConfMsgVisible={isDeleteConfMsgVisible}
                    setIsDeleteConfMsgVisible={setIsDeleteConfMsgVisible}
                    handleDeleteBook={props.handleDeleteBook}/>
                }
            </Col>
        </Row>
    )
}

export default Book;