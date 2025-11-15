import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import UserProfile from './pages/UserProfile.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Fixtures from './pages/FixturesPage.jsx'
import News from './pages/NewsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'


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
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App;
