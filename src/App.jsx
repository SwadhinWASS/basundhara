import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Home2 from './pages/Home2/Home2';


// const isAuthenticated = () => {
//   return !!localStorage.getItem('token');
// };

// const PrivateRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/login" />;
// };


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home2' element={<Home2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
