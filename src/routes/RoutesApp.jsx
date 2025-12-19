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
import ClubDetails from '../pages/ClubDetails.jsx'
import LastStarting  from '../pages/LastStarting.jsx'
import CoachPlayers from '../pages/CoachPlayers.jsx'
import LegendPlayers from '../pages/LegendPlayers.jsx'
import TableDetails from '../pages/TableDetails.jsx'
import StatTwo from '../pages/StatTwo.jsx'
import StatThree from '../pages/StatThree.jsx'
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
          <Route path="/club-details" element={<ClubDetails />} />
          <Route path="/last-starting" element={<LastStarting  />} />
          <Route path="/coach-and-squad" element={<CoachPlayers />} />
          <Route path="/legend-players" element={<LegendPlayers />} />
          <Route path="/table-standings" element={<TableDetails />} />
          <Route path="/stat-two" element={<StatTwo />} />
          <Route path="/stat-three" element={<StatThree />} />
        </Routes>
      </>
    </BrowserRouter>
  )
};
