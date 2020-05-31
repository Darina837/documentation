import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageFaculty.css';

export default function PageFaculty(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-faculty'>Создать факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/faculty/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания факультета:</h4>
                            <code>/faculty/create/new/Факультет комп'ютерної інженерії та управління/КІУ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Факультет комп'ютерної інженерії та управління, <br/>&#123;short_name&#125; - КІУ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  



                        <h2 id='delete-faculty'>Удалить факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/faculty/delete/&#123;api&#125;/&#123;id_faculty&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления факультета:</h4>
                            <code>/faculty/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-2'><code>Error #api2</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 
                        


                        <h2 id='rename-faculty'>Переименовать факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/faculty/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования факультета:</h4>
                            <code>/faculty/rename/new/1/Факультет комп'ютерної інженерії та управління/ФКІУ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Факультет комп'ютерної інженерії та управління, <br/>&#123;short_name&#125; - ФКІУ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-2'><code>Error #api2</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  



                        <h2 id='get-all-faculties'>Получить все факультеты</h2>
                        <hr/>
                        <div className='code'>
                            <code>/faculties/&#123;api&#125;</code>
                        </div>
                        <br/>         
                        <div className='example'>
                            <h4>Пример получения всех факультетов:</h4>
                            <code>/faculties/new</code>
                            <p>Где &#123;api&#125; - new</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Массив JSON-объектов</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>            
                    </div>  
                </div> 
            </main>
        </>
    );
}