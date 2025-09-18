import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageProvider";

type MenuOption = {
  name: string[];
  link: string[];
  options: MenuOption[] | null;
  clickable: boolean;
};

interface Props {
  name: string;
  link: string;
  options: MenuOption[] | null;
  menuClose: () => void;
  clickable: boolean;
}

const MenuOption = ({ name, link, options, menuClose, clickable }: Props) => {
  const { langNum } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='menu-main-container'>
      <div className='menu-option-container'>
        {
          clickable ? 
            <Link className='menu-option-link' to={link} onClick={menuClose}>{name}</Link>
            : <Link className='menu-option-link' to={''}>{name}</Link>
        }
        {options && options.length > 0 && (
          <div
            className='menu-dropdown-arrow-container'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='menu-dropdown-arrow'>{isOpen ? '▲' : '▼'}</span>
          </div>
        )}
      </div>
      <div className={`menu-dropdown-options ${isOpen ? '' : 'closed'}`}>
        {options && options.map((option, i) => (
          <Link
            key={i}
            className='menu-option-link'
            to={option.link[langNum]}
            onClick={menuClose}
          >
            {option.name[langNum]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuOption;