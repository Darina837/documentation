import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import PageMain from './pages/pageMain/PageMain';
import PageGuide from './pages/pageGuide/PageGuide';
import PageUniversity from './pages/pageUniversity/PageUniversity';
import PageFaculty from './pages/pageFaculty/PageFaculty';
import PageDepartment from './pages/pageDepartment/PageDepartment';
import PageType from './pages/pageType/PageType';
import PageAudience from './pages/pageAudience/PageAudience';
import PageProfessor from './pages/pageProfessor/PageProfessor';
import PageTime from './pages/pageTime/PageTime';
import PageGroup from './pages/pageGroup/PageGroup';
import PageSubject from './pages/pageSubject/PageSubject';
import PageExercise from './pages/pageExercise/PageExercise';
import PageError from './pages/pageError/PageError';

const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={PageMain} exact />
        <Route path='/guide/introduction' component={PageGuide} exact />
        <Route path='/guide/university' component={PageUniversity} />
        <Route path='/guide/faculty' component={PageFaculty} />
        <Route path='/guide/department' component={PageDepartment} />
        <Route path='/guide/type' component={PageType} />
        <Route path='/guide/audience' component={PageAudience} />
        <Route path='/guide/professor' component={PageProfessor} />
        <Route path='/guide/time' component={PageTime} />
        <Route path='/guide/group' component={PageGroup} />
        <Route path='/guide/subject' component={PageSubject} />
        <Route path='/guide/exercise' component={PageExercise} />
        <Route path='/guide/error' component={PageError} />
      </Switch>
    </Router>
  );
}

export default App;
