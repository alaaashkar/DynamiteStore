import { Button } from 'components/Button/Button';
import './FlowCampaign.scss'
import flowImage from 'assets/images/Home/lastArticle/img.jpg'

export const FlowCampaign = () => {
  return (
    <article className='flow-campaign limited'>
      <div className='image-container'>
        <img src={flowImage} alt="flow" />
      </div>
      <h1 className='playing-images-title flow-title'>Flow</h1>
      {/* <BuyButton /> */}
      <font>Power up your workouts with new Move pieces.</font>
      <Button text={'Take a tour'} />
    </article>
  );
};
