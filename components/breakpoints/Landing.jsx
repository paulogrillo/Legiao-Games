import LandingMobile from '../Layout/landing/LandingMobile'

import LandingDesktop from '../Layout/landing/LandingDesktop'


import MediaQuery from 'react-responsive'

const Menu = () => (
  <div >  
    <MediaQuery minWidth={901}>
      <LandingDesktop />
    </MediaQuery>
    <MediaQuery maxWidth={900}>
          <LandingMobile />
        </MediaQuery>
  </div>
)

export default Menu;