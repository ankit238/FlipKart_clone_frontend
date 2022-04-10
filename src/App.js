import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <div>
      <TemplateProvider>
        <ContextProvider>
          <BrowserRouter>
       
        <Header />
         <Routes>
          <Route exact path='/' element={<Home />} /> 
                    <Route path='/cart' element={<Cart />} /> 

          </Routes>
      </BrowserRouter>
        </ContextProvider>
      </TemplateProvider>
      
    </div>
  );
}

export default App;
