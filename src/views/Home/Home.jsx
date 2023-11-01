import './Home.scss';
import 'react-typist/dist/Typist.css';
import { PuffLoader } from 'react-spinners';
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection';
import { NewProductsSection } from './components/NewProductsSection/NewProductsSection';
import { Ad } from './components/Ad/Ad';
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection';
import { GlamCampaign } from './components/GlamCampaign/GlamCampaign';
import { ElevateCampaign } from './components/ElevateCampaign/ElevateCampaign';
import { FlowCampaign } from './components/FlowCampaign/FlowCampaign';
import { Magazine } from './components/Magazine/Magazine';
import Breadcrumb from '../../components/BreadCrumb/BreadCrumb';

export const Home = () => {
  return (
    <>


      <div className='container home-page '>
        <WelcomeSection />

        <NewProductsSection />

        <Ad
          adClass={'halloween-ad limited'}
          titleStyle={'halloween-ad-title'}
          title={'Get ready for Halloween'}
          firstDescription={'Order now to get your Halloween look just in time!'}
          secondDescription={'Whether you celebrate at home or with your closest friends, there is something to suit you. Make your choice!'}
        />

        <CategoriesSection />

        <GlamCampaign />

        <ElevateCampaign />

        <Ad
          adClass={'discount-ad limited'}
          title={'Would you like a 10% discount? Sign up today 😍'}
          titleStyle={'discount-ad-title'}
          firstDescription={'Join now to enjoy special offers, deals and more.'}
        >

        </Ad >

        <FlowCampaign />

        {/* <Magazine /> */}

      </div >

      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  )
};
