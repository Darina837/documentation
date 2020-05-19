import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageGuide.css';

export default function PageGuide(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='annotation'>Аннотация</h2>
                        <hr/>
                        <div className='warning'>
                            <p>Cоздание аналога сайта расписания ХНУРЭ, что позволяет другим сервисам иметь доступ к данным расписания в те моменты, когда http://cist.nure.ua по разным причинам недоступен.</p>
                        </div>   
                        <br/>
                        <h2 id='beginning'>Начало</h2>
                        <hr/>
                        <p>ScheduleNURE - аналог сайта расписания занятий университета ХНУРЭ для студентов, аспирантов и преподавателей.</p>   
                        <br/>
                        <h2 id='beginning-of-work'>Начало работы</h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Один ключ API имеет возможность создать лишь один университет</p>
                        </div>
                        <br/>
                        <h2 id='preparation'>Подготовка</h2>
                        <hr/>
                        <p>Для детальной информации по приложению советуем ознакомиться с документацией.</p>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}