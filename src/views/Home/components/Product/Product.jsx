import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'

export const Product = ({ img, name, price }) => {
  const [heartIsClicked, setHeartIsClicked] = useState(false)
  // const { ref: imageRef, inView: isVisible } = useInView()
  // 

  return (
    <>
      <div className='containerr'>
        <div className='item-wrapper'  >
          <div className='image-container  ' >
            <div >
              <img src={img} alt="item" />
            </div>

            {heartIsClicked ? (
              <FontAwesomeIcon
                onClick={() => { setHeartIsClicked(false) }}
                className='heart-icon clicked'
                icon={faHeart} size='2xl'
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => { setHeartIsClicked(true) }}
                className='heart-icon'
                icon={faHeart} size='2xl'
              />
            )}
          </div>

          <font className='animated'  >{name}</font> <br />

          <font className= 'animated'>{price}</font>
        </div>
      </div >

    </>
  );
};
