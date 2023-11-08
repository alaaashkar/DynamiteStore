/* eslint-disable jsx-a11y/img-redundant-alt */
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProductPage.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';
import { PuffLoader, ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



export const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const { itemId } = useParams();
  const { productsList, setCartItems, cartItems, initialCartItems } = useProducts()
  const [isColourError, setIsColourError] = useState(false)
  const [isSizeError, setIsSizeError] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const [localCartItems, setLocalCartItems] = useState(initialCartItems) //we set it as a default state so everytime the page loads the state loads with the last updated storage data otherwise it will lose its data FOURTH STEP!!!!

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(localCartItems)) //SECOND STEP!!!!
  }, [localCartItems]) //we had to add the setItem method inside a useEffect everytime the localCartItems array is updated>>>the form submits..because adding this step inside the submission process will not update the localstorage correctly because setItem is synchronous operation and the state update is asynchronous operation so asynchronous will always not finish until its operation finishes so in other words here the state might take time to update so local storage will not wait at all so it will execute immediately so useeffect is the solution here because it ensures the update when the component updates so it updates the local storage




  const foundItem = productsList.find(item => item.id === itemId)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (selectedColor !== '' && selectedSize !== '') {
      // const maxId = productsList.reduce((max, item) => (item.id > max ? item.id : max), 0)
      const newItem = {
        id: foundItem.id,
        img: foundItem.img,
        itemImg: foundItem.itemImg,
        name: foundItem.name,
        price: foundItem.price,
        size: selectedSize,
        quantity: 1,
        colour: selectedColor,
      }

      setSelectedSize('')
      setSelectedColor('')
      setShowLoader(true)

      setTimeout(() => {
        const existingItem = localCartItems.find((item) => item.id === newItem.id);
        if (existingItem) {
          // If an item with the same ID is found, increase its quantity
          existingItem.quantity++;
          setLocalCartItems([...localCartItems]); // Update the localCartItems state
        } else {
          // If not found, add the new item to the cart
          setLocalCartItems([...localCartItems, newItem]);
        }
        setShowLoader(false)

        setShowSuccessMessage(true);

        toast.success("Item added successfully!");
      }, 1000);

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


  useEffect(() => {
    setCartItems(localCartItems); //we add the end latest localCartItems array coming from the local storage to the global variable cartItems as an effect of everytime localCartItems changes ---> everytime a data is updated LAST STEP!!!!
  }, [localCartItems]);


  return (
    <>
      {/* <Breadcrumb>
        <li><Link to="">{foundItem.name}</Link></li>
      </Breadcrumb > */}
      <div className='product-page'>
        <div className='column1'>
          <Link to={foundItem.img}>
            <img src={foundItem?.img} alt="product-image" />
          </Link>
          <Link to={foundItem.itemImg}>
            <img src={foundItem?.itemImg} alt="product-preview-image" />
          </Link>
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
              <li onClick={() => setSelectedSize('xl')} className={cn('sizes-box', { "box-selected": selectedSize === 'xl' })}>XL</li>
            </ul>

            {isSizeError && (
              <font className="error-colour"> Please select a size !</font>

            )}
          </div>

          <button
            // disabled={buttonIsDisabled}
            type='submit'
            className='add-button'
            onClick={handleOnSubmit}
          >

            {showLoader ? (
              <ClipLoader color="rgba(255, 255, 255, 1)" size={15} />
            ) : (
              <>
                <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
                Add
              </>
            )}
          </button>


          {showSuccessMessage && (
            <div className="success-message">
              <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
              />
            </div>
          )}

        </form>


      </div>



      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
