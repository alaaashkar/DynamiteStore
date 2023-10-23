import { useState } from 'react';
import './WelcomeSection.scss';
import { WelcomeImages } from '../WelcomeImages/WelcomeImages';
import img1 from 'assets/images/Home/welcomeImages/img1.jpg'
import img2 from 'assets/images/Home/welcomeImages/img2.jpg'
import img5 from 'assets/images/Home/welcomeImages/img5.jpg'
import Carousel from 'react-elastic-carousel';
import TypingAnimation from '../TypingAnimation/TypingAnimation';


export const WelcomeSection = () => {
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);
  const [isTypingCompleted2, setIsTypingCompleted2] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingCompleted(true);
  };


  const handleTypingComplete2 = () => {
    setIsTypingCompleted2(true);
  }

  return (
    <section className='welcome-page-description limited' >
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

      <Carousel
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        pagination={false}
        transitionMs={1500}
        enableMouseSwipe={false}
        enableSwipe={false}
      >

        <WelcomeImages img={img2} title={'rabanne jersey'} />
        <WelcomeImages img={img1} title={'unusual beige'} />
        <WelcomeImages img={img5} title={'mohair blend'} />
      </Carousel>
    </section >
  )
}