import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageDepartment.css';

export default function PageDepartment(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-department'>Создать кафедру</h2>
                        <hr/>
                        <div className='code'>
                            <code>/department/create/&#123;api&#125;/&#123;faculty_id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания кафедры:</h4>
                            <code>/department/create/new/1/Кафедра філософії/Філ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Кафедра філософії, <br/>&#123;short_name&#125; - Філ</p>
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



                        <h2 id='delete-department'>Удалить кафедру</h2>
                        <hr/>
                        <div className='code'>
                            <code>/department/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления кафедры:</h4>
                            <code>/department/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-3'><code>Error #api3</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 



                        <h2 id='rename-department'>Переименовать кафедру</h2>
                        <hr/>
                        <div className='code'>
                            <code>/department/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования кафедры:</h4>
                            <code>/department/rename/new/1/Нова кафедра філософії/НКФ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Нова кафедра філософії, <br/>&#123;short_name&#125; - НКФ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-3'><code>Error #api3</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-departmentes'>Получить все кафедры</h2>
                        <hr/>
                        <div className='code'>
                            <code>/department/&#123;api&#125;</code>
                        </div>  
                        <br/>
                        <div className='example'>
                            <h4>Пример получения всех факультетов:</h4>
                            <code>/department/new</code>
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