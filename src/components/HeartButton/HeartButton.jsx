import { useEffect, useState } from 'react';
import './HeartButton.scss'
import { useProducts } from '../../contexts/ProductsContext';

export const HeartButton = ({ item }) => {
  const [buttonIsClicked, setButtonIsClicked] = useState(false)
  const { favoriteItems, setFavoriteItems } = useProducts()

  const handlerAddToFavorites = () => {
    if (item && item.id) {
      setButtonIsClicked(true)
      const updated = [...favoriteItems, item]
      setFavoriteItems(updated)
      localStorage.setItem('favoriteItems', JSON.stringify(updated))

      localStorage.setItem(`heartIsClicked_${item.id}`, 'true');
    }
  }

  const handlerRemoveFromFavorites = () => {
    if (item && item.id) {
      setButtonIsClicked(false)
      const updated = favoriteItems.filter(product => product.id !== item.id)
      setFavoriteItems(updated)
      localStorage.setItem('favoriteItems', JSON.stringify(updated))

      localStorage.setItem(`heartIsClicked_${item.id}`, 'false')
    }
  }

  useEffect(() => {
    const savedHeartIsClicked = localStorage.getItem(`heartIsClicked_${item.id}`);
    if (savedHeartIsClicked === 'true') {
      setButtonIsClicked(true);
    }
  }, [item.id]);

  return (
    buttonIsClicked ? (
      < button onClick={handlerRemoveFromFavorites} className='heart-icon-fav button-clicked' class="b395d2 fe373a dfc6c7 Actions-module--moveButton__1FKUc " type="button" ><span class="fda0bc"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class=""><path fill="#fff" d="M8 4.12C7.479 2.82 6.019 1.5 4.5 1.5c-2.478 0-4 1.45-4 3.931C.5 8.707 8 14.5 8 14.5s7.5-5.793 7.5-9.07c0-2.48-1.522-3.93-4-3.93-1.52 0-2.979 1.32-3.5 2.62Z"></path><path d="M1.222 2.177C2.027 1.392 3.164 1 4.5 1c.903 0 1.754.39 2.435.931.412.327.776.72 1.065 1.144A5.275 5.275 0 0 1 9.064 1.93C9.745 1.39 10.596 1 11.5 1c1.336 0 2.473.392 3.278 1.177.807.787 1.222 1.91 1.222 3.254 0 .982-.55 2.068-1.262 3.086-.728 1.038-1.689 2.093-2.636 3.032a45.56 45.56 0 0 1-3.709 3.278l-.064.05-.017.014-.006.004L8 14.5l-.306.396-.006-.005-.017-.013-.064-.05a45.453 45.453 0 0 1-1.101-.902c-.71-.6-1.658-1.436-2.608-2.377-.947-.939-1.908-1.994-2.636-3.032C.55 7.499 0 6.413 0 5.43c0-1.344.415-2.467 1.222-3.254ZM8 14.5l-.306.396c.18.139.432.138.612 0L8 14.5Zm0-.638.01-.007a44.575 44.575 0 0 0 3.389-3.016c.927-.92 1.84-1.927 2.52-2.896C14.612 6.953 15 6.086 15 5.431c0-1.137-.346-1.979-.92-2.538C13.505 2.333 12.642 2 11.5 2c-.617 0-1.255.27-1.814.714-.558.444-.996 1.03-1.222 1.593a.5.5 0 0 1-.928 0c-.226-.563-.665-1.15-1.223-1.593C5.754 2.27 5.116 2 4.5 2c-1.142 0-2.005.333-2.58.893-.574.56-.92 1.401-.92 2.538 0 .655.388 1.523 1.081 2.512.68.97 1.593 1.977 2.52 2.896a44.576 44.576 0 0 0 3.39 3.016l.009.007Z"></path></svg></span><span class="d86975"></span>
      </button >
    ) : (
      < button onClick={handlerAddToFavorites} className='heart-icon-fav' class="b395d2 fe373a dfc6c7 Actions-module--moveButton__1FKUc " type="button" ><span class="fda0bc"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class=""><path fill="#fff" d="M8 4.12C7.479 2.82 6.019 1.5 4.5 1.5c-2.478 0-4 1.45-4 3.931C.5 8.707 8 14.5 8 14.5s7.5-5.793 7.5-9.07c0-2.48-1.522-3.93-4-3.93-1.52 0-2.979 1.32-3.5 2.62Z"></path><path d="M1.222 2.177C2.027 1.392 3.164 1 4.5 1c.903 0 1.754.39 2.435.931.412.327.776.72 1.065 1.144A5.275 5.275 0 0 1 9.064 1.93C9.745 1.39 10.596 1 11.5 1c1.336 0 2.473.392 3.278 1.177.807.787 1.222 1.91 1.222 3.254 0 .982-.55 2.068-1.262 3.086-.728 1.038-1.689 2.093-2.636 3.032a45.56 45.56 0 0 1-3.709 3.278l-.064.05-.017.014-.006.004L8 14.5l-.306.396-.006-.005-.017-.013-.064-.05a45.453 45.453 0 0 1-1.101-.902c-.71-.6-1.658-1.436-2.608-2.377-.947-.939-1.908-1.994-2.636-3.032C.55 7.499 0 6.413 0 5.43c0-1.344.415-2.467 1.222-3.254ZM8 14.5l-.306.396c.18.139.432.138.612 0L8 14.5Zm0-.638.01-.007a44.575 44.575 0 0 0 3.389-3.016c.927-.92 1.84-1.927 2.52-2.896C14.612 6.953 15 6.086 15 5.431c0-1.137-.346-1.979-.92-2.538C13.505 2.333 12.642 2 11.5 2c-.617 0-1.255.27-1.814.714-.558.444-.996 1.03-1.222 1.593a.5.5 0 0 1-.928 0c-.226-.563-.665-1.15-1.223-1.593C5.754 2.27 5.116 2 4.5 2c-1.142 0-2.005.333-2.58.893-.574.56-.92 1.401-.92 2.538 0 .655.388 1.523 1.081 2.512.68.97 1.593 1.977 2.52 2.896a44.576 44.576 0 0 0 3.39 3.016l.009.007Z"></path></svg></span><span class="d86975"></span>
      </button >
    )

  )
};
