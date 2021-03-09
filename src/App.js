import './App.css';
import React from 'react';
import Class from './pages/class'
import List from './pages/list'
import { TabbarContext } from './components/tabbar';
import { useState } from 'react';
import taskModel from './data.json';


const pages = {
  1: <List taskModel={taskModel} />,
  2: <Class taskModel={taskModel} />
}


function App() {
  const tabState = useState(2);
  return (
    <TabbarContext.Provider value={tabState}>
      {pages[tabState[0]]}
    </TabbarContext.Provider>
  );
}

export default App;
