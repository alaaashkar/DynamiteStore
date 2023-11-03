import { useEffect } from 'react';
import './SideBar.scss'
import { useProducts } from 'contexts/ProductsContext';

const SideBar = () => {
  const { productsList } = useProducts()

  const menItems = productsList.filter(item => item.sex === 'M')
  const sixMenItems = menItems.slice(0, 6)

  const womenItems = productsList.filter(item => item.sex === 'F')
  const sixWomenItems = womenItems.slice(0, 6)

  const kidsItems = productsList.filter(item => item.sex === 'C')
  const sixKidsItems = kidsItems.slice(0, 6)


  const babyItems = productsList.filter(item => item.sex === 'B')
  const sixBabyItems = babyItems.slice(0, 6)

  return (
    <div className='sidebar'>
      <ul>
        <li className='category-txt' >
          For Men
        </li>

        {sixMenItems.map(item => (
          <li key={item.id}>
            <a style={{ textDecoration: "none" }} href={`/product-page/${item.id}`}> {item.name}</a>
          </li>
        ))}

        <li className='category-txt'>
          For Women
        </li>

        {sixWomenItems.map(item => (
          <li key={item.id}>
            <a style={{ textDecoration: "none" }} href={`/product-page/${item.id}`}> {item.name}</a>
          </li>
        ))}


        <li className='category-txt' >
          For Kids
        </li>

        {sixKidsItems.map(item => (
          <li key={item.id}>
            <a style={{ textDecoration: "none" }} href={`/product-page/${item.id}`}> {item.name}</a>
          </li>
        ))}


        <li className='category-txt'>
          For Babies
        </li>

        {sixBabyItems.map(item => (
          <li key={item.id}>
            <a style={{ textDecoration: "none" }} href={`/product-page/${item.id}`}> {item.name}</a>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default SideBar;
