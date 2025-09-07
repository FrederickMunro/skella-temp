import ImageSplit from "./ImageSplit";
import Image from '../assets/home-image-48.jpg';
import { useRef } from "react";
import { Link } from "react-router-dom";

const Pools = () => {

  const colors = [
    {
      name: ['Sel de mer', 'Sea Salt'],
      dryImage: Image,
      wetImage: Image,
    },
    {
      name: ['Gris Arctique', 'Arctic Grey'],
      dryImage: Image,
      wetImage: Image,
    },
    {
      name: ['Ocean', 'Ocean'],
      dryImage: Image,
      wetImage: Image,
    },
    {
      name: ['Aqua', 'Aqua'],
      dryImage: Image,
      wetImage: Image,
    },
    {
      name: ['Pacifique', 'Pacific'],
      dryImage: Image,
      wetImage: Image,
    },
    {
      name: ['Galaxie', 'Galaxy'],
      dryImage: Image,
      wetImage: Image,
    },
  ];

  const titles = [
    {
      title: ['Nos couleurs', 'Our colors'],
      desc: ['* La collection Fluvia est disponible uniquement dans la couleur sel de mer', '* The Fluvia collection is only available in the sea salt color'],
    },
  ];

  const sections = [
    {
      title: ['Collection Aquarino', 'Aquarino Collection'],
      desc: ['', 'Modern sleek pools with a flat bottom'],
    },
    {
      title: ['Collection Dolphin', 'Dolphin Collection'],
      desc: ['', 'The largest fiberglass pools on the market'],
    },
    {
      title: ['', ''],
      desc: ['', ''],
    },
  ]

  const containerRef = useRef<HTMLDivElement | null>(null);

  return(
    <>
      <div className='colors-full-container'>
        <h2 className='colors-title'>{titles[0].title[0]}</h2>
        <div className="carousel-wrapper">
          <div
              className="colors-container"
              ref={containerRef}
          >
            {colors.map((color, i) => {
              return <ImageSplit
                        color={color.name[0]}
                        dryImage={color.dryImage}
                        wetImage={color.wetImage}
                        key={i} />
            })}
          </div>
        </div>
        <p className='colors-fineprint'>{titles[0].desc[0]}</p>
      </div>
      
      <Link to='aquarino'>
        <div className='home-pools'>
          <h3 className='home-section-title'>{sections[0].title[0]}</h3>
          <p className='home-section-text'>{sections[0].desc[0]}</p>
        </div>
      </Link>
    </>
  );
}

export default Pools;