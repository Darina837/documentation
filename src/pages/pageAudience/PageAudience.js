import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageAudience.css';

export default function PageAudience(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-audience'>Создать аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/auditory/create/&#123;api&#125;/&#123;name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-audience'>Удалить аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/auditory/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-audience'>Переименовать аудиторию</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/auditory/rename/&#123;api&#125;/&#123;id&#125;/&#123;name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-audiences'>Получить все аудитории</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/auditories/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}