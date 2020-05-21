import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageTime.css';

export default function PageTime(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>
                        <div className='attention'>
                            <h4>Внимание</h4>
                            <p>Формат времени <code>H:m:s</code></p>
                        </div>
                        <br/>
                        <h2 id='create-time'>Создать время начала и окончания пары</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/time/create/&#123;api&#125;/&#123;time_start&#125;/&#123;time_end&#125;'</code>
                        </div>   
                        <br/>
                        <h2 id='delete-time'>Удалить время начала и окончания пары</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/time/delete/&#123;api&#125;/&#123;id&#125;'</code>
                        </div>
                        <br/>
                        <h2 id='get-time'>Получить время начала и окончания всех пар</h2>
                        <hr/>
                        <div className='code'>
                            <code>'/time/&#123;api&#125;'</code>
                        </div>                   
                    </div>  
                </div> 
            </main>
        </>
    );
}