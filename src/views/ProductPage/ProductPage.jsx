import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProductPage.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext';
import { PuffLoader } from 'react-spinners';



export const ProductPage = () => {
  const [item, setItem] = useState(null)
  const [selectedColor, setSelectedColor] = useState('Black')
  const [boxSelected, setBoxSelected] = useState('')
  const { itemId } = useParams();
  const { womenProducts } = useProducts()


  const foundItem = womenProducts.find(item => item.id === itemId);

  console.log(foundItem);

  useEffect(() => {
    setItem(foundItem);
  }, [foundItem, womenProducts]); // Include 'itemId' as the only dependency

  return (
    <>
      {/* <Breadcrumb>
        <li><Link to="">{foundItem.name}</Link></li>
      </Breadcrumb > */}
      <div className='product-page'>
        <div className='column1'>
          <img src={foundItem?.img} alt="" />
          <img src={foundItem?.itemImg} alt="" />
        </div>
        <div className='column2'>
          <h1 className='product-title'>{foundItem?.name}</h1>

          <font className='product-price'>{foundItem?.price}$</font>

          <div className='product-colors'>
            <font className="color-name">{selectedColor} color</font>
            <div className='color-circles'>
              <span onClick={() => setSelectedColor('Black')} className={cn('dot', { "selected-color": selectedColor === 'Black' })}></span>
              <span onClick={() => setSelectedColor('Red')} className={cn('dot', { "selected-color": selectedColor === "Red" })}></span>
              <span onClick={() => setSelectedColor('Grey')} className={cn('dot', { "selected-color": selectedColor === "Grey" })}></span>
              <span onClick={() => setSelectedColor('Blue')} className={cn('dot', { "selected-color": selectedColor === "Blue" })}></span>
            </div>
          </div>

          <div className='product-size'>
            <div className='size-rw1'>
              <span>sizes</span>
              <span>few pieces left</span>
            </div>

            <ul className='size-rw2'>
              <li onClick={() => setBoxSelected('xs')} className={cn('sizes-box', { "box-selected": boxSelected === 'xs' })}>XS</li>
              <li onClick={() => setBoxSelected('s')} className={cn('sizes-box', { "box-selected": boxSelected === 's' })}>S</li>
              <li onClick={() => setBoxSelected('m')} className={cn('sizes-box', { "box-selected": boxSelected === 'm' })}>M</li>
              <li onClick={() => setBoxSelected('l')} className={cn('sizes-box', { "box-selected": boxSelected === 'l' })}>L</li>
              <li onClick={() => setBoxSelected('xl')} className={cn('sizes-box', { "box-selected": boxSelected === 'xl' })}>Xl</li>
            </ul>
          </div>

          <button className='add-button'>
            <ShoppingBagOutlinedIcon style={{ marginRight: '8px' }} />
            Add
          </button>
        </div>
      </div>

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
