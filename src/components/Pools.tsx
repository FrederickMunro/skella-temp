import ImageSplit from "./ImageSplit";
import SelDeMer0 from '../assets/sel-de-mer-0.png';
import SelDeMer1 from '../assets/sel-de-mer-1.avif';
import GrisArctic0 from '../assets/gris-artic-0.png';
import GrisArctic1 from '../assets/gris-artic-1.png';
import Ocean0 from '../assets/ocean-0.png';
import Ocean1 from '../assets/ocean-1.png';
import Aqua0 from '../assets/aqua-0.png';
import Aqua1 from '../assets/aqua-1.png';
import Pacific0 from '../assets/pacific-0.png';
import Pacific1 from '../assets/pacific-1.png';
import Galaxy0 from '../assets/galaxy-0.png';
import Galaxy1 from '../assets/galaxy-1.png';
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

const Pools = () => {
  const { langNum } = useLanguage();

  const colors = [
    {
      name: ['Sel de mer', 'Sea Salt'],
      dryImage: SelDeMer0,
      wetImage: SelDeMer1,
    },
    {
      name: ['Gris Arctique', 'Arctic Grey'],
      dryImage: GrisArctic0,
      wetImage: GrisArctic1,
    },
    {
      name: ['Ocean', 'Ocean'],
      dryImage: Ocean0,
      wetImage: Ocean1,
    },
    {
      name: ['Aqua', 'Aqua'],
      dryImage: Aqua0,
      wetImage: Aqua1,
    },
    {
      name: ['Pacifique', 'Pacific'],
      dryImage: Pacific0,
      wetImage: Pacific1,
    },
    {
      name: ['Galaxie', 'Galaxy'],
      dryImage: Galaxy0,
      wetImage: Galaxy1,
    },
  ];

  const titles = [
    {
      title: ['Nos couleurs', 'Our colors'],
      desc: ['* La collection Fluvia est disponible uniquement dans la couleur sel de mer', '* The Fluvia collection is only available in the sea salt color'],
    },
    {
      title: ['Piscines creusées en fibre de verre','In-Ground Fiberglass Pools'],
      desc: ['Demandez une soumission', 'Request a quote'],
    },
  ];

  const sections = [
    {
      title: ['Collection Aquarino', 'Aquarino Collection'],
      desc: ['Piscines modernes et épurées à fond plat', 'Modern sleek pools with a flat bottom'],
    },
    {
      title: ['Collection Dolphin', 'Dolphin Collection'],
      desc: ['Les plus grandes piscines en fibre de verre du marché.', 'The largest fiberglass pools on the market'],
    },
    {
      title: ['Collection Fibco', 'Fibco Collection'],
      desc: ['Piscines isolées, durables et haut de gamme.', 'Durable and high-end insulated pools.'],
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null);

  return(
    <>
      <div className='title-container pools-title'>
        <h2 className='title-container-title'>{titles[1].title[langNum]}</h2>
        <Link className='title-container-button' to='/soumission'>{titles[1].desc[langNum]}</Link>
      </div>
      <div className='colors-full-container'>
        <h2 className='colors-title'>{titles[0].title[langNum]}</h2>
        <div className="carousel-wrapper">
          <div
              className="colors-container"
              ref={containerRef}
          >
            {colors.map((color, i) => {
              return <ImageSplit
                        color={color.name[langNum]}
                        dryImage={color.dryImage}
                        wetImage={color.wetImage}
                        key={i} />
            })}
          </div>
        </div>
        <p className='colors-fineprint'>{titles[0].desc[langNum]}</p>
      </div>
      
      <Link to='/piscines/aquarino'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[0].title[langNum]}</h3>
          <p className='home-section-text'>{sections[0].desc[langNum]}</p>
        </div>
      </Link>
      
      <Link to='/piscines/dolphin'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[1].title[langNum]}</h3>
          <p className='home-section-text'>{sections[1].desc[langNum]}</p>
        </div>
      </Link>
      
      <Link to='/piscines/fibco'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[2].title[langNum]}</h3>
          <p className='home-section-text'>{sections[2].desc[langNum]}</p>
        </div>
      </Link>
    </>
  );
}

export default Pools;