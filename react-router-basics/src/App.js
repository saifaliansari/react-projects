import { Route, Switch,Redirect } from 'react-router-dom'
import Header from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Switch>
          <Route path='/' exact>
          <Redirect to='./welcome'></Redirect>
          </Route>
          <Route path='/welcome'>
            <Welcome></Welcome>
          </Route>
          <Route path='/products' exact>
            <Products></Products>
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
