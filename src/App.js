import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import TestPage from './pages/TestPage';

import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const user = useSelector(state => state.user)
  console.log('user: ' + user + ' isLoggedIn: ' + isLoggedIn)
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          isLoggedIn 
          ? <Profile/> 
          : <Navigate to='/signin'/>
        } />
        <Route path="signin" element={
          !isLoggedIn 
          ? <SignIn/> 
          : <Navigate to='/'/>
        } />
        <Route path="testpage" element={
          <TestPage/> 
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
 