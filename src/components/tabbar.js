import React, { useContext } from 'react';
import styled from 'styled-components';

export const TabbarContext = React.createContext([2, () => {}]);

const tabs = [
  { name: '首页' },
  { name: '任务列表' },
  { name: '回合教学' },
  { name: '活动教学' },
  { name: '笔记' },
]

const Container = styled.div`
  position: fixed;
  height: 100px;
  bottom: -24px;
  left: 0;
  right: 0;
  border-radius: 50px 50px 0 0;
  background: ${({ theme }) => theme.tabbar.background};
  justify-content: space-around;
  display: flex;
  padding-top: 8px;
  box-sizing: border-box;
`

const Placeholder = styled.div`
  height: 84px;
`


const Tabbar = () => {
  const [activeIndex, setActiveIndex] = useContext(TabbarContext)
  return (
    <>
      <Placeholder />
      <Container>
        {tabs.map((tab, index) => (
          <TabItem
            {...tab}
            key={index}
            index={index}
            active={activeIndex === index}
            onClick={() => index === 1 || index === 2 ? setActiveIndex(index) : {}}
          />
        ))}
      </Container>
    </>
  )
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 2px;
  ${Item}.active & {
    background: ${({ theme }) => theme.tabbar.iconContainerActive.background}
  }
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-image: url(${({ theme, index, active }) => theme.tabbar.icons[index][active ? 'active' : 'default'] });
`
const Name = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.tabbar.iconName.color};
  ${Item}.active & {
    color: ${({ theme }) => theme.tabbar.iconNameActive.color};
  }
`

const TabItem = ({ name, active, index, onClick }) => (
  <Item active={active} className={active ? 'active' : ''} onClick={onClick}>
    <IconContainer>
      <Icon active={active} index={index} />
    </IconContainer>
    <Name>{name}</Name>
  </Item>
)

export default Tabbar;
