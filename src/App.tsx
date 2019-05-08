import React, { useState, useEffect } from 'react';
import { Normalize } from 'styled-normalize';
import { Layout } from './ui/Layout/Layout';
import { GlobalStyle } from './ui/GlobalStyle';
import { Todo } from './Todo/Todo';
import { StarWars } from './StarWars/StarWars';
import { Divider } from './ui/Divider/Divider.style';

const App: React.FC = () => {
  const [showDelayedStarWars, setDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 3000);
  });

  return (
    <Layout>
      <Normalize />
      <GlobalStyle />

      <Todo />

      <Divider />

      <StarWars />

      {showDelayedStarWars && 
        <StarWars />
      }      
    </Layout>
  );
}

export default App;
