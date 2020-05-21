import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageSubject.css';

export default function PageSubject(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-subject'>Создать предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/subject/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-subject'>Удалить предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/subject/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-subject'>Переименовать предмет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/subject/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-subjectes'>Получить все предметы</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/subjects/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}