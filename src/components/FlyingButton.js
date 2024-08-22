
      e.clientY + 'px'
    )
    flyingImage.current.style.setProperty('display', '')
    flyingImage.current.src = src
    setTimeout(
      () => flyingImage.current.style.setProperty('display', 'none'),
      animationDuration * 1000 - 100
    )
  }

  const customStyling = `
    .flying_image {
      --target-position-x: 0px;
      --target-position-y: 0px;
    
      display: block;
      position: fixed;
      top: var(--target-position-y);
      left: var(--target-position-x);
      translate: -50% -50%;
      animation: fly ${animationDuration}s 1;
    }
    @keyframes fly {
      0% {
        top: var(--target-position-y);
        left: var(--target-position-x);
        opacity: 1;
      }
      ${customAnimation}
      100% {
        top: ${targetTop};
        left: ${targetLeft};
        opacity: 0;
      }
    }
  `

  return (
    <div>
      <style>{customStyling}</style>
      <button onClick={(e) => initFlight(e)}>{children}</button>
      <img
        src=''
        alt=''
        className='flying_image'
        style={{
          display: 'none',
          ...DEFAULT_ITEM_STYLING,
          ...flyingItemStyling
        }}
        ref={flyingImage}
      />
    </div>
  )
}
