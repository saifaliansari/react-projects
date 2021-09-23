import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile'


function App() {
  const isAuth = useSelector(state => {
    return state.auth.isAuthenticated
  })
  return (
    <React.Fragment>
      <Header></Header>
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </React.Fragment>

  );
}

export default App;
