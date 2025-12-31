import { useState } from 'react';
import cfl_logo from '../assets/images/CFL-title-icon.png';
import facebookIcon from '../assets/images/icons/facebook.png';
import instagramIcon from '../assets/images/icons/instagram.png';
import youtubeIcon from '../assets/images/icons/youtube.png';
import tiktokIcon from '../assets/images/icons/tiktok.png';

import './Footer.css';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const quickLinks = [
    { name: 'Homepage', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Club', href: '/club' },
    { name: 'Matching', href: '/fixtures' },
    { name: 'Result', href: '/results' },
  ];

  const moreLinks = [
    { name: 'Video', href: '/videos' },
    { name: 'Stats', href: '/players-stats' },
    { name: 'Standing', href: '/standing' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: facebookIcon, href: '#' },
    { name: 'YouTube', icon: youtubeIcon, href: '#' },
    { name: 'TikTok', icon: tiktokIcon, href: '#' },
    { name: 'Instagram', icon: instagramIcon, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={cfl_logo} alt="CFL Logo" className="h-12 w-12 object-contain"/>
              <div>
                <h3 className="text-xl font-bold text-blue-600">Cambodia</h3>
                <p className="text-sm text-gray-400">Football League</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              The premier football league in Cambodia, bringing the best teams and players together for exciting matches and unforgettable moments.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span className="text-gray-400">Phnom Penh, Cambodia</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span className="text-gray-400">contact@cfl.com.kh</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span className="text-gray-400">+855 12 345 678</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-600">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-600 transition text-sm flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-600">More</h4>
            <ul className="space-y-2">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-600 transition text-sm flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-600">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest news, updates, and match schedules.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-600 transition"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-bold mb-3 text-gray-300">Follow Us</h5>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-2xl hover:scale-110 transition-transform"
                    title={social.name}
                  >
                  <img src={social.icon} alt={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Cambodia Football League. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made By HTB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;