import React from 'react'
import {Container, Navbar} from "react-bootstrap";

const Footer = () => {

    return (
        <Navbar bg="dark" className={"footer"}>
            <Container>
                <div className={"footer-text"}>
                    <p>© 2021 Pied Pipers - All right reserved</p>
                </div>
            </Container>
        </Navbar>
    )
}


export default Footer;