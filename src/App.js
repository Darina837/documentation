import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import PageMain from './pages/pageMain/PageMain';
import PageGuide from './pages/pageGuide/PageGuide';
import PageUniversity from './pages/pageUniversity/PageUniversity';
import PageFaculty from './pages/pageFaculty/PageFaculty';
import PageDepartment from './pages/pageDepartment/PageDepartment';
import PageType from './pages/pageType/PageType';

const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={PageMain} exact />
        <Route path='/guide/' component={PageGuide} exact />
        <Route path='/guide/university' component={PageUniversity} />
        <Route path='/guide/faculty' component={PageFaculty} />
        <Route path='/guide/department' component={PageDepartment} />
        <Route path='/guide/type' component={PageType} />
      </Switch>
    </Router>
  );
}

export default App;
