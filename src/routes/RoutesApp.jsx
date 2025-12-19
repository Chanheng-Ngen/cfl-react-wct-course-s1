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
import NewsDetailPage from "../pages/NewsDetailPage.jsx";
import FixturesDetailPage from "../pages/FixtureDetailPage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
         <Route path="/fixtures/:id" element={<FixturesDetailPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </>
    </BrowserRouter>
  )
};
