import icon1 from '../images/tab1-dark.png';
import icon1A from '../images/tab1-dark.png';
import icon2 from '../images/tab2-dark.png';
import icon2A from '../images/tab2-dark.png';
import icon3 from '../images/tab3-dark.png';
import icon3A from '../images/tab3-dark.png';
import icon4 from '../images/tab4-dark.png';
import icon4A from '../images/tab4-dark.png';
import icon5 from '../images/tab5-dark.png';
import icon5A from '../images/tab5-dark.png';

const light = {
  page: {
    background: '#f9f9f9',
  },
  // tabbarIcon1: tabbarIcon1,
  tabbar: {
    background: '#FFFFFF',
    iconContainerActive: {
      background: '#AAF339'
    },
    iconName: {
      color: '#000'
    },
    iconNameActive: {
      color: '#A7E744'
    },
    icons: [
      { default: icon1, active: icon1A },
      { default: icon2, active: icon2A },
      { default: icon3, active: icon3A },
      { default: icon4, active: icon4A },
      { default: icon5, active: icon5A },
    ]
  }
}

export default light;