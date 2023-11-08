import './Nav.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from 'contexts/MenuContext';
import { useEffect } from 'react';
import { useState } from 'react';

export const Nav = () => {
  const { isMenuClicked, setIsMenuClicked } = useMenu()
  const [addVisibilityToNav, setAddVisibilityToNav] = useState(true)



  useEffect(() => {
    // Add the CSS class 'highlight' for 1 second after the component mounts
    if (addVisibilityToNav) {
      const timer = setTimeout(() => {
        setAddVisibilityToNav(false);
      }, 1000); // 1 second

      return () => clearTimeout(timer);
    }
  }, [addVisibilityToNav]);


  return (


    <nav>
      <ul className={cn(
        { 'mobile-nav': addVisibilityToNav },
        { 'mobile-show': isMenuClicked },
        { 'mobile-hide': !isMenuClicked }
      )}>
        <li>
          <Link onClick={() => setIsMenuClicked(false)} to='/items/woman'>
            Woman
          </Link>
          <FontAwesomeIcon className='icon' icon={faVenus} />
        </li>

        <li>
          <Link onClick={() => setIsMenuClicked(false)} to='/items/man'>
            Man
          </Link>
          <FontAwesomeIcon className='icon' icon={faMars} />
        </li>

        <li>
          <Link onClick={() => setIsMenuClicked(false)} to='/items/kids'>
            Kids
          </Link>
          <FontAwesomeIcon className='icon' icon={faChild} />
        </li>

        <li>
          <Link onClick={() => setIsMenuClicked(false)} to='/items/baby'>
            Baby
          </Link>
          <FontAwesomeIcon className='icon' icon={faBaby} />
        </li>

      </ul>
    </nav>
  )
};


