import React from 'react';
import {NavLink} from 'react-router-dom';

import './aside-navigation.css';

export default function AsideNavigation(props) {
    console.log(window.location);
    return (
        <aside>
            <ul>
                <li><NavLink to='/guide/introduction' activeClassName='active'>Введение</NavLink>
                    <ul>
                    <li><NavLink to={'/guide/introduction#annotation'}>Аннтонация</NavLink></li>
                        <li><NavLink to={'/guide/introduction#beginning'}>Начало</NavLink></li>
                        <li><NavLink to={'/guide/introduction#beginning-of-work'}>Начало работы</NavLink></li>
                        <li><NavLink to={'/guide/introduction#preparation'}>Подготовка</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/university' activeClassName='active'>Университет</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/university#create-university'}>Создать университет</NavLink></li>
                        <li><NavLink to={'/guide/university#delete-university'}>Удалить университет</NavLink></li>
                        <li><NavLink to={'/guide/university#rename-university'}>Переименовать университет</NavLink></li>
                        <li><NavLink to={'/guide/university#get-informaion-university'}>Получить информацию об университете</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/faculty' activeClassName='active'>Факультет</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/faculty#create-faculty'}>Создать факультет</NavLink></li>
                        <li><NavLink to={'/guide/faculty#delete-faculty'}>Удалить факультет</NavLink></li>
                        <li><NavLink to={'/guide/faculty#rename-faculty'}>Переименовать факультет</NavLink></li>
                        <li><NavLink to={'/guide/faculty#get-all-faculties'}>Получить все факультеты</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/department' activeClassName='active'>Департамент</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/department#create-department'}>Создать департамент</NavLink></li>
                        <li><NavLink to={'/guide/department#delete-department'}>Удалить департамент</NavLink></li>
                        <li><NavLink to={'/guide/department#rename-department'}>Переименовать департамент</NavLink></li>
                        <li><NavLink to={'/guide/department#get-all-departmentes'}>Получить все департаменты</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/type' activeClassName='active'>Типы</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/type#create-type'}>Создать тип</NavLink></li>
                        <li><NavLink to={'/guide/type#delete-type'}>Удалить тип</NavLink></li>
                        <li><NavLink to={'/guide/type#rename-type'}>Переименовать тип</NavLink></li>
                        <li><NavLink to={'/guide/type#get-all-types'}>Получить все типы</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/audience' activeClassName='active'>Аудитории</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/audience#create-audience'}>Создать аудиторию</NavLink></li>
                        <li><NavLink to={'/guide/audience#delete-audience'}>Удалить аудиторию</NavLink></li>
                        <li><NavLink to={'/guide/audience#rename-audience'}>Переименовать аудиторию</NavLink></li>
                        <li><NavLink to={'/guide/audience#get-all-audiences'}>Получить все аудитории</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/professor' activeClassName='active'>Преподаватели</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/professor#create-professor'}>Добавить преподавателя</NavLink></li>
                        <li><NavLink to={'/guide/professor#delete-professor'}>Удалить преподавателя</NavLink></li>
                        <li><NavLink to={'/guide/professor#rename-professor'}>Переименовать преподавателя</NavLink></li>
                        <li><NavLink to={'/guide/professor#get-all-professor'}>Получить всех преподавателей</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/time' activeClassName='active'>Время начала и окончания пар</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/time#create-time'}>Создать время</NavLink></li>
                        <li><NavLink to={'/guide/time#delete-time'}>Удалить время</NavLink></li>
                        <li><NavLink to={'/guide/time#get-time'}>Получить время</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/group' activeClassName='active'>Группы</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/group#create-group'}>Создать группу</NavLink></li>
                        <li><NavLink to={'/guide/group#delete-group'}>Удалить группу</NavLink></li>
                        <li><NavLink to={'/guide/group#rename-group'}>Переименовать группу</NavLink></li>
                        <li><NavLink to={'/guide/group#get-all-groups'}>Получить все группы</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/subject' activeClassName='active'>Предметы</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/subject#create-subject'}>Создать предмет</NavLink></li>
                        <li><NavLink to={'/guide/subject#delete-subject'}>Удалить предмет</NavLink></li>
                        <li><NavLink to={'/guide/subject#rename-subject'}>Переименовать предмет</NavLink></li>
                        <li><NavLink to={'/guide/subject#get-all-subjectes'}>Получить все предметы</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/exercise' activeClassName='active'>Расписание</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/exercise#create-exercise'}>Создать занятие</NavLink></li>
                        <li><NavLink to={'/guide/exercise#delete-exercise'}>Удалить занятие</NavLink></li>
                        <li><NavLink to={'/guide/exercise#get-all-exercises'}>Получить все занятия</NavLink></li>
                    </ul>
                </li>
                <hr/>
                <li><NavLink to='/guide/error' activeClassName='active'>Ошибки</NavLink>
                    <ul>
                        <li><NavLink to={'/guide/error#API404'}>API404</NavLink></li>
                        <li><NavLink to={'/guide/error#API0'}>API0</NavLink></li>
                        <li><NavLink to={'/guide/error#API1'}>API1</NavLink></li>
                        <li><NavLink to={'/guide/error#API2'}>API2</NavLink></li>
                        <li><NavLink to={'/guide/error#API3'}>API3</NavLink></li>
                        <li><NavLink to={'/guide/error#API4'}>API4</NavLink></li>
                        <li><NavLink to={'/guide/error#API5'}>API5</NavLink></li>
                        <li><NavLink to={'/guide/error#API6'}>API6</NavLink></li>
                        <li><NavLink to={'/guide/error#API7'}>API7</NavLink></li>
                        <li><NavLink to={'/guide/error#API8'}>API8</NavLink></li>
                        <li><NavLink to={'/guide/error#API9'}>API9</NavLink></li>
                        <li><NavLink to={'/guide/error#API10'}>API10</NavLink></li>
                    </ul>
                </li>
                <hr/>
                
            </ul>
            {/* {window.location.pathname='/guide/error' && window.location.hash === '#API404' ? document.getElementById('API404').style = 'background-color: red;' : null} */}
        </aside>
        
    );
}