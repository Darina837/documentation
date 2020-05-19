import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageUniversity.css';

export default function PageUniversity(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <h2 id='create-university'>Создать университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/university/create/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-university'>Удалить университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/university/delete/&#123;api&#125;'g</code>
                        </div>
                        <br/>
                        <h2 id='rename-university'>Переименовать университет</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/university/rename/&#123;api&#125;/&#123;full_name&#125;/&#123;short_name&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='get-informaion-university'>Получить информацию об университете</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/university/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}