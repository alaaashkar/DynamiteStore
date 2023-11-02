import './Favorites.scss'
import { PuffLoader } from 'react-spinners';


export const Favorites = () => {
  return (
    <>
      <div className='container limited-wider'>
        <h1 className='cart-title'>FAVORITES</h1>




      </div><div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
