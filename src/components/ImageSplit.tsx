import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

interface Props {
    color: string;
    dryImage: string;
    wetImage: string;
}

const ImageSplit = ({ color, dryImage, wetImage }: Props) => {
  const { langNum } = useLanguage();
  const [dividerPosition, setDividerPosition] = useState<number>(50);

  const waterType = [
    {
      wet: ['Avec eau', 'With water'],
      dry: ['Sans eau','No water'],
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    // Get the vertical position relative to the container
    const offsetY = e.clientY - rect.top;
    
    // Constrain the offset within the container bounds
    if (offsetY >= 0 && offsetY <= rect.height) {
      const percentage = (offsetY / rect.height) * 100;
      setDividerPosition(percentage);
    }
  };
    
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    // Get the vertical position relative to the container
    const offsetY = e.touches[0].clientY - rect.top;

    // Constrain the offset within the container bounds
    if (offsetY >= 0 && offsetY <= rect.height-5) {
      const percentage = (offsetY / rect.height) * 100;
      setDividerPosition(percentage);
    }
  };

  return(
    <div className='color-container'>
      <h3 className='color-title'>{color}</h3>
      <p className='color-water'>{waterType[0].dry[langNum]}</p>
      <div
        className="image-container"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
      <img
          src={dryImage}
          className="image-top"
          alt="Top Image"
          style={{ clipPath: `inset(0 0 ${100 - dividerPosition}% 0)` }}
      />
      <img
          src={wetImage}
          className="image-bottom"
          alt="Bottom Image"
          style={{ clipPath: `inset(${dividerPosition}% 0 0 0)` }}
      />
      <div
          className="divider"
          style={{ top: `${dividerPosition}%` }}
          draggable={false}
      >
          <span className="arrow arrow-up">▲</span>
          <span className="arrow arrow-down">▼</span>
      </div>
      </div>
      <p className='color-water'>{waterType[0].wet[langNum]}</p>
    </div>
  )
}

export default ImageSplit;