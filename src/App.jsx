import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import UserProfile from './pages/UserProfile.jsx'
import {BrowserRouter, Routes, Route} from 'react-router'


function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user-profile" element={<UserProfile />} /> 
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
