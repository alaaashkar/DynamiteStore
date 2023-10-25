import './BreadCrumb.scss';
import { useLocation, Link } from 'react-router-dom';


export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  console.log(pathSegments);

  return (
    <div className="breadcrumb">
      <ul>
        <li><Link to="/">Home</Link></li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>{`/${segment}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
