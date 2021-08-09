import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import List from './components/List';
import ListLoading from './components/ListLoading';



function App() {
  const IsListLoading = ListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://restcountries.eu/rest/v2/all';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className="row">
        <div className="column">
          <div className='container'>
            <h1>Show API data</h1>
          </div>
        </div>
        <div className="column">
          <div className='repo-container'>
            <IsListLoading isLoading={appState.loading} repos={appState.repos} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <footer>
            <div className='footer'>
              By Alexander Urrego
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
}

export default App;

