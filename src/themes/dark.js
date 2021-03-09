import icon1 from '../images/tab1-light.png';
import icon1A from '../images/tab1-light.png';
import icon2 from '../images/tab2-light.png';
import icon2A from '../images/tab2-light.png';
import icon3 from '../images/tab3-dark-active.png';
import icon3A from '../images/tab3-dark-active.png';
import icon4 from '../images/tab4-light.png';
import icon4A from '../images/tab4-light.png';
import icon5 from '../images/tab5-light.png';
import icon5A from '../images/tab5-light.png';

const dark = {
  page: {
    background: '#122235 linear-gradient(to bottom, rgba(51, 187, 206, 0.11), rgba(33, 45, 58, 0.11))',
  },
  // tabbarIcon1: tabbarIcon1,
  tabbar: {
    background: '#15273C',
    iconContainerActive: {
      background: '#A7E744'
    },
    iconName: {
      color: '#fff'
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

export default dark;