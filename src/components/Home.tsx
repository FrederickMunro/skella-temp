import { Link } from "react-router-dom";


const Home = () => {

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
          <h2 className='home-video-subtitle'>Fiberglass pools and high-end landscaping on the South-Shore</h2>
          <div className='home-date-container'>
            <div className='home-date-line' />
            <p className='home-date-text'>Since 1997</p>
          </div>
          <Link className='home-video-button' to='/soumission'>Request a quote</Link>
        </div>
      </div>
    
      <div className='home-first-text-container'>
        <h3>Live the Skella Experience</h3>
        <p>Services designed to exceed your expecations</p>
      </div>

      <div className='home-pools'>
        <h3>{sections[0].title[0]}</h3>
        <p>{sections[0].desc[0]}</p>
      </div>

      <div className='home-landscaping'>
        <h3>{sections[1].title[0]}</h3>
        <p>{sections[1].desc[0]}</p>
      </div>

      <div className='home-excavation'>
        <h3>{sections[2].title[0]}</h3>
        <p>{sections[2].desc[0]}</p>
      </div>
    </div>
  )
}

export default Home;