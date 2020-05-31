import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageAudience.css';

export default function PageAudience(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-audience'>Создать аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>/auditory/create/&#123;api&#125;/&#123;name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания аудитории:</h4>
                            <code>/auditory/create/new/32з</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;name&#125; - 32з</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='delete-audience'>Удалить аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>/auditory/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления аудитории:</h4>
                            <code>/auditory/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-5'><code>Error #api5</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='rename-audience'>Переименовать аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>/auditory/rename/&#123;api&#125;/&#123;id&#125;/&#123;name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования аудитории:</h4>
                            <code>/auditory/rename/new/1/Лекция/ЛК</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Лекція, <br/>&#123;short_name&#125; - ЛК</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-5'><code>Error #api5</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-audiences'>Получить все аудитории</h2>
                        <hr/>
                        <div className='code'>
                            <code>/auditories/&#123;api&#125;</code>
                        </div>
                        <br/>    
                        <div className='example'>
                            <h4>Пример получения всех аудиторий:</h4>
                            <code>/auditories/new</code>
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