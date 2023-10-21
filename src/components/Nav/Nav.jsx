import './Nav.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  return (
    <nav>

      <ul>
        <li>
          <Link>
            Woman
          </Link>
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
