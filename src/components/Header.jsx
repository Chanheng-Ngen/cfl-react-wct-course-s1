import { useState } from 'react';
import cfl_logo from '../assets/images/cfl_logo.jpg';
import { Link } from 'react-router';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const navItems = [
    { name: 'Homepage', href: '#homepage' },
    { name: 'News', href: '#news' },
    { name: 'Club', href: '#club' },
    { name: 'Matching', href: '#matching' },
    { name: 'Result', href: '#result' },
    { name: 'Video', href: '#video' },
    { name: 'Stats', href: '#stats' },
    { name: 'Standing', href: '#standing' },
    { name: 'About Us', href: '#about' }
  ];

  const languages = ['EN', 'KH'];

  return (
    <>
      {/* Mini Top Navigation */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-6">
            <p className='text-sm text-white font-semibold'>Cambodia Football League</p>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-80">🌐</span>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-transparent border border-white/30 rounded px-3 py-1 text-xs font-semibold hover:bg-white/10 transition cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/50"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang} className="bg-blue-700 text-white">
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="flex items-center gap-2 hover:text-blue-200 transition font-semibold">
                  
                  <Link to="/login"><span className="text-xs mr-1">👤</span> Sign In</Link>
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-blue-700 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={ cfl_logo } alt="CFL Logo" className="h-10 w-10"/>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="hover:text-blue-200 transition font-semibold text-[16px] relative nav-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition shadow-md">
                Buy Tickets
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-3 pb-4 border-t border-blue-500 pt-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block hover:text-blue-200 transition font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition w-full mt-2 shadow-md">
                Buy Tickets
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;
