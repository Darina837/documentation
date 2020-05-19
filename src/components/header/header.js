import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { RiExternalLinkLine } from 'react-icons/ri';

export default function Header(props) {
    return (
        <>
            <header>
                <ReactBootstrap.Navbar bg='dark' variant='dark' collapseOnSelect expand='lg' fixed='top' id='wrapper-header'>

                    {/* <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />  */}

                    <ReactBootstrap.Navbar.Brand href='/'>ScheduleNURE Docs</ReactBootstrap.Navbar.Brand>

                    <ReactBootstrap.Nav className='mr-auto'>
                        <ReactBootstrap.Nav.Link href='/our-site'>Main site <span><RiExternalLinkLine /></span></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>  

                    <ReactBootstrap.Form inline>
                        <ReactBootstrap.FormControl type='text' placeholder='Search' className='mr-sm-2' id='search' />
                        <ReactBootstrap.Button variant='outline-info'>Search</ReactBootstrap.Button>
                    </ReactBootstrap.Form>
                </ReactBootstrap.Navbar>
            </header>
        </>
    );
}