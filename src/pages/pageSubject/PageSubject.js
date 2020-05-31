import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageSubject.css';

export default function PageSubject(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-subject'>Создать предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/subject/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания предмета:</h4>
                            <code>/subject/create/new/Объектно-ориентированное программирование/ООП</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Объектно-ориентированное программирование, <br/>&#123;short_name&#125; - ООП</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 



                        <h2 id='delete-subject'>Удалить предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/subject/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления предмета:</h4>
                            <code>/subject/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-9'><code>Error #api9</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 



                        <h2 id='rename-subject'>Переименовать предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/subject/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования факультета:</h4>
                            <code>/subject/rename/new/1/Программирование/Пр</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Программирование, <br/>&#123;short_name&#125; - Пр</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-9'><code>Error #api9</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  



                        <h2 id='get-all-subjectes'>Получить все предметы</h2>
                        <hr/>
                        <div className='code'>
                            <code>/subjects/&#123;api&#125;</code>
                        </div>  
                        <br/>    
                        <div className='example'>
                            <h4>Пример получения всех предметов:</h4>
                            <code>/subjects/new</code>
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