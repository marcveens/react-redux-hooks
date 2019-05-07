import React from 'react';
import { Normalize } from 'styled-normalize';
import { Layout } from './ui/Layout/Layout';
import { GlobalStyle } from './ui/GlobalStyle';
import { Todo } from './Todo/Todo';
import { StarWars } from './StarWars/StarWars';
import { Divider } from './ui/Divider/Divider.style';

const App: React.FC = () => {
  return (
    <Layout>
      <Normalize />
      <GlobalStyle />

      <Todo />

      <Divider />

      <StarWars />
    </Layout>
  );
}

export default App;
