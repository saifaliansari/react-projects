import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => {
  return import('./pages/NewQuote');
});

const QuoteDetail = React.lazy(()=>{
  return import('./pages/QuoteDetail');
})

const Notfound = React.lazy(()=>{
  return import('./pages/Notfound');
});

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner></LoadingSpinner></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes></AllQuotes>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail ></QuoteDetail>
          </Route>
          <Route path='/new-quote'>
            <NewQuote></NewQuote>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
