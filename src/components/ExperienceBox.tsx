import { Link } from 'react-router-dom';

interface Props {
  step: string;
  title: string;
  description: string;
  button?: string;
  link: string;
}

const ExperienceBox = ({ step, title, description, button, link }: Props) => {
  return (
    <div className='experience-step-box'>
      <h3 className='experience-box-step'>{step}</h3>
      <h2 className='experience-box-step-title'>{title}</h2>
      <p className='experience-box-step-desc'>{description}</p>
      { button && <Link
        to={link}
        className='experience-box-step-button'
      >
        {button}
      </Link>}
    </div>
  );
}

export default ExperienceBox;