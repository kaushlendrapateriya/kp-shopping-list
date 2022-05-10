import React from 'react';
import styledComponents, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Lists from './Lists';
import List from './List';
import Form from './Form';
import ListsContextProvider, { ListsContext } from '../context/ListsContextProvider';
import ItemsContextProvider, { ItemsContext } from '../context/ItemsContextProvider';

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
        <ListsContextProvider>
          <ItemsContextProvider>
            <ListsContext.Consumer>
              {({ lists }) => (
                <ItemsContext.Consumer>
                  {({ items }) => (
                    <Routes>
                      <Route path='/' 
                        element={lists && <Lists lists={lists} />} 
                      />    
                      <Route path='/list/:id' 
                        element={lists && items && <List lists={lists} listItems={items} />} />
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
                  )}
                </ItemsContext.Consumer>
                
              )}
            </ListsContext.Consumer>
          </ItemsContextProvider>
          
          
        </ListsContextProvider>        
      </AppWrapper>
    </>
  );
}

export default App;
