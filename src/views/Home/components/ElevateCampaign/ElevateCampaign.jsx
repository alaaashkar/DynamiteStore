import './ElevateCampaign.scss'
import thirdArticleImg from 'assets/images/Home/thirdArticle/thirdArticleImg.jpg'
import { Button } from 'components/Button/Button';

import React from "react";

export const ElevateCampaign = () => {
  return (
    <article className='elevate-campaign limited'>
      <img src={thirdArticleImg} alt="" />
      <h1 className='playing-images-title'>Elevate Your Style with DYNAM|TE</h1>
      <Button text={'buy now'} />
    </article>
  )
};
