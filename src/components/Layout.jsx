import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/">MyApp</Link>
          </div>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                首页
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
              >
                关于
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                联系
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
