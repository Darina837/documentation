import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageTime.css';

export default function PageTime(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Формат времени <code>H:m:s</code></p>
                        </div>
                        <br/>
                        


                        <h2 id='create-time'>Создать время начала и окончания пары</h2>
                        <hr/>
                        <div className='code'>
                            <code>/time/create/&#123;api&#125;/&#123;time_start&#125;/&#123;time_end&#125;</code>
                        </div>   
                        <br/>
                        <div className='example'>
                            <h4>Пример создания времени начала и окончания пар:</h4>
                            <code>/time/create/new/07:45:00/09:20:00</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;time_start&#125; - 07:45:00, <br/>&#123;time_end&#125; - 09:20:00</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  



                        <h2 id='delete-time'>Удалить время начала и окончания пары</h2>
                        <hr/>
                        <div className='code'>
                            <code>/time/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления времени начала и окончания пары:</h4>
                            <code>/time/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-7'><code>Error #api7</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div> 
                        


                        <h2 id='get-time'>Получить время начала и окончания всех пар</h2>
                        <hr/>
                        <div className='code'>
                            <code>/time/&#123;api&#125;</code>
                        </div>  
                        <br/>  
                        <div className='example'>
                            <h4>Пример получения времени начала и окончания всех пар:</h4>
                            <code>/time/new</code>
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