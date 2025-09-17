import ExcavationBox from "./ExcavationBox";
import {
  FaWater,
  FaTools,
  FaRulerCombined
} from "react-icons/fa";
import { MdOutlineFoundation } from "react-icons/md";
import { GiStoneWall, GiEdgeCrack } from "react-icons/gi";
import { useLanguage } from "./LanguageProvider";
import { Link } from "react-router-dom";

const Excavation = () => {
  const { langNum } = useLanguage();
  const services = [
    {
      name: ['Démolition', 'Demolition'],
      desc: [
        'Démontage ou destruction de structures pour préparer le terrain à de nouveaux projets.',
        'Dismantling or destruction of structures to prepare the ground for new projects.'
      ],
      icon: <GiEdgeCrack />
    },
    {
      name: ['Drain français', 'French Drain'],
      desc: [
        'Installation ou réparation de drains français pour rediriger efficacement l\'eau loin des fondations et éviter les infiltrations d\'eau et la saturation du sol.',
        'Installation or repair of French drains to effectively redirect water away from foundations and avoid water infiltration and soil saturation.'
      ],
      icon: <FaWater />
    },
    {
      name: ['Imperméabilisation de fondation', 'Foundation Waterproofing'],
      desc: [
        'Imperméabilisation des fondations pour protéger votre maison des dommages causés par l\'eau et garantir l\'intégrité structurelle à long terme.',
        'Foundation waterproofing to protect your home from water damage and ensure long-term structural integrity.'
      ],
      icon: <MdOutlineFoundation />
    },
    {
      name: ['Enlèvement de pyrite', 'Pyrite Removal'],
      desc: [
        'Retrait de la pyrite de votre propriété pour prévenir les dommages liés au gonflement et aux fissures des structures en béton.',
        'Removing pyrite from your property to prevent damage from swelling and cracking of concrete structures.'
      ],
      icon: <FaTools />
    },
    {
      name: ['Nivellement de terrain', 'Land Leveling'],
      desc: [
        'Mise à niveau et nivellement du terrain pour assurer un bon drainage, améliorer l\'esthétique et préparer le sol pour des projets de construction ou d\'aménagement paysager.',
        'Leveling and grading the land to ensure proper drainage, improve aesthetics and prepare the ground for construction or landscaping projects.'
      ],
      icon: <FaRulerCombined />
    },
    {
      name: ['Mur de soutènement', 'Retaining Wall'],
      desc: [
        'Construction de murs de soutènement pour stabiliser les pentes, prévenir l\'érosion des sols et optimiser la fonctionnalité et l\'esthétique de vos espaces extérieurs.',
        'Construction of retaining walls to stabilize slopes, prevent soil erosion and optimize the functionality and aesthetics of your outdoor spaces.'
      ],
      icon: <GiStoneWall />
    }
  ];

  const titles = [
    {
      title: ['Services d\'excavation', 'Excavation services'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ];

  return(
    <div className='excavation-container'>
      <div className='title-container landscaping-title'>
        <h2 className='title-container-title'>{titles[0].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[0].desc[langNum]}</Link>
      </div>
      <h2 className='excavation-subtitle'>{langNum ? 'Transform your property with our top-tier excavation services, designed to bring your vision to life' : 'Transformez votre propriété grâce à nos services d\'excavation haut de gamme, conçus pour donner vie à votre vision'}</h2>
      {services.map((service, index) => {
        return <ExcavationBox
                  name={service.name[langNum]}
                  desc={service.desc[langNum]}
                  icon={service.icon}
                  anim={index%2!==0 ? '-side-left' : '-side-right'} key={index} />
      })}
    </div>
  )
}

export default Excavation;