import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageDepartment.css';

export default function PageDepartment(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-department'>Создать департамент</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/department/create/&#123;api&#125;/&#123;faculty_id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-department'>Удалить департамент</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/department/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-department'>Переименовать департамент</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/department/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-departmentes'>Получить все департаменты</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/department/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}