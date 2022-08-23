import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Navibar from "./components/Navibar"
import Newsletter from "./components/Newsletter"
import Home from "./pages/Home";
import Login from './pages/Login';
import NotFoundound from './pages/NotFound';
import Register from './pages/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/auth' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='*' element={ <NotFoundound /> } />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
