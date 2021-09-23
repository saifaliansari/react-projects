import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions'

let isInital = true;


function App() {
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInital) {
      isInital = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  const cartIsVisisble = useSelector(state => {
    return state.ui.cartIsVisible
  })
  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
      <Layout>
        {cartIsVisisble && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>

  );
}

export default App;
