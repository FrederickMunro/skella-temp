import { useEffect, useState } from "react";

interface Props {
  title: string;
  stat: string;
  symbol: string;
}

const HomeStat = ({ title, stat, symbol }: Props) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  
  useEffect(() => {
    let animationFrame: number;
    const duration = 1000; // total animation time in ms
    const startTime = performance.now();

    // Cubic ease-out easing function
    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

    const animate = (time: DOMHighResTimeStamp) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Normalize to [0, 1]
      const easedProgress = easeOut(progress);
      const newValue = Math.floor(easedProgress * parseInt(stat));

      setCurrentValue(newValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, []);

  return(
    <div className='stat-container'>
      <div className='stat-number-container'>
        <p className='stat-number'>{currentValue}{symbol}</p>
        <p className='stat-symbol'></p>
      </div>
      <p className='stat-text'>{title}</p>
    </div>
  )
}

export default HomeStat;