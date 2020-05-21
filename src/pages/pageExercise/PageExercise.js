import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

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
                            <code>'/class/create/&#123;api&#125;/&#123;subject_id&#125;/&#123;auditory_id&#125;/&#123;class_time_id&#125;/&#123;group_id&#125;/&#123;teacher_id&#125;/&#123;type_id&#125;/&#123;date&#125;'</code>
                        </div> 
                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Здесь формат даты: <code>Y-m-d</code>, <code>d.m.Y</code></p>
                        </div>  
                        <br/>
                        <h2 id='delete-exercise'>Удалить занятие</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/class/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='get-all-exercises'>Получить все занятия (все ID)</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/classes/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}