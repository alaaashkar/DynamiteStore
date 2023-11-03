import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.scss'
import { useProducts } from '../../contexts/ProductsContext';

export const Heart = ({ style, product }) => {
  const [heartIsClicked, setHeartIsClicked] = useState(false)
  const { favoriteItems, setFavoriteItems } = useProducts()

  useEffect(() => {
    const savedHeartIsClicked = localStorage.getItem(`heartIsClicked_${product.id}`);
    if (savedHeartIsClicked === 'true') {
      setHeartIsClicked(true);
    }
  }, [product.id]);

  const handlerAddToFavorites = () => {
    if (product && product.id) {
      setHeartIsClicked(true)
      const updated = [...favoriteItems, product]
      setFavoriteItems(updated)
      localStorage.setItem('favoriteItems', JSON.stringify(updated))

      localStorage.setItem(`heartIsClicked_${product.id}`, 'true');
    }
  }

  const handlerRemoveFromFavorites = () => {
    if (product && product.id) { 
      setHeartIsClicked(false)
      const updated = favoriteItems.filter(item => item.id !== product.id)
      setFavoriteItems(updated)
      localStorage.setItem('favoriteItems', JSON.stringify(updated))

      localStorage.setItem(`heartIsClicked_${product.id}`, 'false');
    }
  }

  return (

    heartIsClicked ? (
      <FontAwesomeIcon
        onClick={handlerRemoveFromFavorites}
        className={`heart-icon clicked ${style}`}
        icon={faHeart} size='2xl'
      />
    ) : (
      <FontAwesomeIcon
        onClick={handlerAddToFavorites}
        className={`heart-icon  ${style}`}
        icon={faHeart} size='2xl'
      />
    )
  )
};
