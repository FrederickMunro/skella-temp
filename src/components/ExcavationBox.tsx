import { useState, type JSX } from 'react';
import { useLanguage } from './LanguageProvider';

interface Props {
  name: string;
  desc: string;
  icon: JSX.Element;
  anim: string;
}

const ExcavationBox = ({ name, desc, icon }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { langNum } = useLanguage();

  const handleClicked = () => {
    setIsClicked(true);
  }
  
  return(
      <div className='excavation-item'>
        <div className='excavation-seperator' />
          <div onClick={() => handleClicked()} className='excavation-info'>
            <div className='excavation-icon'>{icon}</div>
            <h2 className={`excavation-title ${isClicked && 'visible'}`}>{name}</h2>
            <p className={`excavation-desc ${isClicked && 'visible'}`}>{desc}</p>
          </div>
      </div>
  )
}

export default ExcavationBox;