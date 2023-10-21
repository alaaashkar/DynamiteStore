import './Home.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import 'react-typist/dist/Typist.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';
import { PuffLoader } from 'react-spinners';
import { Products } from '../Products/Products';
import Carousel from 'react-elastic-carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img5 from '../../assets/images/img5.jpg';
import { WelcomeImages } from '../WelcomeImages/WelcomeImages';
import { useProducts } from '../../contexts/ProductsContext';
import getItems from '../../services/items';
import manCategoriesIcon from '../../assets/images/categories/men.png'
import womanCategoriesIcon from '../../assets/images/categories/woman.jpg'
import childCategoriesIcon from '../../assets/images/categories/child.jpg'
import babyCategoriesIcon from '../../assets/images/categories/baby.jpg'
import { Category } from '../Category/Category';
import secondArticleImg from '../../assets/images/secondArticleImg.jpg'
import secondArticleImg2 from '../../assets/images/secondArticleImg2.jpg'
import secondArticleImg3 from '../../assets/images/secondArticleImg3.jpg'
import secondArticleImg4 from '../../assets/images/secondArticleImg4.jpg'
import thirdArticleImg from '../../assets/images/thirdArticleImg.jpg'


export const Home = () => {
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);
  const [isTypingCompleted2, setIsTypingCompleted2] = useState(false);
  const [buttonClicked, setButtonClicked] = useState('woman');
  const { productsList, setProductsList } = useProducts()


  const filteredProducts = useMemo(() => {
    return productsList.filter(product => {
      if (buttonClicked === 'woman') {
        return product.sex === 'F';
      } else if (buttonClicked === 'male') {
        return product.sex === 'M';
      } else if (buttonClicked === 'child') {
        return product.sex === 'C';
      } else if (buttonClicked === 'baby') {
        return product.sex === 'B';
      }
      return true;
    });
  }, [buttonClicked, productsList]);

  const handleTypingComplete = () => {
    setIsTypingCompleted(true);
  };

  const handleTypingComplete2 = () => {
    setIsTypingCompleted2(true);
  };


  // useEffect(() => {
  //   getItems()
  //     .then(result => {
  //       setProductsList(result); // Automatically set to response.data due to interceptor
  //       console.log(result);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, [setProductsList]);


  return (
    <>
      <div className='container home-page '>
        <nav className='home-page__nav'>

          <ul>
            <li>
              <Link>
                Woman
              </Link>
              <FontAwesomeIcon className='icon' icon={faVenus} />
            </li>

            <li>
              <Link>
                Male
              </Link>
              <FontAwesomeIcon className='icon' icon={faMars} />
            </li>

            <li>
              <Link>
                Child
              </Link>
              <FontAwesomeIcon className='icon' icon={faChild} />
            </li>

            <li>
              <Link>
                Baby
              </Link>
              <FontAwesomeIcon className='icon' icon={faBaby} />
            </li>

          </ul>
        </nav>

        <section className='home-page__description'>
          <ul>
            <li>
              <TypingAnimation text={'Delivery time: 3-5 business days'} onTypingDone={handleTypingComplete} />
            </li>

            {isTypingCompleted && (
              <li>
                <TypingAnimation text={'Become a DYNAMITE Member and get 10% discount!'} onTypingDone={handleTypingComplete2} />
              </li>
            )}

            {isTypingCompleted2 && (
              <li>
                <TypingAnimation text={'Download our app'} />
              </li>
            )}

          </ul>

          <Carousel className='home-carousel' showArrows={false} enableAutoPlay={true} autoPlaySpeed={3000} pagination={false} transitionMs={1500} enableMouseSwipe={false} >
            <WelcomeImages img={img1} title={'unusual beige'} />
            <WelcomeImages img={img2} title={'rabanne jersey'} />
            <WelcomeImages img={img5} title={'mohair blend'} />
          </Carousel>
        </section>

        <section className='new-products'>
          <h1>New Products</h1>

          <ul>
            <li>
              <button
                onClick={() => setButtonClicked('woman')}
                className={cn('', { 'clicked': buttonClicked === 'woman' })}>
                Woman
              </button>
            </li>

            <li>
              <button
                onClick={() => setButtonClicked('male')}
                className={cn('', { 'clicked': buttonClicked === 'male' })}>
                Male
              </button>
            </li>

            <li>
              <button
                onClick={() => setButtonClicked('child')}
                className={cn('', { 'clicked': buttonClicked === 'child' })}>
                Child
              </button>
            </li>

            <li>
              <button
                onClick={() => setButtonClicked('baby')}
                className={cn('', { 'clicked': buttonClicked === 'baby' })}>
                Baby
              </button>
            </li>
          </ul>

          <Products filteredProducts={filteredProducts} />

        </section>

        <article className='halloween-ad'>
          <div className='halloween-background-img'>
            <h1 className='halloween-ad-title'>Get ready for Halloween</h1>
            <font className='halloween-ad-description1'>Order now to get your Halloween look just in time! </font> <br />
            <font className='halloween-ad-description2' > Whether you celebrate at home or with your closest friends, there is something to suit you. Make your choice!</font>


          </div>

        </article >

        <section className='categories-wrapper'>
          <h1>Categories you may like</h1>

          <div className='categories'>
            <Category img={manCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Men<br>Clothes' }} />} />
            <Category img={womanCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: 'Women<br>Clothes' }} />} />
            <Category img={childCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Child<br>Clothes' }} />} />
            <Category img={babyCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Baby<br>Clothes' }} />} />

          </div>
        </section>

        <article className='second-article-wrapper'>

          <div>
            <img src={secondArticleImg} alt="second-article" className='second-article-img' />
            <h1 className="playing-images-title ">Glam </h1>
          </div>

          <div>
            <img src={secondArticleImg3} alt="second-article" className='second-article-img' />
            <h1 className="playing-images-title"> up </h1>
          </div>

          <div>
            <img src={secondArticleImg2} alt="second-article" className='second-article-img' />
            <h1 className="playing-images-title"> your </h1>
          </div>

          <div>
            <img src={secondArticleImg4} alt="second-article" className='second-article-img' />
            <h1 className="playing-images-title ">walls</h1>
          </div>

        </article>

        <article className='third-article-wrapper'>
          <img src={thirdArticleImg} alt="" />
          <h1 className='playing-images-title'>Elevate Your Style with DYNAM|TE</h1>
          <button className="playing-images-button">buy now</button>
        </article>
      </div >

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>

  )
};
