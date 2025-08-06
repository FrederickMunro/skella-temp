import { Link } from "react-router-dom";


const Home = () => {
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
    </div>
  )
}

export default Home;