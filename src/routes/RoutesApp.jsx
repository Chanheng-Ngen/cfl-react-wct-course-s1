import Landing from '../pages/Landing.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import ForgetPassword from '../pages/ForgetPassword.jsx'
import UserProfile from '../pages/UserProfile.jsx'
import AdminDashboard from '../pages/admin/AdminDashboard.jsx'
import Fixtures from '../pages/FixturesPage.jsx'
import NewsDetailPage from '../pages/NewsDetailPage.jsx'
import News from '../pages/NewsPage.jsx'
import Results from'../pages/ResultsPage.jsx'
import ResultDetailPage from "../pages/ResultDetailPage";
import Videos from '../pages/VideosPage.jsx'
import Club from '../pages/Club.jsx'
import StandingPage from '../pages/StandingPage.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import ClubDetails from '../pages/ClubDetails.jsx'
import LastStarting  from '../pages/LastStarting.jsx'
import CoachPlayers from '../pages/CoachPlayers.jsx'
import LegendPlayers from '../pages/LegendPlayers.jsx'
import TableDetails from '../pages/TableDetails.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import TitleHandler from '../components/TitleHandler'
import PlayerStats from '../pages/PlayerStats.jsx'


export function RoutesApp() {
  return (
    <BrowserRouter>
      <TitleHandler>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user-profile" element={<UserProfile />} /> 
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/fixtures/:id" element={<ResultDetailPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />        
          <Route path="/videos" element={<Videos />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:id" element={<ResultDetailPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/players-stats" element={<PlayerStats />} />
          <Route path="/standing" element={<StandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/club" element={<Club />} />
          <Route path="/club/:id" element={<ClubDetails />} />
          <Route path="/club/:id/last-starting" element={<LastStarting  />} />
          <Route path="/club/:id/current" element={<CoachPlayers />} />
          <Route path="/club/:id/legend-players" element={<LegendPlayers />} />
          <Route path="/table-standings" element={<TableDetails />} />
        </Routes>
      </TitleHandler>
    </BrowserRouter>
  )
};
