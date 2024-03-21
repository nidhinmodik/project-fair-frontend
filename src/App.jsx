import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
