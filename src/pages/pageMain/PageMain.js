import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import * as ReactBootstrap from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

import logo from '../../media/logo.png';

import './pageMain.css';

export default function PageMain(props) {
    return (
        <>
            <Header />
            <main>
                <div className='wrapper-main'>
                    <img src={logo} alt='' />
                    <h1>ScheduleNURE</h1>
                    <Link to='/guide/introduction'><ReactBootstrap.Button variant="success">Начать <span><BsArrowRight /></span></ReactBootstrap.Button></Link>
                </div>
            </main>
            <Footer/>
            
        </>
    );
}