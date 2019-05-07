import React from 'react';
import { Normalize } from 'styled-normalize';
import { Layout } from './ui/Layout/Layout';
import { GlobalStyle } from './ui/GlobalStyle';
import { Todo } from './Todo/Todo';

const App: React.FC = () => {
  return (
    <Layout>
      <Normalize />
      <GlobalStyle />

      <Todo />
    </Layout>
  );
}

export default App;
