import React from 'react';

import Title from './components/Title'
import List from './components/List'

class App extends React.Component {
  render(){
    return (
      <div className="text-center">
        <Title />
        <List />
      </div>
    )
  }
}

export default App;
