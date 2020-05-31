import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageGroup.css';

export default function PageGroup(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-group'>Создать группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>/group/create/&#123;api&#125;/&#123;name&#125;/&#123;faculty_id&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания группы:</h4>
                            <code>/group/create/new/КИУКИ-17-1/1</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;name&#125; - КИУКИ-17-1, <br/>&#123;faculty_id&#125; - 1</p>
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



                        <h2 id='delete-group'>Удалить группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>/group/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления группы:</h4>
                            <code>/group/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-8'><code>Error #api8</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 



                        <h2 id='rename-group'>Переименовать группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>/group/rename/&#123;api&#125;/&#123;id&#125;/&#123;name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования группы:</h4>
                            <code>/group/rename/new/1/КИУКИ-17-3</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;name&#125; - КИУКИ-17-3</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-8'><code>Error #api8</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-groups'>Получить все группы</h2>
                        <hr/>
                        <div className='code'>
                            <code>/groups/&#123;api&#125;</code>
                        </div>    
                        <br/>
                        <div className='example'>
                            <h4>Пример получения всех групп:</h4>
                            <code>/groups/new</code>
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