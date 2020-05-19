import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

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
                            <code>'/type/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-type'>Удалить тип</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/type/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-type'>Переименовать тип</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/type/rename/&#123;api&#125;/&#123;id&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-types'>Получить все типы</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/types/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}