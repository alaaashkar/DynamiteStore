import './Product.scss';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { Heart } from '../../../../components/Heart/Heart';

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

            <Heart/>
          </div>

          <font className='animated'  >{name}</font> <br />

          <font className= 'animated'>{price}$</font>
        </div>
      </div >

    </>
  );
};
