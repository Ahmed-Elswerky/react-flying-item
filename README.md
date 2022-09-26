# react-flying-item

> Npm Library to make the selected item image seem to fly to top left corner (e.g: fly to cart icon)

[![NPM](https://img.shields.io/npm/v/react-flying-item.svg)](https://www.npmjs.com/package/react-flying-item) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> [Demo CodePen](https://codepen.io/Ahmed_Elswerky/pen/YzLEQGj)

![Example Gif](./ex.gif)

## Install

```bash
npm install --save react-flying-item
```

## Customizable values props

| Field Name        | Type     | Required/Optional | Default value                           |
| ----------------- | -------- | ----------------- | --------------------------------------- |
| targetTop         | `String` | Optional          | '5%'                                    |
| targetLeft        | `String` | Optional          | '5%'                                    |
| customAnimation   | `String` | Optional          | ''     (e.g: 20%{translate:80% 80%;})   |
| animationDuration | `Int`    | Optional          | 0.9                                     |
| flyingItemStyling | `Object` | Optional          | { borderRadius: '4rem', width: '8rem' } |

## Main Behavior Points

- Animation period is 900 ms
- Animation ends with Opacity 0
- Position is Fixed and values of top and left are reset from [event mouse clientX,clientY] to 5%,5%

## Usage

```jsx
import React from 'react'
import FlyingButton from 'react-flying-item'

const App = () => {
  return (
    <div>
      <img src='[src-url]]' alt='' />
      <FlyingButton src='[src-url]'>fly</FlyingButton>
    </div>
  )
}

export default App
```

## License

MIT © [Ahmed-Elswerky](https://github.com/Ahmed-Elswerky)
