import './BreadCrumb.scss';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ children }) {
  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">START PAGE / </Link>
        </li>{children}
      </ul>
    </div>
  );
}
