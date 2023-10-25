import './BreadCrumb.scss';
import { useLocation, Link } from 'react-router-dom';


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const filteredSegments = pathSegments.filter(segment => segment !== 'items');

  console.log(pathSegments);

  return (
    <div className="breadcrumb">
      <ul>
        <li><Link to="/">START PAGE</Link></li>
        {filteredSegments.map((segment, index) => (
          <li key={index}>
            <Link to={`/items/${filteredSegments.slice(0, index + 1).join('/')}`}>{`/${capitalizeFirstLetter(segment)}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
