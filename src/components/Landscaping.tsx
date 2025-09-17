import LandscapingBox from './LandscapingBox';
import {
  FaTree,
  FaPencilRuler,
  FaSeedling,
  FaHome
} from "react-icons/fa";
import { MdOutlineFence, MdOutlineWaterDrop } from "react-icons/md";
import { GiWoodBeam, GiPlanks, GiBrickWall, GiStoneWall, GiWaterFountain, GiBarbecue } from "react-icons/gi";
import { useLanguage } from "./LanguageProvider";
import { Link } from 'react-router-dom';

const Landscaping = () => {
  const { langNum } = useLanguage();
  const services = [
    {
      name: ['Térrassement', 'Earthwork'],
      desc: [
        'Préparation du terrain pour tous vos projets extérieurs.',
        'Preparing the land for all your outdoor projects.'
      ],
      icon: <FaSeedling />
    },
    {
      name: ['Pavé-uni', 'Paving Stone'],
      desc: [
        'Installation professionnelle de pavés pour vos entrées, trottoirs, et terrasses.',
        'Professional installation of paving stones for your entrances, sidewalks, and terraces.'
      ],
      icon: <GiBrickWall />
    },
    {
      name: ['Services de designer', 'Designer Services'],
      desc: [
        'Conception sur mesure pour un aménagement extérieur unique.',
        'Custom design for a unique outdoor layout.'
      ],
      icon: <FaPencilRuler />
    },
    {
      name: ['Installation de clôture', 'Fence Installation'],
      desc: [
        'Pose de clôtures pour sécurité et esthétique.',
        'Installation of fences for security and aesthetics.'
      ],
      icon: <MdOutlineFence />
    },
    {
      name: ['Cuisine extérieure', 'Outdoor Kitchen'],
      desc: [
        'Création de cuisines extérieures fonctionnelles et modernes.',
        'Creation of functional and modern outdoor kitchens.'
      ],
      icon: <GiBarbecue />
    },
    {
      name: ['Pergola', 'Pergola'],
      desc: [
        'Installation de pergolas pour des espaces ombragés élégants.',
        'Installation of pergolas for elegant shaded spaces.'
      ],
      icon: <FaHome />
    },
    {
      name: ['Plantation', 'Planting'],
      desc: [
        'Ajout de plantes et d\'arbres pour embellir vos espaces.',
        'Adding plants and trees to beautify your spaces.'
      ],
      icon: <FaTree />
    },
    {
      name: ['Fontaine d\'eau', 'Water Fountain'],
      desc: [
        'Installation de fontaines pour une touche relaxante.',
        'Installation of fountains for a relaxing touch.'
      ],
      icon: <GiWaterFountain />
    },
    {
      name: ['Terrasse de bois', 'Wooden terrace'],
      desc: [
        'Conception et installation de terrasses en bois pour accentuer un style naturel.',
        'Design and installation of wooden terraces to accentuate a natural style.'
      ],
      icon: <GiWoodBeam />
    },
    {
      name: ['Terrasse en composite', 'Composite terrace'],
      desc: [
        'Terrasses durables et modernes en matériaux composites pour moderniser votre cour.',
        'Durable, modern composite decks to modernize your yard.'
      ],
      icon: <GiPlanks />
    },
    {
      name: ['Muret', 'Wall'],
      desc: [
        'Construction de murets pour délimiter et structurer vos espaces en style.',
        'Construction of low walls to delimit and structure your spaces in style.'
      ],
      icon: <GiStoneWall />
    },
    {
      name: ['Système d\'irrigation', 'Irrigation system'],
      desc: [
        'Installation de systèmes d\'arrosage efficaces pour vos plates-bandes et pelouse.',
        'Installation of efficient watering systems for your flowerbeds and lawn.'
      ],
      icon: <MdOutlineWaterDrop />
    }
  ];

  const titles = [
    {
      title: ['Services d\'aménagements paysagers', 'Landscaping Services'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ];

  return(
    <div className='amenagement-container'>
      <div className='title-container landscaping-title'>
        <h2 className='title-container-title'>{titles[0].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[0].desc[langNum]}</Link>
      </div>
      <h2 className='amenagement-subtitle'>{langNum ? 'Create the outdoor space of your dreams with our premium landscaping services' : 'Réalisez l\'extérieur de vos rêves avec nos services d\'aménagement paysager haut de gamme'}</h2>
      {services.map((service, index) => {
        return <LandscapingBox
                  name={service.name[langNum]}
                  desc={service.desc[langNum]}
                  icon={service.icon}
                  anim={index%2==0 ? '-side-right' : '-side-left'} key={index} />
      })}
    </div>
  )
}

export default Landscaping;