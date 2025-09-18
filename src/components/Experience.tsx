import ProgressLine from './ProgressLine'
import { FaPencilRuler, FaSwimmingPool, FaUserTie } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiGrass } from "react-icons/gi";

import ExperienceBox from './ExperienceBox';
import { useLanguage } from './LanguageProvider';

const Experience = () => {
  const { langNum } = useLanguage();

  const expBox = [
    {
      step: '01',
      title: ['Rencontrez un professionnel', 'Meet a Professional'],
      description: [
        'Discutez de vos besoins et idées avec un expert pour définir un projet adapté à vos attentes.',
        'Discuss your needs and ideas with an expert to define a project tailored to your expectations.'
      ],
      button: ['CONTACTEZ-NOUS', 'CONTACT US'],
      link: ['/contact', 'contact'],
      icon: <FaUserTie className='experience-step-icon' />
    },
    {
      step: '02',
      title: ['Rencontrez un designer', 'Meet a Designer'],
      description: [
        'Travaillez avec un designer pour créer une conception unique, alliant esthétique et fonctionnalité.',
        'Work with a designer to create a unique design combining aesthetics and functionality.'
      ],
      button: ['VOIR NOS PROJETS', 'VIEW OUR PROJECTS'],
      link: ['/galerie', '/galerie'],
      icon: <FaPencilRuler className='experience-step-icon' />
    },
    {
      step: '03',
      title: ['Obtention de permis', 'Obtaining Permits'],
      description: [
        'Nous vous accompagnons dans les démarches administratives pour obtenir les autorisations nécessaires.',
        'We assist you with administrative procedures to obtain the necessary permits.'
      ],
      link: '',
      icon: <AiOutlineFileProtect className='experience-step-icon' />
    },
    {
      step: '04',
      title: ['Installation de piscine', 'Pool Installation'],
      description: [
        'Notre équipe installe votre piscine avec précision, garantissant un résultat de haute qualité.',
        'Our team installs your pool with precision, ensuring a high-quality result.'
      ],
      button: ['VOIR NOS MODELES', 'VIEW OUR MODELS'],
      link: ['/piscines', '/piscines'],
      icon: <FaSwimmingPool className='experience-step-icon' />
    },
    {
      step: '05',
      title: ['Aménagements paysagers', 'Landscaping'],
      description: [
        'Ajoutez la touche finale avec un aménagement paysager qui complète parfaitement votre piscine.',
        'Add the finishing touch with landscaping that perfectly complements your pool.'
      ],
      button: ['VOIR NOS OPTIONS', 'VIEW OUR OPTIONS'],
      link: ['/amenagements', '/amenagements'],
      icon: <GiGrass className='experience-step-icon' />
    },
    {
      step: '06',
      title: ["Nettoyage et installation d'équipements", "Cleaning and Equipment Installation"],
      description: [
        "Nous assurons le nettoyage et l'installation d'équipements pour que tout soit prêt à l'emploi.",
        "We ensure cleaning and equipment installation so everything is ready for use."
      ],
      link: '',
    },
  ];

  return (
    <>
      <div className='experience-box-container'>
        {expBox.map((experience, index) => {
          return <div
              className={`experience-step-box-container-box ${experience.step === '06' ? 'last' : ''}`}
            >
            {experience.step !== '06' && <ProgressLine />}
            <ExperienceBox
              step={experience.step}
              title={experience.title[langNum]}
              description={experience.description[langNum]}
              button={experience.button && experience.button[langNum]}
              link={experience.link[langNum]}
              key={index}
            />
            {experience.icon}
          </div>
        })}
      </div>
    </>
  );
}

export default Experience;