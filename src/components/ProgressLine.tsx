import { createContext } from "react";
import { useInView } from "react-intersection-observer";

export const InViewContext = createContext<boolean>(false);

const ProgressLine = () => {
  const { ref, inView } = useInView({
      threshold: 1,
      triggerOnce: true,
  });


  return (
    <div className='timeline'>
      <div ref={ref} className={`inview-container-timeline ${inView ? `visible-timeline` : `hidden-timeline`}`} />
      <InViewContext.Provider value={inView}>
        <div ref={ref} className='timeline-section' />
      </InViewContext.Provider>
    </div>
  );
};

export default ProgressLine;