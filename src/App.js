import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth);
  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContainer>
          <img  src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
        </AppLoadingContainer>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar/>
            <Switch>
              <Route path="/" exact>
                  <Chat/>
              </Route>
            </Switch>
          </AppBody>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
  
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContainer = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;