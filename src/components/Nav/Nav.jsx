import './Nav.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from 'contexts/MenuContext';

export const Nav = () => {
  const { isMenuClicked } = useMenu()


  return (


    <nav>
      <ul className={cn(
        '',
        { 'mobile-show': isMenuClicked },
        { 'mobile-hide': !isMenuClicked }
      )}>
        <li>
          <a href='/woman'>
            Woman
          </a>
          <FontAwesomeIcon className='icon' icon={faVenus} />
        </li>

        <li>
          <Link>
            Male
          </Link>
          <FontAwesomeIcon className='icon' icon={faMars} />
        </li>

        <li>
          <Link>
            Child
          </Link>
          <FontAwesomeIcon className='icon' icon={faChild} />
        </li>

        <li>
          <Link>
            Baby
          </Link>
          <FontAwesomeIcon className='icon' icon={faBaby} />
        </li>

      </ul>
    </nav>
  )
};
