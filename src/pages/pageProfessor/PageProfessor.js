import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageProfessor.css';

export default function PageProfessor(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-professor'>Добавить преподавателя</h2>
                        <hr/>
                        <div className='code'>
                            <code>/teacher/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;/&#123;department_id&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример добавления преподавателя:</h4>
                            <code>/teacher/create/new/Иванов Иван Иванович/Иванов И. И./1</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Иванов Иван Иванович, <br/>&#123;short_name&#125; - Иванов И. И., <br/>&#123;department_id&#125; - 1</p>
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



                        <h2 id='delete-professor'>Удалить преподавателя</h2>
                        <hr/>
                        <div className='code'>
                            <code>/teacher/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления преподавателя:</h4>
                            <code>/teacher/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-6'><code>Error #api6</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='rename-professor'>Переименовать преподавателя</h2>
                        <hr/>
                        <div className='code'>
                            <code>/teacher/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования преподавателя:</h4>
                            <code>/teacher/rename/new/1/Петров Иван Иванович/Петров И. И.</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Петров Иван Иванович, <br/>&#123;short_name&#125; - Петров И. И.</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-6'><code>Error #api6</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-professor'>Получить всех преподавателей</h2>
                        <hr/>
                        <div className='code'>
                            <code>/teachers/&#123;api&#125;</code>
                        </div>   
                        <br/>   
                        <div className='example'>
                            <h4>Пример получения всех преподавателей:</h4>
                            <code>/teachers/new</code>
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