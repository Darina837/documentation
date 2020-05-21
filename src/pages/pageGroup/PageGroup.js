import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageGroup.css';

export default function PageGroup(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-group'>Создать группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/group/create/&#123;api&#125;/&#123;name&#125;/&#123;faculty_id&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-group'>Удалить группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/group/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='rename-group'>Переименовать группу</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/group/rename/&#123;api&#125;/&#123;id&#125;/&#123;name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-all-groups'>Получить все группы</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/groups/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}