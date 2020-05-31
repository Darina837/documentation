import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';

import './aside-navigation.css';

export default function AsideNavigation(props) {
    return (
        <aside>
            <ul>
                <li><NavLink to='/guide/introduction' activeClassName='active'>Введение</NavLink>
                    <ul>
                    <li><NavHashLink to='/guide/introduction#annotation' >Аннтонация</NavHashLink></li>
                        <li><NavHashLink to='/guide/introduction#beginning'>Начало</NavHashLink></li>
                        <li><NavHashLink to='/guide/introduction#beginning-of-work'>Начало работы</NavHashLink></li>
                        <li><NavHashLink to='/guide/introduction#preparation'>Подготовка</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/university' activeClassName='active'>Университет</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/university#create-university'>Создать университет</NavHashLink></li>
                        <li><NavHashLink to='/guide/university#delete-university'>Удалить университет</NavHashLink></li>
                        <li><NavHashLink to='/guide/university#rename-university'>Переименовать университет</NavHashLink></li>
                        <li><NavHashLink to='/guide/university#get-informaion-university'>Получить информацию об университете</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/faculty' activeClassName='active'>Факультет</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/faculty#create-faculty'>Создать факультет</NavHashLink></li>
                        <li><NavHashLink to='/guide/faculty#delete-faculty'>Удалить факультет</NavHashLink></li>
                        <li><NavHashLink to='/guide/faculty#rename-faculty'>Переименовать факультет</NavHashLink></li>
                        <li><NavHashLink to='/guide/faculty#get-all-faculties'>Получить все факультеты</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/department' activeClassName='active'>Кафедра</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/department#create-department'>Создать кафедру</NavHashLink></li>
                        <li><NavHashLink to='/guide/department#delete-department'>Удалить кафедру</NavHashLink></li>
                        <li><NavHashLink to='/guide/department#rename-department'>Переименовать кафедру</NavHashLink></li>
                        <li><NavHashLink to='/guide/department#get-all-departmentes'>Получить все кафедры</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/type' activeClassName='active'>Типы</NavLink>
                    <ul>
                        <li><NavHashLink to={'/guide/type#create-type'}>Создать тип</NavHashLink></li>
                        <li><NavHashLink to={'/guide/type#delete-type'}>Удалить тип</NavHashLink></li>
                        <li><NavHashLink to={'/guide/type#rename-type'}>Переименовать тип</NavHashLink></li>
                        <li><NavHashLink to={'/guide/type#get-all-types'}>Получить все типы</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/audience' activeClassName='active'>Аудитории</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/audience#create-audience'>Создать аудиторию</NavHashLink></li>
                        <li><NavHashLink to='/guide/audience#delete-audience'>Удалить аудиторию</NavHashLink></li>
                        <li><NavHashLink to='/guide/audience#rename-audience'>Переименовать аудиторию</NavHashLink></li>
                        <li><NavHashLink to='/guide/audience#get-all-audiences'>Получить все аудитории</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/professor' activeClassName='active'>Преподаватели</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/professor#create-professor'>Добавить преподавателя</NavHashLink></li>
                        <li><NavHashLink to='/guide/professor#delete-professor'>Удалить преподавателя</NavHashLink></li>
                        <li><NavHashLink to='/guide/professor#rename-professor'>Переименовать преподавателя</NavHashLink></li>
                        <li><NavHashLink to='/guide/professor#get-all-professor'>Получить всех преподавателей</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/time' activeClassName='active'>Время начала и окончания пар</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/time#create-time'>Создать время</NavHashLink></li>
                        <li><NavHashLink to='/guide/time#delete-time'>Удалить время</NavHashLink></li>
                        <li><NavHashLink to='/guide/time#get-time'>Получить время</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/group' activeClassName='active'>Группы</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/group#create-group'>Создать группу</NavHashLink></li>
                        <li><NavHashLink to='/guide/group#delete-group'>Удалить группу</NavHashLink></li>
                        <li><NavHashLink to='/guide/group#rename-group'>Переименовать группу</NavHashLink></li>
                        <li><NavHashLink to='/guide/group#get-all-groups'>Получить все группы</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/subject' activeClassName='active'>Предметы</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/subject#create-subject'>Создать предмет</NavHashLink></li>
                        <li><NavHashLink to='/guide/subject#delete-subject'>Удалить предмет</NavHashLink></li>
                        <li><NavHashLink to='/guide/subject#rename-subject'>Переименовать предмет</NavHashLink></li>
                        <li><NavHashLink to='/guide/subject#get-all-subjectes'>Получить все предметы</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/exercise' activeClassName='active'>Расписание</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/exercise#create-exercise'>Создать занятие</NavHashLink></li>
                        <li><NavHashLink to='/guide/exercise#delete-exercise'>Удалить занятие</NavHashLink></li>
                        <li><NavHashLink to='/guide/exercise#get-all-exercises'>Получить все занятия</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/error' activeClassName='active'>Ошибки</NavLink>
                    <ul>
                        <li><NavHashLink to='/guide/error#API-404'>API404</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-0'>API0</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-1'>API1</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-2'>API2</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-3'>API3</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-4'>API4</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-5'>API5</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-6'>API6</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-7'>API7</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-8'>API8</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-9'>API9</NavHashLink></li>
                        <li><NavHashLink to='/guide/error#API-10'>API10</NavHashLink></li>
                    </ul>
                </li>
                <hr/>
                
            </ul>
            {/* {window.location.pathname='/guide/error' && window.location.hash === '#API404' ? document.getElementById('API404').style = 'background-color: red;' : null} */}
        </aside>
        
    );
}