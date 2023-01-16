import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from './Components/FormPage';
import Formlist from './Components/Formlist';
import MainPage from './Components/MainPage';
import rootReducer from "./store/rootRaducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route  path='/FormPage' element={<FormPage />} />
            <Route path='/Fromlist' element={<Formlist />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
