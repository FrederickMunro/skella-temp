import { useLanguage } from "./LanguageProvider";
import PoolContainer from "./PoolContainer";
import { Link } from "react-router-dom";

import Diamant from '../assets/aquarino/diamant.jpg';
import DiamantModel from '../assets/aquarino/diamant-model.png';
import DiamantPDF from '../assets/aquarino/diamant.pdf';

import Topaze from '../assets/aquarino/topaze.jpg';
import TopazeModel from '../assets/aquarino/topaze-model.png';
import TopazePDF from '../assets/aquarino/topaze.pdf';

import Zircon from '../assets/aquarino/zircon.jpg';
import ZirconModel from '../assets/aquarino/zircon-model.png';
import ZirconPDF from '../assets/aquarino/zircon.pdf';

import Lazuli from '../assets/aquarino/lazuli.jpg';
import LazuliModel from '../assets/aquarino/lazuli-model.png';
import LazuliPDF from '../assets/aquarino/lazuli.pdf';

import Quartz from '../assets/aquarino/quartz.jpg';
import QuartzModel from '../assets/aquarino/quartz-model.png';
import QuartzPDF from '../assets/aquarino/quartz.pdf';

import Larimar from '../assets/aquarino/larimar.jpg';
import LarimarModel from '../assets/aquarino/larimar-model.png';
import LarimarPDF from '../assets/aquarino/larimar.pdf';

import Perla from '../assets/aquarino/perla.jpg';
import PerlaModel from '../assets/aquarino/perla-model.png';
import PerlaPDF from '../assets/aquarino/perla.pdf';

import Opal from '../assets/aquarino/opal.jpg';
import OpalModel from '../assets/aquarino/opal-model.png';
import OpalPDF from '../assets/aquarino/opal.pdf';

import Saphir from '../assets/aquarino/saphir.jpg';
import SaphirModel from '../assets/aquarino/saphir-model.png';
import SaphirPDF from '../assets/aquarino/saphir.pdf';

import Tanza from '../assets/aquarino/tanza.jpg';
import TanzaModel from '../assets/aquarino/tanza-model.png';
import TanzaPDF from '../assets/aquarino/tanza.pdf';


const Aquarino = () => {
  const { langNum } = useLanguage();

  const pools = [
    {
      title: ['Diamant', 'Diamond'],
      desc: [
        'La Diamant porte bien son nom : petite mais polyvalente, elle peut être intégrée dans tous les espaces. Ce modèle peut aussi être proposé en spa 4 saisons.',
        'The Diamant lives up to its name: small but versatile, it can be integrated into any space. This model can also be offered as a 4-season spa.'
      ],
      image: Diamant,
      model: DiamantModel,
      pdf: DiamantPDF,
      dimensions: [['3\'9"', '8\'x10\'']],
    },
    {
      title: ['Topaze', 'Topaze'],
      desc: [
        'Meilleur vendeur depuis des années, le modèle Topaze, offert en 4 formats différents, arbore un style simple et épuré qui transformera votre cour arrière en véritable coin de paradis.',
        'A best-seller for years, the Topaze model, available in 4 different sizes, features a simple and sleek design that will transform your backyard into a true paradise.'
      ],
      image: Topaze,
      model: TopazeModel,
      pdf: TopazePDF,
      dimensions: [['4\'10"', '8\'x14\', 12\'x20\', 12\'x24\', 12\'x26\'']],
    },
    {
      title: ['Zircon', 'Zirconia'],
      desc: [
        'La Zircon, grâce à ses marches latérales, maximise le couloir de natation tout en offrant des bancs bien pensés pour siroter un verre après votre effort physique.',
        'The Zircon, with its side steps, maximizes the swimming lane while offering well-designed benches to sip a drink after your physical effort.'
      ],
      image: Zircon,
      model: ZirconModel,
      pdf: ZirconPDF,
      dimensions: [['5\'', '12\'x22\', 12\'x27\'']],
    },
    {
      title: ['Lazuli', 'Lazuli'],
      desc: [
        'Le modèle Lazuli vous offre un espace lounge unique ainsi qu\'un grand bassin, parfait pour les jeux aquatiques.',
        'The Lazuli model offers you a unique lounge area as well as a large pool, perfect for water games.'
      ],
      image: Lazuli,
      model: LazuliModel,
      pdf: LazuliPDF,
      dimensions: [['4\'10"', '12\'x28\', 12\'x32\'']],
    },
    {
      title: ['Quartz', 'Quartz'],
      desc: [
        'Le modèle Quartz offre la plus grande plage intégrée de la collection. Disponible en 2 dimensions, il sera idéal pour votre famille, offrant un magnifique espace détente combiné à un grand espace de jeu.',
        'The Quartz model offers the largest integrated beach in the collection. Available in two sizes, it will be ideal for your family, providing a beautiful relaxation area combined with a large play area.'
      ],
      image: Quartz,
      model: QuartzModel,
      pdf: QuartzPDF,
      dimensions: [['4\'10"', '14\'x31\', 14\'x36\'']],
    },
    {
      title: ['Larimar', 'Larimar'],
      desc: [
        'Le modèle Larimar est parfait pour siroter un cocktail entre amis tout en profitant du soleil sur sa plage intégrée.',
        'The Larimar model is perfect for sipping a cocktail with friends while enjoying the sun on its integrated beach.'
      ],
      image: Larimar,
      model: LarimarModel,
      pdf: LarimarPDF,
      dimensions: [['4\'6"', '10\'x25\'']],
    },
    {
      title: ['Perla', 'Perla'],
      desc: [
        'Le modèle Perla se distingue par sa plage intégrée à même la piscine, la rendant parfaite pour tous les espaces, tout en offrant un espace détente et un espace de jeu idéaux au même endroit.',
        'The Perla model stands out with its integrated beach within the pool, making it perfect for any space, while also providing an ideal relaxation and play area in one place.'
      ],
      image: Perla,
      model: PerlaModel,
      pdf: PerlaPDF,
      dimensions: [['4x\'10"', '12\'x24\'']],
    },
    {
      title: ['Opale', 'Opal'],
      desc: [
        'L\'Opale est une piscine polyvalente, offrant un compromis idéal entre la détente et la modernité.',
        'The Opal is a versatile pool, offering an ideal compromise between relaxation and modernity.'
      ],
      image: Opal,
      model: OpalModel,
      pdf: OpalPDF,
      dimensions: [['4\'10"', '8\'x16\', 12\'x20\'']],
    },
    {
      title: ['Saphir', 'Sapphire'],
      desc: [
        'Les piscines de style spa sont conçues pour offrir une expérience de détente luxueuse grâce à leurs jets d\'hydrothérapie, tout en offrant un espace spacieux permettant à toute la famille de s\'amuser.',
        'Spa-style pools are designed to provide a luxurious relaxation experience with their hydrotherapy jets, while also offering a spacious area for the whole family to enjoy.'
      ],
      image: Saphir,
      model: SaphirModel,
      pdf: SaphirPDF,
      dimensions: [['4\'10"', '14\'x31\', 14\'x36\'']],
    },
    {
      title: ['Tanza', 'Tanza'],
      desc: [
        'Module de plage modulaire, idéal pour les jeunes enfants ou pour profiter du soleil directement dans votre piscine.',
        'Modular beach module, ideal for young children or to enjoy the sun right in your pool.'
      ],
      image: Tanza,
      model: TanzaModel,
      pdf: TanzaPDF,
      dimensions: [['10"', '8\'x11\'']],
    },
  ];

  const titles = [
    {
      title: ['Collection Aquarino', 'Aquarino Collection'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ]

  return(
    <>
      <div className='title-container pools-title'>
        <h2 className='title-container-title'>{titles[0].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[0].desc[langNum]}</Link>
      </div>
      <div className='pools-pool-container'>
        {pools.map((e,i) => {
          return <PoolContainer
            title={e.title[langNum]}
            desc={e.desc[langNum]}
            image={e.image}
            model={e.model}
            pdf={e.pdf}
            dimensions={e.dimensions}
            key={i} />
        })}
      </div>
    </>
  )
}

export default Aquarino;