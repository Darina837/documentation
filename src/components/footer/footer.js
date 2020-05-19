import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './footer.css';

export default function Footer(props) {
    return (
        <>
            <footer>
                <ReactBootstrap.Navbar bg='dark' variant='dark' collapseOnSelect expand='lg' fixed='bottom'>
                    <div>
                        <ReactBootstrap.Navbar>Copyright © 2020 ScheduleNURE</ReactBootstrap.Navbar>
                    </div>
                </ReactBootstrap.Navbar>
            </footer>
        </>
    );
}