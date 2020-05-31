import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageUniversity.css';

export default function PageUniversity(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'> 
                    <div>
                        
                        <h2 id='create-university'>Создать университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/university/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример создания университета:</h4>
                            <code>university/create/new/Харьковский Национальный Университет Электроники/ХНУРЭ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Харьковский Национальный Университет Электроники, <br/>&#123;short_name&#125; - ХНУРЭ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-0'><code>Error #api0</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  
                        


                        
                        <h2 id='delete-university'>Удалить университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/university/delete/&#123;api&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления университета:</h4>
                            <code>/university/delete/new</code>
                            <p>Где &#123;api&#125; - new</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-1'><code>Error #api1</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>      



                        <h2 id='rename-university'>Переименовать университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>/university/rename/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования университета:</h4>
                            <code>/university/rename/new/Харьковский Национальный Университет Радиоэлектроники/ХНУРЭ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Харьковский Национальный Университет Радиоэлектроники, <br/>&#123;short_name&#125; - ХНУРЭ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-1'><code>Error #api1</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  
                        



                        <h2 id='get-informaion-university'>Получить информацию об университете</h2>
                        <hr/>
                        <div className='code'>
                            <code>/university/&#123;api&#125;</code>
                        </div> 
                        <br/>
                        <div className='example'>
                            <h4>Пример получения информации об университете:</h4>
                            <code>university/new</code>
                            <p>Где &#123;api&#125; - new</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>JSON-объект</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-1'><code>Error #api1</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'>Error #api404</NavHashLink>
                            </div>
                        </div>                  
                    </div>  
                </div> 
            </main>
        </>
    );
}