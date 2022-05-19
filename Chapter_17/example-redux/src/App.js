import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <Router>
      <div className={'container'}>
        <HeaderComponent />
        <Routes>
          <Route path={'/'} element={<ProductComponent />}></Route>
          {/*<Route path={'/carts'} exact component={}></Route>*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
