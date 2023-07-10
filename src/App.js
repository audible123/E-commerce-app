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
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
