import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  link: string;
  options: null | {
    name: string[];
    link: string[];
    options: null;
  };
  menuClose: () => void;
}

const MenuOption = ({ name, link, options, menuClose }: Props) => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='menu-option-container'>
      <Link className='menu-option-link' to={link} onClick={menuClose}>{name}</Link>
      {options &&
        <div className='menu-dropdown-arrow-container' onClick={() => setIsOpen(!isOpen)}>
          <span className='menu-dropdown-arrow'>{isOpen ? '▲' : '▼'}</span>
        </div>
      }
    </div>
  );
}

export default MenuOption;