import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Days from './components/events/Days';
import Day from './components/events/Day';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Days} />
    <Route path="/:date" component={Day} />
  </Route>
);
