import React  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

import { AppProvider } from './context/AppContext';
import {
  BrowserRouter,
  Route,

  Routes,

} from "react-router-dom";

import SingleProduct from './pages/SingleProduct';
import { Home } from './pages/Home';


const App = () => {



  return (

    <AppProvider>

    <div className="iwaiter_container  " >
   <BrowserRouter>

   <Navbar />
          <Routes>
            
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route
                path="/:product"
                element={
                  <SingleProduct />
                }
              />
            
           
          </Routes>
          <Footer />
        </BrowserRouter>

</div>
    </AppProvider>
  )
}

export default App