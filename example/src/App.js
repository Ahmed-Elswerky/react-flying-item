import React from 'react'
import FlyingButton from 'react-flying-item'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      {srces().map((e, k) => (
        // fly to 50% 50% position in the duration of 2 seconds
        <FlyingButton
          key={k + 'img'}
          src={e}
          animationDuration={2}
          targetTop={'50%'}
          targetLeft={'50%'}
        >
          <img src={e} alt='' />
        </FlyingButton>
      ))}
    </div>
  )
}

export default App

function srces() {
  return [
    'https://lp2.hm.com/hmgoepprod?set=source[/ef/10/ef10d3f564ccd22a4a8c98ddd1227b86f1cb6f4e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    'https://lp2.hm.com/hmgoepprod?set=source[/50/8f/508f356497bf61b98794ad904348d4b7599284c2.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    'https://lp2.hm.com/hmgoepprod?set=source[/0c/11/0c11953d46610b828242b407b0cef80a67fa7d7c.jpg],origin[dam],category[men_blazerssuits_trousers],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]',
    'https://lp2.hm.com/hmgoepprod?set=source[/88/46/88461cf7db284306cbfd1bce7ee3901ffcdd8527.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]'
  ]
}
