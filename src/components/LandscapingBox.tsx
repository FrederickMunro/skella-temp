import { useState, type JSX } from 'react';

interface Props {
  name: string;
  desc: string;
  icon: JSX.Element;
  anim: string;
}

const LandscapingBox = ({ name, desc, icon }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClicked = () => {
    setIsClicked(true);
  }
  
  return(
    <div className='amenagement-item'>
      <div className='amenagement-seperator' />
        <div onClick={() => handleClicked()} className='amenagement-info'>
          <div className='amenagement-icon'>{icon}</div>
          <h2 className={`amenagement-title ${isClicked && 'visible'}`}>{name}</h2>
          <p className={`amenagement-desc ${isClicked && 'visible'}`}>{desc}</p>
        </div>
    </div>
  )
}

export default LandscapingBox;