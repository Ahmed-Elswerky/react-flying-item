import React, { useState } from 'react'
import FlyingButton from 'react-flying-item'

const products = [
  {
    id: 'tote',
    name: 'Daily Carry Tote',
    price: '$84',
    category: 'Canvas essentials',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'shirt',
    name: 'Relaxed Linen Shirt',
    price: '$68',
    category: 'Summer staples',
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'trainers',
    name: 'Weekend Trainers',
    price: '$112',
    category: 'Made to move',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 'watch',
    name: 'Field Watch',
    price: '$156',
    category: 'Everyday timepiece',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85'
  }
]

const CartIcon = () => (
  <svg viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M3 4h2l2.2 10.3a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.5L20 8H7' />
    <circle cx='10' cy='20' r='1' />
    <circle cx='17' cy='20' r='1' />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox='0 0 24 24' aria-hidden='true'>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
)

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const [lastAdded, setLastAdded] = useState('')

  const addToCart = (product) => {
    setCartCount((count) => count + 1)
    setLastAdded(product.name)
  }

  return (
    <main>
      <header className='site-header'>
        <a className='brand' href='#collection' aria-label='Maison home'>
          maison<span>.</span>
        </a>
        <nav aria-label='Primary navigation'>
          <a href='#collection'>Collection</a>
          <a href='#about'>About</a>
          <a href='#journal'>Journal</a>
        </nav>
        <button
          className='cart-button'
          type='button'
          aria-label={`Cart with ${cartCount} items`}
        >
          <CartIcon />
          <span>Bag</span>
          <b>{cartCount}</b>
        </button>
      </header>

      <section className='hero' id='about'>
        <div className='hero-copy'>
          <p className='eyebrow'>The everyday edit — 2026</p>
          <h1>Objects for a life in motion.</h1>
          <p className='hero-description'>
            Thoughtful essentials with an effortless point of view. Tap any
            piece below to see the cart interaction in motion.
          </p>
          <a className='text-link' href='#collection'>
            Shop the edit <ArrowIcon />
          </a>
        </div>
        <div className='hero-visual'>
          <div className='hero-shape' />
          <img
            src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85'
            alt='A watch and eyewear arranged on a desk'
          />
          <p>Small details, considered.</p>
        </div>
      </section>

      <section className='collection' id='collection'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>Curated pieces</p>
            <h2>The new arrivals</h2>
          </div>
          <p className='cart-message' aria-live='polite'>
            {lastAdded
              ? `${lastAdded} added to your bag.`
              : 'Choose a piece to begin.'}
          </p>
        </div>
        <div className='product-grid'>
          {products.map((product) => (
            <article className='product-card' key={product.id}>
              <div className='product-image'>
                <img src={product.image} alt={product.name} />
                <span>New</span>
                <div onClick={() => addToCart(product)}>
                  <FlyingButton
                    src={product.image}
                    animationDuration={0.8}
                    targetTop='42px'
                    targetLeft='calc(100% - 44px)'
                    flyingItemStyling={{
                      borderRadius: '50%',
                      width: '72px',
                      height: '72px',
                      objectFit: 'cover'
                    }}
                  >
                    <span>
                      Add to bag <ArrowIcon />
                    </span>
                  </FlyingButton>
                </div>
              </div>
              <div className='product-details'>
                <div>
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer id='journal'>
        <p>MAISON / 2026</p>
        <p>Designed to travel well.</p>
      </footer>
    </main>
  )
}

export default App
