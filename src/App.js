import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetail';
import HomePage from './Pages/HomePage';
import Header from './Components/Header';
import Card from './Components/Card';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {
  
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/card' element={<Card />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
