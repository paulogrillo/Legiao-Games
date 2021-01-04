import MenuMoibile from '../Layout/menu/MenuMobile'
import MenuDesktop from '../Layout/menu/MenuDesktop'

import MediaQuery from 'react-responsive'

const Menu = () => (
  <div>  
    <MediaQuery minWidth={901}>
      <MenuDesktop />
    </MediaQuery>
    <MediaQuery maxWidth={900}>
          <MenuMoibile />
        </MediaQuery>
  </div>
)

export default Menu;