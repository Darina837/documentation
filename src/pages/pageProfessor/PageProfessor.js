import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

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
                            <code>'/teacher/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;/&#123;department_id&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-professor'>Удалить преподавателя</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/teacher/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-professor'>Переименовать преподавателя</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/teacher/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-professor'>Получить всех преподавателей</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/teachers/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}