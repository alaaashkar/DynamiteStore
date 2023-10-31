import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProductPage.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';
import { PuffLoader } from 'react-spinners';




export const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const { itemId } = useParams();
  const { productsList, setCartItems, cartItems } = useProducts()
  const [isColourError, setIsColourError] = useState(false)
  const [isSizeError, setIsSizeError] = useState(false)

  const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [] //we get the converted string back to array through parse and we give it as a value to the initialCartItems variable THIRD STEP !!!!
  const [localCartItems, setLocalCartItems] = useState(initialCartItems) //we set it as a default state so everytime the page loads the state loads with the last updated storage data otherwise it will lose its data FOURTH STEP!!!!

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(localCartItems)) //SECOND STEP!!!!
  }, [localCartItems]) //we had to add the setItem method inside a useEffect everytime the localCartItems array is updated>>>the form submits..because adding this step inside the submission process will not update the localstorage correctly because setItem is synchronous operation and the state update is asynchronous operation so asynchronous will always not finish until its operation finishes so in other words here the state might take time to update so local storage will not wait at all so it will execute immediately so useeffect is the solution here because it ensures the update when the component updates so it updates the local storage


  useEffect(() => {
    setCartItems(localCartItems); //we add the end latest localCartItems array coming from the local storage to the global variable cartItems as an effect of everytime localCartItems changes ---> everytime a data is updated LAST STEP!!!!
  }, [localCartItems]);


  const foundItem = productsList.find(item => item.id === itemId)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (selectedColor !== '' && selectedSize !== '') {
      // const maxId = productsList.reduce((max, item) => (item.id > max ? item.id : max), 0)
      const newItem = {
        id: cartItems.length + 1,
        img: foundItem.img,
        itemImg: foundItem.itemImg,
        name: foundItem.name,
        price: foundItem.price,
        size: selectedSize,
        colour: selectedColor,
      }

      setSelectedSize('')
      setSelectedColor('')
      setLocalCartItems([...localCartItems, newItem]) //we push to the array FIRST STEP!!!!
      setIsColourError(false)
    } else if (selectedColor === '') {
      setIsColourError(true)
    } else if (selectedSize === '') {
      setIsSizeError(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsColourError(false)
      setIsSizeError(false)
    }, 4000);
  }, [isColourError, selectedColor, selectedSize, isSizeError])


  return (
    <>
      {/* <Breadcrumb>
        <li><Link to="">{foundItem.name}</Link></li>
      </Breadcrumb > */}
      <div className='product-page'>
        <div className='column1'>
          <a href={foundItem.img}>
            <img src={foundItem?.img} alt="product-image" />
          </a>
          <a href={foundItem.itemImg}>
            <img src={foundItem?.itemImg} alt="product-preview-image" />
          </a>
        </div>

        <form onSubmit={handleOnSubmit} className='column2'>
          <h1 className='product-title'>{foundItem?.name}</h1>

          <font className='product-price'>{foundItem?.price}$</font>

          <div className='product-colors'>
            <div className='colours'>
              <font className="color-name">{selectedColor} Colour</font>

              {isColourError && (
                <font className="error-colour"> Please Select a Colour !</font>
              )}

            </div>
            <div className='color-circles'>
              <span onClick={() => setSelectedColor('Black')}
                className={cn('dot', { "selected-color": selectedColor === 'Black' })}>
              </span>

              <span onClick={() => setSelectedColor('Red')}
                className={cn('dot', { "selected-color": selectedColor === "Red" })}>
              </span>

              <span onClick={() => setSelectedColor('Grey')}
                className={cn('dot', { "selected-color": selectedColor === "Grey" })}>
              </span>

              <span onClick={() => setSelectedColor('Blue')} className={cn('dot', { "selected-color": selectedColor === "Blue" })}></span>
            </div>
          </div>

          <div className='product-size'>
            <div className='size-rw1'>
              <span>sizes</span>
              <span>few pieces left</span>
            </div>

            <ul className='size-rw2'>
              <li onClick={() => setSelectedSize('xs')} className={cn('sizes-box', { "box-selected": selectedSize === 'xs' })}>XS</li>
              <li onClick={() => setSelectedSize('s')} className={cn('sizes-box', { "box-selected": selectedSize === 's' })}>S</li>
              <li onClick={() => setSelectedSize('m')} className={cn('sizes-box', { "box-selected": selectedSize === 'm' })}>M</li>
              <li onClick={() => setSelectedSize('l')} className={cn('sizes-box', { "box-selected": selectedSize === 'l' })}>L</li>
              <li onClick={() => setSelectedSize('xl')} className={cn('sizes-box', { "box-selected": selectedSize === 'xl' })}>Xl</li>
            </ul>

            {isSizeError && (
              <font className="error-colour"> Please select a size !</font>

            )}
          </div>

          <button
            // disabled={buttonIsDisabled}
            type='submit'
            className='add-button'>
            <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
            Add
          </button>
        </form>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
