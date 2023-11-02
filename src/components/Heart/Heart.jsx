import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.scss'

export const Heart = () => {
  const [heartIsClicked, setHeartIsClicked] = useState(false)
  return (

    heartIsClicked ? (
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
    )
  )
};
