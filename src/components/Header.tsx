import { useEffect, useState } from 'react';
import HeaderImage from '../assets/header-logo.png';
import MenuOption from './MenuOption';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageProvider';

const Header = () => {
  const { langNum, changeLangNum } = useLanguage();
  
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
      name: ['Piscines', 'Pools'],
      link: ['/piscines', '/piscines'],
      options: [
        {
          name: ['Collection Aquarino', 'Aquarino Collection',],
          link: ['/piscines/aquarino', '/piscines/aquarino'],
          options: null,
          clickable: true,
        },
        {
          name: ['Collection Dolphin', 'Dolphin Collection',],
          link: ['/piscines/dolphin', '/piscines/dolphin'],
          options: null,
          clickable: true,
        },
        {
          name: ['Collection Mova', 'Mova Collection',],
          link: ['/piscines/mova', '/piscines/mova'],
          options: null,
          clickable: true,
        },
      ],
      clickable: true,
    },
    {
      name: ['Services', 'Services'],
      link: ['/services', '/services'],
      options: [
        {
          name: ['L\'Expérience Skella', 'Skella Experience'],
          link: ['/experience-skella', '/experience-skella'],
          options: null,
          clickable: true,
        },
        {
          name: ['Aménagements', 'Landscaping'],
          link: ['/amenagements', '/amenagements'],
          options: null,
          clickable: true,
        },
        {
          name: ['Excavation', 'Excavation'],
          link: ['/excavations', '/excavations'],
          options: null,
          clickable: true,
        },
      ],
      clickable: false,
    },
    {
      name: ['Promotions', 'Promotions'],
      link: ['/promotions', '/promotions'],
      options: null,
      clickable: true,
    },
    {
      name: ['Soumission', 'Quote'],
      link: ['/soumission', '/soumission'],
      options: null,
      clickable: true,
    },
    {
      name: ['Galerie', 'Gallery'],
      link: ['/galerie', '/galerie'],
      options: null,
      clickable: true,
    },
    {
      name: ['Blog', 'Blog'],
      link: ['/blog', '/blog'],
      options: null,
      clickable: true,
    },
  ]

  const handleCloseMenu = () => {
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
          onClick={() => handleCloseMenu()}
        >
          <img className='header-image' src={HeaderImage} alt='Company header logo' />
        </Link>
      </div>
      <div className='header-menu-container large'>
        {menuOptions.map((e, i) => (
          <MenuOption
            key={i}
            name={e.name[langNum]}
            link={e.link[langNum]}
            options={e.options}
            menuClose={handleCloseMenu}
            clickable={e.clickable}
          />
        ))}
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
          {menuOptions.map((e, i) => (
            <MenuOption
              key={i}
              name={e.name[langNum]}
              link={e.link[langNum]}
              options={e.options}
              menuClose={handleCloseMenu}
              clickable={e.clickable}
            />
          ))}
          <p onClick={() => { changeLangNum(); handleMenuClick(); }}>{langNum ? 'FR' : 'EN'}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;