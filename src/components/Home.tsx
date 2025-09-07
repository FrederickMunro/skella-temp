import { Link } from "react-router-dom";


const Home = () => {

  const titles = [
    {
      title: ['Piscines en fibre de verre et amenagement paysager haut de gamme sur la Rive-Sud', 'Fiberglass pools and high-end landscaping on the South-Shore'],
      desc: ['Depuis 1997', 'Since 1997'],
    },
    {
      title: ['Demandez une soumission', 'Request a quote'],
      desc: ['', ''],
    },
    {
      title: ['Vivez l\'Experience Skella', 'Live the Skella Experience'],
      desc: ['Pour un project clez en main sans tracas', 'Services designed to exceed your expectations'],
    }
  ]

  const sections = [
    {
      title: ['Piscines en fibre de verre', 'Fiberglass pools'],
      desc: ['Plongez dans nos collections', 'Sive into our collections'],
    },
    {
      title: ['Amenagements paysagers', 'Landscaping'],
      desc: ['Inspirez vous', 'Get inspired'],
    },
    {
      title: ['Excavations', 'Fib'],
      desc: ['Voir nos projets', 'See our projects'],
    },
  ]

  return(
    <div className='content-container'>

      <div className='home-title-container'>
        <div className='home-background-overlay' />
        <div className='home-video-text-container'>
          <h2 className='home-video-subtitle'>{titles[0].title[0]}</h2>
          <div className='home-date-container'>
            <div className='home-date-line' />
            <p className='home-date-text'>{titles[0].desc[0]}</p>
          </div>
          <Link className='home-video-button' to='/soumission'>{titles[1].title[0]}</Link>
        </div>
      </div>
    
      <div className='home-first-text-container'>
        <h3 className='home-first-text-title'>{titles[2].title[0]}</h3>
        <p className='home-first-text-text'>{titles[2].desc[0]}</p>
      </div>

      <Link to='piscines'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[0].title[0]}</h3>
          <p className='home-section-text'>{sections[0].desc[0]}</p>
        </div>
      </Link>

      <div className='home-landscaping'>
        <h3 className='home-section-title'>{sections[1].title[0]}</h3>
        <p className='home-section-text'>{sections[1].desc[0]}</p>
      </div>

      <div className='home-excavation'>
        <h3 className='home-section-title'>{sections[2].title[0]}</h3>
        <p className='home-section-text'>{sections[2].desc[0]}</p>
      </div>
    </div>
  )
}

export default Home;