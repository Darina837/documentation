import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import {NavHashLink} from 'react-router-hash-link';

import './pageExercise.css';

export default function PageExercise(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Формат даты <code>Y-m-d</code></p>
                        </div>
                        <br/>



                        <h2 id='create-exercise'>Создать занятие</h2>
                        <hr/>
                        <div className='code'>
                            <code>/class/create/&#123;api&#125;/&#123;subject_id&#125;/&#123;auditory_id&#125;/&#123;class_time_id&#125;/&#123;group_id&#125;/&#123;teacher_id&#125;/&#123;type_id&#125;/&#123;date&#125;</code>
                        </div> 
                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Здесь формат даты: <code>Y-m-d</code>, <code>d.m.Y</code></p>
                        </div>  
                        <br/>
                        <div className='example'>
                            <h4>Пример создания занятия:</h4>
                            <code>/class/create/new/1/2/3/4/5/6/19.05.2020</code>
                            <p>Где: <br/>&#123;api&#125; - new, <br/>&#123;subject_id&#125; - 1, <br/> &#123;auditory_id&#125; - 2, <br/>&#123;class_time_id&#125; - 3, <br/>&#123;group_id&#125; - 4, <br/>&#123;teacher_id&#125; - 5, <br/>&#123;type_id&#125; - 6, <br/>&#123;date&#125; - 19.05.2020</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-9'><code>Error #api9</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-5'><code>Error #api5</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-7'><code>Error #api7</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-8'><code>Error #api8</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-6'><code>Error #api6</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-4'><code>Error #api4</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>  



                        <h2 id='delete-exercise'>Удалить занятие</h2>
                        <hr/>
                        <div className='code'>
                            <code>/class/delete/&#123;api&#125;/&#123;id&#125;</code>
                        </div>
                        <br/>
                        <div className='example'>
                            <h4>Пример удаления занятия:</h4>
                            <code>/class/delete/new/1</code>
                            <p>Где: <br/>&#123;api&#125; - new,<br/> &#123;id&#125; - 1</p>
                            <hr />
                            <h4>Ответ сервера:</h4>
                            <code>Success</code>
                            <div className='attention'>
                                <h4>Возможные ответы сервера в случае ошибки:</h4>
                                <NavHashLink to='/guide/error#API-10'><code>Error #api10</code></NavHashLink>
                                <br/>
                                <NavHashLink to='/guide/error#API-404'><code>Error #api404</code></NavHashLink>
                            </div>
                        </div>



                        <h2 id='get-all-exercises'>Получить все занятия (все ID)</h2>
                        <hr/>
                        <div className='code'>
                            <code>/classes/&#123;api&#125;</code>
                        </div>    
                        <br/>   
                        <div className='example'>
                            <h4>Пример получения всех ID занятий:</h4>
                            <code>/classes/new</code>
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