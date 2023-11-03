/* eslint-disable jsx-a11y/img-redundant-alt */
import './Favorites.scss'
import { PuffLoader, ClipLoader } from 'react-spinners';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useProducts } from '../../contexts/ProductsContext';
import { Button } from '../../components/Button/Button';


export const Favorites = () => {
  const { favoriteItems, setFavoriteItems, cartItems, setCartItems } = useProducts()

  const handleOnSubmit = (event, item) => {
    event.preventDefault()

    const updatedCartItems = [...cartItems, item]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    setCartItems(updatedCartItems)


    const updated = favoriteItems.filter(product => product.id !== item.id)
    setFavoriteItems(updated)
    localStorage.setItem('favoriteItems', JSON.stringify(updated))
  }


  const handlerDeleteItem = (item) => {
    const updatedItems = favoriteItems.filter(product => product.id !== item.id)
    setFavoriteItems(updatedItems); //update UI
    localStorage.setItem('favoriteItems', JSON.stringify(updatedItems)) //update localStorage

    localStorage.setItem(`heartIsClicked_${item.id}`, 'false');
  }

  return (
    <>
      <div className='container limited-wider'>
        <h1 className='cart-title'>FAVORITES</h1>
        <div className='fav-item-wrapper'>
          {favoriteItems.length === 0 ? (
            <>
              <div className='empty-fav-wrapper'>
                <h4>SAVE THE PRODUCTS YOU LIKE</h4>

                <font className='fav-item-description'>Would you like us to keep your favorite pieces? Press the heart icon on the products and the products you selected will appear here too.
                </font>

                <Button to='/' text={'CHECK IT OUT'} buttonStyle={'loadMore favorite'} />
              </div>
            </>
          ) : (
            favoriteItems.map(item => (
              <div className='fav-item-container'>
                <div className='image-wrapper'>
                  <a href={`/product-page/${item.id}`}>
                    <img src={item.img} alt="product-image" />
                  </a>

                  <svg className='delete-icon' onClick={() => handlerDeleteItem(item)} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class=""><path d="M6.229 1.229C6.105 1.352 6 1.577 6 2H5c0-.577.145-1.102.521-1.479C5.898.145 6.423 0 7 0h2c.577 0 1.102.145 1.479.521C10.855.898 11 1.423 11 2h-1c0-.423-.105-.648-.229-.771C9.648 1.105 9.423 1 9 1H7c-.423 0-.648.105-.771.229ZM1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM12 15c.423 0 .648-.105.771-.229.124-.123.229-.348.229-.771V5h1v9c0 .577-.145 1.102-.521 1.479-.377.376-.902.521-1.479.521H4c-.577 0-1.102-.145-1.479-.521C2.145 15.102 2 14.577 2 14V5h1v9c0 .423.105.648.229.771.123.124.348.229.771.229h8ZM14.5 5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1Z M6 11.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0ZM9 8.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0Z"></path></svg>
                </div>
                  <a className='fav-item-name' href={`/product-page/${item.id}`}>{item.name}</a>

                  <font href="/">{item.price} $</font>

                  <font>New Product</font>

                  <font className="color-text">Colour: &nbsp; <span>{item.colour}</span></font>


                <button
                  // disabled={buttonIsDisabled}
                  type='submit'
                  className='add-button fav-add-button'
                  onClick={(event) => handleOnSubmit(event, item)}
                >
                  <>
                    <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
                    Add
                  </>
                </button>
              </div>
            ))
          )}
        </div>

      </div><div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
