import React, { useRef } from 'react'
import styles from './FlyingButton.module.css'

export default function FlyingButton({ src, children }) {
  const flyingImage = useRef(null)
  return (
    <div>
      <button
        onClick={(e) => {
          flyingImage.current.style.setProperty(
            '--target-position-x',
            e.clientX + 'px'
          )
          flyingImage.current.style.setProperty(
            '--target-position-y',
            e.clientY + 'px'
          )
          flyingImage.current.style.setProperty('display', '')
          flyingImage.current.src = src
          setTimeout(
            () => flyingImage.current.style.setProperty('display', 'none'),
            800
          )
        }}
      >
        {children}
      </button>
      <img
        src=''
        alt=''
        className={styles.flying_image}
        style={{ display: 'none' }}
        ref={flyingImage}
      />
    </div>
  )
}
