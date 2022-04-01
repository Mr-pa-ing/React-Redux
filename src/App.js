import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import CoffeeContainer from './components/CoffeeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div>
        <Provider store={store}>
            <ItemContainer cake />
            <ItemContainer />
            <CakeContainer />
            <HooksCakeContainer />
            <CoffeeContainer />
            <NewCakeContainer />
            <UserContainer />
        </Provider>
    </div>
  )
}

export default App;