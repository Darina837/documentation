import React from 'react';
import Header from '../../components/header/header';
import AsideNavigation from '../../components/aside-navigation/aside-navigation';

import './pageError.css';

export default function PageError(props) {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <AsideNavigation />  
                <div className='content'>
                    <div>

                        <h2 id='API-404'>Ошибка <code>API404</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API404</code></h4>
                            <p>API-ключ не найден</p>
                        </div>  
                        <br/> 



                        <h2 id='API-0'>Ошибка <code>API0</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API0</code></h4>
                            <p>API-ключ уже имеет университет</p>
                        </div>  
                        <br/>   



                        <h2 id='API-1'>Ошибка <code>API1</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API1</code></h4>
                            <p>API-ключ не имеет университетов</p>
                        </div>  
                        <br/>  



                        <h2 id='API-2'>Ошибка <code>API2</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API2</code></h4>
                            <p>Несуществующий факультет</p>
                        </div>  
                        <br/>    



                        <h2 id='API-3'>Ошибка <code>API3</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API3</code></h4>
                            <p>Несуществующая кафедра</p>
                        </div>  
                        <br/> 



                        <h2 id='API-4'>Ошибка <code>API4</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API4</code></h4>
                            <p>Несуществующий тип</p>
                        </div>  
                        <br/>  



                        <h2 id='API-5'>Ошибка <code>API5</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API5</code></h4>
                            <p>Несуществующая аудитория</p>
                        </div>  
                        <br/>    



                        <h2 id='API-6'>Ошибка <code>API6</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API6</code></h4>
                            <p>Несуществующий преподаватель</p>
                        </div>  
                        <br/>   



                        <h2 id='API-7'>Ошибка <code>API7</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API7</code></h4>
                            <p>Несуществующее время</p>
                        </div>  
                        <br/>    



                        <h2 id='API-8'>Ошибка <code>API8</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API8</code></h4>
                            <p>Несуществующая группа</p>
                        </div>  
                        <br/>     



                        <h2 id='API-9'>Ошибка <code>API9</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API9</code></h4>
                            <p>Несуществующий предмет</p>
                        </div>  
                        <br/>   



                        <h2 id='API-10'>Ошибка <code>API10</code></h2>
                        <hr/>
                        <div className='attention'>
                            <h4>Ошибка <code>API10</code></h4>
                            <p>Несуществующее занятие</p>
                        </div>  
                        <br/>     
                    </div>  
                </div> 
            </main>
        </>
    );
}