import './CategoriesSection.scss'
import manCategoriesIcon from 'assets/images/Home/categories/men.png'
import womanCategoriesIcon from 'assets/images/Home/categories/woman.jpg'
import childCategoriesIcon from 'assets/images/Home/categories/child.jpg'
import babyCategoriesIcon from 'assets/images/Home/categories/baby.jpg'
import { Category } from '../Category/Category'

export const CategoriesSection = () => {
  return (
    <section className='categories-wrapper limited'>
      <h1>Categories you may like</h1>

      <div className='categories'>
        <Category to='/items/man' img={manCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Men<br>Clothes' }} />} />
        <Category to='/items/woman' img={womanCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: 'Women<br>Clothes' }} />} />
        <Category to='/items/kids' img={childCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Child<br>Clothes' }} />} />
        <Category to='/items/baby' img={babyCategoriesIcon} text={<span dangerouslySetInnerHTML={{ __html: '\u00A0\u00A0Baby<br>Clothes' }} />} />

      </div>
    </section>
  )
};
