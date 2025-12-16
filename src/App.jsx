import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import UserProfile from './pages/UserProfile.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import Fixtures from './pages/FixturesPage.jsx'
import News from './pages/NewsPage.jsx'
import Club from './pages/Club.jsx'
import ClubDetails from './pages/ClubDetails.jsx'
import LastStarting from './pages/LastStarting.jsx'
import CoachPlayers from './pages/CoachPlayers.jsx'
import LegendPlayers from './pages/LegendPlayers.jsx'
import TableDetails from './pages/TableDetails.jsx'
import StandingPage from './pages/StandingPage.jsx'
import StatOne from './pages/StatOne.jsx'
import StatTwo from './pages/StatTwo.jsx'
import StatThree from './pages/StatThree.jsx'
import AboutUs from './pages/AboutUs.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {

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
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/clubId" element={<ClubDetails />} />
          <Route path="/last-starting" element={<LastStarting />} />
          <Route path="/coach-players" element={<CoachPlayers />} />
          <Route path="/legend-players" element={<LegendPlayers />} />
          <Route path="/table-details" element={<TableDetails />} />
          <Route path="/standings" element={<StandingPage />} />
          <Route path="/stats-One" element={<StatOne />} />
          <Route path="/stats-Two" element={<StatTwo />} />
          <Route path="/stats-Three" element={<StatThree />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App;
