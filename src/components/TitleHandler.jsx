import { useEffect } from 'react'
import { useLocation } from 'react-router'

const titleMap = {
  '/': 'Home',
  '/login': 'Login',
  '/register': 'Register',
  '/forget-password': 'Forget Password',
  '/user-profile': 'Profile',
  '/fixtures': 'Fixtures',
  '/news': 'News',
  '/videos': 'Videos',
  '/results': 'Results',
  '/admin-dashboard': 'Admin Dashboard',
  '/club': 'Club',
  '/standing': 'Standings',
  '/about-us': 'About Us',
}

export default function TitleHandler({ children }) {
  const location = useLocation()
  
  useEffect(() => {
    const title = titleMap[location.pathname]
    document.title = title ? `${title} | CFL–WCT` : "CFL–WCT"
  }, [location])
  
  return children
}