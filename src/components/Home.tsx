import { Link } from "react-router-dom";
import HomeStat from "./HomeStat";
import Review from "./Review";
import { useLanguage } from './LanguageProvider.tsx';


const Home = () => {
  const { langNum } = useLanguage();

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
      desc: ['Plongez dans nos collections', 'Dive into our collections'],
    },
    {
      title: ['Amenagements paysagers', 'Landscaping'],
      desc: ['Inspirez vous', 'Get inspired'],
    },
    {
      title: ['Excavations', 'Excavation'],
      desc: ['Voir nos projets', 'See our projects'],
    },
  ]

  const stats = [
    {
      title: ['Projets réalisés', 'Completed projects'],
      stat: ['1500', '1500'],
    },
    {
      title: ['Clients satisfaits', 'Client satisfaction'],
      stat: ['100', '100'],
    },
    {
      title: ['Années d\'expériences', 'Years experience'],
      stat: ['25', '25'],
    },
  ]

  const reviews = [
    {
      text: [
        'Nous avons refait notre aménagement de la cour arrière. Le résultat est étincelant. Non seulement le visuel est extraordinaire mais la qualité du travail et le soucis du détail est inégalable dans le domaine',
        'We redid our backyard landscaping. The result is sparkling. Not only is the visual extraordinary, but the quality of the work and the attention to detail is unrivaled in the field.'
      ],
      date: ['nov 2024', 'Nov 2024'],
    },
    {
      text: [
        'Une équipe fort sympatique et professionnelle. Nous sommes plus que satisfait du travail effectué. Un petite piscine dans une petite cours avec un accès limité ! Bravo et merci pour le beau résultat !',
        'A very friendly and professional team. We are more than satisfied with the work done. A small swimming pool in a small courtyard with limited access! Bravo and thank you for the beautiful result!'
      ],
      date: ['mars 2024', 'Mar 2024'],
    },
    {
      text: [
        'Nous avons reçu un service incroyable. De la demande de soumission jusqu\'a l\'installation de notre piscine. Excavation Skella reste de loin, la compagnie ayant offert le service le plus professionnel',
        'We received incredible service. From the quote request to the installation of our pool. Excavation Skella remains by far, the company having offered the most professional service'
      ],
      date: ['mai 2024', 'May 2024'],
    },
  ]

  return(
    <div className='content-container'>

      <div className='home-title-container'>
        <div className='home-background-overlay' />
        <div className='home-video-text-container'>
          <h2 className='home-video-subtitle'>{titles[0].title[langNum]}</h2>
          <div className='home-date-container'>
            <div className='home-date-line' />
            <p className='home-date-text'>{titles[0].desc[langNum]}</p>
          </div>
          <Link className='home-video-button' to='/soumission'>{titles[1].title[langNum]}</Link>
        </div>
      </div>
    
      <div className='home-first-text-container'>
        <h3 className='home-first-text-title'>{titles[2].title[langNum]}</h3>
        <p className='home-first-text-text'>{titles[2].desc[langNum]}</p>
      </div>

      <Link to='piscines'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[0].title[langNum]}</h3>
          <p className='home-section-text'>{sections[0].desc[langNum]}</p>
        </div>
      </Link>

      <Link to='amenagements'>
        <div className='home-landscaping'>
          <h3 className='home-section-title'>{sections[1].title[langNum]}</h3>
          <p className='home-section-text'>{sections[1].desc[langNum]}</p>
        </div>
      </Link>

      <Link to='excavations'>
        <div className='home-excavation'>
          <h3 className='home-section-title'>{sections[2].title[langNum]}</h3>
          <p className='home-section-text'>{sections[2].desc[langNum]}</p>
        </div>
      </Link>
      
      <div className='reviews'>
        <Review reviewText={reviews[0].text[langNum]} date={reviews[0].date[langNum]}/>
        <Review reviewText={reviews[1].text[langNum]} date={reviews[1].date[langNum]}/>
        <Review reviewText={reviews[2].text[langNum]} date={reviews[2].date[langNum]}/>
      </div>

      <div className='stats-section'>
        <HomeStat title={stats[0].title[langNum]} stat={stats[0].stat[langNum]} symbol='+' />
        <HomeStat title={stats[1].title[langNum]} stat={stats[1].stat[langNum]} symbol='%' />
        <HomeStat title={stats[2].title[langNum]} stat={stats[2].stat[langNum]} symbol='+' />
      </div>
    </div>
  )
}

export default Home;