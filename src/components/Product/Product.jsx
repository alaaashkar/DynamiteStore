import './Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'

export const Product = ({ img, name, price }) => {
  const [heartIsClicked, setHeartIsClicked] = useState(false)
  const { ref: imageRef, inView: isVisible } = useInView()


  return (
    <>

      <div className='item-wrapper' ref={imageRef} >
        <div className='image-container  ' >
          <div >
            <img className={`${isVisible ? 'animated' : ''}`} src={img} alt="item" />
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

        <font className={`${isVisible ? 'animated' : ''}`} >{name}</font> <br />

        <font className={`${isVisible ? 'animated' : ''}`}>{price}</font>
      </div>






    </>
  );
};
