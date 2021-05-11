import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-bar-container" bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Hephaestus</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/posts">Home </Nav.Link>
                    <Nav.Link href="/posts/{id}"> Create Post</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}

export default Navigation;