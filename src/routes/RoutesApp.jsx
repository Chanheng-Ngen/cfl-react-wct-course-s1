import Landing from '../pages/Landing.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import ForgetPassword from '../pages/ForgetPassword.jsx'
import UserProfile from '../pages/UserProfile.jsx'
import AdminDashboard from '../pages/admin/AdminDashboard.jsx'
import Fixtures from '../pages/FixturesPage.jsx'
import News from '../pages/NewsPage.jsx'
import Results from'../pages/ResultsPage.jsx'
import Videos from '../pages/VideosPage.jsx'
import Club from '../pages/Club.jsx'
import StatOne from '../pages/StatOne.jsx'
import StandingPage from '../pages/StandingPage.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'


export function RoutesApp() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user-profile" element={<UserProfile />} /> 
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/club" element={<Club />} />
          <Route path="/stat-one" element={<StatOne />} />
          <Route path="/standing" element={<StandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </>
    </BrowserRouter>
  )
};
