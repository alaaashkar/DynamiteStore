import './GlamCampaign.scss'

import secondArticleImg from 'assets/images/Home/secondArticle/secondArticleImg.jpg'
import secondArticleImg2 from 'assets/images/Home/secondArticle/secondArticleImg2.jpg'
import secondArticleImg3 from 'assets/images/Home/secondArticle/secondArticleImg3.jpg'
import secondArticleImg4 from 'assets/images/Home/secondArticle/secondArticleImg4.jpg'

export const GlamCampaign = () => {
  return (
    <article className='glam-campaign-wrapper limited'>

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
  )
};
