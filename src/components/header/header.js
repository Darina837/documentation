import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { RiExternalLinkLine } from 'react-icons/ri';
import {NavHashLink as Link} from 'react-router-hash-link';

import './header.css';

export default function Header(props) {
    const array = [
        {text: 'Введение', url: '/guide/introduction'},
        {text: 'Аннтонация', url: '/guide/introduction#annotation'},
        {text: 'Начало', url: '/guide/introduction#beginning'},
        {text: 'Начало работы', url: '/guide/introduction#beginning-of-work'},
        {text: 'Подготовка', url: '/guide/introduction#preparation'},
        {text: 'Университет', url: '/guide/university'},
        {text: 'Создать университет', url: '/guide/university#create-university'},
        {text: 'Удалить университет', url: '/guide/university#delete-university'},
        {text: 'Переименовать университет', url: '/guide/university#rename-university'},
        {text: 'Получить информацию об университете', url: '/guide/university#get-informaion-university'},
        {text: 'Факультет', url: '/guide/faculty'},
        {text: 'Создать факультет', url: '/guide/faculty#create-faculty'},
        {text: 'Удалить факультет', url: '/guide/faculty#delete-faculty'},
        {text: 'Переименовать факультет', url: '/guide/faculty#rename-faculty'},
        {text: 'Получить все факультеты', url: '/guide/faculty#get-all-faculties'},
        {text: 'Кафедра', url: '/guide/department'},
        {text: 'Создать кафедру', url: '/guide/department#create-department'},
        {text: 'Удалить кафедру', url: '/guide/department#delete-department'},
        {text: 'Переименовать кафедру', url: '/guide/department#rename-department'},
        {text: 'Получить все кафедры', url: '/guide/department#get-all-departmentes'},
        {text: 'Типы', url: '/guide/type'},
        {text: 'Создать тип', url: '/guide/type#create-type'},
        {text: 'Удалить тип', url: '/guide/type#delete-type'},
        {text: 'Переименовать тип', url: '/guide/type#rename-type'},
        {text: 'Получить все типы', url: '/guide/type#get-all-types'},
        {text: 'Аудитории', url: '/guide/audience'},
        {text: 'Создать аудиторию', url: '/guide/audience#create-audience'},
        {text: 'Удалить аудиторию', url: '/guide/audience#delete-audience'},
        {text: 'Переименовать аудиторию', url: '/guide/audience#rename-audience'},
        {text: 'Получить все аудитории', url: '/guide/audience#get-all-audiences'},
        {text: 'Преподаватели', url: '/guide/professor'},
        {text: 'Добавить преподавателя', url: '/guide/professor#create-professor'},
        {text: 'Удалить преподавателя', url: '/guide/professor#delete-professor'},
        {text: 'Переименовать преподавателя', url: '/guide/professor#rename-professor'},
        {text: 'Получить всех преподавателей', url: '/guide/professor#get-all-professor'},
        {text: 'Время начала и окончания пар', url: '/guide/time'},
        {text: 'Создать время', url: '/guide/time#create-time'},
        {text: 'Удалить время', url: '/guide/time#delete-time'},
        {text: 'Получить время', url: '/guide/time#get-time'},
        {text: 'Группы', url: '/guide/group'},
        {text: 'Создать группу', url: '/guide/group#create-group'},
        {text: 'Удалить группу', url: '/guide/group#delete-group'},
        {text: 'Переименовать группу', url: '/guide/group#rename-group'},
        {text: 'Получить все группы', url: '/guide/group#get-all-groups'},
        {text: 'Предметы', url: '/guide/subject'},
        {text: 'Создать предмет', url: '/guide/subject#create-subject'},
        {text: 'Удалить предмет', url: '/guide/subject#delete-subject'},
        {text: 'Переименовать предмет', url: '/guide/subject#rename-subject'},
        {text: 'Получить все предметы', url: '/guide/subject#get-all-subjectes'},
        {text: 'Расписание', url: '/guide/exercise'},
        {text: 'Создать занятие', url: '/guide/exercise#create-exercise'},
        {text: 'Удалить занятие', url: '/guide/exercise#delete-exercise'},
        {text: 'Получить все занятия', url: '/guide/exercise#get-all-exercises'},
        {text: 'Ошибки', url: '/guide/error'},
        {text: 'API404', url: '/guide/error#API-404'},
        {text: 'API0', url: '/guide/error#API-0'},
        {text: 'API1', url: '/guide/error#API-1'},
        {text: 'API2', url: '/guide/error#API-2'},
        {text: 'API3', url: '/guide/error#API-3'},
        {text: 'API4', url: '/guide/error#API-4'},
        {text: 'API5', url: '/guide/error#API-5'},
        {text: 'API6', url: '/guide/error#API-6'},
        {text: 'API7', url: '/guide/error#API-7'},
        {text: 'API8', url: '/guide/error#API-8'},
        {text: 'API9', url: '/guide/error#API-9'},
        {text: 'API10', url: '/guide/error#API-10'}

    ]
    React.useEffect( () => {
        const selected = document.querySelector(".selected");
        const optionsContainer = document.querySelector(".options-container");
        const searchBox = document.querySelector(".search-box input");
    
        const optionsList = document.querySelectorAll(".option");
    
        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
    
            searchBox.value = "";
            filterList("");
    
            if (optionsContainer.classList.contains("active")) {
                searchBox.focus();
            }
        });
    
        optionsList.forEach(o => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
            });
        });
    
        searchBox.addEventListener("keyup", function(e) {
            filterList(e.target.value);
        });
    
        const filterList = searchTerm => {
            searchTerm = searchTerm.toLowerCase();
            optionsList.forEach(option => {
                let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
                if (label.indexOf(searchTerm) !== -1) {
                    option.style.display = "block";
                } else {
                    option.style.display = "none";
                }
            });
        };        
    } )

    return (
        <>
            <header>
                <ReactBootstrap.Navbar bg='dark' variant='dark' collapseOnSelect expand='lg' fixed='top' id='wrapper-header'> 

                    <ReactBootstrap.Navbar.Brand href='/'>ScheduleNURE Docs</ReactBootstrap.Navbar.Brand>

                    <ReactBootstrap.Nav className='mr-auto'>
                        <ReactBootstrap.Nav.Link href='http://schedule-nure.dxrk.cc/' target='_blank'>Main site <span><RiExternalLinkLine /></span></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>  

                    <ReactBootstrap.Form inline>
                        <div className="container">

                            <div className="select-box">
                                <div className="options-container">

                                    {array.map(item => (
                                        <Link to={item.url} className="option" key={item.text}>
                                            <input type="radio" className="radio" id={item.text} name="category" />
                                            <label htmlFor={item.text}>{item.text}</label>
                                        </Link>
                                    ))} 
                                </div>

                                <div className="selected">
                                Найти&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;       
                                </div>

                                <div className="search-box">
                                    <input type="text" placeholder="Начать поиск..." />
                                </div>
                            </div>
                        </div>
                    </ReactBootstrap.Form>
                </ReactBootstrap.Navbar>
            </header>
        </>
    );
}