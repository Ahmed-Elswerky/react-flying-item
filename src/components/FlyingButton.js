import React, { useRef } from 'react'
import styles from './FlyingButton.module.css'

export default function FlyingButton({ src, children }) {
  const flyingImage = useRef(null)
  return (
    <div>
      {/* <style>
        {`
        .flying-image {
          --target-position-x: 0px;
          --target-position-y: 0px;
        
          display: block ;
          position: fixed;
          top: var(--target-position-y);
          left: var(--target-position-x);
          width: 8rem;
          translate: -50% -50%;
          animation: fly 0.9s 1;
          border-radius: 4rem;
        }
        @keyframes fly {
          0% {
            top: var(--target-position-y);
            left: var(--target-position-x);
            opacity: 1;
          }
          100% {
            top: 5%;
            left: 5%;
            opacity: 0;
          }
        }
        `}
      </style> */}
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
        className={styles['flying-image']}
        style={{ display: 'none' }}
        ref={flyingImage}
      />
    </div>
  )
}
