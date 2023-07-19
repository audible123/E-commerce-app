import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utils/store';

import Home from './components/Home';
import Header from './components/Header';
import SignupPage from './components/Signup';
import Login from './components/Login';
import Body from './components/Body';
import {Cart} from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:id' element={<Product/>}/>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
