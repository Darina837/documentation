import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './aside-navigation.css';

export default function AsideNavigation(props) {
    return (
        <aside>
            <ul>
                <li><Link to='/guide'>Введение</Link>
                    <ul>
                    <li><Link to={'/guide#annotation'}>Аннтонация</Link></li>
                        <li><Link to={'/guide#beginning'}>Начало</Link></li>
                        <li><Link to={'/guide#beginning-of-work'}>Начало работы</Link></li>
                        <li><Link to={'/guide#preparation'}>Подготовка</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/university'>Университет</Link>
                    <ul>
                        <li><Link to={'/guide/university#create-university'}>Создать университет</Link></li>
                        <li><Link to={'/guide/university#delete-university'}>Удалить университет</Link></li>
                        <li><Link to={'/guide/university#rename-university'}>Переименовать университет</Link></li>
                        <li><Link to={'/guide/university#get-informaion-university'}>Получить информацию об университете</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/faculty'>Факультет</Link>
                    <ul>
                        <li><Link to={'/guide/faculty#create-faculty'}>Создать факультет</Link></li>
                        <li><Link to={'/guide/faculty#delete-faculty'}>Удалить факультет</Link></li>
                        <li><Link to={'/guide/faculty#rename-faculty'}>Переименовать факультет</Link></li>
                        <li><Link to={'/guide/faculty#get-all-faculties'}>Получить все факультеты</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/department'>Департамент</Link>
                    <ul>
                        <li><Link to={'/guide/department#create-department'}>Создать департамент</Link></li>
                        <li><Link to={'/guide/department#delete-department'}>Удалить департамент</Link></li>
                        <li><Link to={'/guide/department#rename-department'}>Переименовать департамент</Link></li>
                        <li><Link to={'/guide/department#get-all-departmentes'}>Получить все департаменты</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/type'>Типы</Link>
                    <ul>
                        <li><Link to={'/guide/type#create-type'}>Создать тип</Link></li>
                        <li><Link to={'/guide/type#delete-type'}>Удалить тип</Link></li>
                        <li><Link to={'/guide/type#rename-type'}>Переименовать тип</Link></li>
                        <li><Link to={'/guide/type#get-all-types'}>Получить все типы</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/audience'>Аудитории</Link>
                    <ul>
                        <li><Link to={'/guide/audience#create-audience'}>Создать аудиторию</Link></li>
                        <li><Link to={'/guide/audience#delete-audience'}>Удалить аудиторию</Link></li>
                        <li><Link to={'/guide/audience#rename-audience'}>Переименовать аудиторию</Link></li>
                        <li><Link to={'/guide/audience#get-all-audiences'}>Получить все аудитории</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/professor'>Преподаватели</Link>
                    <ul>
                        <li><Link to={'/guide/professor#create-professor'}>Создать преподавателя</Link></li>
                        <li><Link to={'/guide/professor#delete-professor'}>Удалить преподавателя</Link></li>
                        <li><Link to={'/guide/professor#rename-professor'}>Переименовать преподавателя</Link></li>
                        <li><Link to={'/guide/professor#get-all-professor'}>Получить всех преподавателей</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/time'>Время начала и окончания пар</Link>
                    <ul>
                        <li><Link to={'/guide/time#create-time'}>Создать время</Link></li>
                        <li><Link to={'/guide/time#delete-time'}>Удалить время</Link></li>
                        <li><Link to={'/guide/time#get-time'}>Получить время</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/group'>Группы</Link>
                    <ul>
                        <li><Link to={'/guide/group#create-group'}>Создать группу</Link></li>
                        <li><Link to={'/guide/group#delete-group'}>Удалить группу</Link></li>
                        <li><Link to={'/guide/group#rename-group'}>Переименовать группу</Link></li>
                        <li><Link to={'/guide/group#get-all-groups'}>Получить все группы</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/subject'>Предметы</Link>
                    <ul>
                        <li><Link to={'/guide/subject#create-subject'}>Создать предмет</Link></li>
                        <li><Link to={'/guide/subject#delete-subject'}>Удалить предмет</Link></li>
                        <li><Link to={'/guide/subject#rename-subject'}>Переименовать предмет</Link></li>
                        <li><Link to={'/guide/subject#get-all-subjectes'}>Получить все предметы</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/exercise'>Расписание</Link>
                    <ul>
                        <li><Link to={'/guide/exercise#create-exercise'}>Создать занятие</Link></li>
                        <li><Link to={'/guide/exercise#delete-exercise'}>Удалить занятие</Link></li>
                        <li><Link to={'/guide/exercise#get-all-exercises'}>Получить все занятия</Link></li>
                    </ul>
                </li>
                <hr/>
                <li><Link to='/guide/error'>Ошибки</Link>
                    <ul>
                        <li><Link to={'/guide/error#API404'}>API404</Link></li>
                        <li><Link to={'/guide/error#API0'}>API0</Link></li>
                        <li><Link to={'/guide/error#API1'}>API1</Link></li>
                        <li><Link to={'/guide/error#API2'}>API2</Link></li>
                        <li><Link to={'/guide/error#API3'}>API3</Link></li>
                        <li><Link to={'/guide/error#API4'}>API4</Link></li>
                        <li><Link to={'/guide/error#API5'}>API5</Link></li>
                        <li><Link to={'/guide/error#API6'}>API6</Link></li>
                        <li><Link to={'/guide/error#API7'}>API7</Link></li>
                        <li><Link to={'/guide/error#API8'}>API8</Link></li>
                        <li><Link to={'/guide/error#API9'}>API9</Link></li>
                        <li><Link to={'/guide/error#API10'}>API10</Link></li>
                    </ul>
                </li>
                <hr/>
                
            </ul>
        </aside>
    );
}