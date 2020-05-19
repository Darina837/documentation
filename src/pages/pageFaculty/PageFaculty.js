import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageFaculty.css';

export default function PageFaculty(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-faculty'>Создать факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/faculty/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-faculty'>Удалить факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/faculty/delete/&#123;api&#125;/&#123;id_faculty&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-faculty'>Переименовать факультет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/faculty/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-faculties'>Получить все факультеты</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/faculties/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}