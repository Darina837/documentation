import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageType.css';

export default function PageType(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='create-type'>Создать тип</h2>
                        <hr/>
                        <div className='code'>
                            <code>/type/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания типа:</h4>
                            <code>/type/create/new/Лабораторная работа/ЛБ</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;full_name&#125; - Лабораторная работа, <br/>&#123;short_name&#125; - ЛБ</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='delete-type'>Удалить тип</h2>
                        <hr/>
                        <div className='code'>
                            <code>/type/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления типа:</h4>
                            <code>/type/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-4'><code>Error #api4</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='rename-type'>Переименовать тип</h2>
                        <hr/>
                        <div className='code'>
                            <code>/type/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример переименования типа:</h4>
                            <code>/type/rename/new/1/Лекція/ЛК</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;id&#125; - 1, <br/>&#123;full_name&#125; - Лекція, <br/>&#123;short_name&#125; - ЛК</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-4'><code>Error #api4</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-types'>Получить все типы</h2>
                        <hr/>
                        <div className='code'>
                            <code>/types/&#123;api&#125;</code>
                        </div>    
                        <br/>
                        <div className='example'>
                            <h4>Пример получения всех типов:</h4>
                            <code>/types/new</code>
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