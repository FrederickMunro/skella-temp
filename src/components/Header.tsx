import { useEffect, useState } from 'react';
import HeaderImage from '../assets/header-logo.png';
import MenuOption from './MenuOption';
import { Link } from 'react-router-dom';

const Header = () => {
  const language = 0;
  
  const [menuState, setMenuState] = useState('header-menu-closed');
  const handleMenuClick = () => {
    if (menuState === 'header-menu-closed' && window.innerWidth < 1281) {
      setMenuState('header-menu-open');
    } else {
      setMenuState('header-menu-closed');
    }
  }

  const menuOptions = [
    {
      name: ['Piscines', 'Pools',],
      link: ['/piscines', '/pools',],
      options: [
        {
          name: ['Collection Aquarino', 'Aquarino Collection',],
          link: ['/aquarino', '/aquarino',],
          options: null,
        },
        {
          name: ['Collection Dolphin', 'Dolphin Collection',],
          link: ['/dolphin', '/dolphin',],
          options: null,
        },
        {
          name: ['Collection Mova', 'Mova Collection',],
          link: ['/mova', '/mova',],
          options: null,
        },
      ],
    },
    {
      name: ['Services', 'Services',],
      link: ['/services', '/services',],
      options: [
        {
          name: ['L\'Expérience Skella', 'Skella Experience',],
          link: ['/experience', '/experience',],
          options: null,
        },
        {
          name: ['Aménagements', 'Landscaping',],
          link: ['/amenagements', '/lansdcaping',],
          options: null,
        },
        {
          name: ['Excavation', 'Excavation',],
          link: ['/excavations', '/excavations',],
          options: null,
        },
      ],
    },
    {
      name: ['Promotions', 'Promotions',],
      link: ['/promotions', '/promotions',],
      options: null,
    },
    {
      name: ['Soumission', 'Quote',],
      link: ['/soumission', '/quote',],
      options: null,
    },
    {
      name: ['Galerie', 'Gallery',],
      link: ['/galerie', '/gallery',],
      options: null,
    },
    {
      name: ['Blog', 'Blog',],
      link: ['/blog', '/blog',],
      options: null,
    },
  ]

  const handleHomeClick = () => {
    if (menuState === 'header-menu-open') {
      setMenuState('header-menu-closed');
    }
  }

  useEffect(() => {
    if (menuState === 'header-menu-open') {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuState]);

  return(
    <div className='header-container'>
      <div className='header-image-container'>
        <Link
          to='/'
          onClick={() => handleHomeClick()}
        >
          <img className='header-image' src={HeaderImage} alt='Company header logo' />
        </Link>
      </div>
      <div className='header-menu-container large'>
        {menuOptions.map((e, i) => {
          return <MenuOption name={e.name[language]} link={e.link[language]} options={e.options && e.options[language]} key={i} />
        })}
      </div>
      
      <div className={`header-hamburger-menu ${menuState}`} onClick={() => handleMenuClick()}>
        <svg width="60" height="60" viewBox="0 0 100 100">
          <path className="header-hamburger-line header-hamburger-top" d="M 20,30 H 80"/>
          <path className="header-hamburger-line header-hamburger-middle" d="M 20,50 H 80" />
          <path className="header-hamburger-line header-hamburger-bottom" d="M 20,70 H 80"/>
        </svg>
      </div>
      
      <div className={`header-menu ${menuState}-slider main-color-background`}>
        <div className='header-menu-items'>
          {menuOptions.map((e, i) => {
            return <MenuOption name={e.name[language]} link={e.link[language]} options={e.options && e.options[language]} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Header;