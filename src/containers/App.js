import React from 'react';
import styledComponents, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Lists from './Lists';
import List from './List';
import Form from './Form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styledComponents.div`
  text-align: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Routes>
          <Route path='/' element={<Lists />} />
          <Route path='/list/:id' element={<List />} />
          <Route path='/list/:id/new' element={<Form />} />
          <Route 
            path='*' 
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here !</p>
              </main>
            }
          />
        </Routes>
      </AppWrapper>
    </>
  );
}

export default App;
