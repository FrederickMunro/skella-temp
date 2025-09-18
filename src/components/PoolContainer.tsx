import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface Props {
  title: string;
  desc: string;
  image: string;
  model: string;
  pdf: string;
  dimensions: string[][];
}

const PoolContainer = ({ title, desc, image, model, pdf, dimensions }: Props) => {
  const { langNum } = useLanguage();
  const [isDepthsOpen, setIsDepthsOpen] = useState(false);

  return(
      <div className={`pools-pool-nested-info-container`}>
        <img
          src={image}
          alt={title}
          className="pools-pool-image"
          loading='lazy'
        />
        <img
          src={model}
          className='pools-pool-model'
          loading='lazy'
        />
        <h2 className='pools-container-title'>{title}</h2>
        <p className='pools-container-desc'>{desc}</p>
        <a href={pdf} target='_blank'>
          <button className='pools-pool-detail-button'>{langNum ? 'See blueprint' : 'Voir le plan'}</button>
        </a>
        <div className={`depths-pool ${isDepthsOpen ? 'open' : 'close'}`}>
          <div className='sizedepth-titles-container'>
            <h4 className='sizedepth-titles'>{langNum ? 'Depths' : 'Profondeurs'}</h4>
            <h4 className='sizedepth-titles'>Dimensions</h4>
          </div>
          {dimensions.map((dimension) => {
            return (
              <div className='sizedepth-unit-container'>
                <p className='sizedepth-unit-depth'>{dimension[0]}</p>
                <div className='sizedepth-unit-size-container'>
                  {dimension[1].split(',').map((size) => {
                    return <p className='sizedepth-unit-size'>{size}</p>
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='depths-container-bot' onClick={() => setIsDepthsOpen(!isDepthsOpen)}>
          <div className={'depths-container-button'}>{isDepthsOpen ? `${langNum ? 'Close' : 'Fermer'}` : 'Dimensions'}</div>
          <div className={'depths-container-arrow'}>{isDepthsOpen ? ' -' : ' +'}</div>
        </div>
      </div>
  )
}

export default PoolContainer;